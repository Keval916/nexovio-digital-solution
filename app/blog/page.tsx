import type { Metadata } from "next";
import Blog from "@/src/views/blog/Blog";
import { generatePageMetadata } from "@/src/lib/seo";
import { getStoredBlogArticlesAsync } from "@/src/lib/blog-storage";
import { getStoredCategoriesAsync } from "@/src/lib/category-storage";

export const dynamic = "force-dynamic";

export const metadata = generatePageMetadata({
  title: "Nexovio Blog – Engineering & Digital Strategy Insights",
  description:
    "Original articles and insights on web development, UX/UI design, Core Web Vitals and technical SEO. Learn best practices and trends to improve your website and growth strategy.",
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
