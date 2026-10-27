"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BrainCircuit,
  Cpu,
  Sparkles,
  Zap,
  ArrowRight,
  Database,
  Workflow,
  ShieldCheck,
  Layers,
  MessageSquare,
  Eye,
  Sliders,
  CheckCircle2,
  Building2,
  Stethoscope,
  Landmark,
  ShoppingBag,
  Factory,
  Truck,
  GraduationCap,
  Globe,
  Terminal,
  Server,
  Cloud,
  Check,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import {
  getOrganizationSchema,
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/src/lib/schema";
import { FaqSection } from "@/src/components/sections/FaqSection";

// ============================================================================
// DATA STRUCTURES & ACCURATE CONTENT
// ============================================================================

const AI_CAPABILITIES = [
  {
    id: "ai-support-agents",
    title: "Customer Support & Lead AI Agents",
    description: "24/7 autonomous inquiry triage, instant FAQ retrieval from your docs, and qualified CRM lead handoff.",
    icon: MessageSquare,
    bgClass: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50",
    iconColor: "text-blue-600 dark:text-cyan-400",
  },
  {
    id: "knowledge-base-ai",
    title: "Internal Knowledge Base AI",
    description: "Private semantic search engine over company PDFs, Notion, and databases with strict role-based privacy.",
    icon: Database,
    bgClass: "bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/50",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "business-automation",
    title: "Business Workflow Automation",
    description: "Connect forms, CRM (HubSpot/Salesforce), and ERP to eliminate manual data entry and save employee hours.",
    icon: Workflow,
    bgClass: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900/50",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "generative-ai",
    title: "Generative AI Systems",
    description: "Domain-specific LLMs, automated RFP analysis, contract summarization, and content engines.",
    icon: Sparkles,
    bgClass: "bg-pink-50 dark:bg-pink-950/40 border-pink-100 dark:border-pink-900/50",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    id: "computer-vision",
    title: "Computer Vision & OCR",
    description: "Automated document verification, medical image parsing, and receipt/invoice extraction.",
    icon: Eye,
    bgClass: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "machine-learning",
    title: "Predictive Analytics & ML",
    description: "Demand forecasting, customer churn prediction, and intelligent recommendation algorithms.",
    icon: Cpu,
    bgClass: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/50",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
];

const INDUSTRY_USE_CASES = [
  {
    id: "healthcare",
    title: "Healthcare",
    impact: "Better patient outcomes with intelligent insights.",
    image: "/images/services/ai-automation/intelligent-document-processing-card.jpg",
  },
  {
    id: "finance",
    title: "Finance",
    impact: "Smarter risk analysis and fraud detection.",
    image: "/images/services/ai-automation/finance-reconciliation-card.jpg",
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    impact: "Personalized shopping experiences.",
    image: "/images/services/ai-chatbots/ecommerce-sales-chatbot-card.jpg",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    impact: "Predictive maintenance and quality control.",
    image: "/images/services/ai-automation/itops-cloud-telemetry-card.jpg",
  },
  {
    id: "education",
    title: "Education",
    impact: "Adaptive learning and student support.",
    image: "/images/services/ai-development/ai-customer-experience.jpg",
  },
  {
    id: "logistics",
    title: "Logistics",
    impact: "Smarter routing and supply chain visibility.",
    image: "/images/services/ai-automation/workflow-rpa-automation-card.jpg",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goals and data.",
  },
  {
    number: "02",
    title: "Build",
    description: "Develop and test the solution.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Integrate and launch in your environment.",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Monitor, improve and scale.",
  },
];

const TECH_PLATFORMS = [
  { name: "Python", category: "Language", color: "#3776AB", tag: "Core AI" },
  { name: "TensorFlow", category: "Framework", color: "#FF6F00", tag: "Deep Learning" },
  { name: "PyTorch", category: "Framework", color: "#EE4C2C", tag: "Neural Networks" },
  { name: "OpenAI", category: "LLM Provider", color: "#10A37F", tag: "GPT Models" },
  { name: "LangChain", category: "Orchestration", color: "#2E8B57", tag: "RAG & Agents" },
  { name: "Azure", category: "Cloud", color: "#0089D6", tag: "Enterprise Cloud" },
  { name: "AWS", category: "Cloud", color: "#FF9900", tag: "Bedrock & SageMaker" },
  { name: "Google Cloud", category: "Cloud", color: "#4285F4", tag: "Vertex AI" },
  { name: "Docker", category: "DevOps", color: "#2496ED", tag: "Containerization" },
  { name: "Kubernetes", category: "DevOps", color: "#326CE5", tag: "Model Serving" },
];

const AI_FAQS = [
  {
    question: "How long does it take to build an AI solution?",
    answer:
      "Most initial AI proofs-of-concept and workflow pilots launch in 3 to 6 weeks. Full production deployments with enterprise API integrations, data security auditing, and continuous fine-tuning typically span 8 to 14 weeks depending on workflow complexity.",
  },
  {
    question: "What kind of businesses can benefit from AI development?",
    answer:
      "Businesses processing high volumes of unstructured data, handling frequent customer inquiries, managing repetitive operational workflows, or seeking predictive forecasting gain immediate efficiency and cost reduction from custom AI engineering.",
  },
  {
    question: "Do you work with existing data or need new data?",
    answer:
      "We work with your existing business data—including PDFs, CRM records, databases, SOPs, and spreadsheets. We sanitize, clean, and vectorize your internal data so models remain grounded in verified facts with strict citation guardrails.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer:
      "Yes. Nexovio provides proactive post-launch maintenance, model drift monitoring, inference latency optimization, security patch updates, and ongoing prompt engineering retainers to ensure continuous high accuracy.",
  },
  {
    question: "Can you integrate AI with our current systems?",
    answer:
      "Yes. We engineer seamless integrations with your existing tech stack, including CRMs (HubSpot, Salesforce), ERPs, PostgreSQL/MongoDB databases, web and mobile apps, messaging channels (WhatsApp, Slack), and REST/GraphQL APIs.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We prioritize zero-data-retention compliance, enterprise role-based access control (RBAC), end-to-end data encryption, and private VPC or self-hosted model deployments to ensure proprietary client information never leaks to public training sets.",
  },
];

export default function AiDevelopmentPage() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "AI Development Services & Custom Machine Learning Solutions",
    description:
      "Build intelligent solutions that learn, adapt and create real business value. Custom AI models, machine learning, NLP, computer vision, and workflow automation by Nexovio.",
    url: "/services/ai-development",
    serviceType: "TechnologyServices",
    image: "/images/services/ai-development/ai-dev-hero.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Development", url: "/services/ai-development" },
  ]);

  return (
    <div className="bg-background text-foreground transition-colors overflow-hidden">
      {/* Structured Data Scripts */}
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

      {/* Full-width Breadcrumb Stripe Touching Header */}
      <Breadcrumbs items={[{ name: "Services", url: "/services" }, { name: "AI Development", url: "/services/ai-development" }]} />

      <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle & Value Pills */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                AI SERVICES
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]">
                <span className="bg-gradient-brand bg-clip-text text-transparent">AI</span> Development
              </h1>

              <p className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                Build intelligent solutions that learn, adapt and create real business value.
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                From custom AI models to intelligent automation, we help you turn your data into powerful capabilities. Our AI development services are focused on solving real problems, improving efficiency and creating smarter digital experiences.
              </p>

              {/* 4 Feature Badges */}
              <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <BrainCircuit className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Custom AI Models</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <Database className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Data Integration</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <Layers className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Scalable Architecture</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <ShieldCheck className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Ongoing Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  trackingName="ai_hero_discuss_project"
                  trackingLocation="ai_development_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-md"
                >
                  Discuss Your Project
                </Button>
                <Button
                  href="#ai-capabilities"
                  variant="outline"
                  size="md"
                  trackingName="ai_hero_explore_services"
                  trackingLocation="ai_development_hero"
                  className="w-full sm:w-auto border-brand-bright text-brand-bright hover:bg-brand-bright/10"
                >
                  Explore Our AI Services
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
                  src="/images/services/ai-development/ai-dev-hero.jpg"
                  alt="AI engineer working on custom artificial intelligence models at workstation"
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
                    <Cpu className="w-4 h-4" />
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
      <section className="py-16 sm:py-24 bg-background border-t border-border-subtle/60" id="ai-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subtitle & Process Link */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                OUR AI CAPABILITIES
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
                End-to-End AI Solutions
              </h2>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We design and build AI solutions that fit your business goals. Whether you need a custom model, intelligent automation or AI-powered experiences, we handle everything from strategy to deployment.
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
                {AI_CAPABILITIES.map((cap) => {
                  const CapIcon = cap.icon;
                  return (
                    <div
                      key={cap.id}
                      className="p-5 sm:p-6 rounded-2xl border border-border-subtle bg-surface-elevated hover:shadow-lg hover:border-brand-bright/40 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-4 border ${cap.bgClass}`}
                        >
                          <CapIcon className={`w-5 h-5 ${cap.iconColor}`} />
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5 group-hover:text-brand-bright transition-colors">
                          {cap.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-muted leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>
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
      <section className="py-16 sm:py-24 bg-surface-subtle/50 border-y border-border-subtle/60" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subtitle, Checkmarks & Explore Link */}
            <div className="lg:col-span-4 space-y-5 text-left">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                REAL-WORLD USE CASES
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
                AI That Works Across Industries
              </h2>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Our AI development services are flexible and can be applied across different industries and use cases. Here are some of the most common ways businesses use AI to stay ahead.
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

            {/* Right Column: 6 Industry Image Cards (3 cols x 2 rows) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {INDUSTRY_USE_CASES.map((ind) => (
                  <div
                    key={ind.id}
                    className="rounded-2xl border border-border-subtle bg-surface-elevated overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-bright/40 transition-all duration-300 flex flex-col group"
                  >
                    {/* Industry Photograph Top */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={ind.image}
                        alt={`${ind.title} AI solution by Nexovio`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 260px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-brand-bright transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {ind.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. OUR APPROACH SECTION (A Structured Process for Implementation)   */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-background" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Team Collaborating on AI Model */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-elevated aspect-[4/3] group">
                <Image
                  src="/images/services/generative-ai/genai-hero-architects.jpg"
                  alt="Nexovio engineers analyzing multimodal AI neural network architecture"
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
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
                  A Structured Process for <br className="hidden sm:inline" />
                  Successful AI Implementation
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed max-w-xl">
                  We follow a clear, collaborative process to ensure your AI solution is built for real-world use and long-term success.
                </p>
              </div>

              {/* 4-Step Horizontal Timeline on Large Screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={step.number} className="relative flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-brand-cyan/15 text-brand-bright font-bold font-mono text-sm flex items-center justify-center shrink-0 border border-brand-cyan/30">
                        {step.number}
                      </div>
                      {idx < PROCESS_STEPS.length - 1 && (
                        <ArrowRight className="hidden lg:block w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0 ml-auto" />
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-foreground pt-1">
                      {step.title}
                    </h3>
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
      <section className="py-16 sm:py-24 bg-surface-subtle/50 border-y border-border-subtle/60" id="tech-stack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4 text-left flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                  TECHNOLOGIES &amp; PLATFORMS
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-[1.2]">
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
                {TECH_PLATFORMS.map((tech) => (
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
        faqs={AI_FAQS}
        badge="COMMON QUESTIONS"
        title="Frequently Asked"
        highlightText="Questions"
        description="Find answers to common questions about our AI development services, custom machine learning models, deployment timelines, and data security."
        variant="white"
      />

    </div>
  );
}
