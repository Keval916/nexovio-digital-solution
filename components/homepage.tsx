"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Cpu,
  Zap,
  CheckCircle2,
  Compass,
  LineChart,
  Code2,
  Palette,
  Layout,
  Smartphone,
  TrendingUp,
  Check,
  Search,
  Layers,
  ShieldCheck,
  Building2,
  ShoppingBag,
  Briefcase,
  Rocket,
  Server,
  ChevronDown,
  Map,
  Bot,
  MessageSquare,
  Globe,
  Sliders,
  Boxes,
  Target,
  Users,
  CheckCircle,
  Eye,
  Flame,
  RefreshCw,
  BarChart,
  ExternalLink,
  Plus,
  Minus,
  HelpCircle,
  Send,
  Database,
  Network,
  Lightbulb,
  X,
} from "lucide-react";

import { GLOBAL_FAQS } from "@/data/faqs";
import { getFaqSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll, GSAPSection } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

// ==========================================
// DATA CONSTANTS & COLLECTIONS
// ==========================================

const HERO_SLIDES = [
  {
    badge: "Powered by Nexovio Core Architecture • Production Ready",
    titleHighlight: "Turn Business Goals",
    subtitle:
      "Strategy-led web engineering, responsive product design, & intelligent workflow automation built for scalable growth.",
  },
  {
    badge: "AI Solutions & Practical Agent Workflows",
    titleHighlight: "Smarter Workflows",
    subtitle:
      "Embed generative models, automated agents, intelligent search, & decision systems into your existing products.",
  },
  {
    badge: "SEO & Compound Digital Visibility",
    titleHighlight: "Measurable Outcomes",
    subtitle:
      "Connect technical search foundations, content strategy, & conversion optimization to turn visitors into customers.",
  },
];

const TYPEWRITER_PHRASES = [
  "AI-Powered Web Apps",
  "High-Converting Websites",
  "Scalable Digital Products",
  "Intelligent Business Automation",
  "Custom Software Solutions",
];

const VALUE_CARDS = [
  {
    pillarLabel: "Step 01 Foundation",
    icon: Target,
    title: "Strategy before execution",
    description:
      "Before you pick your build approach, clarify the business objective, users, workflows, technology constraints, and success measures.",
  },
  {
    pillarLabel: "Human-Centered",
    icon: Users,
    title: "Design that respects the user",
    description:
      "Avoid adding complexity for the sake of it and instead create clear journeys, interfaces and content structures.",
  },
  {
    pillarLabel: "Scalable Architecture",
    icon: Zap,
    title: "Technology built for growth",
    description:
      "Select modern frameworks and platforms that are appropriate for the product, performance requirements and long-term maintainability.",
  },
  {
    pillarLabel: "Search-Optimized",
    icon: TrendingUp,
    title: "Visibility that compounds",
    description:
      "Technical SEO, quality content and digital marketing working in concert so great digital experiences can be found.",
  },
  {
    pillarLabel: "Practical AI",
    icon: Cpu,
    title: "AI where it adds real value",
    description:
      "Automate, intelligent search, assistants and AI-driven workflows to solve a specific business problem—not just to slap an AI label on it.",
  },
  {
    pillarLabel: "Full-Cycle Continuity",
    icon: Layers,
    title: "One connected delivery",
    description:
      "Ensure strategy, design, engineering, analytics and growth are aligned so teams are not left to bolt together disconnected solutions.",
  },
];

const SERVICES_DATA = [
  {
    title: "Web Development",
    slug: "web-development",
    copy: "Develop high performing, scalable, and secure websites, web applications, client portals, SaaS solutions, and e-commerce platforms utilizing modern, product-appropriate technology.",
    href: "/services/web-development",
    icon: Code2,
    tags: ["SaaS & Portals", "Next.js & React", "APIs & Microservices", "Performant Code"],
    mockup: "/images/services/web-development-mockup.svg",
  },
  {
    title: "Web Design",
    slug: "web-design",
    copy: "Design bespoke visual identity and responsive page experiences that clearly communicate value, generate trust, and lead users to the most important activities.",
    href: "/services/web-design",
    icon: Palette,
    tags: ["Custom Design", "Responsive Systems", "Brand Alignment", "Conversion Focus"],
    mockup: "/images/services/web-design-mockup.svg",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    copy: "Study your customers, visualize their journeys, distill complexity, and create user-friendly interfaces, wireframes, and modifiable systems for web and mobile applications.",
    href: "/services/ui-ux-design",
    icon: Layout,
    tags: ["User Research", "Journey Mapping", "Design Systems", "Interactive Prototypes"],
    mockup: "/images/services/ui-ux-mockup.svg",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    copy: "Build iOS and Android apps with beautiful mobile UX, APIs, authentication, notifications, and scalable architecture.",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    tags: ["iOS & Android", "Cross-Platform", "Push & APIs", "Native Mobile UX"],
    mockup: "/images/services/ui-ux-mockup.svg",
  },
  {
    title: "SEO & Digital Marketing",
    slug: "seo-digital-marketing",
    copy: "Enhance search visibility, bring in the right traffic and make the most of digital channels with technical SEO, content and digital marketing that can be measured.",
    href: "/services/seo-digital-marketing",
    icon: TrendingUp,
    tags: ["Technical SEO", "Search Intent Content", "GA4 Analytics", "Compound Traffic"],
    mockup: "/images/services/digital-marketing-mockup.svg",
  },
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    copy: "Build practical AI products and automation using generative AI and AI agents, chatbots, RAG, integrations and recommendation systems.",
    href: "#ai-solutions",
    icon: Cpu,
    tags: ["Generative AI", "Task Agents", "RAG & Knowledge Search", "Workflow Automation"],
    mockup: "/images/services/web-development-mockup.svg",
  },
];

