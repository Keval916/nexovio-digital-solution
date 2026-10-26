"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare,
  Bot,
  BrainCircuit,
  Workflow,
  Database,
  ArrowRight,
  Check,
  CheckCircle2,
  Search,
  ShieldCheck,
  Layers,
  Code2,
  Terminal,
  Settings2,
  Server,
  Eye,
  RefreshCw,
  FileText,
  BarChart3,
  Building2,
  Stethoscope,
  Landmark,
  ShoppingBag,
  Factory,
  Truck,
  Briefcase,
  Rocket,
  Lock,
  Compass,
  GitBranch,
  Sliders,
  Scale,
  Activity,
  UserCheck,
  TrendingUp,
  FileCheck,
  Lightbulb,
  Shield,
  Zap,
  HelpCircle,
  PhoneCall,
  Sparkles,
  Cpu,
  Gauge,
  Network,
  Users,
  AlertCircle,
  Headphones,
  Calendar,
  Globe2,
} from "lucide-react";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { Button } from "@/src/components/ui/Button";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { AnimateOnScroll } from "@/src/components/ui/AnimateOnScroll";
import { FaqSection } from "@/src/components/sections/FaqSection";
import {
  getOrganizationSchema,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/src/lib/schema";

// ============================================================================
// REALISTIC CHATBOT CARD IMAGE PREVIEW
// ============================================================================

function RealisticChatbotCardImage({
  image,
  imageAlt,
  number,
}: {
  image: string;
  imageAlt: string;
  number: string;
}) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-slate-950 group-hover:border-brand-cyan/50 shadow-sm transition-all duration-500">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-2.5 right-2.5">
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-md">
          {number}
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// DATA STRUCTURES: 10 CORE AI CHATBOT SERVICES
// ============================================================================

interface ChatbotServiceItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  keywordCluster: string;
  image: string;
  imageAlt: string;
  icon: React.ElementType;
  deliverables: string[];
}

