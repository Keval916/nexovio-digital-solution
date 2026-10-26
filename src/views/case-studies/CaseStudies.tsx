"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Rocket,
  TrendingUp,
  Star,
  Send,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { FaqSection } from "@/src/components/sections/FaqSection";
import { SITE_URL } from "@/src/lib/seo";

interface CaseStudyCardItem {
  id: string;
  slug: string;
  category: "Web Development" | "Mobile Applications" | "SEO" | "UI/UX Design" | "AI & Automation";
  title: string;
  description: string;
  image: string;
  alt: string;
}

const CASE_STUDY_LISTING_CARDS: CaseStudyCardItem[] = [
  {
    id: "healthcare-platform",
    slug: "lumina-health-patient-experience",
    category: "Web Development",
    title: "Modernizing a Healthcare Platform for Better Patient Engagement",
    description:
      "We built a scalable, user-friendly web application for a leading healthcare provider, improving patient engagement and operational efficiency.",
    image: "/images/case-studies/hub/healthcare-platform-patient-engagement-hd.jpg",
    alt: "Modernizing a healthcare web platform shown on laptop desk by Nexovio",
  },
  {
    id: "retail-mobile-app",
    slug: "fintech-mobile-app",
    category: "Mobile Applications",
    title: "Building a Feature-Rich Mobile App for a Retail Brand",
    description:
      "We developed a seamless mobile experience that increased customer retention and drove higher sales for a growing retail brand.",
    image: "/images/case-studies/hub/retail-mobile-app-feature-rich-hd.jpg",
    alt: "Hand holding feature-rich retail and fintech mobile app interface designed by Nexovio",
  },
  {
    id: "saas-seo-growth",
    slug: "b2b-digital-platform",
    category: "SEO",
    title: "Boosting Organic Traffic for a SaaS Company",
    description:
      "Our SEO strategy helped a SaaS business achieve 3x growth in organic traffic and significantly improve search rankings.",
    image: "/images/case-studies/hub/saas-organic-traffic-seo-growth-hd.jpg",
    alt: "Boosting organic traffic for enterprise SaaS company with analytics dashboard on laptop",
  },
  {
    id: "digital-platform-uiux",
    slug: "inside-injury",
    category: "UI/UX Design",
    title: "Redesigning a Digital Platform for Better User Experience",
    description:
      "We refreshed the UI/UX of a complex platform, resulting in higher user satisfaction and increased product adoption.",
    image: "/images/case-studies/hub/digital-platform-ui-ux-redesign-hd.jpg",
    alt: "Redesigning digital platform UI/UX wireframes and user journey maps on modern workstation by Nexovio",
  },
  {
    id: "logistics-ai-automation",
    slug: "pulse-logistics-organic-growth-engine",
    category: "AI & Automation",
    title: "Implementing AI-Powered Automation for a Logistics Company",
    description:
      "We introduced AI-driven automation to streamline operations, reduce manual work, and improve forecast accuracy.",
    image: "/images/case-studies/hub/logistics-ai-powered-automation-hd.jpg",
    alt: "Implementing AI-powered automation workflows and neural document processing for logistics by Nexovio",
  },
  {
    id: "scalable-crm-bpo",
    slug: "infiniti-home-comfort",
    category: "Web Development",
    title: "Creating a Scalable CRM for a Growing BPO",
    description:
      "We built a custom CRM solution to help the client manage customer interactions, improve efficiency, and scale operations seamlessly.",
    image: "/images/case-studies/hub/scalable-crm-bpo-customer-support-hd.jpg",
    alt: "Customer support specialist using custom scalable CRM solution on laptop in modern office by Nexovio",
  },
  {
    id: "parts-connexion-ecommerce",
    slug: "parts-connexion",
    category: "Web Development",
    title: "Building a High-Performance Website for Parts Connexion",
    description:
      "We designed and developed a modern, responsive website for Parts Connexion to enhance user experience and drive more qualified leads.",
    image: "/images/case-studies/hub/parts-connexion-ecommerce-platform-hd.jpg",
    alt: "Parts Connexion automotive e-commerce responsive website design shown on laptop and mobile screen by Nexovio",
  },
  {
    id: "infiniti-home-comfort-hvac",
    slug: "infiniti-home-comfort",
    category: "Web Development",
    title: "On-Demand HVAC Service Booking Platform for Infiniti Home Comfort",
    description:
      "We developed a high-converting digital platform with live technician dispatch and online appointment scheduling, driving a 210% increase in bookings.",
    image: "/images/case-studies/hub/infiniti-home-comfort-hvac-booking-platform-hd.jpg",
    alt: "Infiniti Home Comfort HVAC online booking and technician dispatch platform shown on laptop desk by Nexovio",
  },
  {
    id: "inside-injury-legal-platform",
    slug: "inside-injury",
    category: "UI/UX Design",
    title: "Digital Platform & Lead Acquisition System for Inside Injury",
    description:
      "A complete brand and digital transformation for a legal practice, featuring empathetic case evaluation funnels and a 180% surge in qualified claims.",
    image: "/images/case-studies/hub/inside-injury-legal-website-redesign-hd.jpg",
    alt: "Inside Injury personal injury legal firm website redesign on modern workstation by Nexovio",
  },
];

