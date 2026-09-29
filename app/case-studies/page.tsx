import type { Metadata } from "next";
import CaseStudies from "@/src/views/case-studies/CaseStudies";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "Engineering Case Studies & Architectural Teardowns | Nexovio",
  description:
    "Explore in-depth technical case studies documenting how Nexovio Digital Solutions architects high-performance web applications, headless ecommerce migrations, custom AI workflows, and local SEO engines with verified business results.",
  keywords: [
    "web development case study",
    "headless ecommerce case study",
    "custom AI workflow case study",
    "HVAC digital booking platform",
    "headless ecommerce architecture",
    "Next.js engineering case study",
    "technical SEO case study",
    "FinTech mobile app case study",
  ],
  path: "/case-studies",
});

export default function Page() {
  return <CaseStudies />;
}
