import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Layout,
  CheckCircle2,
  GitBranch,
  Layers,
  MousePointerClick,
  Users,
  ArrowRight,
  ShieldCheck,
  FileCode2,
  Search,
  Sparkles,
  Smartphone,
  Cpu,
  Workflow,
  Eye,
  Check,
  CheckSquare,
  Shield,
  Palette,
  Terminal,
  Activity,
  Layers3,
  Rocket,
  Building2,
  ShoppingBag,
  Boxes,
  HelpCircle,
  ExternalLink,
  Lock,
  Code2,
  Clock3,
  Database,
  BarChart3,
  Component,
  SlidersHorizontal,
  ChevronRight,
  Sliders,
  Filter,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { UiUxInteractiveShowcase } from "@/components/services/UiUxInteractiveShowcase";
import { generatePageMetadata, SITE_URL } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "UI/UX Design Services | Product & Digital Experience Design",
    description:
      "Research-led UI/UX design for SaaS, web and mobile products. Get UX research, wireframes, prototypes, UI design and scalable design systems.",
    keywords: [
      "UI/UX design services",
      "UI UX design agency",
      "UX design agency",
      "UI design agency",
      "product design agency",
      "digital product design",
      "experience design agency",
      "UX research agency",
      "UX research services",
      "UX consulting",
      "usability testing",
      "SaaS UX design",
      "enterprise UX design",
      "web application UX design",
      "mobile app UX design",
      "design system services",
      "Figma design system",
      "UI component library",
      "user experience design",
      "user interface design",
      "interaction design",
      "product ux design",
      "b2b ux design agency",
      "startup ux design agency",
    ],
    path: "/services/ui-ux-design",
  }),
  title: "UI/UX Design Services | Product & Digital Experience Design | Nexovio",
};

// ==========================================
// REALISTIC UI/UX CARD IMAGE PREVIEW
// ==========================================

function RealisticUiUxCardImage({
  image,
  imageAlt,
  number,
}: {
  image: string;
  imageAlt: string;
  number: string;
}) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-slate-950 group-hover:border-brand-cyan/50 shadow-sm transition-all duration-300">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-2.5 right-2.5">
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-md">
          {number}
        </span>
      </div>
    </div>
  );
}

// ==========================================
// DATA STRUCTURES FOR UI/UX DESIGN PAGE
// ==========================================

const VALUE_PROPOSITION_PILLARS = [
  {
    icon: Search,
    title: "Understand the user before designing the interface",
    description:
      "Research and stakeholder discovery uncover real goals, pain points, daily workflows, and assumptions before laying down a single pixel.",
  },
  {
    icon: Workflow,
    title: "Simplify complex journeys",
    description:
      "Information architecture, mental modeling, and user flows turn large, dense feature sets into intuitive, logical paths with low cognitive load.",
  },
  {
    icon: Layout,
    title: "Validate concepts early",
    description:
      "Wireframes and clickable interactive prototypes expose confusing interactions and usability bottlenecks before engineering effort increases.",
  },
  {
    icon: Layers,
    title: "Design systems that scale",
    description:
      "Reusable components, Figma tokens, and documented interaction patterns support multi-platform product growth without visual inconsistency.",
  },
  {
    icon: Activity,
    title: "Design for real conditions",
    description:
      "Responsive viewport behavior, WCAG 2.1 AA accessibility, loading states, empty states, and error recovery are designed as core parts of the experience.",
  },
  {
    icon: FileCode2,
    title: "Keep design close to engineering",
    description:
      "Organized Figma files, component variants, auto-layout, and implementation behavior notes help developers build with zero guesswork or assumptions.",
  },
];

