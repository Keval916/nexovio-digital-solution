"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
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
  CheckSquare,
  Flame,
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
// REALISTIC AGENT CARD IMAGE PREVIEW (Identical aesthetic to GenAI page)
// ============================================================================

function RealisticAgentCardImage({
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
// DATA STRUCTURES: 10 CORE AI AGENT SERVICES
// ============================================================================

interface AgentServiceItem {
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

const AGENT_SERVICES: AgentServiceItem[] = [
  {
    id: "custom-ai-agent-development",
    number: "01",
    badge: "BESPOKE ARCHITECTURE",
    title: "Custom AI Agent Development",
    tagline: "Purpose-Specific Agents Built Around Your Unique Workflows",
    description:
      "Build purpose-specific agents around the workflows, rules, knowledge, and systems unique to your business. We engineer agents with tailored reasoning loops, state persistence, and deterministic business logic.",
    keywordCluster: "custom AI agent development · bespoke autonomous software",
    image: "/images/services/ai-agents/custom-agent-development-card.jpg",
    imageAlt: "Technical engineers configuring custom AI agent architecture and workflow state machines on high resolution monitors",
    icon: Bot,
    deliverables: [
      "Custom goal decomposition & planning logic",
      "Proprietary business rules & policy encoding",
      "State persistence across multi-step execution",
      "Tailored API tooling & external integrations",
      "Human escalation boundaries & safety thresholds",
    ],
  },
  {
    id: "conversational-ai-agents",
    number: "02",
    badge: "CONTEXT-AWARE CX",
    title: "Conversational AI Agents",
    tagline: "Natural Language Interaction That Guides Users and Resolves Tasks",
    description:
      "Create agents that understand natural language, maintain context, retrieve relevant information, and guide customers or employees through complex tasks with empathetic, verified responses.",
    keywordCluster: "conversational AI agents · intelligent customer dialog",
    image: "/images/services/ai-agents/conversational-agents-card.jpg",
    imageAlt: "Customer support specialist interacting with conversational AI agent interface resolving customer inquiry",
    icon: MessageSquare,
    deliverables: [
      "Multi-turn context tracking & session memory",
      "Dynamic tone-of-voice alignment with brand guidelines",
      "Intent classification & proactive guidance",
      "Automated account lookup & verified dispute resolution",
      "Graceful human handoff with full conversation history",
    ],
  },
  {
    id: "workflow-automation-agents",
    number: "03",
    badge: "MULTI-STEP EXECUTION",
    title: "AI Workflow Automation Agents",
    tagline: "Automate Repeatable Processes Across Systems with Closed-Loop Logic",
    description:
      "Automate repeatable, multi-step processes such as routing requests, gathering information, updating records, creating summaries, and triggering follow-up actions across your tech stack.",
    keywordCluster: "AI workflow automation · autonomous process execution",
    image: "/images/services/ai-agents/workflow-automation-card.jpg",
    imageAlt: "Operations analytics dashboard showcasing multi-step AI workflow automation pipeline with data routing",
    icon: Workflow,
    deliverables: [
      "Automated ticket triage & intelligent request routing",
      "Cross-system data extraction, synthesis & reconciliation",
      "Autonomous CRM & ERP record synchronization",
      "Event-driven webhook & cron-based triggers",
      "Automated validation & outcome checking loops",
    ],
  },
  {
    id: "rag-knowledge-agents",
    number: "04",
    badge: "FACTUAL GROUNDING",
    title: "RAG & Knowledge-Based Agents",
    tagline: "Grounded in Approved Enterprise Knowledge with Verifiable Citations",
    description:
      "Connect agents to approved business knowledge so responses are grounded in trusted documents, databases, and internal sources instead of relying only on stochastic model memory.",
    keywordCluster: "RAG AI agents · knowledge retrieval agents · vector search",
    image: "/images/services/ai-agents/rag-knowledge-agents-card.jpg",
    imageAlt: "Engineers inspecting enterprise vector database and knowledge-based RAG agent pipeline on studio display",
    icon: Database,
    deliverables: [
      "Hybrid vector & keyword semantic search pipelines",
      "Real-time document ingestion & chunking algorithms",
      "Verifiable source attribution & inline reference links",
      "Document-level permissions & access boundary enforcement",
      "Automated hallucination scoring & factuality guardrails",
    ],
  },
  {
    id: "multi-agent-systems",
    number: "05",
    badge: "SWARM ORCHESTRATION",
    title: "Multi-Agent Systems",
    tagline: "Coordinated Specialized Agent Teams for Complex Problem Solving",
    description:
      "Design teams of specialized agents for research, analysis, planning, execution, validation, or escalation when a single monolithic agent is not enough to tackle multifaceted workflows.",
    keywordCluster: "multi-agent systems · LangGraph · agent swarms",
    image: "/images/services/ai-agents/multi-agent-systems-card.jpg",
    imageAlt: "Software engineering team reviewing coordinated multi-agent autonomous system orchestration topology",
    icon: Network,
    deliverables: [
      "Role-specialized agent swarms (Planner, Researcher, Executor, Auditor)",
      "Inter-agent messaging protocols & consensus mechanics",
      "Hierarchical supervisory orchestration & state graphs",
      "Self-correcting feedback loops & iterative critique",
      "Execution trace telemetry & token budget controls",
    ],
  },
  {
    id: "internal-copilots",
    number: "06",
    badge: "TEAM AUGMENTATION",
    title: "AI Copilots for Internal Teams",
    tagline: "Empower High-Performing Teams with Contextual Operational Assistance",
    description:
      "Give sales, support, operations, HR, finance, or IT teams an intelligent assistant that can surface internal information, draft responses, and help complete everyday operational work faster.",
    keywordCluster: "internal AI copilots · enterprise employee assistant",
    image: "/images/services/ai-agents/internal-copilots-card.jpg",
    imageAlt: "Enterprise employee utilizing an internal AI copilot on laptop screen to automate administrative workflow",
    icon: Users,
    deliverables: [
      "Department-specific assistance (Sales, HR, Support, IT)",
      "Instant internal policy & operational wiki querying",
      "Drafting summaries, meeting briefs, and email correspondence",
      "Secure integrations with Slack, Teams, and email clients",
      "Role-based access controls protecting sensitive HR/Finance data",
    ],
  },
  {
    id: "voice-ai-agents",
    number: "07",
    badge: "REAL-TIME TELEPHONY",
    title: "Voice AI Agents",
    tagline: "Low-Latency Spoken Dialog for Inbound & Outbound Phone Workflows",
    description:
      "Develop voice-enabled agents for inbound or outbound conversations, appointment workflows, support scenarios, lead qualification, and other use cases where voice is the natural interface.",
    keywordCluster: "voice AI agents · conversational IVR · telephony AI",
    image: "/images/services/ai-agents/voice-ai-agents-card.jpg",
    imageAlt: "Executive conducting sales calls and appointment scheduling assisted by real-time voice AI agent software",
    icon: PhoneCall,
    deliverables: [
      "Ultra-low latency speech-to-speech pipelines (<800ms)",
      "Telephony SIP/Twilio integration for phone calls",
      "Natural turn-taking, interruption handling & cadence",
      "Automated calendar booking & meeting qualification",
      "Post-call structured summary generation & CRM updates",
    ],
  },
  {
    id: "ai-agent-integration",
    number: "08",
    badge: "TOOL & API ORCHESTRATION",
    title: "AI Agent Integration",
    tagline: "Turn Intelligence Into Action by Connecting Your Entire Software Stack",
    description:
      "Connect agents with CRMs, help desks, communication platforms, databases, business applications, APIs, and other tools so intelligence can seamlessly become real action in connected systems.",
    keywordCluster: "AI agent integration · API tool calling · CRM connectors",
    image: "/images/services/ai-agents/agent-integration-card.jpg",
    imageAlt: "Technical data flow diagram showing AI agent integrations with CRM, ERP, databases, and third-party APIs",
    icon: Terminal,
    deliverables: [
      "Connectors for Salesforce, HubSpot, Zendesk, Jira & ERPs",
      "Structured function calling (OpenAI Tools, Anthropic Tool Use)",
      "Secure OAuth2 authentication & credential management",
      "Resilient retry policies, rate limiting & error recovery",
      "Real-time webhook listeners & bidirectional synchronization",
    ],
  },
  {
    id: "agent-testing-evaluation",
    number: "09",
    badge: "EVALUATION & RELIABILITY",
    title: "AI Agent Testing and Evaluation",
    tagline: "Continuous Benchmark Testing & Adversarial Scenario Validation",
    description:
      "Create evaluation criteria, test cases, guardrails, monitoring, and feedback loops to improve reliability before and after production deployment, preventing regressions and edge-case failures.",
    keywordCluster: "AI agent evaluation · agent testing · LLM benchmarks",
    image: "/images/services/ai-agents/agent-testing-evaluation-card.jpg",
    imageAlt: "Quality assurance engineers evaluating AI agent accuracy metrics, test cases, and latency graphs",
    icon: ShieldCheck,
    deliverables: [
      "Golden dataset curation & unit testing for agent reasoning",
      "Adversarial prompt injection & jailbreak testing",
      "Tool call correctness & schema compliance validation",
      "Drift detection & automated regression test suites",
      "Human-in-the-loop scoring matrices & feedback capture",
    ],
  },
  {
    id: "enterprise-agent-deployment",
    number: "10",
    badge: "ENTERPRISE SCALING",
    title: "Enterprise AI Agent Deployment",
    tagline: "Engineered for Privacy, Observability, Cost Control & Resilience",
    description:
      "Design for permissions, privacy, observability, cost control, scalability, and operational resilience so your agents evolve safely and predictably with changing business requirements.",
    keywordCluster: "enterprise AI agent deployment · agent observability · production scaling",
    image: "/images/services/ai-agents/enterprise-deployment-card.jpg",
    imageAlt: "DevOps and cloud infrastructure specialists monitoring production enterprise AI agent telemetry and security controls",
    icon: Server,
    deliverables: [
      "Virtual Private Cloud (VPC) & on-premise deployment options",
      "Granular role-based access control (RBAC) & least privilege",
      "Full execution trace logging (LangSmith, OpenTelemetry)",
      "Token budget management & real-time cost throttling",
      "High-availability clustering & automated failover protocols",
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
    area: "Customer Service",
    badge: "SUPPORT & RESOLUTION",
    icon: MessageSquare,
    workflows:
      "Answer questions, retrieve account information, triage requests, summarize interactions, create tickets, and escalate complex cases.",
    businessOutcome: "Sub-second first response time · 70%+ tier-1 issue resolution without human burden",
  },
  {
    area: "Sales & Business Development",
    badge: "PIPELINE ACCELERATION",
    icon: TrendingUp,
    workflows:
      "Qualify leads, research accounts, personalize follow-ups, update CRM records, schedule next steps, and prepare comprehensive meeting briefs.",
    businessOutcome: "Instant lead qualification · Up-to-date CRM records · 4x faster follow-up cycles",
  },
  {
    area: "Operations & Logistics",
    badge: "PROCESS COORDINATION",
    icon: Workflow,
    workflows:
      "Coordinate repetitive workflows, move information between systems, validate inputs, generate operational summaries, and trigger business actions.",
    businessOutcome: "Zero manual copy-paste friction · Automated cross-system reconciliation",
  },
  {
    area: "Employee Support & HR",
    badge: "INTERNAL EMPOWERMENT",
    icon: Users,
    workflows:
      "Search internal knowledge, answer process and policy questions, guide employees through complex onboarding workflows, and route requests to the right team.",
    businessOutcome: "Immediate answers on policies & benefits · Reduced internal support tickets",
  },
  {
    area: "IT & Service Desk",
    badge: "INCIDENT MANAGEMENT",
    icon: Terminal,
    workflows:
      "Classify issues, retrieve technical documentation, assist troubleshooting, create or update service tickets, and escalate critical incidents.",
    businessOutcome: "Automated ticket triage · Accelerated resolution of recurring technical tickets",
  },
  {
    area: "Finance & Administration",
    badge: "BACK-OFFICE EFFICIENCY",
    icon: Landmark,
    workflows:
      "Extract invoice information, reconcile workflow inputs, prepare summaries, route multi-stage approvals, and support routine back-office tasks.",
    businessOutcome: "Auditable approval trails · Accelerated month-end review & reconciliation cycles",
  },
  {
    area: "Healthcare & Regulated Workflows",
    badge: "STRICT COMPLIANCE",
    icon: Stethoscope,
    workflows:
      "Support carefully scoped administrative and information workflows with appropriate access controls, rigorous review processes, and compliance requirements.",
    businessOutcome: "Zero unauthorized data leaks · Strict role-based oversight & auditability",
  },
  {
    area: "Marketing & Content Operations",
    badge: "RESEARCH & EDITORIAL",
    icon: Sparkles,
    workflows:
      "Research industry topics, organize structured information, support content creation pipelines, monitor inputs, and prepare drafts for human review.",
    businessOutcome: "Accelerated market research · Consistent brand compliance in all output drafts",
  },
];

// ============================================================================
// 7 HOW AI AGENTS WORK STEPS
// ============================================================================

const HOW_AGENTS_WORK_STEPS = [
  {
    step: "01",
    title: "Understand the Objective",
    desc: "The agent receives a request, event, or business condition and identifies the precise goal it needs to pursue.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Gather Context",
    desc: "The system retrieves relevant facts from connected knowledge sources, applications, internal databases, or external APIs.",
    icon: Search,
  },
  {
    step: "03",
    title: "Reason and Plan",
    desc: "The agent determines the next best action based on the task, available tools, business rules, and current state.",
    icon: BrainCircuit,
  },
  {
    step: "04",
    title: "Take Action",
    desc: "The agent calls approved external tools or business systems to carry out the selected operational step.",
    icon: Terminal,
  },
  {
    step: "05",
    title: "Check the Outcome",
    desc: "The workflow validates results, handles system errors gracefully, retries safely, or pivots to an alternate path.",
    icon: CheckCircle2,
  },
  {
    step: "06",
    title: "Escalate When Needed",
    desc: "Sensitive, ambiguous, or high-impact tasks are safely routed to a human specialist instead of forcing automation.",
    icon: UserCheck,
  },
  {
    step: "07",
    title: "Learn From Feedback",
    desc: "Evaluation and production trace feedback are continuously used to refine prompts, tools, workflows, and reliability.",
    icon: RefreshCw,
  },
];

// ============================================================================
// 10 CORE CAPABILITIES
// ============================================================================

const CORE_CAPABILITIES = [
  {
    title: "Natural-Language Understanding",
    desc: "Advanced comprehension of nuanced customer and employee intent across conversations and complex queries.",
    icon: MessageSquare,
  },
  {
    title: "Context Management & Memory",
    desc: "Session memory and persistent state tracking where workflows span across multiple interactions.",
    icon: BrainCircuit,
  },
  {
    title: "Retrieval-Augmented Generation",
    desc: "Responses grounded deterministically in approved enterprise knowledge sources rather than model weights.",
    icon: Database,
  },
  {
    title: "Tool Calling & API Orchestration",
    desc: "Standardized function calling to interact directly with CRMs, ERPs, databases, and custom REST APIs.",
    icon: Terminal,
  },
  {
    title: "Workflow Routing & Conditional Logic",
    desc: "Dynamic decision branching and multi-step task execution adhering to your business rules.",
    icon: Workflow,
  },
  {
    title: "Role-Based Access Controls",
    desc: "Permission-aware actions ensuring the agent never exposes or alters unauthorized enterprise assets.",
    icon: Lock,
  },
  {
    title: "Human-in-the-Loop Review",
    desc: "Supervisory checkpoints and confirmation gates for sensitive, financial, or high-consequence tasks.",
    icon: UserCheck,
  },
  {
    title: "Fallbacks & Controlled Retries",
    desc: "Resilient error handling with exponential backoff and alternate execution paths when tools fail.",
    icon: AlertCircle,
  },
  {
    title: "Logging, Tracing & Observability",
    desc: "Complete step-by-step trace auditing, latency tracking, and failure telemetry for production governance.",
    icon: Activity,
  },
  {
    title: "Cost & Performance Controls",
    desc: "Semantic caching, token quotas, and intelligent model routing to guarantee predictable cloud spend.",
    icon: Gauge,
  },
];

// ============================================================================
// CHATBOT VS AI AGENT COMPARISON
// ============================================================================

const COMPARISON_ROWS = [
  {
    capability: "Primary Role",
    chatbot: "Respond to user questions with pre-programmed or conversational answers",
    aiAgent: "Pursue a defined goal and autonomously complete end-to-end tasks",
  },
  {
    capability: "Workflow Depth",
    chatbot: "Usually limited to single-turn or simple dialog branches",
    aiAgent: "Can coordinate multi-step, asynchronous business processes",
  },
  {
    capability: "External Tools",
    chatbot: "Often limited, static, or rule-based FAQ lookups",
    aiAgent: "Can call approved external APIs, query databases, and use software tools",
  },
  {
    capability: "Context & Memory",
    chatbot: "Conversation-focused, ephemeral session memory",
    aiAgent: "Conversation context plus deep business state, entity tracking, and task history",
  },
  {
    capability: "Actions",
    chatbot: "Mostly informational (provides advice, links, or text)",
    aiAgent: "Can execute real actions in connected systems (create tickets, update CRMs, process records)",
  },
  {
    capability: "Escalation",
    chatbot: "Transfers after predefined keyword match or explicit failure",
    aiAgent: "Escalates intelligently based on uncertainty scoring, policy thresholds, or permissions",
  },
  {
    capability: "Best Fit",
    chatbot: "Top-of-funnel FAQs and basic repetitive customer support",
    aiAgent: "Complex, repeatable, high-value multi-step business workflows",
  },
];

// ============================================================================
// 7-STAGE PROCESS
// ============================================================================

const DEVELOPMENT_PROCESS_STAGES = [
  {
    stage: "01",
    name: "Discovery & Use-Case Definition",
    desc: "We identify the workflow, users, systems, constraints, success metrics, and clearly establish the boundaries of what should — and should not — be automated.",
    icon: Compass,
    deliverable: "Workflow Blueprint & Feasibility Assessment",
  },
  {
    stage: "02",
    name: "Architecture & Agent Design",
    desc: "We determine the agent pattern (single vs. multi-agent), orchestration approach, data flow, tool layer, memory strategy, integrations, and human approval points.",
    icon: Code2,
    deliverable: "System Architecture & State-Machine Spec",
  },
  {
    stage: "03",
    name: "Model & Technology Selection",
    desc: "We evaluate model reasoning capabilities, latency, inference costs, data residency, and deployment constraints rather than picking a model simply because it is popular.",
    icon: Cpu,
    deliverable: "Model Selection Matrix & Benchmark Benchmarks",
  },
  {
    stage: "04",
    name: "Data & Knowledge Integration",
    desc: "We connect the agent to approved documents, knowledge sources, APIs, databases, and business systems with least-privilege access controls.",
    icon: Database,
    deliverable: "Secure Data Pipelines & Vector Index Setup",
  },
  {
    stage: "05",
    name: "Development & Workflow Engineering",
    desc: "We build prompts, tool connectors, state graphs, safety guardrails, structured validation logic, error handling, and robust integration endpoints.",
    icon: Workflow,
    deliverable: "Functional Agent Engine & API Endpoints",
  },
  {
    stage: "06",
    name: "Testing & Evaluation",
    desc: "We test expected, ambiguous, adversarial, and failure scenarios using measurable evaluation criteria and synthetic datasets before touching live systems.",
    icon: ShieldCheck,
    deliverable: "Comprehensive Evaluation & Safety Report",
  },
  {
    stage: "07",
    name: "Deployment & Continuous Improvement",
    desc: "We deploy with observability telemetry, then refine the agent using real user feedback, performance trace data, and evolving business requirements.",
    icon: Rocket,
    deliverable: "Production Deployment, Runbooks & Telemetry",
  },
];

// ============================================================================
// 7 SECURITY & GOVERNANCE PILLARS
// ============================================================================

const SECURITY_PILLARS = [
  {
    title: "Least-Privilege Access to Data & Tools",
    desc: "Agents receive only the specific read and write permissions strictly necessary for their assigned task scope.",
    icon: Lock,
  },
  {
    title: "Authentication & Authorization",
    desc: "Cryptographically secured OAuth2 tokens, API secrets isolation, and system-level authentication across all connectors.",
    icon: Shield,
  },
  {
    title: "Protected Handling of Sensitive Information",
    desc: "Automatic redaction and tokenization of customer PII, financial details, and confidential credentials before model processing.",
    icon: ShieldCheck,
  },
  {
    title: "Human Approval for High-Impact Actions",
    desc: "Pre-execution human confirmation gates for sensitive operations, fund transfers, contract changes, or mass communications.",
    icon: UserCheck,
  },
  {
    title: "Audit Trails, Logs & Traceability",
    desc: "Immutable logs tracking every model prompt, tool call input/output, reasoning step, and timestamp for regulatory audits.",
    icon: FileCheck,
  },
  {
    title: "Deterministic Fallback Paths",
    desc: "Pre-engineered fallback routines and controlled error states when external APIs time out or model confidence drops.",
    icon: AlertCircle,
  },
  {
    title: "Evaluation & Drift Monitoring",
    desc: "Continuous telemetry tracking model latency, token spend, drift in reasoning behavior, and unexpected edge-case anomalies.",
    icon: Activity,
  },
];

// ============================================================================
// 9 FAQS FROM USER SPECIFICATION
// ============================================================================

const FAQS = [
  {
    question: "What is AI agent development?",
    answer:
      "AI agent development is the design and engineering of AI-powered software that can pursue defined goals by using models, data, tools, memory, and workflow logic. It includes architecture, development, integration, testing, deployment, monitoring, and ongoing improvement across real-world business systems.",
  },
  {
    question: "What is the difference between AI agents and chatbots?",
    answer:
      "A chatbot primarily focuses on responding to conversations. An AI agent can be designed to plan and execute multi-step tasks, use external tools, work with business data, and trigger actions within connected systems, with clear criteria for verification and human escalation.",
  },
  {
    question: "Can you build an AI agent for our existing software and CRM?",
    answer:
      "Yes. Agents can be integrated with existing applications through APIs, webhooks, databases, and approved connectors (including Salesforce, HubSpot, Zendesk, Jira, and custom software), subject to the capabilities and access controls of the systems involved.",
  },
  {
    question: "Can an AI agent use our internal documents and knowledge base?",
    answer:
      "Yes. A retrieval-augmented generation (RAG) approach allows the agent to retrieve relevant content from approved internal sources (Notion, Google Drive, PDFs, Confluence, internal databases) and use that verified context to produce grounded responses or complete workflows.",
  },
  {
    question: "Should we build a single AI agent or a multi-agent system?",
    answer:
      "It depends on the workflow. Focused tasks with a clear linear path are usually best served by a single agent with tightly defined tools. Complex workflows with distinct responsibilities (such as simultaneous research, drafting, validation, and auditing) benefit significantly from multiple specialized agents working collaboratively.",
  },
  {
    question: "How do you make AI agents reliable?",
    answer:
      "Reliability comes from the full system: good data, constrained tool access, clear workflow design, automated evaluation suites, observability logging, deterministic error handling, fallback paths, and human review where appropriate.",
  },
  {
    question: "How long does AI agent development take?",
    answer:
      "The timeline depends on scope, integrations, data readiness, security requirements, and testing needs. A focused proof of concept (PoC) typically takes 3 to 5 weeks, while an enterprise production deployment with multiple integrations and strict governance takes 8 to 12 weeks.",
  },
  {
    question: "Can AI agents replace employees?",
    answer:
      "AI agents are better positioned as workflow and decision-support systems that automate suitable repetitive tasks and help people work faster. The right level of autonomy depends on business risk, accuracy requirements, and governance needs, with human oversight remaining central to high-impact decisions.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start by identifying one high-value workflow, the systems involved, the data required, the decisions the agent must make, and the measurable outcome you want to improve. A focused discovery workshop with our team turns that opportunity into a clear architecture and implementation plan.",
  },
];

// ============================================================================
// MAIN AI AGENT DEVELOPMENT VIEW
// ============================================================================

export default function AiAgentDevelopment() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "AI Agent Development Services",
    description:
      "Build custom AI agents that understand context, connect to business data, and execute real workflows. Production AI agent development services by Nexovio.",
    url: "/services/ai-agent-development",
    serviceType: "AI Agent Development Services",
    image: "/images/services/ai-agents/ai-agent-hero-orchestration.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Agent Development", url: "/services/ai-agent-development" },
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
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-tr from-blue-600/10 via-cyan-400/15 to-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { name: "Services", url: "/services" },
                  { name: "AI Agent Development", url: "/services/ai-agent-development" },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Hero Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <AnimateOnScroll variant="fadeUp">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#1769FF]/30 bg-[#1769FF]/[0.08] text-[#1769FF] dark:text-cyan-400 shadow-xs">
                    <Bot className="w-3.5 h-3.5 animate-pulse" />
                    <span>Autonomous Workflows &amp; Intelligent Agents</span>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                    AI Agent Development Services for{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Smarter, Scalable Business Automation
                    </span>
                  </h1>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.2}>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Build AI agents that understand context, use your business data, connect with the systems you already rely on, and take action across real workflows. Our AI agent development services help businesses move beyond basic chatbots and create intelligent software that can reason through multi-step tasks, automate repetitive work, and support faster decisions.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.25}>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    From customer service and sales to operations, knowledge management, and internal automation, we design custom AI agents around your processes, data, goals, and security requirements.
                  </p>
                </AnimateOnScroll>

                {/* Key Capability Badges */}
                <AnimateOnScroll variant="fadeUp" delay={0.3}>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      "Goal-Oriented Reasoning",
                      "Autonomous Tool Calling",
                      "Enterprise RAG Grounding",
                      "Multi-Agent Swarms",
                      "Human-in-the-Loop Oversight",
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
                      Build Your AI Agent
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
                    <a href="#chatbot-vs-agent-comparison" className="hover:text-brand-cyan transition-colors underline-offset-4 hover:underline">
                      Agent vs Chatbot
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
                        src="/images/services/ai-agents/ai-agent-hero-orchestration.jpg"
                        alt="Enterprise software engineers and AI architects analyzing autonomous AI agent orchestration workflows and real-time execution telemetry on curved displays"
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
        {/* 2. MAKE AI DO MORE THAN ANSWER QUESTIONS (STICKY VALUE PROP)         */}
        {/* =================================================================== */}
        <section id="action-over-answers" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Side Graphic Banner (Sticky on Top during Scroll) */}
              <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
                <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                  <div className="relative overflow-hidden rounded-xl h-[360px] sm:h-[440px] lg:h-[500px] w-full">
                    <Image
                      src="/images/services/ai-agents/workflow-automation-card.jpg"
                      alt="Enterprise operations team orchestrating multi-step autonomous AI agent workflow automation pipeline across connected business software"
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
                    ACTION OVER ANSWERS
                  </span>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Make AI Do More Than{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Answer Questions
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <div className="space-y-4 text-base text-muted leading-relaxed">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      A chatbot can respond to a prompt. A well-designed AI agent can help complete a workflow. It can interpret a request, retrieve the right information, choose an appropriate tool, perform an action, check the result, and escalate to a person when the situation requires human judgment.
                    </p>
                    <p>
                      That difference matters when AI needs to work inside a real business environment. Instead of creating another isolated interface, we build agents that connect intelligence with action — while keeping people, permissions, data quality, and operational control at the center.
                    </p>
                  </div>
                </AnimateOnScroll>

                {/* 6 Value Pillars with Left Border Slide-Down Hover */}
                <div className="space-y-3 pt-2">
                  {[
                    {
                      title: "Goal-Driven Autonomous Execution",
                      description: "Interprets business objectives, decomposes multi-step tasks, and plans the sequence of actions needed to achieve them.",
                    },
                    {
                      title: "Grounded in Approved Business Data",
                      description: "Connects to trusted enterprise knowledge bases, databases, and APIs rather than relying on ungrounded model memory.",
                    },
                    {
                      title: "Dynamic Tool Calling & API Action",
                      description: "Interacts directly with CRMs, ERPs, databases, and custom business software to move information and execute work.",
                    },
                    {
                      title: "Closed-Loop Outcome Verification",
                      description: "Validates execution results at every step, handles error states gracefully, and retries safely before proceeding.",
                    },
                    {
                      title: "Contextual Escalation & Human Review",
                      description: "Identifies ambiguous, high-risk, or permission-restricted scenarios and immediately routes them to human specialists.",
                    },
                    {
                      title: "Continuous Observability & Audit Logging",
                      description: "Every reasoning step, tool call payload, and output is logged with full traceability to maintain regulatory compliance.",
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
                      OPERATIONAL REALITY: CONNECTING INTELLIGENCE WITH ACTION
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">
                      We prioritize reliable business outcomes over generic demos: robust error handling, auditable tool execution, strict permissions, and deterministic guardrails so your team retains complete control.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 3. WHAT IS AI AGENT DEVELOPMENT? (ARCHITECTURE & DEEP DIVE)          */}
        {/* =================================================================== */}
        <section id="what-is-ai-agent-development" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
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
                    What Is{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      AI Agent Development?
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <div className="space-y-4 text-base text-muted leading-relaxed">
                    <p>
                      AI agent development is the process of designing, building, testing, deploying, and improving AI-powered software that can pursue a defined goal through a combination of models, tools, data, memory, and workflow logic. Unlike a simple conversational interface, an AI agent can be designed to perform multiple steps and interact with external systems to complete a task.
                    </p>
                    <p>
                      The right architecture depends on the problem. Some use cases are best handled by a focused single agent. More complex workflows may benefit from multiple specialized agents working together. In both cases, production success depends on more than model selection: integrations, evaluation, observability, security, fallback behavior, and human oversight must be designed into the solution from the start.
                    </p>
                  </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071328] space-y-2">
                    <div className="flex items-center gap-2 text-brand-cyan">
                      <Bot className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase">Focused Single Agents</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Ideal for tightly bounded tasks: lead routing, data transformation, tier-1 customer inquiries, or policy retrieval with deterministic verification.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071328] space-y-2">
                    <div className="flex items-center gap-2 text-brand-bright">
                      <Network className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase">Specialized Multi-Agent Swarms</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Engineered for multifaceted processes: coordinated teams where agents independently plan, research, execute code, critique outputs, and audit compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <AnimateOnScroll variant="fadeLeft">
                  <div className="p-6 sm:p-7 rounded-2xl border border-brand-cyan/30 bg-slate-50 dark:bg-[#071126] shadow-xl space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                      <span className="text-xs font-mono font-bold uppercase text-brand-cyan">
                        CORE ARCHITECTURAL PILLARS
                      </span>
                      <span className="text-[11px] font-mono text-muted">Production Grade</span>
                    </div>

                    <ul className="space-y-3.5">
                      {[
                        { title: "Foundation Reasoning Layer", desc: "Frontier LLM or private fine-tuned model for context and intent" },
                        { title: "Memory & State Store", desc: "Short-term working memory + persistent vector embeddings" },
                        { title: "Tool Execution Gateway", desc: "Sandboxed API connectors with schema-validated input/output" },
                        { title: "Evaluation & Guardrails", desc: "Deterministic safety checks, hallucination filters, and PII masking" },
                        { title: "Human Supervisory Gateway", desc: "Approval queues for uncertain or sensitive business operations" },
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
                        <span>Architect your custom agent infrastructure</span>
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
        {/* 4. OUR AI AGENT DEVELOPMENT SERVICES (10 SERVICE CARDS)             */}
        {/* =================================================================== */}
        <section id="services" className="bg-white dark:bg-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="OUR SERVICES"
                title="Comprehensive AI Agent"
                highlightText="Development Services"
                description="Explore our complete suite of AI agent engineering capabilities, designed to solve real business challenges with verifiable reliability, system integration, and enterprise governance."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {AGENT_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <AnimateOnScroll key={srv.id} variant="fadeUp" delay={(idx % 3) * 0.08}>
                    <Card className="relative overflow-hidden group flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.16)] hover:-translate-y-2 transition-all duration-400 rounded-2xl">
                      {/* Top Border Animate Left to Right on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />

                      <div className="space-y-4">
                        {/* Section Matched Visual Mockup */}
                        <RealisticAgentCardImage
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

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-muted">
                        <span className="text-slate-500 dark:text-slate-400 truncate max-w-[210px]">
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
        {/* 5. AI AGENTS BUILT AROUND REAL BUSINESS USE CASES (8 BUSINESS AREAS) */}
        {/* =================================================================== */}
        <section id="business-use-cases" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="PRACTICAL APPLICATIONS"
                title="AI Agents Built Around"
                highlightText="Real Business Use Cases"
                description="The strongest AI agent projects start with a clear operational problem. Explore high-impact workflows automated by custom agents across functional business units."
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
        {/* 6. HOW AI AGENTS WORK (7-STEP EXECUTION CYCLE)                       */}
        {/* =================================================================== */}
        <section id="how-it-works" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="EXECUTION CYCLE"
                title="How AI Agents"
                highlightText="Work in Production"
                description="From receiving an objective to tool calling, validation, escalation, and learning — here is the closed-loop cycle powering reliable autonomous software."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {HOW_AGENTS_WORK_STEPS.map((step, idx) => {
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
        {/* 7. CORE CAPABILITIES WE BUILD INTO AI AGENTS (10 CAPABILITIES)       */}
        {/* =================================================================== */}
        <section id="capabilities" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="ENGINEERING EXCELLENCE"
                title="Core Capabilities We Build"
                highlightText="Into Every AI Agent"
                description="Production agents require more than raw intelligence: they require robust state management, deterministic validation, security boundaries, and telemetry controls."
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
        {/* 8. AI AGENT VS. CHATBOT COMPARISON TABLE                             */}
        {/* =================================================================== */}
        <section id="chatbot-vs-agent-comparison" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="ARCHITECTURAL COMPARISON"
                title="AI Agent vs. Traditional Chatbot:"
                highlightText="What Is the Difference?"
                description="Understanding the distinction between informational conversational bots and autonomous, action-oriented workflow agents."
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
                          Traditional Chatbot
                        </th>
                        <th scope="col" className="py-4 px-6 font-bold text-brand-cyan text-xs uppercase tracking-wider font-mono w-2/5 bg-brand-cyan/5">
                          Autonomous AI Agent (Nexovio)
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
                            {row.chatbot}
                          </td>
                          <td className="py-4 px-6 text-xs font-semibold text-slate-900 dark:text-white leading-relaxed bg-brand-cyan/[0.03]">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                              <span>{row.aiAgent}</span>
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
        {/* 9. OUR AI AGENT DEVELOPMENT PROCESS (7 STAGES)                       */}
        {/* =================================================================== */}
        <section id="development-process" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="DELIVERY METHODOLOGY"
                title="Our Structured 7-Stage AI Agent"
                highlightText="Development Process"
                description="We take a de-risked, outcome-focused engineering approach from initial workflow discovery to continuous production optimization."
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
        {/* 10. TECHNOLOGY FOUNDATION & SECURITY GOVERNANCE                     */}
        {/* =================================================================== */}
        <section id="technology-and-security" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            {/* Tech Foundation Header */}
            <div>
              <AnimateOnScroll variant="fadeUp">
                <SectionHeading
                  badge="TECH STACK"
                  title="Technology Foundation for"
                  highlightText="Production-Ready AI Agents"
                  description="The technology stack should follow the use case rather than the other way around. We engineer resilient architectures with proven enterprise tools."
                  align="center"
                />
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {[
                  {
                    title: "Foundation Models & LLM APIs",
                    desc: "State-of-the-art reasoning via OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini, or self-hosted Llama 3.",
                    icon: Cpu,
                  },
                  {
                    title: "Agent Orchestration Frameworks",
                    desc: "Deterministic state machines and workflow routing using LangGraph, Semantic Kernel, and custom event graphs.",
                    icon: Workflow,
                  },
                  {
                    title: "RAG & Vector Pipelines",
                    desc: "Sub-300ms semantic search with Pinecone, Qdrant, pgvector, and hybrid lexical-vector rankers.",
                    icon: Database,
                  },
                  {
                    title: "APIs & Tool Connectors",
                    desc: "Resilient connectors for CRM, ERP, ticketing systems, internal databases, and external third-party APIs.",
                    icon: Terminal,
                  },
                  {
                    title: "Cloud Infrastructure",
                    desc: "High-availability AWS, Azure, GCP or private VPC hosting with auto-scaling, containerization, and strict encryption.",
                    icon: Server,
                  },
                  {
                    title: "Application Databases",
                    desc: "PostgreSQL, MongoDB, and Redis caching layers maintaining transactional context and session persistence.",
                    icon: Layers,
                  },
                  {
                    title: "Monitoring & Observability",
                    desc: "Real-time telemetry with OpenTelemetry, LangSmith, and Datadog for latency, token spend, and drift auditing.",
                    icon: Activity,
                  },
                  {
                    title: "Security & Secret Vaults",
                    desc: "Zero-trust credential storage using AWS Secrets Manager and HashiCorp Vault with scoped permissions.",
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
                          src="/images/services/ai-agents/enterprise-deployment-card.jpg"
                          alt="Enterprise AI compliance specialist and security engineer inspecting access controls and audit trails on mission control monitors"
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
                      Security, Governance, and Reliability{" "}
                      <span className="bg-gradient-brand bg-clip-text text-transparent">
                        Matter From Day One
                      </span>
                    </h2>
                  </AnimateOnScroll>

                  <AnimateOnScroll variant="fadeUp" delay={0.15}>
                    <p className="text-base text-muted leading-relaxed">
                      A prototype can look impressive while still being unsuitable for production. Enterprise AI agents need controls around what they can access, what they can change, how their actions are logged, and when they must stop or involve a human. We design these controls as part of the architecture rather than adding them after deployment.
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

            {/* Why Custom AI Agent Approach */}
            <div className="pt-10 border-t border-slate-200 dark:border-white/10">
              <div className="p-8 sm:p-10 rounded-3xl border border-brand-cyan/30 bg-gradient-to-br from-white via-slate-50 to-blue-50/20 dark:from-[#071024] dark:via-[#050B1B] dark:to-[#040814] shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block">
                    STRATEGIC ADVANTAGE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Why Choose a Custom AI Agent Approach?
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed mt-2 max-w-4xl">
                    Off-the-shelf assistants can be useful for general tasks, but business workflows often depend on proprietary data, internal rules, multiple systems, and exceptions that generic tools do not understand. Custom AI agent development gives you control over the workflow, integrations, data boundaries, permissions, and user experience.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    "Built around your actual business process instead of a generic demo.",
                    "Connected to the systems your teams already rely on every day.",
                    "Designed for measurable outcomes and defined success criteria.",
                    "Flexible enough to start with one workflow and expand over time.",
                    "Prepared for production concerns such as security, monitoring, and fallback handling.",
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
                      Practical Starting Point
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-0.5">
                      Choose one repetitive, high-volume, data-dependent workflow where the steps are understood, the inputs are accessible, and the outcome can be measured.
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    href="/contact"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="shrink-0 whitespace-nowrap font-bold"
                  >
                    Start With Your First Workflow
                  </Button>
                </div>
              </div>
            </div>

            {/* Related Services Internal Links Bar */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <span className="text-muted font-mono font-semibold">Explore Related Capabilities:</span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
                <Link href="/services/ai-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                  AI Development &amp; Automation &rarr;
                </Link>
                <Link href="/services/generative-ai-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                  Generative AI Engineering &rarr;
                </Link>
                <Link href="/services/web-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                  Custom Web Development &rarr;
                </Link>
                <Link href="/services/ui-ux-design" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                  UI/UX Design Systems &rarr;
                </Link>
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
            badge="KNOWLEDGE & FAQS"
            title="Frequently Asked"
            highlightText="Questions"
            description="Clear, technically grounded answers regarding enterprise AI agent development, workflow integrations, safety, and business ROI."
          />
        </section>
      </main>
    </>
  );
}
