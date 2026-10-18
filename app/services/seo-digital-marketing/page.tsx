import type { Metadata } from "next";
import SeoDigitalMarketing from "@/src/views/services/SeoDigitalMarketing";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Technical SEO Services, Website SEO Audits & Growth | Nexovio",
  description:
    "Improve organic search rankings and qualified website traffic with Nexovio. Technical SEO services, comprehensive website audits, Core Web Vitals fixes, and content optimization.",
  keywords: [
    "technical SEO services",
    "website SEO audits",
    "organic search improvement",
    "SEO services company",
    "technical SEO audit",
    "Core Web Vitals optimization",
    "search visibility",
    "on-page SEO services",
    "conversion rate optimization",
    "GA4 and GTM tracking setup",
  ],
  path: "/services/seo-digital-marketing",
});

export default function Page() {
  return <SeoDigitalMarketing />;
}
