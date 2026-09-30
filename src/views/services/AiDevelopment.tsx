"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  BrainCircuit,
  Cpu,
  Sparkles,
  Zap,
  Check,
  CheckCircle2,
  ArrowRight,
  Search,
  MessageSquare,
  Database,
  Workflow,
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
  Home,
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
  ShieldAlert,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  getOrganizationSchema,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/src/lib/schema";

// ============================================================================
// DATA STRUCTURES & CONTENT
// ============================================================================

interface BusinessProblem {
  id: string;
  problemTitle: string;
  problemDescription: string;
  solutionName: string;
  solutionSubtitle: string;
  solutionDescription: string;
  keyExamples: string[];
  icon: React.ElementType;
  badge: string;
}

const BUSINESS_PROBLEMS: BusinessProblem[] = [
  {
    id: "manual-work",
    problemTitle: "Too Much Repetitive Manual Work",
    problemDescription:
      "Teams often spend valuable hours copying information, answering repetitive inquiries, processing forms, categorizing requests, updating multiple platforms, and executing mundane operational tasks that drain cognitive energy.",
    solutionName: "AI Workflow Automation",
    solutionSubtitle: "Streamline Information-Heavy Tasks",
    solutionDescription:
      "We build AI-powered workflows that automate suitable repetitive tasks while keeping human review and approval checkpoints wherever judgment is essential.",
    keyExamples: [
      "Document processing & parsing",
      "Automated data extraction & OCR",
      "Intelligent email classification",
      "Dynamic request routing",
      "Automated content workflows",
      "Inbound lead qualification",
      "Customer support triage",
      "Internal knowledge retrieval",
      "CRM & ERP automated syncing",
      "Approval-based AI workflows",
    ],
    icon: Workflow,
    badge: "WORKFLOW EFFICIENCY",
  },
  {
    id: "instant-answers",
    problemTitle: "Customers Have Questions, But Your Team Cannot Answer Instantly",
    problemDescription:
      "Modern buyers and clients expect immediate answers 24/7. Meanwhile, your support and sales teams face hundreds of inquiries across web, mobile, WhatsApp, and email—leading to delayed response times and burnout.",
    solutionName: "AI Chatbots & Conversational AI",
    solutionSubtitle: "24/7 Context-Aware Customer Guidance",
    solutionDescription:
      "We create conversational AI experiences for websites, customer portals, apps, and internal desks that follow strict business rules and gracefully escalate to human agents when needed.",
    keyExamples: [
      "24/7 customer FAQ resolution",
      "Product specification & inventory guidance",
      "Pre-sales lead qualification",
      "Automated appointment & booking flows",
      "Tier-1 support ticket resolution",
      "Internal employee helpdesk",
      "Order status & shipment tracking",
      "Step-by-step guided troubleshooting",
      "Seamless human escalation handoff",
    ],
    icon: MessageSquare,
    badge: "CUSTOMER SUPPORT",
  },
  {
    id: "scattered-knowledge",
    problemTitle: "Your Business Knowledge Is Scattered Across Documents & Systems",
    problemDescription:
      "Critical knowledge lives trapped across PDFs, technical manuals, internal wikis, Google Drive, CRM notes, SOPs, and scattered databases. Finding one verified answer takes minutes—or hours of digging.",
    solutionName: "AI Search & Retrieval-Augmented Generation (RAG)",
    solutionSubtitle: "Ground Language Models in Your Proprietary Data",
    solutionDescription:
      "We build high-performance vector search and RAG pipelines that connect secure language models directly to your approved business data sources, eliminating hallucinations with exact citations.",
    keyExamples: [
      "Internal employee knowledge assistants",
      "Comprehensive product catalog search",
      "Policy, SOP & legal procedure search",
      "Multi-document Q&A synthesis",
      "Technical API & engineering documentation",
      "Customer self-service knowledge portals",
      "Executive research & brief generation",
      "Enterprise information retrieval (hybrid search)",
    ],
    icon: Search,
    badge: "RAG & VECTOR SEARCH",
  },
  {
    id: "disconnected-tools",
    problemTitle: "Your Team Uses Multiple Tools That Do Not Work Well Together",
    problemDescription:
      "AI is ineffective as an isolated island. If your AI cannot read from your CRM, update your ERP, query your database, trigger a webhook, or alert your Slack/Teams channels, its real-world utility remains bottlenecked.",
    solutionName: "AI API & Model Integration",
    solutionSubtitle: "Embed Intelligence Directly Into Your Existing Stack",
    solutionDescription:
      "We integrate state-of-the-art foundation models and private custom models directly into your existing software architecture, mobile apps, databases, and operational toolchains.",
    keyExamples: [
      "HubSpot, Salesforce & custom CRM integration",
      "ERP platforms (SAP, NetSuite, Odoo)",
      "Existing websites & mobile applications",
      "PostgreSQL, MongoDB & vector databases",
      "Zendesk, Freshdesk & Intercom helpdesks",
      "Internal REST & GraphQL APIs",
      "Slack, MS Teams & WhatsApp business bots",
      "Document management & cloud storage hooks",
    ],
    icon: Database,
    badge: "SYSTEM INTEGRATION",
  },
  {
    id: "unclear-starting-point",
    problemTitle: "Your Business Has AI Ideas but Does Not Know Where to Start",
    problemDescription:
      "Many leadership teams want to capitalize on AI but wonder: Should we build a chatbot? An autonomous agent? A document extraction pipeline? A predictive model? Starting with technology before the problem causes wasted spend.",
    solutionName: "AI Strategy, Discovery & Use-Case Planning",
    solutionSubtitle: "From Amorphous Ideas to High-ROI Roadmaps",
    solutionDescription:
      "We audit your operational friction points, evaluate data readiness, assess feasibility, and craft a prioritized AI engineering roadmap targeting immediate commercial value.",
    keyExamples: [
      "Operational friction & bottleneck audit",
      "Customer journey AI mapping",
      "Data availability & quality validation",
      "Architecture feasibility analysis",
      "Security, privacy & compliance mapping",
      "ROI projection & cost-of-inference modeling",
      "Proof-of-Concept (PoC) roadmap definition",
    ],
    icon: Compass,
    badge: "AI STRATEGY",
  },
  {
    id: "demo-vs-production",
    problemTitle: "AI Prototypes Look Impressive, But Production Is Different",
    problemDescription:
      "A quick demo or script proves a model can answer a prompt. But production demands high concurrency, rate-limit resilience, sub-second latency, security guardrails, token cost control, and continuous monitoring.",
    solutionName: "Production-Ready AI Engineering",
    solutionSubtitle: "Enterprise Reliability, Observability & Scale",
    solutionDescription:
      "We engineer robust production systems around AI models—handling edge cases, prompt caching, failovers, schema validation, telemetry, and security from day one.",
    keyExamples: [
      "Enterprise prompt orchestration & fallback chains",
      "Semantic caching & token cost optimization",
      "Automated output validation & JSON schema enforcement",
      "Red-teaming & prompt injection defense",
      "Real-time latency & drift monitoring",
      "CI/CD pipelines for prompt & model updates",
      "Multi-region cloud infrastructure & scaling",
    ],
    icon: Server,
    badge: "PRODUCTION GRADE",
  },
  {
    id: "generic-ai-limitations",
    problemTitle: "Generic Off-the-Shelf AI Does Not Understand Your Business",
    problemDescription:
      "Public chatbots have no awareness of your proprietary formulas, pricing logic, strict industry jargon, complex customer rules, or organizational safety policies. They offer generic answers that fall flat.",
    solutionName: "Custom AI Development",
    solutionSubtitle: "Bespoke Models & Workflows Built for Your Exact Domain",
    solutionDescription:
      "We build tailored AI software designed specifically for your proprietary workflows, terminology, security boundaries, and distinct product experience.",
    keyExamples: [
      "Domain-specific AI copilots & assistants",
      "Proprietary AI-powered SaaS platforms",
      "Custom recommendation algorithms",
      "Tailored machine learning classifiers",
      "Specialized computer vision pipelines",
      "Document intelligence tailored to your formats",
    ],
    icon: Cpu,
    badge: "BESPOKE ENGINEERING",
  },
];

