"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Palette,
  Layout,
  Smartphone,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Bot,
  Cpu,
  Workflow,
  MessageSquareCode,
  Wand2,
} from "lucide-react";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { Button } from "@/src/components/ui/Button";
import { FaqSection } from "@/src/components/sections/FaqSection";
import { getCollectionPageSchema } from "@/src/lib/schema";
import { FinalCtaSection } from "@/src/components/sections/FinalCtaSection";

interface CoreService {
  id: string;
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  image: string;
  href: string;
}

const CORE_SERVICES: CoreService[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    description:
      "Scalable, high-performance websites and web applications built with modern technologies and best practices.",
    bullets: [
      "Custom Website Development",
      "CMS Development",
      "API Integration",
      "Performance Optimization",
    ],
    icon: Code2,
    iconBg: "bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50",
    iconColor: "text-blue-600 dark:text-cyan-400",
    image: "/images/services/services-web-dev.jpg",
    href: "/services/web-development",
  },
  {
    id: "web-design",
    slug: "web-design",
    title: "Web Design",
    description:
      "Visually appealing and user-friendly web designs that bring your brand to life and improve engagement.",
    bullets: [
      "UI/UX Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "Responsive Design",
    ],
    icon: Palette,
    iconBg: "bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50",
    iconColor: "text-purple-600 dark:text-purple-400",
    image: "/images/services/services-web-design.jpg",
    href: "/services/web-design",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user experiences that make your product simple, useful and enjoyable.",
    bullets: [
      "User Research",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Usability Testing",
    ],
    icon: Layout,
    iconBg: "bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    image: "/images/services/services-ui-ux.jpg",
    href: "/services/ui-ux-design",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Feature-rich, secure and high-performing apps for iOS and Android that your users will love.",
    bullets: [
      "Native & Cross-Platform",
      "App Store Optimization",
      "Offline Functionality",
      "Ongoing Support",
    ],
    icon: Smartphone,
    iconBg: "bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/50",
    iconColor: "text-orange-600 dark:text-orange-400",
    image: "/images/services/services-mobile.jpg",
    href: "/services/mobile-app-development",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Creative visual solutions that strengthen your brand identity and communicate your message effectively.",
    bullets: [
      "Brand Identity",
      "Logo Design",
      "Packaging Design",
      "Marketing Collateral",
    ],
    icon: Sparkles,
    iconBg: "bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/50",
    iconColor: "text-pink-600 dark:text-pink-400",
    image: "/images/services/services-graphic-design.jpg",
    href: "/services/graphic-design",
  },
  {
    id: "seo-digital-marketing",
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    description:
      "Data-driven strategies to improve your search rankings, increase visibility and drive qualified traffic.",
    bullets: [
      "SEO Strategy & Optimization",
      "Content Marketing",
      "Social Media Marketing",
      "Paid Campaigns (PPC)",
    ],
    icon: TrendingUp,
    iconBg: "bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/50",
    iconColor: "text-teal-600 dark:text-teal-400",
    image: "/images/services/services-seo.jpg",
    href: "/services/seo-digital-marketing",
  },
];

const AI_SERVICES = [
  {
    title: "Custom AI Development",
    desc: "Bespoke machine learning architectures, predictive modeling, and enterprise private cloud LLM deployments.",
    href: "/services/ai-development",
    icon: Cpu,
  },
  {
    title: "AI Agent Development",
    desc: "Autonomous multi-agent workflows, tool-calling systems, and self-orchestrating task execution.",
    href: "/services/ai-agent-development",
    icon: Bot,
  },
  {
    title: "AI Chatbot Development",
    desc: "Domain-trained conversational assistants with RAG vector search and CRM integration.",
    href: "/services/ai-chatbot-development",
    icon: MessageSquareCode,
  },
  {
    title: "AI Automation Solutions",
    desc: "Intelligent document parsing, invoice extraction, and zero-touch operational automations.",
    href: "/services/ai-automation-solutions",
    icon: Workflow,
  },
  {
    title: "Generative AI Development",
    desc: "Tailored generative copilots, diffusion workflows, and domain fine-tuned internal productivity tools.",
    href: "/services/generative-ai-development",
    icon: Wand2,
  },
];

const SERVICES_HUB_FAQS = [
  {
    question: "Can Nexovio combine multiple services into a single custom engagement?",
    answer:
      "Yes. Most client engagements integrate complementary disciplines—such as UI/UX Design, Custom Full-Stack Web Development, and Technical SEO—into a cohesive end-to-end delivery roadmap.",
  },
  {
    question: "How do you ensure transparency and milestone delivery throughout a project?",
    answer:
      "Every project follows an agile sprint structure with weekly progress reviews, interactive staging links, direct communication channels, and clear scope verification before each phase.",
  },
  {
    question: "Do you offer post-launch support and continuous maintenance retainers?",
    answer:
      "Yes. We provide ongoing support plans covering security patching, Core Web Vitals monitoring, feature enhancements, and continuous organic search optimization.",
  },
  {
    question: "What is the typical timeframe required to complete a digital project?",
    answer:
      "Project timelines vary based on scope: a focused marketing site typically launches in 3 to 6 weeks, while a full-scale custom web platform or mobile app spans 8 to 14 weeks from wireframe to release.",
  },
  {
    question: "How do we get started with Nexovio on a new project?",
    answer:
      "You can start by requesting a free consultation or reaching out through our contact form. Our technical team reviews your requirements and schedules a discovery call within 24 hours.",
  },
];