const technologies = ['React', 'Next.js', 'Node.js', 'PHP', 'WordPress', 'Shopify', 'Flutter', 'Figma', 'Tailwind CSS', 'APIs', 'Analytics', 'SEO'];

const AI_CAPABILITIES = [
  {
    name: "AI Development Services",
    desc: "Develop custom AI-driven capabilities and solutions that solve a specific business challenge, utilize a given data source, and conform to a particular user workflow.",
    icon: Cpu,
    category: "Core Dev",
  },
  {
    name: "Generative AI Development",
    desc: "Develop solutions that leverage generative models for content, knowledge tasks, summarization, drafting, classification, and many other business process workflows.",
    icon: Sparkles,
    category: "Generative",
  },
  {
    name: "AI Agent Development",
    desc: "Build task specific AI agents that can think in defined workflows, utilize vetted tools, and assist users in accomplishing multi-step tasks.",
    icon: Bot,
    category: "Agents",
  },
  {
    name: "AI Chatbot Development",
    desc: "Develop chatbots for websites, apps and internal teams that can answer questions and assist users with common tasks.",
    icon: MessageSquare,
    category: "Assistants",
  },
  {
    name: "AI Automation Solutions",
    desc: "Apply AI to task, support, operations, content, document processing, lead workflows, and more for both external and internal processes to minimize repetitive tasks.",
    icon: Zap,
    category: "Automation",
  },
  {
    name: "AI Web & App Development",
    desc: "Bring AI capabilities into websites and applications where intelligence is not an afterthought or a separate tool.",
    icon: Globe,
    category: "Products",
  },
  {
    name: "AI Search & RAG Solutions",
    desc: "Connect language models to your business knowledge to enable users to get relevant answers from your internal documents and structured sources.",
    icon: Search,
    category: "Search & RAG",
  },
  {
    name: "AI API & Model Integration",
    desc: "Third-party or private AI models can be integrated via secure APIs and product-level orchestration.",
    icon: Sliders,
    category: "Integration",
  },
  {
    name: "AI Recommendation Systems",
    desc: "Leverage behavior or product data to power more relevant recommendations, discovery experiences, or next-best actions when it makes sense.",
    icon: Lightbulb,
    category: "Analytics",
  },
  {
    name: "Custom AI Solutions",
    desc: "Integrate models, workflows, data, interfaces and automation into a solution that is customized to solve a specific business problem.",
    icon: Shield,
    category: "Custom",
  },
];

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Business-first thinking",
    copy: "Work backward from the objective and workflow to determine what technology is truly required.",
  },
  {
    icon: ShieldCheck,
    title: "Human-centered design",
    copy: "Keep interfaces simple, functional and consistent with customer behaviors.",
  },
  {
    icon: Code2,
    title: "Modern engineering",
    copy: "Develop responsive, maintainable, and scalable digital products with right-fit technologies.",
  },
  {
    icon: Search,
    title: "SEO-friendly foundations",
    copy: "Plan and develop with site structure, performance, crawlability and search intent in mind.",
  },
  {
    icon: Sparkles,
    title: "Practical AI",
    copy: "Apply AI to enhance a measurable aspect of the experience or workflow, not to add unnecessary complexity.",
  },
  {
    icon: Network,
    title: "Connected digital services",
    copy: "Ensure design, development, mobile, marketing and AI are aligned when a project requires multiple capabilities.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    copy: "Learn about the business, the users, the existing systems, the goals, and the constraints. Know the problem you are trying to solve “worth the money” before you know how you are going to build it.",
    icon: Search,
    deliv: "Goal Alignment & Audit",
  },
  {
    num: "02",
    title: "Plan",
    copy: "Convert the requirements into an achievable scope, information architecture, technology path, milestones, and success criteria.",
    icon: Map,
    deliv: "Architecture Map & Scope",
  },
  {
    num: "03",
    title: "Design",
    copy: "Develop the content architecture, UX flows, visual direction and prototypes to crystallize the intended experience prior to building it.",
    icon: Palette,
    deliv: "Prototypes & Design System",
  },
  {
    num: "04",
    title: "Develop",
    copy: "Develop the agreed upon experience using reusable components, integrations, secure data flows and a sustainable codebase.",
    icon: Code2,
    deliv: "Clean Codebase & APIs",
  },
  {
    num: "05",
    title: "Test",
    copy: "Test features, responsiveness, accessibility, performance, integrations, and edge cases before the release.",
    icon: CheckCircle,
    deliv: "QA Testing & Edge Cases",
  },
  {
    num: "06",
    title: "Launch",
    copy: "Release the site or product, set up monitoring and analytics, and stage the experience for real users.",
    icon: Rocket,
    deliv: "Production Deploy & Tracking",
  },
  {
    num: "07",
    title: "Grow",
    copy: "Inform your next improvements with search data, analytics, customer feedback, marketing performance, and product priorities.",
    icon: TrendingUp,
    deliv: "SEO & Analytics Optimization",
  },
];

