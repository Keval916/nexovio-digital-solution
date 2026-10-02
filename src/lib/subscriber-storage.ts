import { getSubscriberCollection, isMongoConfigured } from "./mongodb";

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  source: string;
  status: "active" | "unsubscribed";
}

let memorySubscribersCache: Subscriber[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 10000; // 10s in-memory cache

export function getStoredSubscribers(): Subscriber[] {
  if (memorySubscribersCache && Array.isArray(memorySubscribersCache)) {
    return memorySubscribersCache;
  }
  return [];
}

export async function getStoredSubscribersAsync(forceRefresh = false): Promise<Subscriber[]> {
  const now = Date.now();
  if (!forceRefresh && memorySubscribersCache && now - lastFetchTime < CACHE_TTL_MS) {
    return memorySubscribersCache;
  }

  if (isMongoConfigured()) {
    try {
      const collection = await getSubscriberCollection();
      const docs = await collection
        .find({}, { projection: { _id: 0 } })
        .sort({ subscribedAt: -1 })
        .toArray();

      if (Array.isArray(docs)) {
        memorySubscribersCache = docs as Subscriber[];
        lastFetchTime = now;
        return memorySubscribersCache;
      }
    } catch (err) {
      console.error("[subscriber-storage] MongoDB fetch error:", err);
    }
  }

  return memorySubscribersCache || [];
}

export async function addSubscriberAsync(
  email: string,
  source: string = "Blog Hub Newsletter"
): Promise<{ success: boolean; message: string; subscriber?: Subscriber; alreadyExists?: boolean }> {
  const normalizedEmail = email.trim().toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(normalizedEmail)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const existingSubscribers = await getStoredSubscribersAsync();
  const existing = existingSubscribers.find((s) => s.email.toLowerCase() === normalizedEmail);

  if (existing) {
    if (existing.status === "unsubscribed") {
      existing.status = "active";
      existing.subscribedAt = new Date().toISOString();

      if (isMongoConfigured()) {
        try {
          const collection = await getSubscriberCollection();
          await collection.updateOne(
            { email: normalizedEmail },
            { $set: { status: "active", subscribedAt: existing.subscribedAt } }
          );
        } catch (dbErr) {
          console.error("[subscriber-storage] MongoDB reactivate error:", dbErr);
        }
      }

      memorySubscribersCache = null;
      lastFetchTime = 0;
      return { success: true, message: "Your subscription has been reactivated!", subscriber: existing };
    }

    return {
      success: true,
      message: "You are already subscribed to our newsletter!",
      subscriber: existing,
      alreadyExists: true,
    };
  }

  const newSub: Subscriber = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    email: normalizedEmail,
    subscribedAt: new Date().toISOString(),
    source,
    status: "active",
  };

  if (isMongoConfigured()) {
    try {
      const collection = await getSubscriberCollection();
      await collection.updateOne(
        { email: normalizedEmail },
        { $set: newSub },
        { upsert: true }
      );
      memorySubscribersCache = null;
      lastFetchTime = 0;
    } catch (dbErr) {
      console.error("[subscriber-storage] MongoDB insert error:", dbErr);
      return { success: false, message: "Database connection failed. Please try again later." };
    }
  } else {
    // In-memory fallback
    memorySubscribersCache = [newSub, ...(memorySubscribersCache || [])];
  }

  return { success: true, message: "Thank you for subscribing to our engineering briefings!", subscriber: newSub };
}

// Synchronous wrapper for backward compatibility
export function addSubscriber(
  email: string,
  source: string = "Blog Hub Newsletter"
): { success: boolean; message: string; subscriber?: Subscriber; alreadyExists?: boolean } {
  addSubscriberAsync(email, source).catch(() => {});
  return {
    success: true,
    message: "Thank you for subscribing to our engineering briefings!",
    subscriber: {
      id: `sub_${Date.now()}`,
      email: email.trim().toLowerCase(),
      subscribedAt: new Date().toISOString(),
      source,
      status: "active",
    },
  };
}

export async function deleteSubscriberAsync(idOrEmail: string): Promise<boolean> {
  if (isMongoConfigured()) {
    try {
      const collection = await getSubscriberCollection();
      const res = await collection.deleteOne({
        $or: [{ id: idOrEmail }, { email: idOrEmail.toLowerCase() }],
      });
      memorySubscribersCache = null;
      lastFetchTime = 0;
      return res.deletedCount > 0;
    } catch (err) {
      console.error("[subscriber-storage] MongoDB delete error:", err);
      return false;
    }
  }

  if (memorySubscribersCache) {
    memorySubscribersCache = memorySubscribersCache.filter(
      (s) => s.id !== idOrEmail && s.email.toLowerCase() !== idOrEmail.toLowerCase()
    );
    return true;
  }
  return false;
}

export function deleteSubscriber(idOrEmail: string): boolean {
  deleteSubscriberAsync(idOrEmail).catch(() => {});
  return true;
}
