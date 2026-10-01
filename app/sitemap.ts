import type { MetadataRoute } from "next";
import { ROUTES, EXCLUDED_FROM_SITEMAP } from "@/src/lib/routes";
import { SITE_URL } from "@/src/lib/seo";
import { getStoredBlogArticlesAsync } from "@/src/lib/blog-storage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Generated directly from the route manifest, ensuring the sitemap can never drift
 * from the application pages (pattern mirrored from verbix-design-work).
 */
function priorityFor(route: string): number {
  if (route === "/") return 1.0;
  const depth = route.split("/").filter(Boolean).length;
  return depth === 1 ? 0.8 : 0.64;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const cleanSiteUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;

  // 1. Static Application Pages (Home, About, Services, Case Studies, Main /blog feed)
  // Exclude individual /blog/[slug] articles from static routes because they are dynamically managed below
  const staticEntries: MetadataRoute.Sitemap = (ROUTES as readonly string[])
    .filter((route) => !EXCLUDED_FROM_SITEMAP.has(route) && (!route.startsWith("/blog/") || route === "/blog"))
    .map((route) => {
      const pageUrl = `${cleanSiteUrl}${route === "/" ? "" : route}`;
      return {
        url: pageUrl,
        lastModified,
        changeFrequency: route === "/" ? ("daily" as const) : ("weekly" as const),
        priority: priorityFor(route),
      };
    });

  // 2. Dynamic Blog Articles from admin storage (with custom publish dates, priority & canonicals)
  const blogArticles = await getStoredBlogArticlesAsync();
  const blogEntries: MetadataRoute.Sitemap = blogArticles
    .filter((article) => !article.noIndex)
    .map((article) => {
      const pageUrl = article.canonicalUrl && article.canonicalUrl.startsWith("http")
        ? article.canonicalUrl
        : `${cleanSiteUrl}/blog/${article.slug}`;

      return {
        url: pageUrl,
        lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(article.publishedAt),
        changeFrequency: (article.changeFreq as "daily" | "weekly" | "monthly") || "weekly",
        priority: article.sitemapPriority || 0.8,
      };
    });

  // 3. Deduplicate strictly by URL
  const seen = new Set<string>();
  const uniqueSitemap: MetadataRoute.Sitemap = [];

  for (const entry of [...staticEntries, ...blogEntries]) {
    if (!seen.has(entry.url)) {
      seen.add(entry.url);
      uniqueSitemap.push(entry);
    }
  }

  return uniqueSitemap;
}
