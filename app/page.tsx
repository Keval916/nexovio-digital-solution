import React from "react";
import Home from "@/src/views/Home";
import { generatePageMetadata } from "@/src/lib/seo";
import { getStoredBlogArticlesAsync } from "@/src/lib/blog-storage";
import type { BlogArticle } from "@/src/data/blog";

export const revalidate = 60;

export const metadata = generatePageMetadata({
  title: "Web Development Company | AI, Web Design & SEO | Nexovio",
  description:
    "Nexovio is a global web development & AI solutions company. We build high-performance websites, custom web apps, UI/UX, eCommerce, and SEO that drive revenue.",
  keywords: [
    "web development company",
    "web development services",
    "custom web development",
    "website development company",
    "web design company",
    "web design services",
    "AI solutions",
    "AI web development",
    "UI/UX design services",
    "eCommerce development",
    "SEO services",
    "digital marketing services",
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
