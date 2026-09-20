import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Server,
  Database,
  Terminal,
  Search,
  Map,
  Palette,
  Rocket,
  TrendingUp,
  Globe,
  Sparkles,
  Layout,
  Smartphone,
  ShoppingBag,
  Boxes,
  Check,
  Building2,
  Users,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

const service = getServiceBySlug("web-development")!;

export const metadata = generatePageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  keywords: [
    "web development services",
    "web development company",
    "custom web development",
    "website development services",
    "custom website development",
    "React development services",
    "Next.js development services",
    "ecommerce web development",
    "web application development",
    "API integration services",
  ],
  path: `/services/${service.slug}`,
});

// ==========================================
// DATA STRUCTURES FOR WEB DEV PAGE
// ==========================================

const APPROACH_POINTS = [
  "Modern frontend development",
  "Responsive website architecture",
  "Conversion-focused user experiences",
  "SEO-friendly technical foundations",
  "Secure backend development",
  "Third-party API integrations",
  "Performance optimization",
  "Scalable architecture",
];

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Create a website designed specifically around your brand, audience, features, and business objectives. We develop custom websites with flexible structures, responsive layouts, reusable components, and SEO-friendly foundations.",
    bestFor: "Businesses, startups, professional services, agencies, and growing brands.",
    href: "/services/web-development/custom-website-development",
  },
  {
    icon: Code2,
    title: "WordPress Development",
    description:
      "Build and manage a professional WordPress website without sacrificing performance or design flexibility. We develop custom WordPress websites, business websites, landing pages, and customized WordPress solutions.",
    bestFor: "Business websites, blogs, service companies, content-driven websites, and marketing teams.",
  },
  {
    icon: Cpu,
    title: "React / Next.js Development",
    description:
      "Develop modern, high-performance web experiences using React and Next.js. These technologies are suitable for businesses that need fast interfaces, scalable frontend architecture, dynamic experiences, and modern web applications.",
    bestFor: "SaaS products, startups, dashboards, high-performance websites, and custom web platforms.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Development",
    description:
      "Create online stores designed to make product discovery, shopping, checkout, and customer management simple. We develop responsive e-commerce experiences with product management, payment integration, order workflows, and third-party integrations.",
    bestFor: "Retail brands, D2C businesses, manufacturers, product companies, and online sellers.",
  },
  {
    icon: Layers,
    title: "Web Application Development",
    description:
      "Turn complex business requirements into custom web applications that help teams and customers perform tasks more efficiently. From customer-facing platforms to internal business tools, we build web applications around your workflows, user roles, data, and operational requirements.",
    bestFor: "Startups, SaaS companies, service businesses, marketplaces, and businesses with custom workflows.",
  },
  {
    icon: Boxes,
    title: "API Development & Integration",
    description:
      "Connect your website or application with the tools and platforms your business already uses. We develop and integrate APIs for communication between websites, applications, databases, payment systems, CRMs, marketing platforms, and third-party services.",
    bestFor: "Automation, software integrations, third-party platforms, mobile applications, and custom business systems.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: TargetIcon,
    title: "Business-Focused Development",
    description:
      "We don't start with technology alone. We first understand what your website needs to accomplish and then choose the right development approach.",
  },
  {
    icon: Search,
    title: "SEO-Ready Architecture",
    description:
      "We build websites with clean structures, semantic HTML, crawlable content, metadata support, performance considerations, and technical SEO fundamentals.",
  },
  {
    icon: Smartphone,
    title: "Responsive by Design",
    description:
      "Your website should provide a consistent experience across desktops, tablets, and smartphones. Every interface is developed with responsive behavior in mind.",
  },
  {
    icon: Zap,
    title: "Performance-Focused",
    description:
      "Fast-loading pages create a better experience for users and provide a stronger technical foundation for search visibility. We consider assets, code structure, images, caching, and page performance during development.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable Technology",
    description:
      "Your website should not become a limitation as your business grows. We use maintainable architecture and technologies that can support future features and integrations.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Requirement Analysis",
    description:
      "We understand your business, target audience, website goals, required features, competitors, integrations, and technical requirements.",
  },
  {
    step: "02",
    icon: Map,
    title: "Planning & Architecture",
    description:
      "We define the website structure, page hierarchy, functionality, technology stack, content requirements, and development approach.",
  },
  {
    step: "03",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive interfaces that combine your brand identity with usability, responsive layouts, and conversion-focused user journeys.",
  },
  {
    step: "04",
    icon: Code2,
    title: "Development",
    description:
      "We transform the approved designs into a functional website or web application using suitable frontend, backend, database, and integration technologies.",
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Testing & Optimization",
    description:
      "We test functionality, responsiveness, forms, integrations, navigation, performance, browser compatibility, and important user journeys.",
  },
  {
    step: "06",
    icon: Rocket,
    title: "Launch",
    description:
      "After final testing and approval, we deploy the website and ensure the production environment is configured correctly.",
  },
  {
    step: "07",
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "Your website can continue to evolve with new features, content, integrations, performance improvements, SEO enhancements, and ongoing maintenance.",
  },
];