const CHATBOT_SERVICES: ChatbotServiceItem[] = [
  {
    id: "custom-ai-chatbot-development",
    number: "01",
    badge: "BESPOKE LLM BOTS",
    title: "Custom AI Chatbot Development",
    tagline: "Tailored Conversational Architecture Built for Your Exact Brand Persona",
    description:
      "Design and engineer conversational bots around your specific business logic, customer journeys, brand guidelines, and domain terminology. We build multi-turn dialog state machines that converse naturally while strictly adhering to company policies.",
    keywordCluster: "custom AI chatbot development · bespoke conversational AI",
    image: "/images/services/ai-chatbots/custom-chatbot-development-card.jpg",
    imageAlt: "Software engineers and AI developers configuring custom conversational AI chatbot prompt pipelines and testing dialog state machines",
    icon: Bot,
    deliverables: [
      "Custom intent classification & multi-turn dialog trees",
      "Brand voice, tone & persona prompt engineering",
      "Context persistence & session memory across user visits",
      "Custom tool & API calling for transactional actions",
      "Graceful human escalation & fallback protocols",
    ],
  },
  {
    id: "customer-support-chatbots",
    number: "02",
    badge: "TIER-1 AUTOMATION",
    title: "24/7 AI Customer Support Chatbots",
    tagline: "Instant Inquiry Resolution with Natural Empathy & Zero Wait Times",
    description:
      "Automate tier-1 customer inquiries, ticket triage, order tracking, and dispute management around the clock. Deflect up to 80% of repetitive customer support volume while providing empathetic, accurate responses that delight users.",
    keywordCluster: "AI customer support chatbots · automated ticket deflection",
    image: "/images/services/ai-chatbots/customer-support-chatbot-card.jpg",
    imageAlt: "Customer support specialist reviewing intelligent conversational AI chatbot interface answering support tickets with instant automated resolution",
    icon: Headphones,
    deliverables: [
      "Instant first-response & 24/7 autonomous ticket resolution",
      "Order lookup, shipping status & dispute resolution workflows",
      "Sentiment analysis & empathetic tone adaptation in real time",
      "Seamless live agent handoff with full chat transcript context",
      "CSAT scoring & conversational quality analytics dashboard",
    ],
  },
  {
    id: "rag-knowledge-base-chatbots",
    number: "03",
    badge: "FACTUAL GROUNDING",
    title: "RAG & Knowledge Base Chatbots",
    tagline: "Accurate Answers Grounded in Your Verified Company Documents",
    description:
      "Connect conversational bots to your proprietary knowledge base, manuals, policy documents, and databases using Retrieval-Augmented Generation (RAG) for verifiable, citation-backed answers with strict factual guardrails.",
    keywordCluster: "RAG AI chatbots · knowledge base conversational search",
    image: "/images/services/ai-chatbots/rag-knowledge-chatbot-card.jpg",
    imageAlt: "Data engineers inspecting a Retrieval-Augmented Generation RAG AI chatbot with vector embeddings index and document search citations",
    icon: Database,
    deliverables: [
      "Vector database indexing (Pinecone, pgvector, Qdrant)",
      "Real-time document parsing, PDF ingestion & semantic chunking",
      "Inline source citations & page references for every claim",
      "Document-level permissions & data access control enforcement",
      "Strict anti-hallucination verification & factuality guardrails",
    ],
  },
  {
    id: "ecommerce-conversational-bots",
    number: "04",
    badge: "REVENUE ACCELERATION",
    title: "E-Commerce & Shopping Chatbots",
    tagline: "Intelligent Shopping Assistants That Recommend, Upsell & Drive Checkout",
    description:
      "Empower online shoppers with a personalized digital stylist and sales consultant. Guide visitors from discovery to checkout with real-time product recommendations, stock availability, cart recovery, and instant cross-sells.",
    keywordCluster: "ecommerce AI chatbots · conversational commerce · shopping assistant",
    image: "/images/services/ai-chatbots/ecommerce-sales-chatbot-card.jpg",
    imageAlt: "Digital retail specialist examining high converting ecommerce conversational AI shopping assistant on mobile and desktop display",
    icon: ShoppingBag,
    deliverables: [
      "Shopify, WooCommerce & custom catalog real-time sync",
      "Dynamic interactive product cards with live stock & pricing",
      "In-chat cart additions & one-click checkout guidance",
      "Abandoned cart re-engagement via WhatsApp or Web chat",
      "Post-purchase order updates & automated reorder prompts",
    ],
  },
  {
    id: "omnichannel-messaging-bots",
    number: "05",
    badge: "UNIFIED ENGAGEMENT",
    title: "Omnichannel Messaging Chatbots",
    tagline: "Meet Customers Anywhere on WhatsApp, Web, Slack, and Messenger",
    description:
      "Deploy unified conversational experiences across all customer touchpoints. Maintain continuous conversation state whether a user interacts via your website chat widget, WhatsApp Business, Instagram DM, or Slack.",
    keywordCluster: "WhatsApp AI chatbot · omnichannel conversational AI",
    image: "/images/services/ai-chatbots/omnichannel-messaging-bot-card.jpg",
    imageAlt: "Omnichannel AI chatbot integration dashboard displaying real-time message sync across WhatsApp Business, Slack, Apple Messages, and Web chat",
    icon: Network,
    deliverables: [
      "WhatsApp Business API integration & verified green-tick setup",
      "Modern embeddable Web chat widget with custom theme & branding",
      "Slack, Microsoft Teams & Discord enterprise bots",
      "Instagram DM & Facebook Messenger customer support automation",
      "Synchronized user profile & cross-channel conversation history",
    ],
  },
  {
    id: "internal-helpdesk-chatbots",
    number: "06",
    badge: "WORKFORCE PRODUCTIVITY",
    title: "Internal Employee Helpdesk Chatbots",
    tagline: "Empower Internal Teams with Instant Answers on IT, HR, and Policy",
    description:
      "Eliminate internal support bottlenecks with conversational assistants embedded in Slack or Teams. Give employees instant answers to IT setup, benefits, leave balances, company SOPs, and routine administrative requests.",
    keywordCluster: "internal IT helpdesk chatbot · HR employee assistant bot",
    image: "/images/services/ai-chatbots/internal-helpdesk-bot-card.jpg",
    imageAlt: "Corporate employee in a contemporary office interacting with an intelligent internal AI helpdesk chatbot on laptop screen",
    icon: Users,
    deliverables: [
      "Slack & Microsoft Teams workspace integrations",
      "Automated password resets & routine IT troubleshooting steps",
      "HR benefits, leave policy & employee onboarding guides",
      "Jira, ServiceNow & Linear ticket auto-generation",
      "Role-based data scoping protecting sensitive HR and finance data",
    ],
  },
  {
    id: "lead-qualification-bots",
    number: "07",
    badge: "PIPELINE GENERATION",
    title: "B2B Lead Qualification & Booking Bots",
    tagline: "Engage Website Visitors, Qualify Buyer Intent & Book Meetings 24/7",
    description:
      "Convert anonymous website traffic into qualified pipeline. Our conversational bots ask qualifying discovery questions, score lead intent, enrich company data, and book sales meetings directly into rep calendars.",
    keywordCluster: "AI lead qualification chatbot · automated meeting booking bot",
    image: "/images/services/ai-chatbots/lead-qualification-bot-card.jpg",
    imageAlt: "B2B sales specialist reviewing automated conversational AI lead qualification bot interface showing calendar booking and CRM pipeline",
    icon: TrendingUp,
    deliverables: [
      "Custom discovery questioning & BANT lead scoring models",
      "Native Google Calendar, Outlook & Calendly booking integration",
      "Automated CRM contact creation & enrichment (HubSpot, Salesforce)",
      "Real-time Slack & email notifications for high-intent VIP leads",
      "In-chat lead capture with disposable email & spam filtering",
    ],
  },
  {
    id: "voice-conversational-bots",
    number: "08",
    badge: "GLOBAL ACCESSIBILITY",
    title: "Multilingual & Voice-Enabled Chatbots",
    tagline: "Real-Time Natural Conversations Across 95+ Languages & Voice Channels",
    description:
      "Expand your global reach with chatbots that dynamically detect and communicate in over 95 languages, plus ultra-low latency speech-to-speech telephony integrations for inbound phone customer support.",
    keywordCluster: "multilingual AI chatbots · voice conversational AI",
    image: "/images/services/ai-chatbots/voice-conversational-bot-card.jpg",
    imageAlt: "Audio engineer and AI developer reviewing a real-time multilingual voice AI chatbot system with sound frequency waveforms",
    icon: Globe2,
    deliverables: [
      "Automatic language detection & fluent multi-language responses",
      "Dialect-aware localization & cultural nuance preservation",
      "Real-time speech-to-speech with sub-second latency (<800ms)",
      "Twilio & SIP telephony integration for inbound phone support",
      "In-chat voice note playback, audio recording & transcription",
    ],
  },
  {
    id: "crm-api-integrated-chatbots",
    number: "09",
    badge: "CLOSED-LOOP ACTIONS",
    title: "CRM, ERP & API Integrated Chatbots",
    tagline: "Transform Chats into Real Business Transactions Across Your Software Stack",
    description:
      "Turn conversations into measurable operational action. Connect chatbots to your CRMs, payment gateways, booking engines, and internal databases via secure, schema-validated function calling.",
    keywordCluster: "CRM integrated chatbot · API function calling bot",
    image: "/images/services/ai-chatbots/crm-api-integrated-bot-card.jpg",
    imageAlt: "Enterprise systems architect inspecting real-time API integrations connecting conversational AI chatbot to Salesforce CRM and databases",
    icon: Terminal,
    deliverables: [
      "Bidirectional connectors for Salesforce, HubSpot, Zendesk & Zoho",
      "Stripe, PayPal & Razorpay payment trigger integrations",
      "Custom REST & GraphQL API tool orchestration via function calling",
      "Enterprise OAuth2 authentication & encrypted secrets management",
      "Resilient retry policies, rate limiting & error handling",
    ],
  },
  {
    id: "ai-safety-guardrails-chatbots",
    number: "10",
    badge: "ENTERPRISE TRUST",
    title: "AI Safety, Guardrails & Defense",
    tagline: "Strict Moderation, Prompt-Injection Defense & Brand Safety Controls",
    description:
      "Protect your brand reputation with production-grade guardrails. Prevent prompt injections, jailbreaks, toxicity, competitor bias, and hallucinated commitments before messages ever reach your users.",
    keywordCluster: "AI chatbot guardrails · hallucination defense · prompt injection security",
    image: "/images/services/ai-chatbots/security-guardrails-chatbot-card.jpg",
    imageAlt: "Cybersecurity and AI alignment engineer evaluating conversational AI chatbot safety guardrails and prompt injection shields on monitors",
    icon: ShieldCheck,
    deliverables: [
      "NeMo Guardrails & Llama Guard content moderation integration",
      "Automated prompt injection & adversarial jailbreak defense",
      "PII masking, data sanitization & GDPR compliance filters",
      "Deterministic business rule verification before response delivery",
      "Fallback escalation gates when model confidence drops below threshold",
    ],
  },
];

// ============================================================================
// 8 BUSINESS USE CASES
// ============================================================================

interface UseCaseItem {
  area: string;
  badge: string;
  icon: React.ElementType;
  workflows: string;
  businessOutcome: string;
}