interface AiServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  icon: React.ElementType;
  tag: string;
}

const AI_SERVICES: AiServiceItem[] = [
  {
    id: "custom-ai-software",
    title: "Custom AI Software Development",
    shortDesc:
      "Engineer bespoke AI capabilities purpose-built for the unique way your business operates, communicates, and delivers value.",
    deliverables: [
      "Bespoke application architecture",
      "End-to-end full-stack engineering",
      "Custom business logic & rules",
      "Role-based access & admin dashboards",
    ],
    icon: Code2,
    tag: "Core Engineering",
  },
  {
    id: "generative-ai",
    title: "Generative AI Development",
    shortDesc:
      "Harness state-of-the-art LLMs to process language, summarize complex documents, draft communications, and automate cognitive tasks.",
    deliverables: [
      "Multi-model orchestration (Claude, GPT, Llama)",
      "Document analysis & summarization",
      "Structured data extraction pipelines",
      "Automated drafting & content workflows",
    ],
    icon: Sparkles,
    tag: "LLMs & GenAI",
  },
  {
    id: "ai-agents",
    title: "AI Agent Development",
    shortDesc:
      "Develop autonomous, goal-oriented AI agents capable of reasoning across multi-step workflows, calling APIs, and executing defined tasks.",
    deliverables: [
      "Multi-step task reasoning & planning",
      "API & tool execution integration",
      "Human-in-the-loop approval triggers",
      "Autonomous research & operational agents",
    ],
    icon: Bot,
    tag: "Autonomous Agents",
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbot Development",
    shortDesc:
      "Deploy intelligent conversational interfaces across websites, web portals, messaging apps, and internal Slack/Teams channels.",
    deliverables: [
      "Context-aware customer assistants",
      "Lead capture & qualification dialogues",
      "CRM & calendar booking integration",
      "Frictionless human live-agent handoff",
    ],
    icon: MessageSquare,
    tag: "Conversational AI",
  },
  {
    id: "ai-search-rag",
    title: "AI Search & RAG Development",
    shortDesc:
      "Ground language models directly in your internal knowledge base with vector embeddings, semantic retrieval, and verified citations.",
    deliverables: [
      "Vector database setup (Pinecone, Qdrant, pgvector)",
      "Automated chunking & embedding pipelines",
      "Hybrid keyword + semantic reranking",
      "Strict citation & anti-hallucination guardrails",
    ],
    icon: Search,
    tag: "RAG & Vector Search",
  },
  {
    id: "ai-automation",
    title: "AI Automation Solutions",
    shortDesc:
      "Eliminate repetitive manual bottlenecks with intelligent workflow automations connecting emails, forms, documents, and business platforms.",
    deliverables: [
      "Intelligent document classification",
      "Automated invoice & receipt parsing",
      "Cross-platform data synchronization",
      "Exception handling & alert pipelines",
    ],
    icon: Zap,
    tag: "Workflow Automation",
  },
  {
    id: "ai-web-app",
    title: "AI Web & App Development",
    shortDesc:
      "Build AI-powered websites, SaaS products, and mobile applications where machine intelligence is an intuitive, native feature.",
    deliverables: [
      "AI-native Next.js & React platforms",
      "Cross-platform iOS/Android mobile apps",
      "Real-time streaming UI responses",
      "Frictionless user experience & interface design",
    ],
    icon: Layers,
    tag: "Product Development",
  },
  {
    id: "recommendation-systems",
    title: "AI Recommendation Systems",
    shortDesc:
      "Drive engagement, sales conversions, and customer retention with personalized product, content, and next-best-action engines.",
    deliverables: [
      "Collaborative & content-based filtering",
      "Real-time contextual personalization",
      "E-commerce product discovery matching",
      "Conversion tracking & algorithm tuning",
    ],
    icon: BarChart3,
    tag: "Personalization",
  },
  {
    id: "machine-learning-predictive",
    title: "Machine Learning & Predictive Analytics",
    shortDesc:
      "Uncover hidden patterns in your historical business data to forecast demand, classify risks, and empower data-driven decisions.",
    deliverables: [
      "Demand & sales forecasting models",
      "Customer churn prediction & segmentation",
      "Risk analysis & lead scoring algorithms",
      "Anomaly detection & fraud mitigation",
    ],
    icon: Activity,
    tag: "Predictive Analytics",
  },
  {
    id: "nlp",
    title: "Natural Language Processing (NLP)",
    shortDesc:
      "Extract structured meaning, sentiment, entities, and intent from high-volume customer communications and unstructured text.",
    deliverables: [
      "Named Entity Recognition (NER)",
      "Sentiment & intent classification",
      "Multi-lingual translation & localization",
      "Semantic clustering & text analysis",
    ],
    icon: FileText,
    tag: "NLP & Linguistics",
  },
  {
    id: "computer-vision",
    title: "Computer Vision Solutions",
    shortDesc:
      "Apply deep learning vision algorithms to inspect physical assets, process photographic documents, and analyze visual data.",
    deliverables: [
      "Automated visual defect inspection",
      "Complex document & ID OCR extraction",
      "Object detection & categorization",
      "Image similarity & visual search",
    ],
    icon: Eye,
    tag: "Computer Vision",
  },
  {
    id: "ai-api-integration",
    title: "AI API & Model Integration",
    shortDesc:
      "Integrate best-in-class third-party APIs or self-hosted open-source models securely into your existing software infrastructure.",
    deliverables: [
      "OpenAI, Anthropic & Google Vertex connectors",
      "Self-hosted HuggingFace & Llama deployment",
      "API rate-limiting & token usage budgeting",
      "Encrypted credential & key management",
    ],
    icon: Database,
    tag: "API Integration",
  },
];

interface IndustrySolution {
  name: string;
  icon: React.ElementType;
  challenges: string[];
  opportunities: string[];
}

