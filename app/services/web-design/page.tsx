import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Palette,
  Code2,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Server,
  Database,
  Search,
  Map,
  Rocket,
  TrendingUp,
  Globe,
  Sparkles,
  Layout,
  Smartphone,
  ShoppingBag,
  Boxes,
  Check,
  Building2,
  Users,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Home,
  Utensils,
  Stethoscope,
  PenTool,
  Lock,
  Workflow,
  CheckSquare,
  Shield,
  Gauge,
  Sliders,
  Radio,
  FileCode,
  Terminal,
  Activity,
  Maximize2,
  RefreshCw,
  ExternalLink,
  Layers3,
  Eye,
  LayoutTemplate,
  Monitor,
  MousePointer,
  Feather,
  BarChart,
  ShieldAlert,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

const service = getServiceBySlug("web-design")!;

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Web Design Services | UI/UX & Responsive Website Design | Nexovio",
    description:
      "Nexovio Digital Solutions provides modern web design and UI/UX services for businesses, startups, e-commerce brands and SaaS companies with responsive, user-focused and conversion-ready experiences.",
    keywords: [
      "web design services",
      "web design company",
      "website design services",
      "professional web design",
      "responsive web design",
      "UI/UX design services",
      "custom web design",
      "business website design",
      "website redesign services",
      "e-commerce web design",
      "SaaS web design",
      "landing page design",
      "UI design services",
      "UX design services",
      "website UI UX design",
      "mobile responsive web design",
    ],
    path: "/services/web-design",
  }),
  title: "Web Design Services | UI/UX & Responsive Website Design | Nexovio",
};

// ==========================================
// DATA STRUCTURES FOR WEB DESIGN PAGE
// ==========================================

const WEB_DESIGN_SERVICES = [
  {
    number: "01",
    title: "UI/UX Web Design",
    description:
      "Create intuitive interfaces that make your website easier to understand, navigate, and use.",
    items: [
      "User flows",
      "Wireframes",
      "Page layouts",
      "UI design",
      "Interactive prototypes",
      "Responsive interfaces",
    ],
    icon: Layout,
  },
  {
    number: "02",
    title: "Business Website Design",
    description:
      "Build a professional digital presence that communicates your services, expertise, brand, and value clearly.",
    items: [
      "Corporate websites",
      "Business websites",
      "Startup websites",
      "Agency websites",
      "Service websites",
      "Professional websites",
    ],
    icon: Building2,
  },
  {
    number: "03",
    title: "Landing Page Design",
    description:
      "Design focused landing experiences that guide visitors toward a specific action.",
    items: [
      "Lead generation",
      "Campaign pages",
      "Product launches",
      "Service promotions",
      "Paid advertising",
      "Event registration",
    ],
    icon: Rocket,
  },
  {
    number: "04",
    title: "E-commerce Web Design",
    description:
      "Create shopping experiences that make product discovery, evaluation, and purchasing easier.",
    items: [
      "Product pages",
      "Category pages",
      "Product filters",
      "Shopping cart",
      "Checkout",
      "Customer accounts",
    ],
    icon: ShoppingBag,
  },
  {
    number: "05",
    title: "SaaS & Technology Design",
    description:
      "Make complex products easier to understand through clear content, structured interfaces, and modern visual systems.",
    items: [
      "SaaS websites",
      "Product pages",
      "Feature sections",
      "Pricing pages",
      "Product interfaces",
      "Interactive experiences",
    ],
    icon: Cpu,
  },
  {
    number: "06",
    title: "Web Application UI/UX",
    description:
      "Design functional interfaces for platforms where users need to perform tasks and manage information.",
    items: [
      "Dashboards",
      "Customer portals",
      "Admin panels",
      "Booking platforms",
      "Workflow systems",
      "Business applications",
    ],
    icon: Layers,
  },
];

