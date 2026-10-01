import fs from "fs";
import path from "path";
import os from "os";
import { syncFileToGitHub } from "./github-sync";

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  source: string;
  status: "active" | "unsubscribed";
}

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "subscribers.json");
const TMP_FILE_PATH = path.join(os.tmpdir(), "nexovio-subscribers.json");

let memorySubscribersCache: Subscriber[] | null = null;

export function getStoredSubscribers(): Subscriber[] {
  if (memorySubscribersCache && Array.isArray(memorySubscribersCache)) {
    return memorySubscribersCache;
  }

  try {
    if (fs.existsSync(TMP_FILE_PATH)) {
      const data = fs.readFileSync(TMP_FILE_PATH, "utf-8");
      const parsed = JSON.parse(data) as Subscriber[];
      memorySubscribersCache = parsed;
      return parsed;
    }
  } catch (err) {
    console.warn("Could not read TMP subscribers:", err);
  }

  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const data = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const parsed = JSON.parse(data) as Subscriber[];
      memorySubscribersCache = parsed;
      return parsed;
    }
  } catch (error) {
    console.warn("Could not read DATA subscribers:", error);
  }

  return [];
}

export function saveStoredSubscribers(subscribers: Subscriber[]): boolean {
  memorySubscribersCache = subscribers;
  const jsonContent = JSON.stringify(subscribers, null, 2);
  let saved = false;

  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, jsonContent, "utf-8");
    saved = true;
  } catch (error: any) {
    console.warn("[subscriber-storage] Read-only disk detected (EROFS). Falling back to /tmp and Git sync:", error?.message);
  }

  try {
    fs.writeFileSync(TMP_FILE_PATH, jsonContent, "utf-8");
    saved = true;
  } catch (tmpErr) {
    console.warn("[subscriber-storage] Warning writing to TMP_FILE_PATH:", tmpErr);
  }

  if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
    syncFileToGitHub(
      "src/data/subscribers.json",
      jsonContent,
      `chore(newsletter): update subscribers [${new Date().toISOString()}]`
    ).catch((err) => console.error("[subscriber-storage] GitHub sync error:", err));
  }

  return saved || Boolean(memorySubscribersCache);
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