const OUTCOMES = [
  {
    need: "Launch",
    msg: "Go from idea to a focused digital product with a practical plan and scalable foundation.",
    icon: Rocket,
    metric: "MVP to Market Ready",
  },
  {
    need: "Improve User Experience",
    msg: "Improve the Understandability, Findability, Navigability, and Usability of web sites and web applications.",
    icon: Sparkles,
    metric: "Higher User Retention",
  },
  {
    need: "Increase Visibility",
    msg: "Develop search-friendly digital platforms and content that are aligned with potential customers search terms.",
    icon: Eye,
    metric: "Compound Organic Reach",
  },
  {
    need: "Generate Leads",
    msg: "Design more transparent processes, more compelling calls to actions, more helpful landing experiences and more trackable conversion funnels.",
    icon: Flame,
    metric: "Measurable Funnel ROI",
  },
  {
    need: "Sell Online",
    msg: "Design or refine e-commerce processes, integrations, and customer journeys.",
    icon: ShoppingBag,
    metric: "Optimized Checkout Flow",
  },
  {
    need: "Automate Work",
    msg: "Bind AI and digital automation with multispectral tasks, serve workflows and business operations.",
    icon: Cpu,
    metric: "Reduced Manual Hours",
  },
  {
    need: "Modernize",
    msg: "Upgrade an old site or app without abandoning current users, content and SEO authority.",
    icon: RefreshCw,
    metric: "Zero Search Equity Loss",
  },
  {
    need: "Scale",
    msg: "Build architecture, systems, and processes that can support additional features, content, traffic, and integrations in the future.",
    icon: BarChart,
    metric: "Growth Infrastructure",
  },
];

const AUDIENCES = [
  {
    audience: "Startups",
    angle: "Prove out the concept, focus on MVP, and build a base that can evolve without overengineering.",
    icon: Rocket,
    keyFocus: "MVP Validation & Scalable Foundation",
  },
  {
    audience: "SaaS Companies",
    angle: "Create product experiences, web apps, mobile channels, integrations, and AI capabilities.",
    icon: Layers,
    keyFocus: "Product UX & AI Capabilities",
  },
  {
    audience: "SMBs & Growing Businesses",
    angle: "Update websites, enhance digital journeys, increase search visibility, and implement useful automation.",
    icon: Building2,
    keyFocus: "Modernization & Organic Reach",
  },
  {
    audience: "Enterprises",
    angle: "Facilitate intricate workflows, integrations, security needs, and scalable digital platforms.",
    icon: Shield,
    keyFocus: "Complex Workflows & Security",
  },
  {
    audience: "B2B Organizations",
    angle: "Develop cleaner websites, portals, lead-generation journeys, content systems and quantifiable digital funnels.",
    icon: Briefcase,
    keyFocus: "Portals & Lead Funnels",
  },
  {
    audience: "E-commerce Businesses",
    angle: "Enhance storefront experience, performance, integrations, search visibility, and customer journeys.",
    icon: ShoppingBag,
    keyFocus: "Storefront Optimization",
  },
];

const TECH_STACK_AREAS = [
  {
    area: "Front End",
    examples: "React, Next.js, Vue.js, TypeScript, Tailwind CSS",
    value: "Responsive interfaces, modern web app experiences and maintainable units of abstractions.",
    icon: Code2,
  },
  {
    area: "Back End",
    examples: "Node.js, PHP and application services",
    value: "Business logic, APIs, integrations and secure server side workflows.",
    icon: Server,
  },
  {
    area: "CMS & E-commerce",
    examples: "WordPress, WooCommerce, Shopify",
    value: "Flexible content management and commerce experiences.",
    icon: ShoppingBag,
  },
  {
    area: "Mobile",
    examples: "React Native, Flutter, iOS/Swift",
    value: "Cross-platform and platform-specific mobile products.",
    icon: Smartphone,
  },
  {
    area: "Data",
    examples: "PostgreSQL, MySQL, MongoDB",
    value: "There are data storage and data structure options that are specifically matched to application need.",
    icon: Database,
  },
  {
    area: "APIs & Integrations",
    examples: "REST, GraphQL and third-party services",
    value: "Link your products to the systems your customers’ businesses rely on.",
    icon: Network,
  },
  {
    area: "AI",
    examples: "LLM APIs, RAG, agents, recommendation and automation workflows",
    value: "Put intelligent capabilities to work where doing so creates a meaningful business or customer outcome.",
    icon: Cpu,
  },
  {
    area: "Analytics",
    examples: "GA4, GTM and product/event tracking",
    value: "Analyze behavior, quantify journeys and instruct optimization.",
    icon: LineChart,
  },
];

