"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Workflow,
  Cpu,
  Database,
  ArrowRight,
  Check,
  CheckCircle2,
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
  Scale,
  Activity,
  UserCheck,
  TrendingUp,
  FileCheck,
  Shield,
  HelpCircle,
  Sparkles,
  Gauge,
  Network,
  Users,
  AlertCircle,
  FileSpreadsheet,
  Binary,
  Share2,
  Repeat,
  SlidersHorizontal,
  Bot,
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
// REALISTIC AUTOMATION CARD IMAGE PREVIEW (MATCHES AI AGENT CARD COMPONENT)
// ============================================================================

function RealisticAutomationCardImage({
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
// DATA STRUCTURES: 10 CORE AI AUTOMATION SOLUTIONS
// ============================================================================

interface AutomationServiceItem {
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

const AUTOMATION_SERVICES: AutomationServiceItem[] = [
  {
    id: "document-processing",
    number: "01",
    title: "Intelligent Document Processing (IDP)",
    badge: "MULTIMODAL EXTRACTION",
    tagline: "Turn unstructured PDFs, vendor invoices & contracts into verified data pipelines.",
    description:
      "Eliminate manual data entry across PDF invoices, vendor contracts, bills of lading, and medical claim forms. We deploy fine-tuned multimodal LLMs and layout-aware vision models that extract key-value pairs, cross-validate against master databases, and sync cleanly into ERPs and accounting systems.",
    keywordCluster: "intelligent document processing, automated invoice OCR, contract data extraction AI, multimodal document parsing",
    image: "/images/services/ai-automation/intelligent-document-processing-card.jpg",
    imageAlt: "Enterprise professional analyzing intelligent document processing extraction on high-resolution screens",
    icon: FileText,
    deliverables: [
      "Custom layout-aware multimodal OCR parsing",
      "Confidence-scored entity and table extraction",
      "Automated two-way and three-way ERP matching",
      "Human-in-the-loop exception handling queues",
    ],
  },
  {
    id: "workflow-rpa",
    number: "02",
    title: "End-to-End Workflow & AI RPA",
    badge: "RESILIENT ORCHESTRATION",
    tagline: "Upgrade fragile legacy scripts into resilient, self-healing automated workflows.",
    description:
      "Traditional RPA breaks whenever a web UI button shifts or an unexpected pop-up appears. Our modern AI-powered workflow automation pairs stateful orchestrators with computer vision and semantic reasoning, allowing automated tasks to adapt to UI updates, handle edge cases, and execute complex cross-system handoffs.",
    keywordCluster: "AI robotic process automation, self-healing RPA, enterprise workflow orchestration, intelligent automation engineering",
    image: "/images/services/ai-automation/workflow-rpa-automation-card.jpg",
    imageAlt: "Modern tech specialist in enterprise office operating automated cross-application workflows",
    icon: Workflow,
    deliverables: [
      "Resilient headless browser and API automation",
      "Legacy desktop software automated data entry",
      "Dynamic exception recovery & automated retries",
      "Comprehensive telemetry and audit logging",
    ],
  },
  {
    id: "crm-lead-routing",
    number: "03",
    title: "CRM & Sales Pipeline Automation",
    badge: "REVENUE ACCELERATION",
    tagline: "Instant lead qualification, enrichment, routing & automated CRM hygiene.",
    description:
      "Stop losing high-value buyers to delayed sales follow-ups. We engineer intelligent inbound pipelines that parse form submissions, enrich company firmographics via third-party APIs, score intent using historical win-loss data, and instantly route qualified leads to account executives via Slack and CRM round-robins.",
    keywordCluster: "automated CRM lead routing, AI sales pipeline automation, HubSpot automated qualification, Salesforce AI enrichment",
    image: "/images/services/ai-automation/crm-pipeline-automation-card.jpg",
    imageAlt: "Sales operations leaders analyzing automated lead scoring metrics and pipeline distribution on a tablet",
    icon: TrendingUp,
    deliverables: [
      "Sub-minute inbound lead enrichment and intent scoring",
      "Automated calendar booking and rep assignment",
      "Bidirectional Salesforce, HubSpot & Zoho sync",
      "Automated post-meeting summaries and stage progression",
    ],
  },
  {
    id: "support-triage",
    number: "04",
    title: "Customer Support Ticket & Email Triage",
    badge: "FIRST-CONTACT RESOLUTION",
    tagline: "Automated ticket categorization, sentiment tracking & intelligent response drafting.",
    description:
      "Free your support engineers from repetitive tier-1 triage. Our systems inspect incoming emails and support portal tickets, analyze user sentiment and urgency, classify the underlying technical issue, auto-draft context-grounded responses for human approval, or trigger automated resolution workflows for routine account actions.",
    keywordCluster: "support ticket automation, Zendesk AI triage, automated customer service email drafting, Jira ticket routing AI",
    image: "/images/services/ai-automation/support-ticket-triage-card.jpg",
    imageAlt: "Customer support specialist wearing headset reviewing automated ticket triage and sentiment scores",
    icon: ShieldCheck,
    deliverables: [
      "Real-time ticket classification and priority routing",
      "Automated knowledge-grounded draft responses",
      "Automated refund, password reset & license workflows",
      "CSAT prediction and churn-risk escalation triggers",
    ],
  },
  {
    id: "finance-reconciliation",
    number: "05",
    title: "Financial Reconciliation & AP Automation",
    badge: "FINTECH AUDITING",
    tagline: "Automate accounts payable, line-item audits & ledger reconciliation.",
    description:
      "Transform month-end financial closing from weeks of spreadsheet agony into an automated, audited background job. We build automated reconciliation pipelines that compare bank statements, payment gateway logs, and ERP invoices, flagging discrepancies, calculating currency adjustments, and posting verified journal entries.",
    keywordCluster: "accounts payable automation AI, financial reconciliation software, automated invoice matching, ERP ledger sync",
    image: "/images/services/ai-automation/finance-reconciliation-card.jpg",
    imageAlt: "Financial auditor reviewing automated accounts payable invoice reconciliation ledger on laptop",
    icon: Landmark,
    deliverables: [
      "Automated 3-way matching (PO, Invoice, Receiving Receipt)",
      "Anomaly and duplicate payment fraud detection",
      "Multi-currency conversion and fee reconciliation",
      "Cryptographic audit trail for compliance verification",
    ],
  },
  {
    id: "supply-chain-logistics",
    number: "06",
    title: "Supply Chain & Inventory Automation",
    badge: "OPERATIONAL RESILIENCE",
    tagline: "Predictive reorder triggers, shipment tracking & automated supplier communication.",
    description:
      "Eliminate inventory stockouts and logistics blind spots. We engineer predictive automation workflows that monitor warehouse stock thresholds, forecast seasonal consumption patterns, automatically generate purchase orders, and track carrier freight APIs to alert dispatchers of delayed shipments.",
    keywordCluster: "supply chain automation AI, automated inventory replenishment, freight tracking workflows, warehouse AI automation",
    image: "/images/services/ai-automation/supply-chain-logistics-card.jpg",
    imageAlt: "Industrial supply chain operations team managing automated inventory reorder and logistics dispatch",
    icon: Truck,
    deliverables: [
      "Dynamic safety-stock reorder triggers via vendor APIs",
      "Automated bill of lading and customs filing parsing",
      "Real-time carrier delay alerts and alternate routing",
      "Multi-location warehouse synchronization",
    ],
  },
  {
    id: "hr-operations",
    number: "07",
    title: "HR Onboarding & Employee Operations",
    badge: "WORKFORCE ENABLEMENT",
    tagline: "Streamline employee onboarding, IT provisioning & internal policy requests.",
    description:
      "Reduce new-hire friction from days to minutes. Our automated HR operations pipelines guide candidates from signed offer letters through automated identity verification, background check syncing, cloud software account provisioning (Google Workspace, Slack, GitHub), and guided policy onboarding.",
    keywordCluster: "HR automation solutions, automated employee onboarding, IT access provisioning AI, Workday automated workflows",
    image: "/images/services/ai-automation/hr-operations-automation-card.jpg",
    imageAlt: "HR team members collaborating over automated employee onboarding and workforce workflows",
    icon: Users,
    deliverables: [
      "End-to-end automated new-hire provisioning workflows",
      "Automated compliance document tracking and e-signatures",
      "Internal HR policy query resolution with verified citations",
      "Automated offboarding and instant security credential revocation",
    ],
  },
  {
    id: "voice-contact-center",
    number: "08",
    title: "Voice & Contact Center Intelligence",
    badge: "REAL-TIME TELEMETRY",
    tagline: "Real-time speech transcription, telephony routing & automated call summaries.",
    description:
      "Turn spoken enterprise conversations into structured business data. We integrate sub-second speech-to-text models into your telephony platform (Twilio, FreePBX, Vonage, Asterisk) to automatically transcribe calls, detect compliance violations in real time, auto-generate CRM interaction summaries, and score call quality.",
    keywordCluster: "contact center AI automation, real-time call transcription, voice telemetry automation, Twilio AI workflows",
    image: "/images/services/ai-automation/voice-contact-center-automation-card.jpg",
    imageAlt: "Contact center specialist smiling while using automated real-time speech transcription software",
    icon: Activity,
    deliverables: [
      "Sub-second streaming speech-to-text transcription",
      "Automated post-call CRM action item generation",
      "Real-time compliance checklist and script adherence tracking",
      "Supervisor escalation triggers on escalating customer sentiment",
    ],
  },
  {
    id: "itops-cloud-telemetry",
    number: "09",
    title: "IT Ops & Cloud Infrastructure Automation",
    badge: "SELF-HEALING SYSTEMS",
    tagline: "Automated incident detection, runbook execution & cloud cost governance.",
    description:
      "Keep digital infrastructure operating at peak uptime without midnight alerts. We build intelligent DevOps automation pipelines that ingest telemetry from Datadog, CloudWatch, and Kubernetes, correlate error anomalies, automatically execute self-healing runbooks for known failure modes, and scale resources dynamically.",
    keywordCluster: "IT operations automation, self-healing cloud infrastructure, DevOps AI automation, automated incident runbooks",
    image: "/images/services/ai-automation/itops-cloud-telemetry-card.jpg",
    imageAlt: "Cloud DevOps engineer at standing desk monitoring live system telemetry and self-healing runbooks",
    icon: Server,
    deliverables: [
      "Automated event correlation and noise reduction alerts",
      "Self-healing runbook execution for recurring cloud faults",
      "Automated cloud idle-resource reclamation and cost capping",
      "Zero-touch SSL renewal, backup verification & dependency audits",
    ],
  },
  {
    id: "compliance-audit",
    number: "10",
    title: "Enterprise Governance & Audit Automation",
    badge: "REGULATORY COMPLIANCE",
    tagline: "Continuous SOC 2, HIPAA & GDPR evidence collection with tamper-evident logs.",
    description:
      "Eliminate the scramble of manual compliance audits. We architect automated compliance monitoring systems that continuously verify cloud configuration settings, track employee access privileges, monitor sensitive data flow across microservices, and compile immutable, auditor-ready evidence reports on demand.",
    keywordCluster: "compliance automation AI, continuous SOC 2 audit automation, HIPAA compliance workflows, automated governance reporting",
    image: "/images/services/ai-automation/enterprise-compliance-audit-card.jpg",
    imageAlt: "Enterprise compliance auditor reviewing regulatory framework and security controls on dual displays",
    icon: Lock,
    deliverables: [
      "Continuous compliance evidence harvesting across cloud APIs",
      "Automated PII detection and tokenization in data streams",
      "Role-based access control (RBAC) privilege audits",
      "Auditor-ready exportable PDF & JSON compliance manifests",
    ],
  },
];

// ============================================================================
// DATA STRUCTURES: 8 PRACTICAL BUSINESS USE CASES (MATCHES AI AGENT FORMAT)
// ============================================================================

interface BusinessAreaUseCase {
  area: string;
  badge: string;
  workflows: string;
  businessOutcome: string;
  icon: React.ElementType;
}

const BUSINESS_USE_CASES: BusinessAreaUseCase[] = [
  {
    area: "SaaS & Product Operations",
    badge: "GROWTH",
    workflows:
      "Telemetry event monitoring, trial churn risk prediction, automated onboarding email tips, and instant routing of qualified demo requests to account managers.",
    businessOutcome: "+42% trial conversion velocity and 80% reduction in manual customer success research.",
    icon: Rocket,
  },
  {
    area: "FinTech & Underwriting",
    badge: "COMPLIANCE",
    workflows:
      "Automated KYC document extraction, bank statement analysis, credit bureau API cross-referencing, debt-to-income calculation, and loan packaging.",
    businessOutcome: "Loan intake turnaround cut from 4 days to under 12 minutes with 99.8% field accuracy.",
    icon: Landmark,
  },
  {
    area: "E-Commerce & Retail",
    badge: "COMMERCE",
    workflows:
      "Omnichannel stock synchronization, return label generation, carrier tracking exception alerts, and automated supplier replenishment purchase orders.",
    businessOutcome: "6x faster customer refunds and 94% reduction in cross-channel inventory drift.",
    icon: ShoppingBag,
  },
  {
    area: "Healthcare & Life Sciences",
    badge: "SECURITY",
    workflows:
      "HIPAA-compliant prior authorization extraction, clinical notes normalization, insurance formulary lookup, and patient appointment reminders.",
    businessOutcome: "70% faster prior authorization approvals with zero protected health information leakage.",
    icon: Stethoscope,
  },
  {
    area: "Legal & Corporate Contracts",
    badge: "GOVERNANCE",
    workflows:
      "Vendor NDA parsing, deviation redline analysis against standard corporate playbooks, contract renewal tracking, and signature status syncing.",
    businessOutcome: "Contract review cycle dropped from 14 days to under 36 hours, saving 600+ legal hours annually.",
    icon: Scale,
  },
  {
    area: "Logistics & Freight",
    badge: "EFFICIENCY",
    workflows:
      "Carrier dispatch coordination, bill of lading parsing, automated driver SMS check-ins, customs paperwork filing, and route exception alerts.",
    businessOutcome: "97.4% on-time delivery rate with 3.2x higher shipment throughput per freight coordinator.",
    icon: Truck,
  },
  {
    area: "Real Estate & Leasing",
    badge: "OPERATIONS",
    workflows:
      "Automated tenant background checks, payroll verification, lease generation, and emergency maintenance contractor dispatching based on issue severity.",
    businessOutcome: "Tenant placement turnaround reduced from 5 days to 4 hours with under 15-minute emergency dispatch.",
    icon: Building2,
  },
  {
    area: "Manufacturing & Supply Chain",
    badge: "INDUSTRY",
    workflows:
      "IoT sensor predictive maintenance triggers, automated spare parts reservation in SAP ERP, work order dispatch, and vendor invoice reconciliation.",
    businessOutcome: "58% reduction in unplanned equipment downtime, saving over $1.2M annually in lost production.",
    icon: Factory,
  },
];

// ============================================================================
// DATA STRUCTURES: 7-STEP EXECUTION CYCLE (MATCHES AI AGENT FORMAT)
// ============================================================================

interface HowAutomationWorksStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

const HOW_AUTOMATION_WORKS_STEPS: HowAutomationWorksStep[] = [
  {
    step: "01",
    title: "Event Ingestion & Webhooks",
    desc: "Captures triggers from webhook events, cloud message queues, database change streams, or incoming emails with sub-millisecond deduplication.",
    icon: Zap,
  },
  {
    step: "02",
    title: "Multimodal Context Extraction",
    desc: "Layout-aware vision models parse unstructured documents, scanned invoices, and complex tables into validated, strongly typed schemas.",
    icon: FileSpreadsheet,
  },
  {
    step: "03",
    title: "Semantic Policy Routing",
    desc: "Applies business logic, enterprise constraints, and compliance rules to calculate the exact execution route and determine whether human review is required.",
    icon: GitBranch,
  },
  {
    step: "04",
    title: "Cross-System API Execution",
    desc: "Performs authenticated read and write actions across ERPs, CRMs, and payment gateways with rate-limiting, transaction isolation, and idempotency.",
    icon: Cpu,
  },
  {
    step: "05",
    title: "Human-in-the-Loop Review",
    desc: "When confidence scores dip below enterprise thresholds or monetary limits are exceeded, workflows pause and alert designated reviewers via Slack or web UI.",
    icon: UserCheck,
  },
  {
    step: "06",
    title: "Immutable Audit Ledger Logging",
    desc: "Logs every event trigger, prompt, model decision, and external API mutation into a tamper-evident audit ledger for SOC 2 and regulatory compliance.",
    icon: Lock,
  },
  {
    step: "07",
    title: "Telemetry & Continuous Tuning",
    desc: "Real-time tracing monitors end-to-end latency, error rates, and API performance to continuously refine prompts, models, and SLA compliance.",
    icon: Gauge,
  },
];

// ============================================================================
// DATA STRUCTURES: 10 CORE CAPABILITIES (MATCHES AI AGENT FORMAT)
// ============================================================================

interface CoreCapability {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const CORE_CAPABILITIES: CoreCapability[] = [
  {
    title: "Event-Driven Architecture",
    desc: "Engineered on Kafka, Redis, and cloud event buses for decoupled horizontal scalability processing millions of daily transactions.",
    icon: Network,
  },
  {
    title: "Multimodal Document AI",
    desc: "Extracts data from varied invoice layouts, contracts, and handwritten receipts with strict schema validation.",
    icon: Eye,
  },
  {
    title: "Legacy Software Connectors",
    desc: "Bridges modern cloud APIs with legacy on-premise ERPs (SAP ECC, AS400, Oracle) via resilient headless agents.",
    icon: Server,
  },
  {
    title: "Stateful Durable Execution",
    desc: "Powered by Temporal runtimes so long-running multi-day workflows survive server restarts and downstream outages.",
    icon: Repeat,
  },
  {
    title: "Tamper-Evident Audit Trails",
    desc: "Cryptographic logging of all inputs, decisions, user approvals, and API mutations for SOC 2, HIPAA, and GDPR auditing.",
    icon: ShieldCheck,
  },
  {
    title: "Self-Healing Exception Routing",
    desc: "Dynamic fallbacks detect transient API outages and schema changes, routing to dead-letter queues without halting pipelines.",
    icon: AlertCircle,
  },
  {
    title: "Sub-Second Action Latency",
    desc: "Persistent HTTP/2 connections and optimized runtimes ensure synchronous workflow actions complete in sub-second time.",
    icon: Zap,
  },
  {
    title: "Granular RBAC & Secret Vaults",
    desc: "Zero plain-text credentials. Automated workflows fetch dynamic, short-lived tokens from HashiCorp Vault or AWS KMS.",
    icon: Lock,
  },
  {
    title: "Human Approval Consoles",
    desc: "Interactive review cards delivered into Slack, Microsoft Teams, or custom web consoles for one-click manager sign-off.",
    icon: Users,
  },
  {
    title: "Distributed APM Observability",
    desc: "OpenTelemetry distributed tracing and Datadog APM metrics provide end-to-end visibility across every microstep.",
    icon: BarChart3,
  },
];

// ============================================================================
// DATA STRUCTURES: COMPARISON TABLE (MATCHES AI AGENT FORMAT)
// ============================================================================

interface ComparisonRow {
  capability: string;
  traditional: string;
  nexovio: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    capability: "Unstructured Data Processing",
    traditional: "Fails on unstructured text, varied invoice layouts, or scanned documents without rigid, fixed coordinate templates.",
    nexovio: "Multimodal AI extracts data from variable layouts, handwriting, and contracts with confidence-scored validation.",
  },
  {
    capability: "UI & API Adaptability",
    traditional: "Brittle selectors break whenever a web portal updates a CSS class, button position, or authentication prompt.",
    nexovio: "Semantic visual locators and self-healing headless agents adapt dynamically to front-end and API version changes.",
  },
  {
    capability: "Exception Handling",
    traditional: "Hard crashes on unanticipated inputs, halting the entire batch until an engineer manually edits code.",
    nexovio: "AI-driven edge-case classification, automated retries with backoff, and graceful human-in-the-loop escalation.",
  },
  {
    capability: "Decision-Making Capability",
    traditional: "Limited to simplistic boolean if/else statements hardcoded by programmers during initial setup.",
    nexovio: "Reasoning models evaluate context, policy guidelines, and nuance to make defensible, auditable routing choices.",
  },
  {
    capability: "Auditability & Governance",
    traditional: "Basic plain-text log files that lack context, token tracking, or cryptographic verification of data access.",
    nexovio: "Structured, tamper-evident audit ledgers recording exact prompts, models, user interventions, and API outputs.",
  },
  {
    capability: "Total Cost of Ownership (TCO)",
    traditional: "High ongoing maintenance fees, frequent developer patches, and expensive per-bot licensing penalties.",
    nexovio: "Cloud-native, open standards, zero vendor lock-in, and self-healing pipelines that scale cost-effectively with usage.",
  },
];

// ============================================================================
// DATA STRUCTURES: 7-STAGE DELIVERY PROCESS (MATCHES AI AGENT FORMAT)
// ============================================================================

interface DevelopmentProcessStage {
  stage: string;
  name: string;
  desc: string;
  deliverable: string;
  icon: React.ElementType;
}

const DEVELOPMENT_PROCESS_STAGES: DevelopmentProcessStage[] = [
  {
    stage: "01",
    name: "Workflow Audit & Feasibility Assessment",
    desc: "We analyze manual bottlenecks, estimate operational ROI, and map data dependencies across your existing software stack.",
    deliverable: "Process bottleneck map & quantified ROI forecast",
    icon: Compass,
  },
  {
    stage: "02",
    name: "Architecture & Integration Specification",
    desc: "We define API schemas, state storage, security boundaries, authentication vaults, and edge-case policies.",
    deliverable: "Integration specification & state machine blueprint",
    icon: GitBranch,
  },
  {
    stage: "03",
    name: "Extraction & Model Grounding Engineering",
    desc: "We train and calibrate multimodal extraction models, layout-aware OCR, and structured schema validation logic.",
    deliverable: "Fine-tuned extraction pipeline & validation benchmark",
    icon: Code2,
  },
  {
    stage: "04",
    name: "Connector Orchestration Synthesis",
    desc: "We synthesize connectors across ERPs, CRMs, communication channels, databases, and durable state runtimes.",
    deliverable: "Bidirectional API connectors & event queue machinery",
    icon: Terminal,
  },
  {
    stage: "05",
    name: "Guardrails & Staging Dry-Runs",
    desc: "Rigorous stress testing against historical edge cases, rate limits, synthetic load, and human review approval gates.",
    deliverable: "1,000+ transaction dry-run audit & test report",
    icon: ShieldCheck,
  },
  {
    stage: "06",
    name: "Phased Production Shadowing",
    desc: "We deploy into production in shadow mode where automations run alongside human operators to verify 100% accuracy.",
    deliverable: "Shadow-mode parity report & live rollout",
    icon: Rocket,
  },
  {
    stage: "07",
    name: "Telemetry, SLA Optimization & Expansion",
    desc: "Continuous monitoring, automated SLA tracking, prompt tuning, and expanding automation scope to adjacent departments.",
    deliverable: "Live Datadog APM dashboard & monthly tuning reports",
    icon: Gauge,
  },
];

// ============================================================================
// DATA STRUCTURES: SECURITY PILLARS (MATCHES AI AGENT FORMAT)
// ============================================================================

const SECURITY_PILLARS = [
  {
    title: "Zero Enterprise Data Retention",
    desc: "Data processed ephemerally in encrypted memory. We never train public models on your proprietary business records.",
    icon: Shield,
  },
  {
    title: "Deterministic Confidence Safeguards",
    desc: "Strict numeric confidence thresholds. Low-confidence matches automatically route to human review queues.",
    icon: Scale,
  },
  {
    title: "Granular Role-Based Access (RBAC)",
    desc: "System actions inherit minimal required scopes. Write operations require verified programmatic authorization.",
    icon: Lock,
  },
  {
    title: "Cryptographic Tamper-Evident Logs",
    desc: "Every trigger, extraction decision, and API mutation is logged immutably for rapid SOC 2 and HIPAA auditing.",
    icon: FileCheck,
  },
];

// ============================================================================
// DATA STRUCTURES: 10 HUMANIZED FAQS
// ============================================================================

const FAQS = [
  {
    question: "What is the difference between traditional RPA and modern AI automation?",
    answer:
      "Traditional Robotic Process Automation (RPA) relies on rigid, rule-based scripts that execute predictable clicks on screen coordinates. If a button moves by 10 pixels or an invoice arrives in a new PDF format, traditional RPA crashes. Modern AI automation combines stateful workflow orchestrators with multimodal LLMs and computer vision. It understands context, extracts data from varying layouts, makes nuanced routing decisions, and self-heals when UI selectors change, reducing maintenance overhead by up to 90%.",
  },
  {
    question: "How long does it typically take to deploy an enterprise AI automation pipeline?",
    answer:
      "A focused, single-workflow automation (such as intelligent document extraction or automated CRM lead enrichment) is typically deployed to staging within 2 to 3 weeks and moved to production within 4 to 5 weeks. More complex multi-system enterprise workflows involving legacy ERP synchronization or multi-department approvals usually take 6 to 10 weeks, following our structured 7-stage delivery framework.",
  },
  {
    question: "How do you prevent AI hallucinations from causing business errors?",
    answer:
      "We implement a multi-layered guardrail architecture. First, we use structured schema outputs (Pydantic / JSON schema) that strictly enforce data types. Second, we apply deterministic validation rules (for example, verifying that invoice subtotal + tax = total). Third, we calibrate confidence threshold scores. If any extracted field or decision falls below the specified threshold (e.g. 95%), the workflow automatically pauses and sends an interactive approval request to a human operator.",
  },
  {
    question: "Can you automate workflows across legacy systems without modern APIs?",
    answer:
      "Yes. While we prefer modern REST, GraphQL, or webhook APIs, a significant portion of enterprise work still lives in legacy AS400, on-premise SAP GUI, desktop software, or SFTP batch drops. We use resilient headless agents, automated database Change Data Capture (CDC), and secure gateway bridges that interact with legacy systems reliably without requiring expensive core system overhauls.",
  },
  {
    question: "How do human-in-the-loop (HITL) approval gates work in practice?",
    answer:
      "When a workflow encounters an ambiguous document, a high-value purchase order, or an anomalous edge case, it generates an interactive review card delivered directly into your team's existing workspace (such as a dedicated Slack channel, Microsoft Teams, or a custom web review console). Reviewers see the original document side-by-side with the AI's extraction and confidence scores. With a single click, they can approve, correct, or reject the operation, which resumes the workflow instantly.",
  },
  {
    question: "Is our proprietary company and customer data used to train public AI models?",
    answer:
      "Never. We strictly deploy zero-data-retention enterprise API endpoints (with OpenAI, Anthropic, or Azure AI) or deploy open-weights models inside your private VPC (AWS, GCP, Azure, or on-premise). Your documents, customer records, and financial transactions are never retained, logged, or utilized for foundation model training.",
  },
  {
    question: "What compliance standards do your automated systems satisfy?",
    answer:
      "Our solutions are engineered to comply with SOC 2 Type II, HIPAA, and GDPR standards. We enforce TLS 1.3 encryption in transit, AES-256 encryption at rest, automatic PII detection and tokenization, ephemeral execution runtimes, and tamper-evident audit trails that log every event for regulatory review.",
  },
  {
    question: "What happens if a downstream third-party API goes down?",
    answer:
      "We build on durable execution engines like Temporal. Workflows are fully stateful: if a downstream API (like Salesforce or Stripe) experiences an outage, our automation engine pauses execution at that exact microstep, applies exponential backoff retries, and preserves state in persistent storage. As soon as the downstream service recovers, the workflow resumes seamlessly with zero data loss and zero duplicate operations.",
  },
  {
    question: "How do you calculate and measure the ROI of an AI automation project?",
    answer:
      "We calculate ROI across three tangible dimensions: (1) direct labor hours saved by automating repetitive data entry and triage, (2) acceleration in cycle velocity (e.g. approving loan applications in 12 minutes instead of 4 days), and (3) error reduction (eliminating costly invoicing mistakes and regulatory penalties). Most of our enterprise clients achieve full project payback within 3 to 6 months of production deployment.",
  },
  {
    question: "What ongoing maintenance and support do you provide post-deployment?",
    answer:
      "We provide continuous production monitoring, automated SLA tracking, prompt and model maintenance, and API version upgrade support. We actively monitor your pipelines for schema drift, downstream API deprecations, and model latency shifts, ensuring your automated infrastructure continues to run reliably as your business scales.",
  },
];

// ============================================================================
// MAIN VIEW COMPONENT: AiAutomationSolutions
// ============================================================================

export default function AiAutomationSolutions() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "AI Automation Solutions & Workflow Engineering",
    description:
      "Custom enterprise AI automation solutions. Intelligent document processing, CRM pipelines, support ticket triage & resilient RPA by Nexovio.",
    url: "/services/ai-automation-solutions",
    serviceType: "AI Automation Solutions",
    image: "/images/services/ai-automation/sales-operations-analytics.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Services", url: "/services" },
    { name: "AI Automation Solutions", url: "/services/ai-automation-solutions" },
  ]);

  return (
    <>
      {/* Schema.org Structured Data */}
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

      <main className="min-h-screen bg-white dark:bg-background text-slate-900 dark:text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan">

        {/* =================================================================== */}
        {/* 1. HERO SECTION WITH DUAL CTAS & JUMP LINKS                         */}
        {/* =================================================================== */}
        <section
          id="hero"
          className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/5"
        >
          {/* Subtle Ambient Aura */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-tr from-blue-600/10 via-cyan-400/15 to-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { name: "Services", url: "/services" },
                  { name: "AI Automation Solutions", url: "/services/ai-automation-solutions" },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Hero Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <AnimateOnScroll variant="fadeUp">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#1769FF]/30 bg-[#1769FF]/[0.08] text-[#1769FF] dark:text-cyan-400 shadow-xs">
                    <Zap className="w-3.5 h-3.5 animate-pulse" />
                    <span>Enterprise Workflow Automation &amp; Intelligence</span>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                    AI Automation Solutions for{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Smarter, Resilient Enterprise Workflows
                    </span>
                  </h1>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.2}>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Eliminate repetitive manual bottlenecks across document processing, CRM lead routing, financial reconciliation, and customer support triage. We engineer resilient, event-driven AI automations that connect into your existing software stack with deterministic guardrails, zero data retention, and measurable business ROI.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.25}>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    From intelligent document OCR and self-healing RPA to cross-system API orchestration and real-time contact center intelligence — we build automations designed around your team, systems, and security standards.
                  </p>
                </AnimateOnScroll>

                {/* Key Capability Badges */}
                <AnimateOnScroll variant="fadeUp" delay={0.3}>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      "Intelligent Document Processing (IDP)",
                      "Resilient Workflow RPA",
                      "CRM & Sales Pipeline Routing",
                      "Automated AP Reconciliation",
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
                      Build Your Automation Pipeline
                    </Button>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Right Column: Hero Visual Card (High Realistic Human Presence) */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <AnimateOnScroll variant="fadeLeft" delay={0.2} className="w-full">
                  <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-white/80 dark:bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                    <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[450px] lg:h-[500px] w-full bg-[#050914]">
                      <Image
                        src="/images/services/ai-automation/sales-operations-analytics.jpg"
                        alt="Enterprise operations and automation team actively analyzing real-time workflow telemetry and pipeline metrics across multiple screens"
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
              {/* Left Side Graphic Banner (Sticky on Top during Scroll - Realistic Humans) */}
              <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
                <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                  <div className="relative overflow-hidden rounded-xl h-[360px] sm:h-[440px] lg:h-[500px] w-full">
                    <Image
                      src="/images/services/ai-automation/enterprise-automation-roi-banner.jpg"
                      alt="Executive business leaders reviewing 89.5 percent automated workflow efficiency gains on an enterprise tablet in a modern office"
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
                    Make Enterprise AI Do More Than{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Answer Questions
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <div className="space-y-4 text-base text-muted leading-relaxed">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      A chatbot can respond to a prompt. A well-engineered AI automation system completes the actual work. It can ingest an invoice, extract line items, validate against database records, trigger an ERP mutation, notify the department manager in Slack, and log the audit trail.
                    </p>
                    <p>
                      That difference is what separates toy prototypes from production systems that scale. We engineer automations that bridge the gap between intelligence and business software — keeping your team, governance, data accuracy, and operational controls front and center.
                    </p>
                  </div>
                </AnimateOnScroll>

                {/* 6 Value Pillars with Left Border Slide-Down Hover */}
                <div className="space-y-3 pt-2">
                  {[
                    {
                      title: "10x Process Velocity Acceleration",
                      description: "Execute complex multi-step tasks across ERPs, CRMs, and email in seconds rather than business days.",
                    },
                    {
                      title: "Self-Healing UI & API Adaptability",
                      description: "Adaptive vision models self-heal when web portal layouts change, preventing 95% of traditional RPA breaks.",
                    },
                    {
                      title: "99.8%+ Data Extraction Accuracy",
                      description: "Multimodal LLMs parse messy PDF tables, handwritten invoices, and contracts with strict schema validation.",
                    },
                    {
                      title: "Human-in-the-Loop Safeguards",
                      description: "Confidence-scored review queues ensure sensitive financial actions and high-risk exceptions are approved by authorized leads.",
                    },
                    {
                      title: "Zero Enterprise Data Retention",
                      description: "Your proprietary documents and financial transactions are never retained or trained on public AI models.",
                    },
                    {
                      title: "Continuous Observability & SLAs",
                      description: "Real-time Datadog telemetry, latency tracing, and automated failover recovery ensure 99.98% system reliability.",
                    },
                  ].map((vp, index) => (
                    <AnimateOnScroll key={vp.title} variant="fadeUp" delay={0.1 + index * 0.05}>
                      <div className="relative overflow-hidden group flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.04] hover:translate-x-2 transition-all duration-300 shadow-xs">
                        {/* Hover: Left Accent Border Slide Down */}
                        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-cyan via-brand-bright to-brand-electric scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5 group-hover:scale-125 group-hover:text-brand-bright transition-transform duration-300" />
                        <div>
                          <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {vp.title}
                          </h3>
                          <p className="text-xs text-muted mt-0.5 leading-snug">
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
        {/* 3. WHAT IS ENTERPRISE AI AUTOMATION? (ARCHITECTURE & DEEP DIVE)      */}
        {/* =================================================================== */}
        <section id="what-is-ai-automation" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
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
                      Enterprise AI Automation?
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.15}>
                  <div className="space-y-4 text-base text-muted leading-relaxed">
                    <p>
                      Enterprise AI automation is the engineering of autonomous, event-driven workflows that combine foundation models, multimodal vision, API integrations, and stateful orchestration engines to execute complex business tasks. Unlike basic scripts or screen scrapers, modern AI automation understands context, extracts unstructured data, and self-heals when systems change.
                    </p>
                    <p>
                      The right architecture depends on the operational challenge. Some workflows require focused single-task automations with strict validation. Others require multi-system enterprise orchestration coordinating across ERPs, CRMs, and legacy software. In all cases, security boundaries, auditability, and human oversight are designed into the core architecture from day one.
                    </p>
                  </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071328] space-y-2">
                    <div className="flex items-center gap-2 text-brand-cyan">
                      <Zap className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase">Focused Single-Task Workflows</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Ideal for tightly bounded operations: invoice OCR extraction, lead enrichment, tier-1 ticket triage, and automated document generation with deterministic verification.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071328] space-y-2">
                    <div className="flex items-center gap-2 text-brand-bright">
                      <Network className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase">Multi-System Enterprise Orchestration</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Engineered for multifaceted processes: coordinating across SAP, Salesforce, Kafka message queues, customer messaging channels, and payment gateways.
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
                        { title: "Multimodal Document Extraction", desc: "Vision models and layout-aware OCR convert unstructured PDFs into strongly typed schemas." },
                        { title: "Event Streaming & Webhook Gateway", desc: "Asynchronous Kafka and Redis queues ingest events with sub-millisecond deduplication." },
                        { title: "Stateful Durable Execution", desc: "Temporal runtimes ensure workflows survive server restarts and downstream API outages." },
                        { title: "Deterministic Guardrails & Schemas", desc: "Strict schema contracts, confidence threshold checks, and mathematical parity tests." },
                        { title: "Human Supervisory Escalation", desc: "Interactive Slack and web approval queues for ambiguous or high-value actions." },
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
                        <span>Architect your custom automation infrastructure</span>
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
        {/* 4. COMPARISON TABLE: TRADITIONAL RPA VS. NEXOVIO ADAPTIVE AI         */}
        {/* =================================================================== */}
        <section id="traditional-vs-ai-automation-comparison" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="ARCHITECTURAL COMPARISON"
                title="Traditional RPA vs. Adaptive AI:"
                highlightText="What Is the Difference?"
                description="Understanding why brittle legacy screen-scraping bots fail in production, and how our multimodal event-driven architecture delivers lasting enterprise reliability."
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
                          Traditional Scripting / Static RPA
                        </th>
                        <th scope="col" className="py-4 px-6 font-bold text-brand-cyan text-xs uppercase tracking-wider font-mono w-2/5 bg-brand-cyan/5">
                          Adaptive AI Automation (Nexovio)
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
        {/* 5. OUR AI AUTOMATION SOLUTIONS (10 SERVICE CARDS)                   */}
        {/* =================================================================== */}
        <section id="services" className="bg-white dark:bg-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="OUR SERVICES"
                title="Comprehensive AI Automation"
                highlightText="Solutions &amp; Services"
                description="Explore our complete suite of AI workflow automation capabilities, designed to eliminate operational bottlenecks with verifiable reliability, legacy integration, and enterprise governance."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {AUTOMATION_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <AnimateOnScroll key={srv.id} variant="fadeUp" delay={(idx % 3) * 0.08}>
                    <Card className="relative overflow-hidden group flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.16)] hover:-translate-y-2 transition-all duration-400 rounded-2xl">
                      {/* Top Border Animate Left to Right on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />

                      <div className="space-y-4">
                        {/* Section Matched Realistic Human Image Preview */}
                        <RealisticAutomationCardImage
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
                          Workflow Automation
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
        {/* 5. PRACTICAL BUSINESS USE CASES (8 BUSINESS AREAS)                   */}
        {/* =================================================================== */}
        <section id="business-use-cases" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="PRACTICAL APPLICATIONS"
                title="Automations Built Around"
                highlightText="Real Business Use Cases"
                description="The most successful automation initiatives start with a clearly defined operational bottleneck. Explore high-impact workflows engineered across functional business units."
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
        {/* 6. HOW AUTOMATION WORKS (7-STEP EXECUTION CYCLE)                     */}
        {/* =================================================================== */}
        <section id="how-it-works" className="bg-white dark:bg-background py-16 sm:py-24 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="EXECUTION CYCLE"
                title="How AI Automations"
                highlightText="Work in Production"
                description="From receiving an event trigger to multimodal extraction, policy routing, validation, escalation, and learning — here is the closed-loop execution cycle."
                align="center"
              />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {HOW_AUTOMATION_WORKS_STEPS.map((step, idx) => {
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
        {/* 7. CORE CAPABILITIES (10 CAPABILITIES)                               */}
        {/* =================================================================== */}
        <section id="capabilities" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="ENGINEERING EXCELLENCE"
                title="Core Capabilities We Build"
                highlightText="Into Every Automation"
                description="Production automations require more than raw intelligence: they require robust state management, deterministic validation, security boundaries, and telemetry controls."
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
        {/* 9. OUR 7-STAGE DELIVERY PROCESS                                     */}
        {/* =================================================================== */}
        <section id="development-process" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="fadeUp">
              <SectionHeading
                badge="DELIVERY METHODOLOGY"
                title="Our Structured 7-Stage"
                highlightText="Automation Delivery Process"
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
                  highlightText="Production-Ready Automation"
                  description="We select proven, enterprise-grade frameworks, durable orchestrators, and private cloud primitives designed for zero downtime."
                  align="center"
                />
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {[
                  {
                    title: "Foundation Models & LLM APIs",
                    desc: "State-of-the-art multimodal reasoning via OpenAI GPT-4o, Anthropic Claude 3.5, and Google Gemini.",
                    icon: Cpu,
                  },
                  {
                    title: "Workflow & Durable Execution",
                    desc: "Stateful deterministic state machines using Temporal.io, LangGraph, and Celery / Redis Queues.",
                    icon: Workflow,
                  },
                  {
                    title: "Enterprise Connectors",
                    desc: "Bidirectional connectors for Salesforce, HubSpot, SAP ECC, ServiceNow, Jira, and Workday.",
                    icon: Terminal,
                  },
                  {
                    title: "Messaging & Streaming Bus",
                    desc: "High-throughput asynchronous streaming with Apache Kafka, Redis Streams, and AWS SQS.",
                    icon: Network,
                  },
                  {
                    title: "Cloud & Container Runtimes",
                    desc: "High-availability AWS, Azure, GCP or private VPC hosting with auto-scaling Docker and Kubernetes.",
                    icon: Server,
                  },
                  {
                    title: "Databases & State Storage",
                    desc: "PostgreSQL with pgvector, MongoDB Atlas, and Redis caching layers maintaining transactional context.",
                    icon: Layers,
                  },
                  {
                    title: "Monitoring & Observability",
                    desc: "Real-time telemetry with OpenTelemetry, LangSmith, and Datadog APM for latency and SLA compliance.",
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
                {/* Visual (Realistic Human Presence) */}
                <div className="lg:col-span-5 relative">
                  <AnimateOnScroll variant="fadeRight">
                    <div className="relative rounded-2xl border border-brand-cyan/30 bg-white dark:bg-[#071126] p-3 shadow-2xl overflow-hidden group">
                      <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[440px] w-full">
                        <Image
                          src="/images/services/ai-automation/enterprise-compliance-audit-card.jpg"
                          alt="Enterprise AI compliance specialist and security auditor inspecting access controls and audit trails on mission control monitors"
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
                      A prototype can look impressive while still being unsuitable for enterprise production. Workflow automations need controls around what they can access, what they can change, how their actions are logged, and when they must involve a human. We design these controls into the architecture rather than patching them on after deployment.
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

            {/* Why Custom AI Automation Approach */}
            <div className="pt-10 border-t border-slate-200 dark:border-white/10">
              <div className="p-8 sm:p-10 rounded-3xl border border-brand-cyan/30 bg-gradient-to-br from-white via-slate-50 to-blue-50/20 dark:from-[#071024] dark:via-[#050B1B] dark:to-[#040814] shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block">
                    STRATEGIC ADVANTAGE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Why Choose a Custom AI Automation Approach?
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed mt-2 max-w-4xl">
                    Off-the-shelf automation tools can be useful for simple triggers, but enterprise workflows often depend on proprietary documents, internal business rules, legacy ERP systems, and edge cases that generic tools fail on. Custom AI automation engineering gives you complete control over the workflow, integrations, data boundaries, permissions, and exception handling.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    "Built around your actual business process instead of a generic demo.",
                    "Connected directly to the systems your teams rely on every day.",
                    "Designed for measurable cycle-time reduction and quantified ROI.",
                    "Flexible enough to start with one bottleneck and scale across units.",
                    "Engineered for enterprise security, continuous monitoring, and audit trails.",
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

          </div>
        </section>

        {/* =================================================================== */}
        {/* 11. FREQUENTLY ASKED QUESTIONS SECTION (Standard FaqSection)        */}
        {/* =================================================================== */}
        <FaqSection
          faqs={FAQS}
          badge="COMMON QUESTIONS"
          title="Frequently Asked"
          highlightText="Questions"
          description="Clear, technically grounded answers regarding enterprise AI automation solutions, IDP document processing, CRM integrations, and security governance."
          variant="white"
        />
      </main>
    </>
  );
}
