import type { MetadataRoute } from "next";
import { ROUTES, EXCLUDED_FROM_SITEMAP } from "@/src/lib/routes";
import { SITE_URL } from "@/src/lib/seo";

/**
 * Generated directly from the route manifest, ensuring the sitemap can never drift
 * from the application pages (pattern mirrored from verbix-design-work).
 */
function priorityFor(route: string): number {
  if (route === "/") return 1.0;
  const depth = route.split("/").filter(Boolean).length;
  return depth === 1 ? 0.8 : 0.64;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const cleanSiteUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;

  return (ROUTES as readonly string[])
    .filter((route) => !EXCLUDED_FROM_SITEMAP.has(route))
    .map((route) => {
      const pageUrl = `${cleanSiteUrl}${route === "/" ? "" : route}`;
      return {
        url: pageUrl,
        lastModified,
        changeFrequency: route === "/" ? ("daily" as const) : ("weekly" as const),
        priority: priorityFor(route),
        alternates: {
          languages: {
            "x-default": pageUrl,
            "en-US": pageUrl,
            "en-GB": pageUrl,
            "en-CA": pageUrl,
            "en-AU": pageUrl,
            "en-IN": pageUrl,
            "en-AE": pageUrl,
            "en-SG": pageUrl,
            "en-IE": pageUrl,
            "en-NZ": pageUrl,
            "en-ZA": pageUrl,
          },
        },
      };
    });
}
