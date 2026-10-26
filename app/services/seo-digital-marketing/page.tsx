import type { Metadata } from "next";
import SeoDigitalMarketing from "@/src/views/services/SeoDigitalMarketing";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "SEO & Digital Marketing Services for Growth | Nexovio",
  description:
    "Proven SEO and digital marketing services to boost search rankings, drive qualified organic traffic, and convert visitors through technical SEO, PPC, and CRO.",
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
