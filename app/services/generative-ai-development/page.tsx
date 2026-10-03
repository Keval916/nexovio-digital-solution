import type { Metadata } from "next";
import GenerativeAiDevelopment from "@/src/views/services/GenerativeAiDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Generative AI Development Services | Nexovio",
  description:
    "Build custom generative AI solutions with Nexovio. From LLM apps and prompt engineering to AI workflows and intelligent automation, turn AI into business value.",
  keywords: [
    "generative AI development services",
    "custom generative AI development",
    "generative AI solutions",
    "generative AI development company",
    "LLM development services",
    "AI application development",
    "AI workflow automation",
    "prompt engineering services",
    "RAG development services",
    "AI agent development",
    "enterprise generative AI solutions",
    "AI content generation",
    "custom AI solutions",
  ],
  path: "/services/generative-ai-development",
  ogImage: "/images/services/generative-ai/genai-hero-architects.jpg",
});

export default function Page() {
  return <GenerativeAiDevelopment />;
}
