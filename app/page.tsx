import React from "react";
import Home from "@/src/views/Home";
import { generatePageMetadata } from "@/src/lib/seo";
import { getStoredBlogArticlesAsync } from "@/src/lib/blog-storage";
import type { BlogArticle } from "@/src/data/blog";

export const revalidate = 60;

export const metadata = generatePageMetadata({
  title: "Custom Web Development & AI Automation Services | Nexovio",
  description:
    "Build high-performance business websites, ecommerce platforms, and web applications with Nexovio. Strategy-led web development, responsive UI/UX, and practical AI automation.",
  keywords: [
    "custom web development",
    "business website development",
    "AI automation services",
    "web development company",
    "web application development",
    "UI/UX design services",
    "ecommerce development",
    "Next.js web development",
    "technical SEO services",
    "white-label web development partner",
  ],
  path: "/",
});

export default async function Page() {
  let articles: BlogArticle[] = [];
  try {
    articles = await getStoredBlogArticlesAsync();
  } catch (err) {
    console.warn("[app/page.tsx] Stored articles lookup fallback:", err);
  }
  return <Home initialArticles={articles} />;
}