const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    name: "SaaS & Technology",
    icon: Rocket,
    challenges: [
      "High volume of tier-1 support tickets",
      "Complex technical product documentation",
      "User onboarding drop-offs and churn",
      "Manual data ingestion and reporting",
    ],
    opportunities: [
      "AI in-app copilots & guided onboarding",
      "RAG-powered technical documentation search",
      "Automated ticket resolution & triage",
      "Predictive customer churn mitigation",
    ],
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    challenges: [
      "Heavy clinical administrative documentation",
      "Fragmented patient communication channels",
      "Time-consuming medical record retrieval",
      "Strict compliance & HIPAA privacy demands",
    ],
    opportunities: [
      "HIPAA-compliant document parsing & summarization",
      "Automated appointment scheduling assistants",
      "Internal clinical knowledge retrieval",
      "Patient intake & triaged questionnaire routing",
    ],
  },
  {
    name: "Financial Services & Fintech",
    icon: Landmark,
    challenges: [
      "High-volume transaction & loan processing",
      "Intense regulatory compliance & KYC audits",
      "Fraud and suspicious activity detection",
      "Repetitive customer account inquiries",
    ],
    opportunities: [
      "Automated KYC document & identity verification",
      "Real-time transaction anomaly & fraud detection",
      "Predictive credit scoring & risk models",
      "Compliance audit document summarization",
    ],
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    challenges: [
      "Product discovery friction leading to cart drop",
      "High pre-purchase inquiry load during peak hours",
      "Generic non-personalized product suggestions",
      "Customer review and feedback analysis at scale",
    ],
    opportunities: [
      "Personalized recommendation & cross-sell engines",
      "Conversational shopping & styling assistants",
      "Automated return and shipping status bots",
      "Sentiment analysis across catalog reviews",
    ],
  },
  {
    name: "Manufacturing",
    icon: Factory,
    challenges: [
      "Unplanned equipment downtime and maintenance costs",
      "Quality assurance and manual visual defect slips",
      "Large volumes of technical machinery manuals",
      "Complex supply chain inventory forecasting",
    ],
    opportunities: [
      "Predictive maintenance IoT anomaly detection",
      "Computer vision for automated visual QA",
      "Shop-floor machinery troubleshooting RAG assistants",
      "Material demand & supply chain forecasting",
    ],
  },
  {
    name: "Logistics & Transportation",
    icon: Truck,
    challenges: [
      "Dynamic route disruptions and fuel costs",
      "Document-heavy customs bills and waybills",
      "Frequent customer delivery status requests",
      "Manual freight quote and load matching",
    ],
    opportunities: [
      "Automated bill-of-lading (BOL) parsing",
      "Predictive ETA & delay notifications",
      "Conversational tracking & dispatcher assistants",
      "Intelligent freight rate estimation",
    ],
  },
  {
    name: "Real Estate",
    icon: Home,
    challenges: [
      "Large, multi-property inventory discovery",
      "Sifting serious buyers from casual inquiries",
      "Lengthy legal contracts and lease agreements",
      "Manual follow-ups with stale lead lists",
    ],
    opportunities: [
      "Conversational property search & matching",
      "24/7 automated lead qualification & tour booking",
      "Lease & title document summarization",
      "Hyper-personalized property recommendation feeds",
    ],
  },
  {
    name: "Education & EdTech",
    icon: GraduationCap,
    challenges: [
      "Heavy student inquiry volume during admissions",
      "One-size-fits-all learning pacing",
      "Grading and administrative feedback overhead",
      "Scattered course materials and syllabus docs",
    ],
    opportunities: [
      "24/7 student tutoring & study assistants",
      "Personalized course content & pacing adaptation",
      "Admissions FAQ & application guidance bots",
      "Automated quiz generation & feedback synthesis",
    ],
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    challenges: [
      "Research-intensive case and document prep",
      "Repetitive proposal and pitch deck drafting",
      "Scattered past project knowledge and templates",
      "Time tracking and manual operational reporting",
    ],
    opportunities: [
      "Legal & consulting case research assistants",
      "Automated proposal drafting & RFP response systems",
      "Internal project archive semantic search",
      "Executive summary & client brief generators",
    ],
  },
  {
    name: "Startups & Emerging Businesses",
    icon: Rocket,
    challenges: [
      "Need to build AI features rapidly without large ML teams",
      "High cost of full-time specialized AI researchers",
      "Validating AI product-market fit before heavy spend",
      "Managing LLM token costs and infrastructure scale",
    ],
    opportunities: [
      "Rapid AI MVP prototyping & proof-of-concept",
      "AI-native SaaS platform architecture",
      "Autonomous agent workflows for lean operations",
      "Cost-optimized hybrid open-source deployments",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    headline: "Understand the Business Problem First",
    desc: "We analyze your operations, users, data availability, existing software, and constraints. We ask: Where can AI make this process meaningfully faster, more accurate, or profitable?",
    deliverable: "Opportunity Audit & Feasibility Matrix",
  },
  {
    step: "02",
    name: "Define",
    headline: "Architect the Practical Scope",
    desc: "We define precise use cases, data sources, user journeys, privacy requirements, integration points, and concrete success metrics.",
    deliverable: "AI Architecture & Functional Blueprint",
  },
  {
    step: "03",
    name: "Design",
    headline: "Human-Centered System & UX Design",
    desc: "We design how users interact with the AI, when the system acts autonomously, what prompts it receives, and exactly when human review is triggered.",
    deliverable: "UX Wireframes & Prompt Framework",
  },
  {
    step: "04",
    name: "Prototype & Validate",
    headline: "Prove Concept on Real Business Data",
    desc: "Before full-scale buildout, we validate retrieval accuracy, model reasoning, and latency on representative real-world samples to derisk investment.",
    deliverable: "Interactive Proof-of-Concept (PoC)",
  },
  {
    step: "05",
    name: "Develop",
    headline: "Production Full-Stack Engineering",
    desc: "We build secure vector databases, model connections, orchestration logic, application frontends, and automated backend integration pipelines.",
    deliverable: "Enterprise-Grade Production Software",
  },
  {
    step: "06",
    name: "Test",
    headline: "Red-Teaming, Guardrails & Benchmarking",
    desc: "We stress-test the system against edge cases, hallucinations, latency limits, prompt injections, and malformed inputs to ensure bulletproof reliability.",
    deliverable: "Verification Benchmark & Security Audit",
  },
  {
    step: "07",
    name: "Deploy",
    headline: "Zero-Downtime Production Rollout",
    desc: "We deploy the application into your cloud or secure private VPC, configure automated scaling, configure logging, and train your team.",
    deliverable: "Cloud VPC Deployment & Runbooks",
  },
  {
    step: "08",
    name: "Improve",
    headline: "Continuous Telemetry & Optimization",
    desc: "Real user interactions and feedback loops provide valuable telemetry. We monitor latency, drift, token costs, and fine-tune models to maintain excellence.",
    deliverable: "Ongoing Model Tuning & Telemetry Reports",
  },
];

const RESPONSIBLE_AI_PILLARS = [
  {
    title: "Strict Data Privacy & Zero Training Retention",
    desc: "Your proprietary business data, customer records, and internal files are never used to train public foundation models. We utilize enterprise API agreements with explicit zero-retention guarantees.",
    icon: Lock,
  },
  {
    title: "Human-in-the-Loop Review Points",
    desc: "For critical actions—such as issuing financial refunds, approving medical requests, or sending legal notices—we architect mandatory human authorization gates.",
    icon: UserCheck,
  },
  {
    title: "Anti-Hallucination & Output Validation",
    desc: "Every response is validated against strict JSON schemas, deterministic business logic, and ground-truth citations before reaching users.",
    icon: ShieldCheck,
  },
  {
    title: "Role-Based Access Control (RBAC)",
    desc: "AI search and assistants strictly enforce your company's existing permission hierarchy so employees only see documents they are authorized to access.",
    icon: ShieldAlert,
  },
  {
    title: "Full Observability & Audit Logs",
    desc: "Complete transparency with comprehensive logging of queries, model inputs, generated tokens, latency metrics, and user feedback.",
    icon: SlidersHorizontal,
  },
  {
    title: "Defensive Red-Teaming & Guardrails",
    desc: "Proactive security testing prevents prompt injection attacks, unauthorized system instructions, data leakage, and adversarial bypasses.",
    icon: Scale,
  },
];

const WHY_NEXOVIO_AI = [
  {
    title: "Business Problem First",
    desc: "We never push AI for the sake of novelty. We identify real operational bottlenecks, measurable ROI, and concrete user workflows before writing code.",
    icon: Compass,
  },
  {
    title: "Practical AI Architecture",
    desc: "We select the right model for the job—whether a lightweight open-source model, an enterprise LLM, a traditional ML classifier, or simple rule automation.",
    icon: Cpu,
  },
  {
    title: "Holistic Product Thinking",
    desc: "AI is useless in a vacuum. We design it as a native, elegant capability embedded inside your web app, mobile product, or internal workflow.",
    icon: Layers,
  },
  {
    title: "Deep System Integration",
    desc: "We connect intelligence directly into the CRMs, ERPs, databases, messaging channels, and APIs your organization already depends on.",
    icon: Workflow,
  },
  {
    title: "Flexible Development",
    desc: "From rapid 3-week proof-of-concept validation to high-availability multi-region enterprise platforms, we adapt to your roadmap.",
    icon: Sliders,
  },
  {
    title: "Scalable & Cost-Optimized",
    desc: "We optimize token usage, semantic caching, and model routing so your operational AI costs remain predictable as user volume surges.",
    icon: Zap,
  },
];