const TECH_CATEGORIES = [
  {
    title: "Frontend",
    icon: Layout,
    techs: "React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS and modern frontend technologies.",
  },
  {
    title: "Backend",
    icon: Server,
    techs: "Node.js and other suitable backend technologies based on the project's requirements.",
  },
  {
    title: "CMS",
    icon: Globe,
    techs: "WordPress and custom content management solutions.",
  },
  {
    title: "Databases",
    icon: Database,
    techs: "Database technologies selected according to application requirements, data structure, scalability, and performance needs.",
  },
  {
    title: "Integrations",
    icon: Boxes,
    techs: "Payment gateways, third-party APIs, analytics platforms, marketing tools, business tools, authentication systems, and other external services.",
  },
];

const BUSINESS_NEEDS = [
  {
    title: "Startups",
    icon: Rocket,
    description:
      "Launch a strong digital presence with a scalable website that can evolve as your startup grows.",
  },
  {
    title: "Small & Medium Businesses",
    icon: Building2,
    description:
      "Build a professional website that clearly communicates your services and creates more opportunities for enquiries and conversions.",
  },
  {
    title: "E-commerce Brands",
    icon: ShoppingBag,
    description:
      "Create an online shopping experience focused on product discovery, customer experience, and sales.",
  },
  {
    title: "SaaS & Technology Companies",
    icon: Cpu,
    description:
      "Develop high-performance websites, product interfaces, dashboards, and custom web applications.",
  },
  {
    title: "Professional Services",
    icon: Users,
    description:
      "Present your expertise, services, case studies, and customer information through a professional and conversion-focused website.",
  },
  {
    title: "Growing Enterprises",
    icon: Layers,
    description:
      "Improve existing digital platforms with custom development, integrations, performance improvements, and scalable architecture.",
  },
];

const SEO_ELEMENTS = [
  "Search-friendly URL structures",
  "Semantic HTML",
  "Page titles and meta descriptions",
  "Heading hierarchy",
  "Internal linking",
  "Mobile responsiveness",
  "Page performance",
  "Image optimization",
  "Structured content",
  "XML sitemap compatibility",
  "Canonical URL support",
  "Search-engine crawlability",
  "Core Web Vitals considerations",
];

