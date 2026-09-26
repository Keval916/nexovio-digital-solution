import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Mail,
  Phone,
  FileCheck2,
  Users,
  Code2,
  Compass,
  Zap,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";

// ==========================================
// METADATA & SEO FOUNDATION
// ==========================================

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Schedule a 30-Minute Discovery Call | Nexovio Digital Solutions",
    description:
      "Book a direct 30-minute discovery call with Nexovio's software engineering and UI/UX team. Discuss project requirements, technical architecture, timelines, and budget estimates.",
    keywords: [
      "schedule a call",
      "book a discovery call",
      "software consultation",
      "web development consultation",
      "mobile app consultation",
      "UI UX design consultation",
      "tech scoping call",
      "Nexovio digital solutions",
      "hire software engineers",
      "IT project estimate",
    ],
    path: "/schedule-a-call",
  }),
  title: "Schedule a 30-Minute Discovery Call | Nexovio Digital Solutions",
};

// ==========================================
// CALL AGENDA PILLARS
// ==========================================

const CALL_AGENDA_ITEMS = [
  {
    step: "01",
    title: "Project Scope & Business Goals",
    desc: "We discuss your target audience, core user problem, business model, and the functional outcomes your digital product needs to deliver.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Technical Architecture & Feasibility",
    desc: "We evaluate front-end, back-end, database, and cloud options (Next.js, React Native, Flutter, WordPress, APIs) for speed, security, and scale.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Milestone Scoping & Budget Estimates",
    desc: "We help prioritize MVP features, estimate realistic delivery timelines, and outline commercial models tailored to your stage.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Actionable Roadmap & Proposal",
    desc: "Following the call, we provide a structured written scope summary, architectural recommendation, and timeline within 24–48 hours.",
    icon: FileCheck2,
  },
];

// ==========================================
// DISCOVERY CALL PREPARATION TIPS
// ==========================================

const PREPARATION_POINTS = [
  "Have a high-level summary of your project vision, target market, and key user problem",
  "Bring any existing wireframes, Figma designs, PRDs, or competitor reference URLs (if available)",
  "Note your preferred timeline, target launch dates, and key operational deadlines",
  "Identify existing systems, APIs, or legacy databases that require integration",
  "Prepare any specific architectural, compliance, or hosting questions for our senior team",
];

// ==========================================
// FREQUENTLY ASKED QUESTIONS
// ==========================================