const BUSINESS_USE_CASES: UseCaseItem[] = [
  {
    area: "Customer Support & Service",
    badge: "SUPPORT & RESOLUTION",
    icon: Headphones,
    workflows:
      "Resolve routine order inquiries, process refund requests, troubleshoot common technical problems, issue returns, and escalate complex edge cases.",
    businessOutcome: "Sub-second response time · Up to 80% tier-1 ticket deflection · 24/7 availability",
  },
  {
    area: "E-Commerce & Digital Retail",
    badge: "SALES & RECOVERY",
    icon: ShoppingBag,
    workflows:
      "Deliver tailored product recommendations, answer sizing and shipping queries, recover abandoned carts on WhatsApp, and process in-chat reorders.",
    businessOutcome: "+24% average order value · 3.5x higher cart recovery rate · Zero customer drop-off",
  },
  {
    area: "B2B SaaS & Tech Sales",
    badge: "PIPELINE ACCELERATION",
    icon: TrendingUp,
    workflows:
      "Engage high-intent website visitors, qualify buyer authority and budget (BANT), answer product architecture questions, and book calendar demos.",
    businessOutcome: "Instant lead qualification · 4x faster meeting booking · 100% CRM sync accuracy",
  },
  {
    area: "Financial Services & Fintech",
    badge: "SECURE ASSISTANCE",
    icon: Landmark,
    workflows:
      "Guide loan applications, check account balances, explain investment products, assist KYC document submission, and verify transaction statuses.",
    businessOutcome: "Bank-grade PII masking · End-to-end data encryption · Full audit trace compliance",
  },
  {
    area: "Healthcare & Wellness Clinics",
    badge: "PATIENT TRIAGE",
    icon: Stethoscope,
    workflows:
      "Schedule patient consultations, provide clinic hours and treatment prep instructions, answer FAQs, and route urgent symptoms to staff.",
    businessOutcome: "HIPAA-compliant data handling · 60% reduction in phone hold times · Automated booking",
  },
  {
    area: "Real Estate & Property Management",
    badge: "PROPERTY INQUIRIES",
    icon: Building2,
    workflows:
      "Share property brochures, answer pricing and floorplan questions, pre-screen buyer eligibility, and schedule on-site viewings with agents.",
    businessOutcome: "Instant property inquiries · Zero missed weekend leads · Verified buyer pre-screening",
  },
  {
    area: "Travel & Hospitality",
    badge: "BOOKING CONCIERGE",
    icon: Globe2,
    workflows:
      "Assist room reservations, share local itinerary recommendations, answer amenity and policy queries, and handle check-in requests.",
    businessOutcome: "Multilingual guest support · Higher direct booking conversions · 24/7 concierge",
  },
  {
    area: "Internal HR & IT Operations",
    badge: "WORKFORCE SUPPORT",
    icon: Users,
    workflows:
      "Answer company policy and benefits questions, assist password resets, guide software provisioning, and create internal service desk tickets.",
    businessOutcome: "Instant employee resolution · 50% fewer repetitive internal IT support tickets",
  },
];

// ============================================================================
// 7 HOW AI CHATBOTS WORK STEPS
// ============================================================================

const HOW_CHATBOTS_WORK_STEPS = [
  {
    step: "01",
    title: "Capture & Intent Classification",
    desc: "The bot ingests user messages across Web, WhatsApp, or Slack and leverages natural language processing to identify exact user intent and sentiment.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Context & Multi-Turn Memory",
    desc: "The system retrieves conversation history, user identity, and session entities to maintain coherent, multi-turn conversational context.",
    icon: BrainCircuit,
  },
  {
    step: "03",
    title: "Knowledge Grounding (RAG)",
    desc: "The bot queries approved enterprise vector databases and documents to retrieve verifiable facts rather than relying on ungrounded model weights.",
    icon: Database,
  },
  {
    step: "04",
    title: "Tool Calling & System Execution",
    desc: "If the conversation requires real action (order lookup, booking, ticket creation), the bot securely invokes connected CRM and ERP APIs.",
    icon: Terminal,
  },
  {
    step: "05",
    title: "Safety & Guardrail Validation",
    desc: "Every response is evaluated against prompt injection defenses, hallucination filters, and brand safety guardrails before rendering.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Natural-Sounding Delivery",
    desc: "The response is formatted with empathy, clarity, brand tone, interactive action buttons, or dynamic product cards for maximum engagement.",
    icon: MessageSquare,
  },
  {
    step: "07",
    title: "Human Escalation & Feedback",
    desc: "Ambiguous or sensitive inquiries seamlessly transition to human specialists with full chat transcripts, feeding continuous optimization loops.",
    icon: RefreshCw,
  },
];

// ============================================================================
// 10 CORE CAPABILITIES
// ============================================================================

const CORE_CAPABILITIES = [
  {
    title: "Multi-Turn Context & Dialog Memory",
    desc: "Remembers previous statements, user preferences, and entity parameters across complex multi-step conversations.",
    icon: BrainCircuit,
  },
  {
    title: "RAG Enterprise Knowledge Grounding",
    desc: "Responses anchored in trusted enterprise documentation with citation-backed retrieval and factual verification.",
    icon: Database,
  },
  {
    title: "Dynamic Intent & Sentiment Detection",
    desc: "Accurately interprets nuance, frustration, urgency, and colloquial phrasing to adapt tone and urgency in real time.",
    icon: MessageSquare,
  },
  {
    title: "Omnichannel Channel Synchronization",
    desc: "Unifies conversations across Website Chat, WhatsApp Business, Slack, Microsoft Teams, and Instagram DMs.",
    icon: Network,
  },
  {
    title: "Real-Time Tool Calling & API Actions",
    desc: "Direct integration with CRMs, ERPs, databases, and payment processors to complete transactions inside the chat.",
    icon: Terminal,
  },
  {
    title: "Interactive Rich UI Components",
    desc: "Renders carousel product cards, quick-reply buttons, date pickers, and checkout links inside modern chat widgets.",
    icon: Layers,
  },
  {
    title: "AI Safety & Content Guardrails",
    desc: "Hardened against prompt injections, jailbreaks, PII leakage, and off-topic inquiries with strict safety filters.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Human Handoff with Transcripts",
    desc: "Intelligently transfers conversations to live human agents with summarized context and full transcript history.",
    icon: UserCheck,
  },
  {
    title: "Conversational Analytics & Telemetry",
    desc: "Deep visibility into deflection rates, user drop-offs, sentiment trends, and unanswered question clusters.",
    icon: Activity,
  },
  {
    title: "Intelligent Model Routing & Cost Control",
    desc: "Routes simple queries to fast models and complex queries to frontier LLMs, cutting inference cloud costs by up to 60%.",
    icon: Gauge,
  },
];

// ============================================================================
// CHATBOT VS AI AGENT COMPARISON
// ============================================================================

const COMPARISON_ROWS = [
  {
    capability: "Primary Focus",
    traditional: "Static rule-based keyword match or scripted decision trees",
    nexovio: "Context-aware conversational AI with dynamic reasoning & deep RAG grounding",
  },
  {
    capability: "Language Understanding",
    traditional: "Breaks when user deviates from rigid pre-programmed keyword phrases",
    nexovio: "Understands nuance, typos, complex multi-part questions, and natural phrasing",
  },
  {
    capability: "Knowledge Sources",
    traditional: "Hardcoded FAQ tables that require constant manual updating",
    nexovio: "Dynamic semantic retrieval across manuals, databases, APIs, and live docs",
  },
  {
    capability: "Action Capabilities",
    traditional: "Passive information display with external links only",
    nexovio: "Executes real transactions (orders, bookings, refunds, ticket creation)",
  },
  {
    capability: "Channel Availability",
    traditional: "Isolated web widget only with no memory across channels",
    nexovio: "Synchronized cross-channel experience (WhatsApp, Web, Slack, Messenger)",
  },
  {
    capability: "Hallucination Defense",
    traditional: "No generative reasoning (scripted answers only)",
    nexovio: "Strict enterprise guardrails with verifiable source citations and confidence gating",
  },
  {
    capability: "Human Handoff",
    traditional: "Abrupt transfer or hard email notification with zero chat context",
    nexovio: "Real-time handoff to Zendesk, HubSpot, or LiveChat with full context summary",
  },
];

