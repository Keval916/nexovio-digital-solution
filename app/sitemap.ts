import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICES } from "@/data/services";
import { CASE_STUDIES } from "@/data/case-studies";
import { BLOG_ARTICLES } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const cleanSiteUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
  const now = new Date().toISOString();

  // Core static pages
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${cleanSiteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Service pages
  const serviceRoutes = [
    ...SERVICES.map((service) => ({
      url: `${cleanSiteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    {
      url: `${cleanSiteUrl}/services/digital-marketing`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Case study pages
  const caseStudyRoutes = CASE_STUDIES.map((study) => ({
    url: `${cleanSiteUrl}/case-studies/${study.slug}`,
    lastModified: study.publishedAt || now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog article pages
  const blogRoutes = BLOG_ARTICLES.map((article) => ({
    url: `${cleanSiteUrl}/blog/${article.slug}`,
    lastModified: article.updatedAt || article.publishedAt || now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes];
}
