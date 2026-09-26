import React from "react";
import Image from "next/image";
import { Mail, Phone, MessageSquare, Clock, ArrowRight, ShieldCheck, CheckCircle2, Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getContactPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Contact Nexovio Digital Solutions – Start Your Project",
  description:
    "Ready to build a website, app or digital marketing strategy? Contact Nexovio to discuss your project. Our technical team will review your requirements and respond within one business day.",
  keywords: [
    "contact web development agency",
    "request quote digital marketing",
    "SEO consultation",
    "software development inquiry",
    "Contact Nexovio",
    "Hire Web Developers",
  ],
  path: "/contact",
});

const STEPS = [
  {
    step: "01",
    title: "Tell Us About Your Project",
    desc: "Submit your preliminary project goals, functional needs, and approximate timeline using our secure consultation form.",
  },
  {
    step: "02",
    title: "Technical Review",
    desc: "Our software engineering and design leads review your specifications to evaluate architectural feasibility and scope.",
  },
  {
    step: "03",
    title: "Strategy & Scope Discussion",
    desc: "We schedule an exploratory conversation to align on objectives, technical tradeoffs, and milestone schedules.",
  },
  {
    step: "04",
    title: "Actionable Proposal",
    desc: "We deliver a transparent, itemized proposal outlining milestones, technology choices, and commercial deliverables.",
  },
];

const CONTACT_FAQS = [
  {
    question: "How quickly will I receive a response after submitting the contact form?",
    answer:
      "Our engineering and strategy leads review all project inquiries within 1 business day (24 hours).",
  },
  {
    question: "Is the initial project consultation free?",
    answer:
      "Yes. Initial scope reviews, preliminary technical assessments, and strategy calls are 100% complimentary with zero obligation.",
  },
  {
    question: "Can we schedule a live video call via Google Meet or Zoom?",
    answer:
      "Yes. You can use our embedded Calendly scheduler on this page to pick a video call slot that suits your timezone.",
  },
  {
    question: "What information should I prepare before our initial conversation?",
    answer:
      "Having a brief overview of your business objectives, target audience, preferred timeline, and any existing design references or feature lists is helpful, but not required.",
  },
];

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@nexoviodigitalsolutions.com";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+91-6351312234";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91-6351312234";
  const contactSchema = getContactPageSchema();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* 1. Direct Inquiry Form & Contact Info (White) */}
      <section className="section-white pt-24 sm:28 md:pt-32 lg:pt-40 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />

          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-4">
              Direct Technical Inquiry
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Let’s Build a Digital Experience That{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Moves Your Business Forward.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
              Whether you need a custom web application, an intuitive UI/UX design system, or a technical SEO roadmap, our engineers and designers are ready to evaluate your scope.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="relative w-full aspect-[16/9.5] rounded-2xl overflow-hidden border border-brand-cyan/25 bg-[#060D1A] shadow-xl group">
                <Image
                  src="/images/about/studio-workspace.svg"
                  alt="Nexovio Technical Consultation Studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                  Direct Engineering Review
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                  ● 1 Business Day SLA
                </div>
              </div>

              <div className="rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-8 space-y-6">
                <h3 className="text-lg font-bold text-white">
                  Direct Communication Channels
                </h3>

                <div className="space-y-4">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-surface/60 hover:border-brand-cyan/40 hover:bg-surface transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-brand-bright/10 text-brand-bright group-hover:text-brand-cyan transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-muted block">
                        Email Inquiries
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
                        {contactEmail}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-surface/60 hover:border-brand-cyan/40 hover:bg-surface transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-brand-bright/10 text-brand-bright group-hover:text-brand-cyan transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-muted block">
                        Direct Telephone
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
                        {contactPhone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-surface/60 hover:border-brand-cyan/40 hover:bg-surface transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-brand-cyan/10 text-brand-cyan group-hover:brightness-125 transition-all">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-muted block">
                        WhatsApp Messaging
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
                        Direct WhatsApp Consultation
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-border-subtle bg-surface/50 p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                  <span>Our Privacy & Confidentiality Guarantee</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  All project details and technical inquiries shared with Nexovio Digital Solutions remain strictly confidential. We never sell your contact information or disclose project roadmaps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Onboarding Steps (Blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
              Transparent Onboarding
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              What Happens{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">After You Inquire</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-xl border border-border-subtle bg-surface-elevated/70 space-y-3"
              >
                <span className="text-2xl font-mono font-bold text-brand-bright/40">
                  {s.step}
                </span>
                <h3 className="text-base font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Schedule a Call (Calendly Embed) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16 border-t border-border-subtle relative" id="schedule-call">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              Schedule a {" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Call</span>
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
              Select a date and time that fits your schedule to discuss your project requirements, technical scope, and execution strategy.
            </p>
          </div>

          <div className="w-full rounded-3xl border border-border-subtle bg-surface-elevated shadow-2xl p-3 sm:p-6 lg:p-8 relative">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold uppercase text-muted tracking-wider">
                  Live Calendly Scheduling Widget
                </span>
              </div>
              <a
                href="https://calendly.com/nexoviodigitalsolutions-info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:underline"
              >
                <span>Open Calendly in New Tab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full rounded-2xl overflow-hidden bg-white shadow-inner">
              <iframe
                src="https://calendly.com/nexoviodigitalsolutions-info?embed_domain=nexoviodigitalsolutions.com&embed_type=Inline"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a Call with Nexovio Digital Solutions"
                className="w-full min-h-[680px] sm:min-h-[720px] rounded-xl border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact FAQ */}
      <FaqSection
        faqs={CONTACT_FAQS}
        badge="CONSULTATION FAQ"
        title="Questions About"
        highlightText="Getting Started With Nexovio"
      />
    </div>
  );
}
