"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BrainCircuit,
  Sparkles,
  ArrowRight,
  Database,
  Workflow,
  ShieldCheck,
  Layers,
  Eye,
  CheckCircle2,
  Check,
  Cpu,
  Lock,
  TrendingUp,
  Clock,
  Search,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import {
  getOrganizationSchema,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/src/lib/schema";
import { FaqSection } from "@/src/components/sections/FaqSection";


const GENAI_CAPABILITIES = [
  {
    id: "custom-llm-apps",
    title: "Custom LLM Applications & Copilots",
    tag: "Custom Copilots",
    description: "Bespoke enterprise AI applications and interactive workspaces connected directly to your proprietary operational data.",
    icon: Sparkles,
    bgClass: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50",
    iconColor: "text-blue-600 dark:text-cyan-400",
  },
  {
    id: "rag-knowledge-systems",
    title: "Retrieval-Augmented Generation (RAG)",
    tag: "Vector Search",
    description: "Ground model responses in your verified private knowledge bases, PDFs, and databases with sub-second semantic retrieval.",
    icon: Database,
    bgClass: "bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/50",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "multi-agent-swarms",
    title: "Autonomous Multi-Agent Swarms",
    tag: "Agent Workflows",
    description: "Collaborative AI agents that research, analyze documents, write code, and execute multi-step business actions safely.",
    icon: Workflow,
    bgClass: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900/50",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "fine-tuning-slms",
    title: "Domain Model Fine-Tuning & SLMs",
    tag: "Domain Weights",
    description: "Tailor open-weight models (Llama, Mistral) on your company terminology, style guidelines, and compliance standards.",
    icon: BrainCircuit,
    bgClass: "bg-pink-50 dark:bg-pink-950/40 border-pink-100 dark:border-pink-900/50",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    id: "multimodal-genai",
    title: "Multimodal Vision & Audio GenAI",
    tag: "Vision & Audio",
    description: "Extract structured insights from technical schematics, invoices, audio recordings, and visual data with multimodal models.",
    icon: Eye,
    bgClass: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "enterprise-guardrails",
    title: "Enterprise AI Guardrails & Governance",
    tag: "Safety & Audit",
    description: "Prevent hallucinations, enforce prompt injection protection, mask sensitive PII, and maintain auditable corporate compliance.",
    icon: ShieldCheck,
    bgClass: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/50",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
];

const GENAI_INDUSTRY_CASES = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    category: "Clinical Intelligence",
    impact: "Summarize clinical notes, patient intake records, and diagnostic research with strict HIPAA compliance.",
    metric: "99.2% Factual Precision",
    image: "/images/services/generative-ai/genai-industry-healthcare.jpg",
    alt: "Physician and researcher reviewing AI clinical analytics and patient notes on hospital tablet",
  },
  {
    id: "finance",
    title: "Finance & Banking",
    category: "Financial & Risk Ops",
    impact: "Automate financial memo synthesis, real-time risk modeling, and automated regulatory compliance audits.",
    metric: "Sub-Second Risk Auditing",
    image: "/images/services/generative-ai/genai-industry-finance.jpg",
    alt: "Financial risk director analyzing real-time market models and algorithmic trading telemetry",
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    category: "E-Commerce & Retail",
    impact: "Personalized conversational shopping assistants, virtual stylists, and automated product catalog generation.",
    metric: "+38% Basket Conversion",
    image: "/images/services/generative-ai/genai-industry-retail.jpg",
    alt: "Retail brand managers showcasing an AI-driven personalized styling recommendation system",
  },
  {
    id: "legal",
    title: "Legal & Professional Services",
    category: "Legal & Compliance",
    impact: "Semantic contract review, multi-jurisdiction precedent searches, and automated legal brief drafting.",
    metric: "70% Faster Contract Audits",
    image: "/images/services/generative-ai/genai-industry-legal.jpg",
    alt: "Corporate attorneys examining automated AI contract intelligence and legal document summaries",
  },
  {
    id: "software",
    title: "Enterprise IT & Software",
    category: "Software Engineering",
    impact: "In-app copilot assistants, automated code synthesis, unit test generation, and intelligent bug triage.",
    metric: "3x Developer Velocity",
    image: "/images/services/generative-ai/genai-industry-software.jpg",
    alt: "Senior software engineers collaborating with AI copilot code synthesis on dual monitors",
  },
  {
    id: "operations",
    title: "Logistics & Supply Chain",
    category: "Supply Chain & Freight",
    impact: "Automated vendor dispatching, dynamic load matching, shipment tracking, and exception resolution.",
    metric: "-28% Route Delay Overhead",
    image: "/images/services/generative-ai/genai-industry-logistics.jpg",
    alt: "Logistics warehouse operations manager using industrial tablet with AI route optimization",
  },
];

