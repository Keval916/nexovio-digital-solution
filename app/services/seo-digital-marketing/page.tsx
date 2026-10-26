import type { Metadata } from "next";
import SeoDigitalMarketing from "@/src/views/services/SeoDigitalMarketing";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "SEO & Digital Marketing Services | Boost Rankings & Real Business Growth | Nexovio",
  description:
    "We combine proven SEO strategies with result-driven digital marketing to help your brand get found, build trust, and turn visitors into loyal customers. Technical SEO, social media marketing, PPC campaigns, and conversion rate optimization.",
  keywords: [
    "SEO & digital marketing services",
    "search engine optimization company",
    "social media marketing agency",
    "pay per click advertising PPC",
    "organic search rankings growth",
    "technical SEO audits",
    "content marketing strategy",
    "conversion rate optimization CRO",
    "Core Web Vitals performance",
    "Google search ranking improvement",
    "digital marketing consultation",
  ],
  path: "/services/seo-digital-marketing",
});

export default function Page() {
  return <SeoDigitalMarketing />;
}