export default function ServicesPage() {
  const schema = getCollectionPageSchema(
    "Digital Solutions & IT Services | Nexovio",
    "Explore Nexovio's full suite of digital engineering disciplines: Web Development, Web Design, UI/UX Design, Mobile App Development, SEO & Digital Marketing, Brand Design, and AI Solutions.",
    "/services"
  );

  return (
    <div className="bg-background text-foreground transition-colors overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. HERO SECTION (Full-Width Section with Internal max-w-7xl Container) */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        {/* Background Radial Glow & Futuristic Grid Lines */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle & Value Pills */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright" />
                <span>OUR SERVICES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Custom Digital Solutions <br className="hidden sm:inline" />
                for{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Your Business Goals
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl font-normal">
                We build modern web, mobile and AI-powered solutions that help businesses work smarter, engage their users and achieve sustainable growth. Explore our core services below and find the right solution for your next project.
              </p>

              {/* 3 Value Checkmark Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Experienced Team</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Flexible Engagements</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Result-Driven Approach</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Team Image with Floating Badge & Decorative Curved Arc */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Decorative Cyan Arc Backdrop Accent */}
              <div
                className="absolute -top-6 -left-6 w-32 h-32 sm:w-44 sm:h-44 rounded-full border-[3px] border-cyan-400/30 border-dashed pointer-events-none -z-0"
                aria-hidden="true"
              />

              <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-border-subtle bg-surface-elevated aspect-[4/3] sm:aspect-[16/12] z-10 group">
                <Image
                  src="/images/services/services-hero-team.jpg"
                  alt="Nexovio digital solutions collaborative team working on modern digital solutions"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Floating Solution Callout Pill at Bottom-Right */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 pr-4 sm:pr-5 shadow-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 z-20">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white shadow-md shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] sm:text-[11px] text-muted block leading-tight">
                      Let&apos;s Build
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-foreground block leading-tight">
                      Your Next Solution
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES SECTION (Full-Width Section with Internal max-w-7xl Container) */}
      <section className="py-16 sm:py-20 bg-background border-t border-border-subtle/60" id="core-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
              OUR CORE SERVICES
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
              End-to-End Digital Services for Lasting Impact
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              From strategy and design to development and support, we offer a complete suite of digital services to help you stay ahead in a competitive market.
            </p>
          </div>

          {/* 6 Service Cards Grid (2 cols x 3 rows) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {CORE_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="rounded-2xl sm:rounded-3xl border border-border-subtle bg-surface-elevated/80 hover:bg-surface-elevated backdrop-blur-sm p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-bright/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-stretch h-full">
                    {/* Left Column: Icon, Title, Description, Bullets, Link */}
                    <div className="sm:col-span-7 flex flex-col justify-between space-y-4">
                      <div>
                        {/* Header: Tinted Icon Box + Title */}
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${service.iconBg}`}
                          >
                            <Icon className={`w-5 h-5 ${service.iconColor}`} />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">
                            {service.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* 4 Feature Checklist Items */}
                        <ul className="space-y-2 mb-4">
                          {service.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2 text-xs sm:text-sm text-foreground"
                            >
                              <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Explore Link with Arrow */}
                      <div className="pt-2">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-bright hover:text-brand-electric group/link transition-colors"
                        >
                          <span>Explore {service.title}</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: High-Fidelity Vertical Photograph */}
                    <div className="sm:col-span-5 relative min-h-[200px] sm:min-h-full rounded-xl sm:rounded-2xl overflow-hidden border border-border-subtle/50 group/img">
                      <Image
                        src={service.image}
                        alt={`${service.title} by Nexovio Digital Solutions`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 260px"
                        className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CONSULTATION CALLOUT BANNER (Full-Width Section with Internal max-w-7xl Container) */}
      <section className="pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-sky-200/80 bg-sky-50/70 dark:bg-slate-900/80 dark:border-sky-900/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-left w-full md:w-auto">
              <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-brand-cyan/20 flex items-center justify-center text-brand-bright shrink-0">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Not sure which service is right for you?
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-0.5">
                  Tell us about your goals and we&apos;ll recommend the best approach for your business.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto text-left md:text-right">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                trackingName="services_consultation_banner"
                trackingLocation="services_hub"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full md:w-auto shadow-md"
              >
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE AI CAPABILITIES (Full-Width Section with Internal max-w-7xl Container) */}
      <section className="py-16 sm:py-20 bg-surface-subtle/50 border-y border-border-subtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border-subtle bg-surface-elevated/80 backdrop-blur-sm p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-lg">
            <div className="max-w-3xl mb-8 space-y-3">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                ARTIFICIAL INTELLIGENCE &amp; AUTOMATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Explore Enterprise AI &amp; Autonomous Workflows
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Empower your business with bespoke artificial intelligence architectures, conversational AI chatbots, multi-step autonomous agents, and document processing automation.
              </p>
            </div>

            {/* 5 AI Discipline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AI_SERVICES.map((ai) => {
                const AiIcon = ai.icon;
                return (
                  <Link
                    key={ai.href}
                    href={ai.href}
                    className="p-5 rounded-2xl border border-border-subtle bg-surface hover:border-brand-bright/50 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-bright flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <AiIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-brand-bright transition-colors mb-1.5">
                        {ai.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {ai.desc}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-brand-bright">
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS SECTION (Full-Width Section with Internal max-w-7xl Container) */}
      <section className="bg-background">
        <FaqSection
          faqs={SERVICES_HUB_FAQS}
          title="Frequently Asked"
          highlightText="Questions"
        />
      </section>

      <FinalCtaSection />
    </div>
  );
}