const GENAI_PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover & Assess",
    deliverable: "Architecture Roadmap",
    description: "Audit data quality, proprietary assets, security boundaries, and prioritize high-ROI generative use cases.",
  },
  {
    number: "02",
    title: "Prototype & Ground (PoC)",
    deliverable: "Functional Prototype",
    description: "Develop a working RAG or multi-agent prototype within weeks to validate precision, latency, and user feedback.",
  },
  {
    number: "03",
    title: "Harden & Guardrail",
    deliverable: "Security Compliance",
    description: "Implement deterministic guardrails, PII redaction, prompt injection defense, and automated evaluation metrics.",
  },
  {
    number: "04",
    title: "Scale & Productionize",
    deliverable: "Enterprise Deployment",
    description: "Deploy in your private cloud with semantic caching, autoscaling vector indexes, and continuous telemetry.",
  },
];

const GENAI_TECH_PLATFORMS = [
  { name: "OpenAI", category: "LLM Foundation", color: "#10A37F", tag: "GPT-4o & o1" },
  { name: "Anthropic", category: "Reasoning", color: "#CC785C", tag: "Claude 3.5" },
  { name: "Google", category: "Multimodal", color: "#4285F4", tag: "Gemini 1.5" },
  { name: "Meta Llama", category: "Open Weights", color: "#0668E1", tag: "Llama 3.3" },
  { name: "LangChain", category: "Orchestration", color: "#2E8B57", tag: "Agent Framework" },
  { name: "LlamaIndex", category: "Data Ingestion", color: "#8A2BE2", tag: "Advanced RAG" },
  { name: "Pinecone", category: "Vector DB", color: "#000000", tag: "Vector Index" },
  { name: "Qdrant", category: "Vector Engine", color: "#DC2626", tag: "Hybrid Search" },
  { name: "HuggingFace", category: "Model Hub", color: "#FFD21E", tag: "Open Models" },
  { name: "vLLM", category: "Inference Engine", color: "#0284C7", tag: "High Throughput" },
];

const GENAI_FAQS = [
  {
    question: "What is the difference between custom generative AI and consumer tools like ChatGPT?",
    answer:
      "Consumer chatbots run on shared public cloud infrastructure using generic web data with no knowledge of your internal procedures, proprietary client files, or compliance rules. Custom generative AI connects state-of-the-art models directly to your private databases via RAG, runs within your secure cloud perimeter with zero data retention, and executes deterministic workflows across your internal tools.",
  },
  {
    question: "How do you prevent hallucinations and ensure factual accuracy?",
    answer:
      "We constrain generative models using enterprise Retrieval-Augmented Generation (RAG). Responses are grounded exclusively in verified corporate documents and databases, with required source citations. We also apply confidence scoring, deterministic post-processing filters, and semantic guardrails to prevent speculation and ensure reliable answers.",
  },
  {
    question: "Is our proprietary data safe from being used in public training sets?",
    answer:
      "Yes, completely. We exclusively utilize enterprise-tier API agreements (Azure OpenAI, AWS Bedrock, private endpoints) and self-hosted open-source models with contractual zero-data-retention guarantees. Your proprietary intellectual property and customer records are never used to train public foundation models.",
  },
  {
    question: "How long does it take to develop and deploy an enterprise generative AI solution?",
    answer:
      "A working Proof of Concept (PoC) or functional MVP typically launches in 3 to 5 weeks. Full production deployments with enterprise authentication, vector database infrastructure, custom guardrails, and third-party integrations generally require 8 to 14 weeks depending on architectural complexity.",
  },
  {
    question: "Can generative AI integrate with our existing CRM, ERP, and software?",
    answer:
      "Yes. We engineer API-first generative AI applications that integrate seamlessly with Salesforce, HubSpot, NetSuite, SAP, PostgreSQL databases, Slack, Microsoft Teams, WhatsApp, and custom web or mobile frontends via secure REST, GraphQL, and event-driven webhooks.",
  },
  {
    question: "How do you keep operational inference and token costs manageable?",
    answer:
      "We design for cost efficiency from day one. By implementing semantic prompt caching, context-window minimization, intelligent model routing (directing simpler requests to lighter, faster models), and hybrid small language models (SLMs), we help reduce recurring token overhead by up to 60%.",
  },
];

