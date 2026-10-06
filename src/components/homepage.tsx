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
  XCircle,
  Compass,
  Code2,
  Palette,
  TrendingUp,
  Search,
  Layers,
  ShieldCheck,
  ShoppingBag,
  Rocket,
  ExternalLink,
  Bot,
  Star,
  MessageSquareQuote,
  Clock,
  BookOpen,
  Users,
  Check,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll, GSAPSection } from "@/components/ui/AnimateOnScroll";
import { FaqSection } from "@/components/sections/FaqSection";

// ==========================================
// DATA CONSTANTS & COLLECTIONS
// ==========================================

const HERO_SLIDES = [
  {
    badge: "Web Engineering & AI Solutions • Production Ready",
    titleHighlight: "Turn Business Goals",
    subtitle:
      "Strategy-led web engineering, responsive product design, and intelligent automation built for measurable growth.",
  },
  {
    badge: "AI Solutions & Workflow Automation",
    titleHighlight: "Smarter Workflows",
    subtitle:
      "Integrate AI agents, semantic search, and process automation directly into your digital products and business operations.",
  },
  {
    badge: "SEO & Sustainable Digital Reach",
    titleHighlight: "Measurable Outcomes",
    subtitle:
      "Combine technical search architecture, intent-focused content, and conversion optimization to turn visitors into customers.",
  },
];

const TYPEWRITER_PHRASES = [
  "AI-Powered Web Apps",
  "High-Converting Websites",
  "Scalable Digital Products",
  "Intelligent Business Automation",
  "Custom Software Solutions",
];

const WORKFLOW_SOLUTIONS = [
  {
    number: "01",
    subtitle: "Build & Modernize Your Website",
    title: "Websites & Web Applications",
    badge: "WEB DEVELOPMENT",
    description:
      "Build fast, scalable websites, SaaS platforms, client portals, and business applications designed around your users, workflows, and growth goals.",
    image: "/images/home/workflow-cards/websites-web-apps.jpg",
    icon: Code2,
    iconBg: "bg-sky-500/20",
    iconBorder: "border-sky-400/40",
    iconColor: "text-sky-400",
    badgeBg: "bg-sky-950/70",
    badgeBorder: "border-sky-400/40",
    badgeColor: "text-sky-300",
    accentColor: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]",
    link: "/services/web-development",
  },
  {
    number: "02",
    subtitle: "Launch & Grow Your Online Store",
    title: "E-commerce & Online Stores",
    badge: "E-COMMERCE SOLUTIONS",
    description:
      "Create faster, easier-to-manage online stores with better product experiences, checkout flows, integrations, and SEO foundations.",
    image: "/images/home/workflow-cards/ecommerce-online-stores.jpg",
    icon: ShoppingBag,
    iconBg: "bg-emerald-500/20",
    iconBorder: "border-emerald-400/40",
    iconColor: "text-emerald-400",
    badgeBg: "bg-emerald-950/70",
    badgeBorder: "border-emerald-400/40",
    badgeColor: "text-emerald-300",
    accentColor: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]",
    link: "/services/web-development",
  },
  {
    number: "03",
    subtitle: "Turn Your Idea Into a Digital Product",
    title: "SaaS, Portals & Digital Products",
    badge: "PRODUCT DEVELOPMENT",
    description:
      "Transform ideas into practical digital products with thoughtful UX, scalable architecture, APIs, integrations, and production-ready development.",
    image: "/images/home/workflow-cards/saas-portals-products.jpg",
    icon: Layers,
    iconBg: "bg-amber-500/20",
    iconBorder: "border-amber-400/40",
    iconColor: "text-amber-400",
    badgeBg: "bg-amber-950/70",
    badgeBorder: "border-amber-400/40",
    badgeColor: "text-amber-300",
    accentColor: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)]",
    link: "/services/web-development",
  },
  {
    number: "04",
    subtitle: "Create Better Digital Experiences",
    title: "UI/UX & Product Design",
    badge: "UI/UX DESIGN",
    description:
      "Simplify complex journeys with intuitive interfaces, user research, wireframes, prototypes, and scalable design systems built for real users.",
    image: "/images/home/workflow-cards/ui-ux-product-design.jpg",
    icon: Palette,
    iconBg: "bg-orange-500/20",
    iconBorder: "border-orange-400/40",
    iconColor: "text-orange-400",
    badgeBg: "bg-orange-950/70",
    badgeBorder: "border-orange-400/40",
    badgeColor: "text-orange-300",
    accentColor: "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.7)]",
    link: "/services/ui-ux-design",
  },
  {
    number: "05",
    subtitle: "Get Found by the Right Customers",
    title: "SEO & Organic Growth",
    badge: "SEO & DIGITAL GROWTH",
    description:
      "Improve search visibility with technical SEO, search-intent content, optimized site architecture, and measurable strategies built for sustainable organic growth.",
    image: "/images/home/workflow-cards/seo-organic-growth.jpg",
    icon: TrendingUp,
    iconBg: "bg-cyan-500/20",
    iconBorder: "border-cyan-400/40",
    iconColor: "text-cyan-400",
    badgeBg: "bg-cyan-950/70",
    badgeBorder: "border-cyan-400/40",
    badgeColor: "text-cyan-300",
    accentColor: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]",
    link: "/services/seo-digital-marketing",
  },
  {
    number: "06",
    subtitle: "Make AI Work for Your Business",
    title: "AI Products & Automation",
    badge: "AI SOLUTIONS",
    description:
      "Build practical AI solutions including AI agents, intelligent chatbots, RAG search, workflow automation, and AI-powered web and mobile experiences.",
    image: "/images/home/workflow-cards/ai-products-automation.jpg",
    icon: Cpu,
    iconBg: "bg-purple-500/20",
    iconBorder: "border-purple-400/40",
    iconColor: "text-purple-400",
    badgeBg: "bg-purple-950/70",
    badgeBorder: "border-purple-400/40",
    badgeColor: "text-purple-300",
    accentColor: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.7)]",
    link: "/services/ai-development",
  },
];

