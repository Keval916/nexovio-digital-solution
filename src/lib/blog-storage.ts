import { BlogArticle, FALLBACK_BLOG_ARTICLES } from "@/src/data/blog";
import { getBlogCollection, isMongoConfigured } from "./mongodb";

// In-memory cache for ultra-fast response and serverless continuity
let memoryArticlesCache: BlogArticle[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 15000; // 15s in-memory TTL in dev/prod

/**
 * Synchronous getter returning latest cached articles or fallback.
 */
export function getStoredBlogArticles(): BlogArticle[] {
  if (memoryArticlesCache && Array.isArray(memoryArticlesCache) && memoryArticlesCache.length > 0) {
    return memoryArticlesCache;
  }
  return FALLBACK_BLOG_ARTICLES;
}

/**
 * Primary asynchronous fetcher for all blog articles.
 * Queries MongoDB collection "blog_posts".
 */
export async function getStoredBlogArticlesAsync(forceRefresh = false): Promise<BlogArticle[]> {
  const now = Date.now();
  if (!forceRefresh && memoryArticlesCache && now - lastFetchTime < CACHE_TTL_MS) {
    return memoryArticlesCache;
  }

  if (isMongoConfigured()) {
    try {
      const collection = await getBlogCollection();
      const docs = await collection
        .find({}, { projection: { _id: 0 } })
        .sort({ publishedAt: -1 })
        .toArray();

      if (Array.isArray(docs) && docs.length > 0) {
        memoryArticlesCache = docs as BlogArticle[];
        lastFetchTime = now;
        return memoryArticlesCache;
      }
    } catch (dbErr) {
      console.error("[blog-storage] MongoDB fetch error:", dbErr);
    }
  }

  // Fallback to cache or default articles if MongoDB is not configured or temporarily empty
  if (memoryArticlesCache && memoryArticlesCache.length > 0) {
    return memoryArticlesCache;
  }

  return FALLBACK_BLOG_ARTICLES;
}

/**
 * Fetch a single article by slug or ID with MongoDB.
 */
export async function getBlogArticleBySlugAsync(slug: string): Promise<BlogArticle | undefined> {
  const normalizedSlug = decodeURIComponent(slug).toLowerCase().trim();

  if (isMongoConfigured()) {
    try {
      const collection = await getBlogCollection();
      const doc = await collection.findOne(
        {
          $or: [
            { slug: normalizedSlug },
            { id: normalizedSlug },
            { slug: slug },
            { id: slug },
          ],
        },
        { projection: { _id: 0 } }
      );

      if (doc) {
        return doc as BlogArticle;
      }
    } catch (err) {
      console.error("[blog-storage] MongoDB findOne error:", err);
    }
  }

  // Fallback lookup
  const articles = await getStoredBlogArticlesAsync();
  return articles.find(
    (a) =>
      a.slug.toLowerCase().trim() === normalizedSlug ||
      (a.id && a.id.toLowerCase().trim() === normalizedSlug)
  );
}

/**
 * Create a new article directly in MongoDB.
 */
export async function createBlogArticleInDb(article: BlogArticle): Promise<boolean> {
  if (!isMongoConfigured()) {
    console.warn("[blog-storage] MONGODB_URI not configured. Cannot persist to database.");
    // Cache in memory
    memoryArticlesCache = [article, ...(memoryArticlesCache || [])];
    return false;
  }

  try {
    const collection = await getBlogCollection();
    const { ...cleanArticle } = article;

    await collection.updateOne(
      { slug: article.slug },
      {
        $set: {
          ...cleanArticle,
          updatedAtDate: new Date(),
        },
        $setOnInsert: {
          createdAtDate: new Date(),
        },
      },
      { upsert: true }
    );

    // Invalidate local cache
    memoryArticlesCache = null;
    lastFetchTime = 0;
    return true;
  } catch (err) {
    console.error("[blog-storage] MongoDB create error:", err);
    return false;
  }
}

/**
 * Update an existing article in MongoDB.
 */
export async function updateBlogArticleInDb(
  slugOrId: string,
  updates: Partial<BlogArticle>
): Promise<BlogArticle | null> {
  if (!isMongoConfigured()) {
    console.warn("[blog-storage] MONGODB_URI not configured. Cannot update in database.");
    return null;
  }

  try {
    const collection = await getBlogCollection();
    const filter = {
      $or: [{ slug: slugOrId }, { id: slugOrId }],
    };

    const existing = await collection.findOne(filter, { projection: { _id: 0 } });
    if (!existing) {
      return null;
    }

    const merged: BlogArticle = {
      ...(existing as BlogArticle),
      ...updates,
      updatedAt: updates.updatedAt || new Date().toISOString().split("T")[0],
    };

    await collection.updateOne(filter, {
      $set: {
        ...merged,
        updatedAtDate: new Date(),
      },
    });

    // Invalidate cache
    memoryArticlesCache = null;
    lastFetchTime = 0;
    return merged;
  } catch (err) {
    console.error("[blog-storage] MongoDB update error:", err);
    return null;
  }
}

/**
 * Delete an article from MongoDB by slug or id.
 */
export async function deleteBlogArticleFromDb(slugOrId: string): Promise<boolean> {
  if (!isMongoConfigured()) {
    console.warn("[blog-storage] MONGODB_URI not configured. Cannot delete from database.");
    return false;
  }

  try {
    const collection = await getBlogCollection();
    const res = await collection.deleteOne({
      $or: [{ slug: slugOrId }, { id: slugOrId }],
    });

    // Invalidate cache
    memoryArticlesCache = null;
    lastFetchTime = 0;
    return res.deletedCount > 0;
  } catch (err) {
    console.error("[blog-storage] MongoDB delete error:", err);
    return false;
  }
}

/**
 * Compatibility wrapper for bulk saving array of articles.
 */
export async function saveStoredBlogArticlesAsync(articles: BlogArticle[]): Promise<boolean> {
  memoryArticlesCache = articles;
  if (!isMongoConfigured()) return true;

  try {
    const collection = await getBlogCollection();
    for (const art of articles) {
      await collection.updateOne(
        { slug: art.slug },
        { $set: art },
        { upsert: true }
      );
    }
    return true;
  } catch (err) {
    console.error("[blog-storage] MongoDB bulk save error:", err);
    return false;
  }
}

export function saveStoredBlogArticles(articles: BlogArticle[]): boolean {
  memoryArticlesCache = articles;
  saveStoredBlogArticlesAsync(articles).catch(() => {});
  return true;
}

export function calculateReadingTime(content: string[] | string): string {
  const text = Array.isArray(content) ? content.join(" ") : content;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