const DESIGN_FOUNDATION_PILLARS = [
  {
    title: "Brand Direction",
    description:
      "Understand your existing visual identity and translate it into a consistent digital experience.",
    icon: Palette,
  },
  {
    title: "Information Architecture",
    description:
      "Organize pages, content, navigation, and information into a structure that makes sense to users.",
    icon: Workflow,
  },
  {
    title: "User Journeys",
    description:
      "Understand how visitors should move from discovering your business to taking action.",
    icon: Map,
  },
  {
    title: "Content Hierarchy",
    description:
      "Determine what users should see first, what they need next, and what information supports their decision.",
    icon: LayoutTemplate,
  },
  {
    title: "Conversion Structure",
    description:
      "Position important calls to action and trust elements where they naturally support the customer journey.",
    icon: TrendingUp,
  },
  {
    title: "Responsive Planning",
    description:
      "Design layouts and interactions with desktop, tablet, and mobile experiences in mind from the beginning.",
    icon: Smartphone,
  },
];

const UI_UX_STEPS = [
  {
    title: "User Research & Understanding",
    description:
      "Identify your audience, their expectations, problems, motivations, and website requirements.",
  },
  {
    title: "User Flow Planning",
    description:
      "Map the steps users need to take to find information, explore services, submit an enquiry, or complete an action.",
  },
  {
    title: "Wireframing",
    description:
      "Create structural layouts before detailed visual design to establish hierarchy and functionality.",
  },
  {
    title: "Interface Design",
    description:
      "Transform the approved structure into a polished visual experience.",
  },
  {
    title: "Prototyping",
    description:
      "Connect important screens and interactions so the experience can be reviewed before development.",
  },
  {
    title: "Usability Refinement",
    description:
      "Identify unnecessary friction and refine navigation, layouts, forms, and interactions.",
  },
];

const WIREFRAME_POINTS = [
  "Structure",
  "Content placement",
  "Navigation",
  "Sections",
  "CTA locations",
  "User flows",
];

const PROTOTYPE_POINTS = [
  "Navigation",
  "Menus",
  "Hover states",
  "Forms",
  "Sliders",
  "Interactions",
  "Page transitions",
];

const DESIGN_SYSTEM_ELEMENTS = [
  {
    name: "Typography",
    desc: "Font families, sizes, weights, line heights, and content hierarchy.",
    icon: Feather,
  },
  {
    name: "Colors",
    desc: "Primary, secondary, background, text, border, and interactive states.",
    icon: Palette,
  },
  {
    name: "Buttons",
    desc: "Primary, secondary, outline, text, hover, active, and disabled states.",
    icon: MousePointer,
  },
  {
    name: "Cards",
    desc: "Reusable layouts for services, products, features, testimonials, and content.",
    icon: Layout,
  },
  {
    name: "Forms",
    desc: "Inputs, labels, dropdowns, validation, error states, and success states.",
    icon: CheckSquare,
  },
  {
    name: "Navigation",
    desc: "Header, menus, mobile navigation, breadcrumbs, and footer patterns.",
    icon: Map,
  },
  {
    name: "Components",
    desc: "Reusable UI elements that help maintain consistency as the website grows.",
    icon: Boxes,
  },
];

const RESPONSIVE_DEVICES = [
  {
    title: "Desktop Experience",
    desc: "Create spacious layouts, strong visual hierarchy, intuitive navigation, and engaging interactions.",
    icon: Monitor,
  },
  {
    title: "Tablet Experience",
    desc: "Adapt content, grids, navigation, and components to medium-sized screens.",
    icon: Layout,
  },
  {
    title: "Mobile Experience",
    desc: "Prioritize readable content, simple navigation, touch-friendly interactions, and focused calls to action.",
    icon: Smartphone,
  },
];

