import React from "react";
import Image from "next/image";
import { Mail, Phone, MessageSquare, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getContactPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Contact Us & Project Consultation | Nexovio Digital Solutions",
  description:
    "Start your project consultation with Nexovio Digital Solutions. Discuss custom web development, UI/UX design, or digital marketing scope with our technical team.",
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

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@nexovio.com";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+1 (555) 019-2834";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+15550192834";
  const contactSchema = getContactPageSchema();

  return (
    <div className="pt-28 pb-20 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-4">
            Direct Technical Inquiry
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Let’s Build a Digital Experience That{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Moves Your Business Forward.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            Whether you need a custom web application, an intuitive UI/UX design system, or a technical SEO roadmap, our engineers and designers are ready to evaluate your scope.
          </p>
        </div>

        {/* Form and Contact Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Visual Preview, Direct Channels & Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Studio & Consultation Preview */}
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

            {/* Reassurance Banner */}
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

        {/* 4-Step What Happens Next */}
        <div className="mb-24">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
              Transparent Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What Happens After You Inquire
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-xl border border-border-subtle bg-surface/70 space-y-3"
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

        {/* Contact FAQ */}
        <FaqSection
          title="Project Inquiries &"
          highlightText="Consultation FAQs"
          description="Common questions about kickoff prerequisites, response cadence, and scoping discussions."
        />
      </div>
    </div>
  );
}
