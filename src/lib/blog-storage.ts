import fs from "fs";
import path from "path";
import { BlogArticle } from "@/src/data/blog";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "blog-posts.json");

export function getStoredBlogArticles(): BlogArticle[] {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE_PATH, "utf-8");
    return JSON.parse(data) as BlogArticle[];
  } catch (error) {
    console.error("Error reading blog-posts.json:", error);
    return [];
  }
}

export function saveStoredBlogArticles(articles: BlogArticle[]): boolean {
  try {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(articles, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing to blog-posts.json:", error);
    return false;
  }
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
