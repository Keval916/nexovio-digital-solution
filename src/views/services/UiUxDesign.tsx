"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Sparkles,
  TrendingUp,
  Award,
  Search,
  Layout,
  Layers,
  Palette,
  Workflow,
  CheckCircle2,
  Eye,
  Component,
  PenTool,
  Sliders,
  Rocket,
  ShieldCheck,
  Clock,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Zap,
  Plus,
  Minus,
} from "lucide-react";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { ContactForm } from "@/src/components/forms/ContactForm";
import {
  getOrganizationSchema,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/src/lib/schema";
import { FaqSection } from "@/src/components/sections/FaqSection";

const HERO_VALUE_ITEMS = [
  {
    icon: Users,
    title: "User-Centered Design",
    desc: "Built around real user behaviors",
  },
  {
    icon: Zap,
    title: "Modern & Clean Interfaces",
    desc: "Aesthetic, distraction-free layouts",
  },
  {
    icon: TrendingUp,
    title: "Better Engagement & Conversions",
    desc: "Optimized funnels that drive sales",
  },
  {
    icon: Award,
    title: "Scalable for Future Growth",
    desc: "Design systems ready to expand",
  },
];

const UI_UX_SERVICES = [
  {
    icon: Users,
    title: "User Research & Analysis",
    desc: "Understand your audience, uncover real pain points, and build data-driven design solutions.",
  },
  {
    icon: Layout,
    title: "Wireframing & Prototyping",
    desc: "Visualize ideas with clear structural wireframes and clickable high-fidelity prototypes.",
  },
  {
    icon: Palette,
    title: "UI Design",
    desc: "Create beautiful, modern, and brand-aligned interfaces that feel effortless to interact with.",
  },
  {
    icon: Workflow,
    title: "UX Design",
    desc: "Map seamless user journeys and intuitive navigation flows for maximum engagement.",
  },
  {
    icon: Eye,
    title: "Usability Testing",
    desc: "Validate design decisions with real user sessions and optimize with actionable feedback.",
  },
  {
    icon: Component,
    title: "Design Systems",
    desc: "Build comprehensive Figma token systems for cohesive, lightning-fast developer handoff.",
  },
];

const DESIGN_PROCESS_STEPS = [
  {
    step: "1. Discover",
    title: "Discover",
    icon: Search,
    desc: "Research, analyze and define user goals and product requirements.",
  },
  {
    step: "2. Design",
    title: "Design",
    icon: PenTool,
    desc: "Create low & high-fidelity wireframes, interface mockups and prototypes.",
  },
  {
    step: "3. Validate",
    title: "Validate",
    icon: CheckCircle2,
    desc: "Test prototypes with real target users to validate usability and flows.",
  },
  {
    step: "4. Refine",
    title: "Refine",
    icon: Sliders,
    desc: "Improve based on behavioral insights and optimize conversion paths.",
  },
  {
    step: "5. Deliver",
    title: "Deliver",
    icon: Rocket,
    desc: "Provide comprehensive Figma design systems ready for developers.",
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    icon: Sparkles,
    title: "Experienced Designers",
    desc: "Skilled design leads with multi-industry expertise across SaaS, mobile, and web.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    desc: "Your business goals combined with our creative strategy for superior results.",
  },
  {
    icon: ShieldCheck,
    title: "On-Time Delivery",
    desc: "Transparent milestone reviews, zero surprises, and reliable project scheduling.",
  },
  {
    icon: Clock,
    title: "Long-Term Support",
    desc: "We stay with you through development handoff, QA testing, and product launch.",
  },
];

const UI_UX_FAQS = [
  {
    question: "What deliverables will I receive from a UI/UX design engagement?",
    answer:
      "You receive organized Figma files, clickable prototypes, comprehensive component libraries (design tokens, typography, colors), exportable vector assets (SVG/PNG), and developer handoff documentation with responsive breakpoints.",
  },
  {
    question: "Do you design for both web applications and mobile apps?",
    answer:
      "Yes. We specialize in cross-platform digital product design, including responsive web apps, SaaS dashboards, iOS native guidelines (Human Interface Guidelines), and Android Material Design systems.",
  },
  {
    question: "How long does a typical UI/UX design project take?",
    answer:
      "A focused MVP or landing experience typically takes 2 to 3 weeks. Full SaaS platforms or multi-feature mobile applications generally take 4 to 8 weeks depending on scope, user research depth, and prototyping complexity.",
  },
  {
    question: "Can you redesign an existing digital product to improve conversion rates?",
    answer:
      "Yes. We conduct UX usability audits, heat-map reviews, and heuristic analyses on existing products to pinpoint drop-off bottlenecks, streamline user flows, and modernize the visual interface.",
  },
  {
    question: "How do you collaborate with our software engineers during development?",
    answer:
      "We provide inspectable Figma files with explicit padding, layout auto-layout grids, interaction states (hover, active, disabled), and design token variables. We also participate in dev handoff walkthroughs to ensure pixel-perfect implementation.",
  },
];

export default function UiUxDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "UI/UX Design Services & Modern Design Systems",
    description:
      "We create intuitive, visually stunning, and user-centric designs that turn ideas into engaging digital experiences. User research, wireframing, UI/UX design, and design systems.",
    url: "/services/ui-ux-design",
    serviceType: "UIUXDesignServices",
    image: "/images/services/uiux-hero-designer.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "UI/UX Design", url: "/services/ui-ux-design" },
  ]);

  return (
    <div className="bg-slate-50/60 dark:bg-[#060D1A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Full-width Breadcrumb Stripe Touching Header */}
      <Breadcrumbs
        items={[
          { name: "Services", url: "/services" },
          { name: "UI/UX Design", url: "/services/ui-ux-design" },
        ]}
      />

      <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-brand-cyan border border-blue-200 dark:border-brand-cyan/30">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-brand-cyan" />
                <span>UI/UX Design Services</span>
              </div>

              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Designing Experiences{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  That People Love
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                We create intuitive, visually stunning, and user-centric designs that turn ideas into engaging digital experiences. Our UI/UX design services help your brand connect with users, improve usability, and drive real business results.
              </p>

              {/* 4 Hero Highlight Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {HERO_VALUE_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#0c182b] border border-slate-200/80 dark:border-border-subtle shadow-sm flex flex-col justify-between"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-brand-cyan flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h2 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-brand-cyan/20 shadow-2xl bg-slate-900">
                  <Image
                    src="/images/services/uiux-hero-designer.jpg"
                    alt="Senior UI/UX Designer crafting mobile app interfaces in Figma"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-medium">Figma Design System Architecture</span>
                    </div>
                    <span className="text-[11px] font-mono text-brand-cyan">Human-Centric</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. END-TO-END DESIGN SOLUTIONS SECTION */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#071120] border-y border-slate-200/80 dark:border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-brand-cyan block mb-2">
              Our UI/UX Design Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              End-to-End Design Solutions for Your{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Digital Products
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              From research to final design, we craft seamless user experiences that are simple, accessible, and built for performance. Our UI/UX experts focus on your users&apos; needs and business goals to create products that make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: 6 Service Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {UI_UX_SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="p-6 rounded-2xl border border-slate-200/80 dark:border-border-subtle bg-slate-50/50 dark:bg-[#0c182b] hover:shadow-lg hover:-translate-y-1 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-brand-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right: Realistic Human Designer Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-brand-cyan/20 shadow-xl bg-slate-900">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/services/uiux-wireframe-expert.jpg"
                    alt="Senior Product UX Designer reviewing wireframe flows on workstation"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                </div>
                {/* Handwritten style badge callout */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg text-slate-900 dark:text-white font-medium text-xs flex items-center gap-1.5">
                  <span>Great design solves real problems</span>
                  <span className="text-blue-600 dark:text-brand-cyan">↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR UI/UX DESIGN PROCESS SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-brand-cyan block mb-2">
                Our Process
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Our UI/UX Design Process
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
                A proven approach to deliver intuitive, engaging, and high-performing digital experiences.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-brand-cyan hover:underline self-start md:self-auto cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {DESIGN_PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="p-6 rounded-2xl border border-slate-200/80 dark:border-border-subtle bg-white dark:bg-[#0c182b] shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-brand-cyan flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-brand-cyan uppercase tracking-wider block mb-1">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < DESIGN_PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-700 z-10 font-bold">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE NEXOVIO SECTION */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#071120] border-y border-slate-200/80 dark:border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-brand-cyan block mb-2">
              Why Choose Nexovio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              More Than Just Design —{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                We Build Better Experiences
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our UI/UX design services are focused on creating meaningful experiences that not only look great but also drive user satisfaction and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 4 highlight cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl border border-slate-200/80 dark:border-border-subtle bg-slate-50/50 dark:bg-[#0c182b] hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-brand-cyan flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right 3D Isometric Showcase Mockup */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-brand-cyan/20 shadow-xl bg-slate-900">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/services/uiux-mobile-showcase.jpg"
                    alt="3D isometric showcase of mobile screens and web analytics dashboards"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover"
                  />
                </div>
                {/* Floating sticker callout */}
                <div className="absolute top-5 right-5 px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg text-slate-900 dark:text-white font-medium text-xs flex items-center gap-1.5">
                  <span>Thoughtful Designs for Real Users</span>
                  <span className="text-blue-600 dark:text-brand-cyan">⤵</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GET IN TOUCH / BOTTOM CONTACT SECTION */}
      <section className="py-16 sm:py-20" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left: Desk Laptop Photo + Value Points */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white dark:from-[#0B1E3F] dark:via-[#0D2447] dark:to-[#0A1628] p-6 sm:p-8 border border-blue-200 dark:border-blue-500/20 shadow-lg">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
                  <Image
                    src="/images/services/uiux-desk-laptop.jpg"
                    alt="Laptop on agency desk displaying mobile UI design system"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-brand-cyan block mb-2">
                    Get in Touch
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Let’s Create Something{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                      Great Together
                    </span>
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Have a project in mind or need expert advice? Our team is here to understand your goals and help you with the right solution for your business.
                  </p>
                </div>
              </div>

              {/* 3 Value Proposition Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-200/80 dark:border-white/10">
                <div className="p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                  <MessageSquare className="w-4 h-4 text-blue-600 dark:text-brand-cyan mb-1.5" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Quick Response</h4>
                  <p className="text-[10px] text-muted">Within 24 hours</p>
                </div>
                <div className="p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                  <Users className="w-4 h-4 text-indigo-600 dark:text-brand-bright mb-1.5" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Talk to Experts</h4>
                  <p className="text-[10px] text-muted">Direct guidance</p>
                </div>
                <div className="p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                  <Lightbulb className="w-4 h-4 text-teal-600 dark:text-brand-cyan mb-1.5" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Custom Solutions</h4>
                  <p className="text-[10px] text-muted">Tailored scope</p>
                </div>
              </div>
            </div>

            {/* Right: Send Us a Message (Contact Form) */}
            <div className="lg:col-span-7 flex flex-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={UI_UX_FAQS}
        title="Frequently Asked"
        highlightText="Questions"
        description="Clear answers regarding our web design process, custom UI/UX methodologies, Figma prototypes, responsive standards, and post-launch maintenance."
        variant="white"
      />
    </div>
  );
}
