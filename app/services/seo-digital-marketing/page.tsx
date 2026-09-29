import type { Metadata } from "next";
import SeoDigitalMarketing from "@/src/views/services/SeoDigitalMarketing";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "SEO & Digital Marketing Services | Grow Organic Visibility & Leads",
    description:
      "Improve search visibility with technical SEO, keyword research, content optimization, local and global SEO, analytics, CRO and digital growth strategy.",
    keywords: [
      "SEO services",
      "SEO agency",
      "SEO company",
      "search engine optimization services",
      "digital marketing agency",
      "technical SEO",
      "technical SEO services",
      "SEO audit",
      "website SEO audit",
      "on page SEO services",
      "SEO content strategy",
      "SEO content optimization",
      "keyword research services",
      "SEO consulting",
      "local SEO services",
      "international SEO services",
      "global SEO services",
      "SEO for small business",
      "enterprise SEO services",
      "ecommerce SEO services",
      "SaaS SEO agency",
      "B2B SEO services",
      "SEO lead generation",
      "conversion rate optimization services",
      "website conversion optimization",
      "GA4 setup",
      "Google Tag Manager setup",
      "content marketing services",
      "digital marketing strategy",
    ],
    path: "/services/seo-digital-marketing",
  }),
  title: "SEO & Digital Marketing Services | Grow Organic Visibility & Leads | Nexovio",
};

export default function Page() {
  return <SeoDigitalMarketing />;
}