// Helper icon for Target
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function WebDevelopmentPage() {
  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "SoftwareDevelopment",
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-background overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <Breadcrumbs
          items={[
            { name: "Services", url: "/services" },
            { name: service.name, url: `/services/${service.slug}` },
          ]}
        />

        {/* 1. HERO BANNER SECTION (Left Copy & CTAs + Right Interactive Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20 sm:mb-24 pt-4">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-brand-bright" />
              <span>CUSTOM SOFTWARE &amp; WEB ENGINEERING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Web Development Services That Turn Ideas Into{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Scalable Digital Experiences.
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
              <p className="font-semibold text-slate-900 dark:text-white">
                Build a website or web application that does more than look good. Nexovio Digital Solutions provides custom web development services for businesses that need fast, secure, responsive, and scalable digital solutions.
              </p>
              <p className="text-sm sm:text-base">
                From business websites and e-commerce platforms to custom web applications and API integrations, we combine modern technologies, thoughtful UX, and SEO-ready development to create web experiences designed around real business goals.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackingName="web_dev_start_project"
                trackingLocation="service_hero"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-glow"
              >
                Start Your Web Project
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                trackingName="web_dev_explore_services"
                trackingLocation="service_hero"
                className="w-full sm:w-auto hover:border-brand-cyan/40"
              >
                Explore Our Web Development Services
              </Button>
            </div>
          </div>

          {/* Right Side Image / Mockup Section */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />

            {/* Top Floating Badge */}
            <div className="absolute -top-4 -left-4 sm:left-2 z-20 px-3.5 py-2 rounded-xl border border-white/20 keep-border bg-[#070E1C] keep-dark backdrop-blur-xl shadow-2xl flex items-center gap-2.5 animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block font-mono text-slate-400">
                  Performance Score
                </span>
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  100% Core Web Vitals
                </span>
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-2 z-20 px-3.5 py-2 rounded-xl border border-brand-cyan/40 keep-border bg-[#070E1C] keep-dark backdrop-blur-xl shadow-[0_10px_30px_rgba(0,198,255,0.25)] flex items-center gap-2.5 animate-float-slow">
              <div className="p-1.5 rounded-lg bg-brand-cyan/15 text-brand-cyan">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block font-mono text-brand-cyan">
                  Edge Delivery
                </span>
                <span className="text-xs font-bold text-white">
                  0.08s Client Latency
                </span>
              </div>
            </div>

            {/* Main Interactive Dashboard Frame */}
            <div className="relative w-full rounded-2xl border border-brand-cyan/30 bg-surface-elevated/80 backdrop-blur-md p-2 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(23,105,255,0.2)] overflow-hidden group hover:border-brand-cyan/60 transition-all duration-500">
              <div className="relative w-full aspect-[16/10.5] rounded-xl overflow-hidden bg-[#070D18]">
                <Image
                  src="/images/services/web-development-mockup.svg"
                  alt="Nexovio Web Development Code & Architecture Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                  WordPress • React • Next.js • Node.js
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BUILD A WEBSITE THAT WORKS FOR YOUR BUSINESS */}
        <div className="mb-24 rounded-2xl border border-border-subtle bg-surface-elevated/70 p-8 sm:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              STRATEGIC WEB ENGINEERING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Build a Website That Works for Your Business
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Your website is often the first interaction customers have with your brand. It needs to communicate your value quickly, work smoothly across devices, and provide a clear path toward enquiry, purchase, booking, or conversion.
            </p>
          </div>

          {/* 8-Point Approach Grid */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xs font-mono font-bold text-brand-bright uppercase tracking-widest text-center">
              OUR WEB DEVELOPMENT APPROACH COMBINES:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {APPROACH_POINTS.map((point) => (
                <div
                  key={point}
                  className="p-4 rounded-xl border border-border-subtle bg-surface/80 flex items-center gap-3 hover:border-brand-cyan/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-center text-muted max-w-3xl mx-auto border-t border-border-subtle pt-6">
            Whether you are launching a new business website, rebuilding an outdated website, or developing a complex web platform, we create solutions based on your specific requirements.
          </p>
        </div>

        {/* 3. CAPABILITIES GRID SECTION */}
        <div className="mb-24">
          <SectionHeading
            badge="END-TO-END CAPABILITIES"
            title="Our Web Development"
            highlightText="Capabilities"
            description="Comprehensive engineering disciplines tailored for startups, growing brands, e-commerce businesses, and enterprise platforms."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <Card
                  key={cap.title}
                  className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/45 transition-all group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-subtle">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-bright block mb-1">
                      Best for:
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {cap.bestFor}
                    </span>
                    {cap.href && (
                      <div className="pt-3">
                        <Link
                          href={cap.href}
                          className="text-xs font-bold text-brand-cyan hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>Explore Custom Website Development Page</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 4. DIFFERENTIATORS SECTION */}
        <div className="mb-24">
          <SectionHeading
            badge="WHY CHOOSE NEXOVIO"
            title="What Makes Our Approach"
            highlightText="Different?"
            description="We bridge strategic clarity, clean code, responsive design, and search visibility to build digital products that scale."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <Card
                  key={diff.title}
                  className="bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 tracking-wide">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {diff.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 5. PROCESS TIMELINE SECTION */}
        <div className="mb-24">
          <SectionHeading
            badge="EXECUTION PIPELINE"
            title="Our Web Development"
            highlightText="Process"
            description="A transparent 7-step engineering methodology that connects strategy, UI/UX design, development, and post-launch growth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.step}
                  className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 border-border-subtle"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                        Phase {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 6. TECHNOLOGIES WE WORK WITH */}
        <div className="mb-24 rounded-2xl border border-border-subtle bg-surface-elevated/80 p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              MODERN TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technologies We Work With
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We select tools and frameworks according to your project's requirements, performance expectations, scalability needs, and long-term goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-6 rounded-xl border border-border-subtle bg-surface/90 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {cat.techs}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. BUSINESS NEEDS SECTION */}
        <div className="mb-24">
          <SectionHeading
            badge="TAILORED SOLUTIONS"
            title="Web Development for"
            highlightText="Different Business Needs"
            description="Whether launching a new venture, modernizing an SMB, or scaling an enterprise platform, we adapt our development approach to your goals."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_NEEDS.map((biz) => {
              const Icon = biz.icon;
              return (
                <Card
                  key={biz.title}
                  className="bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {biz.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {biz.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 8. SEO-FRIENDLY WEB DEVELOPMENT SECTION */}
        <div className="mb-24 rounded-2xl border border-brand-cyan/30 bg-surface-elevated/90 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center mb-10 space-y-3 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              TECHNICAL SEO FOUNDATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              SEO-Friendly Web Development
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              A website needs more than visually attractive pages to perform well in search engines. Our development process considers important technical and structural SEO elements, creating a strong technical foundation for your broader SEO strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 relative z-10">
            {SEO_ELEMENTS.map((elem) => (
              <div
                key={elem}
                className="p-3.5 rounded-xl border border-border-subtle bg-surface/90 flex items-center gap-3 hover:border-brand-cyan/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {elem}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 9. SERVICE SPECIFIC FAQS */}
        <FaqSection faqs={service.faqs} />
      </div>
    </div>
  );
}
