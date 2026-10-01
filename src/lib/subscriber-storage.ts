import fs from "fs";
import path from "path";

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  source: string;
  status: "active" | "unsubscribed";
}

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "subscribers.json");

export function getStoredSubscribers(): Subscriber[] {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      fs.writeFileSync(DATA_FILE_PATH, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const data = fs.readFileSync(DATA_FILE_PATH, "utf-8");
    return JSON.parse(data) as Subscriber[];
  } catch (error) {
    console.error("Error reading subscribers.json:", error);
    return [];
  }
}

export function saveStoredSubscribers(subscribers: Subscriber[]): boolean {
  try {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(subscribers, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing subscribers.json:", error);
    return false;
  }
}

export function addSubscriber(email: string, source: string = "Blog Hub Newsletter"): { success: boolean; message: string; subscriber?: Subscriber; alreadyExists?: boolean } {
  const normalizedEmail = email.trim().toLowerCase();

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(normalizedEmail)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const subscribers = getStoredSubscribers();
  const existing = subscribers.find((s) => s.email.toLowerCase() === normalizedEmail);

  if (existing) {
    if (existing.status === "unsubscribed") {
      existing.status = "active";
      existing.subscribedAt = new Date().toISOString();
      saveStoredSubscribers(subscribers);
      return { success: true, message: "Your subscription has been reactivated!", subscriber: existing };
    }
    return { success: true, message: "You are already subscribed to our newsletter!", subscriber: existing, alreadyExists: true };
  }

  const newSub: Subscriber = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    email: normalizedEmail,
    subscribedAt: new Date().toISOString(),
    source,
    status: "active",
  };

  subscribers.unshift(newSub);
  const saved = saveStoredSubscribers(subscribers);

  if (!saved) {
    return { success: false, message: "Failed to save subscriber. Please try again." };
  }

  return { success: true, message: "Thank you for subscribing to our engineering briefings!", subscriber: newSub };
}

export function deleteSubscriber(idOrEmail: string): boolean {
  const subscribers = getStoredSubscribers();
  const filtered = subscribers.filter((s) => s.id !== idOrEmail && s.email.toLowerCase() !== idOrEmail.toLowerCase());
  if (filtered.length === subscribers.length) {
    return false;
  }
  return saveStoredSubscribers(filtered);
}
