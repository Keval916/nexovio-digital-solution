import { MongoClient, Db, Collection } from "mongodb";
import { BlogArticle } from "@/src/data/blog";

const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB || "nexovio";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | null = null;

export function isMongoConfigured(): boolean {
  return Boolean(process.env.MONGODB_URI && process.env.MONGODB_URI.trim().length > 0);
}

export async function getMongoClient(): Promise<MongoClient> {
  if (!isMongoConfigured()) {
    throw new Error(
      "MONGODB_URI is not defined. Please set MONGODB_URI in your .env.local file or deployment environment variables."
    );
  }

  const mongoUri = process.env.MONGODB_URI!.trim();

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(mongoUri);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  }

  if (!clientPromise) {
    const client = new MongoClient(mongoUri);
    clientPromise = client.connect();
  }
  return clientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getMongoClient();
  return client.db(dbName);
}

export async function getBlogCollection(): Promise<Collection<BlogArticle>> {
  const db = await getDb();
  const collection = db.collection<BlogArticle>("blog_posts");

  // Ensure unique index on slug in background
  collection
    .createIndex({ slug: 1 }, { unique: true, background: true })
    .catch((err) => {
      // Ignore if index already exists
      if (err?.code !== 85 && err?.code !== 86) {
        console.warn("[MongoDB] Index creation notice:", err?.message || err);
      }
    });

  return collection;
}

export async function getSubscriberCollection(): Promise<Collection<any>> {
  const db = await getDb();
  const collection = db.collection("newsletter_subscribers");

  collection
    .createIndex({ email: 1 }, { unique: true, background: true })
    .catch((err) => {
      if (err?.code !== 85 && err?.code !== 86) {
        console.warn("[MongoDB] Subscriber index notice:", err?.message || err);
      }
    });

  return collection;
}

export async function getCategoryCollection(): Promise<Collection<any>> {
  const db = await getDb();
  const collection = db.collection("blog_categories");

  collection
    .createIndex({ slug: 1 }, { unique: true, background: true })
    .catch((err) => {
      if (err?.code !== 85 && err?.code !== 86) {
        console.warn("[MongoDB] Category index notice:", err?.message || err);
      }
    });

  return collection;
}

export interface DbMediaItem {
  id: string;
  name: string;
  url: string;
  contentType: string;
  size: number;
  dataBase64: string;
  createdAt: string;
}

export async function getMediaCollection(): Promise<Collection<DbMediaItem>> {
  const db = await getDb();
  const collection = db.collection<DbMediaItem>("blog_media");

  collection
    .createIndex({ id: 1 }, { unique: true, background: true })
    .catch((err) => {
      if (err?.code !== 85 && err?.code !== 86) {
        console.warn("[MongoDB] Media id index notice:", err?.message || err);
      }
    });

  collection
    .createIndex({ name: 1 }, { background: true })
    .catch((err) => {
      if (err?.code !== 85 && err?.code !== 86) {
        console.warn("[MongoDB] Media name index notice:", err?.message || err);
      }
    });

  return collection;
}