const CASE_STUDIES = [
  {
    title: "Enterprise SaaS Web Portal & AI Knowledge Agent",
    service: "Web Dev & AI Solutions",
    challenge: "Outdated monolith with high support ticket load and fragmented knowledge search.",
    approach: "Built Next.js web portal connected to custom AI RAG agent over enterprise docs.",
    deliverables: "Next.js App, TypeScript API, Vector RAG Search, Design System",
    outcome: "64% reduction in support response time and 3x faster client onboarding.",
    image: "/images/case-studies/enterprise-saas-ai-knowledge-agent-web-portal.webp",
    imageAlt: "Enterprise SaaS web portal with AI knowledge agent",
  },
  {
    title: "Cross-Platform FinTech Mobile Application",
    service: "Mobile & UI/UX",
    challenge: "Low mobile conversion and complex multi-step identity verification.",
    approach: "Redesigned mobile user journey and developed React Native app with biometric auth.",
    deliverables: "iOS & Android App, Mobile UX System, KYC API Integration",
    outcome: "42% increase in mobile account completions and 4.8 App Store rating.",
    image: "/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp",
    imageAlt: "FinTech mobile app with biometric KYC authentication",
  },
  {
    title: "B2B Digital Platform & Technical SEO Overhaul",
    service: "Web Design & SEO",
    challenge: "Stagnant organic traffic and low lead-to-opportunity conversion rate.",
    approach: "Reconstructed site architecture, optimized Core Web Vitals, and deployed search-intent hub.",
    deliverables: "Custom Web Design, Technical SEO, GA4 Tracking, Content Hub",
    outcome: "+185% increase in organic search leads within 6 months.",
    image: "/images/case-studies/b2b-digital-platform-technical-seo-optimization.webp",
    imageAlt: "B2B digital platform with technical SEO and GA4 analytics",
  },
];

const TOPICS = [
  {
    category: "Web Development",
    items: "React vs Next.js, WordPress Modernization, Performance Optimization, APIs, Headless Architecture & Migration Planning.",
    icon: Code2,
  },
  {
    category: "UI/UX Design",
    items: "UX Research Frameworks, Scalable Design Systems, Usability Benchmarks, WCAG Accessibility, SaaS UX & Mobile UX.",
    icon: Palette,
  },
  {
    category: "SEO & Search Growth",
    items: "Technical SEO Audits, Search Intent Content Modeling, Core Web Vitals, Site Migrations & Conversion Rate Optimization (CRO).",
    icon: Search,
  },
  {
    category: "Mobile Engineering",
    items: "Cross Platform React Native, Offline Workflows, App Security, App-Store Deployment & Responsive Mobile UX.",
    icon: Smartphone,
  },
  {
    category: "Practical AI & Automation",
    items: "RAG Architecture, AI Agents, Chatbot Design, AI Automation, Recommendation Algorithms & Responsible AI Integration.",
    icon: Cpu,
  },
];

// ==========================================
// SUB-COMPONENTS
// ==========================================

function TypewriterHeading() {
  const [text, setText] = useState(TYPEWRITER_PHRASES[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(65);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];

    if (!isDeleting && text === currentPhrase) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(35);
      }, 2200);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      const nextIndex = (phraseIndex + 1) % TYPEWRITER_PHRASES.length;
      setPhraseIndex(nextIndex);
      setTypingSpeed(65);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1);
        setText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <span className="block sm:inline-block relative min-h-[2.45em] sm:min-h-[1.25em] text-left align-top max-w-full">
      <span className="bg-gradient-brand bg-clip-text text-transparent break-words [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
        {text}
      </span>
      <span className="inline-block w-[3px] h-[0.85em] bg-brand-cyan ml-1.5 align-middle animate-pulse rounded-full shadow-[0_0_10px_#00c6ff] flex-shrink-0" />
    </span>
  );
}

const HERO_CAPABILITIES_TICKER = [
  { label: "AI Development", icon: Bot },
  { label: "Custom Web Development", icon: Code2 },
  { label: "Web Design", icon: Palette },
  { label: "UI/UX Design", icon: Layout },
  { label: "Mobile App Development", icon: Smartphone },
  { label: "SEO & Digital Marketing", icon: TrendingUp },
];

