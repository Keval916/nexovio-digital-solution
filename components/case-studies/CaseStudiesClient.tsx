"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Clock,
  Code2,
  Layers,
  ShieldCheck,
  Quote,
  Zap,
  BarChart3,
  ExternalLink,
  Cpu,
  Database,
  Search,
  Check,
  Flame,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  BadgeCheck,
} from "lucide-react";
import { CaseStudy } from "@/data/case-studies";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface CaseStudiesClientProps {
  caseStudies: CaseStudy[];
}

const CATEGORIES = [
  "All Projects",
  "Web Development",
  "AI & Automation",
  "Mobile App Development",
  "SEO & Performance",
];

const VERIFICATION_FRAMEWORK = [
  {
    step: "01",
    title: "Baseline Performance Profiling",
    tag: "Audit & Tracing",
    description:
      "Before writing a line of code, we profile production traffic, bottleneck latency, database query times, and mobile Core Web Vitals to establish immutable benchmarks.",
    icon: Search,
    highlight: "Full Lighthouse & DevTools Traces",
  },
  {
    step: "02",
    title: "Headless & Edge-First Architecture",
    tag: "Modern Stack",
    description:
      "We decouple presentation layers from backend databases using Next.js and React, caching catalog assets at edge locations for instant global rendering under 0.9s.",
    icon: Cpu,
    highlight: "Sub-Second Global TTFB",
  },
  {
    step: "03",
    title: "Zero-Downtime Migration Protocols",
    tag: "Live Cutover",
    description:
      "For e-commerce and SaaS platforms with active revenues, we run parallel staging synchronization and bidirectional database routines to eliminate downtime entirely.",
    icon: Database,
    highlight: "Zero Revenue Loss Guarantee",
  },
  {
    step: "04",
    title: "Telemetry & Conversion Guardrails",
    tag: "Verification",
    description:
      "Post-launch telemetry is mapped via GA4 enhanced measurement, Search Console indexing logs, and Lighthouse audits to verify conversion and revenue gains.",
    icon: BarChart3,
    highlight: "100% Client-Audited Outcomes",
  },
];

const EXECUTIVE_VERIFICATIONS = [
  {
    id: "parts-connexion",
    quote:
      "The headless e-commerce migration executed by Nexovio was completely seamless without losing a single second of sales. Our checkout conversion rates jumped 92% in the first quarter, and warehouse ERP syncing is finally automated and rock solid.",
    author: "David R.",
    role: "VP of Digital Operations",
    company: "Parts Connexion",
    initial: "D",
    avatarBg: "from-cyan-500 to-blue-600",
    industryBadge: "Headless E-Commerce & Retail",
    verifiedMetricTag: "Zero Downtime Cutover",
    stats: [
      { value: "+92%", label: "Conversion Lift", colorClass: "bg-gradient-brand bg-clip-text text-transparent" },
      { value: "0 min", label: "Migration Downtime", colorClass: "text-emerald-400" },
      { value: "< 2s", label: "Automated ERP Sync", colorClass: "text-brand-cyan" },
    ],
  },
  {
    id: "inside-injury",
    quote:
      "Nexovio didn't just build a portal; they engineered a bespoke AI triage engine that cut our legal intake response times from 4 hours down to under 30 seconds. Client onboarding completion surged 25% within our first month.",
    author: "Elena Rostova",
    role: "Chief Operating Officer",
    company: "Inside Injury",
    initial: "E",
    avatarBg: "from-purple-500 to-indigo-600",
    industryBadge: "Legal Tech & AI Intake",
    verifiedMetricTag: "Sub-Minute Triage",
    stats: [
      { value: "+25%", label: "Intake Completion", colorClass: "bg-gradient-brand bg-clip-text text-transparent" },
      { value: "< 30s", label: "AI Response Latency", colorClass: "text-emerald-400" },
      { value: "99.9%", label: "Pipeline Reliability", colorClass: "text-brand-cyan" },
    ],
  },
  {
    id: "infiniti-home-comfort",
    quote:
      "Our organic Google search leads increased by 140% in under 90 days. Nexovio's localized programmatic landing page engine and frictionless mobile booking system completely transformed our seasonal acquisition pipeline.",
    author: "Marcus Vance",
    role: "Director of Growth & Marketing",
    company: "Infiniti Home Comfort",
    initial: "M",
    avatarBg: "from-amber-500 to-emerald-600",
    industryBadge: "Home Services & Local SEO",
    verifiedMetricTag: "140% Organic Surge",
    stats: [
      { value: "+140%", label: "Organic Search Leads", colorClass: "bg-gradient-brand bg-clip-text text-transparent" },
      { value: "#1 - #3", label: "Map Pack Ranking", colorClass: "text-emerald-400" },
      { value: "100/100", label: "Lighthouse Mobile", colorClass: "text-brand-cyan" },
    ],
  },
  {
    id: "strata-financial",
    quote:
      "Developing an enterprise-grade banking and treasury mobile platform requires rigorous security and zero-latency performance. Nexovio delivered bank-level biometric authentication, real-time portfolio streaming, and zero critical vulnerabilities.",
    author: "Siddharth Mehta",
    role: "VP of Engineering",
    company: "Strata Financial",
    initial: "S",
    avatarBg: "from-cyan-500 to-emerald-500",
    industryBadge: "FinTech & Secure Mobile",
    verifiedMetricTag: "SOC 2 Compliant",
    stats: [
      { value: "99.99%", label: "System Availability", colorClass: "bg-gradient-brand bg-clip-text text-transparent" },
      { value: "< 120ms", label: "Live Stream Latency", colorClass: "text-emerald-400" },
      { value: "Zero", label: "Security Defects", colorClass: "text-brand-cyan" },
    ],
  },
];

