import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldAlert,
  Layers,
  Cpu,
  Sparkles,
} from "lucide-react";
import { getCaseStudyBySlug, CASE_STUDIES } from "@/data/case-studies";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generatePageMetadata } from "@/lib/seo";

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
    path: `/case-studies/${study.slug}`,
  });
}

export default function SingleCaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Case Studies", url: "/case-studies" },
            { name: study.title, url: `/case-studies/${study.slug}` },
          ]}
        />

        {/* Header Metadata */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-brand-bright/10 text-brand-cyan border border-brand-bright/20">
              {study.industry}
            </span>
            <span className="text-muted font-mono">
              {study.client}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {study.title}
          </h1>

          <div className="flex flex-wrap gap-2 pt-1">
            {study.services.map((svc) => (
              <span
                key={svc}
                className="text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10 text-muted-light"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Cover Banner Showcase */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-brand-cyan/30 bg-[#060D1A] shadow-2xl mb-14 group">
          <Image
            src={study.coverImage}
            alt={study.coverImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
            priority
          />
          <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
            Architecture Blueprint
          </div>
        </div>

        {/* In-Depth Case Study Content Sections */}
        <div className="space-y-12 mb-16">
          {/* Challenge Section */}
          <div className="rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>The Core Operational Challenge</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-light leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Objectives Checklist */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              Primary Engineering & Design Objectives
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {study.objectives.map((obj) => (
                <div
                  key={obj}
                  className="p-4 rounded-xl border border-border-subtle bg-surface/70 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-light leading-relaxed">
                    {obj}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy & Approach */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              Architectural Strategy & Planning
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {study.strategy}
            </p>
          </div>

          {/* Design & Development Teardown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-surface-elevated/60">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>UI/UX & Design Approach</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {study.designApproach}
              </p>
            </Card>

            <Card className="bg-surface-elevated/60">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-bright" />
                <span>Development & Architecture</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {study.development}
              </p>
            </Card>
          </div>

          {/* Final Delivered Solution */}
          <div className="rounded-2xl border border-brand-cyan/20 bg-surface-elevated/80 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              The Delivered Solution
            </h2>
            <p className="text-sm sm:text-base text-muted-light leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Results Benchmark (Honest Prompt Standard) */}
          <div className="rounded-xl border border-dashed border-border-subtle bg-surface/50 p-6 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-bright">
              <ShieldAlert className="w-4 h-4 text-brand-bright" />
              <span>Results & Metric Benchmarks</span>
            </div>
            <p className="text-xs sm:text-sm text-muted italic leading-relaxed">
              {study.results}
            </p>
          </div>

          {/* Key Engineering Learnings */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              Key Engineering Learnings
            </h2>
            <ul className="space-y-3">
              {study.keyLearnings.map((learning) => (
                <li
                  key={learning}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-surface/60 border border-white/5 text-xs sm:text-sm text-muted-light"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Case Study Bottom CTA */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/case-studies"
            className="text-xs font-medium text-muted hover:text-white inline-flex items-center gap-2"
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
          >
            Discuss a Similar Solution
          </Button>
        </div>
      </div>
    </div>
  );
}