const CONVERSION_ELEMENTS = [
  {
    title: "Clear Calls to Action",
    description: "Help visitors understand the next step.",
  },
  {
    title: "Trust Signals",
    description: "Use testimonials, case studies, credentials, reviews, statistics, and other relevant proof.",
  },
  {
    title: "Content Hierarchy",
    description: "Present the most important information before secondary details.",
  },
  {
    title: "Lead Forms",
    description: "Keep enquiry experiences clear and focused.",
  },
  {
    title: "Service Discovery",
    description: "Make it easier for users to find the services relevant to them.",
  },
  {
    title: "Customer Journey",
    description: "Guide visitors naturally from awareness to consideration and action.",
  },
];

const PERFORMANCE_FACTORS = [
  {
    title: "Optimized Visuals",
    desc: "Plan image dimensions, formats, and placement appropriately.",
  },
  {
    title: "Efficient Components",
    desc: "Avoid unnecessary visual complexity where it doesn't contribute to the experience.",
  },
  {
    title: "Controlled Animation",
    desc: "Use motion intentionally instead of adding animations simply for decoration.",
  },
  {
    title: "Responsive Assets",
    desc: "Consider different screen sizes when planning visual media.",
  },
  {
    title: "Content Prioritization",
    desc: "Ensure important content remains clear and accessible without excessive visual elements.",
  },
];

const SEO_DESIGN_POINTS = [
  {
    title: "Content Hierarchy",
    desc: "Organize information so important topics are easy to identify.",
  },
  {
    title: "Navigation",
    desc: "Create clear paths between relevant pages.",
  },
  {
    title: "Internal Linking",
    desc: "Make related content discoverable through logical page relationships.",
  },
  {
    title: "Mobile Usability",
    desc: "Ensure important content and interactions remain usable on smaller screens.",
  },
  {
    title: "Readability",
    desc: "Use appropriate typography, spacing, and content structure.",
  },
  {
    title: "Search-Friendly Structure",
    desc: "Design page layouts that can be implemented using proper headings, semantic content, metadata, and technical SEO practices during development.",
  },
];

const BRAND_ELEMENTS = [
  "Typography",
  "Colors",
  "Photography",
  "Icons",
  "Illustrations",
  "Graphics",
  "Shapes",
  "UI components",
  "Motion",
  "Content presentation",
];

const CREATIVE_EXPERIENCES = [
  {
    title: "Interactive Hero Sections",
    desc: "Create a strong first impression with meaningful visual interaction.",
  },
  {
    title: "Product Visualizations",
    desc: "Present products and digital products through engaging interfaces.",
  },
  {
    title: "Scroll Experiences",
    desc: "Use controlled scrolling to reveal information progressively.",
  },
  {
    title: "Interactive Cards",
    desc: "Add useful interaction to service, feature, or product content.",
  },
  {
    title: "Motion & Micro-Interactions",
    desc: "Use subtle movement to communicate interaction and feedback.",
  },
  {
    title: "Visual Storytelling",
    desc: "Combine content, imagery, UI elements, and structure to explain your business.",
  },
];

const REDESIGN_AREAS = [
  "Visual presentation",
  "Navigation",
  "Content hierarchy",
  "Mobile experience",
  "User journeys",
  "Conversion opportunities",
  "Brand consistency",
  "Interface consistency",
  "Modern interaction patterns",
];

const BUSINESS_MODELS = [
  {
    title: "Startups",
    desc: "Clear positioning, product explanation, trust building, and conversion-focused experiences.",
    icon: Rocket,
  },
  {
    title: "SaaS & Technology",
    desc: "Complex products explained through simple, structured digital experiences.",
    icon: Cpu,
  },
  {
    title: "E-commerce",
    desc: "Product discovery, comparison, shopping, checkout, and customer journeys.",
    icon: ShoppingBag,
  },
  {
    title: "Professional Services",
    desc: "Credibility, expertise, services, case studies, and enquiry experiences.",
    icon: Briefcase,
  },
  {
    title: "Corporate Businesses",
    desc: "Structured information, organizational content, industries, capabilities, and trust.",
    icon: Building2,
  },
  {
    title: "Creative Businesses",
    desc: "Portfolio presentation, storytelling, visual identity, and distinctive interactions.",
    icon: PenTool,
  },
];