const UI_UX_SERVICES = [
  {
    number: "01",
    title: "UX Research & Personas",
    tagline: "Uncover Real Needs & Eliminate Assumptions",
    description:
      "Study user goals, stakeholder requirements, competitor experiences, and friction points to establish an evidence-based design direction.",
    keywordCluster: "UX research agency · UX research services",
    image: "/images/services/ui-ux/01-ux-research-personas.jpg",
    imageAlt: "UX research and user persona workshop documentation with empathy mapping and analytics",
    deliverables: [
      "User interview syntheses",
      "Empathy & journey maps",
      "Behavioral persona profiles",
      "Competitor heuristic benchmarking",
      "Jobs-to-be-done (JTBD) matrix",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "Information Architecture",
    tagline: "Intuitive Structure for Dense Workflows",
    description:
      "Organize content, navigation taxonomies, metadata, and functionality so users always understand where they are and what comes next.",
    keywordCluster: "information architecture · UX design",
    image: "/images/services/ui-ux/02-information-architecture.jpg",
    imageAlt: "Information architecture hierarchical sitemap tree and taxonomy model on designer monitor",
    deliverables: [
      "Hierarchical sitemaps",
      "Navigation models & menus",
      "Taxonomy & search models",
      "Content grouping schemas",
      "Card sorting validations",
    ],
    icon: Workflow,
  },
  {
    number: "03",
    title: "User Flows & Journey Mapping",
    tagline: "Frictionless Paths from First Click to Goal",
    description:
      "Map the end-to-end path from first touchpoint to goal completion, including branching decisions, error states, and drop-off prevention.",
    keywordCluster: "user flow design · user journey mapping",
    image: "/images/services/ui-ux/03-user-flows-journey-mapping.jpg",
    imageAlt: "Digital user flow and multi-step onboarding journey map on designer workstation",
    deliverables: [
      "Multi-step user journey maps",
      "Decision tree logic flows",
      "Edge-case state branching",
      "Drop-off point mitigation",
      "Conversion funnel blueprints",
    ],
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Wireframing",
    tagline: "Rapid Structural Validation Before Visual Polish",
    description:
      "Create low and medium-fidelity structural layouts that test visual hierarchy, functional placement, and ergonomics before aesthetic styling.",
    keywordCluster: "UX wireframing · wireframe design",
    image: "/images/services/ui-ux/04-ux-wireframing.jpg",
    imageAlt: "Low-fidelity UX wireframes on monitor and physical sketchpad dot grid layouts",
    deliverables: [
      "Low-fidelity structural wireframes",
      "Responsive grid alignments",
      "Visual hierarchy layouts",
      "Content density tests",
      "Form & checkout wireframes",
    ],
    icon: Layout,
  },
  {
    number: "05",
    title: "UI & Interface Design",
    tagline: "Modern, Distinct, Purposeful Aesthetics",
    description:
      "Translate validated UX structures into high-fidelity interfaces with purposeful typography, spacing scales, modern color tokens, and polished states.",
    keywordCluster: "UI design agency · user interface design",
    image: "/images/services/ui-ux/05-ui-interface-design.jpg",
    imageAlt: "High-fidelity modern SaaS UI design with dark mode analytics on studio display",
    deliverables: [
      "High-fidelity desktop & mobile UI",
      "Modern typography & color palettes",
      "Interactive element styling",
      "Micro-interaction designs",
      "Light and dark mode themes",
    ],
    icon: Palette,
  },
  {
    number: "06",
    title: "Interactive Prototyping",
    tagline: "Simulate Real Software Before Writing Code",
    description:
      "Build realistic, clickable prototypes that simulate critical workflows, complex navigation, modal overlays, form validations, and transitions.",
    keywordCluster: "interactive prototyping · UX prototype",
    image: "/images/services/ui-ux/06-interactive-prototyping.jpg",
    imageAlt: "Figma prototype interactive noodles and live mobile prototype testing on smartphone",
    deliverables: [
      "Clickable Figma prototypes",
      "Animated transition specs",
      "Stakeholder validation walkthroughs",
      "User testing simulation decks",
      "Investor-ready product demos",
    ],
    icon: MousePointerClick,
  },
  {
    number: "07",
    title: "Design Systems & Components",
    tagline: "Scalable Foundations for Growing Teams",
    description:
      "Create reusable UI components, variants, design tokens, and documentation that keep multi-platform digital products consistent over time.",
    keywordCluster: "design system services · Figma design system",
    image: "/images/services/ui-ux/07-design-systems-components.jpg",
    imageAlt: "Figma design system component library with variants, buttons, inputs, and design tokens",
    deliverables: [
      "Figma tokenized variable libraries",
      "Reusable component variants",
      "Auto-layout responsive behavior",
      "State definitions (hover/focus/etc.)",
      "Living documentation guides",
    ],
    icon: Layers,
  },
  {
    number: "08",
    title: "Usability Testing & UX Audits",
    tagline: "Identify Bottlenecks with Real Telemetry",
    description:
      "Evaluate digital products through heuristic evaluations, usability analysis, session recordings, and accessibility checks to prioritize fixes.",
    keywordCluster: "usability testing · UX audit",
    image: "/images/services/ui-ux/08-usability-testing-ux-audits.jpg",
    imageAlt: "Design and product team conducting usability testing audit with tablet and sprint board",
    deliverables: [
      "Heuristic evaluation reports",
      "Task completion rate audits",
      "Cognitive walkthrough findings",
      "Prioritized UX recommendation matrix",
      "Quick-win conversion roadmap",
    ],
    icon: ShieldCheck,
  },
  {
    number: "09",
    title: "Responsive & Mobile UX",
    tagline: "Seamless Utility Across Touch & Desktop Screens",
    description:
      "Design experiences that adapt seamlessly across desktop, tablet, and mobile displays without sacrificing clarity or task efficiency.",
    keywordCluster: "responsive UX design · mobile UX design",
    image: "/images/services/ui-ux/09-responsive-mobile-ux.webp",
    imageAlt: "Responsive mobile app UX design across touch devices with gesture-friendly navigation",
    deliverables: [
      "Mobile-first gesture architectures",
      "Touch-optimized tap targets (48px+)",
      "Adaptive breakpoint layouts",
      "Progressive disclosure patterns",
      "Bottom-sheet navigation systems",
    ],
    icon: Smartphone,
  },
  {
    number: "10",
    title: "Developer Handoff",
    tagline: "Zero Assumptions for Software Engineering",
    description:
      "Deliver organized Figma files, tokenized variables, responsive auto-layout rules, component states, and exact implementation notes.",
    keywordCluster: "Figma design handoff · developer handoff",
    image: "/images/services/ui-ux/10-developer-handoff.jpg",
    imageAlt: "Developer engineering workstation with Figma design system specifications alongside code",
    deliverables: [
      "Organized Figma team projects",
      "CSS token & variable tables",
      "Spacing scale & typography specs",
      "Interactive state matrices",
      "ARIA & semantic markup notes",
    ],
    icon: Code2,
  },
];

const PRODUCT_COVERAGE = [
  {
    title: "SaaS & Web Applications",
    icon: Boxes,
    focus:
      "Onboarding flows, complex dashboard analytics, multi-tenant navigation, permissions, forms, automated workflows, data states, and reusable components.",
    badge: "SaaS UX Design",
    metric: "Drop-off reduced up to 45%",
  },
  {
    title: "Enterprise Software",
    icon: Building2,
    focus:
      "Role-based journeys, operational workflows, approval matrices, audit reporting, enterprise search, and dense operational data comprehension.",
    badge: "Enterprise UX Design",
    metric: "3x Faster Data Processing",
  },
  {
    title: "Mobile Applications",
    icon: Smartphone,
    focus:
      "Mobile-first navigation, fluid touch interactions, responsive layouts, single-thumb task efficiency, biometric auth, and offline state handling.",
    badge: "Mobile App UX Design",
    metric: "Sub-Second Task Execution",
  },
  {
    title: "Websites & Digital Experiences",
    icon: Layout,
    focus:
      "Brand messaging hierarchy, scannable layouts, visual trust indicators, conversion-driven navigation, and high-performance lead generation paths.",
    badge: "Digital Product Design",
    metric: "Higher Time-On-Page",
  },
  {
    title: "E-Commerce Experiences",
    icon: ShoppingBag,
    focus:
      "Faceted product discovery, comparison tools, distraction-free checkout usability, customer account portals, and frictionless mobile shopping.",
    badge: "E-Commerce UX",
    metric: "+92% Conversion Lift",
  },
  {
    title: "MVP & Startup Products",
    icon: Rocket,
    focus:
      "Prioritized core user journeys, rapid prototyping, market validation sprints, and an extensible design foundation built for rapid iteration.",
    badge: "Startup UX Agency",
    metric: "6-Week Validation Sprints",
  },
  {
    title: "Dashboards & Portals",
    icon: BarChart3,
    focus:
      "Data hierarchy, filter bars, configurable tables, anomaly alerts, modular charting patterns, and role-specific executive oversight views.",
    badge: "Dashboard Architecture",
    metric: "Real-Time Telemetry Views",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover & Define",
    phase: "Phase 1: Alignment",
    description:
      "We dive deep into your product vision, commercial business goals, target user segments, existing technical constraints, and the core problem the digital experience must solve.",
    outcomes: ["Stakeholder alignment brief", "Target audience mapping", "Success metric benchmarks"],
  },
  {
    step: "02",
    title: "Research & Map",
    phase: "Phase 2: Discovery",
    description:
      "Review qualitative user needs, stakeholder requirements, competitor friction patterns, and current telemetry. We expose hidden assumptions and surface high-value opportunities.",
    outcomes: ["Journey & empathy maps", "Heuristic teardown notes", "Friction point analysis"],
  },
  {
    step: "03",
    title: "Structure & Wireframe",
    phase: "Phase 3: Architecture",
    description:
      "Create clear information architecture, user flows, and wireframes that establish visual hierarchy, content placement, and task efficiency before aesthetic polish.",
    outcomes: ["Hierarchical sitemaps", "Low & mid-fidelity wireframes", "Step-by-step user flows"],
  },
  {
    step: "04",
    title: "Design & Systemize",
    phase: "Phase 4: Interface",
    description:
      "Craft high-fidelity UI screens, responsive layout states, component variants, typography scales, color hierarchies, and tokenized design variables.",
    outcomes: ["High-fidelity Figma UI", "Design token variables", "Multi-viewport responsive layouts"],
  },
  {
    step: "05",
    title: "Prototype & Validate",
    phase: "Phase 5: Verification",
    description:
      "Connect key screens into realistic, interactive prototypes. We conduct usability walkthroughs to review and refine critical workflows before development begins.",
    outcomes: ["Clickable interactive prototypes", "User usability feedback log", "Refined workflow specs"],
  },
  {
    step: "06",
    title: "Document & Handoff",
    phase: "Phase 6: Engineering",
    description:
      "Prepare organized Figma files, reusable components, responsive rules, interaction states, and implementation notes so software engineers can build with zero ambiguity.",
    outcomes: ["Developer-ready Figma library", "CSS variable token tables", "Behavior & edge-case documentation"],
  },
];

const DESIGN_SYSTEM_ELEMENTS = [
  { title: "Design Tokens", detail: "Centralized variables for colors, typography scales, spacing units, and radius values." },
  { title: "Reusable Components", detail: "Buttons, inputs, modals, navigation bars, cards, and tables with full variant sets." },
  { title: "Responsive Layout Rules", detail: "Auto-layout grid logic and breakpoint behavior guidelines across mobile, tablet, and desktop." },
  { title: "Form & Feedback Patterns", detail: "Standardized validation messaging, loading skeletons, empty states, and toast notifications." },
  { title: "Accessibility Guidance", detail: "WCAG 2.1 AA contrast pairings, focus rings, ARIA roles, and tap target guidelines." },
  { title: "Figma Team Libraries", detail: "Shared cloud components structured with auto-layout and semantic properties for rapid reuse." },
  { title: "Engineering Documentation", detail: "Clear cross-reference documentation linking Figma tokens directly to React/Next.js CSS variables." },
];

const ACCESSIBILITY_CHECKLIST = [
  { title: "Clear Information Hierarchy", detail: "Logical heading orders (H1-H4) and legible font sizes that ease scanning." },
  { title: "WCAG Color Contrast", detail: "Minimum 4.5:1 ratio for normal body copy and 3.0:1 for graphical UI elements." },
  { title: "Keyboard Navigation Support", detail: "Explicit 2-3px visible focus rings and natural tab orders for mouse-free navigation." },
  { title: "Touch-Friendly Controls", detail: "Minimum 48x48px tap targets on mobile screens to eliminate accidental misclicks." },
  { title: "Comprehensive System States", detail: "Explicit loading skeletons, success confirmations, validation errors, and empty states." },
  { title: "Accessible Form Labels", detail: "Persistent visible labels, informative field hints, and inline error guidance." },
  { title: "Multi-Screen Responsiveness", detail: "Fluid layouts preventing horizontal overflow and text clipping on any viewport." },
  { title: "Edge-Case Resilience", detail: "Thoughtful handling of long customer names, missing data, and slow network states." },
];

const DEVELOPER_HANDOFF_STANDARDS = [
  { title: "Organized Figma Architecture", detail: "Dedicated pages for flows, components, responsive screens, and changelog notes." },
  { title: "Component Variants & Properties", detail: "Every button, input, and card utilizes Figma component properties and boolean toggles." },
  { title: "Responsive Auto-Layout", detail: "Strict use of auto-layout mimicking flexbox and CSS grid rules for 1:1 engineering parity." },
  { title: "Explicit Spacing Scales", detail: "Consistent 4px/8px incremental spacing grids eliminating arbitrary pixel margins." },
  { title: "Complete Interaction States", detail: "Default, hover, active, focus, disabled, loading, and error states mapped per element." },
  { title: "Design Token Exports", detail: "Token names matching CSS variables and Tailwind utility configurations." },
  { title: "Clickable Prototype Links", detail: "Direct links to test animated transitions and modal opening behaviors." },
  { title: "Implementation Notes", detail: "Contextual annotations describing business logic, validation rules, and edge conditions." },
];

const BRAND_POSITIONING_PILLARS = [
  {
    title: "Research-Led Thinking",
    detail: "Every interface decision originates from actual user needs, real customer workflows, and measurable business objectives — never arbitrary aesthetic trends.",
    icon: Search,
  },
  {
    title: "End-to-End Capability",
    detail: "From initial discovery interviews and wireframes to design systems and developer handoff, we maintain full accountability across the entire product lifecycle.",
    icon: Workflow,
  },
  {
    title: "Holistic Product Perspective",
    detail: "We evaluate the entire customer journey and business context rather than designing isolated, disconnected screens.",
    icon: Eye,
  },
  {
    title: "Scalable Architectural Foundations",
    detail: "Reusable Figma components, tokenized scales, and documented design systems support consistent, cost-effective product expansion.",
    icon: Layers,
  },
  {
    title: "Engineering-Aware Delivery",
    detail: "Because our designers collaborate with full-stack engineers, our Figma deliverables translate cleanly into modern frontend code without friction.",
    icon: Code2,
  },
  {
    title: "Flexible Engagement Models",
    detail: "Whether you need a rapid MVP validation sprint, a targeted feature redesign, or a complete enterprise platform overhaul, we scale to your timeline.",
    icon: Sparkles,
  },
];

const UI_UX_FAQS = [
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UX (User Experience) design focuses on how a product works, how intuitive the journey feels, and how easily users complete their goals with minimal friction. UI (User Interface) design focuses on the visual and interactive elements people see and touch, including typography, color palettes, spacing scales, button styling, and component states. High-performing digital products require both disciplines working in harmony.",
  },
  {
    question: "What does a UI/UX design agency do?",
    answer:
      "A UI/UX design agency conducts user research, defines information architecture, crafts wireframes and user flows, designs high-fidelity interfaces, builds interactive clickable prototypes, evaluates usability, and constructs reusable design systems. Engagements range from designing a single complex SaaS workflow to engineering an end-to-end digital product from scratch.",
  },
  {
    question: "Can you design complex SaaS and web applications?",
    answer:
      "Yes. SaaS and web application UI/UX is one of our primary specializations. We design frictionless onboarding flows, multi-tenant dashboards, intuitive navigation hierarchies, role-based permission settings, dense operational data tables, interactive filter systems, responsive viewport behaviors, and reusable component libraries.",
  },
  {
    question: "Do you provide mobile app UI/UX design?",
    answer:
      "Yes. Our mobile UX design services cover mobile-first information architecture, gesture-driven navigation, single-thumb task efficiency, touch-friendly tap targets (minimum 48x48px), responsive layout adapters for iOS and Android, offline state handling, and interactive clickable prototypes for user testing.",
  },
  {
    question: "Do you create scalable design systems in Figma?",
    answer:
      "Yes. We construct comprehensive, tokenized design systems in Figma utilizing auto-layout, component variants, semantic properties, typography scales, color hierarchies, and dark/light mode configurations. We document component behaviors so engineering teams can implement them with 1:1 fidelity.",
  },
  {
    question: "Do you conduct UX research and usability testing?",
    answer:
      "Yes. We offer qualitative user interviews, stakeholder discovery workshops, competitor heuristic benchmarking, behavioral persona modeling, journey mapping, cognitive walkthroughs, WCAG 2.1 AA accessibility audits, and interactive usability testing sessions to de-risk development.",
  },
  {
    question: "Can you redesign an existing website or application?",
    answer:
      "Absolutely. We begin redesign engagements with a thorough UX audit of your current platform, analyzing telemetry, heatmaps, and user drop-off points. From there, we deliver a prioritized roadmap to modernize information architecture, streamline user journeys, elevate visual aesthetics, and implement scalable design components.",
  },
  {
    question: "How do you support developers after design approval?",
    answer:
      "We bridge the gap between design and engineering. Our Figma handoff deliverables include tokenized color/spacing variables matching Tailwind or CSS schemas, responsive auto-layout structures, comprehensive interaction states (hover, active, focus, disabled), ARIA accessibility annotations, and direct communication during frontend implementation.",
  },
  {
    question: "What tools do you use for UI/UX design?",
    answer:
      "Figma is the central platform for our UI/UX workflow, used for collaborative research, wireframing, high-fidelity UI design, interactive prototyping, design system tokenization, and developer handoff. We also utilize FigJam for journey mapping and user flow diagrams.",
  },
  {
    question: "How long does a UI/UX design project take?",
    answer:
      "Timelines depend on project scope and complexity. A focused feature flow or UX audit sprint typically takes 2 to 3 weeks; a comprehensive startup MVP product design spans 4 to 8 weeks; and a complete enterprise platform or multi-application design system overhaul typically ranges from 8 to 14 weeks.",
  },
];

