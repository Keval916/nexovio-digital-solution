"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Cpu,
  Zap,
  CheckCircle2,
  Compass,
  PenTool,
  Terminal,
  LineChart,
  Code2,
  Palette,
  Layout,
  Smartphone,
  TrendingUp,
  Check,
  Search,
  Layers,
  ShieldCheck,
  HeartHandshake,
  Building2,
  ShoppingBag,
  HeartPulse,
  Home,
  Wrench,
  Briefcase,
  Rocket,
  Utensils,
  Server,
  Cloud,
  Link2,
  MessageSquareQuote,
  ChevronDown,
  Map,
} from "lucide-react";

import { SERVICES } from "@/data/services";
import { CASE_STUDIES } from "@/data/case-studies";
import { GLOBAL_FAQS } from "@/data/faqs";
import { getFaqSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

// ==========================================
// DATA CONSTANTS
// ==========================================

const VALUE_CARDS = [
  {
    pillarLabel: "STRATEGY PRIOR TO DEVELOPMENT",
    icon: Compass,
    title: "Clear Direction. Better Decisions.",
    description:
      "We delineate writing on the basis of your business, audience, goals and challenges, prior to writing code. It allows us to design a digital solution with a clear intent rather than developing features just because we can.",
  },
  {
    pillarLabel: "DESIGN THAT ALWAYS FEELS RIGHT",
    icon: PenTool,
    title: "Simple Experiences. Stronger Connections.",
    description:
      "We design clean and simple UI/UX interfaces to help the users find what you want to tell them to say and make it simple for you to attract visitors and customers to your site or app.",
  },
  {
    pillarLabel: "SCALE-READY TECHNOLOGY",
    icon: Terminal,
    title: "Flexible Today. Ready for Tomorrow.",
    description:
      "Whether you're building out business websites or custom web and mobile applications that help your company differentiate in the marketplace, we apply forward-looking development techniques and tools to ensure your digital solutions can evolve as your needs change.",
  },
  {
    pillarLabel: "BUSINESS-BUILDING MARKETING",
    icon: LineChart,
    title: "Get Found. Get Remembered. Get Results.",
    description:
      "A website has value, but only if people can find it. Our proven SEO and digital marketing techniques enable businesses to increase their visibility, drive targeted traffic and generate more leads on the internet.",
  },
];

const SERVICE_ICONS = {
  Code2,
  Palette,
  Layout,
  Smartphone,
  TrendingUp,
};

const SERVICE_TITLES: Record<string, string> = {
  "web-development": "Build More Than a Website",
  "web-design": "Make Your First Impression Count",
  "ui-ux-design": "Design Around Real People",
  "mobile-app-development": "Take Your Product Beyond the Browser",
  "seo-digital-marketing": "Turn Online Visibility Into Opportunity",
};

const SERVICE_MOCKUPS: Record<string, string> = {
  "web-development": "/images/services/web-development-mockup.svg",
  "web-design": "/images/services/web-design-mockup.svg",
  "ui-ux-design": "/images/services/ui-ux-mockup.svg",
  "mobile-app-development": "/images/services/ui-ux-mockup.svg",
  "seo-digital-marketing": "/images/services/digital-marketing-mockup.svg",
};

const STEPS = [
  {
    icon: Search,
    h3Title: "Discover",
    headline: "Know Before We Go",
    summary:
      "We begin by getting a clear understanding of your business, your audience, your competitors, your current digital presence, and the goals of the project.",
  },
  {
    icon: Map,
    h3Title: "Plan",
    headline: "From ideas into a detailed roadmap",
    summary:
      "We outline the structure, functionality, user flows, technology needs and project priorities before starting the development.",
  },
  {
    icon: Palette,
    h3Title: "Design",
    headline: "Build the Experience",
    summary:
      "Our designers transform the strategy into fluid interactions, flexible grid systems and a cohesive visual system for your company.",
  },
  {
    icon: Code2,
    h3Title: "Develop",
    headline: "Make the Product a Reality",
    summary:
      "Our development team designs and develops software and websites for optimized performance, responsiveness, security and scalability.",
  },
  {
    icon: CheckCircle2,
    h3Title: "Test",
    headline: "Polish Every Detail That Matters",
    summary:
      "Prior to launch, we check the functionality, responsiveness, usability, and important user flows on varying devices and screen resolutions.",
  },
  {
    icon: Rocket,
    h3Title: "Launch & Grow",
    headline: "Launch Is Just the Beginning",
    summary:
      "After your product is live, we can help continue to support SEO, digital marketing, development, analytics and ongoing optimization.",
  },
];

const REASONS = [
  {
    number: "01",
    title: "BUSINESS-FIRST THINKING",
    icon: Code2,
    description: "We focus on your business goal and then consider the technology to achieve it. ",
  },
  {
    number: "02",
    title: "HUMAN-CENTERED DESIGN",
    icon: Layers,
    description: "Each user is at the center of every interface, we design based on what each person expects to see and what they do want to do.",
  },
  {
    number: "03",
    title: "MODERN DEVELOPMENT",
    icon: Check,
    description: "Modern development methodologies are applied to develop responsive, maintainable and scalable digital solutions.",
  },
  {
    number: "04",
    title: "SEO-FRIENDLY FOUNDATIONS",
    icon: Search,
    description: "Technical SEO (content structure, performance, mobile-friendliness, and search friendly architecture) are addressed within development.",
  },
  {
    number: "05",
    title: "TRANSPARENT COLLABORATION",
    icon: HeartHandshake,
    description: "You remain an active participant in the process with regular updates, opportunities to provide feedback and well-defined milestones.",
  },
  {
    number: "06",
    title: "BUILT TO EVOLVE",
    icon: ShieldCheck,
    description: "Your business will change. Your digital product should be able to change with it. ",
  },
];

const FEATURED_CARDS = [
  {
    title: "Ecommerce & Retail",
    description: "Design stronger online retail experiences and more scalable ecommerce solutions.",
    icon: ShoppingBag,
    url: "/industries/ecommerce",
  },
  {
    title: "SaaS & Technology",
    description: "Develop websites and digital products that demystify technology.",
    icon: Cpu,
    url: "/industries/saas",
  },
  {
    title: "Healthcare",
    description: "Design for clinics, healthcare companies, and their patients to make digital services accessible.",
    icon: HeartPulse,
    url: "/industries/healthcare",
  },
  {
    title: "Real Estate",
    description: "Develop real estate websites and lead generation solutions focused on buyers and sellers.",
    icon: Home,
    url: "/industries/real-estate",
  },
  {
    title: "Home Services",
    description: "Let your customers find your services, request quotes and schedule appointments online.",
    icon: Wrench,
    url: "/industries/home-services",
  },
  {
    title: "Professional Services",
    description: "Create authoritative digital experiences that convert web visitors into quality leads.",
    icon: Briefcase,
    url: "/industries/finance",
  },
  {
    title: "Startups",
    description: "Get started fast with a scalable digital platform that grows with your product.",
    icon: Rocket,
    url: "/industries/startups",
  },
  {
    title: "Restaurants & Hospitality",
    description: "Design digital experiences that simplify discovery, reservations and customer interactions.",
    icon: Utensils,
    url: "/industries/restaurants",
  },
];

const ALL_INDUSTRIES = [
  "Ecommerce & Online Retail", "Retail & Consumer Brands", "SaaS & Software", "Technology & IT Companies",
  "Startups & Scaleups", "AI & Machine Learning", "FinTech & Financial Services", "Banking & Financial Institutions",
  "Insurance", "Healthcare", "Hospitals & Medical Centers", "Clinics & Doctors", "Dental Clinics",
  "Mental Wellness & Wellness Businesses", "Fitness & Gyms", "Beauty Salons & Spas", "Real Estate",
  "Property Management", "Construction", "Architecture & Interior Design", "Home Services", "HVAC & Plumbing",
  "Electrical Services", "Cleaning Services", "Legal & Law Firms", "Accounting & Tax Services", "Consulting",
  "Professional Services", "Education & E-Learning", "Schools & Institutes", "Coaching & Training",
  "Universities & Educational Organizations", "Restaurants & Food Businesses", "Cafes & Bakeries",
  "Hotels & Hospitality", "Travel & Tourism", "Event Management", "Entertainment & Media", "Influencers & Personal Brands",
  "Marketing & Advertising", "Automotive & Auto Services", "Manufacturing", "Industrial & Engineering",
  "Logistics & Transportation", "Supply Chain & Distribution", "Wholesale & B2B", "Agriculture & Agritech",
  "Energy & Renewable Energy", "Telecommunications", "Nonprofits & NGOs", "Government & Public Services",
  "Pharmaceuticals & Life Sciences", "Fashion & Apparel", "Jewelry & Luxury Brands", "Sports & Recreation",
  "Gaming", "Publishing", "Recruitment & HR", "Travel Agencies", "Pet Care & Veterinary", "Home Decor & Furniture",
  "Consumer Electronics", "Subscription Businesses", "Marketplace Platforms", "B2B Services", "Local Businesses",
  "Franchise Businesses", "Membership Businesses", "Real-World Service Businesses", "Custom / Other Industries",
];

const TECH_CATEGORIES = [
  {
    icon: Layout,
    title: "FRONTEND DEVELOPMENT",
    description: "Clean and modern responsive design for web and mobile.",
  },
  {
    icon: Server,
    title: "BACKEND DEVELOPMENT",
    description: "Robust APIs, databases and business logic for the real world of applications.",
  },
  {
    icon: Cloud,
    title: "CLOUD & INFRASTRUCTURE",
    description: "Elastic infrastructure and application-tailored deployment processes.",
  },
  {
    icon: ShoppingBag,
    title: "CMS & ECOMMERCE",
    description: "Dynamic content management and e-commerce solutions for small and medium businesses.",
  },
  {
    icon: Link2,
    title: "APIs & INTEGRATIONS",
    description: "Integrate your site or app with the tools your business uses today.",
  },
  {
    icon: LineChart,
    title: "ANALYTICS & TRACKING",
    description: "Learn how users engage with your digital experiences and where you can improve them.",
  },
];

// ==========================================
// SECTION COMPONENTS
// ==========================================

// 1. Hero Section
export function HeroSection() {
  return (
    <section className="section-white relative min-h-[85vh] flex items-center justify-center pt-24 sm:pt-28 pb-6 sm:pb-8 overflow-hidden">
      {/* Background Radial Glow & Futuristic Grid Lines */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle geometric grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Column (Copy & CTAs) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill Badge */}
            <AnimateOnScroll variant="fadeDown" duration={0.6} start="top 95%">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright" />
                <span>DIGITAL SOLUTIONS FOR MODERN BUSINESSES</span>
              </div>
            </AnimateOnScroll>

            {/* H1 Headline */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.15} start="top 95%">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Digital Experiences That{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Drive Your Business Forward.
                </span>
              </h1>
            </AnimateOnScroll>

            {/* Supporting Copy */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.3} start="top 95%">
              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                <p className="font-medium text-foreground">
                  We create, build and scale digital experiences that enable businesses to transform concepts into real outcomes.
                </p>
                <p>
                  From high converting websites, custom web applications and mobile apps to UI/UX design and SEO focused digital marketing, Nexovio empowers companies to establish a more powerful digital presence and provide their customers with superior experiences.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Action Buttons */}
            <AnimateOnScroll variant="fadeUp" duration={0.7} delay={0.45} start="top 95%">
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="https://calendly.com/nexoviodigitalsolutions-info"
                  variant="primary"
                  size="lg"
                  trackingName="hero_schedule_call"
                  trackingLocation="hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow"
                >
                  Schedule a Call
                </Button>

                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  trackingName="hero_explore_services"
                  trackingLocation="hero"
                  className="w-full sm:w-auto hover:border-brand-cyan/40"
                >
                  Explore Our Services
                </Button>
              </div>
            </AnimateOnScroll>

            {/* Supporting Text Bar */}
            <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.55} start="top 95%">
              <div className="pt-6 border-t border-white/10 text-xs font-semibold text-muted tracking-wide flex flex-wrap items-center gap-2">
                <span>Web Development</span>
                <span className="text-brand-cyan">•</span>
                <span>UI/UX Design</span>
                <span className="text-brand-cyan">•</span>
                <span>Mobile Apps</span>
                <span className="text-brand-cyan">•</span>
                <span>SEO</span>
                <span className="text-brand-cyan">•</span>
                <span>Digital Marketing</span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Hero Right Column (Rich Interactive Dashboard Showcase & Floating Badges) */}
          <AnimateOnScroll variant="scaleUp" duration={1} delay={0.3} start="top 95%" className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />

            {/* Top Floating Badge */}
            {/* <div className="absolute -top-4 -left-4 sm:left-4 z-20 px-3.5 py-2 rounded-xl border border-white/20 keep-border bg-[#070E1C] keep-dark backdrop-blur-xl shadow-2xl flex items-center gap-2.5 animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block font-mono" style={{ color: "#94a3b8" }}>
                  Performance Score
                </span>
                <span className="text-xs font-bold flex items-center gap-1" style={{ color: "#ffffff" }}>
                  100% Core Web Vitals
                </span>
              </div>
            </div> */}

            {/* Bottom Floating Badge */}
            {/* <div className="absolute -bottom-5 -right-3 sm:right-4 z-20 px-3.5 py-2 rounded-xl border border-brand-cyan/40 keep-border bg-[#070E1C] keep-dark backdrop-blur-xl shadow-[0_10px_30px_rgba(0,198,255,0.25)] flex items-center gap-2.5 animate-float-slow">
              <div className="p-1.5 rounded-lg bg-brand-cyan/15 text-brand-cyan">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block font-mono" style={{ color: "#00c6ff" }}>
                  Edge Delivery
                </span>
                <span className="text-xs font-bold" style={{ color: "#ffffff" }}>
                  0.08s Client Latency
                </span>
              </div>
            </div> */}

            {/* Main Interactive Image Frame (1:1 Aspect Ratio) */}
            <div className="relative w-full max-w-lg mx-auto rounded-2xl border border-brand-cyan/70 bg-surface-elevated/80 backdrop-blur-md p-2.5 shadow-xl overflow-hidden group hover:border-brand-cyan/60 transition-all duration-500">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#070D18]">
                <Image
                  src="/images/hero/digital-experience-web-development-team.webp"
                  alt="Web development professional creating modern digital experiences"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  priority
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/10 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

// 2. Value Proposition Section
export function ValueProposition() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              HOW WE HELP BUSINESSES GROW
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              From Your Idea to a{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Digital Experience That Works</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-3 pt-2">
              <p className="font-semibold text-foreground/90">
                Good digital product is not just about looks. It should help people to easily grasp your business, believe in your brand and feel compelled to take action.
              </p>
              <p>
                At Nexovio, we use strategy, design, development and digital marketing to deliver digital solutions aligned with your real business objectives — not just trends.
              </p>
              <p className="text-sm sm:text-base">
                Whether you are starting a new business, wanting to redevelop an old website or creating a totally custom digital product, we help you to transform your concepts into something useful, repeatable and ready to grow.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.12} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {VALUE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.pillarLabel}
                  className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-brand-bright uppercase tracking-widest block mb-2">
                      {card.pillarLabel}
                    </span>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-brand-cyan transition-colors mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// 3. Services Interactive Section
export function ServicesInteractive() {
  const [activeSlug, setActiveSlug] = useState(SERVICES[0].slug);
  const activeService = SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];
  const activeMockup = SERVICE_MOCKUPS[activeService.slug] || "/images/services/web-development-mockup.svg";

  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Built for Impact,{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Designed for Scale</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                Your business isn’t after another run-of-the-mill Web site. It requires a digital experience that reflects how you really do business and how your customers buy.
              </p>
              <p className="text-sm sm:text-base">
                Our service offerings combine design, development, technology, and marketing, bringing you a unified digital platform instead of a series of isolating solutions.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Interactive Navigation Pills */}
        <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.15}>
          <div className="w-full mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto px-2">
              {SERVICES.map((service) => {
                const IconComponent = (SERVICE_ICONS as any)[service.iconName] || Code2;
                const isSelected = service.slug === activeSlug;
                return (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => setActiveSlug(service.slug)}
                    className={`group flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 border outline-none select-none ${isSelected
                      ? "bg-gradient-brand text-white keep-white border-transparent shadow-[0_4px_20px_rgba(0,198,255,0.35)] scale-[1.02]"
                      : "bg-surface-elevated text-muted hover:text-foreground border-border-subtle hover:border-brand-bright/40 hover:bg-surface-subtle"
                      }`}
                  >
                    <IconComponent className="w-4 h-4 shrink-0 text-brand-cyan" />
                    <span>{service.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Active Service Showcase Card */}
        <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.2}>
          <div className="relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Context & Business Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase block mb-1">
                    SERVICE 0{SERVICES.findIndex((s) => s.slug === activeService.slug) + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {activeService.name}
                  </h3>
                  <div className="text-lg font-semibold text-brand-bright">
                    {SERVICE_TITLES[activeService.slug] || activeService.name}
                  </div>
                </div>

                <p className="text-base text-muted-light leading-relaxed">
                  {activeService.fullDescription}
                </p>

                {/* Capabilities List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-border-subtle dark:border-white/10 pb-2">
                    Key Capabilities &amp; Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.capabilities.slice(0, 4).map((cap) => (
                      <div key={cap.title} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-xs font-semibold text-slate-900 dark:text-white">
                            {cap.title}
                          </h5>
                          <p className="text-[11px] text-muted mt-0.5 line-clamp-2">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button
                    href={`/services/${activeService.slug}`}
                    variant="primary"
                    size="md"
                    trackingName={`service_view_${activeService.slug}`}
                    trackingLocation="services_interactive"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore {activeService.name}
                  </Button>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-brand-cyan hover:underline py-2"
                  >
                    Start Your Project →
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Mockup Showcase */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-brand-cyan/25 bg-[#050A14] shadow-xl group">
                  <Image
                    src={activeMockup}
                    alt={`${activeService.name} Visual Architecture Mockup`}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                    /services/{activeService.slug}
                  </div>
                </div>

                {/* Service Cards Grid Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`p-3.5 rounded-xl border transition-all text-left block ${s.slug === activeService.slug
                        ? "border-brand-cyan/50 bg-brand-cyan/10"
                        : "border-border-subtle bg-surface/60 hover:border-brand-cyan/30"
                        }`}
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
                        <span>{s.name}</span>
                        <ArrowRight className="w-3 h-3 text-brand-cyan opacity-0 group-hover:opacity-100" />
                      </div>
                      <p className="text-[11px] text-muted line-clamp-1 mt-1">
                        {SERVICE_TITLES[s.slug]}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// 4. Process Section
export function ProcessSection() {
  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              From First Conversation to{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Final Launch</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                Great digital products aren&apos;t built in a day.
              </p>
              <p className="text-sm sm:text-base">
                We follow a transparent process that ensures strategy, design, development and business goals are linked from start to launch.</p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.h3Title}
                  className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                        Phase 0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-brand-cyan transition-colors">
                      {item.h3Title}
                    </h3>
                    <div className="text-sm font-semibold text-brand-bright mb-3">
                      {item.headline}
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// 5. Why Nexovio Section
export function WhyNexovio() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              WHY BEHIND OUR BUSINESS “SHARK TANK” INVESTORS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Technology With{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Purpose, Not Complexity</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground/90">
                Business software should make your business easier to run—not harder.
              </p>
              <p className="text-sm sm:text-base">
                We're focused on providing solutions that are practical for your team, meaningful to your customers, and adaptable enough to scale with your business.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {REASONS.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.number} className="bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2.5 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// 6. Selected Work Section
export function SelectedWork() {
  const featured = CASE_STUDIES.slice(0, 3);

  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan mb-3">
              OUR WORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight max-w-4xl">
              Digital Solutions Built Around{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Real Business Goals</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-2 max-w-3xl">
              <p className="font-semibold text-foreground/90">
                Every business has a different challenge.
              </p>
              <p className="text-sm sm:text-base">
                Some need a better website. Some need a faster digital experience. Others need custom technology that connects their teams, customers and operations.
              </p>
              <p className="text-xs sm:text-sm text-muted-light">
                Explore how we&apos;ve approached different digital challenges through strategy, design and development.
              </p>
            </div>
            <div className="pt-6">
              <Button
                href="/case-studies"
                variant="secondary"
                size="md"
                trackingName="selected_work_view_all"
                trackingLocation="selected_work"
                icon={<ArrowRight className="w-4 h-4" />}
                className="hover:border-brand-cyan/40"
              >
                View All Case Studies
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.15} duration={0.7}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((project, index) => (
              <Card
                key={project.slug}
                variant="scale"
                className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle group hover:border-brand-cyan/45"
              >
                <div>
                  {/* Visual Project Cover Image */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border-subtle group-hover:border-brand-cyan/35 mb-5 bg-[#050A14]">
                    <Image
                      src={project.coverImage}
                      alt={project.coverImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                      CASE STUDY 0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-brand-cyan font-mono font-bold uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg border bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-500/40 shadow-sm shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{project.results}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-brand-cyan transition-colors mb-1.5 leading-snug">
                    {project.client}
                  </h3>

                  <div className="text-xs font-semibold text-brand-bright mb-3">
                    {project.title}
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {project.strategy}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1.5 transition-colors group/link"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// 7. Industries Section
export function IndustriesSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedIndustries = showAll ? ALL_INDUSTRIES : ALL_INDUSTRIES.slice(0, 24);

  return (
    <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16 relative" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              SOLUTIONS FOR DIFFERENT BUSINESS NEEDS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Digital Business Solutions for{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">All Industries</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-slate-900 dark:text-white/ 90">
                Each industry has its own customers, processes and pain points.
              </p>
              <p className="text-sm sm:text-base">
                We tailor our design, development and marketing strategy to the way your business really operates.</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Featured Industry Cards Grid */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.08} duration={0.6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {FEATURED_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.url}
                  className="group relative rounded-2xl bg-surface-elevated/70 border border-border-subtle p-6 hover:border-brand-cyan/45 hover:bg-surface-elevated transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border-subtle flex items-center text-xs font-bold text-brand-cyan group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* 70 Industry Directory List */}
        <AnimateOnScroll variant="fadeUp" duration={0.6}>
          <div className="bg-surface-elevated/50 border border-border-subtle rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-bright mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-cyan" />
              <span>Full Industry Directory ({ALL_INDUSTRIES.length} Sectors Served)</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {displayedIndustries.map((ind, idx) => (
                <div
                  key={ind}
                  className="text-xs text-muted hover:text-slate-900 dark:hover:text-white flex items-center gap-2 py-1 px-2.5 rounded-lg bg-surface-subtle dark:bg-white/5 border border-border-subtle dark:border-white/5 hover:border-brand-cyan/30 transition-colors"
                >
                  <span className="text-[10px] font-mono text-brand-cyan font-bold">
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <span className="truncate">{ind}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="text-xs font-bold text-brand-cyan hover:underline"
              >
                {showAll ? "Show Less Industries" : `View All ${ALL_INDUSTRIES.length} Industries →`}
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-brand text-white shadow-glow hover:opacity-95"
              >
                <span>Explore Industries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// 8. Tech Stack Section
export function TechStackSection() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              TECHNOLOGY &amp; DEVELOPMENT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Modern Technology Stack,{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Zero Unnecessary Complexity</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-slate-900 dark:text-white/90">
                The technology we use is determined by the problem we are solving.
              </p>
              <p className="text-sm sm:text-base">
                Instead of fitting every project into the same technology stack, we select tools and frameworks according to the requirements, performance expectations, scalability needs, and long-term goals of your project.</p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_CATEGORIES.map((tech) => {
              const Icon = tech.icon;
              return (
                <Card key={tech.title} className="bg-surface-elevated/80 border-border-subtle p-6 hover:border-brand-cyan/40">
                  <div className="w-10 h-10 rounded-lg bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {tech.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// 9. Testimonials Section
export function TestimonialsSection() {
  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              CLIENT EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">What Working Together{" "} <span className="bg-gradient-brand bg-clip-text text-transparent">Looks Like</span></h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                We glauben dass gute Projekte aus mehr als guter Programmierung oder attraktivem Design entstehen.
              </p>
              <p className="text-sm sm:text-base">
                They come from communication, collaboration and a clear understanding of what the business needs.</p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.12} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-brand-cyan/45 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <MessageSquareQuote className="w-6 h-6 text-brand-cyan" />
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold">
                    Ecommerce Platform
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  &ldquo;Nexovio handled our BigCommerce migration like a dream, and they didn't miss a beat.Their custom integration team boosted our overall conversion by syncing our inventory.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-border-subtle flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xs font-bold text-brand-cyan">
                  PC
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Parts Connexion Team</div>
                  <div className="text-[10px] text-muted">BigCommerce Migration Project</div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-brand-cyan/45 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <MessageSquareQuote className="w-6 h-6 text-brand-cyan" />
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold">
                    AI &amp; Workflows
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  &ldquo;The tailored AI automation Nexovio created transformed a complicated multi-step user sign-up process into a frictionless onboarding flow. Our registrations have been up by 25%.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-border-subtle flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xs font-bold text-brand-cyan">
                  II
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Inside Injury Team</div>
                  <div className="text-[10px] text-muted">Custom AI Automation Build</div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-brand-cyan/45 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <MessageSquareQuote className="w-6 h-6 text-brand-cyan" />
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold">
                    Digital Booking
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  &ldquo;Our HVAC online scheduling system is fast and reliable, with 99.9% uptime. Customer booking calls seamlessly convert to schedules confirmed dispatches.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-border-subtle flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xs font-bold text-brand-cyan">
                  IH
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Infiniti Home Comfort</div>
                  <div className="text-[10px] text-muted">HVAC Booking Platform</div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// 10. FAQ Section
export interface FaqSectionProps {
  faqs?: { question: string; answer: string }[];
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
}

export function FaqSection({
  faqs = GLOBAL_FAQS,
  badge = "COMMON QUESTIONS",
  title = "Frequently",
  highlightText = "Asked Questions",
  description,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const schema = getFaqSchema(faqs);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section-blue py-12 sm:py-20 relative overflow-hidden" id="faq">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-radial-glow pointer-events-none opacity-40 blur-3xl" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge={badge}
            title={title}
            highlightText={highlightText}
            description={description}
            align="center"
          />
        </AnimateOnScroll>

        {/* FAQ Accordion List */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.06} duration={0.4}>
          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={cn(
                    "relative rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-md",
                    isOpen
                      ? "bg-white dark:bg-[#07162c] border border-transparent shadow-[0_8px_30px_rgba(0,198,255,0.14)]"
                      : "bg-white/95 dark:bg-[#081226]/90 border border-slate-200/90 dark:border-blue-900/40 hover:border-brand-cyan dark:hover:border-brand-cyan hover:bg-white dark:hover:bg-[#0d1b38] shadow-sm hover:shadow-md"
                  )}
                >
                  {/* Glowing Top 2px Animated Shimmer Line */}
                  {isOpen && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none animate-shimmer-x" />
                  )}

                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4.5 text-left outline-none focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 pr-3">
                      {/* Question Text */}
                      <span
                        className={cn(
                          "text-sm sm:text-base md:text-lg transition-colors duration-200 leading-snug",
                          isOpen
                            ? "text-brand-cyan font-bold"
                            : "text-slate-800 dark:text-slate-200 font-semibold group-hover:text-brand-cyan"
                        )}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Chevron Toggle Icon */}
                    <div
                      className={cn(
                        "w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                        isOpen
                          ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 rotate-180 shadow-xs"
                          : "bg-slate-100 text-slate-500 border border-slate-200 dark:bg-blue-900/40 dark:text-slate-300 dark:border-blue-800/40 group-hover:bg-brand-cyan/15 group-hover:text-brand-cyan group-hover:border-brand-cyan/30"
                      )}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Smooth Animated Answer Panel */}
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={cn(
                      "faq-accordion-grid",
                      isOpen ? "open" : ""
                    )}
                  >
                    <div className="faq-accordion-inner">
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1.5 border-t border-slate-100 dark:border-blue-900/40">
                        <div className="pl-3.5 sm:pl-4 border-l-2 border-brand-cyan py-0.5">
                          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ==========================================
// MAIN COMBINED HOMEPAGE COMPONENT
// ==========================================
export default function Homepage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Introduction & Core Value Cards */}
      <ValueProposition />

      {/* 3. Services Showcase */}
      <ServicesInteractive />

      {/* 4. Our Process */}
      <ProcessSection />

      {/* 5. Why Businesses Work With Us */}
      <WhyNexovio />

      {/* 6. Case Studies / Our Work */}
      <SelectedWork />

      {/* 7. Industries We Serve */}
      <IndustriesSection />

      {/* 8. Technology & Development */}
      <TechStackSection />

      {/* 9. Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Common Questions (FAQ) */}
      <FaqSection />
    </>
  );
}