// ----------------------------------------------------------------------
// 01. Hero Section
// ----------------------------------------------------------------------
export function HeroSection({ onOpenModal }: { onOpenModal?: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-white relative min-h-[85vh] flex items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Radial Glow & Futuristic Grid Lines */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle geometric grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Column (Copy & CTAs) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill Badge */}
            <AnimateOnScroll variant="fadeDown" duration={0.6} start="top 95%">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                <span>{HERO_SLIDES[currentSlide].badge}</span>
              </div>
            </AnimateOnScroll>

            {/* H1 Headline with Typewriter */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.15} start="top 95%">
              <h1 className="text-[1.75rem] sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
                <span className="block sm:inline">Web Development & AI Solutions for</span>{" "}
                <TypewriterHeading />
              </h1>
            </AnimateOnScroll>

            {/* Supporting Copy */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.3} start="top 95%">
              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                <p className="font-medium text-foreground">
                  Your digital presence should do more than exist. It should enable people to grasp your value, feel confident in their decisions, and take the next step—whether that&apos;s asking for a quote, using your product, placing an order, or becoming a customer.
                </p>
                <p>
                  <strong className="text-foreground font-semibold">Nexovio Digital Solutions</strong> offers strategy, web development, web design, UI/UX, mobile app development, SEO and digital marketing with actionable AI insights. We create digital experiences based on your actual business needs and then assist you in refining them as your customers, products and goals evolve.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Action Buttons */}
            <AnimateOnScroll variant="fadeUp" duration={0.7} delay={0.45} start="top 95%">
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  onClick={onOpenModal ? onOpenModal : undefined}
                  href={!onOpenModal ? "https://calendly.com/nexoviodigitalsolutions-info" : undefined}
                  variant="primary"
                  size="lg"
                  trackingName="hero_schedule_call"
                  trackingLocation="hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow cursor-pointer"
                >
                  Schedule a Call
                </Button>

                <Button
                  href="#services"
                  variant="secondary"
                  size="lg"
                  trackingName="hero_explore_services"
                  trackingLocation="hero"
                  className="w-full sm:w-auto hover:border-brand-cyan/40"
                >
                  Explore Our Services
                </Button>
              </div>
            </AnimateOnScroll>

          </div>

          {/* Hero Right Column */}
          <AnimateOnScroll variant="scaleUp" duration={1} delay={0.3} start="top 95%" className="lg:col-span-6 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />

            <div className="relative w-full max-w-lg mx-auto rounded-2xl border border-brand-cyan/70 bg-surface-elevated/80 backdrop-blur-md p-2.5 shadow-xl overflow-hidden group hover:border-brand-cyan/60 transition-all duration-500">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#070D18]">
                <Image
                  src="/images/hero/digital-experience-web-development-team.webp"
                  alt="Nexovio Digital Solutions engineering and product design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/20 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 01.5 Capabilities Marquee Ticker Section (Below Hero)
