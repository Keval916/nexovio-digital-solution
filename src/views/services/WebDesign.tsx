"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
  Heart,
  PenTool,
  ArrowRight,
  MessageSquare,
  FileText,
  Code2,
  CheckCircle2,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Sparkles,
  Layers,
  Layout,
  Monitor,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  getOrganizationSchema,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";

// ============================================================================
// DATA STRUCTURES: WHY CHOOSE, PROCESS, PORTFOLIO, TECH, REVIEWS & FAQS
// ============================================================================

const HERO_FEATURES = [
  {
    id: "clean-design",
    label: "Modern & Clean Design",
    icon: Layout,
  },
  {
    id: "all-devices",
    label: "Responsive for All Devices",
    icon: Smartphone,
  },
  {
    id: "seo-friendly",
    label: "SEO Friendly",
    icon: Search,
  },
  {
    id: "fast-loading",
    label: "Fast Loading",
    icon: Zap,
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    id: "custom-unique",
    title: "Custom & Unique Designs",
    description: "Tailored to your brand, audience and business goals.",
    icon: PenTool,
  },
  {
    id: "fully-responsive",
    title: "Fully Responsive",
    description: "Looks amazing on all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    id: "fast-loading",
    title: "Fast Loading",
    description: "Optimized for speed, performance and better UX.",
    icon: Zap,
  },
  {
    id: "seo-optimized",
    title: "SEO Optimized",
    description: "Built with clean code and SEO best practices.",
    icon: Search,
  },
  {
    id: "easy-to-manage",
    title: "Easy to Manage",
    description: "Simple updates and long-term support.",
    icon: ShieldCheck,
  },
  {
    id: "focus-growth",
    title: "Focus on Your Growth",
    description: "Designs that attract, engage and convert.",
    icon: Heart,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understand your brand, goals and target audience.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Design & Wireframes",
    description: "Create structure and visual concepts.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Development",
    description: "Turn designs into a fast, clean and scalable website.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Ensure quality, performance and cross-browser support.",
    icon: CheckCircle2,
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Go live and provide ongoing maintenance and support.",
    icon: Rocket,
  },
];

const PORTFOLIO_PROJECTS = [
  {
    id: "crush-coffee",
    title: "Crush Coffee",
    category: "Food & Beverage",
    description: "A modern and engaging website for a premium coffee brand.",
    image: "/images/services/web-design/portfolio-crush-coffee-web-design.jpg",
    alt: "Crush Coffee specialty cafe brand web design and product packaging showcase",
  },
  {
    id: "infinity-fitness",
    title: "Infinity Fitness Gym",
    category: "Fitness & Health",
    description: "A dynamic website with class schedules, trainer profiles and easy booking.",
    image: "/images/services/web-design/portfolio-infinity-fitness-web-design.jpg",
    alt: "Infinity Fitness Gym responsive website and mobile member portal experience",
  },
  {
    id: "the-breathing-home",
    title: "The Breathing Home",
    category: "Real Estate",
    description: "A clean and minimal website for a lifestyle and home brand.",
    image: "/images/services/web-design/portfolio-breathing-home-web-design.jpg",
    alt: "The Breathing Home architectural and interior lifestyle brand website design",
  },
];

