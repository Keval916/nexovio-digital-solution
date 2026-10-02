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

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "nexovio";

if (!uri) {
  console.error("\n❌ MONGODB_URI is not set in environment or .env.local!");
  console.log("Please add your MongoDB connection string in .env.local:");
  console.log('MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.xyz.mongodb.net/nexovio?retryWrites=true&w=majority"');
  console.log('MONGODB_DB="nexovio"\n');
  process.exit(1);
}

async function seed() {
  console.log(`\n🚀 Connecting to MongoDB database: "${dbName}"...`);
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log(" Connected to MongoDB successfully.");

    const db = client.db(dbName);
    const collection = db.collection("blog_posts");

    // Create unique index on slug and text index for search
    await collection.createIndex({ slug: 1 }, { unique: true });
    await collection.createIndex({ title: "text", excerpt: "text" });
    console.log(" Verified unique index on { slug: 1 } and text index on { title, excerpt }.");

    // Find source data
    let articles = [];
    const jsonPath = path.join(rootDir, "src", "data", "blog-posts.json");
    if (fs.existsSync(jsonPath)) {
      const raw = fs.readFileSync(jsonPath, "utf-8");
      articles = JSON.parse(raw);
      console.log(` Found ${articles.length} articles from src/data/blog-posts.json.`);
    }

    if (articles.length === 0) {
      // Dynamic import from blog.ts fallback
      try {
        const blogTsPath = path.join(rootDir, "src", "data", "blog.ts");
        const blogTsContent = fs.readFileSync(blogTsPath, "utf-8");
        const match = blogTsContent.match(/export const FALLBACK_BLOG_ARTICLES:\s*BlogArticle\[\]\s*=\s*(\[[\s\S]*?\]);/);
        if (match && match[1]) {
          articles = eval("(" + match[1] + ")");
          console.log(` Loaded ${articles.length} fallback articles from src/data/blog.ts.`);
        }
      } catch (err) {
        console.warn("Could not parse blog.ts fallback:", err.message);
      }
    }

    if (articles.length === 0) {
      console.log("No articles found to import.");
      return;
    }

    let inserted = 0;
    let updated = 0;

    for (const art of articles) {
      const { _id, ...cleanArt } = art;
      const res = await collection.updateOne(
        { slug: cleanArt.slug },
        {
          $set: {
            ...cleanArt,
            updatedAtDate: new Date(),
          },
          $setOnInsert: {
            createdAtDate: new Date(cleanArt.publishedAt || Date.now()),
          },
        },
        { upsert: true }
      );

      if (res.upsertedCount > 0) {
        inserted++;
        console.log(`  ➕ Inserted: "${cleanArt.title}" (${cleanArt.slug})`);
      } else {
        updated++;
        console.log(`  🔄 Updated: "${cleanArt.title}" (${cleanArt.slug})`);
      }
    }

    console.log(`\n🎉 MongoDB Blog Migration Complete! Total: ${articles.length} | Inserted: ${inserted} | Updated: ${updated}\n`);
  } catch (err) {
    console.error("\n❌ MongoDB Migration Error:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
