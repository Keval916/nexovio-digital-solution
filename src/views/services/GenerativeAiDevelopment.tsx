"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Cpu,
  Bot,
  BrainCircuit,
  Workflow,
  Database,
  ArrowRight,
  Check,
  CheckCircle2,
  Search,
  MessageSquare,
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
  GraduationCap,
  Briefcase,
  Rocket,
  Lock,
  Compass,
  GitBranch,
  Sliders,
  Scale,
  Activity,
  ChevronRight,
  UserCheck,
  TrendingUp,
  FileCheck,
  Lightbulb,
  ExternalLink,
  Shield,
  Zap,
  HelpCircle,
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
import { cn } from "@/lib/utils";

// ============================================================================
// REALISTIC GENERATIVE AI CARD IMAGE PREVIEW
// ============================================================================

function RealisticGenAiCardImage({
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
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-2.5 right-2.5">
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-md">
          {number}
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// DATA STRUCTURES: 8 CORE GENERATIVE AI SERVICES WITH MATCHED IMAGES
// ============================================================================

interface GenAiServiceItem {
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

const GENAI_SERVICES: GenAiServiceItem[] = [
  {
    id: "custom-llm-apps",
    number: "01",
    badge: "BESPOKE AI",
    title: "Custom Generative AI Applications",
    tagline: "Tailored AI Applications Aligned with Your Proprietary Workflow",
    description:
      "Develop purpose-built AI applications rather than generic API wrappers. We architect specialized enterprise workspaces, internal AI copilots, and multi-modal generative interfaces connected to your real business data.",
    keywordCluster: "custom generative AI development · enterprise AI software",
    image: "/images/services/generative-ai/genai-hero-architects.jpg",
    imageAlt: "Lead enterprise AI architects evaluating custom generative AI models and neural parameters on high-resolution displays",
    icon: Sparkles,
    deliverables: [
      "Custom role-based internal AI workspaces",
      "Interactive data synthesis and analytical copilots",
      "Multimodal prompt, image, and document handling",
      "Dedicated corporate sandboxes & privacy isolation",
      "Production Next.js / TypeScript application frontends",
    ],
  },
  {
    id: "customer-experience",
    number: "02",
    badge: "CX & ATTRACTION",
    title: "AI Customer Experience & Intelligent Assistants",
    tagline: "Empathetic, Low-Latency Customer Interaction That Drives Retention",
    description:
      "Transform customer engagement with context-aware, 24/7 generative assistants. Engineered with dynamic memory, sentiment calibration, sub-second streaming answers, and seamless escalation to human teams.",
    keywordCluster: "generative AI customer support · conversational AI assistants",
    image: "/images/services/generative-ai/genai-customer-experience.jpg",
    imageAlt: "Professional customer experience manager collaborating with an AI customer support assistant on interactive display",
    icon: MessageSquare,
    deliverables: [
      "Conversational customer onboarding & discovery",
      "Omnichannel chat, voice, and helpdesk integration",
      "Dynamic tone-of-voice alignment with brand guidelines",
      "Instant, verified knowledge-base dispute resolution",
      "Smart sentiment routing & zero-friction human handoff",
    ],
  },
  {
    id: "rag-solutions",
    number: "03",
    badge: "ZERO HALLUCINATIONS",
    title: "Enterprise RAG & Knowledge Retrieval",
    tagline: "Ground Foundation Models in Private Corporate Data Securely",
    description:
      "Eliminate model hallucinations by retrieving precise facts from internal documents, PDFs, manuals, and databases before synthesis. We implement hybrid semantic vector search with real-time citation links.",
    keywordCluster: "retrieval augmented generation · vector database RAG",
    image: "/images/services/generative-ai/genai-rag-knowledge.jpg",
    imageAlt: "Data scientists analyzing RAG knowledge graph and vector database visualization on studio touchscreen display",
    icon: Database,
    deliverables: [
      "Semantic hybrid vector search (Pinecone, Qdrant, pgvector)",
      "High-accuracy document ingestion & chunking pipelines",
      "Exact source citation & verifiable reference footnotes",
      "Enterprise access control & document-level security",
      "Sub-300ms vector retrieval cache architecture",
    ],
  },
  {
    id: "autonomous-agents",
    number: "04",
    badge: "AUTONOMOUS WORKFLOWS",
    title: "Autonomous Multi-Agent Workflow Pipelines",
    tagline: "Goal-Oriented Agent Swarms That Reason, Execute & Audit",
    description:
      "Deploy coordinated teams of autonomous AI agents capable of planning, executing complex multi-step tasks, calling external REST APIs, querying databases, and auditing their own results with supervisory guardrails.",
    keywordCluster: "AI agents · autonomous agent workflows · LangGraph",
    image: "/images/services/generative-ai/genai-autonomous-agents.jpg",
    imageAlt: "Software engineers and AI consultants reviewing multi-agent autonomous workflow pipelines on mission-control dashboard",
    icon: Bot,
    deliverables: [
      "Specialized agent roles (Researcher, Planner, Executor, Auditor)",
      "Tool-calling integration with CRMs, ERPs, and cloud APIs",
      "Self-correcting feedback loops & iterative reasoning",
      "Human-in-the-loop approval thresholds for high-stakes actions",
      "Real-time token telemetry & execution trace logs",
    ],
  },
  {
    id: "guardrails-security",
    number: "05",
    badge: "SAFETY & COMPLIANCE",
    title: "Enterprise Guardrails, Safety & PII Redaction",
    tagline: "Deterministic Defense Against Jailbreaks, Hallucinations & Data Leaks",
    description:
      "Protect your enterprise reputation and customer trust. We build deterministic guardrail layers that redact sensitive PII, prevent prompt injection attacks, enforce brand guidelines, and ensure SOC2/HIPAA compliance.",
    keywordCluster: "AI safety guardrails · prompt injection defense · PII masking",
    image: "/images/services/generative-ai/genai-guardrails-security.jpg",
    imageAlt: "Cybersecurity and AI compliance specialist inspecting AI safety and compliance dashboard with hallucination monitoring",
    icon: ShieldCheck,
    deliverables: [
      "Automated PII masking & tokenized data anonymization",
      "Real-time prompt injection & adversarial jailbreak filters",
      "Fact-checking verifiers for hallucination detection",
      "Role-based token rate limits & corporate spend caps",
      "Comprehensive regulatory audit logging & compliance reports",
    ],
  },
  {
    id: "product-copilots",
    number: "06",
    badge: "CREATIVE & DESIGN",
    title: "Generative Product Design & Creative Co-pilots",
    tagline: "Augment Product Designers & Creators with Generative Intelligence",
    description:
      "Empower your design, content, and engineering teams with contextual co-pilots that accelerate wireframing, synthetic asset generation, localized variant generation, and creative prototyping in record time.",
    keywordCluster: "AI design copilots · multimodal creative generation",
    image: "/images/services/generative-ai/genai-product-copilot.jpg",
    imageAlt: "Product manager and UI UX designer collaborating with generative AI design assistant software on dual displays",
    icon: Eye,
    deliverables: [
      "AI-accelerated UI prototyping & design variant generation",
      "Dynamic personalization of website copy & imagery",
      "Automated marketing asset generation within brand rules",
      "Natural language to code and mockup transformations",
      "Interactive co-pilot plugins for everyday team software",
    ],
  },
  {
    id: "fine-tuning",
    number: "07",
    badge: "DOMAIN ADAPTATION",
    title: "Model Fine-Tuning & Domain Adaptation",
    tagline: "Customizing Open-Source & Proprietary Weights for Peak Accuracy",
    description:
      "When prompt engineering isn't enough, we fine-tune open-weight models (Llama 3, Mistral, Qwen) using LoRA and QLoRA on your private domain vocabulary, delivering superior task precision at up to 70% lower inference cost.",
    keywordCluster: "LLM fine tuning · LoRA QLoRA · custom model adaptation",
    image: "/images/services/generative-ai/llm-development-services.jpg",
    imageAlt: "Engineers configuring domain model fine-tuning pipelines and evaluating loss curves on high-performance compute clusters",
    icon: Cpu,
    deliverables: [
      "Dataset curation, deduplication & synthetic data generation",
      "Efficient LoRA / QLoRA parameter-efficient fine-tuning",
      "Self-hosted model inference engines (vLLM, Ollama, TensorRT-LLM)",
      "Strict data isolation ensuring training data remains private",
      "Head-to-head MMLU and custom domain benchmark validation",
    ],
  },
  {
    id: "prompt-engineering",
    number: "08",
    badge: "SYSTEM OPTIMIZATION",
    title: "Prompt Engineering & Pipeline Optimization",
    tagline: "Deterministic Structured Outputs with Minimized Latency & Cost",
    description:
      "Turn erratic natural language prompts into deterministic, production-grade pipelines. We craft few-shot prompt libraries, dynamic contextual templates, and strict JSON Schema validators for rock-solid software integration.",
    keywordCluster: "prompt engineering services · structured JSON outputs",
    image: "/images/services/generative-ai/ai-workflow-automation.jpg",
    imageAlt: "Automated generative AI workflow automation pipeline with semantic validation stages",
    icon: Workflow,
    deliverables: [
      "Few-shot, chain-of-thought, and self-consistency prompt architectures",
      "Strict JSON Schema & Zod output validation enforcement",
      "Token economy optimization reducing recurring API costs by 40-60%",
      "Latency reduction via streaming responses & parallel tool calls",
      "Automated prompt regression testing & continuous evaluation suites",
    ],
  },
];

// ============================================================================
// VALUE PROPOSITION PILLARS
// ============================================================================

const VALUE_PROPOSITION_PILLARS = [
  {
    title: "Grounding in Private Business Data (Zero Hallucinations)",
    description:
      "We connect models to your actual enterprise documents, catalogs, and databases via hybrid RAG, ensuring all generated responses are verifiable with clickable source citations.",
  },
  {
    title: "Customer Experience Designed for Attraction & Retention",
    description:
      "Human-grade conversational interfaces built with low cognitive load, empathetic phrasing, instant streaming tokens, and graceful escalation to live human specialists.",
  },
  {
    title: "Autonomous Multi-Agent Task Orchestration",
    description:
      "Move beyond simple Q&A. Coordinated agent swarms handle complex multi-step reasoning, external API tool execution, and continuous quality audits autonomously.",
  },
  {
    title: "Model-Agnostic Flexibility & Vendor Independence",
    description:
      "Avoid vendor lock-in. Our semantic routing layer connects seamlessly to OpenAI, Anthropic Claude, Google Gemini, or self-hosted open-source models like Llama 3.",
  },
  {
    title: "Deterministic Enterprise Guardrails & PII Masking",
    description:
      "Automated security filters scrub customer PII before sending queries to models, while strict prompt injection shields protect against malicious system jailbreaks.",
  },
  {
    title: "Continuous Telemetry, Spend Control & Latency SLA",
    description:
      "Real-time monitoring of token consumption, cost caps, drift detection, and latency telemetry ensures predictable operation without unexpected monthly cloud bills.",
  },
];

// ============================================================================
// CUSTOMER EXPERIENCE METRICS & PILLARS
// ============================================================================

const CX_PILLARS = [
  {
    title: "Sub-Second Streaming Responses",
    description: "Instant token streaming keeps users engaged with zero perceived loading lag.",
    icon: Zap,
  },
  {
    title: "Dynamic Contextual Memory",
    description: "Maintains multi-turn context across sessions, remembering user preferences and history.",
    icon: BrainCircuit,
  },
  {
    title: "Frictionless Human Escalation",
    description: "Detects frustration and smoothly hands off the full chat transcript to live team members.",
    icon: UserCheck,
  },
  {
    title: "100% Brand Voice Consistency",
    description: "Enforces strict tone, terminology, and compliance standards across every customer touchpoint.",
    icon: ShieldCheck,
  },
];

// ============================================================================
// 6-PHASE GENERATIVE AI ROADMAP
// ============================================================================

const GENAI_ROADMAP = [
  {
    step: "01",
    phase: "Discovery & Feasibility",
    title: "Opportunity & ROI Mapping",
    description:
      "We identify your highest-leverage business use cases, evaluate data availability, model requirements, and project measurable ROI before writing code.",
    deliverable: "Technical Feasibility Blueprint & Model Architecture Plan",
    icon: Compass,
  },
  {
    step: "02",
    phase: "Data Grounding & Vectorization",
    title: "Knowledge Pipeline Setup",
    description:
      "Audit, clean, and chunk internal knowledge bases, technical manuals, and databases. We implement hybrid semantic indexing and vector storage.",
    deliverable: "Indexed Vector Database & Secure Data Ingestion Pipeline",
    icon: Database,
  },
  {
    step: "03",
    phase: "Architecture & Prototyping",
    title: "Interactive Working Prototype",
    description:
      "Build an interactive functional prototype connecting the chosen foundation models, vector stores, and custom prompt templates for real evaluation.",
    deliverable: "Clickable Working Prototype with Real Enterprise Data",
    icon: Code2,
  },
  {
    step: "04",
    phase: "Guardrails & UX Engineering",
    title: "Safety, Security & Interface",
    description:
      "Implement deterministic security guardrails, PII redaction, prompt injection defense, and an intuitive customer-facing or internal user interface.",
    deliverable: "Enterprise Guardrail Layer & High-Fidelity UI Frontend",
    icon: ShieldCheck,
  },
  {
    step: "05",
    phase: "Validation & Tuning",
    title: "Human-in-the-Loop Testing",
    description:
      "Run rigorous synthetic benchmark tests and pilot user trials. We fine-tune prompts, adjust retrieval parameters, and optimize token efficiency.",
    deliverable: "Benchmark Evaluation Report & Quality Scoring Matrix",
    icon: Activity,
  },
  {
    step: "06",
    phase: "Production & Telemetry",
    title: "Deployment & Scaling",
    description:
      "Deploy to cloud or private infrastructure with auto-scaling, latency caching, token spend caps, error telemetry, and ongoing model monitoring.",
    deliverable: "Production Cloud Deployment, Telemetry Dashboard & Full IP Handover",
    icon: Rocket,
  },
];

// ============================================================================
// INDUSTRY APPLICATIONS
// ============================================================================

const INDUSTRY_APPLICATIONS = [
  {
    industry: "Healthcare & Life Sciences",
    icon: Stethoscope,
    badge: "HIPAA COMPLIANT",
    title: "Clinical Document Synthesis & Patient Assistants",
    description:
      "Accelerate medical chart review, summarize complex lab results, and provide patient-facing intake assistants grounded strictly in verified clinical guidelines.",
    impact: "70% faster chart review · Zero patient data leakage",
  },
  {
    industry: "Financial Services & FinTech",
    icon: Landmark,
    badge: "SEC & SOC2 COMPLIANT",
    title: "Regulatory Intelligence & Automated Risk Audits",
    description:
      "Synthesize earnings transcripts, conduct automated anti-money laundering triage, and query complex policy manuals with deterministic reference citations.",
    impact: "4.5x faster audit speed · 100% auditable citation traces",
  },
  {
    industry: "E-Commerce & Retail",
    icon: ShoppingBag,
    badge: "CONVERSION OPTIMIZED",
    title: "Generative Product Discovery & Style Advisors",
    description:
      "Create interactive shopping concierges that understand nuanced customer intent, generate personalized product recommendations, and boost checkout conversions.",
    impact: "+28% higher conversion rate · 24/7 personalized shopping",
  },
  {
    industry: "Legal & Professional Services",
    icon: Scale,
    badge: "STRICT PRIVACY",
    title: "Contract Analysis & Legal Research Copilots",
    description:
      "Extract indemnity clauses, compare vendor contracts across thousands of pages, and generate first-pass legal briefs with exact paragraph citations.",
    impact: "65% reduction in contract review hours · Exact clause mapping",
  },
  {
    industry: "SaaS & Enterprise Software",
    icon: Layers,
    badge: "EMBEDDED AI",
    title: "In-App AI Copilots & Natural Language Querying",
    description:
      "Upgrade your SaaS platform with native generative capabilities: natural-language-to-SQL analytics, automated report generation, and intelligent assistant modals.",
    impact: "3.2x higher user feature adoption · Reduced churn",
  },
  {
    industry: "Manufacturing & Supply Chain",
    icon: Factory,
    badge: "OPERATIONAL SPEED",
    title: "Technical Manual Querying & Maintenance Assistants",
    description:
      "Equip field service engineers with multimodal AI assistants that diagnose equipment failures from photo uploads and technical machinery schematics instantly.",
    impact: "40% lower equipment downtime · Instant field troubleshooting",
  },
];

// ============================================================================
// FAQS
// ============================================================================

const FAQS = [
  {
    question: "What is generative AI development?",
    answer:
      "Generative AI development is the practice of engineering custom applications, software features, and automated workflows that use generative foundation models (LLMs, multimodal AI) to understand context, generate human-grade content, assist users, and execute complex business processes with verifiable grounding.",
  },
  {
    question: "How do you prevent AI hallucinations in enterprise applications?",
    answer:
      "We implement Retrieval-Augmented Generation (RAG) and deterministic verification guardrails. The AI model is strictly instructed to answer only using retrieved factual passages from your enterprise knowledge base. If information is missing, the system gracefully acknowledges it rather than guessing. Exact citation links are attached to every statement.",
  },
  {
    question: "Will our proprietary company data be used to train public AI models?",
    answer:
      "No. We enforce strict data privacy protocols. When using enterprise APIs (such as Azure OpenAI, AWS Bedrock, or private Anthropic endpoints), your data is never logged or used for model training under strict enterprise agreements. For sensitive deployments, we also deploy self-hosted open-weight models (like Llama 3) inside your private cloud VPC.",
  },
  {
    question: "What is the difference between an AI chatbot and an autonomous AI agent?",
    answer:
      "A chatbot simply responds to messages. An autonomous AI agent is goal-oriented: it breaks down multi-step tasks, reasons through problems, calls external APIs (like updating a CRM, querying an inventory database, or sending an email), verifies its own outputs, and operates with supervisory approval gates.",
  },
  {
    question: "Can generative AI be integrated into our existing website or software platform?",
    answer:
      "Yes. We specialize in building seamless integrations into existing Next.js, React, mobile apps, ERPs, CRMs, and SaaS products. We deliver clean REST / WebSocket APIs and modular UI component libraries that slide effortlessly into your existing tech stack.",
  },
  {
    question: "How do you manage ongoing API token costs and inference latency?",
    answer:
      "We optimize token consumption through semantic prompt caching, concise system prompts, intelligent model routing (directing simpler queries to faster, cost-effective models and reserving heavy reasoning for flagship models), and token rate limits, typically reducing cloud API expenses by 40% to 60%.",
  },
  {
    question: "How long does a typical generative AI project take to build?",
    answer:
      "A focused Proof of Concept (PoC) or functional MVP typically takes 3 to 5 weeks. A full-scale enterprise AI platform with enterprise vector databases, multi-agent pipelines, custom security guardrails, and third-party integrations usually takes 8 to 12 weeks.",
  },
  {
    question: "Do we own the intellectual property and code created for our project?",
    answer:
      "Yes, 100%. All custom code, proprietary prompt libraries, fine-tuned model weights, vector database pipelines, and documentation developed during your engagement belong entirely to your company.",
  },
];

// ============================================================================
// MAIN GENERATIVE AI DEVELOPMENT VIEW
// ============================================================================

export default function GenerativeAiDevelopment() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "Generative AI Development Services",
    description:
      "Build custom generative AI solutions with Nexovio. From custom LLM applications and RAG systems to intelligent customer assistants and autonomous multi-agent pipelines.",
    url: "/services/generative-ai-development",
    serviceType: "Generative AI Development Services",
    image: "/images/services/generative-ai/genai-hero-architects.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Generative AI Development", url: "/services/generative-ai-development" },
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

      <div className="relative min-h-screen bg-slate-50 dark:bg-[#040814] text-slate-900 dark:text-white transition-colors duration-300">

        {/* =================================================================== */}
        {/* 1. HERO BANNER SECTION (REALISTIC HUMAN ARCHITECTS + LLM METRICS)   */}
        {/* =================================================================== */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/5">
          {/* Subtle Ambient Aura */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-tr from-blue-600/10 via-cyan-400/15 to-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { name: "Services", url: "/services" },
                  { name: "Generative AI Development", url: "/services/generative-ai-development" },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Hero Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <AnimateOnScroll variant="fadeUp">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#1769FF]/30 bg-[#1769FF]/[0.08] text-[#1769FF] dark:text-cyan-400 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>Enterprise Generative AI Engineering</span>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                    Generative AI Development That Drives{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Real Business Growth
                    </span>
                  </h1>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.2}>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Generative AI has evolved beyond simple chat interfaces. Real enterprise value comes from private data grounding, autonomous multi-agent orchestration, deterministic guardrails, and customer experiences that build lasting trust.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.25}>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    At <strong className="text-slate-900 dark:text-white">Nexovio Digital Solutions</strong>, we engineer tailored generative AI applications designed around your exact business logic. From high-converting customer experience copilots and RAG knowledge engines to autonomous workflow swarms, we deliver production-ready AI with measurable ROI.
                  </p>
                </AnimateOnScroll>

                {/* Key Technology Badges */}
                <AnimateOnScroll variant="fadeUp" delay={0.3}>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      "Custom LLM Applications",
                      "Autonomous Agent Swarms",
                      "Vector RAG Systems",
                      "Enterprise Guardrails",
                      "Human-in-the-Loop CX",
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
                      Start Your AI Project
                    </Button>

                  </div>
                </AnimateOnScroll>

              </div>

              {/* Right Column: Realistic Human AI Architecture Hero Visual */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <AnimateOnScroll variant="fadeLeft" delay={0.2} className="w-full">
                  <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-white/80 dark:bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                    <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[450px] lg:h-[500px] w-full bg-[#050914]">
                      <Image
                        src="/images/services/generative-ai/genai-hero-architects.jpg"
                        alt="Realistic lead AI architect and software engineer reviewing multimodal generative AI architecture and model performance metrics on curved monitors"
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
        {/* 2. STICKY VALUE PROPOSITION (REALISTIC CX PHOTO + 6 HOVER PILLARS)  */}
        {/* =================================================================== */}
        <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Side Graphic Banner (Sticky on Top during Scroll) */}
              <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
                <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                  <div className="relative overflow-hidden rounded-xl h-[360px] sm:h-[440px] lg:h-[500px] w-full">
                    <Image
                      src="/images/services/generative-ai/genai-customer-experience.jpg"
                      alt="Business executives and customer experience specialist interacting with generative AI customer support interface on interactive touchscreen"
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
                    VALUE PROPOSITION
                  </span>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Build Generative AI Systems That{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Customers Love &amp; Trust
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <div className="space-y-4 text-base text-muted leading-relaxed">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Adding an AI capability shouldn&apos;t feel like a disconnected experiment. A successful generative AI product requires tight integration with internal systems, verifiable knowledge sources, and an intuitive customer experience.
                    </p>
                    <p>
                      We bring AI engineering, UX design, and enterprise data security together under one roof, delivering robust systems that safeguard your brand while solving core business friction.
                    </p>
                  </div>
                </AnimateOnScroll>

                {/* 6 Value Proposition Pillars with Left Border Slide-Down Hover */}
                <div className="space-y-3 pt-2">
                  {VALUE_PROPOSITION_PILLARS.map((vp, index) => (
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
                      CORE PROMISE: PRACTICAL GENERATIVE AI ENGINEERING
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">
                      We prioritize real-world utility over hype: reliable response times, zero unauthorized data sharing, low operational inference overhead, and software your team can comfortably maintain.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 3. CORE SERVICES SECTION (8 REALISTIC MATCHED CARDS + TOP BORDER)   */}
        {/* =================================================================== */}
        <section className="bg-white dark:bg-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="OUR SERVICES"
                title="End-to-End Generative AI"
                highlightText="Development Services"
                description="Explore our specialized generative AI engineering capabilities, crafted for enterprise dependability, low-latency performance, and measurable business impact."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {GENAI_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <AnimateOnScroll key={srv.id} variant="fadeUp" delay={idx * 0.08}>
                    <Card className="relative overflow-hidden group flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.16)] hover:-translate-y-2 transition-all duration-400 rounded-2xl">
                      {/* Top Border Animate Left to Right on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />

                      <div className="space-y-4">
                        {/* Realistic Visual Mockup Matched Per Card */}
                        <RealisticGenAiCardImage
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
                              Capability 0{idx + 1} &bull; {srv.badge}
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
                            Key Deliverables &amp; Capabilities:
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

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-muted">
                        <span className="text-slate-500 dark:text-slate-400 truncate max-w-[220px]">
                          {srv.keywordCluster}
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
        {/* 4. DEDICATED CUSTOMER EXPERIENCE & ATTRACTION SHOWCASE               */}
        {/* =================================================================== */}
        <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Visual with Customer Experience Real-Life Interaction */}
              <div className="lg:col-span-6 relative">
                <AnimateOnScroll variant="fadeRight">
                  <div className="relative rounded-3xl border border-brand-cyan/30 bg-white/70 dark:bg-[#071126] p-3 sm:p-4 shadow-2xl overflow-hidden group">
                    <div className="relative overflow-hidden rounded-2xl h-[380px] sm:h-[460px] w-full">
                      <Image
                        src="/images/services/generative-ai/genai-customer-experience.jpg"
                        alt="High-resolution photography of customer experience manager engaging with AI customer support assistant"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-2xl" />

                      {/* Interactive Floating Metrics Badges */}
                      <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/85 border border-brand-cyan/30 backdrop-blur-md">
                        <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block">
                          Response Latency
                        </span>
                        <span className="text-lg font-bold text-white">&lt; 850ms</span>
                      </div>

                      <div className="absolute top-4 right-4 p-3 rounded-xl bg-slate-950/85 border border-emerald-400/30 backdrop-blur-md">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                          Resolution Rate
                        </span>
                        <span className="text-lg font-bold text-white">92.4%</span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Right Column: Customer Attraction & CX Value */}
              <div className="lg:col-span-6 space-y-6">
                <AnimateOnScroll variant="fadeUp">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                    CUSTOMER ATTRACTION &amp; RETENTION
                  </span>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Transforming Customer Experience with{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Human-Grade AI Interaction
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <p className="text-base text-muted leading-relaxed">
                    Generic chatbots frustrate customers with circular robotic loops. Our generative AI customer experience platforms are designed like skilled concierge specialists: thoughtful, fast, accurate, and completely aligned with your brand voice.
                  </p>
                </AnimateOnScroll>

                {/* 4 CX Experience Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {CX_PILLARS.map((col, idx) => {
                    const ColIcon = col.icon;
                    return (
                      <AnimateOnScroll key={col.title} variant="fadeUp" delay={0.2 + idx * 0.05}>
                        <div className="p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-cyan/50 transition-all shadow-xs space-y-2">
                          <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                            <ColIcon className="w-4 h-4" />
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                            {col.title}
                          </h3>
                          <p className="text-xs text-muted leading-relaxed">
                            {col.description}
                          </p>
                        </div>
                      </AnimateOnScroll>
                    );
                  })}
                </div>

                {/* Quantitative Impact Bar */}
                <AnimateOnScroll variant="fadeUp" delay={0.35}>
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white dark:bg-[#071024] border border-slate-200/90 dark:border-white/10 text-center shadow-xs">
                    <div>
                      <span className="text-xl sm:text-2xl font-black text-brand-cyan font-mono block">
                        4.2x
                      </span>
                      <span className="text-[11px] text-muted">Faster Resolutions</span>
                    </div>
                    <div className="border-x border-slate-100 dark:border-white/10">
                      <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono block">
                        98.4%
                      </span>
                      <span className="text-[11px] text-muted">Customer CSAT</span>
                    </div>
                    <div>
                      <span className="text-xl sm:text-2xl font-black text-brand-bright font-mono block">
                        -65%
                      </span>
                      <span className="text-[11px] text-muted">Support Ticket Backlog</span>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 5. MULTI-AGENT AUTONOMOUS WORKFLOWS SHOWCASE                        */}
        {/* =================================================================== */}
        <section className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <AnimateOnScroll variant="fadeUp">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                    AUTONOMOUS ORCHESTRATION
                  </span>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Beyond Simple Prompts:{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Multi-Agent Autonomous Swarms
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <p className="text-base text-muted leading-relaxed">
                    Single-prompt AI systems fail when tasks require multiple steps, external data lookups, code execution, and quality audits. We build multi-agent networks where specialized AI agents collaborate just like human engineering teams.
                  </p>
                </AnimateOnScroll>

                {/* 4 Agent Roles */}
                <div className="space-y-3 pt-1">
                  {[
                    {
                      role: "Research & Data Ingestion Agent",
                      desc: "Queries internal databases, vector stores, and external APIs to gather pristine facts.",
                      icon: Search,
                    },
                    {
                      role: "Reasoning & Synthesis Agent",
                      desc: "Processes gathered facts, evaluates business rules, and drafts actionable solutions.",
                      icon: BrainCircuit,
                    },
                    {
                      role: "Tool Execution & System Sync Agent",
                      desc: "Executes verified REST API calls into your ERP, CRM, billing, and communication systems.",
                      icon: Terminal,
                    },
                    {
                      role: "Quality Assurance & Hallucination Auditor",
                      desc: "Cross-checks drafted outputs against ground truth before anything is shown or sent.",
                      icon: ShieldCheck,
                    },
                  ].map((agent, i) => {
                    const AgentIcon = agent.icon;
                    return (
                      <AnimateOnScroll key={agent.role} variant="fadeUp" delay={0.2 + i * 0.05}>
                        <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071126] hover:border-brand-cyan/50 transition-all shadow-2xs">
                          <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                            <AgentIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                              {agent.role}
                            </h3>
                            <p className="text-xs text-muted mt-0.5 leading-relaxed">
                              {agent.desc}
                            </p>
                          </div>
                        </div>
                      </AnimateOnScroll>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Mission Control Agent Swarm Visual */}
              <div className="lg:col-span-6 relative">
                <AnimateOnScroll variant="fadeLeft">
                  <div className="relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071024] p-3 sm:p-4 shadow-2xl overflow-hidden group">
                    <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[460px] w-full">
                      <Image
                        src="/images/services/generative-ai/genai-autonomous-agents.jpg"
                        alt="Engineering team analyzing multi-agent autonomous workflow pipeline metrics on large mission control display"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="w-full h-full object-cover object-center rounded-xl group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 6. ENTERPRISE SECURITY, GUARDRAILS & GOVERNANCE                      */}
        {/* =================================================================== */}
        <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Security Control Center Visual */}
              <div className="lg:col-span-6 relative">
                <AnimateOnScroll variant="fadeRight">
                  <div className="relative rounded-2xl border border-brand-cyan/30 bg-white dark:bg-[#071126] p-3 sm:p-4 shadow-2xl overflow-hidden group">
                    <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[460px] w-full">
                      <Image
                        src="/images/services/generative-ai/genai-guardrails-security.jpg"
                        alt="Cybersecurity and AI compliance director reviewing real-time AI safety dashboard with hallucination monitoring and PII masking status"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="w-full h-full object-cover object-center rounded-xl group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Right Column: Security Pillars */}
              <div className="lg:col-span-6 space-y-6">
                <AnimateOnScroll variant="fadeUp">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                    ENTERPRISE SECURITY &amp; SAFETY
                  </span>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Zero Data Leakage,{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Zero Unauthorized Disclosures
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <p className="text-base text-muted leading-relaxed">
                    Deploying generative AI without robust guardrails exposes your business to regulatory penalties, data exfiltration, and brand liability. We implement multi-layered defenses that enforce safety deterministically.
                  </p>
                </AnimateOnScroll>

                <div className="space-y-3 pt-1">
                  {[
                    {
                      title: "Real-Time PII & Sensitive Token Redaction",
                      desc: "Customer names, credit card digits, Social Security numbers, and confidential keys are scrubbed before payload transmission.",
                      icon: Lock,
                    },
                    {
                      title: "Adversarial Prompt Injection & Jailbreak Defense",
                      desc: "Input classifiers intercept malicious override commands, indirect injection attempts, and exfiltration prompts.",
                      icon: Shield,
                    },
                    {
                      title: "Factual Grounding & Hallucination Scoring",
                      desc: "Every synthesized sentence is verified against retrieved vector chunks. Low-confidence assertions are automatically blocked.",
                      icon: CheckCircle2,
                    },
                    {
                      title: "Immutable Telemetry & Access Audit Logging",
                      desc: "Full token lineage, user sessions, prompt histories, and safety checks are archived to satisfy enterprise compliance audits.",
                      icon: FileCheck,
                    },
                  ].map((sec, idx) => {
                    const SecIcon = sec.icon;
                    return (
                      <AnimateOnScroll key={sec.title} variant="fadeUp" delay={0.2 + idx * 0.05}>
                        <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-emerald-500/50 transition-all shadow-xs">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                            <SecIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                              {sec.title}
                            </h3>
                            <p className="text-xs text-muted mt-0.5 leading-relaxed">
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
        </section>

        {/* =================================================================== */}
        {/* 7. STEP-BY-STEP GENERATIVE AI ROADMAP                               */}
        {/* =================================================================== */}
        <section className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="DELIVERY ROADMAP"
                title="Structured 6-Phase Generative AI"
                highlightText="Engineering Process"
                description="We take an iterative, de-risked approach from business feasibility mapping to high-scale production deployment."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {GENAI_ROADMAP.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <AnimateOnScroll key={step.step} variant="fadeUp" delay={idx * 0.08}>
                    <div className="relative overflow-hidden group p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-cyan/60 hover:-translate-y-1.5 transition-all duration-300 shadow-sm flex flex-col justify-between h-full">
                      {/* Top Accent Line on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                            <StepIcon className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                            PHASE {step.step}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-cyan block">
                            {step.phase}
                          </span>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase">
                          Deliverable:
                        </span>
                        <span className="text-xs font-semibold text-brand-cyan/90 block mt-0.5">
                          {step.deliverable}
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
        {/* 8. INDUSTRY APPLICATION MATRIX                                      */}
        {/* =================================================================== */}
        <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="INDUSTRY SOLUTIONS"
                title="Generative AI Engineered for"
                highlightText="High-Impact Sectors"
                description="Explore how tailored generative models and private knowledge grounding transform workflows across enterprise verticals."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {INDUSTRY_APPLICATIONS.map((app, idx) => {
                const IndIcon = app.icon;
                return (
                  <AnimateOnScroll key={app.industry} variant="fadeUp" delay={idx * 0.08}>
                    <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-cyan/50 hover:shadow-md transition-all space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                          <IndIcon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                          {app.badge}
                        </span>
                      </div>

                      <div>
                        <span className="text-xs font-mono text-muted block uppercase">
                          {app.industry}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                          {app.title}
                        </h3>
                      </div>

                      <p className="text-xs text-muted leading-relaxed">
                        {app.description}
                      </p>

                      <div className="pt-3 border-t border-slate-100 dark:border-white/10 text-xs font-semibold text-emerald-500 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        <span>{app.impact}</span>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 9. FREQUENTLY ASKED QUESTIONS SECTION (FAQSection COMPONENT)        */}
        {/* =================================================================== */}
        <FaqSection
          faqs={FAQS}
          badge="KNOWLEDGE & FAQS"
          title="Frequently Asked"
          highlightText="Questions"
          description="Clear, technically grounded answers regarding enterprise generative AI architecture, security, model training, and integration."
        />

      </div>
    </>
  );
}
