import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Cpu,
  Sparkles,
  TrendingUp,
  Clock,
  Code2,
  Quote,
  Check,
  ExternalLink,
  Calendar,
  Building2,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { getCaseStudyBySlug, CASE_STUDIES } from "@/data/case-studies";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generatePageMetadata, SITE_URL } from "@/lib/seo";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return generatePageMetadata({
    title: study.seoTitle,
    description: study.seoDescription,
    keywords: [
      study.industry,
      ...study.services,
      ...study.techStack,
      "Case Study",
      "Technical Architecture",
      "Nexovio Digital Solutions",
    ],
    path: `/case-studies/${study.slug}`,
  });
}

export default function SingleCaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    notFound();
  }

  const otherStudies = CASE_STUDIES.filter((s) => s.slug !== study.slug);

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
            url: `${SITE_URL}/logo.svg`,
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

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Case Studies", url: "/case-studies" },
            { name: study.title, url: `/case-studies/${study.slug}` },
          ]}
        />

        {/* 1. HERO HEADER */}
        <header className="space-y-5 mb-10">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-brand-bright/10 text-brand-cyan border border-brand-bright/20 font-bold">
              {study.industry}
            </span>
            <span className="text-muted font-mono flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Client: <strong className="text-slate-900 dark:text-white font-semibold">{study.client}</strong></span>
            </span>
            <span className="text-muted font-mono flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{study.readTime}</span>
            </span>
            <span className="text-muted font-mono flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{new Date(study.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.14]">
            {study.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {study.services.map((svc) => (
              <span
                key={svc}
                className="text-xs px-3 py-1 rounded-lg bg-surface border border-border-subtle text-slate-700 dark:text-slate-300 font-medium"
              >
                {svc}
              </span>
            ))}
          </div>
        </header>

        {/* 2. SHOWCASE HERO VISUAL */}
        <div className="relative w-full aspect-[16/9.5] rounded-3xl overflow-hidden border border-brand-cyan/30 bg-[#060D1A] shadow-2xl mb-12 group">
          <Image
            src={study.coverImage}
            alt={study.coverImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-md">
              Architecture Blueprint
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Results</span>
            </span>
          </div>

          {/* Bottom Headline inside hero */}
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-cyan/20 text-brand-cyan shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-brand-cyan font-bold tracking-wider">
                  Verified Outcome
                </div>
                <div className="text-sm sm:text-base font-extrabold text-white">
                  {study.results}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. EXECUTIVE KPI METRICS STRIP (4-CARD GRID) */}
        <section className="mb-14" aria-label="Key Performance Indicators">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-3">
            Key Performance Metrics &amp; Benchmarks
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {study.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border-subtle bg-surface-elevated/80 p-4 sm:p-5 text-center shadow-sm hover:border-brand-cyan/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-muted mt-1 leading-snug">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. BEFORE VS. AFTER BENCHMARK COMPARISON */}
        {study.beforeAfter && study.beforeAfter.length > 0 && (
          <section className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-8 mb-14 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-brand-cyan" />
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                Before &amp; After Performance Comparison
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {study.beforeAfter.map((item) => (
                <div
                  key={item.metric}
                  className="rounded-2xl border border-border-subtle bg-surface/80 p-4 space-y-2"
                >
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {item.metric}
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-muted">
                      <span>Before:</span>
                      <span className="font-mono text-rose-500 line-through">{item.before}</span>
                    </div>
                    <div className="flex items-center justify-between font-bold text-emerald-500">
                      <span>After:</span>
                      <span className="font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        {item.after}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. DETAILED TEARDOWN CONTENT */}
        <div className="space-y-12 mb-16" id="architecture">
          {/* Challenge Section */}
          <section className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-10 space-y-4 shadow-card">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500">
                The Operational Bottleneck
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              The Operational &amp; Technical Challenge
            </h2>
            <p className="text-sm sm:text-base text-muted-light leading-relaxed">
              {study.challenge}
            </p>
          </section>

          {/* Primary Engineering & Design Objectives */}
          <section className="space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan">
              Project Deliverables
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Primary Engineering &amp;{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Design Objectives
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {study.objectives.map((obj) => (
                <div
                  key={obj}
                  className="p-4 sm:p-5 rounded-2xl border border-border-subtle bg-surface-elevated/70 flex items-start gap-3.5 hover:border-brand-cyan/40 transition-colors"
                >
                  <div className="p-1 rounded-full bg-brand-cyan/15 text-brand-cyan shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {obj}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Architectural Strategy & Planning */}
          <section className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-10 space-y-4 shadow-card">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan">
              Methodology
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Architectural Strategy &amp;{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                System Planning
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-light leading-relaxed">
              {study.strategy}
            </p>
          </section>

          {/* Design & Development Side-by-Side Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-8 space-y-3 shadow-card">
              <div className="flex items-center gap-2.5 text-brand-cyan">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  UI/UX &amp; Design Approach
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-light leading-relaxed">
                {study.designApproach}
              </p>
            </div>

            <div className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-8 space-y-3 shadow-card">
              <div className="flex items-center gap-2.5 text-brand-bright">
                <Cpu className="w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Development &amp; Architecture
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-light leading-relaxed">
                {study.development}
              </p>
            </div>
          </div>

          {/* Technology Stack Grid */}
          <section className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-8 space-y-4 shadow-card">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-cyan">
              <Code2 className="w-4 h-4 text-brand-cyan" />
              <span>Production Technology Stack</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl border border-border-subtle bg-surface text-xs font-mono font-medium text-slate-900 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Delivered Solution & Production Architecture */}
          <section className="rounded-3xl border border-brand-cyan/30 bg-surface-elevated/80 p-6 sm:p-10 space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand" />
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan">
              Production Release
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              The Delivered{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-light leading-relaxed">
              {study.solution}
            </p>
          </section>

          {/* Client Testimonial Card */}
          {study.clientQuote && (
            <div className="rounded-3xl border border-brand-cyan/20 bg-gradient-to-br from-brand-cyan/5 via-surface-elevated/80 to-surface-elevated p-6 sm:p-10 relative overflow-hidden shadow-card">
              <Quote className="w-10 h-10 text-brand-cyan/20 absolute top-6 right-6" />
              <div className="relative z-10 space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  &ldquo;{study.clientQuote.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center font-bold text-white text-sm">
                    {study.clientQuote.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {study.clientQuote.author}
                    </div>
                    <div className="text-xs text-muted">
                      {study.clientQuote.role} • {study.clientQuote.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Engineering Takeaways */}
          <section className="space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan">
              Operational Learnings
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Key Engineering{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Takeaways
              </span>
            </h2>
            <div className="space-y-3">
              {study.keyLearnings.map((learning) => (
                <div
                  key={learning}
                  className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-surface-elevated/70 border border-border-subtle text-xs sm:text-sm text-muted-light"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{learning}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 6. EXPLORE OTHER CASE STUDIES */}
        {otherStudies.length > 0 && (
          <section className="my-16 pt-12 border-t border-border-subtle">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan block">
                  More Architectural Teardowns
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Explore Other Case Studies
                </h3>
              </div>
              <Link
                href="/case-studies"
                className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/case-studies/${other.slug}`}
                  className="group block rounded-2xl border border-border-subtle bg-surface-elevated/70 p-5 hover:border-brand-cyan/50 transition-all shadow-md"
                >
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-white/5 bg-[#050A14]">
                    <Image
                      src={other.coverImage}
                      alt={other.coverImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-xs font-mono uppercase text-brand-cyan font-bold mb-1">
                    {other.industry}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                    {other.title}
                  </h4>
                  <p className="text-xs text-muted mt-2 line-clamp-2">
                    {other.challenge}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 7. BOTTOM CTA & NAVIGATION BAR */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/case-studies"
            className="text-xs font-semibold text-muted hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <Button
            href="/contact"
            variant="primary"
            size="md"
            trackingName={`case_study_cta_${study.slug}`}
            trackingLocation="case_study_footer"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shadow-glow"
          >
            Discuss a Similar Solution
          </Button>
        </div>
      </div>
    </div>
  );
}
