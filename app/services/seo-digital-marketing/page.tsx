import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  TrendingUp,
  Search,
  CheckCircle2,
  LineChart,
  Target,
  ShieldAlert,
  ArrowRight,
  BarChart3,
  Globe,
  Sparkles,
  Zap,
  Check,
  Building2,
  Users,
  Briefcase,
  GraduationCap,
  Home,
  Utensils,
  Stethoscope,
  ShoppingBag,
  FileCode,
  Terminal,
  Activity,
  Lock,
  Boxes,
  Cpu,
  Layers,
  Smartphone,
  PenTool,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  FileText,
  BarChart2,
  Eye,
  MousePointerClick,
  Filter,
  PieChart,
  BookOpen,
  Award,
  Code2,
  MapPin,
  Compass,
  CheckSquare,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
  getOrganizationSchema,
} from "@/lib/schema";

const service = getServiceBySlug("seo-digital-marketing")!;

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "SEO & Digital Marketing Services | Grow Organic Visibility & Leads",
    description:
      "Improve search visibility with technical SEO, keyword research, content optimization, local and global SEO, analytics, CRO and digital growth strategy.",
    keywords: [
      "SEO services",
      "SEO agency",
      "SEO company",
      "search engine optimization services",
      "digital marketing agency",
      "technical SEO",
      "technical SEO services",
      "SEO audit",
      "website SEO audit",
      "on page SEO services",
      "SEO content strategy",
      "SEO content optimization",
      "keyword research services",
      "SEO consulting",
      "local SEO services",
      "international SEO services",
      "global SEO services",
      "SEO for small business",
      "enterprise SEO services",
      "ecommerce SEO services",
      "SaaS SEO agency",
      "B2B SEO services",
      "SEO lead generation",
      "conversion rate optimization services",
      "website conversion optimization",
      "GA4 setup",
      "Google Tag Manager setup",
      "content marketing services",
      "digital marketing strategy",
    ],
    path: "/services/seo-digital-marketing",
  }),
  title: "SEO & Digital Marketing Services | Grow Organic Visibility & Leads | Nexovio",
};

// ==========================================
// DATA STRUCTURES FOR SEO & DIGITAL MARKETING
// ==========================================

const VALUE_PROPOSITION_PILLARS = [
  {
    title: "Fix technical barriers first",
    description:
      "Crawlability, indexation, canonical URLs, sitemaps, structured data, performance, and site architecture can all influence the speed at which a site is found and interpreted.",
  },
  {
    title: "Target real search intent",
    description:
      "Keyword research is aligned with commercial, informational, and transactional intent, so the content answers questions relevant to the business."
  },
  {
    title: "Focus on the page, not just the keyword",
    description:
      "Headings, internal links, meta data, content organization and image alt-text should all help make a page easier to scan for users and search engines."
  },
  {
    title: "Actions over vanity metrics",
    description:
      "GA4, Google Tag Manager and conversion events enable tracking of search visibility to submissions, calls, clicks, downloads and other actions of substance."
  },
  {
    title: "Keep Improving after Launch",
    description:
      "SEO is not a single upload. As search behavior changes, competitors change, site architecture evolves and content performance fluctuates, so should the priorities based on data."
  },
  {
    title: "Protect trust through realistic claims",
    description:
      "We don’t promise #1 rankings or instant results, because search systems change and organic performance depends on so many factors."
  },
];

interface CoreServiceItem {
  id: string;
  icon: any;
  title: string;
  tagline: string;
  description: string;
  keywordFocus: string[];
  bestFor: string;
  previewType: string;
  note?: string;
}

