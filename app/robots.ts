import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const cleanSiteUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
          "YandexBot",
          "Baiduspider",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${cleanSiteUrl}/sitemap.xml`,
    host: cleanSiteUrl,
  };
}
