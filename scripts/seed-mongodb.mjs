import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Load .env.local or .env if present
function loadEnv() {
  const envFiles = [".env.local", ".env"];
  for (const file of envFiles) {
    const fullPath = path.join(rootDir, file);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      content.split("\n").forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx > 0) {
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      });
    }
  }
}

loadEnv();

let uri = (process.env.MONGODB_URI || "").trim();
if ((uri.startsWith('"') && uri.endsWith('"')) || (uri.startsWith("'") && uri.endsWith("'"))) {
  uri = uri.slice(1, -1).trim();
}
const dbName = process.env.MONGODB_DB || "nexovio";

if (!uri) {
  console.error("\n❌ MONGODB_URI is not set in environment or .env.local!");
  console.log("Please add your MongoDB connection string in .env.local:");
  console.log('MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.xyz.mongodb.net/nexovio?retryWrites=true&w=majority"');
  console.log('MONGODB_DB="nexovio"\n');
  process.exit(1);
}

const DEFAULT_CATEGORIES = [
  {
    id: "cat-web-dev",
    name: "Web Development",
    slug: "web-development",
    description: "Architecture, Next.js, modern frameworks, APIs, and scalable web engineering.",
    color: "blue",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-technology",
    name: "Technology",
    slug: "technology",
    description: "Emerging tech, autonomous AI agents, cloud architectures, and software paradigms.",
    color: "cyan",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-ui-ux",
    name: "UI/UX",
    slug: "ui-ux",
    description: "Design systems, usability heuristics, component libraries, and interactive user experiences.",
    color: "purple",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-seo",
    name: "SEO",
    slug: "seo",
    description: "Core Web Vitals, programmatic SEO, search ranking signals, and technical audits.",
    color: "emerald",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-web-design",
    name: "Web Design",
    slug: "web-design",
    description: "Visual aesthetics, typography, responsive layouts, and creative brand identity.",
    color: "amber",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "Conversion rate optimization (CRO), B2B lead generation, and omnichannel growth strategy.",
    color: "rose",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
];

async function seed() {
  console.log(`\n🚀 Connecting to MongoDB database: "${dbName}"...`);
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 8000,
    connectTimeoutMS: 10000,
  });

  try {
    await client.connect();
    console.log(" Connected to MongoDB successfully.");

    const db = client.db(dbName);

    // 1. Seed Categories Collection
    const categoryCollection = db.collection("blog_categories");
    await categoryCollection.createIndex({ slug: 1 }, { unique: true });
    console.log(" Verified unique index on blog_categories { slug: 1 }.");

    let catCount = 0;
    for (const cat of DEFAULT_CATEGORIES) {
      await categoryCollection.updateOne(
        { slug: cat.slug },
        { $set: cat },
        { upsert: true }
      );
      catCount++;
    }
    console.log(` Seeded ${catCount} categories into "blog_categories" collection.`);

    // 2. Seed Blog Posts Collection
    const collection = db.collection("blog_posts");
    await collection.createIndex({ slug: 1 }, { unique: true });
    await collection.createIndex({ title: "text", excerpt: "text" });
    console.log(" Verified unique index on blog_posts { slug: 1 } and text index on { title, excerpt }.");

    const blogPostsPath = path.join(rootDir, "src", "data", "blog-posts.json");
    if (fs.existsSync(blogPostsPath)) {
      const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, "utf-8"));
      let seededArticlesCount = 0;
      for (const post of blogPosts) {
        await collection.updateOne(
          { slug: post.slug },
          { $set: post },
          { upsert: true }
        );
        seededArticlesCount++;
      }
      console.log(` Seeded/updated ${seededArticlesCount} articles into "blog_posts" collection.`);
    }

    const existingArticles = await collection.find({}).toArray();
    console.log(` Currently ${existingArticles.length} articles active in "blog_posts".`);

    console.log(`\n🎉 MongoDB Full Migration & Seeding Complete!\n`);
  } catch (err) {
    console.error("\n❌ MongoDB Migration Error:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