const CORE_SERVICES: CoreServiceItem[] = [
  {
    id: "technical-seo",
    icon: Code2,
    title: "Technical SEO & Site Architecture",
    tagline: "Organic Search Infrastructure Layer",
    description:
      "Detect crawl, indexation, canonical, sitemap, structured-data, internal-linking and performance problems and then rank corrections by effect.",
    keywordFocus: ["technical SEO", "technical SEO services", "SEO website audit"],
    bestFor: "Sites with crawl bottlenecks, indexation issues, or complex architectures.",
    previewType: "technical",
  },
  {
    id: "seo-audit",
    icon: Search,
    title: "SEO Audit & Recovery Roadmap",
    tagline: "Diagnostic Health & Traffic Recovery",
    description:
      "Analyze technical health, content quality, lost rankings, broken links, keyword cannibalization, and indexation issues and develop an actionable recovery plan.",
    keywordFocus: ["SEO audit", "website SEO audit", "SEO analysis"],
    bestFor: "Sites experiencing traffic drops or preparing for a redesign.",
    previewType: "audit",
  },
  {
    id: "keyword-research",
    icon: Target,
    title: "Keyword Research & Search Intent",
    tagline: "Commercial Query & Audience Demand Matrix",
    description:
      "Identify the phrases, topics, and intent patterns that are important to your audience and connect them to service pages, landing pages, and editorial content.",
    keywordFocus: ["keyword research", "search intent", "SEO keyword strategy"],
    bestFor: "Businesses launching new services or expecting higher-intent leads.",
    previewType: "keywords",
  },
  {
    id: "on-page-seo",
    icon: FileCode,
    title: "On-Page SEO & Content Optimization",
    tagline: "Semantic HTML & Headings Hierarchy",
    description:
      "Refine H1-H3 hierarchy, title tags, meta descriptions, semantic layout, internal link, image SEO and page content to make each URL more focused.",
    keywordFocus: ["on-page SEO", "seo content optimization", "serviços de on-page seo"],
    bestFor: "Established service pages that could use more search relevance and CTR.",
    previewType: "onpage",
  },
  {
    id: "content-strategy",
    icon: BookOpen,
    title: "SEO Content Strategy",
    tagline: "Topical Depth & Editorial Roadmaps",
    description:
      "Organize your content around topic clusters and roadmaps based on customer needs and questions, commercial demand, and buying journey stages.",
    keywordFocus: ["SEO content strategy", "SEO content marketing", "content strategy agency"],
    bestFor: "Brands seeking to build authority and capture informational searchers.",
    previewType: "content",
  },
  {
    id: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    tagline: "Geographic Discovery & Intent Capture",
    description:
      "Improve local rankings with a local landing page strategy, business info consistency, pertinent content and analysis.",
    keywordFocus: ["local SEO", "local SEO services", "local search optimization"],
    bestFor: "Businesses with multiple locations and service providers that are city-specific.",
    previewType: "local",
  },
  {
    id: "international-seo",
    icon: Globe,
    title: "International & Global SEO",
    tagline: "Multi-Market Alignment & Localization",
    description:
      "If you are selling in multiple markets, conduct your keyword research, information architecture, localization and regional signals by market.",
    keywordFocus: ["international SEO", "global SEO", "international SEO services"],
    bestFor: "Brands looking to enter international or multilingual markets.",
    previewType: "global",
  },
  {
    id: "authority-offpage",
    icon: ShieldCheck,
    title: "Authority & Off-Page SEO",
    tagline: "Sustainable Brand Credibility & Digital PR",
    description:
      "Create a longterm link-building strategy through relevant digital PR, partnerships, and quality link acquisition opportunities - not low-quality link spam.",
    keywordFocus: ["off-page SEO", "link building services", "digital PR SEO"],
    bestFor: "Highly competitive niches that need increased domain trust and brand citation.",
    previewType: "authority",
  },
  {
    id: "cro-services",
    icon: MousePointerClick,
    title: "Conversion Rate Optimization (CRO)",
    tagline: "Friction Reduction & User Action UX",
    description:
      "Leverage analytics and user behavior to optimize calls to action, forms, page hierarchy, trust signals and high-friction journeys.",
    keywordFocus: ["conversion rate optimization", "CRO services", "website conversion optimization"],
    bestFor: "Pages with high organic traffic but low enquiry rates.",
    previewType: "cro",
  },
  {
    id: "analytics-tracking",
    icon: PieChart,
    title: "Analytics & Conversion Tracking",
    tagline: "GA4 & Google Tag Manager Event Architecture",
    description:
      "Implement GA4 and GTM event tracking for forms, clicks, downloads, and other critical actions to ensure SEO decisions drive business results.",
    keywordFocus: ["GA4 setup", "Google Tag Manager", "conversion tracking"],
    bestFor: "Organizations looking for accurate attribution of search investments.",
    previewType: "analytics",
  },
  {
    id: "reporting-growth",
    icon: BarChart3,
    title: "SEO Reporting & Growth Planning",
    tagline: "Actionable Insights over Metric Dumps",
    description:
      "Establish a meaningful reporting rhythm that focuses on visibility, landing-page performance, conversions, and priority actions, rather than unrelated metric dumps.",
    keywordFocus: ["SEO reporting", "SEO analytics", "SEO performance tracking"],
    bestFor: "Executives who need clear visibility into search ROI and progress.",
    previewType: "reporting",
  },
];

const DIGITAL_MARKETING_FOCUS = [
  {
    title: "Content Marketing",
    description:
      "Develop valuable, search-optimized articles, landing pages, guides, and collateral that address actual customer inquiries and enhance topical authority.",
    icon: FileText,
  },
  {
    title: "Landing Page Optimization",
    description:
      "Optimize page messaging, hierarchy, proof points, forms and calls to action so paid or organic traffic lands on a page designed to help the visitor progress.",
    icon: Target,
  },
  {
    title: "Conversion-Focused Campaign Support",
    description:
      "Synchronize campaign landing pages, tracking and conversion paths so that marketing performance can be tracked from click through to meaningful action.",
    icon: TrendingUp,
  },
  {
    title: "Organic Social Support",
    description:
      "Repurpose insightful business content into social posts that increase brand exposure and provide new platforms for quality content to be found.",
    icon: Users,
  },
  {
    title: "Marketing Analytics",
    description:
      "Integrate acquisition data with on-site behavior and conversion data to determine which channels, pages, and journeys require additional focus.",
    icon: BarChart2,
  },
];

const TECHNICAL_SEO_CHECKLIST = [
  "Crawlability and indexation review",
  "Robots.txt and sitemap checks",
  "Canonical URL strategy and duplicate-page handling",
  "Internal-link architecture and orphan-page analysis",
  "Semantic HTML and heading structure",
  "Structured data / JSON-LD implementation review",
  "Core Web Vitals and performance considerations",
  "Mobile usability and responsive search experience",
  "URL architecture and redirect hygiene",
  "Search Console diagnostics and ongoing monitoring",
];