export default function GenerativeAiDevelopmentPage() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "Generative AI Development Services & Enterprise LLM Solutions",
    description:
      "Build intelligent generative solutions that synthesize knowledge, automate workflows, and create real business value. Custom LLMs, RAG pipelines, and multi-agent systems by Nexovio.",
    url: "/services/generative-ai-development",
    serviceType: "TechnologyServices",
    image: "/images/services/generative-ai/genai-hero-architect.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Generative AI Development", url: "/services/generative-ai-development" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GENAI_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main id="main-content" className="bg-background text-foreground transition-colors overflow-hidden">
      {/* Structured Data Scripts for Google Crawlers */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Full-width Breadcrumb Stripe Touching Header */}
      <Breadcrumbs
        items={[
          { name: "Services", url: "/services" },
          { name: "Generative AI Development", url: "/services/generative-ai-development" },
        ]}
      />

      {/* =================================================================== */}
      {/* 1. HERO SECTION                                                     */}
      {/* =================================================================== */}
      <section
        aria-labelledby="hero-heading"
        className="pt-8 sm:pt-10 pb-14 sm:pb-18 bg-background relative overflow-hidden"
      >
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle & Value Matrix */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                ENTERPRISE GENERATIVE AI
              </span>

              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]"
              >
                <span className="bg-gradient-brand bg-clip-text text-transparent">Generative AI</span> Development
              </h1>

              <p className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                Custom LLM Architectures, Enterprise RAG &amp; Autonomous AI Agents.
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                We engineer production-ready generative AI systems tailored to your proprietary knowledge. From semantic document synthesis and custom copilot workspaces to multi-agent automation, we turn experimental AI into dependable business outcomes with zero data leakage.
              </p>

              {/* Redesigned Value Matrix: 2x2 Feature Highlights (Distinct from AiDevelopment pills) */}
              <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border-subtle hover:border-brand-bright/40 transition-colors shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0 border border-brand-cyan/20">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Domain-Tuned LLMs
                    </span>
                    <span className="text-[11px] text-muted block leading-tight mt-0.5">
                      Proprietary weights &amp; SLMs
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border-subtle hover:border-brand-bright/40 transition-colors shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0 border border-brand-cyan/20">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Sub-Second RAG
                    </span>
                    <span className="text-[11px] text-muted block leading-tight mt-0.5">
                      99.4% factual precision
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border-subtle hover:border-brand-bright/40 transition-colors shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0 border border-brand-cyan/20">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Autonomous Swarms
                    </span>
                    <span className="text-[11px] text-muted block leading-tight mt-0.5">
                      Multi-agent goal execution
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border-subtle hover:border-brand-bright/40 transition-colors shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0 border border-brand-cyan/20">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Zero-Data Retention
                    </span>
                    <span className="text-[11px] text-muted block leading-tight mt-0.5">
                      SOC-2 &amp; HIPAA cloud perimeter
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  trackingName="genai_hero_discuss_project"
                  trackingLocation="genai_development_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-md"
                >
                  Discuss Your Project
                </Button>
                <Button
                  href="#genai-capabilities"
                  variant="outline"
                  size="md"
                  trackingName="genai_hero_explore_services"
                  trackingLocation="genai_development_hero"
                  className="w-full sm:w-auto border-brand-bright text-brand-bright hover:bg-brand-bright/10"
                >
                  Explore Capabilities
                </Button>
              </div>
            </div>

            {/* Right Column: Hero Photo with Floating Feature Badges */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Decorative Glow Arc Accent */}
              <div
                className="absolute -top-6 -left-6 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-[3px] border-cyan-400/30 border-dashed pointer-events-none -z-0"
                aria-hidden="true"
              />

              <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-elevated aspect-[4/3] sm:aspect-[16/12] z-10 group">
                <Image
                  src="/images/services/generative-ai/genai-hero-architect.jpg"
                  alt="Senior AI engineers reviewing generative AI prompt engineering pipelines and neural network architecture"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Floating Card 1: Checklist Box (Left Overlay) */}
                <div className="absolute top-6 left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-200/80 dark:border-slate-800 z-20 space-y-2">
                  <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="w-6 h-6 rounded-md bg-brand-cyan/20 text-brand-bright font-bold text-xs flex items-center justify-center">
                      AI
                    </span>
                    <span className="text-[11px] font-semibold text-foreground">Pipeline</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-foreground font-medium">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-bright" />
                      <span>Analyze</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-bright" />
                      <span>Learn</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-bright" />
                      <span>Improve</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-bright" />
                      <span>Deliver</span>
                    </li>
                  </ul>
                </div>

                {/* Floating Card 2: Smarter Solutions Pill (Top-Right Overlay) */}
                <div className="absolute top-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 pr-4 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 z-20">
                  <div className="w-8 h-8 rounded-xl bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Smarter Solutions
                    </span>
                    <span className="text-[10px] text-muted block leading-tight">
                      for Real Problems
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. OUR AI CAPABILITIES SECTION (End-to-End AI Solutions)             */}
      {/* =================================================================== */}
      <section
        aria-labelledby="capabilities-heading"
        className="py-16 sm:py-24 bg-background"
        id="genai-capabilities"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subtitle & Process Link */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                OUR AI CAPABILITIES
              </span>

              <h2
                id="capabilities-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]"
              >
                End-to-End AI Solutions
              </h2>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We design and build generative AI solutions that fit your business goals. Whether you need a custom model, intelligent automation or AI-powered experiences, we handle everything from strategy to deployment.
              </p>

              <div className="pt-2">
                <Link
                  href="#process"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-bright hover:text-brand-electric group transition-colors"
                >
                  <span>Learn More About Our Process</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 6 Capability Cards (3 cols x 2 rows) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {GENAI_CAPABILITIES.map((cap) => {
                  const CapIcon = cap.icon;
                  return (
                    <article
                      key={cap.id}
                      className="p-5 sm:p-6 rounded-2xl border border-border-subtle bg-surface-elevated hover:shadow-lg hover:border-brand-bright/40 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${cap.bgClass}`}
                          >
                            <CapIcon className={`w-5 h-5 ${cap.iconColor}`} />
                          </div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-surface-subtle text-muted border border-border-subtle">
                            {cap.tag}
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5 group-hover:text-brand-bright transition-colors">
                          {cap.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-muted leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. REAL-WORLD USE CASES SECTION (AI That Works Across Industries)   */}
      {/* =================================================================== */}
      <section
        aria-labelledby="industries-heading"
        className="py-16 sm:py-24 bg-surface-subtle/50 border-y border-border-subtle/60"
        id="industries"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subtitle, Checkmarks & Explore Link */}
            <div className="lg:col-span-4 space-y-5 text-left">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                REAL-WORLD USE CASES
              </span>

              <h2
                id="industries-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]"
              >
                AI That Works Across Industries
              </h2>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Our generative AI development services are flexible and can be applied across different industries and use cases. Here are some of the most common ways businesses use AI to stay ahead.
              </p>

              {/* 5 Bullet Items with Cyan Checkmarks */}
              <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-foreground font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Customer support automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Predictive analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Document processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Personalization engines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Fraud detection</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-bright hover:text-brand-electric group transition-colors"
                >
                  <span>Explore All Use Cases</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 6 Matched Industry Image Cards (3 cols x 2 rows) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {GENAI_INDUSTRY_CASES.map((ind) => (
                  <article
                    key={ind.id}
                    className="rounded-2xl border border-border-subtle bg-surface-elevated overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-bright/40 transition-all duration-300 flex flex-col group"
                  >
                    {/* Industry Photograph Top with Matched Realistic Human Imagery */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={ind.image}
                        alt={ind.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 260px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      {/* Frosted Category Pill Overlaid on Photo */}
                      <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-white tracking-wide border border-white/10">
                        {ind.category}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left space-y-2">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-brand-bright transition-colors">
                          {ind.title}
                        </h3>
                        <p className="text-xs text-muted leading-relaxed mt-1">
                          {ind.impact}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. OUR APPROACH SECTION (A Structured Process for Implementation)   */}
      {/* =================================================================== */}
      <section
        aria-labelledby="process-heading"
        className="py-16 sm:py-24 bg-background"
        id="process"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Team Collaborating on AI Model */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-elevated aspect-[4/3] group">
                <Image
                  src="/images/services/generative-ai/genai-process-collaboration.jpg"
                  alt="Nexovio engineers and solutions architect mapping enterprise generative AI multi-agent workflow and RAG architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right Column: Process Steps with Connected Numbers */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                  OUR APPROACH
                </span>
                <h2
                  id="process-heading"
                  className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]"
                >
                  A Structured Process for <br className="hidden sm:inline" />
                  Successful AI Implementation
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed max-w-xl">
                  We follow a clear, collaborative process to ensure your AI solution is built for real-world use and long-term success.
                </p>
              </div>

              {/* 4-Step Horizontal Timeline on Large Screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
                {GENAI_PROCESS_STEPS.map((step, idx) => (
                  <div key={step.number} className="relative flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-brand-cyan/15 text-brand-bright font-bold font-mono text-sm flex items-center justify-center shrink-0 border border-brand-cyan/30">
                        {step.number}
                      </div>
                      {idx < GENAI_PROCESS_STEPS.length - 1 && (
                        <ArrowRight className="hidden lg:block w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0 ml-auto" />
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-bright">
                        {step.deliverable}
                      </span>
                      <h3 className="text-sm font-bold text-foreground pt-0.5">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. TECHNOLOGIES & PLATFORMS (Built with the Right Tools)            */}
      {/* =================================================================== */}
      <section
        aria-labelledby="tech-heading"
        className="py-16 sm:py-24 bg-surface-subtle/50 border-y border-border-subtle/60"
        id="tech-stack"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4 text-left flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                  TECHNOLOGIES &amp; PLATFORMS
                </span>
                <h2
                  id="tech-heading"
                  className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-[1.2]"
                >
                  Built with the Right Tools
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                  We work with industry-leading technologies to build secure, scalable and high-performing AI solutions.
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-bright hover:text-brand-electric group transition-colors"
                >
                  <span>View All Technologies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Middle Grid of 10 Technology Cards (5 cols x 2 rows on lg) */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {GENAI_TECH_PLATFORMS.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 sm:p-4 rounded-xl border border-border-subtle bg-surface-elevated flex flex-col items-center justify-center text-center shadow-xs hover:border-brand-bright/40 hover:shadow-sm transition-all"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs font-mono text-white mb-2 shadow-xs"
                      style={{ backgroundColor: tech.color }}
                    >
                      {tech.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs font-bold text-foreground block">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-muted block leading-tight">
                      {tech.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Consultation Callout Box */}
            <div className="lg:col-span-3">
              <div className="h-full rounded-2xl border border-sky-200/80 bg-sky-50/70 dark:bg-slate-900/80 dark:border-sky-900/50 p-6 flex flex-col justify-between space-y-4 shadow-sm text-left">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-brand-cyan/20 flex items-center justify-center text-brand-bright shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    Have a Specific Requirement?
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    We can also work with custom models and preferred platforms based on your needs.
                  </p>
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-bright hover:text-brand-electric group transition-colors"
                  >
                    <span>Talk to Our Experts</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. FREQUENTLY ASKED QUESTIONS (Standard FaqSection Component)       */}
      {/* =================================================================== */}
      <FaqSection
        faqs={GENAI_FAQS}
        badge="COMMON QUESTIONS"
        title="Frequently Asked"
        highlightText="Questions"
        description="Find answers to common questions about our generative AI development services, custom LLM fine-tuning, deployment timelines, and data security."
        variant="white"
      />
    </main>
  );
}
