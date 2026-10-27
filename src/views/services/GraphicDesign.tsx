"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Share2,
  FileText,
  PenTool,
  BarChart3,
  Layers,
  Palette,
  Check,
  ShieldCheck,
  Clock,
  Users,
  Layout,
  Boxes,
  Package,
  Star,
  MessageSquare,
  Settings,
  Download,
  Heart,
  X,
  ChevronRight,
  Maximize2,
  Building2,
  Target,
  FileCheck2,
  TrendingUp,
} from "lucide-react";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { Button } from "@/src/components/ui/Button";
import { FaqSection } from "@/src/components/sections/FaqSection";
import { getServiceSchema, getBreadcrumbSchema, getOrganizationSchema } from "@/src/lib/schema";

// ==========================================
// 1. DATA STRUCTURES & CONSTANTS
// ==========================================

interface GraphicServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

const CORE_SERVICES: GraphicServiceCard[] = [
  {
    id: "logo-design",
    title: "Logo Design",
    shortDesc: "Unique and memorable logos that define your brand identity and make a lasting impression.",
    fullDesc:
      "We design distinctive, timeless logos that embody your company's core values, mission, and industry positioning. Every logo is handcrafted from research, sketches, and geometry, delivering memorable brand marks that work flawlessly across digital headers, mobile apps, favicons, corporate signage, and embroidery.",
    deliverables: [
      "Primary, secondary & submark logo variations",
      "Vector master files (.AI, .EPS, .SVG)",
      "High-resolution transparent web assets (.PNG, .WebP)",
      "Monochrome black & white inverted lockups",
      "Favicon suite & app icon specifications",
    ],
    icon: PenTool,
    iconBg: "bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800/60",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    id: "brand-identity",
    title: "Brand Identity Design",
    shortDesc: "Complete brand kits including colors, typography, and visual elements for a consistent look.",
    fullDesc:
      "Build cohesive brand equity across every customer touchpoint. We craft comprehensive brand systems featuring curated color palettes with exact HEX, RGB, and Pantone values, custom typography hierarchies, graphic pattern libraries, and detailed Brand Guidelines manuals that empower your internal team and partners to execute consistently.",
    deliverables: [
      "Curated primary & secondary color palettes (HEX, RGB, CMYK, Pantone)",
      "Typography styling hierarchy (Headlines, body, numerical)",
      "Brand style guide documentation (PDF & interactive Figma)",
      "Visual asset library & bespoke iconography",
      "Corporate email signatures & digital letterhead",
    ],
    icon: Palette,
    iconBg: "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "marketing-materials",
    title: "Marketing Materials",
    shortDesc: "Eye-catching brochures, flyers, posters, and digital ads that get your message across.",
    fullDesc:
      "Transform business value propositions into persuasive marketing collateral that drives conversions. From corporate presentation folders, product catalogs, and event banners to sales one-sheets and promotional flyers, our collateral is engineered for maximum readability, emotional impact, and direct audience response.",
    deliverables: [
      "Corporate bi-fold & tri-fold brochures",
      "High-converting promotional flyers & leaflets",
      "Trade show roll-up banners & booth graphics",
      "Product sell sheets, case study one-pagers & menus",
      "Print-ready CMYK PDFs with 300 DPI & crop bleed marks",
    ],
    icon: FileText,
    iconBg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800/60",
    iconColor: "text-brand-electric dark:text-brand-cyan",
  },
  {
    id: "social-media",
    title: "Social Media Graphics",
    shortDesc: "Scroll-stopping visuals tailored for every platform to grow your online presence.",
    fullDesc:
      "Capture fleeting audience attention in crowded social feeds. We design high-engagement Instagram multi-slide carousels, LinkedIn leadership decks, Facebook ad creatives, YouTube thumbnails, and X (Twitter) headers tailored to each platform's native aspect ratios and psychological engagement triggers.",
    deliverables: [
      "Instagram square (1:1), portrait (4:5) & Stories (9:16) sets",
      "LinkedIn thought-leadership carousels & banners",
      "Performance paid ad creatives for Meta & Google Display",
      "Reusable Canva & Figma templates for quick internal publishing",
      "Cohesive seasonal & promotional campaign creative kits",
    ],
    icon: Share2,
    iconBg: "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800/60",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "web-ui-graphics",
    title: "Web & UI Graphics",
    shortDesc: "Clean, modern graphics that enhance your website and improve user experience.",
    fullDesc:
      "Empower your website, SaaS dashboard, or landing page with crisp, conversion-focused digital visuals. We design modern hero graphic banners, custom UI spot illustrations, feature highlight icons, product badge mockups, and interactive diagram elements that elevate perceived software quality.",
    deliverables: [
      "Custom responsive website hero banners & hero compositions",
      "Bespoke vector icon sets tailored to your product features",
      "SaaS dashboard UI illustrations & empty-state graphics",
      "Blog header visuals & content feature illustrations",
      "Optimized SVG & WebP exports for ultra-fast page speeds",
    ],
    icon: Layout,
    iconBg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "infographics",
    title: "Infographics",
    shortDesc: "Simplify complex information with clear, engaging, and visually appealing infographics.",
    fullDesc:
      "Turn complex data, industry research, multi-phase technical processes, or survey reports into beautifully digestible visual narratives. Our infographics blend visual hierarchy, intuitive charts, and custom iconography to maximize social shares, earn editorial backlinks, and communicate data clearly.",
    deliverables: [
      "Long-form vertical infographics for blogs & Pinterest",
      "Square & carousel infographics for LinkedIn & Instagram",
      "Interactive or printable vector charts & data diagrams",
      "Process flow diagrams & step-by-step visual guides",
      "High-resolution PDF & SVG exports",
    ],
    icon: BarChart3,
    iconBg: "bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-800/60",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    id: "illustrations",
    title: "Illustrations",
    shortDesc: "Custom illustrations that add personality and bring your ideas to life.",
    fullDesc:
      "Differentiate your brand from stock-image conformity with bespoke custom illustrations. Whether you need isometric technology diagrams, playful brand mascot characters, editorial story art, or sleek minimalist line drawings, our illustrators craft assets that make your brand feel truly distinctive.",
    deliverables: [
      "Custom brand illustration style definitions",
      "Editorial & conceptual story artwork",
      "Isometric architecture & product workflow illustrations",
      "Vector character designs & brand mascots",
      "Multi-layer vector source files for animation readiness",
    ],
    icon: Boxes,
    iconBg: "bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800/60",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    id: "print-design",
    title: "Print Design",
    shortDesc: "High-quality designs for business cards, packaging, labels, and more.",
    fullDesc:
      "Bridge the physical world with premium, print-perfect physical goods. We design luxury business cards with spot UV and foil stamping, custom retail product packaging, bottle labels, retail hangtags, corporate annual reports, and vehicle wraps, with exact dieline setup and printer color calibration.",
    deliverables: [
      "Custom product boxes, pouches & packaging dielines",
      "Bottle, jar & retail product labels",
      "Premium business cards with specialty finish callouts",
      "Corporate annual reports & multi-page publication layouts",
      "Color-calibrated CMYK master files ready for your commercial printer",
    ],
    icon: Package,
    iconBg: "bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800/60",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
];

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  deliverablesText: string;
  image: string;
  imageAlt: string;
  overview: string;
  clientImpact: string;
}

