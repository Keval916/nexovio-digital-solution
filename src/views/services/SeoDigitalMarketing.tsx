"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Globe,
  Sparkles,
  Zap,
  Check,
  Users,
  Briefcase,
  Target,
  Sliders,
  ShieldCheck,
  Rocket,
  Headphones,
  MousePointerClick,
  Share2,
  FileText,
  Mail,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { Button } from "@/src/components/ui/Button";
import { trackCtaClick } from "@/src/lib/analytics";
import {
  getServiceSchema,
  getFaqSchema,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from "@/src/lib/schema";
import { FaqSection } from "@/src/components/sections/FaqSection";

// ==========================================
// CUSTOM SOCIAL SVG ICONS FOR FLOATING BADGES
// ==========================================

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad)" />
      <path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function XTwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// ==========================================
// DATA STRUCTURES
// ==========================================

const HERO_BENEFITS = [
  {
    icon: Search,
    title: "Better Search Rankings",
    desc: "Get found by the right audience",
  },
  {
    icon: TrendingUp,
    title: "More Website Traffic",
    desc: "Attract qualified leads",
  },
  {
    icon: Users,
    title: "Higher Conversions",
    desc: "Turn visitors into customers",
  },
  {
    icon: Rocket,
    title: "Long-Term Growth",
    desc: "Build a stronger digital presence",
  },
];

const SERVICES_GRID = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Improve your search rankings and get organic traffic that converts.",
    icon: Search,
    href: "/services/seo-digital-marketing",
  },
  {
    title: "Social Media Marketing",
    desc: "Build your brand, engage your audience and drive meaningful engagement.",
    icon: Share2,
    href: "/contact",
  },
  {
    title: "Content Marketing",
    desc: "High-quality content that educates, builds trust and brings results.",
    icon: FileText,
    href: "/services/seo-digital-marketing",
  },
  {
    title: "Pay Per Click (PPC)",
    desc: "Targeted ads for instant visibility and better ROI.",
    icon: MousePointerClick,
    href: "/contact",
  },
  {
    title: "Email Marketing",
    desc: "Stay connected with your audience and boost customer loyalty.",
    icon: Mail,
    href: "/contact",
  },
  {
    title: "Analytics & Reporting",
    desc: "Track performance and optimize for continuous growth.",
    icon: BarChart3,
    href: "/services/seo-digital-marketing",
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    title: "Result-Driven Strategies",
    desc: "Data-backed plans to maximize ROI.",
    icon: Target,
  },
  {
    title: "Experienced Team",
    desc: "Skilled professionals with industry expertise.",
    icon: Users,
  },
  {
    title: "Customized Solutions",
    desc: "Tailored strategies for your unique goals.",
    icon: Sliders,
  },
  {
    title: "Transparent Reporting",
    desc: "Clear insights and regular updates.",
    icon: ShieldCheck,
  },
  {
    title: "Latest Tools & Technology",
    desc: "Stay ahead with advanced tools.",
    icon: Rocket,
  },
  {
    title: "Dedicated Support",
    desc: "We're with you at every step.",
    icon: Headphones,
  },
];

const WORK_SHOWCASE = [
  {
    title: "Social Media Management",
    subtitle: "Engaging content. Real people. Stronger communities.",
    image: "/images/services/seo/social-media-management-mobile-feed.jpg",
    imageAlt: "Social media community management and interactive mobile feed optimization",
  },
  {
    title: "SEO Optimization",
    subtitle: "Higher rankings. More traffic. Better leads.",
    image: "/images/services/seo/google-search-seo-rankings-laptop.jpg",
    imageAlt: "Google organic search ranking optimization and technical SEO results on laptop",
  },
  {
    title: "PPC Campaigns",
    subtitle: "Targeted ads. Maximum returns.",
    image: "/images/services/seo/pay-per-click-ad-campaign-dashboard.jpg",
    imageAlt: "Pay per click PPC advertising campaign dashboard with conversion tracking and ROI metrics",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Nexovio's SEO and social media marketing strategies helped us increase our website traffic by 250% in just 6 months. Their team is professional, responsive and truly cares about your success.",
    author: "Rohan Mehta",
    role: "Founder, QuickStore",
    avatar: "/images/services/seo/rohan-mehta-founder-testimonial.jpg",
    avatarAlt: "Rohan Mehta, Founder of QuickStore client review for Nexovio digital marketing",
  },
  {
    quote:
      "Our organic search leads surged by 185% after Nexovio revamped our local SEO architecture and Core Web Vitals. During peak summer heatwaves, the site converted effortlessly.",
    author: "Marcus Vance",
    role: "Founder & Operations Director, Infiniti Home Comfort",
    avatar: "/images/services/seo/rohan-mehta-founder-testimonial.jpg",
    avatarAlt: "Marcus Vance client review for Nexovio digital marketing",
  },
];

