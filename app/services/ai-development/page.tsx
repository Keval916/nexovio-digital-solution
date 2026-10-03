import type { Metadata } from "next";
import AiDevelopment from "@/src/views/services/AiDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Solutions & AI Automation Services for Businesses | Nexovio",
  description:
    "Build smarter business workflows with Nexovio AI solutions, AI integrations and automation designed to reduce manual work, improve efficiency and scale operations.",
  keywords: [
    "AI solutions for businesses",
    "AI automation services",
    "AI development company",
    "AI integration services",
    "AI business solutions",
    "AI workflow automation",
    "custom AI solutions",
    "AI development services",
    "generative AI solutions",
    "AI-powered applications",
    "business process automation",
  ],
  path: "/services/ai-development",
});

export default function Page() {
  return <AiDevelopment />;
}
