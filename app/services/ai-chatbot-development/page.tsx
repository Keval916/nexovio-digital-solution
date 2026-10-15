import type { Metadata } from "next";
import AiChatbotDevelopment from "@/src/views/services/AiChatbotDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Chatbot Development Services | Conversational AI | Nexovio",
  description:
    "Build custom AI chatbots with RAG knowledge grounding, WhatsApp integration & CRM connectivity. 24/7 intelligent conversational bots by Nexovio.",
  keywords: [
    "AI chatbot development services",
    "custom AI chatbot development",
    "conversational AI chatbots",
    "enterprise AI chatbots",
    "RAG AI chatbots",
    "customer support AI chatbot",
    "omnichannel chatbot development",
    "WhatsApp AI chatbot integration",
    "e-commerce AI chatbot",
    "lead qualification chatbot",
    "internal helpdesk AI chatbot",
    "voice conversational AI bot",
    "AI chatbot company",
    "LLM chatbot development",
    "intelligent virtual assistant development",
  ],
  path: "/services/ai-chatbot-development",
});

export default function Page() {
  return <AiChatbotDevelopment />;
}