export function CaseStudiesClient({ caseStudies }: CaseStudiesClientProps) {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) =>
      prev === 0 ? EXECUTIVE_VERIFICATIONS.length - 1 : prev - 1
    );
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) =>
      prev === EXECUTIVE_VERIFICATIONS.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const filteredStudies =
    activeCategory === "All Projects"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeCategory);

  return (
    <div className="space-y-20">
      {/* ================================================================== */}
      {/* 1. EXECUTIVE PROOF STATS BAR (GLASSMORPHIC BENCHMARK STRIP)        */}
      {/* ================================================================== */}
      <AnimateOnScroll variant="fadeUp" duration={0.6}>
        <div className="rounded-3xl border border-border-subtle bg-surface-elevated/80 p-6 sm:p-10 backdrop-blur-xl shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-border-subtle relative z-10">
            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                +92%
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-[#fff]">
                Max Conversion Lift
              </div>
              <div className="text-xs text-slate-600 dark:text-[#fff] mt-0.5 font-mono">
                Post-launch checkout completion
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                0 min
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-[#fff]">
                Zero Downtime
              </div>
              <div className="text-xs text-slate-600 dark:text-[#fff] mt-0.5 font-mono">
                Seamless live database migrations
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                &lt; 0.8s
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-[#fff]">
                Sub-Second Speed
              </div>
              <div className="text-xs text-slate-600 dark:text-[#fff] mt-0.5 font-mono">
                Edge-cached Core Web Vitals
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                100%
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-[#fff]">
                Verified Outcomes
              </div>
              <div className="text-xs text-slate-600 dark:text-[#fff] mt-0.5 font-mono">
                GA4 &amp; Lighthouse audited
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ================================================================== */}
      {/* 2. INTERACTIVE CATEGORY FILTER TABS                                */}
      {/* ================================================================== */}
      <AnimateOnScroll variant="fadeUp" duration={0.5} delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto px-2">
          {CATEGORIES.map((category) => {
            const isSelected = category === activeCategory;
            const count =
              category === "All Projects"
                ? caseStudies.length
                : caseStudies.filter((s) => s.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`group flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 border outline-none select-none cursor-pointer ${isSelected
                  ? "bg-gradient-brand text-[#fff] border-transparent shadow-[0_4px_20px_rgba(0,198,255,0.35)] scale-[1.02]"
                  : "bg-surface-elevated text-slate-700 dark:text-[#fff] border-border-subtle hover:border-brand-cyan/50 hover:bg-surface-subtle"
                  }`}
              >
                <span className="dark:text-[#fff]">{category}</span>

              </button>
            );
          })}
        </div>
      </AnimateOnScroll>

      {/* ================================================================== */}
      {/* 3. CASE STUDY FEATURED SHOWCASE CARDS                              */}
      {/* ================================================================== */}
      <div className="space-y-12">
        {filteredStudies.map((study, index) => (
          <AnimateOnScroll
            key={study.slug}
            variant="fadeUp"
            duration={0.6}
            delay={index * 0.08}
          >
            <article className="rounded-3xl border border-border-subtle bg-surface-elevated/75 p-6 sm:p-10 lg:p-12 hover:border-brand-cyan/45 transition-all duration-300 shadow-2xl group overflow-hidden relative">
              {/* Subtle radial ambient glow on hover */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-cyan/10 transition-colors" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Column: Visual Mockup Showcase */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <Link href={`/case-studies/${study.slug}`} className="block group/image">
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-brand-cyan/25 bg-[#050A14] group-hover/image:border-brand-cyan/60 shadow-xl transition-all duration-500">
                      <Image
                        src={study.coverImage}
                        alt={study.coverImageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover group-hover/image:scale-[1.03] transition-transform duration-700 ease-out"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/35 backdrop-blur-md">
                          Verified Case Study
                        </span>
                      </div>

                      <div className="absolute top-3.5 right-3.5">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-500/35 backdrop-blur-md flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Delivered</span>
                        </span>
                      </div>

                      {/* Bottom Quick Result Banner inside image */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                          <TrendingUp className="w-4 h-4 text-brand-cyan shrink-0" />
                          <span className="text-xs font-bold text-[#fff] tracking-wide truncate">
                            {study.results}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-brand-cyan shrink-0 hidden sm:inline ml-2">
                          View Teardown →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Right Column: Context, Verified Stats & Teardown Summary */}
                <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                  {/* Meta tag strip */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-brand-bright/10 text-brand-cyan border border-brand-bright/20 font-semibold">
                      {study.industry}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-[#fff] font-mono">
                      Client: <strong className="text-slate-900 dark:text-[#fff] font-semibold">{study.client}</strong>
                    </span>
                    <span className="text-xs text-slate-600 dark:text-[#fff] flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{study.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#fff] leading-tight group-hover:text-brand-cyan transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>
                      {study.title}
                    </Link>
                  </h2>

                  {/* Challenge Narrative */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-200 leading-relaxed font-normal">
                    {study.challenge}
                  </p>

                  {/* 4-Stat KPI Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                    {study.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border-subtle bg-surface/80 p-2.5 sm:p-3 text-center transition hover:border-brand-cyan/40"
                      >
                        <div className="text-base sm:text-lg font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-[#fff] mt-0.5 line-clamp-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-1 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs text-slate-500 dark:text-slate-400 mr-1 font-mono">Stack:</span>
                    {study.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-surface border border-border-subtle text-slate-800 dark:text-[#fff] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.techStack.length > 5 && (
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                        +{study.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Client Quote snippet */}
                  {study.clientQuote && (
                    <div className="rounded-xl border-l-2 border-brand-cyan bg-surface/60 p-3 text-xs text-slate-700 dark:text-slate-200 italic">
                      &ldquo;{study.clientQuote.quote.slice(0, 115)}...&rdquo;
                      <span className="block not-italic text-[11px] font-semibold text-brand-cyan mt-1">
                        — {study.clientQuote.author}, {study.clientQuote.role}
                      </span>
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Button
                      href={`/case-studies/${study.slug}`}
                      variant="primary"
                      size="md"
                      trackingName={`case_studies_read_${study.slug}`}
                      trackingLocation="case_studies_hub"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="shadow-glow font-bold"
                    >
                      Read Complete Case Study
                    </Button>

                    <Link
                      href={`/case-studies/${study.slug}#architecture`}
                      className="text-xs font-semibold text-slate-600 dark:text-[#fff] hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Architecture Blueprint</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>

      {/* ================================================================== */}
      {/* 4. OUR 4-STAGE VERIFICATION & ENGINEERING FRAMEWORK (NEW SECTION) */}
      {/* ================================================================== */}
      <AnimateOnScroll variant="fadeUp" duration={0.6}>
        <section className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-8 sm:p-12 backdrop-blur-xl shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Engineering Standard of Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-[#fff] tracking-tight leading-tight">
              How We Engineer &amp;{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Verify Every Benchmark.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#fff] leading-relaxed">
              We hold our engineering team to rigorous architectural standards. Every metric published in our case studies is captured in staging, validated at cutover, and monitored in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERIFICATION_FRAMEWORK.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-2xl border border-border-subtle bg-surface/70 p-6 flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-extrabold text-brand-cyan">
                        {item.step}
                      </span>
                      <span className="p-2.5 rounded-xl bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                        {item.tag}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-[#fff] mt-1">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-[#fff] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border-subtle/80 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </AnimateOnScroll>

      {/* ================================================================== */}
      {/* 5. EXECUTIVE TESTIMONIAL SPOTLIGHT BANNER (FULL WIDTH SLIDER)      */}
      {/* ================================================================== */}
      <div
        className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden border-y border-brand-cyan/25 mt-12 mb-0"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Realistic Matched Background Image with Cinematic Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies/executive-verification-bg.jpg"
            alt="Modern executive enterprise innovation boardroom with digital analytics overlooking city skyline"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#010714]/95 via-[#020a1c]/88 to-[#010714]/95 pointer-events-none" />
          <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-electric/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Content Container (Constrained & Centered) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Top Bar: Badges & Slider Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/40 bg-brand-cyan/15 text-brand-cyan backdrop-blur-md shadow-sm">
                <Quote className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Executive Verification</span>
              </div>

            </div>

            {/* Slider Navigation & Counter */}
            <div className="flex items-center gap-3">

              {/* Prev Button */}
              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-[#00D9F1] hover:bg-brand-cyan hover:text-slate-950 border border-white/20 flex items-center justify-center text-[#fff] transition-all shadow-md active:scale-95"
                title="Previous testimonial"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-[#00D9F1] hover:bg-brand-cyan hover:text-slate-950 border border-white/20 flex items-center justify-center text-[#fff] transition-all shadow-md active:scale-95"
                title="Next testimonial"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Testimonial Slide */}
          <div className="py-8 transition-opacity duration-300 ease-in-out">
            <div className="space-y-8">
              {/* Industry Tag */}
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan">
                {EXECUTIVE_VERIFICATIONS[activeSlide].industryBadge}
              </div>

              {/* Quote Body */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#fff] tracking-tight leading-snug sm:leading-tight min-h-[120px] sm:min-h-[140px] flex items-center">
                &ldquo;{EXECUTIVE_VERIFICATIONS[activeSlide].quote}&rdquo;
              </blockquote>

              {/* Author & Stats Strip */}
              <div className="pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-white/15">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${EXECUTIVE_VERIFICATIONS[activeSlide].avatarBg} flex items-center justify-center font-extrabold text-[#fff] text-xl shadow-glow ring-2 ring-white/20`}
                  >
                    {EXECUTIVE_VERIFICATIONS[activeSlide].initial}
                  </div>
                  <div>
                    <div className="font-extrabold text-[#fff] text-lg sm:text-xl">
                      {EXECUTIVE_VERIFICATIONS[activeSlide].author}
                    </div>
                    <div className="text-xs sm:text-sm text-brand-cyan font-mono font-medium">
                      {EXECUTIVE_VERIFICATIONS[activeSlide].role} · {EXECUTIVE_VERIFICATIONS[activeSlide].company}
                    </div>
                  </div>
                </div>

                {/* Key Verified Stats */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  {EXECUTIVE_VERIFICATIONS[activeSlide].stats.map((stat, idx) => (
                    <React.Fragment key={stat.label}>
                      {idx > 0 && <div className="hidden sm:block w-[1px] h-10 bg-white/20" />}
                      <div className="text-left sm:text-right">
                        <div className={`text-2xl sm:text-3xl font-extrabold ${stat.colorClass}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs font-mono text-[#fff] font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Slide Pills Bar (Bottom selector) */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {EXECUTIVE_VERIFICATIONS.map((item, index) => {
                const isActive = index === activeSlide;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`group px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all flex items-center gap-2 border ${isActive
                      ? "bg-brand-cyan/25 border-brand-cyan text-[#fff] shadow-sm ring-1 ring-brand-cyan/40"
                      : "bg-white/5 border-white/10 text-white/70 hover:text-[#fff] hover:bg-white/10 hover:border-white/25"
                      }`}
                    aria-label={`Go to slide ${index + 1}: ${item.company}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-brand-cyan scale-125" : "bg-[#00D9F1]"
                        }`}
                    />
                    <span>{item.company}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