const HUMANIZED_CONTENT_RULES = [
  "Write around what your customer’s problem is and not just variations of keywords they search for. Treat the search term as a hint towards intent and answer the intent behind that word.",
  "Create depth of topic. Powerful service pages are supported by related articles that cover comparisons, guides, and FAQs that help solidify the topic.",
  "Provide your own business perspective. Case studies, project examples, process notes and real-world operational experience lend credibility to your content.",
  "Don't make over the top promises. Substitute the “guaranteed rankings” type language with transparent information about what is being optimized and assessed.",
  "Rewrite for spoken language. Short sentences, real-life examples and simple language language are what help make technical SEO understandable to busy executives.",
  "Make each page friendly. One main search intent with a couple of closely related search intents is a much better recipe for content clarity than trying to rank for everything.",
];

const EDITORIAL_TOPICS = [
  "Modern Website Technical SEO Checklist",
  "How Search Intent is Impacting SEO Content Strategy",
  "SEO Audit vs. Running SEO Services",
  "Creating Topic clusters for B2B SaaS",
  "International SEO structure for scaling Brands",
  "Multi-Location Business Local SEO Basics",
  "SEO measurement with GA4 and GTM",
  "Landing-page CRO for non-paid search traffic",
  "Best Internal Linking Strategies for Service Sites",
];

const GLOBAL_SEO_PILLARS = [
  "Market-by-market keyword research matching regional commercial terminology",
  "Country and language site architecture planned around genuine business expansion targets",
  "Content localization that preserves meaning and tone instead of literal translation",
  "International internal linking networks and country-aware navigation flows",
  "Hreflang and regional geotargeting implementation review",
  "Country-specific performance monitoring in Search Console and analytics dashboards",
  "Regional landing-page optimization for services and products with localized commercial demand",
];

const MEASUREMENT_LAYERS = [
  {
    layer: "Acquisition",
    metrics: "Organic sessions, landing pages, query themes, demand for recommendations vs. non-ren- dation branded",
  },
  {
    layer: "Engagement",
    metrics: "Engaged sessions, scroll session, key page event, content con- sumption",
  },
  {
    layer: "Conversion",
    metrics: "Form submissions, calls, clicks on WhatsApp, bookings for consultations, downloads",
  },
  {
    layer: "Commercial quality",
    metrics: "Lead source, service interest, quali- fied enquiry signals, downstream opportunity information",
  },
  {
    layer: "Optimization",
    metrics: "High impression but low CTR pages, high traffic but low con- version pages, soon-to-be expired URLs, hidden gems",
  },
];

const PROCESS_STEPS_FULL = [
  {
    step: "01",
    title: "Audit",
    desc: "Know the business, website, search visibility, technical status, content and conversion path.",
  },
  {
    step: "02",
    title: "Research",
    desc: "Organize keywords, intent of search, competitors, questions of audience, and opportunities commercial.",
  },
  {
    step: "03",
    title: "Prioritize",
    desc: "Distinguish among the essential technical repairs, content opportunities, and conversion enhancements.",
  },
  {
    step: "04",
    title: "Implement",
    desc: "Enhance architecture, metadata, content, internal links, technical infrastructure, tracking, and priority landing pages.",
  },
  {
    step: "05",
    title: "Measure",
    desc: "Track visibility, landing page activity, and meaningful conversions with Search Console/GA4/GTM.",
  },
  {
    step: "06",
    title: "Refine",
    desc: "Leverage performance data to refresh content, test conversion paths, expand strong topic clusters, and mitigate emerging issues technical.",
  },
];

const INDUSTRIES = [
  {
    title: "SaaS & Technology",
    desc: "High intent product/service pages, feature topics and comparison content, technical SEO and content clustesr for complex product questions.",
    icon: Cpu,
  },
  {
    title: "E-commerce",
    desc: "Category/product organization, on-site links, faceted-navigation issues, product information and landing pages focused on conversion.",
    icon: ShoppingBag,
  },
  {
    title: "Healthcare",
    desc: "Trust content, unambiguous service details, local discovery, and content quality conisderations.",
    icon: Stethoscope,
  },
  {
    title: "Real Estate",
    desc: "Location + service intent, real estate content, lead capture, and local search ranking.",
    icon: Home,
  },
  {
    title: "Home Services",
    desc: "Local SEO service pages location intent path to quotes and bookings (where applicable) conversion tracking.",
    icon: Building2,
  },
  {
    title: "Professional Services",
    desc: "Authority-driven content, service pages, proof, commercial intent search, and lead generation UX.",
    icon: Briefcase,
  },
  {
    title: "Startups",
    desc: "Concentrated keyphrase targets a few high-value landing pages a content architecture that scales a measurement discipline.",
    icon: Sparkles,
  },
];

const BRAND_POSITIONING_REASONS = [
  {
    title: "Engineering aware SEO",
    desc: "Think of technical SEO as working with the underlying website architecture rather than SEO as copywriting.",
  },
  {
    title: "Humanized content",
    desc: "Describe what the technical work is in plain English and do not make exaggerated ranking claims.",
  },
  {
    title: "Intent-first strategy",
    desc: "Keyword research helps explain what people want, indicating what pages are most likely to satisfy that intent."
  },
  {
    title: "Connected design and development",
    desc: "Nexovio provides web development and web design along with UI/UX and mobile apps - so addressing product and code SEO is straightforward."
  },
  {
    title: "Measurable marketing",
    desc: "GA4 - GTM tracking Establishing a Connection Between Acquisition & User Engagement."
  },
  {
    title: "Honest expectations",
    desc: "Explicitly avoid #1 ranking guarantees and treat organic growth as an iterative, disciplined SEO/optimization effort."
  },
];