// ============================================================================
// 7-STAGE PROCESS
// ============================================================================

const DEVELOPMENT_PROCESS_STAGES = [
  {
    stage: "01",
    name: "Discovery & Persona Mapping",
    desc: "We analyze your customer touchpoints, user journey bottlenecks, brand tone, FAQs, and target conversational goals to establish a clear roadmap.",
    icon: Compass,
    deliverable: "Conversational Architecture & Persona Specification",
  },
  {
    stage: "02",
    name: "Knowledge Ingestion & Vector Setup",
    desc: "We ingest, clean, and vectorize your company documentation, FAQs, product catalogs, and policies with semantic chunking and metadata tags.",
    icon: Database,
    deliverable: "Secure Vector Database & RAG Pipeline Setup",
  },
  {
    stage: "03",
    name: "Prompt Engineering & Flow Logic",
    desc: "We engineer system prompts, multi-turn dialog trees, brand persona constraints, context memory windows, and fallback responses.",
    icon: Code2,
    deliverable: "Hardened System Prompts & Conversational State Graphs",
  },
  {
    stage: "04",
    name: "Tool Calling & System Integrations",
    desc: "We build secure API connectors linking the bot to your CRM, ERP, booking calendars, ticketing helpdesks, and payment gateways.",
    icon: Terminal,
    deliverable: "Schema-Validated Function Calling & API Endpoints",
  },
  {
    stage: "05",
    name: "Safety Guardrails & Compliance",
    desc: "We implement prompt-injection defense, PII masking, toxicity filters, competitor blocks, and confidence scoring gates.",
    icon: ShieldCheck,
    deliverable: "Enterprise Guardrails & Security Compliance Suite",
  },
  {
    stage: "06",
    name: "Adversarial Testing & User Tuning",
    desc: "We test edge cases, ambiguous inputs, dialect variations, and adversarial prompts against golden benchmarks before launch.",
    icon: Activity,
    deliverable: "Evaluation Benchmark Report & QA Sign-Off",
  },
  {
    stage: "07",
    name: "Omnichannel Launch & Optimization",
    desc: "We deploy the bot to your website, WhatsApp, or Slack, monitor live conversation transcripts, and iteratively refine performance.",
    icon: Rocket,
    deliverable: "Production Deployment, Runbooks & Telemetry Dashboard",
  },
];

// ============================================================================
// 7 SECURITY & GOVERNANCE PILLARS
// ============================================================================

const SECURITY_PILLARS = [
  {
    title: "Zero-Data Retention & Private VPC",
    desc: "Your proprietary knowledge base and customer chats are never used to train public foundation models.",
    icon: Lock,
  },
  {
    title: "PII Masking & Data Sanitization",
    desc: "Credit card numbers, phone numbers, and private credentials are automatically redacted before model inference.",
    icon: ShieldCheck,
  },
  {
    title: "Hardened Prompt Injection Defense",
    desc: "Multi-layered input validation shields prevent malicious users from overriding system instructions or leaking prompts.",
    icon: Shield,
  },
  {
    title: "Least-Privilege API Scoping",
    desc: "Chatbots execute actions only through tightly scoped, sandboxed API endpoints with strict read/write boundaries.",
    icon: Terminal,
  },
  {
    title: "Audit Logging & Transcript Retention",
    desc: "Immutable conversation logs, user queries, tool payloads, and latency telemetry preserved for compliance reviews.",
    icon: FileCheck,
  },
  {
    title: "Confidence Gating & Controlled Fallbacks",
    desc: "If model confidence drops below your strict threshold, the bot gracefully offers assistance or escalates to a human.",
    icon: AlertCircle,
  },
  {
    title: "SOC2 & GDPR Compliance Standards",
    desc: "Engineered from the ground up to comply with GDPR data subject rights, CCPA, and enterprise SOC2 requirements.",
    icon: Scale,
  },
];

// ============================================================================
// 10 FAQS
// ============================================================================

const FAQS = [
  {
    question: "What is custom AI chatbot development?",
    answer:
      "Custom AI chatbot development is the process of designing, building, and deploying tailored conversational AI software powered by Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). Unlike generic rule-based chatbots that rely on rigid scripts, custom AI chatbots understand natural language nuance, access your company knowledge base, connect with your business software (CRM, ERP, ticketing), and resolve customer or employee inquiries with human-like accuracy.",
  },
  {
    question: "How is an AI chatbot different from traditional rule-based chatbots?",
    answer:
      "Traditional chatbots follow rigid 'if-this-then-that' decision trees and break as soon as a user asks a question in a phrasing the programmer didn't foresee. In contrast, modern AI chatbots understand intent, context, typos, and colloquialisms. They can retrieve verified answers from your live documentation, hold natural multi-turn conversations, adapt their tone, and execute real actions like updating account records or booking meetings.",
  },
  {
    question: "Can an AI chatbot integrate with our existing CRM, ERP, and databases?",
    answer:
      "Yes. We specialize in building deeply integrated conversational bots. We connect chatbots to Salesforce, HubSpot, Zendesk, Jira, Shopify, WooCommerce, PostgreSQL, MongoDB, custom REST APIs, and webhook endpoints. This allows the chatbot to look up order statuses, update customer profiles, book appointments, and trigger business actions directly within the conversation.",
  },
  {
    question: "How do you prevent the AI chatbot from hallucinating or giving incorrect answers?",
    answer:
      "We implement Retrieval-Augmented Generation (RAG) combined with strict enterprise guardrails. The chatbot is instructed to answer exclusively using retrieved passages from your verified documents and knowledge base, with inline citations. If an inquiry falls outside approved company knowledge, the chatbot is engineered to acknowledge its boundaries gracefully or escalate to a human specialist rather than guessing.",
  },
  {
    question: "Can the chatbot operate on WhatsApp, Slack, and our website simultaneously?",
    answer:
      "Yes. We build omnichannel conversational architectures with a single intelligent core. Your users can start a conversation on your website chat widget, continue it on WhatsApp Business, or interact internally on Slack or Microsoft Teams. Conversation state, customer history, and business rules remain synchronized across all channels.",
  },
  {
    question: "What happens when the chatbot cannot answer a customer's question?",
    answer:
      "We build seamless human escalation workflows. When a user asks a question with high ambiguity, expresses negative sentiment, or specifically requests a human agent, the chatbot cleanly routes the conversation to your live support team (via Zendesk, LiveChat, Freshdesk, or email) along with a structured summary and complete conversation transcript.",
  },
  {
    question: "How long does custom AI chatbot development take?",
    answer:
      "A focused, high-impact conversational bot for customer service or lead qualification typically takes 3 to 5 weeks from initial discovery to production deployment. Highly complex enterprise projects involving multi-channel sync, deep ERP integrations, and custom voice telephony usually take 6 to 9 weeks.",
  },
  {
    question: "Will our proprietary business data be used to train public AI models?",
    answer:
      "No, never. We engineer conversational solutions using enterprise commercial APIs (such as OpenAI Enterprise, Azure OpenAI, Anthropic Claude, and Google Cloud Vertex) with explicit zero-data-retention agreements, or self-hosted open-source models (like Llama 3) deployed inside your private VPC. Your proprietary business data and customer conversations remain 100% confidential and are never used to train public models.",
  },
  {
    question: "Can an AI chatbot handle voice conversations and telephone calls?",
    answer:
      "Yes. We build voice-enabled conversational AI systems that combine speech-to-text, LLM reasoning, and natural text-to-speech with ultra-low latency (<800ms). These can be deployed directly into website interfaces, mobile applications, or connected to telephone lines via Twilio or SIP telephony for automated inbound phone customer support.",
  },
  {
    question: "How do we get started with Nexovio on our chatbot project?",
    answer:
      "Getting started is straightforward. Schedule a discovery call with our conversational AI engineering team. We'll analyze your existing customer touchpoints, review your knowledge base and integration requirements, and provide a clear architecture blueprint, deliverables timeline, and cost estimate.",
  },
];

