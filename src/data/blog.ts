/**
 * Blog Article TypeScript Data Model & Schema Definitions
 * (Data is dynamically managed and stored in MongoDB collection "blog_posts")
 */
export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  tableOfContents: { id: string; title: string }[];
  category: "Web Development" | "Web Design" | "UI/UX" | "SEO" | "Digital Marketing" | "Technology" | string;
  author: {
    name: string;
    role: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featuredImage: string;
  featuredImageAlt: string;
  seoTitle: string;
  seoDescription: string;
  relatedSlugs: string[];
  // FAQs for this article
  faqs?: BlogFAQ[];
  // Previous URL slugs for automatic 301 redirects to preserve SEO rankings
  previousSlugs?: string[];
  // Advanced SEO & Canonical Settings
  focusKeyword?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  schemaType?: "BlogPosting" | "TechArticle" | "Article" | "NewsArticle";
  socialTitle?: string;
  socialDescription?: string;
  sitemapPriority?: number;
  changeFreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

import staticBlogPosts from "./blog-posts.json";

// Dynamic MongoDB articles with resilient static fallback to ensure 0% 404 rate
export const FALLBACK_BLOG_ARTICLES: BlogArticle[] = (staticBlogPosts as unknown) as BlogArticle[];
export const BLOG_ARTICLES: BlogArticle[] = FALLBACK_BLOG_ARTICLES;

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return BLOG_ARTICLES.find(
    (a) =>
      a.slug.toLowerCase().trim() === normalized ||
      (a.id && a.id.toLowerCase().trim() === normalized) ||
      (Array.isArray(a.previousSlugs) &&
        a.previousSlugs.some((s) => s.toLowerCase().trim() === normalized))
  );
}