const GLOBAL_SEARCH_INTENT_CLUSTERS = [
  {
    title: "Commercial & Vendor Intent",
    description: "Seize the buyers who are actively shopping for agencies or niche SEO vendors.",
    terms: ["SEO services", "SEO agency", "SEO company", "technical SEO services", "digital marketing agency"],
    badge: "High Conversion Alignment",
  },
  {
    title: "Technical & Audit Intent",
    description: "Target firms in need of an urgent site diagnosis or migration remediation.",
    terms: ["website SEO audit", "technical SEO audit", "Core Web Vitals optimization", "indexation recovery"],
    badge: "Diagnostic Health",
  },
  {
    title: "Informational & Authority Intent",
    description: "Connect B2B decision makers who are looking for educational clarity and strategic frameworks.",
    terms: ["SEO content strategy", "search intent mapping", "topical cluster architecture", "B2B SaaS SEO"],
    badge: "Topical Leadership",
  },
  {
    title: "Geographic & Global Intent",
    description: "Reach location buyers and international cross-border expansion markets.",
    terms: ["local SEO services", "international SEO services", "multilingual SEO", "global SEO agency"],
    badge: "Multi-Market Reach",
  },
];

const REGIONAL_COVERAGE_MARKETS = [
  { region: "North America", highlight: "USA & Canada", desc: "Commercial intent & enterprise SaaS organic acquisition" },
  { region: "Europe & UK", highlight: "UK & EU Markets", desc: "GDPR-compliant technical architecture & multi-language SEO" },
  { region: "Australia & APAC", highlight: "Australia & Asia", desc: "High-growth regional search intent & service page dominance" },
  { region: "Global Expansion", highlight: "Cross-Border Brands", desc: "Multi-region hreflang mapping and international authority" },
];

const INTERNAL_LINKS = [
  { url: "/services/web-development", anchor: "SEO-friendly web development", purpose: "Connect technical SEO and engineering" },
  { url: "/services/web-design", anchor: "conversion-focused web design", purpose: "Connect UX and conversion" },
  { url: "/services/ui-ux-design", anchor: "UI/UX design services", purpose: "Connect user experience and CRO" },
  { url: "/services/mobile-app-development", anchor: "mobile app development", purpose: "Support mobile product ecosystem" },
];

