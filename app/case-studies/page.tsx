import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Case Studies | Nexovio Digital Solutions",
  description:
    "Explore in-depth technical case studies documenting how Nexovio Digital Solutions architects web applications, redesigns user journeys, and optimizes organic search pipelines.",
  keywords: [
    "Engineering Case Studies",
    "Web Development Case Studies",
    "BigCommerce Migration Case Study",
    "Technical Architecture Teardowns",
  ],
  path: "/case-studies",
});

const CASE_STUDIES_FAQS = [
  {
    question: "Are the performance metrics in Nexovio's case studies verified?",
    answer:
      "Yes. All conversion stats, Core Web Vitals performance improvements, and page loading speed metrics are verified through Google PageSpeed Insights, Lighthouse audits, and GA4 analytics.",
  },
  {
    question: "Can Nexovio handle projects similar to those shown in your case studies?",
    answer:
      "Absolutely. We specialize in custom web development, legacy site migrations, Next.js architecture, UI/UX redesigns, and technical SEO for growing businesses.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs) for proprietary project case studies?",
    answer:
      "Yes. For clients with confidential business logic or unreleased products, we strictly execute NDAs and only publish anonymized case study teardowns with prior authorization.",
  },
];

export default function CaseStudiesPage() {
  const schema = getCollectionPageSchema(
    "Case Studies & Architecture Teardowns",
    "Explore in-depth technical case studies documenting how Nexovio Digital Solutions architects web applications, redesigns user journeys, and optimizes organic search pipelines.",
    "/case-studies"
  );

  return (
    <div className="pt-24 pb-14 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ name: "Case Studies", url: "/case-studies" }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-4">
            Technical Architecture Teardowns
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Engineering Case Studies &amp;{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Proven Results.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            Examine in-depth breakdowns of real digital engineering challenges, design methodologies, technology choices, and operational learnings.
          </p>
        </div>

        {/* Case Studies List with Rich Visual Covers */}
        <div className="space-y-12 mb-20">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.slug}
              className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-10 lg:p-12 hover:border-brand-cyan/45 transition-all duration-300 shadow-2xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Context & Metadata */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-brand-bright/10 text-brand-cyan border border-brand-bright/20">
                      {study.industry}
                    </span>
                    <span className="text-xs text-muted font-mono">
                      {study.client}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug group-hover:text-brand-cyan transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>
                      {study.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-muted-light leading-relaxed">
                    {study.challenge}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {study.services.map((svc) => (
                      <span
                        key={svc}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
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
                  </div>
                </div>

                {/* Right Column: High-Impact Visual Mockup Cover */}
                <div className="lg:col-span-5">
                  <Link href={`/case-studies/${study.slug}`} className="block">
                    <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-brand-cyan/25 bg-[#050A14] group-hover:border-brand-cyan/50 shadow-xl transition-all duration-300">
                      <Image
                        src={study.coverImage}
                        alt={study.coverImageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                        Full Teardown
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Reassurance */}
        <div className="rounded-2xl border border-border-subtle bg-surface-elevated/80 p-8 sm:p-12 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to architect a{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">high-performance solution?</span>
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-xl mx-auto">
            Discuss your technical requirements, architectural tradeoffs, and timeline milestones directly with our engineers.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            trackingName="case_studies_bottom_cta"
            trackingLocation="case_studies_page"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shadow-glow"
          >
            Start Your Project Inquiry
          </Button>
        </div>

        {/* FAQs */}
        <FaqSection
          faqs={CASE_STUDIES_FAQS}
          badge="CASE STUDY FAQ"
          title="Questions About"
          highlightText="Our Proven Results"
        />
      </div>
    </div>
  );
}
