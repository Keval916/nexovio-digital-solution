import type { Metadata } from "next";
import AiAgentDevelopment from "@/src/views/services/AiAgentDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Agent Development Services | Autonomous Business Automation | Nexovio",
  description:
    "Build custom AI agents that understand context, connect to business data, and execute real workflows. Production AI agent development services by Nexovio.",
  keywords: [
    "AI agent development services",
    "custom AI agent development",
    "autonomous AI agents",
    "AI workflow automation agents",
    "multi-agent systems",
    "conversational AI agents",
    "enterprise AI agents",
    "RAG AI agents",
    "AI copilot development",
    "voice AI agents",
    "AI agent integration",
    "autonomous business automation",
    "AI agent company",
    "business process automation AI",
  ],
  path: "/services/ai-agent-development",
});

export default function Page() {
  return <AiAgentDevelopment />;
}
