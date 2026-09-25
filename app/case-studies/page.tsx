import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import { CaseStudiesClient } from "@/components/case-studies/CaseStudiesClient";
import { generatePageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Engineering Case Studies & Architectural Teardowns | Nexovio",
  description:
    "Explore in-depth technical case studies documenting how Nexovio Digital Solutions architects web applications, headless ecommerce migrations, custom AI workflows, and local SEO engines with verified business results.",
  keywords: [
    "web development case study",
    "BigCommerce migration case study",
    "custom AI workflow case study",
    "HVAC digital booking platform",
    "headless ecommerce architecture",
    "Next.js engineering case study",
    "technical SEO case study",
  ],
  path: "/case-studies",
});

const CASE_STUDIES_FAQS = [
  {
    question: "Are the performance and conversion metrics in these case studies verified?",
    answer:
      "Yes. All conversion lift numbers, Core Web Vitals speed benchmarks, and organic ranking results are verified through Google PageSpeed Insights, Lighthouse audits, Google Search Console, and client-approved GA4 analytics reports.",
  },
  {
    question: "Can Nexovio handle projects similar to those demonstrated in these case studies?",
    answer:
      "Absolutely. We specialize in custom web development, complex headless migrations (BigCommerce, Shopify, WordPress), Next.js architecture, bespoke AI workflow engines, and performance-driven SEO systems for growing businesses and enterprise clients.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs) for proprietary project architectures?",
    answer:
      "Yes. For clients with proprietary IP, trade secrets, or unreleased technology products, we strictly execute mutual NDAs prior to any discussions and only publish teardowns with written client authorization.",
  },
  {
    question: "How long do complex engineering engagements typically take to deliver?",
    answer:
      "Timeline depends on scope: custom web applications and migrations typically span 6 to 12 weeks, bespoke AI integrations range from 4 to 8 weeks, and performance optimization sprints are executed within 2 to 4 weeks.",
  },
  {
    question: "How do you ensure zero downtime during large ecommerce database migrations?",
    answer:
      "We employ parallel staging architectures, continuous bidirectional database sync routines, and pre-propagation DNS cutover strategies to ensure customer transactions, catalog queries, and cart sessions experience zero downtime.",
  },
];

export default function CaseStudiesPage() {
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/case-studies#webpage`,
        url: `${SITE_URL}/case-studies`,
        name: "Engineering Case Studies & Technical Architecture Teardowns",
        description:
          "In-depth technical case studies documenting how Nexovio Digital Solutions architects high-performance web applications, ecommerce systems, AI workflows, and local SEO engines.",
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
        itemListElement: CASE_STUDIES.map((study, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: study.title,
          url: `${SITE_URL}/case-studies/${study.slug}`,
          description: study.challenge,
        })),
      },
    ],
  };

  return (
    <div className="pt-24 pb-14 bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ name: "Case Studies", url: "/case-studies" }]} />

        {/* Hero Section */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Documented Engineering Teardowns</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            Engineering Case Studies &amp;{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Documented Results.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
            Explore in-depth technical breakdowns of real digital engineering challenges, design systems, architectural tradeoffs, and verified client outcomes.
          </p>
        </div>

        {/* Interactive Case Studies Client (Filters, Proof Bar & Featured Cards) */}
        <CaseStudiesClient caseStudies={CASE_STUDIES} />

        {/* Bottom Consultation Reassurance Card */}
        <div className="mt-20 mb-20 relative rounded-3xl border border-border-subtle bg-surface-elevated/80 p-8 sm:p-14 text-center max-w-4xl mx-auto overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan">
              Enterprise Consultation
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Ready to Architect a{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                High-Performance Solution?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
              Discuss your technical requirements, architectural tradeoffs, and timeline milestones directly with our senior engineers under complete NDA confidentiality.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackingName="case_studies_bottom_cta"
                trackingLocation="case_studies_page"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow"
              >
                Schedule Architecture Review
              </Button>

              <Link
                href="/agency-partnership"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-subtle bg-surface text-sm font-semibold text-slate-900 dark:text-white hover:border-brand-cyan/50 transition-colors"
              >
                <span>White-Label for Agencies</span>
                <ArrowRight className="w-4 h-4 text-brand-cyan" />
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA-Protected Discussions</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                <span>Direct Engineering Scoping</span>
              </span>
            </div>
          </div>
        </div>

        {/* FAQs Section - Standardized Global Component */}
        <FaqSection
          faqs={CASE_STUDIES_FAQS}
          badge="CASE STUDY FAQ"
          title="Frequently Asked Questions About"
          highlightText="Our Proven Results"
          description="Common technical and operational questions regarding our delivery metrics, benchmarks, and project methodologies."
        />
      </div>
    </div>
  );
}