const PORTFOLIO_SHOWCASE: PortfolioItem[] = [
  {
    id: "brand-identity-showcase",
    title: "Brand Identity Design",
    category: "Brand Identity Design",
    deliverablesText: "Logo, business cards, stationery",
    image: "/images/services/graphic-design/portfolio-brand-identity.jpg",
    imageAlt: "Corporate brand identity stationery set with business cards, letterhead, notebook, and presentation folder",
    overview:
      "Complete corporate visual rebranding for Arthur & Co. including primary wordmark, embossed metallic business cards, luxury stationery suite, debossed notebook, and comprehensive Brand Guidelines book.",
    clientImpact:
      "Increased perceived brand authority, secured 4 enterprise client contracts within 60 days of launch, and achieved 100% brand consistency across all customer communications.",
  },
  {
    id: "social-media-showcase",
    title: "Social Media Graphics",
    category: "Social Media Graphics",
    deliverablesText: "Instagram, LinkedIn, Facebook",
    image: "/images/services/graphic-design/portfolio-social-media.jpg",
    imageAlt: "Modern smartphone in hand showing colorful social media marketing carousel cards with bold typography",
    overview:
      "Comprehensive multi-platform social media creative system featuring custom Instagram story templates, high-converting carousel sets, LinkedIn authority slides, and cohesive brand typography.",
    clientImpact:
      "Delivered a 310% surge in organic social engagement, doubled follower acquisition velocity, and reduced content production time by 65% through reusable design templates.",
  },
  {
    id: "marketing-materials-showcase",
    title: "Marketing Materials",
    category: "Marketing Materials",
    deliverablesText: "Brochures, flyers, catalogs",
    image: "/images/services/graphic-design/portfolio-marketing-brochure.jpg",
    imageAlt: "Open corporate bi-fold marketing brochure mockup displaying modern blue geometric layout and headline",
    overview:
      "High-impact bi-fold corporate marketing brochure designed for sales conferences and executive client presentations, featuring geometric brand gradients, clean typography grids, and structured case studies.",
    clientImpact:
      "Used across 12 international trade conferences, driving a 44% increase in qualified consultation bookings compared to legacy printed materials.",
  },
  {
    id: "infographics-showcase",
    title: "Infographics",
    category: "Infographics",
    deliverablesText: "Data visualization, charts",
    image: "/images/services/graphic-design/portfolio-infographics.jpg",
    imageAlt: "Printed business growth infographic sheet with data charts, pie charts, and statistics on office desk",
    overview:
      "Annual performance data visualization report transforming complex financial KPIs, revenue distribution charts, and timeline expansion metrics into an executive-ready infographic layout.",
    clientImpact:
      "Earned 140+ editorial backlinks and organic mentions in industry journals, generating over 18,000 unique organic visitors within 90 days.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover & Plan",
    description: "We understand your goals, audience, and design needs.",
    details: "We start by analyzing your business goals, target audience demographics, competitive landscape, and design aesthetic preferences to establish a clear creative brief.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Create Concepts",
    description: "We design initial concepts and share for your feedback.",
    details: "Our senior design team explores distinct visual directions, crafting preliminary concepts and mockups in high resolution for your collaborative review and input.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Refine & Perfect",
    description: "We make revisions until every detail is just right.",
    details: "We fine-tune typography, spacing, color balance, and iconography through structured iteration cycles until the design perfectly achieves your objectives.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Final Delivery",
    description: "Get your high-quality files in all required formats.",
    details: "Receive clean master archives with vector source files (.AI, .EPS, .SVG), print-ready PDFs (CMYK 300 DPI with bleeds), and web-optimized assets (.PNG, .WebP).",
    icon: Download,
  },
  {
    number: "05",
    title: "Ongoing Support",
    description: "We're here for future updates and needs.",
    details: "As your company introduces new products, campaigns, or services, our team remains on call to extend your brand system with fast turnaround and seamless continuity.",
    icon: Heart,
  },
];