const SCHEDULE_CALL_FAQS = [
  {
    question: "Is there any cost or commitment for the 30-minute discovery call?",
    answer:
      "No. The 30-minute discovery call is completely free with zero financial obligation. It is designed to understand your requirements, provide initial technical guidance, and determine whether Nexovio is the right engineering partner for your project.",
  },
  {
    question: "Who will I be speaking with during the call?",
    answer:
      "You will speak directly with a senior technical consultant or solutions architect who understands full-stack software development, UI/UX workflows, and commercial delivery—not an aggressive sales representative.",
  },
  {
    question: "Can we sign a Non-Disclosure Agreement (NDA) before the call?",
    answer:
      "Yes, absolutely. We regularly sign mutual NDAs prior to exploratory calls for proprietary SaaS platforms, patented technologies, or confidential agency projects. Email your NDA to info@nexoviodigitalsolutions.com or request our mutual NDA template.",
  },
  {
    question: "What if none of the available calendar times work for my timezone?",
    answer:
      "We accommodate global clients across North America, Europe, the Middle East, and Asia-Pacific. If you cannot find a suitable slot in the scheduler, message us directly via WhatsApp (+91-6351312234) or email us at info@nexoviodigitalsolutions.com with your preferred timezone and times.",
  },
  {
    question: "What happens after our discovery call?",
    answer:
      "Within 24 to 48 hours following the call, we synthesize our discussion into a clear project discovery brief, including architectural recommendations, phased milestone roadmap, and formal cost proposal.",
  },
  {
    question: "Can you review our existing codebase or Figma design during the call?",
    answer:
      "Yes. If you have active Figma prototypes, GitHub repositories, or existing live websites you want audited, you can share your screen during the Google Meet/Zoom session for real-time technical review.",
  },
];

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function ScheduleCallPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Schedule a Call", url: "/schedule-a-call" },
  ]);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Schedule a Discovery Call with Nexovio Digital Solutions",
    description:
      "Book a 30-minute technical discovery call to discuss software engineering, mobile apps, web applications, and UI/UX design.",
    url: `${SITE_URL}/schedule-a-call`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "technical consulting",
        availableLanguage: ["English"],
        email: "info@nexoviodigitalsolutions.com",
        telephone: "+91-6351312234",
      },
    },
  };

  return (
    <div className="bg-background overflow-x-clip">
      {/* Structured JSON-LD Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* ================================================================== */}
      {/* 1. HERO SECTION (Consistent padding: pt-24 sm:28 md:pt-32 lg:pt-40)*/}
      {/* ================================================================== */}
      <section className="pt-24 sm:28 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 bg-background relative overflow-hidden">
        {/* Background Visual Effects */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle Geometric Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Schedule a Call", url: "/schedule-a-call" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
              <Calendar className="w-3.5 h-3.5 text-brand-bright animate-pulse" />
              <span>DIRECT CALENDAR BOOKING</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight !leading-[1.15]">
              Schedule a 30-Minute{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Discovery Call
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Pick a date and time that fits your timezone to discuss your product vision, technical scope, system architecture, and milestone timeline with our senior engineering team.
            </p>

            {/* 4 Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm">
                <Clock className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span>30-Min Structured Session</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero Cost &bull; No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. CALENDLY SCHEDULER WIDGET SECTION                               */}
      {/* ================================================================== */}
      <section className="py-8 sm:py-12 bg-surface-elevated/40 border-y border-slate-200/80 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071024] shadow-2xl p-3 sm:p-6 lg:p-8 relative overflow-hidden">
            {/* Widget Header Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300 tracking-wider">
                  Live Calendly Scheduling Engine
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono text-muted">
                  &bull; Automated Timezone Detection
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://calendly.com/nexoviodigitalsolutions-info/30min?back=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:underline transition-colors"
                >
                  <span>Open Calendly in Full Window</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Responsive Calendly iframe Container */}
            <div className="w-full rounded-2xl overflow-hidden bg-white shadow-inner min-h-[700px] sm:min-h-[750px]">
              <iframe
                src="https://calendly.com/nexoviodigitalsolutions-info/30min?back=1&embed_domain=nexoviodigitalsolutions.com&embed_type=Inline"
                width="100%"
                height="750"
                frameBorder="0"
                title="Schedule a 30-Minute Discovery Call with Nexovio Digital Solutions"
                className="w-full min-h-[700px] sm:min-h-[750px] rounded-xl border-0"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>



      {/* ================================================================== */}
      {/* 4. PREPARATION CHECKLIST FOR MAXIMUM VALUE                         */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-20 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                HOW TO PREPARE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Getting the Most Out of{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Your Discovery Call
                </span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                You do not need an exhaustive 50-page technical specification before speaking with us. However, having these key elements in mind helps us provide deeper, actionable architectural and cost guidance immediately.
              </p>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="font-medium"
                >
                  Prefer Written Inquiries? Contact Us
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {PREPARATION_POINTS.map((pt, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/50 hover:bg-brand-cyan/[0.03] hover:translate-x-1.5 transition-all duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-snug font-medium">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. DIRECT ALTERNATIVE CHANNELS (IMMEDIATE ASSISTANCE)              */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block">
              CANNOT FIND A MATCHING TIME?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Connect Directly with Our Leadership Team
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              We work across US, European, and Asian timezones. If your schedule requires an off-hours consultation, reach out directly through any of our direct communication channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/916351312234"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">
                  WhatsApp Direct
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Fastest response for urgent project consultations, NDA requests, and schedule adjustments.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 text-xs font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Chat on WhatsApp &rarr;
              </span>
            </a>

            {/* Direct Email */}
            <a
              href="mailto:info@nexoviodigitalsolutions.com"
              className="group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-cyan hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                  Email Consulting
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Send existing RFP documentation, Figma files, or architectural specs for advance review.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 text-xs font-bold text-brand-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                info@nexoviodigitalsolutions.com &rarr;
              </span>
            </a>

            {/* Direct Phone */}
            <a
              href="tel:+916351312234"
              className="group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-bright hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-bright/10 border border-brand-bright/25 flex items-center justify-center text-brand-bright group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-bright transition-colors">
                  Phone Consultation
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Call our technical direct desk during business hours for immediate project qualification.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 text-xs font-bold text-brand-bright flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                +91-6351312234 &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. DISCOVERY CALL FAQS                                             */}
      {/* ================================================================== */}
      <FaqSection
        faqs={SCHEDULE_CALL_FAQS}
        badge="CONSULTATION FAQ"
        title="Frequently Asked Questions About"
        highlightText="Discovery Calls"
        description="Clear answers regarding confidentiality, meeting preparation, timezone accommodations, and post-call deliverables."
      />
    </div>
  );
}