const DELIVERABLE_GROUPS = [
  {
    category: "Strategy",
    items: ["Website goals", "Audience understanding", "Content structure", "User journeys"],
  },
  {
    category: "UX",
    items: ["Sitemap", "Information architecture", "User flows", "Wireframes"],
  },
  {
    category: "UI",
    items: ["High-fidelity screens", "Responsive layouts", "Design components", "Typography", "Color systems"],
  },
  {
    category: "Prototype",
    items: ["Interactive flows", "Navigation", "Interactions", "States"],
  },
  {
    category: "Design System",
    items: ["Buttons", "Forms", "Cards", "Navigation", "Components", "Responsive rules"],
  },
  {
    category: "Development Handoff",
    items: ["Organized design files", "Assets", "Specifications", "Interaction details", "Responsive behavior"],
  },
];

const DEV_FEASIBILITY_POINTS = [
  "Responsive behavior",
  "Reusable components",
  "Content variations",
  "Dynamic content",
  "CMS requirements",
  "Animation feasibility",
  "Image requirements",
  "Interactive states",
  "Form states",
  "Technical limitations",
];

const DESIGN_QA_CHECKS = [
  {
    title: "Visual Consistency",
    desc: "Spacing, typography, colors, cards, buttons, and components.",
  },
  {
    title: "Responsive Behavior",
    desc: "Desktop, tablet, and mobile layouts.",
  },
  {
    title: "Interactions",
    desc: "Hover, focus, active, loading, error, and success states.",
  },
  {
    title: "Content",
    desc: "Headings, paragraphs, images, icons, and visual hierarchy.",
  },
  {
    title: "Navigation",
    desc: "Menus, breadcrumbs, links, and important user journeys.",
  },
  {
    title: "Forms",
    desc: "Input layouts, validation, error messaging, and completion states.",
  },
];

const FULL_PROCESS_STEPS = [
  { step: "01", title: "Discover", desc: "Understand your business, audience, brand, competitors, and objectives." },
  { step: "02", title: "Research", desc: "Explore customer expectations, industry patterns, existing website issues, and opportunities." },
  { step: "03", title: "Structure", desc: "Build the sitemap, information architecture, content hierarchy, and user flows." },
  { step: "04", title: "Wireframe", desc: "Plan the layout and functionality before visual design." },
  { step: "05", title: "Design", desc: "Create the complete visual interface, components, interactions, and responsive layouts." },
  { step: "06", title: "Prototype", desc: "Connect screens and demonstrate important interactions." },
  { step: "07", title: "Refine", desc: "Review feedback and improve the experience." },
  { step: "08", title: "Develop", desc: "Transform the approved design into a working website." },
  { step: "09", title: "QA", desc: "Review the implementation for functionality, responsiveness, and visual consistency." },
  { step: "10", title: "Launch", desc: "Prepare the final website for production and launch." },
];

const TECH_ECOSYSTEM = [
  { title: "UI/UX", items: "Figma, wireframes, prototypes, design systems", icon: Layout },
  { title: "Frontend", items: "React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS", icon: Code2 },
  { title: "CMS", items: "WordPress and suitable content management platforms", icon: Globe },
  { title: "Web Platforms", items: "Custom websites, e-commerce platforms, SaaS interfaces, dashboards, and web applications", icon: Layers },
  { title: "Integrations", items: "APIs, payment gateways, analytics, CRM systems, marketing platforms, authentication systems, and other business tools", icon: Boxes },
];