const TESTIMONIALS = [
  {
    id: "sarah",
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    company: "BrightPath",
    avatar: "/images/services/graphic-design/testimonial-sarah.jpg",
    rating: 5,
    quote:
      "Nexovio delivered outstanding branding and design work. Their team understood our vision perfectly and brought it to life with creativity and professionalism.",
  },
  {
    id: "james",
    name: "James Carter",
    role: "Founder",
    company: "TechMake",
    avatar: "/images/services/graphic-design/testimonial-james.jpg",
    rating: 5,
    quote:
      "The social media graphics they created for our campaign were not only visually stunning but also helped us increase engagement by 3x. Highly recommended!",
  },
  {
    id: "emily",
    name: "Emily Rodriguez",
    role: "Product Lead",
    company: "WaveLight",
    avatar: "/images/services/graphic-design/testimonial-emily.jpg",
    rating: 5,
    quote:
      "Their attention to detail and creativity made our website and marketing materials look incredible. A true partner in our growth journey!",
  },
];

const GRAPHIC_DESIGN_FAQS = [
  {
    question: "What file formats and source assets do I receive upon project completion?",
    answer:
      "You receive complete, industry-standard master asset packages. For vector designs (logos, icons, illustrations), you receive .AI (Adobe Illustrator), .EPS, and scalable .SVG files. For print collateral, you get high-resolution, print-ready PDFs calibrated in CMYK with 300 DPI resolution and standard 3mm bleed margins. For digital applications, we provide lossless transparent PNGs, JPEGs, and modern WebP files, along with editable Figma or Canva templates when requested.",
  },
  {
    question: "Do I own 100% full commercial copyright to the finished designs?",
    answer:
      "Yes, absolutely. Once final deliverables are approved and invoice balances are cleared, you retain 100% exclusive intellectual property and commercial copyright ownership. You are free to trademark your logo, reproduce your print collateral, or deploy your creative assets worldwide without recurring licensing fees.",
  },
  {
    question: "How many rounds of revisions are included in your design packages?",
    answer:
      "Our standard graphic design engagements include 3 comprehensive revision rounds. We present initial exploratory directions, gather your consolidated feedback, and refine typography, layout, color tones, and asset compositions. Our collaborative milestone process ensures that 95% of our projects are approved well within the standard revision cycle.",
  },
  {
    question: "Can your designers work with our existing brand guidelines and color palettes?",
    answer:
      "Yes. If your company already has an established logo, color palette, typography hierarchy, or design system, our designers strictly follow your brand rules. We ensure all new marketing brochures, social media campaign sets, or packaging assets integrate seamlessly with your existing market presence.",
  },
  {
    question: "What is the typical turnaround time for graphic design deliverables?",
    answer:
      "Turnaround varies by scope: urgent promotional social media posts, email banners, or one-sheet flyers are typically completed in 24 to 48 hours. Comprehensive corporate brochures, multi-page annual reports, pitch decks, or custom product packaging generally require 3 to 7 business days, including scheduled review checkpoints.",
  },
  {
    question: "Do you offer ongoing monthly graphic design retainers for growing businesses?",
    answer:
      "Yes. For agencies, e-commerce stores, and fast-growing businesses requiring regular creative output, we provide flexible monthly design retainer subscriptions. This gives you a dedicated senior designer or creative team with guaranteed turnaround times, direct Slack collaboration, and predictable monthly billing without the overhead of full-time internal hires.",
  },
  {
    question: "Do you design for both digital platforms and physical print packaging?",
    answer:
      "Yes. Our studio bridges both disciplines. We design high-converting digital assets (website hero banners, social media carousels, UI illustrations, email headers) as well as precision physical print items (product boxes, labels, business cards with foil stamping, menus, and trade show booth graphics) prepared to exact dieline specifications.",
  },
  {
    question: "How do we get started with our first graphic design project?",
    answer:
      "Getting started is simple. Schedule a quick discovery call through our website or send us your creative brief via the contact form. We will review your requirements, provide a transparent fixed-price estimate and timeline, and assign a dedicated design lead to begin your project.",
  },
];