const AI_FAQS = [
  {
    question: "What are AI development services?",
    answer:
      "AI development services involve designing, engineering, and deploying custom software that leverages artificial intelligence to solve specific business, product, operational, or customer experience problems. Depending on the project, this includes custom AI applications, generative AI systems, autonomous AI agents, conversational chatbots, Retrieval-Augmented Generation (RAG), predictive machine learning models, computer vision, workflow automations, and deep API integrations.",
  },
  {
    question: "What types of AI solutions does Nexovio develop?",
    answer:
      "Nexovio builds custom AI software, generative AI workflows, autonomous task agents, enterprise AI chatbots, search and RAG knowledge engines, automated document processing, AI-powered web and mobile applications, recommendation systems, machine learning predictive analytics, NLP pipelines, computer vision tools, and custom AI model API integrations.",
  },
  {
    question: "Can you integrate AI into our existing software and tools?",
    answer:
      "Yes. The majority of our AI engagements involve embedding intelligence into existing software environments. We connect AI models to your existing CRM (Salesforce, HubSpot), ERP, databases (PostgreSQL, MongoDB, SQL Server), customer support desks (Zendesk, Intercom), communication hubs (Slack, Teams, WhatsApp), and internal REST/GraphQL APIs.",
  },
  {
    question: "Can you build a custom AI chatbot for our business?",
    answer:
      "Absolutely. We create intelligent, context-aware conversational bots for public websites, mobile apps, customer portals, and internal team helpdesks. Our chatbots are grounded in your verified business data, follow strict rules, handle complex multi-turn inquiries, capture qualified leads, and seamlessly escalate to human staff when necessary.",
  },
  {
    question: "What is RAG in AI development and why is it important?",
    answer:
      "Retrieval-Augmented Generation (RAG) is an architectural framework that connects language models directly to your company's proprietary documents, databases, and knowledge bases. Instead of relying solely on general internet training, the model retrieves verified snippets from your approved files (PDFs, wikis, tables) and synthesizes accurate answers with clickable citations, virtually eliminating hallucinations.",
  },
  {
    question: "Can you develop autonomous AI agents?",
    answer:
      "Yes. We develop goal-oriented AI agents capable of executing multi-step business workflows. An agent can interpret a natural language objective, determine necessary sub-tasks, execute approved API calls (such as searching a database, querying a calendar, or updating a CRM), and report results back. We always build mandatory human-in-the-loop review points for high-consequence operations.",
  },
  {
    question: "Do you develop generative AI applications?",
    answer:
      "Yes. We build generative AI applications for automated document summarization, contract analysis, structured data extraction, intelligent drafting, email classification, personalized customer communications, and generative search portals using leading models like Claude 3.5, GPT-4o, and open-source models like Llama 3.",
  },
  {
    question: "Can AI be added as a feature to an existing website or mobile app?",
    answer:
      "Yes. We frequently integrate AI capabilities as seamless feature upgrades within existing digital platforms. Examples include adding an intelligent semantic search bar, an AI recommendation widget, a conversational assistant, an OCR receipt scanner, or an automated workflow trigger without rebuilding the core product from scratch.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work closely with early-stage founders and growing startups to validate AI concepts, engineer minimum viable products (MVPs), build AI-native SaaS products, and launch market-ready solutions quickly while keeping infrastructure and token costs strictly controlled.",
  },
  {
    question: "Do you work with enterprise organizations?",
    answer:
      "Yes. For mid-market and enterprise organizations, we architect secure, high-concurrency AI systems featuring role-based access control (RBAC), private cloud VPC deployment, zero-retention data privacy guarantees, enterprise SSO, automated compliance logging, and fault-tolerant failovers.",
  },
  {
    question: "How do you decide whether AI is the right solution for a business problem?",
    answer:
      "We always start with a business problem assessment. Not every process requires artificial intelligence; often, conventional software engineering, database optimization, or deterministic logic is faster and more cost-effective. We only recommend and build AI where machine learning or natural language understanding delivers clear, measurable advantages over traditional software.",
  },
];

const AI_VALUE_PROPOSITION_PILLARS = [
  {
    title: "Business-First Architecture & Tangible ROI",
    description: "We work backward from real operational bottlenecks, data constraints, and business goals—never vanity AI hype.",
  },
  {
    title: "100% Private Data & Zero Model Training",
    description: "Enterprise privacy boundaries guaranteeing foundation models never retain, store, or train on your proprietary IP.",
  },
  {
    title: "Hallucination-Proof RAG with Verified Citations",
    description: "Hybrid vector search grounded strictly in your verified company documents, policies, and operational databases.",
  },
  {
    title: "Autonomous Multi-Step Agent Workflows",
    description: "Goal-oriented agents capable of complex reasoning, vetted tool execution, API calls, and self-correction.",
  },
  {
    title: "Sub-350ms Production-Grade Latency",
    description: "Optimized model routing, semantic caching, and streaming infrastructure designed for instantaneous responsiveness.",
  },
  {
    title: "Seamless Full-Stack Digital Integration",
    description: "Connected directly into modern Next.js web applications, mobile apps, CRMs, and internal enterprise systems.",
  },
];

// ============================================================================
// MAIN COMPONENT VIEW
// ============================================================================

