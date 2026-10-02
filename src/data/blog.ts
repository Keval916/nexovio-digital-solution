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

// Fallback seed array for typing compatibility
export const FALLBACK_BLOG_ARTICLES: BlogArticle[] = [];
export const BLOG_ARTICLES: BlogArticle[] = [];

export function getBlogArticleBySlug(_slug: string): BlogArticle | undefined {
  return undefined;
}