const WHY_NEXOVIO_DESIGN = [
  { title: "Business-Focused Design", desc: "We connect design decisions to your actual business objectives." },
  { title: "User-Centered Experiences", desc: "We design around how customers navigate, understand, and interact with your website." },
  { title: "Conversion-Aware", desc: "We consider where and why users should take action." },
  { title: "Responsive by Default", desc: "Desktop, tablet, and mobile experiences are planned together." },
  { title: "Development-Aware", desc: "Our designs consider real development requirements." },
  { title: "Scalable Systems", desc: "Reusable components help your website remain consistent as it grows." },
  { title: "Modern Visual Direction", desc: "We combine contemporary design patterns with your unique brand identity." },
  { title: "Collaborative Process", desc: "Your feedback is incorporated throughout the appropriate stages of the project." },
];

export default function WebDesignPage() {
  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.shortDescription,
    url: "/services/web-design",
    serviceType: "DesignServices",
  });

  return (
    <div className="bg-background overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO BANNER SECTION (Dark/Gradient Hero Background) */}
      <section className="pt-24 sm:pt-28 pb-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", url: "/services" },
              { name: "Web Design", url: `/services/${service.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-4">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright" />
                <span>NEXOVIO WEB DESIGN SERVICES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.14]">
                Web Design That Turns Your Brand Into a{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Digital Experience
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                <p className="font-medium text-md text-slate-900 dark:text-white">
                  Your website should do more than look professional. It should help people understand your business, trust your brand, explore your services, and take action.
                </p>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  Nexovio Digital Solutions creates modern, responsive, user-focused web designs that combine visual impact, intuitive UX, strong content hierarchy, and conversion-focused experiences. From business websites and landing pages to e-commerce stores, SaaS platforms, and custom web interfaces, we design digital experiences around your customers and business goals.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  trackingName="web_design_start_project"
                  trackingLocation="service_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow"
                >
                  Design Your Website
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  trackingName="web_design_talk_team"
                  trackingLocation="service_hero"
                  className="w-full sm:w-auto"
                >
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Right Side Image Banner (50% Width Both Sides) */}
            <div className="lg:col-span-6 relative flex items-center justify-center h-full">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[400px] sm:h-[460px] lg:h-[520px] w-full">
                  <Image
                    src="/images/services/web-design-digital-experience-team.webp"
                    alt="Web designer creating modern responsive digital experiences"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/70 via-transparent to-transparent pointer-events-none rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO / SPLIT SECTION (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side Custom Design Visual Frame */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] shadow-xl space-y-4 text-left w-full">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Palette className="w-4 h-4 text-brand-cyan" /> Purposeful Web Design Matrix
                  </span>
                  <span className="text-[10px] font-mono text-emerald-500 font-bold">100% User Centric</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-surface/80 border border-slate-200 dark:border-white/10 space-y-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">01. Intuitive Navigation & Layout</span>
                    <p className="text-[11px] text-muted">Clear information architecture guiding visitors effortessly.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-surface/80 border border-slate-200 dark:border-white/10 space-y-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">02. Visual Identity & Contrast</span>
                    <p className="text-[11px] text-muted">Consistent brand typography, palette, and component design.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-surface/80 border border-slate-200 dark:border-white/10 space-y-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">03. Conversion Funnel Optimization</span>
                    <p className="text-[11px] text-muted">Strategic CTA placements that turn visitors into inquiries.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                DESIGN WITH PURPOSE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                A Website Should Look Good. A Great Website Should Work.
              </h2>
              <div className="space-y-4 text-base text-muted leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Your website is often the first interaction customers have with your business.
                </p>
                <p>
                  A strong design needs to communicate your value quickly while making it easy for visitors to find information, understand your services, trust your brand, and take the next step.
                </p>
                <p className="text-sm font-medium text-brand-cyan italic">
                  At Nexovio, we combine UI design, UX thinking, responsive layouts, content hierarchy, interaction design, and conversion principles to create websites that are both visually distinctive and practical to use.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <h3 className="text-xs font-mono font-bold text-brand-bright uppercase tracking-widest">
                  WE DESIGN EXPERIENCES AROUND:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Your business objectives",
                    "Your target audience",
                    "Customer expectations",
                    "Your brand identity",
                    "Your content",
                    "Conversion opportunities",
                    "Mobile & desktop experiences",
                    "Future development",
                  ].map((item) => (
                    <div
                      key={item}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070F22] flex items-center gap-2 shadow-xs"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span className="text-xs font-semibold text-slate-900 dark:text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR WEB DESIGN SERVICES (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHAT WE DESIGN"
            title="Web Design Services Built Around Your"
            highlightText="Digital Goals"
            description="From the first wireframe to the final interface, we design every important part of your website experience."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {WEB_DESIGN_SERVICES.map((srv) => {
              const SrvIcon = srv.icon;
              return (
                <div
                  key={srv.number}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#071226] space-y-4 hover:border-brand-cyan/40 transition-colors shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                        <SrvIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {srv.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                      Includes:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-muted">
                      {srv.items.map((it) => (
                        <div key={it} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
                          <span className="truncate">{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DESIGN FOUNDATION (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DESIGN FOUNDATION"
            title="From Business Requirements to a"
            highlightText="Clear Visual Direction"
            description="Great design starts before the first visual component is created. We establish the foundation of your website by understanding your business, audience, content, and objectives."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {DESIGN_FOUNDATION_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071226] space-y-3 hover:border-brand-cyan/40 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-bright">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. UI/UX DESIGN PROCESS (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="UI/UX DESIGN"
            title="Designing Interfaces People"
            highlightText="Can Understand"
            description="A modern website should not make visitors work to understand it. Our UI/UX approach focuses on clarity, consistency, usability, and purposeful interactions."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {UI_UX_STEPS.map((step, idx) => (
              <div
                key={step.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-surface/80 space-y-3 hover:border-brand-cyan/40 transition-colors shadow-sm"
              >
                <span className="text-xs font-mono font-bold text-brand-cyan">
                  STEP 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WIREFRAMES & PROTOTYPES (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PLAN BEFORE YOU BUILD"
            title="See Your Website Before"
            highlightText="Development Begins"
            description="A finished visual design doesn't always show how a website behaves. Wireframes and interactive prototypes help you understand the experience before development starts."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Wireframes */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] space-y-4 shadow-md">
              <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                01. STRUCTURAL BLUEPRINTS
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Wireframes</h3>
              <p className="text-xs text-muted leading-relaxed">
                Low-fidelity layouts focusing purely on hierarchy, layout, and content placement without visual distraction.
              </p>
              <div className="pt-2 space-y-2">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Key Focus Areas:</span>
                <div className="grid grid-cols-2 gap-1.5 text-xs text-muted">
                  {WIREFRAME_POINTS.map((pt) => (
                    <div key={pt} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* High-Fidelity Designs */}
            <div className="p-6 rounded-2xl border border-brand-cyan/40 bg-white dark:bg-[#07122a] space-y-4 shadow-lg relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                Visual Polish
              </div>
              <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                02. COMPLETE INTERFACE
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">High-Fidelity Designs</h3>
              <p className="text-xs text-muted leading-relaxed">
                Transform the approved structural wireframe into a complete, pixel-perfect visual interface matching your brand identity.
              </p>
              <div className="pt-2 text-xs text-muted space-y-2">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Includes:</p>
                <p>Full typography scaling, color tokens, image styles, icon systems, and polished UI component states.</p>
              </div>
            </div>

            {/* Interactive Prototypes */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] space-y-4 shadow-md">
              <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                03. TACTILE BEHAVIOR
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Interactive Prototypes</h3>
              <p className="text-xs text-muted leading-relaxed">
                Clickable Figma prototypes demonstrating real page flows and micro-interactions before code execution.
              </p>
              <div className="pt-2 space-y-2">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Demonstrates:</span>
                <div className="grid grid-cols-2 gap-1.5 text-xs text-muted">
                  {PROTOTYPE_POINTS.map((pt) => (
                    <div key={pt} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DESIGN SYSTEM (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DESIGN SYSTEMS"
            title="Build a Consistent Visual Language Across"
            highlightText="Your Website"
            description="A website becomes easier to use when visual patterns remain consistent. We create reusable systems that keep your brand coherent as it grows."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {DESIGN_SYSTEM_ELEMENTS.map((el) => {
              const ElIcon = el.icon;
              return (
                <div
                  key={el.name}
                  className="p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#071226] space-y-2 hover:border-brand-cyan/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <ElIcon className="w-4 h-4 text-brand-cyan shrink-0" />
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {el.name}
                    </h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {el.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. RESPONSIVE WEB DESIGN (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DESIGNED FOR EVERY SCREEN"
            title="One Website."
            highlightText="Every Screen."
            description="Your customers can discover your business from desktops, laptops, tablets, and smartphones. Your design should adapt without losing its purpose."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {RESPONSIVE_DEVICES.map((dev) => {
              const DevIcon = dev.icon;
              return (
                <div
                  key={dev.title}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071226] space-y-3 text-center shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mx-auto">
                    <DevIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {dev.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {dev.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CONVERSION-FOCUSED DESIGN (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DESIGN THAT DRIVES ACTION"
            title="Design Every Important Interaction"
            highlightText="With a Purpose"
            description="A visually impressive website isn't enough if visitors don't know what to do next. We consider conversion opportunities throughout the experience."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {CONVERSION_ELEMENTS.map((ce) => (
              <div
                key={ce.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#071226] space-y-2 hover:border-brand-cyan/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-cyan shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {ce.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {ce.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PERFORMANCE-AWARE DESIGN (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DESIGN FOR PERFORMANCE"
            title="Beautiful Experiences Without"
            highlightText="Unnecessary Weight"
            description="Design decisions directly influence website performance. We consider loading speed and resource delivery while designing visual assets."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PERFORMANCE_FACTORS.map((pf) => (
              <div
                key={pf.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071226] space-y-2 hover:border-brand-cyan/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-cyan shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {pf.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {pf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SEO-FRIENDLY WEB DESIGN (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DESIGN WITH SEO IN MIND"
            title="Design That Gives Your SEO Strategy a"
            highlightText="Strong Foundation"
            description="SEO isn't only about keywords and backlinks. Website design influences how users discover, navigate, understand, and interact with your content."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {SEO_DESIGN_POINTS.map((sdp) => (
              <div
                key={sdp.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#071226] space-y-2 hover:border-brand-cyan/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-brand-cyan shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {sdp.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {sdp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BRAND EXPERIENCE (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="YOUR BRAND, YOUR EXPERIENCE"
            title="Turn Your Brand Identity Into a Website"
            highlightText="People Remember"
            description="Your website should feel connected to your brand. We translate your identity into digital elements that leave a lasting impression."
            align="center"
          />

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto mt-12">
            {BRAND_ELEMENTS.map((elem) => (
              <div
                key={elem}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070F22] flex items-center gap-2 shadow-xs"
              >
                <Palette className="w-4 h-4 text-brand-cyan" />
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {elem}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CREATIVE VISUAL EXPERIENCES (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CREATIVE DIRECTION"
            title="Go Beyond Standard"
            highlightText="Website Sections"
            description="Modern websites don't have to look like a collection of identical templates. Depending on your brand and audience, we explore creative experiences."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {CREATIVE_EXPERIENCES.map((ce) => (
              <div
                key={ce.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#071226] space-y-2 hover:border-brand-cyan/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-bright shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {ce.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {ce.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. WEBSITE REDESIGN (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                REDESIGN & MODERNIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Give an Outdated Website a New Digital Direction
              </h2>
              <div className="space-y-4 text-base text-muted leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Your business may have changed while your website stayed the same.
                </p>
                <p>
                  We review what is already working, identify friction points, and determine what should be improved rather than redesigning everything without purpose.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-xs font-mono font-bold text-brand-bright uppercase tracking-widest">
                KEY IMPROVEMENT AREAS:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {REDESIGN_AREAS.map((ra) => (
                  <div
                    key={ra}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070F22] flex items-center gap-2.5 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      {ra}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. WEB DESIGN FOR DIFFERENT BUSINESS TYPES (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DESIGNED FOR YOUR BUSINESS"
            title="Design Experiences Around Your"
            highlightText="Business Model"
            description="Different businesses require tailored design strategies to communicate value and convert visitors."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {BUSINESS_MODELS.map((bm) => {
              const BmIcon = bm.icon;
              return (
                <div
                  key={bm.title}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#071226] space-y-3 hover:border-brand-cyan/40 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <BmIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {bm.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {bm.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. WEB DESIGN DELIVERABLES (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHAT YOU GET"
            title="From Strategy to"
            highlightText="Development-Ready Design"
            description="Depending on the project scope, our web design deliverables provide complete clarity for your business and engineering teams."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {DELIVERABLE_GROUPS.map((dg) => (
              <div
                key={dg.category}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] space-y-4 shadow-sm"
              >
                <h3 className="text-lg font-bold text-brand-cyan border-b border-slate-100 dark:border-white/10 pb-2">
                  {dg.category}
                </h3>
                <div className="space-y-2">
                  {dg.items.map((it) => (
                    <div key={it} className="flex items-center gap-2 text-xs text-muted">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. DESIGN + DEVELOPMENT (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                BUILT TO BECOME REAL
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Design That Developers Can Actually Build
              </h2>
              <div className="space-y-4 text-base text-muted leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  A design shouldn't look perfect only inside a design tool. We consider real implementation requirements while designing.
                </p>
                <p>
                  Because Nexovio also provides web development, the design and development process can be aligned from the beginning.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-xs font-mono font-bold text-brand-bright uppercase tracking-widest">
                FEASIBILITY CONSIDERATIONS:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DEV_FEASIBILITY_POINTS.map((fp) => (
                  <div
                    key={fp}
                    className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-surface/80 flex items-center gap-2"
                  >
                    <Code2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      {fp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. QUALITY & DESIGN QA (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DESIGN QUALITY"
            title="Every Detail Matters"
            highlightText="Before Launch"
            description="After implementation, the developed website can be compared with the approved design to ensure fidelity across every screen."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {DESIGN_QA_CHECKS.map((qa) => (
              <div
                key={qa.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071226] space-y-2 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {qa.title}
                  </h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {qa.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19. OUR WEB DESIGN PROCESS (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="HOW WE WORK"
            title="From Idea to Finished"
            highlightText="Digital Experience"
            description="A structured 10-step design process ensuring clear feedback, predictable timelines, and exceptional visual outcomes."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            {FULL_PROCESS_STEPS.map((ps) => (
              <div
                key={ps.step}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-surface/80 space-y-2 text-left"
              >
                <span className="text-xs font-mono font-bold text-brand-cyan">
                  {ps.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {ps.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {ps.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 20. TECHNOLOGIES & DESIGN ECOSYSTEM (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DESIGN + TECHNOLOGY"
            title="Design With the Technology"
            highlightText="Behind It in Mind"
            description="Our design workflow supports modern web technologies and software frameworks seamlessly."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {TECH_ECOSYSTEM.map((eco) => {
              const EcoIcon = eco.icon;
              return (
                <div
                  key={eco.title}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071226] space-y-3 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <EcoIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {eco.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed font-mono">
                    {eco.items}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 21. WHY NEXOVIO (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY NEXOVIO"
            title="Why Businesses Choose Nexovio"
            highlightText="for Web Design"
            description="We combine business strategy, UI aesthetics, UX principles, and responsive engineering into a disciplined design service."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {WHY_NEXOVIO_DESIGN.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#071226] space-y-2 hover:border-brand-cyan/40 transition-colors shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                  {reason.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 22. FREQUENTLY ASKED QUESTIONS (FaqSection with built-in section-blue) */}
      <FaqSection faqs={service.faqs} />
    </div>
  );
}