const FAQ_ITEMS = [
  {
    question: "What SEO services does Nexovio provide?",
    answer:
      "Nexovio provides SEO services to help businesses improve search visibility, attract relevant organic traffic, and generate more qualified leads. Our services include technical SEO audits, keyword research, on-page SEO, content optimization, internal linking, website performance analysis, and conversion optimization. We identify opportunities based on your website, target audience, competitors, and business goals."
  },
  {
    question: "How long does SEO take to improve website rankings and organic traffic?",
    answer:
      "SEO is a long-term process, and results depend on your website's current condition, industry competition, content quality, and existing search visibility. Some technical fixes may help search engines discover or understand pages sooner, while meaningful improvements in rankings, organic traffic, and qualified enquiries often take several months. We monitor performance through Google Search Console and analytics tools to evaluate progress and refine the SEO strategy."
  },
  {
    question: "How can SEO help my business generate more leads and customers?",
    answer:
      "SEO can help your business reach people who are actively searching for your services. We optimize important landing pages, align content with search intent, improve website usability, and strengthen calls to action to encourage relevant visitors to enquire. By tracking organic sessions, form submissions, qualified leads, and other agreed conversion goals, we can identify opportunities to turn search visibility into business growth."
  },
  {
    question: "Do you create customized SEO strategies for different businesses?",
    answer:
      "Yes. Our SEO strategy is tailored to your business model, target audience, services, competitors, and growth objectives. We begin by evaluating your website's technical SEO, keyword opportunities, existing content, and search performance. Based on our findings, we prioritize improvements across technical optimization, on-page SEO, content strategy, internal linking, and conversion optimization according to your needs and available resources."
  },
  {
    question: "What is included in a technical SEO audit?",
    answer:
      "A technical SEO audit examines the issues that can affect how search engines crawl, render, and index your website. Depending on your website, the review may cover indexing directives, XML sitemaps, canonical URLs, redirects, broken links, duplicate content, mobile usability, Core Web Vitals, page speed, structured data, and internal linking. We prioritize findings by their potential impact and provide actionable recommendations for improving your website's search performance."
  },
  {
    question: "How do you measure SEO and digital marketing performance?",
    answer:
      "We evaluate SEO and digital marketing performance using relevant business and search metrics, including Google Search Console clicks and impressions, search queries, click-through rate, organic landing-page sessions, qualified enquiries, and conversion rates. Where appropriate tracking is available, we also assess campaign performance, cost per lead, customer acquisition cost, and revenue contribution. Reporting focuses on meaningful progress, identified issues, and the next steps needed to improve results."
  },
  {
    question: "Do you offer local SEO and international SEO services?",
    answer:
      "Yes. The right approach depends on the locations and audiences your business wants to reach. Local SEO can include Google Business Profile optimization, relevant local landing pages, business information consistency, and location-specific content for eligible businesses. International SEO may involve country and language targeting, appropriate URL structures, hreflang implementation where applicable, and content tailored to different markets. We recommend the approach that best matches your business and target customers."
  },
  {
    question: "Do you provide social media management services for businesses?",
    answer:
      "Yes, Nexovio provides social media management services to help businesses build their online presence, maintain consistent brand communication, and engage with their target audience. Depending on your requirements, our services can include social media account management, content planning, post creation, graphic design, content scheduling, audience engagement, and performance monitoring across relevant platforms. We develop a strategy based on your business goals, target audience, and preferred social media channels. Our social media management services can also complement your SEO and digital marketing efforts to support brand awareness, website traffic, and lead generation."
  },
  {
    question: "Do you guarantee first-page Google rankings?",
    answer:
      "No responsible SEO provider can guarantee a specific Google ranking or a fixed amount of organic traffic. Search results depend on many factors, including competition, search intent, website quality, and ongoing search system changes. Our approach focuses on evidence-based SEO improvements, relevant content, technical health, and measurable business outcomes. We use performance data to refine priorities rather than promise rankings that cannot be guaranteed."
  }
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function SeoDigitalMarketingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  const serviceSchema = getServiceSchema({
    name: "SEO & Digital Marketing Services",
    description:
      "Data-driven SEO strategies, technical Core Web Vitals audits, social media marketing, PPC campaigns, and conversion rate optimization by Nexovio Digital Solutions.",
    url: "/services/seo-digital-marketing",
    serviceType: "Search Engine Optimization and Digital Marketing",
  });

  const faqSchema = getFaqSchema(FAQ_ITEMS);
  const organizationSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "SEO & Digital Marketing", url: "/services/seo-digital-marketing" },
  ]);

  return (
    <>
      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />


      {/* Full-width Breadcrumb Stripe Touching Header */}
      <Breadcrumbs
        items={[
          { name: "Services", url: "/services" },
          { name: "SEO & Digital Marketing", url: "/services/seo-digital-marketing" },
        ]}
      />

      {/* =================================================================== */}
      {/* 1. HERO SECTION                                                    */}
      {/* =================================================================== */}
      <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        {/* Ambient Subtle Glow Accents */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-60" />
        <div className="absolute -top-36 -right-36 w-96 h-96 bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-36 -left-36 w-96 h-96 bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Copy & 4 Benefit Mini-Cards */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span>SEO &amp; DIGITAL MARKETING</span>
              </div>

              {/* Main H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.18]">
                Boost Your Online Presence &amp; Drive Real{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Business Growth
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                We combine proven SEO strategies with result-driven digital marketing to help your brand get found, build trust and turn visitors into loyal customers.
              </p>

              {/* 4 Benefit Mini-Cards (2x2 or 4-grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
                {HERO_BENEFITS.map((b, idx) => {
                  const IconComponent = b.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-brand-cyan/40 transition-colors space-y-2 text-left"
                    >
                      <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                          {b.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                          {b.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Hero Visual with Overlays */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Main Specialist Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,198,255,0.12)] bg-slate-100 dark:bg-[#071026]">
                  <Image
                    src="/images/services/seo/seo-digital-marketing-specialist-laptop.jpg"
                    alt="SEO and digital marketing specialist analyzing website traffic growth and search rankings on laptop"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Floating Card 1: Website Traffic +248% (Top-Left) */}
                <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-5 bg-white/95 dark:bg-[#081433]/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-200/80 dark:border-white/15 flex items-center gap-3 z-20 animate-in fade-in zoom-in duration-500">
                  <div className="text-left space-y-0.5">
                    <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium block">
                      Website Traffic
                    </span>
                    <span className="text-base sm:text-xl font-extrabold text-brand-electric dark:text-brand-cyan block">
                      +248%
                    </span>
                  </div>
                  {/* Mini Rising Bar Chart Graphic */}
                  <div className="flex items-end gap-1 h-8 px-1">
                    <span className="w-1.5 bg-brand-cyan/40 rounded-t-sm h-3" />
                    <span className="w-1.5 bg-brand-cyan/60 rounded-t-sm h-4" />
                    <span className="w-1.5 bg-brand-cyan/80 rounded-t-sm h-6" />
                    <span className="w-1.5 bg-brand-electric dark:bg-brand-cyan rounded-t-sm h-8" />
                  </div>
                </div>

                {/* Floating Social Media Icons Stack (Top-Right) */}
                <div className="absolute top-4 -right-3 sm:top-6 sm:-right-4 bg-white/95 dark:bg-[#081433]/95 backdrop-blur-md rounded-2xl py-2.5 px-2 shadow-xl border border-slate-200/80 dark:border-white/15 flex flex-col gap-2.5 items-center z-20">
                  <div className="p-1 rounded-lg bg-slate-50 dark:bg-white/5 hover:scale-110 transition-transform">
                    <GoogleIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1 rounded-lg bg-slate-50 dark:bg-white/5 hover:scale-110 transition-transform">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1 rounded-lg bg-slate-50 dark:bg-white/5 hover:scale-110 transition-transform">
                    <FacebookIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1 rounded-lg bg-slate-50 dark:bg-white/5 hover:scale-110 transition-transform">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1 rounded-lg bg-slate-50 dark:bg-white/5 hover:scale-110 transition-transform text-slate-900 dark:text-white">
                    <XTwitterIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Handwritten Accent Callout Note (Bottom-Right) */}
                <div className="hidden sm:flex absolute -bottom-6 right-2 sm:right-6 items-center gap-2 pointer-events-none select-none z-20">
                  <div className="text-right font-serif italic text-xs sm:text-sm font-semibold text-slate-700 dark:text-brand-cyan drop-shadow-xs leading-tight">
                    More Reach <br />
                    More Leads <br />
                    More Sales
                  </div>
                  {/* Curved Arrow SVG */}
                  <svg
                    className="w-8 h-8 text-brand-electric dark:text-brand-cyan stroke-current -rotate-12"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M10 30 C 18 25, 26 15, 30 8 M 30 8 L 22 8 M 30 8 L 30 16"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. "OUR SEO & DIGITAL MARKETING SERVICES" SECTION                  */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 dark:bg-[#030712] border-y border-slate-200/70 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Description & Primary CTA */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                <span>OUR SERVICES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                Our SEO &amp; Digital Marketing Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                From search engine optimization to social media marketing, we offer end-to-end digital solutions to help your business reach, engage and convert your target audience.
              </p>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  trackingName="services_get_free_consultation"
                  trackingLocation="services_overview"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-md shadow-brand-electric/25"
                >
                  Get a Free Consultation
                </Button>
              </div>
            </div>

            {/* Right Column: 2x3 Services Card Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {SERVICES_GRID.map((s, idx) => {
                  const IconComp = s.icon;
                  return (
                    <Link
                      key={idx}
                      href={s.href}
                      className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 hover:border-brand-cyan/40 hover:shadow-lg dark:hover:shadow-brand-cyan/5 transition-all text-left block"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-electric dark:group-hover:text-brand-cyan transition-colors mb-1.5 leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {s.desc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. "SOCIAL MEDIA MARKETING" SPOTLIGHT SECTION                      */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#040814] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Checklist & CTA */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                <span>SOCIAL MEDIA MARKETING</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                Build Your Brand. Engage Your Audience.{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Grow Faster.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Our social media marketing services help you create a strong online presence, connect with your audience and turn followers into customers.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-1">
                {[
                  "Strategy & Content Creation",
                  "Profile Management & Engagement",
                  "Paid Social Campaigns",
                  "Performance Tracking & Optimization",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  trackingName="social_media_explore"
                  trackingLocation="social_media_spotlight"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-md shadow-brand-electric/25"
                >
                  Explore Social Media Marketing
                </Button>
              </div>
            </div>

            {/* Right Column: Social Media Workspace Image with Floating Cards */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Laptop & Workspace Image */}
                <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,198,255,0.1)] bg-slate-100 dark:bg-[#071026]">
                  <Image
                    src="/images/services/seo/social-media-marketing-campaign-management.jpg"
                    alt="Social media marketing campaign management and engagement dashboard on laptop with mobile feed"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover"
                  />
                </div>

                {/* Floating Card 1: Social Media Growth +312% (Top-Left) */}
                <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-5 bg-white/95 dark:bg-[#081433]/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-200/80 dark:border-white/15 flex items-center gap-3 z-20">
                  <div className="text-left space-y-0.5">
                    <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium block">
                      Social Media Growth
                    </span>
                    <span className="text-base sm:text-xl font-extrabold text-brand-electric dark:text-brand-cyan block">
                      +312%
                    </span>
                  </div>
                  {/* Mini Line Chart SVG */}
                  <svg className="w-12 h-7 text-brand-electric dark:text-brand-cyan stroke-current" viewBox="0 0 50 30" fill="none">
                    <path d="M 2 26 L 15 18 L 28 22 L 48 4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Floating Card 2: Channels Stack (Top-Right) */}
                <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white/95 dark:bg-[#081433]/95 backdrop-blur-md rounded-2xl py-2.5 px-3.5 shadow-xl border border-slate-200/80 dark:border-white/15 space-y-2 z-20 text-[11px] font-medium text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FacebookIcon className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkedInIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XTwitterIcon className="w-3 h-3 text-slate-900 dark:text-white" />
                    <span>X</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <YouTubeIcon className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </div>
                </div>

                {/* Handwritten Accent Text & Arrow */}
                <div className="hidden sm:flex absolute -bottom-6 -left-3 items-center gap-2 pointer-events-none select-none z-20">
                  <div className="font-serif italic text-xs sm:text-sm font-semibold text-slate-700 dark:text-brand-cyan drop-shadow-xs leading-tight">
                    More Engagement <br />
                    More Customers
                  </div>
                  <svg
                    className="w-8 h-8 text-brand-electric dark:text-brand-cyan stroke-current rotate-45"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M10 10 C 20 12, 28 20, 30 30 M 30 30 L 22 30 M 30 30 L 30 22"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. "WHY BUSINESSES CHOOSE NEXOVIO" (6 CARDS)                       */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 dark:bg-[#030712] border-t border-slate-200/70 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 sm:space-y-16">
          {/* Centered Heading */}
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
              <span>WHY CHOOSE NEXOVIO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Businesses Choose{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Nexovio
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              We combine creativity, technology and strategy to deliver digital marketing solutions that get real results.
            </p>
          </div>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 hover:border-brand-cyan/40 hover:-translate-y-1 transition-all text-left flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. "OUR WORK / SOCIAL MEDIA & DIGITAL MARKETING IN ACTION"         */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Header with Heading & Link */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                <span>OUR WORK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                Social Media &amp; Digital Marketing in Action
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                From creative campaigns to data-driven strategies, we help businesses increase visibility, grow their audience and achieve measurable results across all digital channels.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                href="/portfolio"
                variant="primary"
                size="md"
                trackingName="work_view_portfolio"
                trackingLocation="work_showcase"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View Our Portfolio
              </Button>
            </div>
          </div>

          {/* 3 Work Showcase Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {WORK_SHOWCASE.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm hover:shadow-xl hover:border-brand-cyan/40 transition-all text-left flex flex-col group"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 space-y-1.5 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-electric dark:group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. "SUCCESS STORIES THAT SPEAK FOR THEMSELVES"                      */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 dark:bg-[#030712] border-t border-slate-200/70 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Column 1: Left Stats & Copy (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-electric/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                  <span>REAL RESULTS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Success Stories That Speak for Themselves
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We&apos;ve helped businesses across industries grow their online presence and achieve measurable success with our digital marketing services.
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                      200+
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Happy Clients
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                      500+
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Projects Delivered
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                      95%
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Client Retention Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Center Testimonial Card (lg:col-span-5) */}
            <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 shadow-sm text-left relative">
              {/* Large Cyan Quote Mark */}
              <div className="text-4xl sm:text-5xl font-serif text-brand-electric dark:text-brand-cyan leading-none select-none">
                “
              </div>

              <div className="my-4">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  {currentTestimonial.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-cyan/40 shrink-0">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.avatarAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {currentTestimonial.role}
                    </div>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-brand-cyan hover:border-brand-cyan transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-brand-cyan hover:border-brand-cyan transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Testimonial Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-4">
                {TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCurrentTestimonialIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${dotIdx === currentTestimonialIndex
                      ? "w-6 bg-brand-electric dark:bg-brand-cyan"
                      : "w-1.5 bg-slate-300 dark:bg-white/20"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Column 3: Right Workspace Photo with Handwritten Note (lg:col-span-3) */}
            <div className="lg:col-span-4 relative flex items-center justify-center">
              <div className="relative w-full h-full min-h-[260px] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-sm bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/images/services/seo/digital-marketing-growth-workspace.jpg"
                  alt="Modern aesthetic growth marketing workspace with tablet, coffee, and strategic planning notes"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />

                {/* Handwritten Badge Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#071026]/90 backdrop-blur-md rounded-2xl p-2.5 shadow-md border border-slate-200/80 dark:border-white/15 pointer-events-none select-none">
                  <div className="font-serif italic text-xs font-bold text-slate-800 dark:text-brand-cyan leading-tight text-center">
                    Your Growth <br />
                    is Our Goal ✦
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 9. FREQUENTLY ASKED QUESTIONS SECTION (FAQSection COMPONENT)        */}
      {/* =================================================================== */}
      <FaqSection
        variant="white"
        faqs={FAQ_ITEMS}
        title="Frequently Asked"
        highlightText="Questions"
      />
    </>
  );
}