function RealisticHeroMockup() {
  return (
    <div className="relative w-full rounded-2xl border border-brand-cyan/40 bg-[#070D1B] backdrop-blur-xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(0,198,255,0.2)] overflow-hidden group">
      {/* Top Browser Console Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-[#0B152B] rounded-t-xl">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#050914] border border-white/10 text-[11px] font-mono text-slate-300 w-full max-w-xs mx-auto">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">https://nexoviodigitalsolutions.com/services/seo-digital-marketing</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <Activity className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-12 gap-3 p-3 bg-[#050914] rounded-b-xl min-h-[340px]">
        {/* SERP & Organic Growth Panel */}
        <div className="col-span-12 sm:col-span-7 bg-[#091224] rounded-xl border border-white/10 p-3.5 text-left font-mono text-[11px] space-y-3 text-slate-300 shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-slate-400 pb-2 border-b border-white/10">
            <span className="text-brand-cyan flex items-center gap-1.5 font-bold">
              <Search className="w-3.5 h-3.5" /> Search Console Console
            </span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Live Organic Growth
            </span>
          </div>

          {/* Simulated Google Search Result */}
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] text-slate-400 block font-sans">www.nexoviodigitalsolutions.com › services › seo-digital-marketing</span>
            <span className="text-xs font-bold text-sky-400 font-sans block hover:underline">
              SEO &amp; Digital Marketing Services | Sustainable Growth
            </span>
            <p className="text-[10px] text-slate-300 font-sans leading-normal">
              Technical SEO, search-intent content optimization, local/global SEO and GA4 conversion tracking for qualified organic leads...
            </p>
          </div>

          <div className="space-y-1 pt-1 leading-relaxed text-[10px]">
            <div className="flex justify-between items-center text-slate-300">
              <span>Target Query: "SEO Services"</span>
              <span className="text-emerald-400 font-bold">Rank #1 Google</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Technical Health Score</span>
              <span className="text-brand-cyan font-bold">100 / 100 Indexing</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>GA4 Event Conversions</span>
              <span className="text-purple-300 font-bold">+184% Qualified Leads</span>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[10px] text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-bold">Search intent &amp; Core Vitals verified</span>
          </div>
        </div>

        {/* Analytics & Conversion Rate Panel */}
        <div className="col-span-12 sm:col-span-5 bg-gradient-to-br from-[#0c1834] to-[#081022] rounded-xl border border-brand-cyan/30 p-3.5 text-left flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-brand-cyan uppercase font-bold tracking-wider">
                GA4 / GTM Analytics
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-300 font-sans">Organic Pipeline</span>
                <span className="text-emerald-400 font-bold font-mono">+135k/mo</span>
              </div>
              <div className="w-full h-2 rounded bg-brand-cyan/30 overflow-hidden">
                <div className="w-4/5 h-full bg-gradient-to-r from-brand-cyan to-emerald-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">CRO Rate</span>
                <span className="text-xs font-bold text-emerald-400">4.8% Conv</span>
              </div>
              <div className="p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">Crawl Speed</span>
                <span className="text-xs font-bold text-brand-cyan">0.02s Latency</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-300">
            <span>Tracking Layer</span>
            <span className="text-brand-cyan font-semibold">GA4 + GTM Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealisticServiceMockup({ previewType }: { previewType: string }) {
  if (previewType === "technical") {
    return (
      <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0a152e] to-[#050b18] border border-brand-cyan/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] font-mono text-brand-cyan">Technical SEO &amp; JSON-LD</span>
        </div>
        <div className="space-y-2 my-auto">
          <div className="h-3 w-3/4 rounded bg-gradient-to-r from-brand-cyan to-brand-bright" />
          <div className="h-2 w-full rounded bg-white/20" />
          <div className="flex gap-2 pt-1">
            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">Canonical URLs</span>
            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">XML Sitemap</span>
          </div>
        </div>
      </div>
    );
  }

  if (previewType === "audit") {
    return (
      <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0c1834] to-[#081022] border border-blue-500/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono text-blue-400 font-bold flex items-center gap-1">
            <Search className="w-3 h-3" /> SEO Audit &amp; Recovery
          </span>
          <span className="text-[9px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Health Check</span>
        </div>
        <div className="grid grid-cols-12 gap-2 my-auto text-left text-[10px]">
          <div className="col-span-4 bg-white/5 p-2 rounded border border-white/10 space-y-1">
            <span className="text-[9px] font-bold text-slate-300 block">Index Status</span>
            <div className="h-1.5 w-full bg-blue-400/40 rounded" />
          </div>
          <div className="col-span-8 bg-white/5 p-2 rounded border border-white/10 space-y-1.5">
            <span className="text-[9px] font-bold text-emerald-400 block">Lost Ranking Recovery</span>
            <div className="h-1.5 w-full bg-white/25 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (previewType === "keywords") {
    return (
      <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#071328] to-[#030814] border border-cyan-400/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono text-cyan-400 font-bold flex items-center gap-1">
            <Target className="w-3 h-3" /> Commercial Intent Matrix
          </span>
          <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">High Relevance</span>
        </div>
        <div className="space-y-2 my-auto font-mono text-[10px]">
          <div className="p-2 rounded bg-black/40 border border-cyan-400/20 text-slate-300">
            Query: <span className="text-cyan-400">"SEO Services Agency"</span> (High Commercial Intent)
          </div>
          <div className="flex items-center justify-between text-[9px] text-slate-400">
            <span>Search Intent Mapped</span>
            <span className="text-emerald-400 font-bold">100% Page Match</span>
          </div>
        </div>
      </div>
    );
  }

  // Default / Other previews
  return (
    <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#061022] to-[#02050c] border border-purple-500/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <span className="text-[10px] font-mono text-purple-400 font-bold flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> Organic Growth Engine
        </span>
        <span className="text-[9px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">GA4 / GTM</span>
      </div>
      <div className="flex items-center justify-between my-auto px-2 text-[10px] font-mono text-slate-300">
        <span className="p-1.5 bg-brand-cyan/20 rounded border border-brand-cyan/30 text-brand-cyan font-bold">Search Query</span>
        <ArrowRight className="w-3 h-3 text-slate-500" />
        <span className="p-1.5 bg-emerald-500/20 rounded border border-emerald-500/30 text-emerald-400 font-bold">Optimized Page</span>
        <ArrowRight className="w-3 h-3 text-slate-500" />
        <span className="p-1.5 bg-purple-500/20 rounded border border-purple-500/30 text-purple-300 font-bold">Lead Action</span>
      </div>
    </div>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function SeoDigitalMarketingPage() {
  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "DigitalMarketingServices",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "SEO & Digital Marketing", url: `/services/${service.slug}` },
  ]);

  const faqSchema = getFaqSchema(service.faqs);

  const orgSchema = getOrganizationSchema();

  return (
    <div className="bg-background overflow-x-clip">
      {/* RICH MULTI-SCHEMA JSON-LD FOR GLOBAL & INTERNATIONAL SEO VISIBILITY */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* 1. HERO BANNER SECTION */}
      <section className="pt-24 sm:pt-28 pb-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", url: "/services" },
              { name: "SEO & Digital Marketing", url: `/services/${service.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-4">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright" />
                <span>GLOBAL SEO &amp; DIGITAL MARKETING SERVICES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight !leading-[1.14]">
                Sustainable Organic Growth with{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  SEO & Digital Marketing Services
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                <p className="font-medium text-md text-slate-900 dark:text-white">
                  Be discoverable by those who are looking for the services that you offer. With Nexovio, we seamlessly integrate technical SEO, search-focused content, on-page optimization, CRO, and analytics to convert organic traffic into actual business leads.
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  We don’t just look at rankings, we look at what your website and customers need in real life. Whether it's technical errors, content gaps, user experience or conversions, we prioritise enhancements which facilitate long term, organic growth.
                </p>
              </div>

              {/* 6 Commercial Keyword Badges in 3-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                {[
                  { name: "Technical SEO & Audits", icon: Code2 },
                  { name: "Keyword Research & Intent", icon: Target },
                  { name: "On-Page Optimization", icon: FileCode },
                  { name: "Local & Global SEO", icon: Globe },
                  { name: "Conversion Optimization", icon: MousePointerClick },
                  { name: "GA4 & GTM Analytics", icon: PieChart },
                ].map((badge) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <div
                      key={badge.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs hover:border-brand-cyan/40 transition-colors"
                    >
                      <BadgeIcon className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span className="truncate">{badge.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  trackingName="seo_start_growth_strategy"
                  trackingLocation="service_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow"
                >
                  Start Your SEO Growth Strategy
                </Button>
              </div>
            </div>

            {/* Right Side Visual Banner (1:1 with Web Development design) */}
            <div className="lg:col-span-6 relative flex items-center justify-center h-full">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[400px] sm:h-[460px] lg:h-[520px] w-full">
                  <Image
                    src="/images/services/seo-digital-marketing-services-banner.webp"
                    alt="SEO and digital marketing team driving organic traffic and business growth"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/80 via-transparent to-transparent pointer-events-none rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Side Strategy Graphic Image (Sticky on Top during Scroll) */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-10 blur-2xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#071024] p-2 sm:p-2.5 shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[360px] sm:h-[440px] lg:h-[500px] w-full">
                  <Image
                    src="/images/services/seo-digital-marketing-services.webp"
                    alt="SEO and digital marketing strategy dashboard by Nexovio Digital Solutions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/25 via-transparent to-transparent pointer-events-none rounded-xl" />
                </div>
              </div>
            </div>

            {/* Right Side Value Proposition Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                VALUE PROPOSITION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Turn <span className="bg-gradient-brand bg-clip-text text-transparent">Search Visibility</span> Into a Better Customer Journey
              </h2>
              <div className="space-y-4 text-base text-muted leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  SEO is at its most powerful when the technical foundations, quality content and the website experience work together. A page can rank but be a commercial failure if the intent is wrong, the content is confusing or the next action is hard.
                </p>
                <p>
                  Our SEO and digital marketing services are built to bring these pieces together.
                </p>
              </div>

              {/* 6 Value Proposition Pillars */}
              <div className="space-y-3 pt-2">
                {VALUE_PROPOSITION_PILLARS.map((vp) => (
                  <div key={vp.title} className="flex items-start gap-3 p-3 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22]">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white">{vp.title}</h3>
                      <p className="text-xs text-muted leading-relaxed mt-0.5">{vp.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Humanized Positioning Note Callout */}
              <div className="p-4 rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 space-y-1 text-xs">
                <span className="font-bold text-brand-cyan block uppercase tracking-wider">
                  HUMANIZED POSITIONING
                </span>
                <p className="text-slate-800 dark:text-slate-200 italic">
                  Instead of relying on generic promises, we clearly define what gets optimized, why it matters, and how performance will be measured against your actual business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR CORE SERVICES"
            title="SEO &amp; Digital Marketing"
            highlightText="Services"
            description="Solutions for your growth goals: Commercial, technical, content, authority, local, global, conversion optimization."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {CORE_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Card
                  key={srv.title}
                  className="flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Visual Realistic Preview Graphic */}
                    <RealisticServiceMockup previewType={srv.previewType} />

                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                          Service 0{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors h-[56px] overflow-hidden">
                          {srv.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Keyword Focus:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {srv.keywordFocus.map((kw) => (
                          <span
                            key={kw}
                            className="px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {srv.note && (
                      <p className="text-[11px] text-amber-500 italic bg-amber-500/10 p-2 rounded border border-amber-500/20">
                        {srv.note}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-6">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-cyan block mb-1">
                      Best for:
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {srv.bestFor}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DIGITAL MARKETING THAT WORKS WITH YOUR SEO STRATEGY (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CONNECTED DIGITAL SYSTEM"
            title="Digital Marketing That Complements"
            highlightText="Your SEO Strategy"
            description="Search is a component of a system that powers digital growth. The content you create, the campaigns you run, the experience users have on your landing pages, and the data you gather all impact how well your digital presence converts attention into demand."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {DIGITAL_MARKETING_FOCUS.map((dm) => {
              const Icon = dm.icon;
              return (
                <div
                  key={dm.title}
                  className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] space-y-3 shadow-sm hover:border-brand-cyan/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {dm.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {dm.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Full-Width Integrated Philosophy Banner Below Cards */}
          <div className="mt-8 p-6 sm:p-7 rounded-2xl border border-brand-cyan/30 bg-gradient-to-r from-brand-cyan/15 via-brand-cyan/10 to-surface-elevated text-center max-w-4xl mx-auto shadow-sm space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-brand-cyan tracking-wider block">
              PHILOSOPHICALLY COHESIVE
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              One Approach, Not Five Separate Strategies
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto">
              A content keyword plan should be informed by content. Content should take you to useful landing pages. Landing pages need to back up conversions. Decisions analytics should tell us what happened next. Holding these decisions together makes the system of marketing easier to manage and improve.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SEO THAT MAKES THE WEBSITE EASIER TO CRAWL AND UNDERSTAND (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INFRASTRUCTURE LAYER"
            title="Technical SEO Improvements to Make Your Site"
            highlightText="Easier to Crawl and Understand"
            description="Technical SEO is the foundation of organic search. Nexovio currently has them define the work related to crawl errors, site structure, XML sitemaps, JSON-LD structured data, canonicalization and Core Web Vitals."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 mt-12 mb-8">
            {TECHNICAL_SEO_CHECKLIST.map((item) => (
              <div
                key={item}
                className="p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50/60 dark:bg-[#071226] flex items-center gap-2.5 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-surface-elevated text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-brand-bright uppercase tracking-wider block mb-1">
              TECHNICAL SEO PRINCIPLE
            </span>
            <p className="text-xs sm:text-sm text-muted italic">
              Technical SEO must enhance your content and user experience rather than exist as its own checklist. Each fix should answer one real question: can search engines find, know, and use this page well?
            </p>
          </div>
        </div>
      </section>

      {/* 6. SEO CONTENT THAT SOUNDS LIKE A HUMAN WROTE IT (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TOPICAL AUTHORITY &amp; COPYWRITING"
            title="SEO Content That Sounds"
            highlightText="Like a Human Wrote It"
            description="High ranking content is not necessarily useful content. For a professional service business, the copy needs to clarify the problem, show command of the subject matter, address commercial questions and provide the reader with enough confidence to act."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
            {/* Left 6 Principles (7 Columns) */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 dark:border-white/10">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-cyan" />
                  Core Editorial Principles
                </h3>
                <span className="text-[11px] font-mono text-brand-cyan uppercase font-semibold">6 Quality Benchmarks</span>
              </div>

              {HUMANIZED_CONTENT_RULES.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] flex items-start gap-3.5 shadow-xs hover:border-brand-cyan/40 transition-colors group"
                >
                  <div className="w-6 h-6 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan font-mono text-xs font-bold shrink-0 mt-0.5 group-hover:bg-brand-cyan group-hover:text-black transition-colors">
                    0{idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{rule}</span>
                </div>
              ))}
            </div>

            {/* Right Editorial Topics Card (5 Columns, Hug Content & Premium Bottom Callout) */}
            <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] space-y-4 shadow-sm h-fit">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Recommended Editorial Topics</h3>
                  <span className="text-[11px] text-muted block">Topical Depth &amp; Intent Framework</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {EDITORIAL_TOPICS.map((topic) => (
                  <div key={topic} className="p-2.5 rounded-lg border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#040A18] flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-200 hover:border-brand-cyan/30 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    <span className="font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL & INTERNATIONAL SEO (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GLOBAL SEARCH EXPANSION"
            title="SEO for Businesses"
            highlightText="Targeting Multiple Markets"
            description="When you are doing global SEO, it is not just putting a city or a country name into a page. For businesses that are looking to expand into multiple markets, they need to realize that there are differences in search behavior, language, terminology, relevant content and site structure."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {GLOBAL_SEO_PILLARS.map((pillar) => (
              <div
                key={pillar}
                className="p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#071226] space-y-2 shadow-xs"
              >
                <div className="flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-white leading-relaxed">{pillar}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Full-Width International Architecture Callout Banner Below Cards */}
          <div className="mt-8 p-6 sm:p-7 rounded-2xl border border-brand-cyan/30 bg-gradient-to-r from-brand-cyan/15 via-brand-cyan/10 to-surface-elevated text-center max-w-4xl mx-auto shadow-sm space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-brand-cyan tracking-wider block">
              WORLD CLASS ARCHITECTURE
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Global Scale & Localization Protocol
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto">
              With international SEO your site architecture, hreflang signals, and localized content are all aligned so expanding your brand across borders means its scale is seamlessly executed in new global markets.</p>
          </div>
        </div>
      </section>

      {/* 8. CRO & ANALYTICS: FROM TRAFFIC TO MEASURABLE ACTIONS (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CRO &amp; ANALYTICS"
            title="Tracking Organic Traffic"
            highlightText="All the Way to Business Actions"
            description="Traffic is only valuable when it leads to a meaningful business goal. Nexovio talks CRO as reducing user friction, testing CTA placement, simplifying forms and tweaking copy, setting up GA4/GTM around custom events."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 mb-8">
            {MEASUREMENT_LAYERS.map((ml) => (
              <div
                key={ml.layer}
                className="p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] space-y-2 shadow-sm"
              >
                <span className="text-xs font-mono font-bold text-brand-cyan uppercase block">
                  {ml.layer} Layer
                </span>
                <p className="text-xs text-muted leading-relaxed">
                  {ml.metrics}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl border border-brand-cyan/30 bg-surface-elevated text-center max-w-3xl mx-auto">
            <h3 className="text-sm font-bold text-white mb-1">Make Reporting Easier to Act On</h3>
            <p className="text-xs text-muted leading-relaxed">
              A good SEO report shouldn’t require a client to draw conclusions from 20 different, unrelated graphs. It needs to answer three things: <span className="text-brand-cyan font-semibold">what changed, why it matters and what to do next</span>.</p>
          </div>
        </div>
      </section>

      {/* 9. OUR PROCESS (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR METHODOLOGY"
            title="Our SEO &amp; Digital Marketing"
            highlightText="Process"
            description="A 6-step roadmap: audit, intent research, technical fixes, implementation, track, and iterate."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PROCESS_STEPS_FULL.map((pst) => (
              <Card
                key={pst.step}
                className="bg-slate-50/50 dark:bg-[#071328] p-6 border-slate-200/90 dark:border-white/10 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                    Stage {pst.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pst.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {pst.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INDUSTRY RELEVANCE (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INDUSTRY RELEVANCE"
            title="SEO Tactics with Respect to"
            highlightText="Human Search Behaviors"
            description="SEO isn’t the same for every industry. The search process for a SaaS customer is not the same as it is for a local healthcare provider, e-commerce brand or professional services company."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <Card
                  key={ind.title}
                  className="bg-white dark:bg-[#071328] p-6 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/40 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {ind.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. BRAND POSITIONING: WHY NEXOVIO (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY CHOOSE US"
            title="Why Nexovio Should Be Your Top"
            highlightText="SEO & Digital Marketing Partner?"
            description="Integrated engineering, humanized content, and intent-first strategy with no generic package limitations."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {BRAND_POSITIONING_REASONS.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#071226] space-y-2 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. GLOBAL SEARCH INTELLIGENCE & INTENT ARCHITECTURE (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GLOBAL SEARCH INTELLIGENCE"
            title="Global Search Strategy &"
            highlightText="Target Intent Architecture"
            description="We investigate actual customer search behavior in North America, Europe, Europe, Australia, and APAC to align technical architecture, content roadmaps, and conversion funnels with ready-to-buy decision-makers."
            align="center"
          />

          {/* Search Intent Classification Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {GLOBAL_SEARCH_INTENT_CLUSTERS.map((cluster) => (
              <div
                key={cluster.title}
                className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] space-y-4 shadow-sm hover:border-brand-cyan/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-cyan shrink-0" />
                    {cluster.title}
                  </h3>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    {cluster.badge}
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {cluster.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-white/10">
                  {cluster.terms.map((term) => (
                    <span
                      key={term}
                      className="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-100 dark:bg-[#040A18] text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Regional Market Coverage Cards */}
          <div className="mt-12 bg-white dark:bg-[#071226] rounded-2xl border border-slate-200/90 dark:border-white/10 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-brand-cyan" />
              Worldwide Search Market Reach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {REGIONAL_COVERAGE_MARKETS.map((m) => (
                <div key={m.region} className="p-4 rounded-xl border border-slate-100 dark:border-white/10 bg-slate-50/60 dark:bg-[#040A18] space-y-1">
                  <span className="text-xs font-bold text-brand-cyan block font-mono">{m.highlight}</span>
                  <span className="text-[11px] text-slate-800 dark:text-slate-200 font-semibold block">{m.region}</span>
                  <p className="text-[11px] text-muted leading-tight">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 text-xs text-slate-800 dark:text-slate-200 italic mt-4">
              <strong>COMMERCIAL INTENT FIRST:</strong> High search volume alone does not drive business value. Broad terms often attract unqualified traffic. We combine strategic high-value search terms with commercially specific conversion funnels to ensure your organic growth generates qualified leads.
            </div>
          </div>
        </div>
      </section>

      {/* 13. ENGINEERED QUALITY STANDARD & CONNECTED ECOSYSTEM (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ENGINEERED EXCELLENCE"
            title="Technical Engineering Standards &amp;"
            highlightText="Connected Ecosystem"
            description="How we integrate technical SEO precision into your website architecture, content hierarchy, and connected digital solutions."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
            {/* Technical Engineering Quality Standards - 4 Visual Feature Cards */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#071226] space-y-6 shadow-sm">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200/80 dark:border-white/10">
                <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Technical Engineering Quality Standards
                  </h3>
                  <span className="text-[11px] text-muted">Core Web Vitals &amp; Search Architecture Protocol</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#040A18] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-brand-cyan font-semibold text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Architectural Indexing</span>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed">
                    Single H1 hierarchy, clean XML sitemaps, and optimized crawl budget efficiency for fast Google indexing.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#040A18] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-brand-cyan font-semibold text-xs">
                    <Code2 className="w-4 h-4 shrink-0" />
                    <span>Semantic HTML5</span>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed">
                    Logical H1–H3 heading hierarchy and accessible semantic markup for search parsers and screen readers.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#040A18] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-brand-cyan font-semibold text-xs">
                    <FileCode className="w-4 h-4 shrink-0" />
                    <span>Structured Data Schema</span>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed">
                    Rich JSON-LD markup (Service, FAQPage, Breadcrumbs, Organization) for enhanced Google SERP rich snippets.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#040A18] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-brand-cyan font-semibold text-xs">
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>Core Web Vitals Speed</span>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed">
                    Asset optimization, sub-second TTFB, and fluid responsive mobile viewport benchmarks across all devices.
                  </p>
                </div>
              </div>
            </div>

            {/* Connected Solution Ecosystem Links - Interactive Card Grid */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#071226] space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200/80 dark:border-white/10">
                <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Boxes className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Integrated Digital Solution Ecosystem
                  </h3>
                  <span className="text-[11px] text-muted">Cross-Service Capability Alignment</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {INTERNAL_LINKS.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    className="group p-3 rounded-xl bg-white dark:bg-[#040A18] border border-slate-200/80 dark:border-white/10 hover:border-brand-cyan/50 dark:hover:border-brand-cyan/50 flex items-center justify-between transition-all duration-300 shadow-xs hover:shadow-md"
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors block">
                        {link.anchor}
                      </span>
                      <span className="text-[11px] text-muted block">{link.purpose}</span>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 group-hover:bg-brand-cyan group-hover:text-black flex items-center justify-center text-brand-cyan transition-all shrink-0 ml-3">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FREQUENTLY ASKED QUESTIONS */}
      <FaqSection faqs={service.faqs} />
    </div>
  );
}