const IMPACT_METRICS = [
  {
    value: "+185%",
    label: "Organic Lead Growth",
    sublabel: "Average 6-month technical SEO client benchmark",
    tag: "SEO Growth",
    icon: TrendingUp,
    iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    iconBorder: "border-cyan-500/30",
    iconColor: "text-cyan-500 dark:text-cyan-400",
    accentGradient: "from-cyan-500 to-blue-500",
  },
  {
    value: "64%",
    label: "Support Load Reduction",
    sublabel: "Achieved via custom AI knowledge agent workflows",
    tag: "AI Efficiency",
    icon: Cpu,
    iconBg: "bg-purple-500/10 dark:bg-purple-500/20",
    iconBorder: "border-purple-500/30",
    iconColor: "text-purple-500 dark:text-purple-400",
    accentGradient: "from-purple-500 to-indigo-500",
  },
  {
    value: "99.9%",
    label: "Uptime & SLA Reliability",
    sublabel: "High-availability, enterprise-grade cloud platforms",
    tag: "Infrastructure",
    icon: ShieldCheck,
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    iconBorder: "border-emerald-500/30",
    iconColor: "text-emerald-500 dark:text-emerald-400",
    accentGradient: "from-emerald-500 to-teal-500",
  },
  {
    value: "35+",
    label: "Production Deployments",
    sublabel: "Web applications, SaaS platforms & tools delivered",
    tag: "Delivery Track",
    icon: Rocket,
    iconBg: "bg-amber-500/10 dark:bg-amber-500/20",
    iconBorder: "border-amber-500/30",
    iconColor: "text-amber-500 dark:text-amber-400",
    accentGradient: "from-amber-500 to-orange-500",
  },
];

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Business-First Strategy",
    copy: "We clarify your primary business objectives, user workflows, and success metrics before selecting technologies or writing code.",
  },
  {
    icon: ShieldCheck,
    title: "Human-Centered Product UX",
    copy: "We design intuitive user journeys, wireframes, and design systems that reduce friction and maximize user adoption.",
  },
  {
    icon: Code2,
    title: "High-Performance Engineering",
    copy: "We engineer fast, scalable, and secure applications using modern frameworks designed for long-term maintainability.",
  },
  {
    icon: Sparkles,
    title: "Pragmatic AI & Automation",
    copy: "We integrate intelligent search, AI agents, and workflow automations strictly where they eliminate manual overhead or create genuine value.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover & Align",
    copy: "Clarify business goals, user requirements, existing workflows, and success metrics before committing to technical architecture.",
    icon: Search,
    deliv: "Goal Alignment & Audit",
  },
  {
    num: "02",
    title: "Design & Prototype",
    copy: "Map intuitive user journeys, wireframes, and design systems that bring clarity to complex workflows prior to development.",
    icon: Palette,
    deliv: "Clickable Prototypes & Design Tokens",
  },
  {
    num: "03",
    title: "Engineer & Integrate",
    copy: "Build performant, secure web platforms, modern APIs, and automated tools with clean, modular, and scalable code.",
    icon: Code2,
    deliv: "Production Codebase & API Integrations",
  },
  {
    num: "04",
    title: "Launch & Scale",
    copy: "Deploy with zero downtime, robust observability, and continuous performance and SEO optimization.",
    icon: Rocket,
    deliv: "Deployment & Growth Tracking",
  },
];