// ----------------------------------------------------------------------
export function CapabilitiesTickerSection() {
  return (
    <section className="py-4 sm:py-5 border-y border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-[#070c18]/80 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.6}>
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Live Indicator Badge */}
            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-bold uppercase tracking-wider z-20">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="hidden sm:inline">Capabilities</span>
              <span className="sm:hidden">Core</span>
            </div>

            {/* Marquee Track Container with Edge Fades */}
            <div className="relative flex-1 overflow-hidden select-none">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50/90 dark:from-[#070c18]/90 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50/90 dark:from-[#070c18]/90 to-transparent z-10" />

              <div className="animate-marquee flex items-center gap-8 sm:gap-10 shrink-0">
                {[...HERO_CAPABILITIES_TICKER, ...HERO_CAPABILITIES_TICKER, ...HERO_CAPABILITIES_TICKER, ...HERO_CAPABILITIES_TICKER].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap text-slate-700 dark:text-slate-200"
                    >
                      <ItemIcon className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span>{item.label}</span>
                      <span className="text-slate-300 dark:text-slate-700 text-xs ml-4 sm:ml-6">•</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 02. Value Proposition Section
// ----------------------------------------------------------------------
export function ValueProposition({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-0 relative" id="value-proposition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              VALUE PROPOSITION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              From an Idea to a{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Digital Experience That Works</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-3 pt-2">
              <p className="font-semibold text-foreground/90">
                The right digital partner knows more than technology. They know why the product is being made, who will use it, and what the business wants the experience to do for them.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VALUE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.title}
                  className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-surface px-2.5 py-1 rounded-full border border-border-subtle">
                        {card.pillarLabel}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-brand-cyan transition-colors mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-border-subtle flex items-center justify-between text-xs font-semibold text-brand-cyan">
                    <span>Nexovio Principle</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>

      {/* What Nexovio Makes Clear Callout - Full Width Section */}
      <AnimateOnScroll variant="fadeUp" duration={0.7} delay={0.2} className="w-full">
        <div className="w-full mt-14 sm:mt-20 border-t border-b border-brand-cyan/35 bg-[#050A18] relative overflow-hidden group continuity-banner-section">
          {/* Visual Continuity Background Image & Gradients (100vw) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/capabilities-continuity-banner.webp"
              alt="Nexovio connected digital capabilities and end-to-end continuity"
              fill
              sizes="100vw"
              className="object-cover object-right md:object-center opacity-30 md:opacity-40 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 ease-out"
            />
            {/* Directional gradients for maximum text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#050A18]/95 to-[#050A18]/60 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
            {/* Modern tech dot grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06]" />
          </div>

          {/* Glowing Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-80" />

          {/* Centered Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-18 relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
              <div className="space-y-5 max-w-3xl">
                {/* Status Badge with Live Pulsing Radar Dot */}
                <div
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/40 bg-brand-cyan/10 backdrop-blur-md shadow-sm"
                  style={{ color: "#00c6ff" }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                  </span>
                  <span style={{ color: "#00c6ff" }}>What Nexovio Makes Clear</span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white keep-white tracking-tight leading-tight banner-heading"
                  style={{ color: "#ffffff" }}
                >
                  Connected Capabilities &amp;{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">End-to-End Continuity</span>
                </h3>

                <p
                  className="text-slate-200 keep-slate leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl font-normal banner-desc"
                  style={{ color: "#e2e8f0" }}
                >
                  Nexovio is not just one digital field. The benefit of our comprehensive offering is that you get continuity: begin with a high-performance website, introduce a product experience, branch into mobile, enhance search visibility, and automate workflows with AI—all managed under one roof.
                </p>

                {/* Connected Capability Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {[
                    "Modern Web",
                    "Product UI/UX",
                    "Mobile Engineering",
                    "SEO & Growth",
                    "Practical AI",
                    "Zero Vendor Silos",
                  ].map((capability) => (
                    <span
                      key={capability}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium backdrop-blur-md transition-all banner-pill keep-white"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        color: "#f8fafc",
                        borderColor: "rgba(255, 255, 255, 0.16)",
                        borderWidth: "1px",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="flex flex-col items-start lg:items-end justify-center gap-4 shrink-0 lg:pl-8 lg:border-l lg:border-white/10 w-full lg:w-auto">
                <div className="text-left lg:text-right space-y-1">
                  <span
                    className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold block banner-meta-title"
                    style={{ color: "#00c6ff" }}
                  >
                    Unified Delivery
                  </span>
                  <p
                    className="text-xs text-slate-300 font-medium banner-meta-sub"
                    style={{ color: "#cbd5e1" }}
                  >
                    Zero vendor silos. Total execution continuity.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <Button
                    href="/services"
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="shrink-0 cursor-pointer shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/45 hover:scale-[1.02] transition-all text-white keep-white text-center justify-center"
                  >
                    Explore Digital Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

// ----------------------------------------------------------------------
// 03. Digital Services Under One Roof
// ----------------------------------------------------------------------
export function ServicesInteractive() {
  const [activeSlug, setActiveSlug] = useState(SERVICES_DATA[0].slug);
  const activeService = SERVICES_DATA.find((s) => s.slug === activeSlug) || SERVICES_DATA[0];

  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Digital Services{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Under One Roof</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                Nexovio connects strategy, design, engineering, search visibility, and AI intelligence in one connected delivery model.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 6 Services Grid */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.slug}
                  className="group flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-8 border-border-subtle hover:border-brand-cyan/45 transition-all duration-300"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/50 transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-muted">0{idx + 1}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted text-xs sm:text-sm leading-relaxed">
                      {service.copy}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {service.tags.map((t, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-surface px-2.5 py-1 rounded-md border border-border-subtle"
                        >
                          <Check className="w-3 h-3 text-brand-cyan" /> {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border-subtle">
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-between w-full font-bold text-xs sm:text-sm text-brand-cyan hover:underline transition-colors"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 04. AI Solutions Section
// ----------------------------------------------------------------------
export function AiSolutionsSection() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16 relative overflow-hidden" id="ai-solutions">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-electric/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-bright" />
              <span>AI SOLUTIONS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              AI Solutions for Smarter Digital Products{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                and Workflows
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl mx-auto">
              The right AI is helpful when it&apos;s letting people work faster, find information more efficiently, serve customers better, or make products smarter. Nexovio makes it possible to add AI to websites, apps and business processes without making the experience feel complicated.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 10 AI Capabilities Grid */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.08} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {AI_CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <Card
                  key={cap.name}
                  accentBar={true}
                  className="group relative flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/50 hover:shadow-[0_10px_30px_rgba(0,198,255,0.18)] hover:-translate-y-1.5 transition-all duration-300 rounded-2xl overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/50 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-brand-cyan bg-surface px-2.5 py-1 rounded-md border border-border-subtle">
                        {cap.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {cap.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-border-subtle flex items-center justify-between text-xs font-semibold text-brand-cyan">
                    <span>Practical Use Case</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* Practical AI Positioning Callout - Structured as the concluding philosophy after exploring capabilities */}
        {/* <AnimateOnScroll variant="fadeUp" duration={0.7} delay={0.2}>
          <div className="mt-12 sm:mt-16 rounded-3xl border border-brand-cyan/35 bg-surface-elevated/90 backdrop-blur-md p-6 sm:p-10 shadow-xl relative overflow-hidden text-left group">
            
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-80" />
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-3.5 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-brand-cyan font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  <span>Practical AI Positioning</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Pragmatic Tech, Concrete Business Outcomes
                </h3>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  Consider AI as an enabling technology within the Nexovio range of digital services. We don’t suggest that every client requires AI—our thinking is pragmatic and focused on outcomes, linked to concrete business applications.
                </p>

                
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {[
                    "Zero Vanity Hype",
                    "Outcome-Driven Utility",
                    "Measured ROI",
                    "Human-Centric Workflows",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-surface border border-border-subtle text-foreground/80"
                    >
                      <Check className="w-3 h-3 text-brand-cyan" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 w-full lg:w-auto lg:pl-8 lg:border-l lg:border-border-subtle">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold block">
                  Outcome-Driven AI
                </span>
                <p className="text-xs text-muted max-w-xs lg:text-right">
                  Only deployed when it demonstrably accelerates workflows, reduces costs, or drives revenue.
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/30 px-3 py-1.5 rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                    Built for Real ROI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll> */}
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 05. Why Nexovio Section
// ----------------------------------------------------------------------
export function WhyNexovio() {
  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="why-nexovio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              WHY NEXOVIO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Technology With Purpose,{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Not Complexity</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                We cut out the generic agency fluff. Each line of code, design choice, and AI integration is made with your business needs in mind.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRINCIPLES.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5 group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.copy}
                  </p>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" duration={0.7} delay={0.2}>
          <div className="mt-12 sm:mt-16 rounded-3xl border border-brand-cyan/30 bg-surface-elevated/80 backdrop-blur-md p-6 sm:p-10 shadow-lg text-left">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-brand-cyan font-bold text-xs uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-brand-cyan" />
                <span>A Partner for Digital Change</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Tailored Roadmaps, Not One-Size-Fits-All Packages
              </h3>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                Some companies require a new website. Some require a product, a better customer journey, improved search visibility, or a more streamlined workflow. The homepage allows every visitor to easily find where Nexovio fits without forcing every project into the same mold.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 06. Process Section
// ----------------------------------------------------------------------
export function ProcessSection() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              A Clear Path From First Conversation{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                to Launch and Growth
              </span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                The homepage experience is simple, useful, and transparent for everyone. Specific technical implementation details should go on our individual service pages.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.08} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between bg-surface-elevated/70 border-border-subtle hover:bg-brand-cyan/15 hover:border-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/10 hover:scale-[1.02]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black font-mono text-muted group-hover:text-brand-cyan transition-colors duration-300">
                        {step.num}
                      </span>
                      <div className="p-2.5 rounded-xl bg-surface group-hover:bg-brand-cyan/20 text-brand-cyan transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand-cyan transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {step.copy}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border-subtle group-hover:border-brand-cyan/30 text-[11px] font-semibold flex items-center justify-between text-brand-cyan transition-colors duration-300">
                    <span>{step.deliv}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 07. Outcomes Section
// ----------------------------------------------------------------------
export function OutcomesSection() {
  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="outcomes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              OUTCOMES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              What Better Digital Experiences{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Can Help You Do</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                We deliver evidence-based results. Instead of airy hype, get down-to-earth descriptions of what we develop, enhance and quantify.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.08} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OUTCOMES.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.need}
                  className="bg-surface-elevated/70 p-6 border-border-subtle hover:border-brand-cyan/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-brand-cyan bg-surface px-2.5 py-1 rounded-full border border-border-subtle">
                        {item.metric}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-brand-cyan transition-colors">
                      {item.need}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.msg}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 08. Audience Section
// ----------------------------------------------------------------------
export function AudienceSection() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="audience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              AUDIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Built for Different{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Business Needs</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                If you&apos;re an early stage founder or an enterprise product leader, our engagement models scale to your exact size and needs.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.08} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUDIENCES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.audience}
                  className="group relative cursor-pointer rounded-2xl p-7 transition-all duration-300 border border-border-subtle bg-surface-elevated/70 hover:bg-surface-elevated hover:border-brand-cyan/50 hover:shadow-xl hover:shadow-brand-cyan/5 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:scale-105 group-hover:shadow-md group-hover:shadow-brand-cyan/20 transition-all duration-300">
                        <Icon className="w-6 h-6 transition-colors duration-300 text-brand-cyan group-hover:!text-white keep-white" />
                      </div>
                      <span className="text-[11px] font-bold text-muted bg-surface px-2.5 py-1 rounded-md border border-border-subtle group-hover:border-brand-cyan/30 group-hover:text-foreground transition-colors duration-300">
                        {item.keyFocus}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand-cyan transition-colors duration-300">
                      {item.audience}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{item.angle}</p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-border-subtle group-hover:border-brand-cyan/20 flex items-center justify-between text-xs font-bold text-brand-cyan transition-colors duration-300">
                    <span>View Recommended Approach</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 09. Technology Stack Section
// ----------------------------------------------------------------------
export function TechStackSection() {
  return (
    <GSAPSection animation="fade-up">
      <section className="tech-section py-16 lg:py-20" id="technologies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tech-heading max-w-3xl mx-auto mb-10 space-y-3 text-center" data-animate="fade-up">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mx-auto">
              Technology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Built with modern technology,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500">
                chosen for the problem.
              </span>
            </h2>
          </div>

          <div className="tech-ecosystem max-w-6xl mx-auto" data-animate="fade-up">
            {/* Ambient Orbital Rings (similar to CTA section) */}
            <div className="tech-orbit-ambient" />
            <div className="tech-orbit-ambient-two" />

            <div className="tech-center">
              <div className="tech-center-ring" />
              <Image
                src="/favicon-48x48.png"
                alt="Nexovio"
                width={44}
                height={44}
                className="w-10 h-10 object-contain mb-1"
              />
              <strong>NEXOVIO</strong>
            </div>

            {/* Slow-motion continuous revolving circular orbit track */}
            <div className="tech-orbit-track">
              {technologies.map((tech, index) => (
                <span className={`tech-node tech-node-${index + 1}`} key={tech}>
                  <i />
                  {tech}
                </span>
              ))}
            </div>

            <div className="tech-connection connection-one" />
            <div className="tech-connection connection-two" />
            <div className="tech-connection connection-three" />
            <div className="tech-connection connection-four" />
          </div>
        </div>
      </section>
    </GSAPSection>
  );
}

// ----------------------------------------------------------------------
// 10. Selected Work / Case Studies (Trust & Authority)
// ----------------------------------------------------------------------
export function SelectedWork() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              TRUST &amp; AUTHORITY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              See How We Turn Digital Challenges{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Into Working Products</span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl mx-auto">
              Discover a curated selection of projects from web, product design and mobile to SEO and AI-driven experiences. In each case, the challenge, the changes we made and how the work empowered the client is explained.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.12} duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs, idx) => (
              <Card
                key={idx}
                className="bg-surface-elevated/70 rounded-3xl overflow-hidden border-border-subtle hover:border-brand-cyan/45 transition-all duration-300 flex flex-col justify-between group p-0 sm:p-0"
              >
                <div className="relative h-48 overflow-hidden bg-[#050A14]">
                  <Image
                    src={cs.image}
                    alt={cs.imageAlt || cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/90 via-[#050A14]/30 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 right-3 z-10 bg-[#050A14]/90 backdrop-blur-md text-brand-cyan text-xs font-semibold px-3 py-1 rounded-full border border-brand-cyan/40 shadow-lg">
                    {cs.service}
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand-cyan transition-colors">
                      {cs.title}
                    </h3>
                    <div className="space-y-2 text-xs text-muted">
                      <p><strong className="text-foreground uppercase">Challenge:</strong> {cs.challenge}</p>
                      <p><strong className="text-foreground uppercase">Approach:</strong> {cs.approach}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-subtle space-y-2.5">
                    <div>
                      <span className="text-[11px] font-bold text-brand-cyan uppercase block mb-0.5">Measurable Result</span>
                      <span className="text-sm font-extrabold text-emerald-500">{cs.outcome}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted pt-1">
                      <span>{cs.deliverables}</span>
                      <ExternalLink className="w-4 h-4 text-brand-cyan" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 11. Content Strategy Section
// ----------------------------------------------------------------------
export function ContentStrategySection() {
  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              CONTENT STRATEGY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Use the Homepage to Open the Door{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">to Deeper Content</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                The homepage is the primary authority page for a topic and directs decision makers straight to in-depth technical content, architecture comparisons, and turn-key solutions.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.08} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOPICS.map((t, idx) => {
              const Icon = t.icon;
              return (
                <Card
                  key={idx}
                  className="bg-surface-elevated/70 p-6 border-border-subtle hover:border-brand-cyan/40 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-brand-cyan transition-colors">
                    {t.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {t.items}
                  </p>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.2}>
          <div className="mt-10 sm:mt-12 bg-surface-elevated/80 rounded-2xl p-6 sm:p-8 border border-brand-cyan/30 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  Real Questions. Useful Answers. Better Digital Decisions.
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed mt-1">
                  We write useful, search-friendly content based on the questions your customers really ask — not generic content designed to just fill a page. Each piece is designed to help businesses learn about their choices, solve real problems, and make better digital decisions, from technical guides to solution-focused insights.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 13. FAQ Section
// ----------------------------------------------------------------------
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState("");
  const schema = getFaqSchema(GLOBAL_FAQS);

  const filteredFaqs = GLOBAL_FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section className="section-white py-14 sm:py-20 relative overflow-hidden" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked"
            highlightText="Questions"
            description="Precise information about our services, custom builds, AI capabilities, project methodologies and engineering processes."
            align="center"
          />
        </AnimateOnScroll>

        {/* FAQ Accordion List */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.06} duration={0.4}>
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={cn(
                    "relative rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-md",
                    isOpen
                      ? "bg-surface-elevated border border-brand-cyan/40 shadow-[0_8px_30px_rgba(0,198,255,0.12)]"
                      : "bg-surface-elevated/70 border border-border-subtle hover:border-brand-cyan/30"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left outline-none cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 pr-3">
                      <HelpCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span
                        className={cn(
                          "text-sm sm:text-base font-bold transition-colors leading-snug",
                          isOpen ? "text-brand-cyan" : "text-foreground group-hover:text-brand-cyan"
                        )}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all",
                        isOpen
                          ? "bg-brand-cyan text-white"
                          : "bg-surface text-muted border border-border-subtle group-hover:text-brand-cyan"
                      )}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <div className={cn("faq-accordion-grid", isOpen && "open")}>
                    <div className="faq-accordion-inner">
                      <div className="px-4 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-border-subtle">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ==========================================
// MAIN HOMEPAGE COMPONENT
// ==========================================
export default function Homepage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* 01. Hero Section */}
      <HeroSection onOpenModal={() => setModalOpen(true)} />

      {/* 01.5 Capabilities Marquee Ticker Section */}
      <CapabilitiesTickerSection />

      {/* 02. Value Proposition Section */}
      <ValueProposition onOpenModal={() => setModalOpen(true)} />

      {/* 03. Digital Services Under One Roof */}
      <ServicesInteractive />

      {/* 04. AI Solutions & Capabilities */}
      <AiSolutionsSection />

      {/* 05. Why Nexovio */}
      <WhyNexovio />

      {/* 06. Process Section */}
      <ProcessSection />

      {/* 07. Outcomes Section */}
      <OutcomesSection />

      {/* 08. Audience Section */}
      <AudienceSection />

      {/* 09. Technology Stack Section */}
      <TechStackSection />

      {/* 10. Selected Work / Case Studies (Trust & Authority) */}
      <SelectedWork />

      {/* 11. Content Strategy */}
      <ContentStrategySection />

      {/* 13. FAQ Section */}
      <FaqSection />
    </>
  );
}
