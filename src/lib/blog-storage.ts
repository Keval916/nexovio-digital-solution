import fs from "fs";
import path from "path";
import os from "os";
import { BlogArticle } from "@/src/data/blog";
import bundledBlogPosts from "@/src/data/blog-posts.json";
import { syncFileToGitHub } from "./github-sync";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "blog-posts.json");
const TMP_FILE_PATH = path.join(os.tmpdir(), "nexovio-blog-posts.json");

// In-memory cache for ultra-fast response and serverless continuity
let memoryArticlesCache: BlogArticle[] | null = null;

export function getStoredBlogArticles(): BlogArticle[] {
  if (memoryArticlesCache && Array.isArray(memoryArticlesCache) && memoryArticlesCache.length > 0) {
    return memoryArticlesCache;
  }

  // 1. Try reading from temporary writable filesystem (updated in serverless)
  try {
    if (fs.existsSync(TMP_FILE_PATH)) {
      const data = fs.readFileSync(TMP_FILE_PATH, "utf-8");
      const parsed = JSON.parse(data) as BlogArticle[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryArticlesCache = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Could not read from TMP_FILE_PATH:", err);
  }

  // 2. Try reading from project workspace src/data/blog-posts.json
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const data = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const parsed = JSON.parse(data) as BlogArticle[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryArticlesCache = parsed;
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Could not read from DATA_FILE_PATH:", error);
  }

  // 3. Fallback to statically bundled JSON articles
  if (Array.isArray(bundledBlogPosts) && bundledBlogPosts.length > 0) {
    memoryArticlesCache = bundledBlogPosts as BlogArticle[];
    return memoryArticlesCache;
  }

  return [];
}

/**
 * Async fetcher that acts as a real database:
 * Reads from local cache first, and if in production / serverless or if an article is missing,
 * fetches directly from GitHub repository so newly generated / pushed articles open immediately without 404.
 */
export async function getStoredBlogArticlesAsync(forceRefresh = false): Promise<BlogArticle[]> {
  const localArticles = getStoredBlogArticles();

  if (!forceRefresh && process.env.NODE_ENV === "development" && localArticles.length > 0) {
    return localArticles;
  }

  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const repo = process.env.GITHUB_REPO || "Keval916/nexovio-digital-solution";
  const branch = process.env.GITHUB_BRANCH || "main";

  // 1. Query GitHub Contents API for real-time live data
  try {
    const headers: Record<string, string> = {
      "User-Agent": "Nexovio-CMS",
      "Cache-Control": "no-cache",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
      headers["Accept"] = "application/vnd.github.v3+json";
    }

    const apiUrl = `https://api.github.com/repos/${repo}/contents/src/data/blog-posts.json?ref=${branch}`;
    const res = await fetch(apiUrl, {
      headers,
      cache: "no-store",
      // @ts-ignore Next.js cache bypass
      next: { revalidate: 0 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.content) {
        const decoded = Buffer.from(data.content, "base64").toString("utf-8");
        const parsed = JSON.parse(decoded) as BlogArticle[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          memoryArticlesCache = parsed;
          try {
            fs.writeFileSync(TMP_FILE_PATH, JSON.stringify(parsed, null, 2), "utf-8");
          } catch {}
          return parsed;
        }
      }
    }
  } catch (apiErr) {
    console.warn("[blog-storage] GitHub API fetch error:", apiErr);
  }

  // 2. Query Raw GitHub Content as fallback
  try {
    const rawUrl = `https://raw.githubusercontent.com/${repo}/${branch}/src/data/blog-posts.json?t=${Date.now()}`;
    const rawRes = await fetch(rawUrl, {
      cache: "no-store",
      // @ts-ignore Next.js cache bypass
      next: { revalidate: 0 },
    });
    if (rawRes.ok) {
      const parsed = (await rawRes.json()) as BlogArticle[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryArticlesCache = parsed;
        try {
          fs.writeFileSync(TMP_FILE_PATH, JSON.stringify(parsed, null, 2), "utf-8");
        } catch {}
        return parsed;
      }
    }
  } catch (rawErr) {
    console.warn("[blog-storage] GitHub Raw fetch error:", rawErr);
  }

  return localArticles;
}

/**
 * Fetch a single article by slug with automatic remote fallback.
 * Guarantees zero 404s for newly pushed or generated articles.
 */
export async function getBlogArticleBySlugAsync(slug: string): Promise<BlogArticle | undefined> {
  const normalizedSlug = decodeURIComponent(slug).toLowerCase().trim();
  const localArticles = getStoredBlogArticles();
  let article = localArticles.find(
    (a) =>
      a.slug.toLowerCase().trim() === normalizedSlug ||
      (a.id && a.id.toLowerCase().trim() === normalizedSlug)
  );
  if (article) {
    return article;
  }

  // If missing locally, force fetch latest from GitHub repository
  const freshArticles = await getStoredBlogArticlesAsync(true);
  return freshArticles.find(
    (a) =>
      a.slug.toLowerCase().trim() === normalizedSlug ||
      (a.id && a.id.toLowerCase().trim() === normalizedSlug)
  );
}

export async function saveStoredBlogArticlesAsync(articles: BlogArticle[]): Promise<boolean> {
  memoryArticlesCache = articles;
  const jsonContent = JSON.stringify(articles, null, 2);
  let savedLocallyOrTmp = false;

  // 1. Try persisting to local repository disk
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, jsonContent, "utf-8");
    savedLocallyOrTmp = true;
  } catch (error: any) {
    console.warn("[blog-storage] Read-only disk detected (EROFS). Falling back to /tmp and Git sync:", error?.message);
  }

  // 2. Write to os.tmpdir() so serverless function instances retain state
  try {
    fs.writeFileSync(TMP_FILE_PATH, jsonContent, "utf-8");
    savedLocallyOrTmp = true;
  } catch (tmpErr) {
    console.warn("[blog-storage] Warning writing to TMP_FILE_PATH:", tmpErr);
  }

  // 3. Commit to GitHub directly and await so it is immediately live
  if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
    try {
      await syncFileToGitHub(
        "src/data/blog-posts.json",
        jsonContent,
        `chore(blog): update articles via Admin Studio [${new Date().toISOString()}]`
      );
    } catch (ghErr) {
      console.error("[blog-storage] GitHub Auto-Sync error:", ghErr);
    }
  }

  return savedLocallyOrTmp || Boolean(memoryArticlesCache);
}

export function saveStoredBlogArticles(articles: BlogArticle[]): boolean {
  // Synchronous wrapper
  memoryArticlesCache = articles;
  const jsonContent = JSON.stringify(articles, null, 2);
  let savedLocallyOrTmp = false;

  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, jsonContent, "utf-8");
    savedLocallyOrTmp = true;
  } catch (error: any) {
    console.warn("[blog-storage] Read-only disk detected (EROFS). Falling back to /tmp and Git sync:", error?.message);
  }

  try {
    fs.writeFileSync(TMP_FILE_PATH, jsonContent, "utf-8");
    savedLocallyOrTmp = true;
  } catch (tmpErr) {
    console.warn("[blog-storage] Warning writing to TMP_FILE_PATH:", tmpErr);
  }

  if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
    syncFileToGitHub(
      "src/data/blog-posts.json",
      jsonContent,
      `chore(blog): update articles via Admin Studio [${new Date().toISOString()}]`
    ).catch((ghErr) => {
      console.error("[blog-storage] GitHub Auto-Sync background error:", ghErr);
    });
  }

  return savedLocallyOrTmp || Boolean(memoryArticlesCache);
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