const CLIENT_TESTIMONIALS = [
  {
    author: "David Miller",
    role: "Head of Digital Operations",
    company: "Parts Connexion",
    initials: "DM",
    category: "Headless E-Commerce & Next.js",
    metric: "+32% Mobile Checkout",
    highlight: "Sub-0.9s Page Loads Across 40k+ SKUs",
    quote:
      "We were dreading migrating 40,000+ catalog SKUs off our legacy cart because any break in URL redirects would wipe out ten years of organic Google traffic. Nexovio mapped every single 301 route, rebuilt our storefront on Next.js, and got product pages loading in under 0.9s. In our first holiday quarter after launch, mobile checkout conversion climbed 32% and inventory sync issues completely vanished.",
  },
  {
    author: "Sarah Jenkins, Esq.",
    role: "Managing Partner",
    company: "Inside Injury Law",
    initials: "SJ",
    category: "AI Triage & Legal Intake",
    metric: "15 hrs/wk Saved per Paralegal",
    highlight: "Lead Response Cut from 4 Hours to 3 Minutes",
    quote:
      "Our paralegal staff was overwhelmed reading hundreds of inquiry forms each week, half of which were out-of-jurisdiction or missing critical reports. Nexovio did not pitch generic AI gimmicks—they sat down with our team, codified our intake qualification criteria, and built an automated triage system that routes valid claims directly into our CRM. Response times dropped from 4 hours to under 3 minutes, saving each staff member 15+ hours weekly.",
  },
  {
    author: "Marcus Vance",
    role: "Founder & Operations Director",
    company: "Infiniti Home Comfort",
    initials: "MV",
    category: "Field Service & Web Dispatch",
    metric: "Zero Downtime Across 1,400+ Calls",
    highlight: "1,400+ Concurrent Peak Bookings Handled",
    quote:
      "Whenever severe heatwaves hit in July, our old WordPress booking site would buckle right when customers needed emergency cooling service the most. Nexovio re-engineered our booking engine from scratch with instant technician routing and automated SMS dispatches. During our busiest weekend with over 1,400 simultaneous booking requests, the site never slowed down once. Our office dispatchers finally had breathing room.",
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Project-Based Sprint",
    timelineBadge: "Typically 4–8 Weeks Delivery",
    tagline: "Fixed scope & milestone pricing for discrete builds",
    description:
      "Ideal for new web applications, headless e-commerce builds, or full redesigns with defined requirements. Zero scope creep and zero surprise invoices.",
    icon: Rocket,
    popular: false,
    pricingNote: "Milestone-based billing (Kickoff / Beta / Launch)",
    features: [
      "Clickable Figma UX prototype & technical blueprint sign-off before code",
      "Production-ready Next.js & Node/Python architecture built for high traffic",
      "Full Git repository access with 100% IP & code ownership from Day 1",
      "Sub-second Core Web Vitals optimization & technical SEO architecture",
      "30-day post-launch warranty with dedicated bug fixes and team training",
    ],
    idealFor: "New SaaS products, MVPs, platform migrations & major redesigns",
    ctaText: "Scope Your Project",
    ctaLink: "/schedule-a-call",
  },
  {
    title: "Dedicated Product Pod",
    timelineBadge: "Kickoff in 3–5 Business Days",
    tagline: "Senior engineering & design capacity embedded in your team",
    description:
      "Skip the 3-month hiring slog. Embed dedicated senior full-stack developers and product designers directly inside your Slack, Jira, and GitHub with agile weekly delivery.",
    icon: Users,
    popular: true,
    pricingNote: "Predictable monthly rate • Pause or adjust anytime",
    features: [
      "Senior full-stack developers (Next.js, TypeScript, Python, Cloud & AI)",
      "Direct Slack/Discord access & daily async standups—zero middle managers",
      "Weekly sprint demos, code reviews, and continuous production deployments",
      "Total backlog agility: reprioritize sprint tasks anytime based on live user data",
      "Flexible monthly engagement with no long-term lock-in (30-day notice)",
    ],
    idealFor: "Funded startups, growing product teams & rapid feature roadmaps",
    ctaText: "Discuss Dedicated Team",
    ctaLink: "/schedule-a-call",
  },
  {
    title: "Growth & Platform Retainer",
    timelineBadge: "Continuous Monthly Partnership",
    tagline: "Proactive search rankings, speed tuning & ongoing feature support",
    description:
      "Keep your revenue-critical platform blazing fast, secure, and ranking on Google. We handle technical SEO, Core Web Vitals maintenance, security updates, and monthly conversion enhancements.",
    icon: Zap,
    popular: false,
    pricingNote: "Monthly rolling retainer • Rollover engineering hours",
    features: [
      "Continuous Core Web Vitals monitoring (maintaining <1s LCP & green vitals)",
      "Monthly technical SEO health checks, schema updates & indexing audits",
      "24/7 uptime observability, vulnerability patching & dependency upgrades",
      "2-hour priority emergency SLA response for mission-critical issues",
      "Dedicated monthly hours for conversion experiments, landing pages & feature iterations",
    ],
    idealFor: "Established brands, high-traffic e-commerce & revenue-generating sites",
    ctaText: "Explore Growth Retainer",
    ctaLink: "/schedule-a-call",
  },
];

