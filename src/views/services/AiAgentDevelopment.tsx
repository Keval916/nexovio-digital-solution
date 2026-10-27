"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
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
  Terminal,
  Code2,
  Cpu,
  Lock,
  MessageSquare,
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

// ============================================================================
// DATA STRUCTURES & ACCURATE HUMANIZED CONTENT
// ============================================================================

const AGENT_CAPABILITIES = [
  {
    id: "autonomous-customer-agents",
    title: "Customer Support & Lead Agents",
    tag: "Omni-Channel",
    description: "24/7 autonomous agents that resolve support inquiries, execute CRM lookups, process returns, and qualify incoming leads with human handoff.",
    icon: MessageSquare,
    bgClass: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50",
    iconColor: "text-blue-600 dark:text-cyan-400",
  },
  {
    id: "enterprise-research-agents",
    title: "Enterprise Research & Knowledge Agents",
    tag: "Semantic RAG",
    description: "Autonomous agents that scour private documents, cross-reference multi-source databases, and synthesize validated technical intelligence.",
    icon: Database,
    bgClass: "bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/50",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "workflow-automation-agents",
    title: "Workflow & Back-Office Automation Agents",
    tag: "Process Automation",
    description: "Connect APIs, ERPs, and databases to automate multi-step back-office operations, invoice audits, and cross-system data reconciliation.",
    icon: Workflow,
    bgClass: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900/50",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "multi-agent-swarms",
    title: "Collaborative Multi-Agent Swarms",
    tag: "Agent Swarms",
    description: "Hierarchical networks of specialized agents that collaborate, delegate sub-tasks, critique outputs, and solve high-order business challenges.",
    icon: Bot,
    bgClass: "bg-pink-50 dark:bg-pink-950/40 border-pink-100 dark:border-pink-900/50",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    id: "devops-code-agents",
    title: "Code Synthesis & DevOps SRE Agents",
    tag: "Engineering Copilots",
    description: "Agents capable of generating unit tests, executing scripts in sandboxed environments, and triaging production telemetry incidents.",
    icon: Code2,
    bgClass: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "guardrails-governance",
    title: "Enterprise Guardrails & Governance",
    tag: "Security & Safety",
    description: "Enforce strict permission policies, prompt injection barriers, auditable event logs, and human-in-the-loop signoff checkpoints.",
    icon: ShieldCheck,
    bgClass: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/50",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
];

const AGENT_INDUSTRY_CASES = [
  {
    id: "healthcare",
    title: "Healthcare & Clinical Operations",
    category: "Clinical Operations",
    impact: "Automate patient triage workflows, shift scheduling, and clinical EHR reconciliation with strict HIPAA compliance.",
    image: "/images/services/ai-agents/agent-industry-healthcare.jpg",
    alt: "Clinical operations director and senior nurse at hospital workstation using MedFlow AI clinical agent",
  },
  {
    id: "finance",
    title: "Finance & Banking",
    category: "Compliance & Anti-Fraud",
    impact: "Investigate flagged multi-hop transactions, generate automated AML audit dossiers, and streamline regulatory reporting.",
    image: "/images/services/ai-agents/agent-industry-finance.jpg",
    alt: "Financial compliance officer and systems engineer in trading room reviewing Aurora AI fraud detection system",
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    category: "Retail & E-Commerce",
    impact: "Deploy conversational shopping copilots that handle dynamic product discovery, cart recovery, and return authorizations.",
    image: "/images/services/ai-agents/agent-industry-retail.jpg",
    alt: "E-commerce operations managers at retail innovation hub analyzing autonomous AI shopping agent",
  },
  {
    id: "legal",
    title: "Legal & Professional Services",
    category: "Legal & Governance",
    impact: "Review complex enterprise contracts, redline compliance discrepancies, and cross-reference statutory precedents in seconds.",
    image: "/images/services/ai-agents/agent-industry-legal.jpg",
    alt: "Corporate attorneys in law firm library analyzing AI contract intelligence and regulatory cross-referencing",
  },
  {
    id: "software",
    title: "Enterprise IT & DevOps",
    category: "DevOps & SRE Agents",
    impact: "Autonomous incident response agents that parse error telemetry, generate hotfix pull requests, and audit code quality.",
    image: "/images/services/ai-agents/agent-industry-software.jpg",
    alt: "Software engineers collaborating on autonomous code generation and systems architectural diagrams",
  },
  {
    id: "operations",
    title: "Supply Chain & Logistics",
    category: "Supply Chain & Freight",
    impact: "Autonomous load dispatching, carrier exception mitigation, and dynamic warehouse inventory replenishment.",
    image: "/images/services/ai-agents/agent-industry-logistics.jpg",
    alt: "Logistics warehouse operations manager holding rugged tablet with AI route optimization telemetry",
  },
];

const AGENT_PROCESS_STEPS = [
  {
    number: "01",
    title: "Scope & Define Tools",
    deliverable: "Boundary Definition",
    description: "Audit target business workflows, define API interfaces, and establish deterministic execution boundaries.",
  },
  {
    number: "02",
    title: "Architect & Prototype",
    deliverable: "Reasoning Prototype",
    description: "Engineer ReAct reasoning loops, short/long-term memory stores, and secure tool-calling integrations.",
  },
  {
    number: "03",
    title: "Harden & Sandbox",
    deliverable: "Safety Guardrails",
    description: "Implement sandboxed runtime execution, PII masking, token limits, and human-in-the-loop review gates.",
  },
  {
    number: "04",
    title: "Deploy & Monitor",
    deliverable: "Production Scaling",
    description: "Deploy in your private cloud with full execution tracing, latency observability, and automated evals.",
  },
];

const AGENT_TECH_PLATFORMS = [
  { name: "LangGraph", category: "Agentic Cycles", color: "#2E8B57", tag: "Stateful Graphs" },
  { name: "CrewAI", category: "Multi-Agent", color: "#FF4500", tag: "Role Swarms" },
  { name: "AutoGen", category: "Swarm Logic", color: "#0078D4", tag: "Conversational" },
  { name: "OpenAI", category: "Function Calling", color: "#10A37F", tag: "Assistants API" },
  { name: "Anthropic", category: "Tool Calling", color: "#CC785C", tag: "Claude 3.5" },
  { name: "LlamaIndex", category: "Agentic RAG", color: "#8A2BE2", tag: "Data Ingestion" },
  { name: "Docker", category: "Sandbox Env", color: "#2496ED", tag: "Isolated Exec" },
  { name: "PostgreSQL", category: "pgvector Store", color: "#336791", tag: "Memory Index" },
  { name: "Pinecone", category: "Vector DB", color: "#000000", tag: "Semantic Cache" },
  { name: "FastMCP", category: "Tool Protocols", color: "#E11D48", tag: "Model Context" },
];

const AGENT_FAQS = [
  {
    question: "How do autonomous AI agents differ from standard AI chatbots?",
    answer:
      "Traditional chatbots are passive text generators responding turn-by-turn. Autonomous AI agents are proactive problem-solvers equipped with planning loops, short/long-term memory, and direct tool integration (APIs, databases, web browsing). An agent can break a high-level goal into logical sub-tasks, execute queries, call external software, evaluate output accuracy, and complete end-to-end workflows without constant human prompting.",
  },
  {
    question: "How do you prevent agents from making unauthorized decisions or executing infinite loops?",
    answer:
      "We enforce deterministic safety guardrails at every architectural layer. Agents operate within strictly scoped role-based access control (RBAC), execute inside isolated container sandboxes, and adhere to hard limits on iteration depth and token consumption. For sensitive or high-impact actions—such as financial transactions or production database changes—we implement mandatory Human-in-the-Loop (HITL) approval gates.",
  },
  {
    question: "Can AI agents connect to our proprietary software, databases, and internal APIs?",
    answer:
      "Yes. We engineer custom API tool wrappers conforming to Model Context Protocol (MCP) and REST/GraphQL enterprise standards. Agents can securely interact with Salesforce, HubSpot, SAP, NetSuite, PostgreSQL, Snowflake, Jira, Slack, Microsoft Teams, and custom in-house software systems.",
  },
  {
    question: "How is sensitive enterprise data and credentials protected during agent execution?",
    answer:
      "We adhere to enterprise zero-trust security standards. API credentials and authentication tokens are kept in encrypted cloud vaults (such as AWS Secrets Manager or Azure Key Vault) and are never exposed to LLM context windows. In addition, we deploy agent systems in your private cloud VPC with contractual zero data retention on foundation model endpoints.",
  },
  {
    question: "What is the typical timeline to build and launch an autonomous agent solution?",
    answer:
      "A working Proof of Concept (PoC) demonstrating multi-step tool execution and private data retrieval is typically delivered in 3 to 4 weeks. Full enterprise production rollouts—including security hardening, edge case regression testing, sandbox isolation, and observability dashboards—generally span 8 to 12 weeks depending on integration complexity.",
  },
  {
    question: "How do you optimize latency and token costs for multi-step agent reasoning?",
    answer:
      "We utilize hierarchical model routing where lightweight, cost-effective models handle initial task categorization and validation, reserving heavy frontier models only for complex reasoning nodes. In addition, we implement semantic state caching, structured tool outputs, and context-window compaction to minimize recurring token overhead.",
  },
];

export default function AiAgentDevelopmentPage() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "AI Agent Development Services & Autonomous Agent Solutions",
    description:
      "Build autonomous AI agents that reason, plan, and execute real-world workflows. Custom multi-agent swarms, autonomous copilots, and tool-integrating agents by Nexovio.",
    url: "/services/ai-agent-development",
    serviceType: "TechnologyServices",
    image: "/images/services/ai-agents/agent-hero-architect.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Agent Development", url: "/services/ai-agent-development" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AGENT_FAQS.map((faq) => ({
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
          { name: "AI Agent Development", url: "/services/ai-agent-development" },
        ]}
      />

      {/* =================================================================== */}
      {/* 1. HERO SECTION                                                     */}
      {/* =================================================================== */}
      <section
        aria-labelledby="hero-heading"
        className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-background relative overflow-hidden"
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
                AUTONOMOUS AI SYSTEMS
              </span>

              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]"
              >
                <span className="bg-gradient-brand bg-clip-text text-transparent">AI Agent</span> Development
              </h1>

              <p className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                Build autonomous AI agents that reason, plan, and execute real-world workflows.
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                Move beyond passive chatbots to intelligent agents that take action. We design and build enterprise-grade autonomous AI agents equipped with multi-step reasoning, persistent memory, and secure tool integration. From back-office automation to complex customer copilots, our agents work reliably across your existing software stack.
              </p>

              {/* Redesigned Value Matrix: 2x2 Feature Highlights (Distinct from AiDevelopment pills) */}
              <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border-subtle hover:border-brand-bright/40 transition-colors shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0 border border-brand-cyan/20">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Multi-Step Reasoning
                    </span>
                    <span className="text-[11px] text-muted block leading-tight mt-0.5">
                      ReAct &amp; Chain-of-Thought
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border-subtle hover:border-brand-bright/40 transition-colors shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0 border border-brand-cyan/20">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Deterministic Tool Calling
                    </span>
                    <span className="text-[11px] text-muted block leading-tight mt-0.5">
                      APIs, SQL &amp; enterprise ERPs
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border-subtle hover:border-brand-bright/40 transition-colors shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0 border border-brand-cyan/20">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Human-in-the-Loop
                    </span>
                    <span className="text-[11px] text-muted block leading-tight mt-0.5">
                      Granular approval gates
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border-subtle hover:border-brand-bright/40 transition-colors shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0 border border-brand-cyan/20">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Persistent Memory
                    </span>
                    <span className="text-[11px] text-muted block leading-tight mt-0.5">
                      Vector &amp; stateful context
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
                  trackingName="agent_hero_discuss_project"
                  trackingLocation="agent_development_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-md"
                >
                  Discuss Your Agent Project
                </Button>
                <Button
                  href="#agent-capabilities"
                  variant="outline"
                  size="md"
                  trackingName="agent_hero_explore_services"
                  trackingLocation="agent_development_hero"
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
                  src="/images/services/ai-agents/agent-hero-architect.jpg"
                  alt="AI systems architects analyzing autonomous multi-agent orchestration workflow graphs on ultra-wide monitors"
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
                    <span className="text-[11px] font-semibold text-foreground">Agent Loop</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-foreground font-medium">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-bright" />
                      <span>Reason</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-bright" />
                      <span>Plan</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-bright" />
                      <span>Tool Call</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-bright" />
                      <span>Execute</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. OUR AI AGENT CAPABILITIES (End-to-End Solutions)                 */}
      {/* =================================================================== */}
      <section
        aria-labelledby="capabilities-heading"
        className="py-16 sm:py-24 bg-background border-t border-border-subtle/60"
        id="agent-capabilities"
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
                End-to-End Agent Solutions
              </h2>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We engineer AI agents that understand complex multi-step objectives, orchestrate internal tools, and operate safely within strict enterprise guardrails. From single-purpose copilots to collaborative agent swarms, we build solutions that deliver measurable ROI.
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
                {AGENT_CAPABILITIES.map((cap) => {
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
                Our autonomous agents adapt to industry-specific regulatory constraints, proprietary data structures, and operational workflows. Discover how intelligent agents drive tangible efficiency across modern sectors.
              </p>

              {/* 5 Bullet Items with Cyan Checkmarks */}
              <ul className="space-y-2.5 pt-1 text-xs sm:text-sm teAutonomous Systems
xt-foreground font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>24/7 Autonomous ticket triage &amp; resolution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Automated invoice &amp; claims reconciliation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Proactive inventory reordering &amp; dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Multi-document legal compliance auditing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Real-time fraud &amp; anomaly detection</span>
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
                {AGENT_INDUSTRY_CASES.map((ind) => (
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
                  src="/images/services/ai-agents/agent-process-collaboration.jpg"
                  alt="Nexovio AI engineering team in conference room whiteboard mapping autonomous AI agent decision tree and tool execution nodes"
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
                  We follow a battle-tested engineering framework to ensure your AI agents operate predictably, securely, and with high return on investment.
                </p>
              </div>

              {/* 4-Step Horizontal Timeline on Large Screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
                {AGENT_PROCESS_STEPS.map((step, idx) => (
                  <div key={step.number} className="relative flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-brand-cyan/15 text-brand-bright font-bold font-mono text-sm flex items-center justify-center shrink-0 border border-brand-cyan/30">
                        {step.number}
                      </div>
                      {idx < AGENT_PROCESS_STEPS.length - 1 && (
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
                  Built with Modern Frameworks
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                  We leverage cutting-edge agentic frameworks, orchestration libraries, and secure runtime sandboxes to build robust, scalable AI agents.
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
                {AGENT_TECH_PLATFORMS.map((tech) => (
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
                    Have a Custom Agent Workflow?
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    We engineer bespoke tool wrappers, private cloud sandboxes, and domain-tuned models tailored to your exact infrastructure.
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
        faqs={AGENT_FAQS}
        badge="COMMON QUESTIONS"
        title="Frequently Asked"
        highlightText="Questions"
        description="Find answers to common questions about our AI agent development services, autonomous reasoning loops, tool authorization, safety guardrails, and deployment timelines."
        variant="white"
      />
    </main>
  );
}