export default function UiUxDesignPage() {
  const serviceSchema = getServiceSchema({
    name: "UI/UX Design Services",
    description:
      "Research-led UI/UX design for SaaS, web and mobile products. Get UX research, wireframes, prototypes, UI design and scalable design systems.",
    url: "/services/ui-ux-design",
    serviceType: "ProductDesign",
  });

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "UI/UX Design Services",
        item: `${SITE_URL}/services/ui-ux-design`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* ================================================================== */}
      {/* 1. HERO SECTION                                                    */}
      {/* ================================================================== */}
      <section className="relative pt-24 sm:28 md:pt-32 lg:pt-40 pb-16 overflow-hidden border-b border-border-subtle/80">
        {/* Background Radial Glow & Futuristic Grid Lines */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Services", url: "/services" },
              { name: "UI/UX Design", url: "/services/ui-ux-design" },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/40 bg-brand-cyan/15 text-brand-cyan backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>UI/UX Design Services · Product &amp; Digital Experience</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                UI/UX Design Services That{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Make Digital Products Easier to Use
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                <p>
                  Build digital experiences that feel clear from the first click, tap, or scroll. Nexovio Digital Solutions combines UX research, product thinking, information architecture, and interface design to help people understand what a product does, find their next step, and complete important tasks with less friction.
                </p>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
                  From SaaS platforms and enterprise software to websites, dashboards, and mobile applications, our UI/UX design services connect user needs with business goals. We move from research and user flows to wireframes, interactive prototypes, high-fidelity UI, scalable design systems, and developer-ready handoff so your experience is thought through before it reaches production.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Button
                  href="/contact#quote"
                  variant="primary"
                  size="lg"
                  trackingName="uiux_hero_start_project"
                  trackingLocation="uiux_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-glow font-bold"
                >
                  Start Your UI/UX Design Project
                </Button>

              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-border-subtle grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700 dark:text-[#fff]">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Component className="h-4 w-4 text-brand-cyan shrink-0" />
                  <span>Tokenized Figma Libraries</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Clock3 className="h-4 w-4 text-brand-bright shrink-0" />
                  <span>40% Faster Dev Handoff</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <GitBranch className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span>Research-Backed Flows</span>
                </span>
              </div>
            </div>

            {/* Right Realistic Design Studio Hero Photo */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-25 blur-3xl rounded-3xl -z-10" />

              <div className="relative w-full rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-card overflow-hidden group">
                <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#040813]">
                  <Image
                    src="/images/services/ui-ux-design-studio-team.jpg"
                    alt="Realistic digital product design team collaborating on Figma design systems, wireframes, and component tokens at an executive studio workstation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. STICKY VALUE PROPOSITION SECTION (SAME AS WEB DEV & SEO PAGES)  */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Side Graphic Banner (Sticky on Top during Scroll) */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[360px] sm:h-[440px] lg:h-[500px] w-full">
                  <Image
                    src="/images/services/ui-ux-design-wireframe-process.jpg"
                    alt="UI/UX design team architecting user journeys and wireframe prototypes"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/75 via-transparent to-transparent pointer-events-none rounded-xl" />


                </div>
              </div>
            </div>

            {/* Right Side Value Proposition Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                VALUE PROPOSITION
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Turn Complex Product Ideas Into{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Clear User Experiences
                </span>
              </h2>

              <div className="space-y-4 text-base text-muted leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  When users struggle to find information, understand a workflow, or recover from an error, the problem is rarely one button or one screen.
                </p>
                <p>
                  It is usually the result of decisions that were never connected into one unified experience. Our approach looks at the whole journey so the interface, content structure, and interaction model work together.
                </p>
              </div>

              {/* 6 Value Proposition Pillars matching other service pages */}
              <div className="space-y-3 pt-2">
                {VALUE_PROPOSITION_PILLARS.map((vp) => (
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

              {/* Product-Minded Callout Banner */}
              <div className="p-4 rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 space-y-1 text-xs">
                <span className="font-bold text-brand-cyan block uppercase tracking-wider">
                  A PRODUCT-MINDED APPROACH TO UI/UX
                </span>
                <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  Good UI/UX is not decoration added at the end of a project. It is a product discipline that connects user needs with business objectives. Research informs structure, structure informs interface design, and validation helps the team make better decisions before development effort begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. OUR UI/UX DESIGN SERVICES (CARDS MATCHING OTHER PAGES)           */}
      {/* Hover Effect: TOP BORDER ANIMATE LEFT TO RIGHT + ELEVATION LIFT   */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR SERVICES"
            title="Our End-to-End"
            highlightText="UI/UX Design Services"
            description="From initial user research and journey mapping to clickable Figma prototypes and production-ready design tokens, we cover every layer of digital experience design."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {UI_UX_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Card
                  key={srv.title}
                  className="relative overflow-hidden group flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.16)] hover:-translate-y-2 transition-all duration-400 rounded-2xl"
                >
                  {/* USER REQUESTED: Top Border Animate Left to Right on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
                  <div className="space-y-4">
                    {/* Visual Graphic Mockup */}
                    <RealisticUiUxCardImage
                      image={srv.image}
                      imageAlt={srv.imageAlt}
                      number={srv.number}
                    />

                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                          Service 0{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                          {srv.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Key Deliverables:
                      </span>
                      <div className="grid grid-cols-1 gap-1.5 text-xs text-muted">
                        {srv.deliverables.map((c) => (
                          <div key={c} className="flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                            <span className="truncate">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-6 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-cyan block">
                        Keyword Focus:
                      </span>
                      <span className="text-[11px] font-mono text-muted">
                        {srv.keywordCluster}
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-cyan hover:underline"
                    >
                      <span>Inquire</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. PRODUCT-TYPE COVERAGE (SAAS, ENTERPRISE, MOBILE, DASHBOARDS)    */}
      {/* ================================================================== */}
      <section className="section-blue dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PRODUCT SPECIALIZATION"
            title="UI/UX Design for SaaS, Web Apps,"
            highlightText="Mobile Apps and Enterprise Platforms"
            description="The UX challenge changes with the product. A marketing site needs clarity and strong conversion paths. A SaaS platform needs scalable workflows. A mobile application needs efficient touch interactions. An enterprise portal needs to make dense operational information understandable. We shape the design around the context in which people actually use the product."
            align="center"
            className="max-w-4xl mx-auto mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCT_COVERAGE.map((prod) => {
              const Icon = prod.icon;
              return (
                <div
                  key={prod.title}
                  className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-7 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.14)] hover:border-brand-cyan/60 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between group"
                >
                  {/* Hover: Top-Right Radial Glow Spotlight */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan group-hover:scale-115 group-hover:rotate-6 group-hover:bg-brand-cyan/20 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                        {prod.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-cyan transition-colors">
                      {prod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {prod.focus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Design for the Product Stage Callout */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                  Design for the Product Stage
                </span>
                <p className="text-sm text-muted leading-relaxed">
                  A new product may need a focused MVP and rapid validation, while an established platform may need a UX audit, navigation redesign, or design-system overhaul. The right UX scope is the one that addresses the current product risk and creates a practical path to the next release.
                </p>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="shrink-0 font-bold shadow-glow"
              >
                Discuss Your Product Stage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. OUR 6-STEP UI/UX DESIGN PROCESS                                 */}
      {/* ================================================================== */}
      <section className="bg-white py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PROCESS &amp; METHODOLOGY"
            title="Our 6-Step"
            highlightText="UI/UX Design Process"
            description="A structured workflow designed to catch structural and usability problems while changes are still relatively easy to make, reducing avoidable rework later in development."
            align="center"
            className="max-w-3xl mx-auto mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-7 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.14)] hover:border-brand-cyan/60 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between group"
              >
                {/* Hover: Light Sheen Sweep Across Card */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-brand bg-clip-text text-transparent font-mono group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono text-muted uppercase tracking-wider group-hover:text-brand-cyan transition-colors">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-cyan transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 relative z-10">
                  <div className="text-[10px] font-mono uppercase text-brand-cyan font-semibold mb-1">
                    Key Outcomes:
                  </div>
                  {step.outcomes.map((out) => (
                    <div key={out} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Benefit Highlight Box */}
          <div className="mt-12 p-6 sm:p-7 rounded-2xl border border-blue-500/30 bg-blue-100/20 text-blue-400">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm sm:text-base font-bold text-slate-900 dark:text-white block">
                  KEY BENEFIT: Reduce Design & Development Rework
                </strong>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  We identify usability, navigation, and structural issues before they reach development. By validating the experience in Figma first, your team can make changes earlier, reduce costly redesign cycles, and move into development with greater clarity and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================== */}
      {/* 8. ACCESSIBILITY & USABILITY (WCAG 2.1 AA)                          */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ACCESSIBILITY &amp; USABILITY"
            title="Accessible, Usable Interfaces"
            highlightText="By Design (WCAG 2.1 AA)"
            description="Accessibility is part of good UX because people interact with products using different devices, abilities, and contexts. Nexovio designs with WCAG 2.1 AA considerations, including color contrast, visible focus indicators, accessible touch targets, semantic hierarchy, and keyboard navigation."
            align="center"
            className="max-w-4xl mx-auto mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCESSIBILITY_CHECKLIST.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 shadow-sm hover:border-l-4 hover:border-l-emerald-400 hover:pl-5 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500 group-hover:scale-115 group-hover:rotate-12 transition-all duration-300">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Design for Real Human Behavior */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071024] shadow-sm">
            <div className="max-w-4xl space-y-3">
              <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                Design for Real Human Behavior
              </span>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                A polished screen is only useful when people can understand it and act on it. We focus on the moments that often determine whether a product feels effortless or frustrating: first use, navigation, form completion, error recovery, repeated daily tasks, and changes in context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 9. DEVELOPER HANDOFF DEEP-DIVE                                     */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ENGINEERING HANDOFF"
            title="Developer-Ready UI/UX"
            highlightText="Handoff Without Guesswork"
            description="Design handoff should not be a folder of static screens that developers have to interpret. Nexovio emphasizes tokenized variables, responsive auto-layout, exact spacing scales, component states, and semantic accessibility notes to make implementation clear and frictionless."
            align="center"
            className="max-w-3xl mx-auto mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEVELOPER_HANDOFF_STANDARDS.map((std) => (
              <div
                key={std.title}
                className="relative overflow-hidden group rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 shadow-sm hover:shadow-[0_15px_30px_rgba(0,198,255,0.12)] hover:border-brand-cyan/60 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between"
              >
                {/* Hover: Bottom Center-Expanding Animated Border */}
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center ease-out" />

                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan group-hover:scale-115 group-hover:bg-brand-cyan/20 transition-all duration-300">
                    <FileCode2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-cyan transition-colors">
                    {std.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {std.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-brand-cyan font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Zero Ambiguity Spec</span>
                </div>
              </div>
            ))}
          </div>

          {/* Reduce Gap Between Design and Production Callout */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071024] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                  Reduce the Gap Between Design and Production
                </span>
                <p className="text-sm text-muted leading-relaxed">
                  When design and engineering share the same understanding of component behavior and responsive rules, the final product is far less likely to drift away from the intended experience. Clear handoff makes the design easier to build, review, and maintain.
                </p>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="shrink-0 font-bold shadow-glow"
              >
                Request Handoff Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 10. BRAND POSITIONING: WHY WORK WITH NEXOVIO FOR UI/UX?            */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY NEXOVIO"
            title="Why Work With Nexovio"
            highlightText="For UI/UX Design?"
            description="We bridge human psychology, brand aesthetics, and engineering execution so your product not only looks stunning but delivers verifiable business utility."
            align="center"
            className="max-w-3xl mx-auto mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BRAND_POSITIONING_PILLARS.map((brand) => {
              const Icon = brand.icon;
              return (
                <div
                  key={brand.title}
                  className="relative overflow-hidden group rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-7 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.18)] hover:border-brand-cyan/60 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between"
                >
                  {/* Hover: Bottom Border Slide Right-to-Left */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-l from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right ease-out pointer-events-none" />

                  {/* Hover: Ambient Halo Glow in Background */}
                  <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-cyan transition-colors">
                      {brand.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {brand.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-cyan relative z-10">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Nexovio Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Related Services Internal Links Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-muted font-mono font-semibold">Explore Related Capabilities:</span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
              <Link href="/services/web-design" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                Web Design Services &rarr;
              </Link>
              <Link href="/services/web-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                Web Development Services &rarr;
              </Link>
              <Link href="/services/mobile-app-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                Mobile App Development &rarr;
              </Link>
              <Link href="/services/seo-digital-marketing" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                SEO &amp; Digital Marketing &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 11. FREQUENTLY ASKED QUESTIONS (FULL-WIDTH, WHITE BACKGROUND)      */}
      {/* ================================================================== */}
      <FaqSection
        variant="white"
        faqs={UI_UX_FAQS}
        badge="COMMON QUESTIONS"
        title="Frequently Asked Questions"
        highlightText="About UI/UX Design"
        description="Clear answers regarding our UI/UX methodologies, Figma design system standards, SaaS workflows, and developer handoff protocols."
        className="pt-16 pb-12 sm:pt-20 sm:pb-16"
      />
    </div>
  );
}