export interface FeaturedArticleItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  featuredImage?: string;
  publishedAt?: string;
  sitemapPriority?: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const FEATURED_ARTICLES_FALLBACK: FeaturedArticleItem[] = [
  {
    slug: "custom-web-development-vs-website-builders",
    title: "Custom Web Development vs. Website Builders: The Strategic Choice for Growth",
    category: "Web Architecture",
    readTime: "6 min read",
    excerpt:
      "Why outgrowing template builders is a pivotal milestone for companies needing tailored workflows, performance, and long-term SEO equity.",
    isNew: false,
    isFeatured: true,
  },
  {
    slug: "why-slow-websites-sabotage-lead-conversion",
    title: "Why Slow Websites Sabotage Lead Conversion (And How to Fix It)",
    category: "Performance & CRO",
    readTime: "5 min read",
    excerpt:
      "How sub-second load times and Core Web Vitals directly influence user trust, reduce bounce rates, and boost conversion pipelines.",
    isNew: false,
    isFeatured: false,
  },
  {
    slug: "ai-agents-and-automation-web-applications",
    title: "AI Agents & Practical Workflow Automation in Modern Web Applications",
    category: "AI & Automation",
    readTime: "7 min read",
    excerpt:
      "Moving beyond superficial hype to implement semantic RAG search, task agents, and human-in-the-loop automation that drive real ROI.",
    isNew: false,
    isFeatured: false,
  },
];

/**
 * Filter, score, and prioritize articles to display on the homepage.
 * - Surfaces new uploads (published within the last 30 days) at the top.
 * - Evaluates client importance based on priority, topic relevance, and date.
 * - Fills remaining card slots with curated fallback articles if fewer than 3 exist.
 */