const TECH_TOOLS = [
  {
    name: "Figma",
    color: "#F24E1E",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "Adobe XD",
    color: "#470137",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="28" fill="#470137" />
        <text x="64" y="80" fill="#FF61F6" fontFamily="system-ui, sans-serif" fontSize="52" fontWeight="800" textAnchor="middle">Xd</text>
      </svg>
    ),
  },
  {
    name: "Photoshop",
    color: "#001E36",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="28" fill="#001E36" />
        <text x="64" y="80" fill="#31A8FF" fontFamily="system-ui, sans-serif" fontSize="52" fontWeight="800" textAnchor="middle">Ps</text>
      </svg>
    ),
  },
  {
    name: "Illustrator",
    color: "#330000",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="28" fill="#330000" />
        <text x="64" y="80" fill="#FF9A00" fontFamily="system-ui, sans-serif" fontSize="52" fontWeight="800" textAnchor="middle">Ai</text>
      </svg>
    ),
  },
  {
    name: "HTML5",
    color: "#E34F26",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-current text-foreground" viewBox="0 0 512 512">
        <path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512" />
        <path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
        <path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26" />
        <path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "#1572B6",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-current text-foreground" fill="none" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" /><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" /><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff" /></svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#06B6D4" d="M64 19.2C42.7 19.2 29.3 29.9 24 51.2c8-10.7 17.3-14.7 28-12 6.1 1.5 10.5 5.9 15.3 10.9 7.9 8 17 17.3 36.7 17.3 21.3 0 34.7-10.7 40-32-8 10.7-17.3 14.7-28 12-6.1-1.5-10.5-5.9-15.3-10.9C92.8 28.5 83.7 19.2 64 19.2zM24 72.5c-21.3 0-34.7 10.7-40 32 8-10.7 17.3-14.7 28-12 6.1 1.5 10.5 5.9 15.3 10.9 7.9 8 17 17.3 36.7 17.3 21.3 0 34.7-10.7 40-32-8 10.7-17.3 14.7-28 12-6.1-1.5-10.5-5.9-15.3-10.9C52.8 81.8 43.7 72.5 24 72.5z" />
      </svg>
    ),
  },
  {
    name: "React JS",
    color: "#61DAFB",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="64" cy="64" rx="20" ry="52" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 64 64)" />
        <ellipse cx="64" cy="64" rx="20" ry="52" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 64 64)" />
        <ellipse cx="64" cy="64" rx="20" ry="52" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 64 64)" />
        <circle cx="64" cy="64" r="10" fill="#61DAFB" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Nexovio delivered a stunning website that perfectly matches our brand and vision. The team was professional, creative and always responsive.",
    author: "Sarah Mitchell",
    role: "Founder, The Breathing Home",
    avatar: "/images/services/web-design/client-sarah-mitchell.svg",
    rating: 5,
  },
  {
    quote:
      "Our online conversion rate jumped by 42% after launching the new digital experience. Nexovio's attention to typography and micro-interactions is world class.",
    author: "David Harrison",
    role: "Marketing Director, Crush Coffee",
    avatar: "/images/services/web-design/client-sarah-mitchell.svg",
    rating: 5,
  },
  {
    quote:
      "Members love the intuitive class booking experience on mobile. The design is sleek, incredibly fast, and truly elevates our brand in a crowded market.",
    author: "Michael Vance",
    role: "Head of Operations, Infinity Fitness Gym",
    avatar: "/images/services/web-design/client-sarah-mitchell.svg",
    rating: 5,
  },
];

const WEB_DESIGN_FAQS = [
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design focuses on visual aesthetics, UI/UX structure, typography, brand identity, user journeys, and wireframe prototypes. Web development turns those designs into functioning, interactive code using technologies like React, Next.js, and modern databases. At Nexovio, our design and development teams collaborate closely to deliver cohesive digital solutions.",
  },
  {
    question: "How long does it take to design a custom website?",
    answer:
      "A tailored website design typically takes 2 to 4 weeks depending on the number of unique templates, user flow complexity, and feedback revisions. Enterprise platforms and large e-commerce storefronts generally require 4 to 6 weeks for thorough UX research, high-fidelity Figma prototyping, and design system creation.",
  },
  {
    question: "Will my website design be fully responsive across mobile, tablet, and desktop?",
    answer:
      "Yes. Every screen is designed with a mobile-first philosophy. We create tailored layout breakpoints for smartphones, tablets, laptops, and ultra-wide desktop monitors to ensure seamless navigation, crisp typography, and high conversion rates regardless of the device.",
  },
  {
    question: "Can you redesign our existing website without hurting our SEO rankings?",
    answer:
      "Absolutely. We conduct pre-redesign SEO audits to map your top-performing URLs, keyword rankings, and backlinks. We preserve URL structures, implement 301 redirects where necessary, optimize Core Web Vitals, and enhance on-page schema markup so your search visibility stays strong or improves.",
  },
  {
    question: "Do you design websites in Figma before writing any code?",
    answer:
      "Yes. We design complete interactive prototypes in Figma, allowing you to review typography, color schemes, micro-interactions, and page layouts before development begins. This collaborative process eliminates guesswork and speeds up delivery.",
  },
  {
    question: "How do your web designs help improve conversion rates and lead generation?",
    answer:
      "We design with strategic conversion architecture: intuitive visual hierarchy, clear value propositions, trust signals, frictionless form design, and prominent call-to-action (CTA) buttons that guide visitors naturally toward contacting your business or purchasing your product.",
  },
];

