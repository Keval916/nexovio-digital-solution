import type { Metadata } from "next";
import AiDevelopment from "@/src/views/services/AiDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Development Services | Custom AI Solutions & AI Agents",
  description:
    "Custom AI development services for businesses worldwide. Build generative AI, AI agents, chatbots, RAG, automation, ML, recommendations and AI-powered applications.",
  keywords: [
    // Primary & Commercial Keywords
    "AI Development Services",
    "AI Development Company",
    "AI Development Agency",
    "Custom AI Development",
    "Custom AI Solutions",
    "AI Software Development",
    "AI Application Development",
    "AI Solutions Company",
    "Artificial Intelligence Development Services",
    "Enterprise AI Development",
    "AI Consulting Services",
    "AI Integration Services",

    // Generative AI Cluster
    "Generative AI Development Services",
    "Generative AI Solutions",
    "Generative AI Application Development",
    "GenAI Development Company",
    "LLM Application Development",
    "Custom LLM Solutions",
    "RAG Development Services",
    "Retrieval Augmented Generation Development",

    // AI Agent & Automation Cluster
    "AI Agent Development",
    "AI Agent Development Services",
    "Agentic AI Development",
    "AI Automation Solutions",
    "AI Workflow Automation",
    "Autonomous AI Agents",
    "Enterprise AI Agents",

    // Conversational AI Cluster
    "AI Chatbot Development",
    "AI Chatbot Development Services",
    "Conversational AI Development",
    "AI Virtual Assistant Development",
    "Intelligent Chatbot Development",
    "Customer Service AI",
    "AI Customer Support Solutions",

    // Machine Learning & NLP Cluster
    "Machine Learning Development",
    "Machine Learning Services",
    "Predictive Analytics Solutions",
    "Machine Learning Application Development",
    "NLP Development Services",
    "Natural Language Processing Solutions",
    "Computer Vision Development",
    "Recommendation Engine Development",

    // Business-Problem Keywords
    "AI for Business Automation",
    "AI Business Process Automation",
    "AI Document Processing",
    "AI Knowledge Management",
    "Enterprise AI Search",
    "AI Customer Support Automation",
    "AI Data Analysis",
    "AI Decision Support",
    "AI Personalization",
    "AI Product Recommendations",
    "AI Lead Qualification",
    "AI Research Assistant",
    "AI Knowledge Assistant",

    // Industry Keyword Themes
    "AI Solutions for Healthcare",
    "AI Solutions for Fintech",
    "AI Solutions for Retail",
    "AI Solutions for E-commerce",
    "AI Solutions for Manufacturing",
    "AI Solutions for Logistics",
    "AI Solutions for Real Estate",
    "AI Solutions for Education",
    "AI Solutions for SaaS",
    "AI Solutions for Professional Services",
    "AI Solutions for Startups",
    "Enterprise AI Solutions",
  ],
  path: "/services/ai-development",
});

export default function Page() {
  return <AiDevelopment />;
}