// ============================================================================
// MAIN AI CHATBOT DEVELOPMENT VIEW
// ============================================================================

export default function AiChatbotDevelopment() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "AI Chatbot Development Services",
    description:
      "Custom AI chatbot development services by Nexovio. Build intelligent, 24/7 conversational bots with RAG knowledge grounding, WhatsApp integration, and CRM connectivity.",
    url: "/services/ai-chatbot-development",
    serviceType: "AI Chatbot Development Services",
    image: "/images/services/ai-chatbots/ai-chatbot-hero-interface.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Chatbot Development", url: "/services/ai-chatbot-development" },
  ]);

  return (
    <>
      {/* Structured Data (Schema.org) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main id="main-content" className="relative min-h-screen bg-slate-50 dark:bg-[#040814] text-slate-900 dark:text-white transition-colors duration-300">

        {/* =================================================================== */}
        {/* 1. HERO SECTION                                                     */}
        {/* =================================================================== */}
        <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/5">
          {/* Subtle Ambient Aura */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-tr from-cyan-600/10 via-blue-500/15 to-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { name: "Services", url: "/services" },
                  { name: "AI Chatbot Development", url: "/services/ai-chatbot-development" },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Hero Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <AnimateOnScroll variant="fadeUp">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#1769FF]/30 bg-[#1769FF]/[0.08] text-[#1769FF] dark:text-cyan-400 shadow-xs">
                    <MessageSquare className="w-3.5 h-3.5 animate-pulse" />
                    <span>Conversational AI &amp; Intelligent Assistants</span>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                    AI Chatbot Development Services for{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      24/7 Customer Engagement &amp; Growth
                    </span>
                  </h1>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.2}>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Transform customer interactions with custom AI chatbots that understand natural language, ground responses in your verified business data, and execute real actions across your existing software stack. Move beyond rigid keyword bots to deliver empathetic, context-aware conversational experiences that deflect support costs and drive pipeline.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.25}>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    From 24/7 customer support and e-commerce shopping assistants to WhatsApp automation, lead qualification, and internal employee helpdesks — we design, train, and deploy enterprise conversational AI tailored to your exact workflows and security requirements.
                  </p>
                </AnimateOnScroll>

                {/* Key Capability Badges */}
                <AnimateOnScroll variant="fadeUp" delay={0.3}>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      "Context-Aware Dialog",
                      "RAG Document Grounding",
                      "WhatsApp Business API",
                      "CRM & ERP Tool Calling",
                      "Factual Grounding Guardrails",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 shadow-2xs"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </AnimateOnScroll>

                {/* Primary Action Buttons */}
                <AnimateOnScroll variant="fadeUp" delay={0.35}>
                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    <Button
                      variant="primary"
                      size="lg"
                      href="/contact"
                      icon={<ArrowRight className="w-4 h-4 shrink-0" />}
                      className="whitespace-nowrap shadow-lg shadow-blue-600/20 font-bold"
                    >
                      Build Your Custom Chatbot
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      href="/schedule-a-call"
                      className="whitespace-nowrap font-medium"
                    >
                      Discuss Your Use Case
                    </Button>
                  </div>
                </AnimateOnScroll>

                {/* Quick Anchor Navigation */}
                <AnimateOnScroll variant="fadeUp" delay={0.4}>
                  <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted">
                    <span className="font-mono text-[11px] text-brand-cyan uppercase font-bold">Quick Jump:</span>
                    <a href="#services" className="hover:text-brand-cyan transition-colors underline-offset-4 hover:underline">
                      Services
                    </a>
                    <span className="text-slate-400 dark:text-white/20">&bull;</span>
                    <a href="#business-use-cases" className="hover:text-brand-cyan transition-colors underline-offset-4 hover:underline">
                      Use Cases
                    </a>
                    <span className="text-slate-400 dark:text-white/20">&bull;</span>
                    <a href="#how-it-works" className="hover:text-brand-cyan transition-colors underline-offset-4 hover:underline">
                      How It Works
                    </a>
                    <span className="text-slate-400 dark:text-white/20">&bull;</span>
                    <a href="#traditional-vs-ai-comparison" className="hover:text-brand-cyan transition-colors underline-offset-4 hover:underline">
                      AI vs Traditional
                    </a>
                    <span className="text-slate-400 dark:text-white/20">&bull;</span>
                    <a href="#development-process" className="hover:text-brand-cyan transition-colors underline-offset-4 hover:underline">
                      7-Stage Process
                    </a>
                    <span className="text-slate-400 dark:text-white/20">&bull;</span>
                    <a href="#faqs" className="hover:text-brand-cyan transition-colors underline-offset-4 hover:underline">
                      FAQs
                    </a>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <AnimateOnScroll variant="fadeLeft" delay={0.2} className="w-full">
                  <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-white/80 dark:bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                    <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[450px] lg:h-[500px] w-full bg-[#050914]">
                      <Image
                        src="/images/services/ai-chatbots/ai-chatbot-hero-interface.jpg"
                        alt="High-tech enterprise software engineering studio with specialists observing conversational AI chatbot interfaces and real-time message streams on curved displays"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                        className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/85 via-transparent to-transparent pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 2. CONVERSATIONAL INTELLIGENCE OVER RIGID SCRIPTS (STICKY VALUE PROP) */}
        {/* =================================================================== */}
        <section id="conversational-intelligence" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Side Graphic Banner (Sticky on Top during Scroll) */}
              <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
                <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                  <div className="relative overflow-hidden rounded-xl h-[360px] sm:h-[440px] lg:h-[500px] w-full">
                    <Image
                      src="/images/services/ai-chatbots/conversational-ai-workflow-banner.jpg"
                      alt="Operations analytics dashboard showcasing multichannel conversational AI chatbot workflow with message triage, intent recognition, and live customer resolution metrics"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/75 via-transparent to-transparent pointer-events-none rounded-xl" />
                  </div>
                </div>
              </div>

              {/* Right Side Value Proposition Content */}
              <div className="lg:col-span-6 space-y-6">
                <AnimateOnScroll variant="fadeUp">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                    CONVERSATIONAL EXCELLENCE
                  </span>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Deliver Real Solutions, Not{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Frustrating Loops
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <div className="space-y-4 text-base text-muted leading-relaxed">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Traditional chatbots fail because they force users into rigid decision trees that break as soon as a question deviates from a hardcoded script. Today’s buyers and customers expect natural conversations, instant accuracy, and real problem-solving.
                    </p>
                    <p>
                      At Nexovio, we engineer conversational AI that listens, understands nuanced intent, cross-references verified business knowledge, and takes real actions. Whether looking up an order, answering a technical policy question, or booking a qualified sales demo, our chatbots deliver immediate value while protecting your brand with enterprise guardrails.
                    </p>
                  </div>
                </AnimateOnScroll>

                {/* 6 Value Pillars with Left Border Slide-Down Hover */}
                <div className="space-y-3 pt-2">
                  {[
                    {
                      title: "Natural Intent & Sentiment Comprehension",
                      description: "Interprets conversational nuances, colloquial phrasing, typos, and emotional cues to respond appropriately.",
                    },
                    {
                      title: "Grounded in Your Approved Company Data",
                      description: "Connects directly to your internal documents, knowledge base, and product catalogs to provide verified, citation-backed answers.",
                    },
                    {
                      title: "Dynamic Tool & API Execution",
                      description: "Executes real actions in connected systems: creating helpdesk tickets, updating CRM contacts, and processing live bookings.",
                    },
                    {
                      title: "Omnichannel Cross-Platform Continuity",
                      description: "Maintains coherent conversation context across Website Chat, WhatsApp Business, Slack, Teams, and Instagram DMs.",
                    },
                    {
                      title: "Smart Escalation with Full Context",
                      description: "Transfers complex or sensitive inquiries to human agents with a structured summary, eliminating repetitive user explanations.",
                    },
                    {
                      title: "Continuous Telemetry & Quality Auditing",
                      description: "Tracks resolution rates, customer sentiment, and unanswered questions to continuously refine accuracy and business ROI.",
                    },
                  ].map((vp, index) => (
                    <AnimateOnScroll key={vp.title} variant="fadeUp" delay={0.1 + index * 0.05}>
                      <div className="relative overflow-hidden group flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.04] hover:translate-x-2 transition-all duration-300 shadow-xs">
                        {/* Hover: Left Accent Border Slide Down */}
                        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-cyan via-brand-bright to-brand-electric scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5 group-hover:scale-125 group-hover:text-brand-bright transition-transform duration-300" />
                        <div>
                          <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                            {vp.title}
                          </h3>
                          <p className="text-xs text-muted leading-relaxed mt-0.5">
                            {vp.description}
                          </p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>

                {/* Core Promise Callout Banner */}
                <AnimateOnScroll variant="fadeUp" delay={0.4}>
                  <div className="p-4 rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 space-y-1 text-xs">
                    <span className="font-bold text-brand-cyan block uppercase tracking-wider">
                      MEASURABLE OUTCOME: INSTANT RESOLUTION &amp; COST DEFLECTION
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">
                      We focus on tangible business metrics: cutting support response times from hours to seconds, deflecting up to 80% of routine inquiries, and converting up to 3x more website visitors into qualified pipeline.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 3. WHAT IS MODERN AI CHATBOT DEVELOPMENT? (ARCHITECTURE DEEP DIVE) */}
        {/* =================================================================== */}
        <section id="what-is-ai-chatbot-development" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <AnimateOnScroll variant="fadeUp">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                    SYSTEM ARCHITECTURE
                  </span>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    What Is Modern{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      AI Chatbot Development?
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <div className="space-y-4 text-base text-muted leading-relaxed">
                    <p>
                      Modern AI chatbot development is the engineering discipline of combining Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), conversational state machines, and system API connectors into reliable software that interacts with humans naturally.
                    </p>
                    <p>
                      Rather than relying on generic out-of-the-box widgets, an enterprise AI chatbot is engineered around your specific data boundaries, security requirements, and business goals. It features real-time semantic search to retrieve accurate facts from your manuals, strict safety guardrails to prevent hallucinations, and integration hooks to read and write records across your CRM, helpdesk, or transactional databases.
                    </p>
                  </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071328] space-y-2">
                    <div className="flex items-center gap-2 text-brand-cyan">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase">Customer-Facing Bots</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Engineered for high-volume public engagement: 24/7 customer service, product recommendations, lead qualification, and appointment booking with friendly, empathetic brand alignment.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071328] space-y-2">
                    <div className="flex items-center gap-2 text-brand-bright">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase">Internal Enterprise Bots</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Embedded directly into Slack or Microsoft Teams: assisting employees with internal IT troubleshooting, HR policy queries, code repositories, and secure operational task automation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <AnimateOnScroll variant="fadeLeft">
                  <div className="p-6 sm:p-7 rounded-2xl border border-brand-cyan/30 bg-slate-50 dark:bg-[#071126] shadow-xl space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                      <span className="text-xs font-mono font-bold uppercase text-brand-cyan">
                        5 CORE ARCHITECTURAL LAYERS
                      </span>
                      <span className="text-[11px] font-mono text-muted">Production Grade</span>
                    </div>

                    <ul className="space-y-3.5">
                      {[
                        { title: "Natural Language Processing (NLP)", desc: "Frontier LLM or private fine-tuned model for context and intent recognition" },
                        { title: "Knowledge Retrieval Engine (RAG)", desc: "Vector embeddings index retrieving verified context from your documents" },
                        { title: "Dialog State & Session Memory", desc: "Short-term conversation buffer + persistent customer entity tracking" },
                        { title: "Tool Execution Gateway", desc: "Bidirectional API connectors for CRM, ERP, and payment transaction actions" },
                        { title: "Safety & Moderation Guardrails", desc: "Real-time prompt injection defense, hallucination filters, and PII masking" },
                      ].map((item, idx) => (
                        <li key={item.title} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-md bg-brand-cyan/15 text-brand-cyan text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="text-xs font-bold text-slate-900 dark:text-white block">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-muted leading-snug block">
                              {item.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-slate-200 dark:border-white/10">
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-brand-cyan hover:underline flex items-center gap-1.5"
                      >
                        <span>Architect your custom chatbot infrastructure</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 4. ARCHITECTURAL COMPARISON: TRADITIONAL VS AI CHATBOTS              */}
        {/* =================================================================== */}
        <section id="traditional-vs-ai-comparison" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="ARCHITECTURAL COMPARISON"
                title="Traditional Rule-Based Bots vs."
                highlightText="Modern AI Chatbots"
                description="Understanding why legacy decision-tree bots frustrate customers, and how modern LLM-powered conversational architectures drive measurable business ROI."
                align="center"
              />
            </AnimateOnScroll>

            <div className="mt-12 overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm">
                  <table className="min-w-full divide-y divide-slate-200 dark:divide-white/10 text-left text-sm">
                    <thead className="bg-slate-100 dark:bg-[#071328]">
                      <tr>
                        <th scope="col" className="py-4 px-6 font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider font-mono">
                          Capability
                        </th>
                        <th scope="col" className="py-4 px-6 font-bold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-mono w-2/5">
                          Traditional Rule-Based Bot
                        </th>
                        <th scope="col" className="py-4 px-6 font-bold text-brand-cyan text-xs uppercase tracking-wider font-mono w-2/5 bg-brand-cyan/5">
                          Modern AI Chatbot (Nexovio)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-white/10 bg-white dark:bg-[#050B1B]">
                      {COMPARISON_ROWS.map((row, idx) => (
                        <tr key={row.capability} className={idx % 2 === 0 ? "bg-transparent" : "bg-slate-50/50 dark:bg-white/[0.01]"}>
                          <td className="py-4 px-6 font-bold text-xs text-slate-900 dark:text-white whitespace-nowrap">
                            {row.capability}
                          </td>
                          <td className="py-4 px-6 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {row.traditional}
                          </td>
                          <td className="py-4 px-6 text-xs font-semibold text-slate-900 dark:text-white leading-relaxed bg-brand-cyan/[0.03]">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                              <span>{row.nexovio}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 5. OUR AI CHATBOT DEVELOPMENT SERVICES (10 SERVICE CARDS)           */}
        {/* =================================================================== */}
        <section id="services" className="bg-white dark:bg-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="OUR SERVICES"
                title="Comprehensive AI Chatbot"
                highlightText="Development Services"
                description="Explore our complete suite of conversational AI engineering capabilities, designed to solve customer support, sales, and operational challenges with verified reliability."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {CHATBOT_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <AnimateOnScroll key={srv.id} variant="fadeUp" delay={(idx % 3) * 0.08}>
                    <Card className="relative overflow-hidden group flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.16)] hover:-translate-y-2 transition-all duration-400 rounded-2xl">
                      {/* Top Border Animate Left to Right on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />

                      <div className="space-y-4">
                        {/* Section Matched Visual Mockup */}
                        <RealisticChatbotCardImage
                          image={srv.image}
                          imageAlt={srv.imageAlt}
                          number={srv.number}
                        />

                        <div className="flex items-center gap-3 pt-2">
                          <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                              Service {srv.number} &bull; {srv.badge}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                              {srv.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs font-semibold text-brand-cyan/90 italic">
                          {srv.tagline}
                        </p>

                        <p className="text-xs sm:text-sm text-muted leading-relaxed">
                          {srv.description}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                            What It Delivers:
                          </span>
                          <ul className="space-y-1.5">
                            {srv.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-snug"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-muted">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                          Bespoke Bot Architectures
                        </span>
                        <Link
                          href="/contact"
                          className="text-brand-cyan hover:underline flex items-center gap-1 font-bold shrink-0"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 5. PRACTICAL APPLICATIONS ACROSS 8 BUSINESS AREAS                   */}
        {/* =================================================================== */}
        <section id="business-use-cases" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="PRACTICAL APPLICATIONS"
                title="AI Chatbots Engineered Around"
                highlightText="High-Impact Business Use Cases"
                description="The most successful conversational bots solve concrete operational challenges. Explore high-value workflows automated by custom chatbots across industries."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {BUSINESS_USE_CASES.map((uc, idx) => {
                const AreaIcon = uc.icon;
                return (
                  <AnimateOnScroll key={uc.area} variant="fadeUp" delay={idx * 0.06}>
                    <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-cyan/50 hover:shadow-md transition-all space-y-4 flex flex-col justify-between h-full group">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                            <AreaIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                            {uc.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                            {uc.area}
                          </h3>
                        </div>

                        <p className="text-xs text-muted leading-relaxed">
                          {uc.workflows}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-white/10 text-xs font-semibold text-emerald-500 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{uc.businessOutcome}</span>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 6. HOW AI CHATBOTS WORK (7-STEP CONVERSATIONAL CYCLE)                */}
        {/* =================================================================== */}
        <section id="how-it-works" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="CONVERSATIONAL CYCLE"
                title="How Modern AI Chatbots"
                highlightText="Work in Production"
                description="From message ingestion and intent detection to RAG knowledge retrieval, safety validation, and human escalation — here is the closed-loop cycle."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {HOW_CHATBOTS_WORK_STEPS.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <AnimateOnScroll key={step.step} variant="fadeUp" delay={idx * 0.07}>
                    <div className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-cyan/60 hover:-translate-y-1 transition-all duration-300 shadow-xs flex flex-col justify-between h-full">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                            <StepIcon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                            STEP {step.step}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2 group-hover:text-brand-cyan transition-colors">
                          {step.title}
                        </h3>

                        <p className="text-xs text-muted leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 7. CORE CAPABILITIES (10 CAPABILITIES GRID)                          */}
        {/* =================================================================== */}
        <section id="capabilities" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="ENGINEERING EXCELLENCE"
                title="Core Capabilities We Build"
                highlightText="Into Every AI Chatbot"
                description="Production chatbots require more than raw text generation: they demand reliable state memory, accurate knowledge retrieval, security guardrails, and telemetry."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-12">
              {CORE_CAPABILITIES.map((cap, idx) => {
                const CapIcon = cap.icon;
                return (
                  <AnimateOnScroll key={cap.title} variant="fadeUp" delay={idx * 0.05}>
                    <div className="p-5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-cyan/50 transition-all shadow-xs space-y-2.5 h-full flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                          <CapIcon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {cap.title}
                        </h3>
                        <p className="text-xs text-muted leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 9. STRUCTURED 7-STAGE DELIVERY PROCESS                               */}
        {/* =================================================================== */}
        <section id="development-process" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="DELIVERY METHODOLOGY"
                title="Our Structured 7-Stage AI Chatbot"
                highlightText="Development Process"
                description="A disciplined, de-risked engineering lifecycle from initial workflow discovery and persona mapping to rigorous testing and production launch."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {DEVELOPMENT_PROCESS_STAGES.map((stg, idx) => {
                const StageIcon = stg.icon;
                return (
                  <AnimateOnScroll key={stg.stage} variant="fadeUp" delay={idx * 0.08}>
                    <div className="relative overflow-hidden group p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-cyan/60 hover:-translate-y-1.5 transition-all duration-300 shadow-sm flex flex-col justify-between h-full">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                            <StageIcon className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                            STAGE {stg.stage}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                            {stg.name}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-muted leading-relaxed">
                          {stg.desc}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase">
                          Deliverable:
                        </span>
                        <span className="text-xs font-semibold text-brand-cyan/90 block mt-0.5">
                          {stg.deliverable}
                        </span>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 10. TECH STACK & SECURITY GOVERNANCE                                 */}
        {/* =================================================================== */}
        <section id="technology-and-security" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            {/* Tech Foundation Header */}
            <div>
              <AnimateOnScroll variant="fadeUp">
                <SectionHeading
                  badge="TECH STACK"
                  title="Technology Foundation for"
                  highlightText="Production-Grade AI Chatbots"
                  description="We build on battle-tested frameworks, state-of-the-art LLMs, and low-latency cloud infrastructure to ensure 99.9% uptime and lightning-fast responses."
                  align="center"
                />
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {[
                  {
                    title: "Foundation Models & LLM APIs",
                    desc: "State-of-the-art conversational reasoning with OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5, or private Llama 3.",
                    icon: Cpu,
                  },
                  {
                    title: "Conversational Frameworks",
                    desc: "LangChain, LlamaIndex, Botpress, Microsoft Bot Framework, and custom WebSocket real-time event streaming architectures.",
                    icon: Workflow,
                  },
                  {
                    title: "Vector Search & RAG Stores",
                    desc: "Sub-200ms document retrieval with Pinecone, Qdrant, pgvector, and hybrid semantic keyword re-rankers.",
                    icon: Database,
                  },
                  {
                    title: "Messaging Channel APIs",
                    desc: "Official WhatsApp Cloud API, Slack Bolt, Microsoft Graph, Twilio Telephony, and custom React live chat components.",
                    icon: Network,
                  },
                  {
                    title: "Cloud & Container Hosting",
                    desc: "High-availability AWS, Azure, GCP, or private VPC deployment with auto-scaling, Docker containers, and Cloudflare edge CDN.",
                    icon: Server,
                  },
                  {
                    title: "Transactional Databases",
                    desc: "PostgreSQL, MongoDB, and Redis caching layers maintaining customer session states and multi-turn message history.",
                    icon: Layers,
                  },
                  {
                    title: "Observability & Latency Tracing",
                    desc: "Full conversation trace audits, token cost metering, and sentiment monitoring via OpenTelemetry and LangSmith.",
                    icon: Activity,
                  },
                  {
                    title: "Security & Secret Vaults",
                    desc: "Zero-trust credential storage using AWS Secrets Manager and HashiCorp Vault with scoped least-privilege permissions.",
                    icon: Lock,
                  },
                ].map((tf, i) => {
                  const TfIcon = tf.icon;
                  return (
                    <AnimateOnScroll key={tf.title} variant="fadeUp" delay={i * 0.05}>
                      <div className="p-5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071328] space-y-2.5 h-full">
                        <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                          <TfIcon className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {tf.title}
                        </h3>
                        <p className="text-xs text-muted leading-relaxed">
                          {tf.desc}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>

            {/* Security, Governance & Reliability */}
            <div className="pt-10 border-t border-slate-200 dark:border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual */}
                <div className="lg:col-span-5 relative">
                  <AnimateOnScroll variant="fadeRight">
                    <div className="relative rounded-2xl border border-brand-cyan/30 bg-white dark:bg-[#071126] p-3 shadow-2xl overflow-hidden group">
                      <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[440px] w-full">
                        <Image
                          src="/images/services/ai-chatbots/enterprise-chatbot-governance.jpg"
                          alt="Enterprise cloud cybersecurity team monitoring conversational AI chatbot security, SOC2 compliance, and encryption telemetry in modern server room"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-full object-cover object-center rounded-xl group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>

                {/* Text Content */}
                <div className="lg:col-span-7 space-y-6">
                  <AnimateOnScroll variant="fadeUp">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                      GOVERNANCE &amp; SAFETY
                    </span>
                  </AnimateOnScroll>

                  <AnimateOnScroll variant="fadeUp" delay={0.1}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      Enterprise Security, Governance &amp;{" "}
                      <span className="bg-gradient-brand bg-clip-text text-transparent">
                        Data Confidentiality
                      </span>
                    </h2>
                  </AnimateOnScroll>

                  <AnimateOnScroll variant="fadeUp" delay={0.15}>
                    <p className="text-base text-muted leading-relaxed">
                      Deploying conversational AI directly to customers requires enterprise-grade security controls. We build robust safeguards to ensure user data remains confidential, models are protected against prompt attacks, and all automated answers remain fully compliant with your corporate policies.
                    </p>
                  </AnimateOnScroll>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {SECURITY_PILLARS.map((sec, idx) => {
                      const SecIcon = sec.icon;
                      return (
                        <AnimateOnScroll key={sec.title} variant="fadeUp" delay={0.2 + idx * 0.04}>
                          <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071328] hover:border-emerald-500/50 transition-all shadow-2xs">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                              <SecIcon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                                {sec.title}
                              </h3>
                              <p className="text-[11px] text-muted mt-0.5 leading-snug">
                                {sec.desc}
                              </p>
                            </div>
                          </div>
                        </AnimateOnScroll>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Why Custom AI Chatbot Approach */}
            <div className="pt-10 border-t border-slate-200 dark:border-white/10">
              <div className="p-8 sm:p-10 rounded-3xl border border-brand-cyan/30 bg-gradient-to-br from-white via-slate-50 to-blue-50/20 dark:from-[#071024] dark:via-[#050B1B] dark:to-[#040814] shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block">
                    STRATEGIC ADVANTAGE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Why Choose a Custom AI Chatbot Over Off-the-Shelf SaaS?
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed mt-2 max-w-4xl">
                    Generic chatbot subscriptions charge recurring per-conversation fees, lock your data into proprietary silos, and offer limited customization. Custom AI chatbot development gives you 100% intellectual property ownership, zero per-seat licensing penalties, deep integration into your private databases, and complete freedom to evolve your system as your business scales.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    "Zero per-conversation subscription penalties — pay only for raw model tokens.",
                    "Complete ownership of system prompts, dialog state graphs, and IP.",
                    "Deep native integrations into your proprietary databases, CRMs, and APIs.",
                    "Multi-channel unified continuity across Web, WhatsApp, Slack, and SMS.",
                    "Strict data residency and privacy controls deployed inside your own cloud.",
                  ].map((adv, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#071328] space-y-2">
                      <div className="w-6 h-6 rounded-md bg-brand-cyan/15 text-brand-cyan text-xs font-mono font-bold flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug font-medium">
                        {adv}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-cyan uppercase block">
                      Ready to Transform Your Customer Interactions?
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-0.5">
                      Schedule a focused discovery workshop to review your customer support volume, knowledge sources, and integration goals.
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    href="/contact"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="shrink-0 whitespace-nowrap font-bold"
                  >
                    Build Your Custom AI Chatbot
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =================================================================== */}
        {/* 11. FREQUENTLY ASKED QUESTIONS SECTION (FAQSection COMPONENT)       */}
        {/* =================================================================== */}
        <section id="faqs" className="scroll-mt-16">
          <FaqSection
            faqs={FAQS}
            badge="KNOWLEDGE &amp; FAQS"
            title="Frequently Asked"
            highlightText="Questions"
            description="Clear, technically grounded answers regarding enterprise AI chatbot development, RAG knowledge grounding, WhatsApp integration, and security compliance."
          />
        </section>
      </main>
    </>
  );
}
