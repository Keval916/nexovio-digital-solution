"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Lightbulb,
  Target,
  Rocket,
  Handshake,
  Plus,
  Minus,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { ContactForm } from "@/src/components/forms/ContactForm";
import { getContactPageSchema } from "@/src/lib/schema";
import { trackContactClick } from "@/src/lib/analytics";
import { FaqSection } from "../components/sections/FaqSection";

const WHY_CHOOSE_US = [
  {
    icon: Target,
    title: "Client-Focused Approach",
    desc: "We understand your goals and deliver solutions that create real business value.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Skilled professionals with expertise in web, mobile, AI and digital marketing.",
  },
  {
    icon: Rocket,
    title: "On-Time Delivery",
    desc: "Clear communication, transparent milestones, and timely project delivery at every stage.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We build lasting relationships and continue to support your ongoing digital growth.",
  },
];

const FAQS = [
  {
    question: "How quickly will I get a response?",
    answer:
      "Our engineering and strategy leads review all project inquiries within 24 hours (1 business day) with a preliminary scope evaluation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We collaborate seamlessly with clients across the United States, United Kingdom, Canada, Australia, Europe, and India with flexible timezone overlap.",
  },
  {
    question: "Which services do you offer?",
    answer:
      "We provide end-to-end digital engineering: custom web development, mobile apps, UI/UX design systems, AI agent & automation development, and technical SEO growth.",
  },
  {
    question: "Can we schedule a call before starting?",
    answer:
      "Absolutely. You can schedule a complimentary 30-minute discovery video call via Google Meet or Zoom using our Calendly scheduler below with zero obligation.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, every engagement includes post-launch warranty support, dedicated SLA maintenance, performance monitoring, and ongoing feature iteration.",
  },
];

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@nexoviodigitalsolutions.com";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+91-6351312234";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91-6351312234";
  const contactSchema = getContactPageSchema();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-slate-50/60 dark:bg-[#060D1A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className="pt-14 lg:pt-16 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-4">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-brand-cyan border border-blue-200 dark:border-brand-cyan/30">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-brand-cyan" />
                <span>Get in Touch</span>
              </div>

              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Let’s Build Something{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Great Together
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Have a project in mind or need expert advice? Our team is here to understand your goals and help you with the right solution for your business.
              </p>

              {/* 3 Value Proposition Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#0c182b] border border-slate-200/80 dark:border-border-subtle shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-brand-cyan flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Quick Response</h4>
                    <p className="text-[11px] text-muted">Usually within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#0c182b] border border-slate-200/80 dark:border-border-subtle shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-brand-bright flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Talk to Experts</h4>
                    <p className="text-[11px] text-muted">Get the right guidance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#0c182b] border border-slate-200/80 dark:border-border-subtle shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-brand-cyan flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Custom Solutions</h4>
                    <p className="text-[11px] text-muted">Built for your business</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Realistic Consultant Portrait */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-brand-cyan/20 shadow-2xl bg-slate-900">
                  <Image
                    src="/images/contact/contact-hero-consultant.jpg"
                    alt="Nexovio Customer Consultation & Engineering Specialist"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                  {/* Floating live indicator */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-medium">Direct Engineering Lead Review</span>
                    </div>
                    <span className="text-[11px] font-mono text-brand-cyan">24h SLA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORM & CONTACT INFORMATION SECTION */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 flex flex-col">
              <ContactForm />
            </div>

            {/* Right: Contact Information Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="h-full rounded-2xl bg-gradient-to-br from-[#0A1A33] via-[#0D2447] to-[#0A1628] text-white p-7 sm:p-10 border border-blue-500/20 shadow-xl flex flex-col justify-between relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Contact <span className="text-brand-cyan">Information</span>
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-blue-100 leading-relaxed font-medium">
                      Reach out to us through any of the following channels. We’re happy to help!
                    </p>
                  </div>

                  <div className="space-y-6 pt-2">
                    {/* Email */}
                    <a
                      href={`mailto:${contactEmail}`}
                      onClick={() => trackContactClick("email", "contact_info_card")}
                      className="flex items-start gap-4 p-2.5 rounded-xl transition-all group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/50 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block">
                          Email Us
                        </span>
                        <span className="text-sm sm:text-base text-white group-hover:text-brand-cyan transition-colors block break-all font-semibold mt-0.5">
                          {contactEmail}
                        </span>
                        <span className="text-xs text-blue-200 mt-1 block font-medium">
                          We reply within 24 hours
                        </span>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                      onClick={() => trackContactClick("phone", "contact_info_card")}
                      className="flex items-start gap-4 p-2.5 rounded-xl transition-all group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/50 group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block">
                          Call Us
                        </span>
                        <span className="text-sm sm:text-base text-white group-hover:text-brand-cyan transition-colors block font-semibold mt-0.5">
                          {contactPhone}
                        </span>
                        <span className="text-xs text-blue-200 mt-1 block font-medium">
                          Mon - Sat, 10:00 AM - 7:00 PM (IST)
                        </span>
                      </div>
                    </a>

                    {/* WhatsApp Direct */}
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackContactClick("whatsapp", "contact_info_card")}
                      className="flex items-start gap-4 p-2.5 rounded-xl transition-all group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/50 group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block">
                          WhatsApp Direct
                        </span>
                        <span className="text-sm sm:text-base text-white group-hover:text-brand-cyan transition-colors block font-semibold mt-0.5">
                          {whatsappNumber}
                        </span>
                        <span className="text-xs text-blue-200 mt-1 block font-medium">
                          Instant messaging for quick queries
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Follow Us & Social */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/20">
                  <span className="text-xs font-bold uppercase tracking-widest text-white block mb-3">
                    Follow Us
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/nexoviodigitalsolutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-600/40 hover:bg-blue-600 border border-blue-400/50 flex items-center justify-center text-white transition-all shadow-md hover:scale-105"
                      aria-label="Nexovio on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="https://instagram.com/nexoviodigitalsolutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-600/40 hover:bg-blue-600 border border-blue-400/50 flex items-center justify-center text-white transition-all shadow-md hover:scale-105"
                      aria-label="Nexovio on Instagram"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY BUSINESSES CHOOSE NEXOVIO */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#071120] border-y border-slate-200/80 dark:border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Businesses Choose{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Nexovio</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              We’re more than a service provider — we’re your digital growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-border-subtle bg-slate-50/50 dark:bg-[#0c182b] hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-brand-cyan flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SCHEDULE A CALL (CALENDLY EMBED) */}
      <section className="py-12 sm:py-16 bg-white dark:bg-[#071120] border-t border-slate-200/80 dark:border-border-subtle relative" id="schedule-call">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Video Call Booking</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              Schedule a{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Discovery Call</span>
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto">
              Prefer a direct conversation? Select a convenient time slot for a 30-minute Google Meet / Zoom technical scoping call.
            </p>
          </div>

          <div className="w-full rounded-3xl border border-slate-200 dark:border-border-subtle bg-slate-50 dark:bg-surface-elevated shadow-xl p-3 sm:p-6 lg:p-8 relative">
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
                src="https://calendly.com/nexoviodigitalsolutions-info/30min?back=1&embed_domain=nexoviodigitalsolutions.com&embed_type=Inline"
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

      <FaqSection
        faqs={FAQS}
        title="Frequently Asked"
        highlightText="Questions"
        variant="white"
      />
    </div>
  );
}