// ==========================================
// 2. MAIN COMPONENT
// ==========================================

export default function GraphicDesignPage() {
  const [selectedService, setSelectedService] = useState<GraphicServiceCard | null>(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // SEO Structured Data Schemas
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "Graphic Design Services for Businesses",
    description:
      "Custom graphic design services for branding, social media, packaging, menus, brochures, advertising, print and marketing materials. Work with Nexovio.",
    url: "/services/graphic-design",
    serviceType: "GraphicDesignServices",
    image: "/images/services/graphic-design/graphic-hero-designer.jpg",
  });

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Graphic Design", url: "/services/graphic-design" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GRAPHIC_DESIGN_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* JSON-LD Structured Data for Google Crawlers */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Full-width Breadcrumb Stripe Touching Header with 0px gap */}
      <Breadcrumbs
        items={[
          { name: "Services", url: "/services" },
          { name: "Graphic Design", url: "/services/graphic-design" },
        ]}
      />

      {/* ================================================================== */}
      {/* 1. HERO SECTION (MATCHING REFERENCE DESIGN EXACTLY) */}
      {/* ================================================================== */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-background relative overflow-hidden border-b border-slate-100 dark:border-white/5">
        {/* Soft Modern Glow Elements */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-60" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-brand-electric/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Subtitle, Badges, CTA */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Blue Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-electric/30 dark:border-brand-cyan/40 bg-brand-electric/10 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-electric dark:text-brand-cyan" />
                <span>Graphic Design Services</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.12]">
                Creative Designs. <br />
                Real <span className="bg-gradient-brand bg-clip-text text-transparent">Business Impact.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Our graphic design services help brands communicate clearly, stand out visually, and make a lasting impression. From logos to marketing materials, we create designs that connect with your audience and drive results.
              </p>

              {/* 4 Feature Badges (2x2 on mobile, 4-col on desktop) */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-surface-elevated border border-slate-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                    Brand-focused Designs
                  </span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-surface-elevated border border-slate-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-brand-electric dark:text-brand-cyan flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                    Fast Turnaround Time
                  </span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-surface-elevated border border-slate-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                    Dedicated Design Team
                  </span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-surface-elevated border border-slate-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                    100% Custom Solutions
                  </span>
                </div>
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
                  href="#portfollio"
                  variant="secondary"
                  size="md"
                  trackingName="web_design_hero_view_portfolio"
                  trackingLocation="web_design_hero"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>

            {/* Right Column: High Quality Realistic Workstation Mockup */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-25 blur-3xl rounded-3xl -z-10" />

              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-brand-cyan/40 bg-white/90 dark:bg-surface-elevated/90 backdrop-blur-md p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#070D18]">
                  <Image
                    src="/images/services/graphic-design/graphic-hero-designer.jpg"
                    alt="Creative graphic designer at modern agency workstation with dual monitors, brand guidelines, and graphics tablet"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. "WHAT WE OFFER" — 8 CORE GRAPHIC DESIGN SERVICES */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50/60 dark:bg-[#070D18]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-electric dark:text-brand-cyan">
                <span>WHAT WE OFFER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Our Graphic Design Services
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                We offer a full range of graphic design services to help you build a strong brand presence, engage your audience, and communicate your message effectively — across every channel.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-electric dark:text-brand-cyan hover:underline shrink-0 group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 8-Card Grid (4 Columns on Desktop, 2 on Tablet/Mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-surface-elevated/80 p-6 flex flex-col justify-between hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Icon Badge */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.iconBg} ${service.iconColor} shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-white/5 mt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-electric dark:text-brand-cyan hover:underline group/btn cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. "OUR PORTFOLIO" — DESIGNS THAT TELL YOUR STORY */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20 bg-background relative border-t border-slate-100 dark:border-white/5" id="portfollio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-electric dark:text-brand-cyan">
                <span>OUR PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Designs That Tell Your Story
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore our latest graphic design projects and see how we turn ideas into impactful visuals for brands across industries.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-electric dark:text-brand-cyan hover:underline shrink-0 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 Realistic Portfolio Showcase Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_SHOWCASE.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPortfolio(item)}
                className="group rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-surface-elevated/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-cyan/60 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container with Hover Zoom & Magnify Icon */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/90 text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-brand-electric dark:group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {item.deliverablesText}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-brand-electric dark:text-brand-cyan font-semibold">
                    <span>View Project</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. "OUR PROCESS" — SIMPLE STEPS TO STUNNING DESIGNS */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50/60 dark:bg-[#070D18]/60 relative border-t border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-electric dark:text-brand-cyan">
                <span>OUR PROCESS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Simple Steps to Stunning Designs
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                We follow a streamlined process to ensure your vision comes to life with creativity, precision, and on-time delivery.
              </p>
            </div>

            {/* Right side desk concept artwork */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
                <Image
                  src="/images/services/graphic-design/process-design-workflow.jpg"
                  alt="Ideas, Designs, Results creative design studio workflow sketch and cards"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* 5-Step Connected Roadmap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === PROCESS_STEPS.length - 1;

              return (
                <div key={step.number} className="relative flex flex-col">
                  <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-surface-elevated/80 p-5 flex-1 flex flex-col items-center text-center shadow-xs hover:border-brand-cyan/60 transition-colors">
                    {/* Step Icon in Rounded Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-brand-electric/10 dark:bg-brand-cyan/10 border border-brand-electric/25 dark:border-brand-cyan/25 text-brand-electric dark:text-brand-cyan flex items-center justify-center mb-3.5 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-mono font-bold text-brand-electric dark:text-brand-cyan">
                      {step.number}
                    </span>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Horizontal Connector Arrow (Desktop only, except last) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-300 dark:text-slate-600">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. "CLIENT TESTIMONIALS" — WHAT OUR CLIENTS SAY */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20 bg-background relative border-t border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-electric dark:text-brand-cyan">
                <span>CLIENT TESTIMONIALS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                We're proud to have helped businesses of all sizes bring their ideas to life through great design. Here's what some of our clients have to say.
              </p>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-electric dark:text-brand-cyan hover:underline shrink-0 group"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 3 Client Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-surface-elevated/80 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-white/10 shadow-xs">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="44px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================================================================== */}
      {/* 7. DEEP SEO CONTENT & COMPARISON MATRIX (PLAGIARISM-FREE FOR GOOGLE) */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50/70 dark:bg-[#070D18]/70 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* SEO Editorial: Why Visual Strategy Drives Revenue */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-electric dark:text-brand-cyan">
                <span>BUSINESS IMPACT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                How Strategic Graphic Design Accelerates Customer Acquisition
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Design is not decorative—it is your company's silent sales force. When visual identity, layout architecture, and brand consistency align, conversion rates increase and customer trust solidifies.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-surface-elevated border border-slate-200/80 dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Higher Perceived Product Value
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Companies with professional graphic design command 20% to 40% higher pricing power because buyers subconsciously associate visual polish with reliability and enterprise quality.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-surface-elevated border border-slate-200/80 dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-brand-electric dark:text-brand-cyan flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Instant Cognitive Recognition
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Human brains process visual assets 60,000x faster than raw copy. Consistent color palettes and typography ensure your marketing collateral is recognized immediately across search and social feeds.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-surface-elevated border border-slate-200/80 dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Zero Print or Render Disasters
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Every asset is built to exact technical specifications: CMYK color models for commercial print, vector math for limitless scaling, and RGB WebP formats for sub-second website load times.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-surface-elevated border border-slate-200/80 dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Scalable Brand Guidelines
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Receive comprehensive brand books with clear space rules, typography pairings, color codes, and editable templates that empower your internal team to maintain strict visual standards.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Matrix Table */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-electric dark:text-brand-cyan">
                DECISION MATRIX
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Why Choose Nexovio Over Freelancers or In-House Hires
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-surface-elevated shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/40">
                    <th className="py-4 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                      Capability / Feature
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-bold text-brand-electric dark:text-brand-cyan bg-blue-50/50 dark:bg-blue-950/20">
                      Nexovio Creative Studio
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-semibold text-slate-600 dark:text-slate-400">
                      Freelance Marketplaces
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-semibold text-slate-600 dark:text-slate-400">
                      Full-Time In-House Hire
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800 dark:text-slate-200">
                      Dedicated Multi-Discipline Team
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-600 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/10 flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Yes (Branding, Print, Web)
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Single skill only</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Single individual capacity</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800 dark:text-slate-200">
                      Full Vector Source Files Included
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-600 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/10 flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Always (.AI, .EPS, .SVG)
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Often charged extra</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Yes</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800 dark:text-slate-200">
                      Guaranteed Fast Turnaround
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-600 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/10 flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> 24-48 hours available
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Unpredictable availability</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Subject to task backlog</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800 dark:text-slate-200">
                      Print-Ready Technical Calibration
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-600 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/10 flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> CMYK 300 DPI & Dielines
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Frequent RGB print errors</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Depends on experience</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800 dark:text-slate-200">
                      Monthly Cost Efficiency
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-600 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/10 flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Predictable fixed pricing
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">Variable / billing surprises</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">$75,000+/yr + benefits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. REALISTIC, SEARCH-FOCUSED FAQS (EMBEDDED WITH SCHEMA.ORG) */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20 bg-background border-t border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection
            faqs={GRAPHIC_DESIGN_FAQS}
            badge="FREQUENTLY ASKED QUESTIONS"
            title="Questions About Our"
            highlightText="Graphic Design Services"
            description="Have questions before starting your design project? Here are detailed, realistic answers about file formats, copyrights, revision rounds, timelines, and ongoing support."
          />
        </div>
      </section>

      {/* ================================================================== */}
      {/* 9. MODALS: SERVICE DETAILS & PORTFOLIO LIGHTBOX */}
      {/* ================================================================== */}

      {/* A. Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#070D18] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-8 space-y-6">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${selectedService.iconBg} ${selectedService.iconColor}`}>
                <selectedService.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-brand-electric dark:text-brand-cyan font-semibold">
                  Nexovio Graphic Design Services
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                What You Receive (Deliverables):
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 dark:border-white/10">
              <Button
                onClick={() => {
                  setSelectedService(null);
                  setIsConsultationModalOpen(true);
                }}
                variant="primary"
                size="md"
                className="w-full sm:w-auto shadow-glow cursor-pointer"
              >
                <span>Request a Quote for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* B. Portfolio Lightbox Modal */}
      {selectedPortfolio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white dark:bg-[#070D18] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <button
              type="button"
              onClick={() => setSelectedPortfolio(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-lg"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image Preview */}
            <div className="relative w-full aspect-[16/10] bg-slate-950">
              <Image
                src={selectedPortfolio.image}
                alt={selectedPortfolio.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-electric dark:text-brand-cyan uppercase">
                    {selectedPortfolio.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {selectedPortfolio.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                  {selectedPortfolio.deliverablesText}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p><strong>Project Overview:</strong> {selectedPortfolio.overview}</p>
                <p><strong>Measurable Business Outcome:</strong> {selectedPortfolio.clientImpact}</p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-white/10">
                <Button
                  onClick={() => {
                    setSelectedPortfolio(null);
                    setIsConsultationModalOpen(true);
                  }}
                  variant="primary"
                  size="md"
                  className="shadow-glow cursor-pointer"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <button
                  type="button"
                  onClick={() => setSelectedPortfolio(null)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* C. Direct Consultation / Discovery Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#070D18] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-8 space-y-6">
            <button
              type="button"
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-electric dark:text-brand-cyan uppercase">
                GET A FREE DESIGN CONSULTATION
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Let's Discuss Your Brand Vision
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect with our creative director to discuss logos, branding kits, marketing materials, or custom packaging. We'll provide transparent pricing and timelines.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <Link
                href="/schedule-a-call"
                onClick={() => setIsConsultationModalOpen(false)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-brand text-white font-bold text-sm text-center shadow-glow flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              >
                <span>Schedule a 15-Minute Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsConsultationModalOpen(false)}
                className="w-full py-3 px-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white font-semibold text-sm text-center hover:border-brand-cyan/60 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Send Us Your Project Brief</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