const FILTER_TABS = [
  "All",
  "Web Development",
  "Mobile Applications",
  "SEO",
  "UI/UX Design",
  "AI & Automation",
] as const;

type FilterTab = (typeof FILTER_TABS)[number];

const CASE_STUDIES_FAQS = [
  {
    question: "Are the performance and conversion metrics in these case studies verified?",
    answer:
      "Yes. All conversion lift numbers, Core Web Vitals speed benchmarks, and organic ranking results are verified through Google PageSpeed Insights, Lighthouse audits, Google Search Console, and client-approved GA4 analytics reports.",
  },
  {
    question: "Can Nexovio handle projects similar to those demonstrated in these case studies?",
    answer:
      "Absolutely. We specialize in custom web development, complex headless migrations (Shopify Plus, WooCommerce, custom headless), Next.js architecture, bespoke AI workflow engines, cross-platform mobile apps, and performance-driven SEO systems for growing businesses and enterprise clients.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs) for proprietary project architectures?",
    answer:
      "Yes. For clients with proprietary IP, trade secrets, or unreleased technology products, we strictly execute mutual NDAs prior to any technical discussions and only publish teardowns with explicit written client authorization.",
  },
  {
    question: "How long do complex engineering engagements typically take to deliver?",
    answer:
      "Timeline depends on scope: custom web applications and migrations typically span 6 to 12 weeks, bespoke AI integrations range from 4 to 8 weeks, cross-platform mobile apps take 8 to 14 weeks, and performance optimization sprints are executed within 2 to 4 weeks.",
  },
  {
    question: "How do you ensure zero downtime during large ecommerce database migrations?",
    answer:
      "We employ parallel staging architectures, continuous bidirectional database sync routines, and pre-propagation DNS cutover strategies to ensure customer transactions, catalog queries, and cart sessions experience zero downtime.",
  },
];

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredCards =
    activeTab === "All"
      ? CASE_STUDY_LISTING_CARDS
      : CASE_STUDY_LISTING_CARDS.filter((card) => card.category === activeTab);

  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/case-studies#webpage`,
        url: `${SITE_URL}/case-studies`,
        name: "Case Studies | Nexovio Digital Solutions",
        description:
          "Explore how Nexovio helps businesses turn ideas into powerful digital solutions. Real-world case studies showcasing strategy, technology, and measurable impact.",
        publisher: {
          "@type": "Organization",
          name: "Nexovio Digital Solutions",
          url: SITE_URL,
          logo: `${SITE_URL}/logo.svg`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/case-studies#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: `${SITE_URL}/case-studies`,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/case-studies#itemlist`,
        itemListElement: CASE_STUDY_LISTING_CARDS.map((study, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: study.title,
          url: `${SITE_URL}/case-studies/${study.slug}`,
          description: study.description,
        })),
      },
    ],
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />

      {/* ================================================================== */}
      {/* 1. HERO SECTION (MATCHING THE REFERENCE MOCKUP)                    */}
      {/* ================================================================== */}
      <section className="pt-14 lg:pt-16 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        {/* Subtle decorative curved background accent */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-blue-50/70 via-blue-50/30 to-transparent dark:from-brand-cyan/5 dark:via-transparent pointer-events-none rounded-bl-[120px]" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-4">
            <Breadcrumbs items={[{ name: "Case Studies", url: "/case-studies" }]} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-electric dark:text-brand-cyan">
                CASE STUDIES
              </div>

              {/* Main Heading */}
              <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Real Projects.{" "}
                <span className="text-brand-electric dark:text-brand-cyan">
                  Measurable
                </span>{" "}
                Results.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
                Explore how Nexovio helps businesses turn ideas into powerful digital solutions.
                Our case studies showcase real-world examples of strategy, technology, and
                measurable impact across industries.
              </p>

              {/* 3 Feature Pills / Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
                {/* 1. Proven Expertise */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center shrink-0 shadow-xs">
                    <Target className="w-5 h-5 text-brand-electric dark:text-brand-cyan" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Proven Expertise
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Real business outcomes
                    </div>
                  </div>
                </div>

                {/* 2. Client Success */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center shrink-0 shadow-xs">
                    <Users className="w-5 h-5 text-brand-electric dark:text-brand-cyan" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Client Success
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Long-term partnerships
                    </div>
                  </div>
                </div>

                {/* 3. Innovative Solutions */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center shrink-0 shadow-xs">
                    <Lightbulb className="w-5 h-5 text-brand-electric dark:text-brand-cyan" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Innovative Solutions
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Built for what&apos;s next
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Column with Curved Accent & Floating Badge */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Outer decorative soft curve */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-electric/15 to-brand-cyan/20 rounded-3xl blur-2xl -z-10" />

              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/images/case-studies/hub/case-studies-hero-happy-client-team-project-success-hd.jpg"
                  alt="Happy client and digital engineering lead celebrating successful project launch and measurable business growth results by Nexovio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. FILTER TABS & CASE STUDIES GRID                                 */}
      {/* ================================================================== */}
      <section className="py-12 sm:py-16 bg-white dark:bg-[#030712] border-t border-slate-200/70 dark:border-white/5" id="case-studies-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Horizontal Filter Tabs */}
          <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all select-none ${isActive
                    ? "bg-brand-electric text-white shadow-md shadow-brand-electric/25"
                    : "bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-brand-electric/40 hover:text-brand-electric dark:hover:text-brand-cyan"
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 3-Column Case Study Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredCards.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-xl hover:border-brand-electric/40 dark:hover:border-brand-cyan/40 transition-all flex flex-col justify-between"
              >
                {/* Image Top */}
                <Link
                  href={`/case-studies/${item.slug}`}
                  className="relative w-full aspect-[16/9.5] overflow-hidden bg-slate-100 dark:bg-slate-900 block"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 420px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </Link>

                {/* Card Body */}
                <div className="p-6 sm:p-7 text-left flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Category Pill Tag */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-brand-electric dark:text-brand-cyan bg-blue-50 dark:bg-brand-cyan/10 border border-brand-electric/20 dark:border-brand-cyan/25">
                      <span>{item.category}</span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-brand-electric dark:group-hover:text-brand-cyan transition-colors leading-snug">
                      <Link href={`/case-studies/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* View Case Study Link */}
                  <div className="pt-2">
                    <Link
                      href={`/case-studies/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-electric dark:text-brand-cyan hover:underline group/link"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. OUR IMPACT SECTION                                              */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50/60 dark:bg-[#030818] border-y border-slate-200/70 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-blue-50/40 dark:bg-white/[0.02] border border-blue-100/70 dark:border-white/10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-electric dark:text-brand-cyan">
                  OUR IMPACT
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Trusted by Businesses Across Industries
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  From startups to enterprises, we&apos;ve helped organizations achieve their
                  goals with technology, creativity, and a client-first approach.
                </p>
              </div>

              {/* Right Column: 4 Stat Cards in a row */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* 1. Projects Delivered */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col items-center text-center space-y-2 hover:border-brand-electric/40 transition-all">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center mb-1">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-electric dark:text-brand-cyan tracking-tight">
                    100+
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    Projects Delivered
                  </div>
                </div>

                {/* 2. Happy Clients */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col items-center text-center space-y-2 hover:border-brand-electric/40 transition-all">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center mb-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-electric dark:text-brand-cyan tracking-tight">
                    50+
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    Happy Clients
                  </div>
                </div>

                {/* 3. Average Growth */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col items-center text-center space-y-2 hover:border-brand-electric/40 transition-all">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center mb-1">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-electric dark:text-brand-cyan tracking-tight">
                    3x
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    Average Growth
                  </div>
                </div>

                {/* 4. Client Satisfaction */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col items-center text-center space-y-2 hover:border-brand-electric/40 transition-all">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center mb-1">
                    <Star className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-electric dark:text-brand-cyan tracking-tight">
                    98%
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. BOTTOM CTA SECTION ("LET'S BUILD YOUR SUCCESS STORY")            */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 p-8 sm:p-12 lg:p-14 shadow-lg">
            {/* Background Image with Warm Ambient Sunlight */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image
                src="/images/case-studies/hub/case-studies-cta-workstation-hd.jpg"
                alt="Modern workstation with laptop and coffee for client consultations"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Title, Copy & Solid Blue Button */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-electric dark:text-brand-cyan">
                  LET&apos;S BUILD YOUR SUCCESS STORY
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Ready to Start Your Next Project?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
                  Let's turn your ideas into impactful digital solutions. Get in touch with our team today.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-electric hover:bg-brand-electric/90 shadow-lg shadow-brand-electric/25 transition-all group"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Floating White Card with Telegram Icon */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0b1224] border border-slate-200/90 dark:border-white/15 shadow-xl space-y-4 text-left">
                  <div className="w-11 h-11 rounded-full bg-brand-electric text-white flex items-center justify-center shadow-md shadow-brand-electric/25">
                    <Send className="w-5 h-5 -rotate-12 translate-x-0.5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      Have a project in mind?
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      We'd love to hear about it. Share your requirements and we'll get back to you shortly.
                    </p>
                  </div>
                  <div className="pt-1">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-electric dark:text-brand-cyan hover:underline group/cta"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. CASE STUDY FAQ SECTION                                          */}
      {/* ================================================================== */}
      <FaqSection
        variant="white"
        faqs={CASE_STUDIES_FAQS}
        badge="CASE STUDY FAQ"
        title="Frequently Asked"
        highlightText="Questions"
        description="Common technical and operational questions regarding our delivery metrics, benchmarks, and project methodologies."
        className="pt-16 pb-16 sm:pt-20 sm:pb-20"
      />
    </div>
  );
}
