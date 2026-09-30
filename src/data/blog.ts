import blogData from "./blog-posts.json";

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

export const BLOG_ARTICLES: BlogArticle[] = blogData as BlogArticle[];

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}
