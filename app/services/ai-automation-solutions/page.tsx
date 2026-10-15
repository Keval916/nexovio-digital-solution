import type { Metadata } from "next";
import AiAutomationSolutions from "@/src/views/services/AiAutomationSolutions";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Automation Solutions & Workflow Engineering | Nexovio",
  description:
    "Automate complex business workflows, document processing, CRM routing & support triage with enterprise AI automation solutions by Nexovio.",
  keywords: [
    "AI automation solutions",
    "enterprise AI automation services",
    "AI workflow automation",
    "intelligent document processing",
    "business process automation AI",
    "AI robotic process automation",
    "CRM sales automation AI",
    "support ticket triage automation",
    "accounts payable AI automation",
    "custom AI automation company",
    "agentic workflow engineering",
    "enterprise automation consulting",
    "supply chain AI automation",
    "self healing IT ops AI",
    "compliance automation software",
  ],
  path: "/services/ai-automation-solutions",
});

export default function Page() {
  return <AiAutomationSolutions />;
}
