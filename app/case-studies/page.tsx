import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  Globe2,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import { CaseStudiesClient } from "@/components/case-studies/CaseStudiesClient";
import { generatePageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Engineering Case Studies & Architectural Teardowns | Nexovio",
  description:
    "Explore in-depth technical case studies documenting how Nexovio Digital Solutions architects high-performance web applications, headless ecommerce migrations, custom AI workflows, and local SEO engines with verified business results.",
  keywords: [
    "web development case study",
    "headless ecommerce case study",
    "custom AI workflow case study",
    "HVAC digital booking platform",
    "headless ecommerce architecture",
    "Next.js engineering case study",
    "technical SEO case study",
    "FinTech mobile app case study",
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
    <div className="bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />

      {/* ================================================================== */}
      {/* 1. HERO SECTION WITH REALISTIC BACKGROUND BANNER & OVERLAY TEXT   */}
      {/* ================================================================== */}
      <section
        id="overview"
        className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-border-subtle"
      >
        {/* Ambient lighting glows matching Agency Partnership */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-radial-glow pointer-events-none opacity-60" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 -left-20 w-80 h-80 bg-brand-electric/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle decorative vector grid background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00C6FF 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs items={[{ name: "Case Studies", url: "/case-studies" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
                <span>Verified Technical Case Studies &amp; Outcomes</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-[#fff] leading-[1.12]">
                Engineering Impact.{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Documented Results.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold tracking-tight text-brand-cyan">
                Real Architecture. Zero Vanity Metrics. Proven Scale.
              </p>

              <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                <p>
                  Nexovio Digital Solutions engineers high-throughput web applications, headless e-commerce platforms, custom AI workflows, cross-platform mobile apps, and programmatic organic growth engines.
                </p>
                <p>
                  Explore in-depth technical breakdowns of production bottlenecks, system architecture tradeoffs, and the measurable business performance achieved for our client partners.
                </p>
              </div>

              {/* Glassmorphic Verification Note Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-brand-cyan/30 bg-surface-elevated/70 backdrop-blur-md text-sm shadow-sm">
                <p className="leading-relaxed text-slate-700 dark:text-[#fff]">
                  <strong className="text-slate-900 dark:text-[#fff] font-bold">
                    100% Verified Telemetry &amp; Audited Metrics:
                  </strong>{" "}
                  <span className="text-slate-600 dark:text-slate-300">
                    Every speed milestone, conversion increase, and organic traffic benchmark is independently audited using Google Search Console, Lighthouse, and GA4 analytics.
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button
                  href="#case-studies-grid"
                  variant="primary"
                  size="lg"
                  trackingName="case_studies_hero_explore"
                  trackingLocation="case_studies_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-glow font-bold"
                >
                  Explore Teardowns
                </Button>
                <Button
                  href="/contact#quote"
                  variant="secondary"
                  size="lg"
                  trackingName="case_studies_hero_consult"
                  trackingLocation="case_studies_hero"
                  className="font-medium"
                >
                  Request Technical Audit
                </Button>
              </div>

              {/* Trust & Methodology Badges */}
              <div className="pt-4 border-t border-border-subtle grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-700 dark:text-[#fff]">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Audited Metrics</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Clock3 className="h-4 w-4 text-brand-cyan shrink-0" />
                  <span>Sub-Second TTFB</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <LockKeyhole className="h-4 w-4 text-brand-bright shrink-0" />
                  <span>NDA-Protected IP</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Globe2 className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span>Zero-Downtime Live</span>
                </span>
              </div>
            </div>

            {/* Right Realistic Image Banner with Overlay Text */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-25 blur-3xl rounded-3xl -z-10" />

              <div className="relative w-full rounded-2xl sm:rounded-3xl border border-border-subtle bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-card overflow-hidden group">
                <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#040813]">
                  {/* High-Resolution Realistic Human Team Photo */}
                  <Image
                    src="/images/case-studies/case-studies-hero-team.jpg"
                    alt="Realistic modern digital engineering and architecture team collaborating on live client case studies in a contemporary studio office"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Light & Dark Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

                  {/* Floating Top-Left Telemetry Chip */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-brand-cyan/35 text-brand-cyan text-xs font-mono backdrop-blur-md shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                    </span>
                    <span>Live Architecture Audits</span>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. CASE STUDIES CLIENT: PROOF BAR, FILTERS & SHOWCASE CARDS        */}
      {/* ================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-0" id="case-studies-grid">
        <CaseStudiesClient caseStudies={CASE_STUDIES} />
      </div>

      {/* ================================================================== */}
      {/* 3. CASE STUDY FAQ SECTION (FULL WIDTH, BG WHITE, NO TRAILING GAP)  */}
      {/* ================================================================== */}
      <FaqSection
        variant="white"
        faqs={CASE_STUDIES_FAQS}
        badge="CASE STUDY FAQ"
        title="Frequently Asked"
        highlightText="Questions"
        description="Common technical and operational questions regarding our delivery metrics, benchmarks, and project methodologies."
        className="pt-16 pb-12 sm:pt-20 sm:pb-16"
      />
    </div>
  );
}