export default function AiDevelopment() {
  const [activeProblemId, setActiveProblemId] = useState<string>(
    BUSINESS_PROBLEMS[0].id
  );
  const [activeIndustryTab, setActiveIndustryTab] = useState<number>(0);
  const [activeTeamTab, setActiveTeamTab] = useState<string>("sales");

  const currentProblem =
    BUSINESS_PROBLEMS.find((p) => p.id === activeProblemId) ||
    BUSINESS_PROBLEMS[0];
  const currentIndustry = INDUSTRY_SOLUTIONS[activeIndustryTab];

  // Structured Data Schemas
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "AI Development Services | Custom AI Solutions & AI Agents",
    description:
      "Custom AI development services for businesses worldwide. Build generative AI, AI agents, chatbots, RAG, automation, ML, recommendations and AI-powered applications.",
    url: "/services/ai-development",
    serviceType: "AIDevelopmentServices",
    image: "/images/capabilities-continuity-banner.webp",
  });

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Development", url: "/services/ai-development" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AI_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* JSON-LD Structured Data */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================================================================== */}
      {/* 1. HERO SECTION                                                    */}
      {/* ================================================================== */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Services", url: "/services" },
              { name: "AI Development", url: "/services/ai-development" },
            ]}
          />

          {/* Futuristic Background Glows */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-electric/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-6 sm:mt-8">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan backdrop-blur-md shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright animate-pulse" />
                <span>PRACTICAL ENTERPRISE AI &amp; AUTOMATION</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                AI Development Services for{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Smarter Products, Workflows
                </span>{" "}
                &amp; Business Growth
              </h1>

              {/* Sub-headline */}
              <div className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
                Turn Business Problems Into Practical AI Solutions
              </div>

              {/* Hero Narrative Copy with cross links */}
              <div className="space-y-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                <p>
                  AI can do a lot. The difficult part is knowing what it should actually do for your business. At Nexovio Digital Solutions, we start with your business problem—not the technology. We understand your goals, workflows, users, data, systems, and constraints first.
                </p>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
                  Then we determine where AI genuinely creates leverage and build a scalable solution around that need—connected directly with our{" "}
                  <Link href="/services/web-development" className="text-brand-cyan hover:underline font-medium">
                    web development services
                  </Link>
                  ,{" "}
                  <Link href="/services/ui-ux-design" className="text-brand-cyan hover:underline font-medium">
                    UI/UX design systems
                  </Link>
                  ,{" "}
                  <Link href="/services/mobile-app-development" className="text-brand-cyan hover:underline font-medium">
                    mobile app development
                  </Link>
                  , and{" "}
                  <Link href="/services/seo-digital-marketing" className="text-brand-cyan hover:underline font-medium">
                    organic search marketing
                  </Link>
                  .
                </p>
              </div>

              {/* 6 Quick Feature Highlights with Interactive Micro-Glow Hover */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {[
                  { name: "Custom AI Software", icon: BrainCircuit },
                  { name: "Generative AI & LLMs", icon: Sparkles },
                  { name: "Autonomous AI Agents", icon: Bot },
                  { name: "RAG & Vector Search", icon: Search },
                  { name: "Workflow Automation", icon: Workflow },
                  { name: "Model & API Integration", icon: Cpu },
                ].map((badge) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <div
                      key={badge.name}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs hover:border-brand-cyan/60 hover:bg-brand-cyan/5 hover:scale-[1.03] transition-all duration-300 cursor-default"
                    >
                      <BadgeIcon className="w-3.5 h-3.5 text-brand-cyan group-hover:scale-125 transition-transform duration-300 shrink-0" />
                      <span className="truncate group-hover:text-brand-cyan transition-colors">{badge.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Dual Hero CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  trackingName="hero_ai_contact"
                  trackingLocation="hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow font-bold text-white justify-center"
                >
                  Tell Us What You Want to Solve
                </Button>
                <Button
                  href="/schedule-a-call"
                  variant="secondary"
                  size="lg"
                  trackingName="hero_ai_schedule"
                  trackingLocation="hero"
                  className="w-full sm:w-auto font-semibold justify-center"
                >
                  Schedule a Technical Discovery Call
                </Button>
              </div>

              {/* Trust Metric Counters */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-white/10 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyan">
                    99.8%
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    Grounded RAG Accuracy
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    &lt;350ms
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    Streaming Inference Latency
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-electric">
                    100%
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    Private Zero-Data Training
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Realistic AI Architecture & Human Engineer Visual */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-brand-cyan/40 bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,198,255,0.18)] overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[450px] lg:h-[500px] w-full bg-[#050914]">
                  <Image
                    src="/images/services/ai-development/ai-hero-neural-developer.jpg"
                    alt="AI software engineers collaborating on enterprise neural network models and custom LLM architecture"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/85 via-transparent to-transparent pointer-events-none rounded-xl" />

                  {/* Floating Top Telemetry Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-[#070D1A]/85 backdrop-blur-md border border-brand-cyan/40 text-emerald-400 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>NEXOVIO AI ENGINE: ACTIVE</span>
                    </div>
                    <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#070D1A]/85 backdrop-blur-md border border-white/10 text-slate-300">
                      <Terminal className="w-3 h-3 text-brand-cyan" />
                      <span>v4.2-enterprise</span>
                    </div>
                  </div>

                  {/* Floating Bottom Live Glass Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#070D1A]/90 backdrop-blur-xl border border-brand-cyan/40 shadow-xl flex items-center justify-between gap-3 pointer-events-auto">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                        <span className="truncate">Production RAG &amp; Agentic System</span>
                      </div>
                      <div className="text-[11px] text-slate-300 truncate mt-0.5 font-mono">
                        99.8% Grounded Accuracy &bull; Zero Foundation Model Retention
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-brand-cyan hover:bg-brand-bright transition-colors inline-flex items-center gap-1"
                    >
                      <span>Deploy</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. STICKY VALUE PROPOSITION & STRATEGIC ARCHITECTURE SECTION       */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Side Sticky Graphic Banner with AI Architecture Pipeline */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[360px] sm:h-[440px] lg:h-[500px] w-full bg-[#050914]">
                  <Image
                    src="/images/services/ai-development/ai-architecture-pipeline.jpg"
                    alt="Silicon microarchitecture and neural network pipeline hardware processing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/85 via-transparent to-transparent pointer-events-none rounded-xl" />


                </div>
              </div>
            </div>

            {/* Right Side Value Proposition Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                STRATEGIC ARCHITECTURE
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Practical Tech Built for Concrete{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Business Outcomes
                </span>
              </h2>

              <div className="space-y-4 text-base text-muted leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Many businesses struggle with AI because they adopt tools before defining the problem. An off-the-shelf chatbot or generic prompt wrapper does not solve complex operational bottlenecks, disconnected databases, slow support queues, or repetitive administrative work.
                </p>
                <p>
                  At Nexovio Digital Solutions, we engineer practical, outcome-driven AI software. We integrate machine intelligence directly into your existing{" "}
                  <Link href="/services/web-development" className="text-brand-cyan hover:underline font-medium">
                    web applications
                  </Link>
                  ,{" "}
                  <Link href="/services/mobile-app-development" className="text-brand-cyan hover:underline font-medium">
                    mobile apps
                  </Link>
                  , and customer touchpoints—powered by our{" "}
                  <Link href="/services/ui-ux-design" className="text-brand-cyan hover:underline font-medium">
                    UI/UX design systems
                  </Link>{" "}
                  and amplified by{" "}
                  <Link href="/services/seo-digital-marketing" className="text-brand-cyan hover:underline font-medium">
                    search visibility
                  </Link>{" "}
                  to deliver measurable operational leverage.
                </p>
              </div>

              {/* 6 Value Proposition Pillars with Left Border Slide-Down Hover */}
              <div className="space-y-3 pt-2">
                {AI_VALUE_PROPOSITION_PILLARS.map((vp) => (
                  <div
                    key={vp.title}
                    className="relative overflow-hidden group flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.04] hover:translate-x-2 transition-all duration-300 shadow-xs"
                  >
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
                ))}
              </div>

              {/* Architectural Console Layers (Technical Deep Dive Box) */}
              <div className="pt-4">
                <div className="rounded-2xl border border-brand-cyan/40 bg-gradient-to-b from-[#071328] to-[#040915] p-5 shadow-xl text-white">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-brand-cyan flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      4-LAYER PRODUCTION PIPELINE ARCHITECTURE
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Zero-Retention</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                      <div className="font-bold text-brand-cyan flex items-center gap-1">
                        <Database className="w-3 h-3" />
                        01. Enterprise Data Ingestion
                      </div>
                      <div className="text-[11px] text-slate-300 mt-1">PDFs, SQL/NoSQL, CRMs, APIs &amp; Live Webhooks</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                      <div className="font-bold text-brand-bright flex items-center gap-1">
                        <Search className="w-3 h-3 text-brand-bright" />
                        02. Hybrid Vector &amp; RAG
                      </div>
                      <div className="text-[11px] text-slate-300 mt-1">Sub-100ms vector index, semantic reranking &amp; citations</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                      <div className="font-bold text-purple-300 flex items-center gap-1">
                        <BrainCircuit className="w-3 h-3" />
                        03. Multi-Model Gateway
                      </div>
                      <div className="text-[11px] text-slate-300 mt-1">Claude 3.5, GPT-4o, Llama 3 &amp; Private Models</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                      <div className="font-bold text-emerald-300 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        04. Streaming Endpoints
                      </div>
                      <div className="text-[11px] text-slate-300 mt-1">Web portals, mobile apps &amp; autonomous agent tasks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. WHAT BUSINESS PROBLEMS CAN AI SOLVE? (INTERACTIVE FRAMEWORK)     */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-24 bg-surface-subtle border-y border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PROBLEM-FIRST AI APPROACH"
            title="What Business Problems Can"
            highlightText="AI Truly Solve?"
            description="Before choosing an AI model or framework, we look at what is slowing your business down. We identify the operational friction point first—then engineer the right AI solution around it."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
            {/* Left Column: 7 Selectable Problem Pills */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-bold block mb-3">
                Select An Operational Bottleneck:
              </span>
              {BUSINESS_PROBLEMS.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = item.id === activeProblemId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveProblemId(item.id)}
                    type="button"
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${isSelected
                      ? "border-brand-cyan bg-white dark:bg-[#071328] shadow-md shadow-brand-cyan/10 translate-x-1"
                      : "border-slate-200/80 dark:border-white/5 bg-white/60 dark:bg-surface-elevated/40 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-surface-elevated"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isSelected
                          ? "bg-brand-cyan text-slate-950 font-bold"
                          : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 group-hover:text-brand-cyan"
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-muted">
                          Problem 0{idx + 1}
                        </div>
                        <div
                          className={`text-xs sm:text-sm font-bold transition-colors line-clamp-1 ${isSelected
                            ? "text-brand-cyan"
                            : "text-slate-900 dark:text-white group-hover:text-brand-cyan"
                            }`}
                        >
                          {item.problemTitle}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${isSelected
                        ? "rotate-90 text-brand-cyan"
                        : "text-slate-400 group-hover:translate-x-1"
                        }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Problem -> Solution Detail Showcase */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                    {currentProblem.badge}
                  </span>
                  <span className="text-xs font-mono text-muted">
                    Engineered by Nexovio
                  </span>
                </div>

                {/* The Problem Breakdown */}
                <div className="p-4 sm:p-5 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    The Operational Problem:
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {currentProblem.problemTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {currentProblem.problemDescription}
                  </p>
                </div>

                {/* The Nexovio Solution */}
                <div className="p-4 sm:p-5 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/30 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    Our Solution:
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                    {currentProblem.solutionName}
                  </h4>
                  <div className="text-xs font-semibold text-brand-cyan">
                    {currentProblem.solutionSubtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {currentProblem.solutionDescription}
                  </p>
                </div>

                {/* Concrete Deliverable Examples */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
                    Real-World Implementation Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentProblem.keyExamples.map((ex) => (
                      <div
                        key={ex}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 font-medium"
                      >
                        <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Action Button */}
                <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-slate-100 dark:border-white/10">
                  <span className="text-xs text-muted">
                    Need this implemented for your business?
                  </span>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    trackingName="problem_solution_cta"
                    trackingLocation="problem_breakdown"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="font-bold text-white text-xs"
                  >
                    Discuss Solution
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. OUR 12 CORE AI DEVELOPMENT SERVICES                             */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-24 bg-background relative" id="ai-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="END-TO-END CAPABILITIES"
            title="Our Comprehensive"
            highlightText="AI Development Services"
            description="From custom AI-powered software and generative AI applications to autonomous agents, vector RAG search, and seamless API integrations—we engineer production-grade machine intelligence."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {AI_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="relative overflow-hidden group flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.16)] hover:-translate-y-2 transition-all duration-400"
                >
                  {/* Top animated gradient line matching Web/Mobile development */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
                  {/* Corner ambient glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  {/* Ambient shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                  <div className="space-y-4">
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                        {svc.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {svc.shortDesc}
                    </p>

                    {/* Deliverable Checkpoints */}
                    <div className="pt-2 space-y-1.5">
                      {svc.deliverables.map((d) => (
                        <div
                          key={d}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-brand-cyan">
                    <span>Explore Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. AI FOR CUSTOMER EXPERIENCE (JOURNEY MATRIX)                     */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-24 bg-surface-subtle border-y border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CUSTOMER JOURNEY TRANSFORMATION"
            title="AI Across the Entire"
            highlightText="Customer Experience"
            description="AI can also transform the way customers discover, purchase, and interact with your brand. We design intelligent experiences that make digital touchpoints more helpful—without making customers feel like they are talking to a cold machine."
            align="center"
          />

          {/* Real-world AI Customer Experience Collaboration Showcase */}
          <div className="mt-12 rounded-3xl border border-brand-cyan/30 dark:border-brand-cyan/30 bg-white dark:bg-[#071328] p-4 sm:p-6 shadow-xl relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 relative overflow-hidden rounded-2xl h-[280px] sm:h-[340px] w-full bg-[#050914]">
                <Image
                  src="/images/services/ai-development/ai-customer-experience.jpg"
                  alt="Customer success and product managers collaborating with real-time AI analytics and conversational tools"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full object-cover object-center rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/85 via-[#040814]/20 to-transparent pointer-events-none rounded-2xl" />

              </div>
              <div className="lg:col-span-5 space-y-4 px-2 sm:px-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                  <Bot className="w-3.5 h-3.5" />
                  END-TO-END INTERACTION
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  Intelligent Touchpoints at Every Milestone
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every interaction is engineered to feel natural, fast, and helpful. From guided discovery before purchase to instant resolution after checkout, our AI models adapt in real time to customer intent.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                    <div className="text-lg font-black text-brand-cyan font-mono">&lt; 350ms</div>
                    <div className="text-[11px] text-muted font-medium">Response Generation</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                    <div className="text-lg font-black text-emerald-400 font-mono">99.4%</div>
                    <div className="text-[11px] text-muted font-medium">Factual Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {/* Stage 1: Before Purchase */}
            <div className="relative overflow-hidden group rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-8 space-y-5 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.15)] hover:border-brand-cyan/60 hover:-translate-y-2 transition-all duration-400">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center font-bold text-sm font-mono border border-brand-cyan/30 group-hover:scale-110 transition-transform">
                01
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan">
                  Discovery &amp; Intent
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1 group-hover:text-brand-cyan transition-colors">
                  Before Purchase
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                AI helps prospects discover products faster, compare technical specifications, answer pre-purchase questions, and find relevant solutions in natural language.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Conversational catalog discovery
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Instant pre-sales FAQ answers
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Natural language product search
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Dynamic quote &amp; qualification
                </li>
              </ul>
            </div>

            {/* Stage 2: During Purchase */}
            <div className="relative overflow-hidden group rounded-3xl border border-brand-cyan/40 bg-white dark:bg-[#071328] p-6 sm:p-8 space-y-5 shadow-md hover:shadow-[0_20px_45px_rgba(0,198,255,0.2)] hover:border-brand-cyan hover:-translate-y-2 transition-all duration-400">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
              <div className="w-10 h-10 rounded-xl bg-brand-electric/15 text-brand-electric flex items-center justify-center font-bold text-sm font-mono border border-brand-electric/30 group-hover:scale-110 transition-transform">
                02
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-electric">
                  Decision &amp; Conversion
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1 group-hover:text-brand-cyan transition-colors">
                  During Purchase
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                AI assists customers at the critical moment of conversion with personalized recommendations, guided configurators, and real-time checkout assistance.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Contextual cross-sell &amp; upsell
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Interactive product configurators
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Real-time pricing &amp; bundle match
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Cart recovery &amp; hesitation help
                </li>
              </ul>
            </div>

            {/* Stage 3: After Purchase */}
            <div className="relative overflow-hidden group rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-8 space-y-5 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.15)] hover:border-brand-cyan/60 hover:-translate-y-2 transition-all duration-400">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-400 via-brand-cyan to-brand-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center font-bold text-sm font-mono border border-purple-500/30 group-hover:scale-110 transition-transform">
                03
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  Retention &amp; Support
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  After Purchase
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                AI provides instantaneous post-purchase support, automated order tracking, self-service returns, and step-by-step troubleshooting.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> 24/7 automated order status
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Step-by-step troubleshooting
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Returns &amp; warranty automation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" /> Intelligent human agent escalation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. AI FOR INTERNAL TEAMS (DEPARTMENTAL HUBS)                       */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INTERNAL OPERATIONAL EXCELLENCE"
            title="AI Solutions For"
            highlightText="Internal Teams"
            description="Not every AI solution needs to face external customers. Some of the highest-ROI opportunities exist directly inside your organization, removing cognitive friction across departmental workflows."
            align="center"
          />

          {/* Department Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
            {[
              { id: "sales", label: "Sales & Marketing", icon: TrendingUp },
              { id: "support", label: "Customer Support", icon: MessageSquare },
              { id: "operations", label: "Operations & HR", icon: Workflow },
              { id: "finance", label: "Finance & Legal", icon: Landmark },
              { id: "engineering", label: "Engineering & Tech", icon: Code2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTeamTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTeamTab(tab.id)}
                  type="button"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${isActive
                    ? "bg-brand-cyan text-white shadow-md shadow-brand-cyan/20 scale-105"
                    : "bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Department Content Card */}
          <div className="mt-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-10 shadow-xl">
            {/* Real-world Delivery Sprint Context Banner */}
            <div className="relative mb-8 rounded-2xl overflow-hidden h-[180px] sm:h-[220px] border border-brand-cyan/25 group">
              <Image
                src="/images/services/ai-development/ai-delivery-sprint.jpg"
                alt="Engineering and operations sprint team collaborating on departmental AI integrations"
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#040814]/95 via-[#040814]/70 to-[#040814]/30 pointer-events-none" />
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan font-bold flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-brand-cyan" />
                  CROSS-DEPARTMENTAL AI WORKFLOW AUTOMATION
                </span>
                <p className="text-sm sm:text-base font-extrabold text-white mt-1 max-w-xl">
                  Empowering internal teams with specialized copilots, automated data ingestion, and context-aware tools.
                </p>
              </div>
            </div>

            {activeTeamTab === "sales" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">01. INBOUND LEAD QUALIFICATION</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Autonomous Lead Scoring</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Instantly research incoming leads, cross-reference company registries, score budget fit, and enrich CRM profiles automatically.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">02. PROPOSAL & RFP SYNTHESIS</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">AI Proposal Drafter</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Parse 50-page RFPs, match past successful case studies, and generate customized first-draft commercial proposals in minutes.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">03. CALL INTELLIGENCE</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Meeting Summaries & Tasks</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Transcribe sales calls, automatically extract client commitments, draft follow-up emails, and update CRM pipeline stages.
                  </p>
                </div>
              </div>
            )}

            {activeTeamTab === "support" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">01. TICKET TRIAGE & ROUTING</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Smart Routing Engine</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Automatically classify ticket urgency, analyze customer sentiment, and route complex technical issues to the exact right engineer.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">02. COPILOT FOR AGENTS</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Rep Answer Synthesizer</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Draft verified responses for human support agents by retrieving verified technical SOPs, saving 4+ minutes per ticket.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">03. KNOWLEDGE GAP DETECTOR</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Auto Article Generator</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Identify recurring questions that lack help documentation and draft helpdesk articles for team review.
                  </p>
                </div>
              </div>
            )}

            {activeTeamTab === "operations" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">01. HR ONBOARDING BOT</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Employee Policy Assistant</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Answer benefits, leave policies, company handbooks, and tech setup queries instantly without HR team intervention.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">02. DOCUMENT PARSING</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Automated Form & File Ingestion</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Extract structured table data, vendor quotes, and certificates from scanned PDFs directly into operational databases.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">03. MULTI-APP SYNC AGENTS</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Cross-Tool Automation</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Sync data between ERP, project trackers, and communications without brittle custom webhooks or manual data re-entry.
                  </p>
                </div>
              </div>
            )}

            {activeTeamTab === "finance" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">01. INVOICE OCR AUDITING</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Automated Accounts Payable</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Parse line items, match PO numbers, flag suspicious amounts, and queue verified invoices for one-click approval.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">02. CONTRACT ANALYSIS</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Legal Clause Extraction</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Scan vendor MSAs, NDAs, and SLAs to highlight liability clauses, indemnification risks, and renewal deadlines.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">03. FINANCIAL FORECASTING</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Cash-Flow ML Models</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Forecast cash collections, model seasonality, and spot accounts receivable delay trends across historical records.
                  </p>
                </div>
              </div>
            )}

            {activeTeamTab === "engineering" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">01. CODEBASE COPILOT</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Internal Codebase Search</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Search private git repositories in natural language to find architectural patterns, existing functions, and API conventions.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">02. LOG ANOMALY DETECTOR</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Automated Incident Triage</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Parse millions of production log lines, cluster stack traces, and summarize probable root causes before PagerDuty escalates.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-cyan">03. API DOC GENERATION</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Interactive Swagger / OpenAPI</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Automatically draft comprehensive API documentation, type declarations, and usage examples from backend endpoints.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. AI FOR DIFFERENT INDUSTRIES (10 SECTORS)                        */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-24 bg-surface-subtle border-y border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DOMAIN SPECIALIZATION"
            title="AI Solutions For"
            highlightText="Different Industries"
            description="AI becomes significantly more valuable when it understands the regulatory constraints, data formats, and customer terminology of your specific industry."
            align="center"
          />

          {/* Industry Selection Tabs - Clean Responsive Grid with Zero Horizontal Scrolling */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 pt-8">
            {INDUSTRY_SOLUTIONS.map((ind, idx) => {
              const Icon = ind.icon;
              const isSelected = activeIndustryTab === idx;
              return (
                <button
                  key={ind.name}
                  onClick={() => setActiveIndustryTab(idx)}
                  type="button"
                  className={`w-full flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${isSelected
                    ? "bg-brand-cyan text-slate-950 shadow-lg shadow-brand-cyan/25 scale-[1.03] border border-brand-cyan"
                    : "bg-white dark:bg-[#071328] border border-slate-200/90 dark:border-white/10 text-slate-900 dark:text-white hover:border-brand-cyan/60 hover:text-brand-cyan hover:scale-[1.02]"
                    }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-slate-950" : "text-brand-cyan"}`} />
                  <span className="truncate">{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Industry Focus Card */}
          <div className="mt-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center font-bold">
                {React.createElement(currentIndustry.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan">
                  Industry Focus
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {currentIndustry.name}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div className="space-y-3 p-5 rounded-2xl bg-red-500/5 border border-red-500/15">
                <div className="text-xs font-mono uppercase tracking-wider text-red-500 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Common Industry Challenges:
                </div>
                <ul className="space-y-2.5 pt-1">
                  {currentIndustry.challenges.map((c) => (
                    <li key={c} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">&bull;</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opportunities */}
              <div className="space-y-3 p-5 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/20">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                  Proven AI Opportunities:
                </div>
                <ul className="space-y-2.5 pt-1">
                  {currentIndustry.opportunities.map((o) => (
                    <li key={o} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-muted">
                Operating in the {currentIndustry.name} sector? We can engineer a specialized AI architecture for your compliance baseline.
              </span>
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                trackingName="industry_ai_cta"
                trackingLocation="industry_section"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                className="font-bold text-white text-xs"
              >
                Inquire For Your Sector
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. FROM AI IDEA TO WORKING SOLUTION (8-STEP LIFECYCLE)              */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-24 bg-background relative" id="ai-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="RIGOROUS ENGINEERING LIFECYCLE"
            title="From AI Idea to"
            highlightText="Working Production Solution"
            description="We move AI projects beyond impressive isolated demos into dependable, scalable production software that integrates seamlessly with your real users and business data."
            align="center"
          />

          {/* Engineering Lab & Code Architecture Showcase */}
          <div className="mt-12 rounded-3xl border border-brand-cyan/30 dark:border-brand-cyan/30 bg-white dark:bg-[#071328] p-4 sm:p-6 shadow-xl relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 relative overflow-hidden rounded-2xl h-[260px] sm:h-[320px] w-full bg-[#050914]">
                <Image
                  src="/images/services/ai-development/ai-dev-workstation.jpg"
                  alt="Full-stack AI developer workstation with code editor, automated testing and model benchmarking"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full object-cover object-center rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/85 via-[#040814]/20 to-transparent pointer-events-none rounded-2xl" />
              </div>
              <div className="lg:col-span-5 space-y-4 px-2 sm:px-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                  <Cpu className="w-3.5 h-3.5" />
                  PRODUCTION ENGINEERING
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  Engineered for Reliability, Not Just Demos
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Moving from a promising prototype to enterprise production requires defensive red-teaming, structured output schemas, latency optimization, and automated fallback models.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                    <div className="text-lg font-black text-brand-cyan font-mono">8 Stages</div>
                    <div className="text-[11px] text-muted font-medium">Concept to Scale</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                    <div className="text-lg font-black text-purple-400 font-mono">0 Downtime</div>
                    <div className="text-[11px] text-muted font-medium">Cloud Deployment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {PROCESS_STEPS.map((p) => (
              <div
                key={p.step}
                className="relative overflow-hidden group rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 shadow-sm hover:border-brand-cyan/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,198,255,0.14)] transition-all duration-400 flex flex-col justify-between"
              >
                {/* Top animated gradient line matching Web/Mobile development */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
                {/* Corner ambient glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-brand-cyan/40 group-hover:text-brand-cyan transition-colors">
                      {p.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">
                      Stage {p.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                    {p.name}
                  </h3>

                  <div className="text-xs font-semibold text-brand-electric">
                    {p.headline}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/10">
                  <div className="text-[10px] font-mono uppercase text-muted font-bold">
                    Key Deliverable:
                  </div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">
                    {p.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ================================================================== */}
      {/* 8. RESPONSIBLE AI & ENTERPRISE GOVERNANCE (DARK BACKGROUND OVERLAY) */}
      {/* ================================================================== */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[#040814] text-white border-y border-brand-cyan/20">
        {/* Full-Bleed Dark Tech Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/ai-development/ai-data-center-dark.jpg"
            alt="Enterprise AI high-density computing infrastructure and secure cloud data center"
            fill
            sizes="100vw"
            className="object-cover object-center scale-105"
            priority={false}
          />
          {/* Deep Dark Multilayer Overlay with Cyan Ambient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#040814]/95 via-[#040915]/90 to-[#040814]/98 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,198,255,0.15),transparent_70%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading with pure white typography and glowing badge */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan shadow-sm shadow-brand-cyan/20">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
              SAFETY, PRIVACY &amp; GOVERNANCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Building AI{" "}
              <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-bright bg-clip-text text-transparent">
                Responsibly &amp; Securely
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              AI engineering is not only about what a model can do—it is equally about data protection, access boundaries, human oversight, and verifiable security.
            </p>
          </div>

          {/* 6 Responsible AI Pillars in Glassmorphic Cards with pure white text and hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14">
            {RESPONSIBLE_AI_PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative overflow-hidden group p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-brand-cyan/60 bg-[#071328]/80 backdrop-blur-xl hover:bg-[#071328]/95 shadow-2xl hover:shadow-[0_20px_45px_rgba(0,198,255,0.2)] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between"
                >
                  {/* Top animated gradient line matching Web/Mobile development */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
                  {/* Corner ambient glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono font-semibold text-brand-cyan">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Enterprise Governance Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* 9. WHY NEXOVIO FOR AI DEVELOPMENT                                  */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="THE NEXOVIO ADVANTAGE"
            title="Why Businesses Partner With Nexovio"
            highlightText="For AI Development"
            description="We bridge the gap between abstract academic AI research and real-world commercial software execution."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {WHY_NEXOVIO_AI.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="group rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-7 space-y-3 shadow-xs hover:border-brand-cyan/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 10. AI DEVELOPMENT FOR STARTUPS, SMBS & ENTERPRISES                */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-24 bg-surface-subtle border-y border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="SCALE MATTERS"
            title="AI Solutions Scaled For"
            highlightText="Startups, SMBs &amp; Enterprises"
            description="You do not need to be a Fortune 500 tech giant to benefit from practical machine intelligence. The right solution is shaped by your operational goals—not company headcount."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {/* Tier 1: Startups */}
            <div className="relative overflow-hidden group rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.14)] hover:border-brand-cyan/60 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                  STARTUPS &amp; FOUNDERS
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                  Fast MVPs &amp; AI-Native Products
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Validate your core AI hypothesis quickly. We build production-ready prototypes and MVPs in 3 to 6 weeks, connecting modern foundation models to sleek Next.js interfaces with controlled token burn.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" /> 3-6 week rapid MVP sprint
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" /> AI-powered SaaS architectures
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" /> Token cost budget guardrails
                  </div>
                </div>
              </div>
              <Button
                href="/contact"
                variant="outline"
                size="sm"
                className="w-full mt-6 text-xs font-bold"
              >
                Build Startup MVP
              </Button>
            </div>

            {/* Tier 2: Growing Businesses (SMBs) */}
            <div className="relative overflow-hidden group rounded-3xl border border-brand-cyan/40 bg-white dark:bg-[#071328] p-6 sm:p-8 space-y-4 shadow-lg hover:shadow-[0_20px_45px_rgba(0,198,255,0.22)] hover:border-brand-cyan hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
              <div className="absolute top-0 right-0 bg-brand-cyan text-slate-950 font-mono text-[10px] font-bold px-3 py-0.5 rounded-bl-lg">
                HIGH ROI
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-electric/15 text-brand-electric border border-brand-electric/30">
                  GROWING SMBS
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                  Automation &amp; Customer Portals
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Relieve overloaded teams by automating routine document processing, customer FAQ inquiries, order tracking, and lead qualification with tailored assistants.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" /> 24/7 customer conversational bots
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" /> Automated invoice/document OCR
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" /> CRM &amp; email sync workflows
                  </div>
                </div>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="w-full mt-6 text-xs font-bold shadow-glow text-white"
              >
                Scale Your Operations
              </Button>
            </div>

            {/* Tier 3: Enterprises */}
            <div className="relative overflow-hidden group rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.14)] hover:border-brand-cyan/60 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-400 via-brand-cyan to-brand-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-purple-500/15 text-purple-400 border border-purple-500/30">
                  ENTERPRISES
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                  Multi-System RAG &amp; Governance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Connect vast repositories of company knowledge into secure, permission-governed internal assistants with strict RBAC, SOC2 compliance, and private VPC deployment.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" /> Strict RBAC &amp; zero-retention
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" /> Enterprise ERP &amp; legacy integration
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" /> Dedicated VPC / on-premise LLMs
                  </div>
                </div>
              </div>
              <Button
                href="/contact"
                variant="outline"
                size="sm"
                className="w-full mt-6 text-xs font-bold"
              >
                Engineer Enterprise AI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 11. COMPREHENSIVE FAQS                                             */}
      {/* ================================================================== */}
      <FaqSection
        variant="white"
        faqs={AI_FAQS}
        badge="FREQUENTLY ASKED QUESTIONS"
        title="Everything You Need to Know About"
        highlightText="AI Development Services"
        description="Clear answers regarding data privacy, RAG architectures, model selection, custom agents, timeline estimations, and production maintenance."
      />

    </div>
  );
}