export function prepareFeaturedArticles(articles?: any[]): FeaturedArticleItem[] {
  if (!articles || !Array.isArray(articles) || articles.length === 0) {
    return FEATURED_ARTICLES_FALLBACK;
  }

  const now = Date.now();
  const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

  const valid = articles.filter(
    (a) => a && typeof a === "object" && a.slug && a.title && !a.noIndex
  );

  if (valid.length === 0) {
    return FEATURED_ARTICLES_FALLBACK;
  }

  const scored = valid.map((a) => {
    const pubDate = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const ageMs = pubDate > 0 ? now - pubDate : Infinity;
    const isNew = ageMs >= 0 && ageMs < THIRTY_DAYS_MS;
    const priority = typeof a.sitemapPriority === "number" ? a.sitemapPriority : 0.8;
    const isFeatured = priority >= 0.85;

    let score = priority * 100;
    if (isNew) score += 1000;
    if (pubDate > 0) score += pubDate / 10000000;

    const rawExcerpt =
      a.excerpt && typeof a.excerpt === "string" && a.excerpt.trim()
        ? a.excerpt.trim()
        : a.seoDescription && typeof a.seoDescription === "string" && a.seoDescription.trim()
          ? a.seoDescription.trim()
          : "Discover technical insights, engineering architectures, and performance strategies from Nexovio.";

    return {
      item: {
        slug: String(a.slug).trim(),
        title: String(a.title).trim(),
        category: a.category ? String(a.category).trim() : "Technology",
        readTime: a.readingTime ? String(a.readingTime).trim() : "5 min read",
        excerpt: rawExcerpt,
        featuredImage:
          a.featuredImage && typeof a.featuredImage === "string" && a.featuredImage.trim() !== ""
            ? a.featuredImage.trim()
            : undefined,
        publishedAt: a.publishedAt,
        sitemapPriority: priority,
        isNew,
        isFeatured,
      } as FeaturedArticleItem,
      score,
    };
  });

  scored.sort((a, b) => b.score - a.score);

  const result: FeaturedArticleItem[] = [];
  const seenSlugs = new Set<string>();

  for (const { item } of scored) {
    if (!seenSlugs.has(item.slug)) {
      seenSlugs.add(item.slug);
      result.push(item);
      if (result.length === 3) break;
    }
  }

  // If fewer than 3, fill in with curated fallbacks
  if (result.length < 3) {
    for (const fb of FEATURED_ARTICLES_FALLBACK) {
      if (!seenSlugs.has(fb.slug)) {
        seenSlugs.add(fb.slug);
        result.push(fb);
        if (result.length === 3) break;
      }
    }
  }

  return result.slice(0, 3);
}

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "WordPress",
  "Shopify",
  "Flutter",
  "Figma",
  "Tailwind CSS",
  "APIs",
  "Analytics",
  "SEO",
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
  { label: "UI/UX Design", icon: Layers },
  { label: "E-Commerce Solutions", icon: ShoppingBag },
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
    <section className="section-white relative min-h-[85vh] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-8 sm:pb-12 overflow-hidden">
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
                  Your digital presence should do more than exist. It should communicate your value, build immediate trust, and convert visitors into long-term customers.
                </p>
                <p>
                  <strong className="text-foreground font-semibold">Nexovio Digital Solutions</strong> unites strategy, engineering, UI/UX design, and SEO with practical AI automation. We build resilient digital platforms around your actual business goals.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Action Buttons */}
            <AnimateOnScroll variant="fadeUp" duration={0.7} delay={0.45} start="top 95%">
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  onClick={onOpenModal ? onOpenModal : undefined}
                  href={!onOpenModal ? "/schedule-a-call" : undefined}
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
                  href="#solutions"
                  variant="secondary"
                  size="lg"
                  trackingName="hero_explore_solutions"
                  trackingLocation="hero"
                  className="w-full sm:w-auto hover:border-brand-cyan/40"
                >
                  Explore Solutions
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
                {[...HERO_CAPABILITIES_TICKER, ...HERO_CAPABILITIES_TICKER, ...HERO_CAPABILITIES_TICKER].map((item, idx) => {
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
// 02. Intelligent Workflow Solutions Section (6 Photo Cards)
// ----------------------------------------------------------------------
export function WorkflowSolutionsSection() {
  return (
    <section className="section-white pt-14 sm:pt-20 pb-12 sm:pb-16 relative overflow-hidden" id="solutions">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-brand-bright/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SOLUTIONS FOR YOUR BUSINESS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              Digital Solutions Built Around{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Your Business Goals
              </span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                From websites and mobile apps to AI-powered products and search growth, we bring strategy, design, engineering, and digital growth together to solve real business challenges.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 6 Photo Cards Grid (2 rows x 3 columns) */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WORKFLOW_SOLUTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.link}
                  className="block h-full group outline-none cursor-pointer"
                >
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-900 shadow-xl transition-all duration-500 hover:border-brand-cyan/60 hover:shadow-2xl hover:shadow-brand-cyan/20 hover:-translate-y-1.5 flex flex-col justify-between min-h-[390px] sm:min-h-[430px]">
                    {/* Background Photographic Scene with scale on hover */}
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Deep cinematic gradient overlay for high contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/25 group-hover:via-slate-950/55 transition-colors duration-500" />
                    </div>

                    {/* Top Bar: Icon Badge + Category Pill */}
                    <div className="relative z-10 flex items-center justify-between p-5 sm:p-6">
                      <div
                        className={cn(
                          "w-11 h-11 rounded-2xl flex items-center justify-center backdrop-blur-md border shadow-md transition-all duration-300 group-hover:scale-110",
                          item.iconBg,
                          item.iconBorder,
                          item.iconColor
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span
                        className={cn(
                          "px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase border backdrop-blur-md shadow-sm transition-all duration-300",
                          item.badgeBg,
                          item.badgeBorder,
                          item.badgeColor
                        )}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Bottom Content: Accent Line + Subtitle + Title + Description + CTA */}
                    <div className="relative z-10 p-5 sm:p-6 space-y-2.5">
                      <div className="flex items-center gap-3 mb-1">
                        <div
                          className={cn(
                            "w-8 h-1 rounded-full transition-all duration-300 group-hover:w-12",
                            item.accentColor
                          )}
                        />
                        <span className="text-[11px] font-mono font-bold tracking-wider text-slate-300/80 uppercase">
                          {item.number} — {item.subtitle}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-brand-cyan transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-brand-cyan opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        <span>Explore Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 02.5 Impact Metrics Bar (Proven Results & Authority)
// ----------------------------------------------------------------------
export function ImpactMetricsSection() {
  return (
    <section className="section-blue py-14 sm:py-20 relative overflow-hidden" id="metrics">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-brand-bright/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll variant="fadeUp" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN PERFORMANCE</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              Measurable Impact Across{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Every Build
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              Real, audited outcomes achieved for our clients across custom web development, technical SEO, and AI workflow automation.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.08} duration={0.6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="relative rounded-3xl p-6 sm:p-7 bg-surface-elevated/80 dark:bg-surface-elevated/70 border border-border-subtle hover:border-brand-cyan/60 shadow-lg hover:shadow-2xl hover:shadow-brand-cyan/15 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Subtle Top-Right Ambient Corner Light */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/15 transition-all duration-500 pointer-events-none" />

                  <div className="space-y-5 relative z-10">
                    {/* Top Row: Icon container + Tag badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110",
                          metric.iconBg,
                          metric.iconBorder,
                          metric.iconColor
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-surface border border-border-subtle text-muted group-hover:text-foreground transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                        {metric.tag}
                      </span>
                    </div>

                    {/* Metric Number & Label */}
                    <div>
                      <div className="text-4xl sm:text-5xl font-black tracking-tight font-mono text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors duration-300 mb-2">
                        {metric.value}
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                        {metric.label}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed font-normal">
                        {metric.sublabel}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Animated Accent Indicator Bar */}
                  <div className="pt-5 mt-5 border-t border-border-subtle relative z-10">
                    <div
                      className={cn(
                        "w-8 h-1 rounded-full transition-all duration-500 group-hover:w-full bg-gradient-to-r",
                        metric.accentGradient
                      )}
                    />
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
// 03. Why Nexovio Section (Pillars & Continuity Banner)
// ----------------------------------------------------------------------
export function WhyNexovio() {
  return (
    <section className="section-blue pt-14 sm:pt-20 pb-0 relative" id="why-nexovio">
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
                We focus on solving business challenges with clean code, intuitive design, and scalable architecture.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 4 Focused Value Pillars */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2.5 group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.copy}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>

      {/* Connected Continuity Banner - Full Width */}
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#050A18]/95 to-[#050A18]/60 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
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
                  Nexovio unites the full digital lifecycle under one roof. Begin with high-performance web engineering, introduce intuitive product UX, expand into mobile, optimize search visibility, and automate workflows with AI—all aligned without vendor silos.
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
                    Zero vendor handoff friction. Total execution continuity.
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
// 04. Process Section (4 Clear Phases)
// ----------------------------------------------------------------------
export function ProcessSection() {
  return (
    <section className="section-blue pt-14 sm:pt-20 pb-12 sm:pb-16 relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              A Disciplined Path From Strategy{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                to Launch and Scale
              </span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                We follow an agile, collaborative delivery framework designed for clarity, predictability, and continuous momentum.
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
// 05. Technology Stack Section (Interactive Orbit)
// ----------------------------------------------------------------------
export function TechStackSection() {
  return (
    <GSAPSection animation="fade-up">
      <section className="tech-section py-16 lg:py-20" id="technologies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tech-heading max-w-3xl mx-auto mb-10 space-y-3 text-center" data-animate="fade-up">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mx-auto">
              Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Built with modern technology,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500">
                chosen for the problem.
              </span>
            </h2>
          </div>

          <div className="tech-ecosystem max-w-6xl mx-auto" data-animate="fade-up">
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
// 06. Selected Work / Case Studies (Trust & Authority)
// ----------------------------------------------------------------------
export function SelectedWork() {
  return (
    <section className="section-blue pt-14 sm:pt-20 pb-12 sm:pb-16 relative" id="trust">
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
              A curated look at how we help companies solve complex technical challenges, improve user engagement, and achieve compounding digital growth.
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
// 07. Client Testimonials & Verified Reviews (Social Proof)
// ----------------------------------------------------------------------
export function TestimonialsSection() {
  return (
    <section className="section-white pt-14 sm:pt-20 pb-12 sm:pb-16 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              CLIENT EXPERIENCES &amp; REAL OUTCOMES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              What Working Together{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Looks Like</span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl mx-auto">
              Real feedback from operations heads, law partners, and business owners who trusted Nexovio with mission-critical web platforms, custom workflows, and high-stakes migrations.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CLIENT_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-brand-cyan/45 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Star Rating & Category Pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    {/* <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold">
                      {t.category}
                    </span> */}
                  </div>

                  {/* Highlight pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.highlight}</span>
                  </div>

                  {/* Real Humanized Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Footer with Real Author, Role, Company & Verified Status */}
                <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-xs font-bold text-brand-cyan shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span>{t.author}</span>
                        <CheckCircle2 className="w-3 h-3 text-brand-cyan" />
                      </div>
                      <div className="text-[11px] text-muted">
                        {t.role} • <span className="font-medium text-slate-700 dark:text-slate-300">{t.company}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 08. Flexible Engagement & Partnership Models
// ----------------------------------------------------------------------
export function EngagementModelsSection({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section className="section-blue pt-14 sm:pt-20 pb-12 sm:pb-16 relative" id="engagement">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              TRANSPARENT COLLABORATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Flexible Engagement Models{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Tailored to Your Stage</span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl mx-auto">
              No opaque agency overhead, no revolving junior staff, and no endless sales pitches. Work directly with senior builders under clear terms structured around your actual delivery goals.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ENGAGEMENT_MODELS.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className={cn(
                    "rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group",
                    model.popular
                      ? "bg-surface-elevated/90 border-2 border-brand-cyan shadow-2xl shadow-brand-cyan/15 -translate-y-1.5"
                      : "bg-surface-elevated/70 border border-border-subtle hover:border-brand-cyan/40 hover:shadow-lg"
                  )}
                >
                  {model.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-cyan text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                      Most Requested
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Header: Icon & Timeline Pill */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-border-subtle text-muted">
                        {model.timelineBadge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                        {model.title}
                      </h3>
                      <div className="text-xs font-semibold text-brand-cyan mb-3">
                        {model.tagline}
                      </div>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    {/* Pricing / Engagement transparency note */}
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-border-subtle text-xs text-foreground/90 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>{model.pricingNote}</span>
                    </div>

                    {/* Features list */}
                    <div className="pt-2 border-t border-border-subtle space-y-2.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold mb-1">
                        What&apos;s Included:
                      </div>
                      {model.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                          <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal for callout */}
                    <div className="p-3 rounded-xl bg-brand-cyan/5 border border-brand-cyan/15 text-xs text-muted">
                      <span className="font-semibold text-brand-cyan">Best for: </span>
                      <span>{model.idealFor}</span>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border-subtle">
                    <Button
                      onClick={onOpenModal ? onOpenModal : undefined}
                      href={!onOpenModal ? model.ctaLink : undefined}
                      variant={model.popular ? "primary" : "secondary"}
                      size="md"
                      className="w-full justify-center text-center font-bold"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {model.ctaText}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* Bottom Consultation Reassurance */}
        <AnimateOnScroll variant="fadeUp" duration={0.6}>
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-muted max-w-2xl mx-auto">
              Unsure which model fits best? We can review your technical requirements in a 20-minute discovery call — no aggressive sales pitch, just practical engineering guidance and transparent recommendations.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 09. Latest Engineering Insights & Articles (Blog Feed)
// ----------------------------------------------------------------------
export function BlogInsightsSection({ initialArticles }: { initialArticles?: any[] }) {
  const [articles, setArticles] = useState<FeaturedArticleItem[]>(() =>
    prepareFeaturedArticles(initialArticles)
  );

  useEffect(() => {
    let isMounted = true;
    fetch("/api/admin/blog")
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data.success && Array.isArray(data.articles) && data.articles.length > 0) {
          const curated = prepareFeaturedArticles(data.articles);
          if (curated.length > 0) {
            setArticles(curated);
          }
        }
      })
      .catch(() => { });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="section-white pt-14 sm:pt-20 pb-12 sm:pb-16 relative" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="flex flex-col md:flex-row md:items-end justify-center mb-8 gap-6">
            <div className="space-y-3 text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                THOUGHT LEADERSHIP &amp; ENGINEERING INSIGHTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Latest Insights &amp;{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">Engineering Articles</span>
              </h2>
              <p className="text-base max-w-3xl mx-auto sm:text-lg text-muted leading-relaxed">
                Practical perspectives on modern web architecture, search performance, and AI-driven workflows. Updated dynamically as new research, guides, and client solutions are published.
              </p>
            </div>
          </div>
          <div className="flex justify-end shrink-0 w-full md:w-auto mb-5">
            <Button
              href="/blog"
              variant="secondary"
              size="md"
              fullWidthMobile={false}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-fit whitespace-nowrap ml-auto"
            >
              View All Articles
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block h-full outline-none"
              >
                <div className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-7 flex flex-col justify-between h-full hover:border-brand-cyan/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Optional Thumbnail Image */}
                    {article.featuredImage && (
                      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900/10 dark:bg-white/5 border border-border-subtle">
                        <Image
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    )}

                    {/* Category Pill, Badges & Reading Time */}
                    <div className="flex items-center justify-between text-xs gap-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-semibold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/20">
                          {article.category}
                        </span>
                        {article.isNew && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                            <Sparkles className="w-2.5 h-2.5" />
                            New
                          </span>
                        )}
                        {!article.isNew && article.isFeatured && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-brand-cyan transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-border-subtle flex items-center justify-between text-xs font-bold text-brand-cyan">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ==========================================
// MAIN HOMEPAGE COMPONENT
// ==========================================
export default function Homepage({ initialArticles }: { initialArticles?: any[] }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* 01. Hero Section */}
      <HeroSection onOpenModal={() => setModalOpen(true)} />

      {/* 02. Capabilities Marquee Ticker */}
      <CapabilitiesTickerSection />

      {/* 03. Solutions for Your Business (6 High-Impact Visual Cards) */}
      <WorkflowSolutionsSection />

      {/* 04. Key Impact Metrics Bar */}
      <ImpactMetricsSection />

      {/* 05. Why Nexovio & Connected Continuity */}
      <WhyNexovio />

      {/* 07. Disciplined 4-Phase Process */}
      <ProcessSection />

      {/* 08. Technology Stack Orbit */}
      <TechStackSection />

      {/* 09. Selected Work / Case Studies */}
      <SelectedWork />

      {/* 10. Client Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* 11. Flexible Engagement Models */}
      <EngagementModelsSection onOpenModal={() => setModalOpen(true)} />

      {/* 12. Latest Engineering Insights / Blog Feed */}
      <BlogInsightsSection initialArticles={initialArticles} />

      {/* 13. Frequently Asked Questions */}
      <FaqSection
        variant="white"
        badge="FAQ"
        title="Frequently Asked"
        highlightText="Questions"
        description="Precise information about our custom web builds, AI capabilities, project methodologies, and engineering processes."
      />
    </>
  );
}