export default function WebDesignPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "Professional Web Design & Responsive Website Design Services",
    description:
      "Beautiful, functional, and conversion-focused web design services. We create modern, responsive, and user-friendly websites that engage visitors and drive business growth.",
    url: "/services/web-design",
    serviceType: "WebDesignServices",
    image: "/images/services/web-design/web-design-hero-workspace.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Web Design", url: "/services/web-design" },
  ]);

  const activeReview = TESTIMONIALS[currentTestimonial];

  return (
    <div className="bg-background text-foreground transition-colors overflow-hidden">
      {/* Structured Data Scripts for Google Crawling & Rich Snippets */}
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
          { name: "Web Design", url: "/services/web-design" },
        ]}
      />

      {/* =================================================================== */}
      {/* 1. HERO SECTION (Matching Reference Mockup 1:1)                      */}
      {/* =================================================================== */}
      <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        {/* Ambient Subtle Glow Accents */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-60" />
        <div className="absolute -top-36 -right-36 w-96 h-96 bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-36 -left-36 w-96 h-96 bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-brand-cyan/30 bg-surface-elevated text-brand-bright shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-bright animate-pulse" />
                <span>WEB DESIGN SERVICES</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Beautiful, Functional &amp; Conversion-Focused{" "}
                <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                  Website Designs
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl">
                Your website is more than just an online presence — it&apos;s your brand&apos;s first impression. We create modern, responsive and user-friendly web designs that engage visitors, build trust and turn them into loyal customers.
              </p>

              {/* 4 Feature Badges (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {HERO_FEATURES.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.id}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl border border-border-subtle bg-surface-elevated/70 shadow-2xs hover:border-brand-bright/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-foreground">
                        {feat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons Row */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  trackingName="web_design_hero_start_project"
                  trackingLocation="web_design_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Your Project
                </Button>
                <Button
                  href="#portfolio"
                  variant="secondary"
                  size="md"
                  trackingName="web_design_hero_view_portfolio"
                  trackingLocation="web_design_hero"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>

            {/* Right Column: Hero Workspace Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-elevated aspect-[4/3] group">
                <Image
                  src="/images/services/web-design/web-design-hero-workspace.jpg"
                  alt="Modern web design workstation with laptop showing responsive design layout, smartphone and designer tools"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Floating Handwritten Style Label Annotation */}
                <div className="absolute top-5 right-5 bg-white/95 dark:bg-[#07162c]/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-xl border border-brand-cyan/30 flex items-center gap-2.5 z-20">
                  <div className="w-2 h-2 rounded-full bg-brand-bright animate-ping" />
                  <div className="text-left">
                    <span className="text-[11px] font-bold text-foreground block font-mono">
                      Modern Design
                    </span>
                    <span className="text-[10px] font-semibold text-brand-bright block leading-tight">
                      Better Results &rarr;
                    </span>
                  </div>
                </div>

                {/* Subtle Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. WHY CHOOSE NEXOVIO? (2-Column Split: Pitch + 6 Card Grid)         */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-surface-subtle/40 border-t border-border-subtle/60" id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-4 text-left space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-bright">
                THE RIGHT PARTNER FOR YOUR BRAND
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                  Nexovio?
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We combine creativity, strategy and technology to design websites that not only look great but also perform. Our team focuses on creating seamless user experiences that drive engagement and business growth.
              </p>
              <div className="pt-2">
                <Button
                  href="/services"
                  variant="primary"
                  size="md"
                  trackingName="web_design_why_explore_services"
                  trackingLocation="web_design_why_choose"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Our Services
                </Button>
              </div>
            </div>

            {/* Right Column: 6 Cards in 2-Column Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {WHY_CHOOSE_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl border border-border-subtle bg-surface-elevated space-y-3 shadow-xs hover:border-brand-bright/40 hover:shadow-sm transition-all text-left group"
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-brand-cyan/15 flex items-center justify-center text-brand-bright group-hover:bg-brand-bright group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. OUR PROCESS (From Idea to Impact in 5 Simple Steps)               */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-background border-t border-border-subtle/60" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            {/* Left Header */}
            <div className="lg:col-span-5 text-left space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-bright">
                OUR PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                From Idea to Impact{" "}
                <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                  In 5 Simple Steps
                </span>
              </h2>
            </div>

            {/* Right Subtitle & Action */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
              <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-lg">
                We make the web design process simple and transparent. From understanding your goals to launching your website, we&apos;re with you at every step.
              </p>
              <Button
                href="/contact"
                variant="secondary"
                size="md"
                trackingName="web_design_process_learn_more"
                trackingLocation="web_design_process"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shrink-0"
              >
                Learn More About Our Process
              </Button>
            </div>
          </div>

          {/* 5 Step Nodes (Horizontal Chain with Directional Flow) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl border border-border-subtle bg-surface-elevated flex flex-col justify-between space-y-4 text-left shadow-xs hover:border-brand-bright/40 transition-all relative group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-brand-cyan/15 flex items-center justify-center text-brand-bright group-hover:bg-brand-bright group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {idx < PROCESS_STEPS.length - 1 && (
                      <span className="hidden lg:block text-slate-300 dark:text-slate-700 font-mono text-sm">
                        &rarr;
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-brand-bright block">
                      {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. WEB DESIGN PROJECTS WE'RE PROUD OF (Portfolio Grid)              */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-surface-subtle/40 border-t border-border-subtle/60" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-12">
            <div className="lg:col-span-8 text-left space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-bright">
                OUR PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Web Design Projects{" "}
                <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                  We&apos;re Proud Of
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-muted max-w-2xl">
                Explore some of our latest web design projects and see how we help businesses create impactful online experiences.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Button
                href="/portfolio"
                variant="secondary"
                size="md"
                trackingName="web_design_portfolio_view_all"
                trackingLocation="web_design_portfolio"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View All Projects
              </Button>
            </div>
          </div>

          {/* 3 Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {PORTFOLIO_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="rounded-2xl border border-border-subtle bg-surface-elevated overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-bright/40 transition-all text-left flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={proj.image}
                    alt={proj.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3">
                  <div className="space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-50 dark:bg-brand-cyan/15 text-brand-bright border border-brand-cyan/20">
                      {proj.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-brand-bright transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border-subtle/60 flex items-center justify-between text-xs font-semibold text-brand-bright">
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. SPLIT SECTION: TECHNOLOGIES WE USE & WHAT OUR CLIENTS SAY        */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-background border-t border-border-subtle/60" id="technologies-and-reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center">
            {/* Left Sub-Column: Technologies We Use */}
            <div className="lg:col-span-5 text-left space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-bright">
                  TECHNOLOGIES WE USE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  Modern Tools for{" "}
                  <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                    Modern Websites
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  We work with the latest design and development technologies to build high-performance, scalable and future-ready websites.
                </p>
              </div>

              {/* 8 Tools Grid (4 x 2) */}
              <div className="grid grid-cols-4 gap-3 pt-2">
                {TECH_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 rounded-xl border border-border-subtle bg-surface-elevated flex flex-col items-center justify-center text-center shadow-2xs hover:border-brand-bright/40 hover:shadow-xs transition-all group"
                  >
                    <div className="mb-1.5 shrink-0 group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </div>
                    <span className="text-[11px] font-bold text-foreground block leading-tight">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <Button
                  href="/services/web-development"
                  variant="secondary"
                  size="md"
                  trackingName="web_design_tech_view_stack"
                  trackingLocation="web_design_technologies"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  View Our Tech Stack
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 7. RELATED CAPABILITIES (Cross-linking for SEO & Discovery)          */}
      {/* =================================================================== */}
      <section className="py-8 bg-surface-subtle/50 border-t border-border-subtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-muted font-mono font-semibold">Explore Related Capabilities:</span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
              <Link href="/services/web-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                Web Development Services &rarr;
              </Link>
              <Link href="/services/ui-ux-design" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                UI/UX Design Services &rarr;
              </Link>
              <Link href="/services/mobile-app-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                Mobile App Development &rarr;
              </Link>
              <Link href="/services/seo-digital-marketing" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                SEO &amp; Digital Marketing &rarr;
              </Link>
              <Link href="/services/ai-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                AI &amp; Automation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (Standard FaqSection Component)       */}
      {/* =================================================================== */}
      <FaqSection
        faqs={WEB_DESIGN_FAQS}
        badge="COMMON QUESTIONS"
        title="Frequently Asked"
        highlightText="Questions"
        description="Clear answers regarding our web design process, custom UI/UX methodologies, Figma prototypes, responsive standards, and post-launch maintenance."
        variant="white"
      />
    </div>
  );
}
