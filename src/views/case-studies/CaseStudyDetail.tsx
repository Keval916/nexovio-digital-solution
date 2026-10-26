"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Car,
  Truck,
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
  Clock,
  Smartphone,
  Sparkles,
  Layers,
  Cpu,
  Building2,
  Code2,
  Star,
  Check,
  ShoppingBag,
  Wrench,
  Search,
} from "lucide-react";
import { getCaseStudyBySlug, CASE_STUDIES, CaseStudy } from "@/src/data/case-studies";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { trackCtaClick } from "@/src/lib/analytics";
import { SITE_URL, BRAND_LOGO_SQUARE } from "@/src/lib/seo";

// ==========================================
// CLIENT LOGO COMPONENT (PARTS CONNEXION & OTHERS)
// ==========================================

function ClientBrandLogo({ client }: { client: string }) {
  if (client.toLowerCase().includes("parts")) {
    return (
      <div className="flex items-center gap-3 select-none">
        {/* Gear Icon with Wrench */}
        <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 text-amber-500 shadow-md">
          <svg
            className="w-7 h-7 text-amber-500 animate-spin-slow"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 17.5C8.96 17.5 6.5 15.04 6.5 12C6.5 8.96 8.96 6.5 12 6.5C15.04 6.5 17.5 8.96 17.5 12C17.5 15.04 15.04 17.5 12 17.5Z"
            />
          </svg>
        </div>
        <div className="text-left">
          <div className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none">
            PARTS
          </div>
          <div className="text-base sm:text-lg font-black tracking-tight text-amber-500 leading-none">
            CONNEXION
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-10 h-10 rounded-xl bg-brand-electric/15 text-brand-electric dark:text-brand-cyan font-black flex items-center justify-center text-lg">
        {client.charAt(0)}
      </div>
      <div className="text-left">
        <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white block">
          {client}
        </span>
      </div>
    </div>
  );
}

// ==========================================
// HANDWRITTEN ANNOTATIONS
// ==========================================

function BetterDesignAnnotation({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-end pointer-events-none ${className}`}>
      <div className="font-serif italic text-sm sm:text-base font-semibold text-brand-electric dark:text-brand-cyan tracking-wide drop-shadow-xs text-right leading-tight transform -rotate-3">
        Better Design,
        <br />
        Bigger Impact
      </div>
      <svg
        className="w-12 h-10 text-brand-electric dark:text-brand-cyan transform -rotate-12 mt-1 mr-2"
        viewBox="0 0 50 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M42 4 C35 15, 20 25, 10 32" />
        <path d="M8 22 L10 32 L20 30" />
      </svg>
    </div>
  );
}

function UserCenteredAnnotation({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center pointer-events-none ${className}`}>
      <div className="font-serif italic text-sm sm:text-base font-semibold text-brand-electric dark:text-brand-cyan tracking-wide drop-shadow-xs leading-tight transform -rotate-2">
        User-Centered
        <br />
        Design
      </div>
      <svg
        className="w-10 h-10 text-brand-electric dark:text-brand-cyan transform rotate-12 mt-1"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 4 C15 15, 16 26, 22 34" />
        <path d="M14 28 L22 34 L26 24" />
      </svg>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyDetail({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    notFound();
  }

  // Get related case studies (prefer 5 cards including active one, or other studies)
  const allCaseStudies = CASE_STUDIES;
  const otherStudies = allCaseStudies.filter((s) => s.slug !== study.slug);

  // SEO Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/case-studies/${study.slug}#article`,
        headline: study.title,
        description: study.seoDescription,
        url: `${SITE_URL}/case-studies/${study.slug}`,
        datePublished: study.publishedAt,
        dateModified: study.publishedAt,
        image: `${SITE_URL}${study.coverImage}`,
        author: {
          "@type": "Organization",
          name: "Nexovio Digital Solutions",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "Nexovio Digital Solutions",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}${BRAND_LOGO_SQUARE}`,
          },
        },
        about: [
          { "@type": "Thing", name: study.industry },
          ...study.services.map((svc) => ({ "@type": "Thing", name: svc })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/case-studies/${study.slug}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: study.title,
            item: `${SITE_URL}/case-studies/${study.slug}`,
          },
        ],
      },
    ],
  };

  // Safe Fallbacks for Structured Content
  const overviewHeading = study.overviewHeading || `About ${study.client}`;
  const overviewDescription = study.overviewDescription || study.challenge;
  const challengeTitle = study.challengeTitle || "Outdated Design, Limited Engagement";
  const solutionTitle = study.solutionTitle || "Modern Website with Better UX and Performance";
  const resultsTitle = study.resultsTitle || "A Stronger Online Presence and Better Business Growth";

  const challengePoints = study.challengePoints || [
    "Outdated and non-responsive legacy design",
    "Difficult product search and complex navigation",
    "Limited product visibility and categorization",
    "Low conversion rate and customer engagement",
  ];

  const solutionPoints = study.solutionPoints || [
    "Modern, responsive and mobile-friendly design",
    "Intuitive product search and filter options",
    "Clear category structure and product showcase",
    "SEO-friendly and high-performance setup",
  ];

  const overviewPillars = study.overviewPillars || [
    { title: "Automotive Parts & Accessories", iconType: "car" as const },
    { title: "Global Shipping & Distribution", iconType: "shipping" as const },
    { title: "Trusted by Businesses Worldwide", iconType: "globe" as const },
    { title: "Quality & Reliability", iconType: "shield" as const },
  ];

  const heroShowcaseImage =
    study.highlightImages?.heroShowcase ||
    "/images/case-studies/parts-connexion/parts-connexion-ecommerce-responsive-laptop-mobile.jpg";

  const designerImage =
    study.highlightImages?.designerAtWork ||
    "/images/case-studies/parts-connexion/ui-ux-designer-automotive-ecommerce-desk.jpg";

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* =================================================================== */}
      {/* 1. HERO SECTION                                                    */}
      {/* =================================================================== */}
      <section className="pt-14 lg:pt-16 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        {/* Ambient Subtle Glow Accents */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-60" />
        <div className="absolute -top-36 -right-36 w-96 h-96 bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-36 -left-36 w-96 h-96 bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, H1, Subtitle & 4 Meta Badges */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{study.category || "Web Design & Development"}</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white">
                {study.slug === "parts-connexion" ? (
                  <>
                    Building a High-Performance Website for{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Parts Connexion
                    </span>
                  </>
                ) : (
                  study.title
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
                {study.subtitle || study.strategy}
              </p>

              {/* 4-Item Meta Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
                {/* Client */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Users className="w-3.5 h-3.5 text-brand-electric dark:text-brand-cyan" />
                    <span>Client</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {study.client}
                  </div>
                </div>

                {/* Industry */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Car className="w-3.5 h-3.5 text-brand-electric dark:text-brand-cyan" />
                    <span>Industry</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {study.industry}
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Code2 className="w-3.5 h-3.5 text-brand-electric dark:text-brand-cyan" />
                    <span>Project Type</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {study.projectType || "Website Design & Dev"}
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5 text-brand-electric dark:text-brand-cyan" />
                    <span>Timeline</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {study.timeline || "2 Months"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Laptop & Phone Visual with Handwritten Sticker */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Handwritten Annotation Sticker (Top-Right) */}
              <BetterDesignAnnotation className="absolute -top-6 right-2 sm:right-6 z-20" />

              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
                <Image
                  src={heroShowcaseImage}
                  alt={study.coverImageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. PROJECT OVERVIEW SECTION                                         */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-[#030712] border-y border-slate-200/70 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Humanized Description & Button */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                <span>PROJECT OVERVIEW</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {overviewHeading}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {overviewDescription}
              </p>

            </div>

            {/* Right Column: 4 Feature Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {overviewPillars.map((pillar, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-brand-electric/40 dark:hover:border-brand-cyan/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                      {pillar.iconType === "car" && <Car className="w-6 h-6" />}
                      {pillar.iconType === "shipping" && <Truck className="w-6 h-6" />}
                      {pillar.iconType === "globe" && <Globe className="w-6 h-6" />}
                      {pillar.iconType === "shield" && <ShieldCheck className="w-6 h-6" />}
                      {!["car", "shipping", "globe", "shield"].includes(pillar.iconType || "") && (
                        <Sparkles className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {pillar.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. THE CHALLENGE & OUR SOLUTION SECTION (WITH DESIGNER PHOTO)       */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: The Challenge & Our Solution Cards */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* The Challenge Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-brand-cyan">
                  THE CHALLENGE
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {challengeTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {study.challenge}
                </p>

                <div className="space-y-2.5 pt-2">
                  {challengePoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-red-500 dark:text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Solution Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-green-500 dark:text-brand-cyan">
                  OUR SOLUTION
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {solutionTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {study.solution}
                </p>

                <div className="space-y-2.5 pt-2">
                  {solutionPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Designer at Work Photo with "User-Centered Design" Annotation */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Handwritten Annotation Sticker */}
              <UserCenteredAnnotation className="absolute -top-8 left-1/2 -translate-x-1/2 z-20" />

              <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
                <Image
                  src={designerImage}
                  alt="Senior UI/UX designer crafting user-centered automotive e-commerce interface on high-resolution monitor at Nexovio agency"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. THE RESULTS SECTION (4 KPI METRICS)                             */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 bg-blue-50/50 dark:bg-[#030818] border-y border-blue-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Copy & View More Case Studies Button */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                <span>THE RESULTS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                A Stronger Online Presence and{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Better Business Growth
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {study.results}
              </p>

              <div className="pt-2">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-brand hover:opacity-95 shadow-lg shadow-brand-electric/20 transition-all group"
                >
                  <span>View More Case Studies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Stat Cards */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {study.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 shadow-sm flex flex-col items-center text-center space-y-2 hover:border-brand-electric/40 dark:hover:border-brand-cyan/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center mb-1">
                    {idx === 0 && <TrendingUp className="w-5 h-5" />}
                    {idx === 1 && <Users className="w-5 h-5" />}
                    {idx === 2 && <Clock className="w-5 h-5" />}
                    {idx === 3 && <Smartphone className="w-5 h-5" />}
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-electric dark:text-brand-cyan tracking-tight">
                    {stat.value}
                  </div>

                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. PROJECT HIGHLIGHTS SECTION                                       */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Header */}
          <div className="text-left space-y-3 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Project Highlights
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A closer look at the key screens and features we developed for {study.client}.
            </p>
          </div>

          {/* Grid of Screen Mockups */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Column: Big Laptop Mockup for Homepage Design */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[380px] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-sm bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">
                <Image
                  src={
                    study.highlightImages?.homepageMockup ||
                    "/images/case-studies/parts-connexion/parts-connexion-homepage-design-laptop-mockup.jpg"
                  }
                  alt={`${study.client} homepage design layout on laptop mockup`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain"
                />
              </div>
              <div className="text-left mt-3">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Homepage Design
                </span>
              </div>
            </div>

            {/* Right Column: 2x2 Grid of Feature Screens */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 1. Product Categories Screen */}
              <div className="flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-sm bg-white dark:bg-slate-900 p-2">
                  <Image
                    src={
                      study.highlightImages?.categoriesMockup ||
                      "/images/case-studies/parts-connexion/parts-connexion-product-categories-ui-card.jpg"
                    }
                    alt="Parts Connexion categorized automotive spare parts navigation"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-contain"
                  />
                </div>
                <div className="text-left mt-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Product Categories
                  </span>
                </div>
              </div>

              {/* 2. Featured Products Screen (Styled UI Card) */}
              <div className="flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-sm bg-white dark:bg-white/[0.03] p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-2">
                    <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                      Featured Products
                    </span>
                    <span className="text-[10px] text-brand-electric dark:text-brand-cyan font-bold">
                      View All
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-1">
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-1">
                      <div className="text-[10px] font-bold text-slate-900 dark:text-white truncate">
                        Turbocharger
                      </div>
                      <div className="text-[10px] font-extrabold text-brand-electric dark:text-brand-cyan">
                        $849.00
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-1">
                      <div className="text-[10px] font-bold text-slate-900 dark:text-white truncate">
                        Ceramic Brake
                      </div>
                      <div className="text-[10px] font-extrabold text-brand-electric dark:text-brand-cyan">
                        $89.50
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-1">
                      <div className="text-[10px] font-bold text-slate-900 dark:text-white truncate">
                        Spark Plugs
                      </div>
                      <div className="text-[10px] font-extrabold text-brand-electric dark:text-brand-cyan">
                        $45.00
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-1">
                      <div className="text-[10px] font-bold text-slate-900 dark:text-white truncate">
                        Oil Filter
                      </div>
                      <div className="text-[10px] font-extrabold text-brand-electric dark:text-brand-cyan">
                        $28.00
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[10px] text-slate-500">
                    <span>40,000+ SKUs</span>
                    <span className="text-emerald-500 font-bold">In Stock</span>
                  </div>
                </div>
                <div className="text-left mt-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Featured Products
                  </span>
                </div>
              </div>

              {/* 3. Mobile View Mockup */}
              <div className="flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-sm bg-slate-50 dark:bg-slate-900 p-2">
                  <Image
                    src={
                      study.highlightImages?.mobileMockup ||
                      "/images/case-studies/parts-connexion/parts-connexion-mobile-responsive-ecommerce-screen.jpg"
                    }
                    alt="Parts Connexion mobile optimized e-commerce interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-contain"
                  />
                </div>
                <div className="text-left mt-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Mobile View
                  </span>
                </div>
              </div>

              {/* 4. Product Detail Screen (Styled UI Card) */}
              <div className="flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-sm bg-white dark:bg-white/[0.03] p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-2">
                    <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                      Product Detail
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                      Verified Fit
                    </span>
                  </div>

                  <div className="space-y-1.5 my-1">
                    <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                      Vented Brake Rotor Disc
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 text-[10px]">
                      {"★".repeat(5)} <span className="text-slate-500 text-[9px]">(142)</span>
                    </div>
                    <div className="text-sm font-black text-brand-electric dark:text-brand-cyan">
                      $149.00
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-white/10 flex items-center gap-2">
                    <div className="px-2 py-1 rounded-lg border border-slate-200 dark:border-white/15 text-[10px] font-bold">
                      Qty: 1
                    </div>
                    <button
                      type="button"
                      className="flex-1 py-1 rounded-lg bg-gradient-brand text-white font-bold text-[10px] shadow-sm text-center"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="text-left mt-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Product Detail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. CLIENT TESTIMONIAL & BRAND LOGO SECTION                          */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50/70 dark:bg-[#030712] border-y border-slate-200/70 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Client Headshot Photo */}
              <div className="lg:col-span-3 flex justify-center lg:justify-start">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-brand-electric/20 dark:border-brand-cyan/30 shadow-md">
                  <Image
                    src={
                      study.slug === "parts-connexion"
                        ? "/images/case-studies/parts-connexion/michael-roberts-founder-parts-connexion.jpg"
                        : "/images/services/seo/rohan-mehta-founder-testimonial.jpg"
                    }
                    alt={study.clientQuote?.author || study.client}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Center: Quote Mark, Testimonial Text & Author */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <div className="text-4xl sm:text-5xl font-serif text-brand-electric dark:text-brand-cyan leading-none select-none">
                  “
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 italic leading-relaxed font-normal">
                  &ldquo;{study.clientQuote?.quote || "Nexovio delivered a modern, user-friendly website that perfectly fits our brand and business needs. The team was professional, responsive and easy to work with."}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {study.clientQuote?.author || "Michael Roberts"}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {study.clientQuote?.role || "Founder"}, {study.clientQuote?.company || study.client}
                  </div>
                </div>
              </div>

              {/* Right: Client Brand Logo */}
              <div className="lg:col-span-3 flex justify-center lg:justify-end border-t lg:border-t-0 lg:border-l border-slate-200/80 dark:border-white/10 pt-6 lg:pt-0 lg:pl-8">
                <ClientBrandLogo client={study.client} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 7. RELATED CASE STUDIES ("EXPLORE MORE SUCCESS STORIES")           */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Header: Title & View All Case Studies link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                <span>RELATED CASE STUDIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Explore More Success Stories
              </h2>
            </div>

            <div className="shrink-0">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-electric dark:text-brand-cyan hover:underline"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 5-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {allCaseStudies.slice(0, 5).map((item) => {
              const isActive = item.slug === study.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className={`group block rounded-2xl overflow-hidden bg-white dark:bg-white/[0.03] border transition-all shadow-sm hover:shadow-md ${isActive
                    ? "border-brand-electric dark:border-brand-cyan ring-2 ring-brand-electric/20"
                    : "border-slate-200/90 dark:border-white/10 hover:border-brand-electric/40 dark:hover:border-brand-cyan/40"
                    }`}
                >
                  <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                    <Image
                      src={item.coverImage}
                      alt={item.coverImageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-left flex flex-col justify-between space-y-2">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-electric dark:group-hover:text-brand-cyan transition-colors truncate">
                        {item.client}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {item.category || item.services[0]}
                      </p>
                    </div>
                    <div className="pt-2 flex items-center justify-end">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-electric dark:text-brand-cyan group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
