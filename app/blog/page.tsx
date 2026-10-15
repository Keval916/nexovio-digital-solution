import type { Metadata } from "next";
import Blog from "@/src/views/blog/Blog";
import { generatePageMetadata } from "@/src/lib/seo";
import { getStoredBlogArticlesAsync } from "@/src/lib/blog-storage";
import { getStoredCategoriesAsync } from "@/src/lib/category-storage";

export const dynamic = "force-dynamic";

export const metadata = generatePageMetadata({
  title: "Engineering & Digital Strategy Insights | Nexovio Blog",
  description:
    "Engineering insights on web development, UI/UX design, Core Web Vitals, and technical SEO. Best practices to scale your website and digital performance.",
  keywords: [
    "web development blog",
    "digital strategy blog",
    "UX design articles",
    "technical SEO tips",
    "Engineering Blog",
    "Web Development Articles",
    "Core Web Vitals Guide",
  ],
  path: "/blog",
});

export default async function Page() {
  const [articles, categories] = await Promise.all([
    getStoredBlogArticlesAsync(),
    getStoredCategoriesAsync(),
  ]);
  return <Blog initialArticles={articles} initialCategories={categories} />;
}
