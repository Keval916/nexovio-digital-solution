import type { Metadata } from "next";
import AiDevelopment from "@/src/views/services/AiDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Automation Services & Business Workflow Automation | Nexovio",
  description:
    "Deploy practical AI automation services and AI-powered business applications. Custom workflow automation, document processing, intelligent triage, and enterprise AI integrations.",
  keywords: [
    "AI automation services",
    "business workflow automation",
    "AI-powered business applications",
    "AI development company",
    "custom AI solutions",
    "AI integration services",
    "enterprise AI automation",
    "intelligent document processing",
    "AI chatbot development",
    "AI agent development",
  ],
  path: "/services/ai-development",
});

export default function Page() {
  return <AiDevelopment />;
}
