"use client";

import React, { useState } from "react";
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
  "SEO & Performance",
];

export function CaseStudiesClient({ caseStudies }: CaseStudiesClientProps) {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredStudies =
    activeCategory === "All Projects"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeCategory);

  return (
    <div className="space-y-16">
      {/* 1. EXECUTIVE PROOF STATS BAR */}
      <AnimateOnScroll variant="fadeUp" duration={0.6}>
        <div className="rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-8 backdrop-blur-md shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-border-subtle">
            <div className="pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                +92%
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Max Conversion Lift
              </div>
              <div className="text-[11px] text-muted mt-0.5">Post-launch checkout completion</div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                0 min
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Zero Downtime
              </div>
              <div className="text-[11px] text-muted mt-0.5">Seamless live database migrations</div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                &lt; 0.9s
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Sub-Second Speed
              </div>
              <div className="text-[11px] text-muted mt-0.5">Edge-cached Core Web Vitals</div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                100%
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Verified Outcomes
              </div>
              <div className="text-[11px] text-muted mt-0.5">GA4 &amp; Lighthouse audited</div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* 2. INTERACTIVE CATEGORY FILTER TABS */}
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
                className={`group flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 border outline-none select-none cursor-pointer ${
                  isSelected
                    ? "bg-gradient-brand text-white border-transparent shadow-[0_4px_20px_rgba(0,198,255,0.35)] scale-[1.02]"
                    : "bg-surface-elevated text-muted hover:text-foreground border-border-subtle hover:border-brand-cyan/50 hover:bg-surface-subtle"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-surface-subtle text-slate-400 group-hover:text-slate-200"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </AnimateOnScroll>

      {/* 3. CASE STUDY FEATURED CARDS */}
      <div className="space-y-12">
        {filteredStudies.map((study, index) => (
          <AnimateOnScroll
            key={study.slug}
            variant="fadeUp"
            duration={0.6}
            delay={index * 0.1}
          >
            <article className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-10 lg:p-12 hover:border-brand-cyan/45 transition-all duration-300 shadow-2xl group overflow-hidden relative">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-md">
                          Verified Case Study
                        </span>
                      </div>

                      <div className="absolute top-3.5 right-3.5">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Delivered</span>
                        </span>
                      </div>

                      {/* Bottom Quick Result Banner inside image */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-brand-cyan shrink-0" />
                          <span className="text-xs font-bold text-white tracking-wide">
                            {study.results}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-brand-cyan/90 shrink-0 hidden sm:inline">
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
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-brand-bright/10 text-brand-cyan border border-brand-bright/20">
                      {study.industry}
                    </span>
                    <span className="text-xs text-muted font-mono">
                      Client: <strong className="text-slate-900 dark:text-white font-semibold">{study.client}</strong>
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-cyan" />
                      <span>{study.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-brand-cyan transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>
                      {study.title}
                    </Link>
                  </h2>

                  {/* Challenge Narrative */}
                  <p className="text-sm sm:text-base text-muted-light leading-relaxed">
                    {study.challenge}
                  </p>

                  {/* 4-Stat KPI Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                    {study.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border-subtle bg-surface/80 p-3 text-center transition hover:border-brand-cyan/40"
                      >
                        <div className="text-lg sm:text-xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-[11px] font-bold text-slate-900 dark:text-white mt-0.5 line-clamp-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs text-muted mr-1">Stack:</span>
                    {study.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-surface border border-border-subtle text-slate-700 dark:text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.techStack.length > 5 && (
                      <span className="text-[10px] text-muted font-mono">
                        +{study.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Client Quote snippet */}
                  {study.clientQuote && (
                    <div className="rounded-xl border-l-2 border-brand-cyan bg-surface/60 p-3 text-xs text-muted-light italic">
                      &ldquo;{study.clientQuote.quote.slice(0, 115)}...&rdquo;
                      <span className="block not-italic text-[11px] font-semibold text-brand-cyan mt-1">
                        — {study.clientQuote.author}, {study.clientQuote.role}
                      </span>
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Button
                      href={`/case-studies/${study.slug}`}
                      variant="primary"
                      size="md"
                      trackingName={`case_studies_read_${study.slug}`}
                      trackingLocation="case_studies_hub"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="shadow-glow"
                    >
                      Read Complete Case Study
                    </Button>

                    <Link
                      href={`/case-studies/${study.slug}#architecture`}
                      className="text-xs font-semibold text-muted hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5"
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
    </div>
  );
}
