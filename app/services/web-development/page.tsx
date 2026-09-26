import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
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
  ChevronRight,
  Briefcase,
  GraduationCap,
  Home,
  Utensils,
  Stethoscope,
  PenTool,
  Lock,
  Workflow,
  CheckSquare,
  Shield,
  Gauge,
  Sliders,
  Radio,
  FileCode,
  Terminal,
  Activity,
  Maximize2,
  RefreshCw,
  ExternalLink,
  Layers3,
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

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Web Development Services | Custom Websites & E-commerce | Nexovio",
    description:
      "Professional web development services for custom websites, e-commerce and web apps. We use WordPress, React/Next.js and headless CMS to build fast, secure, scalable online platforms.",
    keywords: [
      "web development services",
      "custom web apps",
      "React JS developer",
      "WordPress development",
      "ecommerce solutions",
      "custom website development",
      "Next.js development",
      "API integration services",
    ],
    path: "/services/web-development",
  }),
  title: "Web Development Services | Websites, E-commerce & Web Apps | Nexovio",
};

// ==========================================
// DATA STRUCTURES FOR WEB DEV PAGE
// ==========================================

const CORE_SERVICES = [
  {
    id: "custom-website",
    icon: Globe,
    title: "Custom Website Development",
    tagline: "Tailored Architecture & Brand Journeys",
    description:
      "Build a site tailored to your brand, audience and business objectives with specific features and functionality.",
    controls: [
      "Website architecture",
      "Page layouts",
      "User journeys",
      "Brand experience",
      "Custom functionality",
      "Forms and lead generation",
      "Third-party integrations",
      "Performance",
      "SEO structure",
      "Future expansion",
    ],
    note: "From corporate websites and startup websites to professional service websites and technology company websites, we build custom experiences around your requirements.",
    bestFor:
      "Companies, startups, agencies, professional services, technology firms, and expanding brands.",
    previewType: "custom",
  },
  {
    id: "wordpress",
    icon: Code2,
    title: "WordPress Development",
    tagline: "Flexible CMS With High-Speed Execution",
    description:
      "Construct a website professional enough for your team to manage and update effortlessly. We design and build WordPress websites for organizations, companies and small businesses who require a flexible content management system (CMS) without sacrificing design, functionality or speed.",
    capabilities: [
      "Custom WordPress websites",
      "Custom theme development",
      "Theme customization",
      "Plugin integration",
      "Custom functionality",
      "Business websites",
      "Blog and content platforms",
      "Landing pages",
      "WooCommerce websites",
      "WordPress migrations",
      "Performance optimization",
      "Security-focused development",
    ],
    bestFor:
      "Businesses, websites that are driven by content, agencies, service companies, publishers, and organizations looking for simple content management. ",
    previewType: "wordpress",
  },
  {
    id: "react-next",
    icon: Cpu,
    title: "React & Next.js Development",
    tagline: "Sub-Second Speed & Modern Frontend Architecture",
    description:
      "Build modern, fast, and scalable web experiences with React & Next.js. We leverage modern frontend tech including React to deliver solutions that involve interactive interfaces, flexible architectures, and high performance for websites and digital products.",
    supports: [
      "Business websites",
      "Startup websites",
      "SaaS websites",
      "Product platforms",
      "Customer portals",
      "Interactive interfaces",
      "Dashboards",
      "Data-driven experiences",
      "API-connected applications",
      "Custom frontend systems",
    ],
    note: "We can structure React and Next.js projects around responsive design, reusable components, SEO requirements, performance, and future feature development.",
    bestFor:
      "Startups, SaaS companies, tech organisations, sites & custom digital products requiring high performance.",
    previewType: "react",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce Development",
    tagline: "Frictionless Shopping & Conversion Funnels",
    description:
      "Build an online store to help customers find products, compare options, buy them, and come back to your brand.",
    customerJourney: [
      "Discover",
      "Explore",
      "Product",
      "Cart",
      "Checkout",
      "Purchase",
      "Retention",
    ],
    features: [
      "Product catalogs",
      "Categories",
      "Product variations",
      "Search",
      "Filters",
      "Shopping carts",
      "Checkout",
      "Payment gateway integration",
      "Customer accounts",
      "Order management",
      "Coupons and promotions",
      "Reviews",
      "Shipping integrations",
      "Analytics",
      "Marketing integrations",
    ],
    note: "We also focus on mobile shopping experiences, product discoverability, performance, and technical SEO.",
    bestFor:
      "E-commerce brands, D2C businesses, retailers, manufacturers, product companies, businesses moving online with sales.",
    previewType: "ecommerce",
  },
  {
    id: "web-app",
    icon: Layers,
    title: "Web Application Development",
    tagline: "Functional Platforms & Digital Workflows",
    description:
      "Convert business operations, thoughts, and workflow into working web apps. A standard website just conveys information. With a web application, users can take action, manage data, interact with systems, and follow processes.",
    solutions: [
      "Customer portals",
      "Admin dashboards",
      "Business platforms",
      "Booking platforms",
      "Membership systems",
      "Internal tools",
      "Workflow applications",
      "Marketplaces",
      "SaaS platforms",
      "Reporting dashboards",
      "Data-driven applications",
      "Custom management systems",
    ],
    note: "We design application functionality around your users, roles, workflows, data, and business requirements.",
    bestFor:
      "startup, SaaS company, service business, organization with complex workflows, or a business looking to tell its manual processes.",
    previewType: "webapp",
  },
  {
    id: "api-integration",
    icon: Boxes,
    title: "API Development & Integration",
    tagline: "Automated Data Movement & Connected Ecosystems",
    description:
      "Connect your website, application, and business tools for automatic information flow between systems. We create and integrate APIs that enable various platforms to communicate and share data.",
    examples: [
      "CRM integrations",
      "Payment gateways",
      "Marketing platforms",
      "Analytics systems",
      "E-commerce platforms",
      "Authentication services",
      "Communication tools",
      "Booking systems",
      "Business applications",
      "Third-party APIs",
      "Custom internal systems",
    ],
    workflow: [
      "Website Form",
      "API",
      "CRM",
      "Team Notification",
      "Sales Follow-up",
    ],
    note: "Instead of keeping business systems disconnected, integrations can create more connected digital workflows.",
    bestFor:
      "Automation, connected digital systems, third-party software workflows, and custom enterprise tools.",
    previewType: "api",
  },
];

const APPROACH_PILLARS = [
  "Strategy",
  "UI/UX",
  "Development",
  "Performance",
  "SEO",
  "Integrations",
  "Testing",
];

const IDEA_TO_EXPERIENCE_PHASES = [
  {
    title: "We Start With Your Business Requirements",
    subtitle: "We analyze your goals before we start the development.",
    items: [
      "Your business model",
      "Target audience",
      "Website goals",
      "Services or products",
      "Customer journey",
      "Required functionality",
      "Content",
      "Integrations",
      "Technology requirements",
      "SEO requirements",
      "Future plans",
    ],
    footerNote: "This helps us determine the right development approach for your project.",
  },
  {
    title: "Strategy & Website Architecture",
    subtitle: "A well built website should be like a well structured book.",
    items: [
      "Sitemap",
      "Navigation",
      "Page hierarchy",
      "Content structure",
      "User journeys",
      "Conversion paths",
      "Internal linking",
      "Technical requirements",
    ],
    footerNote: "The result is a website architecture that is easier for both users and search engines to understand.",
  },
  {
    title: "UI/UX Designed Before Development",
    subtitle: "Development shouldn’t start with isolated screens and features.",
    items: [
      "User behavior",
      "Navigation",
      "Information hierarchy",
      "Mobile experience",
      "CTA placement",
      "Forms",
      "Interactions",
      "Accessibility considerations",
      "Brand identity",
    ],
    footerNote: "The goal is to create an interface that looks good while remaining easy to use.",
  },
];

const STACK_LAYERS = [
  {
    name: "Frontend Development",
    desc: "We offer responsive design solutions that incorporate the latest standards of HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS. The technology is chosen for your project needs, not to squeeze every project into the same stack.",
    pills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    desc: "If your project demands server-side processes, such as databases, authentication, business logic or customized workflows, we can develop the necessary backend infrastructure with the right technology.",
    supports: [
      "User accounts",
      "Authentication",
      "Data processing",
      "Business logic",
      "Admin functionality",
      "API communication",
      "Database operations",
      "Custom workflows",
    ],
  },
  {
    name: "CMS Development",
    desc: "For businesses that need to regularly update their website content, we can implement a content management solution.",
    updates: [
      "Pages",
      "Services",
      "Blog posts",
      "Images",
      "Products",
      "FAQs",
      "Case studies",
      "Marketing content",
    ],
  },
];

const RESPONSIVE_FEATURES = [
  "Clear navigation",
  "Readable content",
  "Usable forms",
  "Appropriate spacing",
  "Touch-friendly interactions",
  "Optimized images",
  "Consistent branding",
  "Smooth user journeys",
];

const SEO_PILLARS = [
  {
    title: "Search-Friendly Architecture",
    description: "Logical page structures and URLs make your website easy to navigate and interpret.",
  },
  {
    title: "Semantic HTML",
    description: "Correct HTML structures help convey the meaning and hierarchy of your content.",
  },
  {
    title: "Heading Structure",
    description: "Clear H1, H2, and H3 relationships help organize key information.",
  },
  {
    title: "Metadata",
    description: "The website can expose page titles, meta descriptions, canonical URLs, and other SEO information.",
  },
  {
    title: "Internal Linking",
    description: "Relevant links between pages assist users in finding related content and contribute to a more organized site structure.",
  },
  {
    title: "Mobile Experience",
    description: "Responsive development supports users accessing your website through mobile devices.",
  },
  {
    title: "Performance",
    description: "Page speed and efficient resource delivery are considered during development.",
  },
  {
    title: "Crawlability",
    description: "We build websites in a way that important content and pages are easily crawlable by search engines.",
  },
];

const PERFORMANCE_AREAS = [
  "Image optimization",
  "Asset loading efficiency",
  "Code structure",
  "Caching opportunities",
  "Responsive images",
  "Font loading",
  "JavaScript efficiency",
  "Page rendering",
  "Remove unnecessary resources",
];

const CUSTOM_FEATURES = [
  {
    category: "Lead Generation",
    items: ["Contact forms", "Multi-step forms", "Quote requests", "Lead qualification", "Enquiry workflows"],
  },
  {
    category: "Customer Experience",
    items: ["Customer accounts", "Portals", "Bookings", "Appointments", "Personalized experiences"],
  },
  {
    category: "Business Operations",
    items: ["Dashboards", "Approval workflows", "Reporting", "Notifications", "Internal tools"],
  },
  {
    category: "E-commerce",
    items: ["Product catalogs", "Shopping carts", "Checkout", "Payments", "Orders", "Shipping"],
  },
  {
    category: "Interactive Experiences",
    items: ["Calculators", "Search", "Filters", "Maps", "Interactive content", "Dynamic interfaces"],
  },
];

const TOOL_INTEGRATIONS = [
  {
    name: "CRM",
    desc: "Capture and pass on customer enquiries.",
  },
  {
    name: "Payment Systems",
    desc: "Handle payments over the web.",
  },
  {
    name: "Analytics",
    desc: "Provide website and conversion data appropriate for analytics tools.",
  },
  {
    name: "Marketing Platforms",
    desc: "Integrate forms, campaigns, customer data, and marketing processes.",
  },
  {
    name: "Communication Tools",
    desc: "Integrate your notifications and customer communications.",
  },
  {
    name: "Business Applications",
    desc: "Share data between your website and your applications.",
  },
];
const SECURITY_CONSIDERATIONS = [
  "Secure authentication",
  "Authorization",
  "User permissions",
  "Input validation",
  "Secure API communication",
  "Form protection",
  "Dependency management",
  "Secure configuration",
  "Access controls",
  "Deployment security",
];

const FUTURE_EXPANSIONS = [
  "New services",
  "New locations",
  "New landing pages",
  "Additional content",
  "Customer accounts",
  "E-commerce functionality",
  "New integrations",
  "Custom dashboards",
  "Additional languages",
  "Marketing automation",
  "New business workflows",
];

const INDUSTRIES = [
  {
    title: "E-commerce & Retail",
    desc: "eCommerce stores, product catalogs, shopping experiences, payment systems, and integrations.",
    icon: ShoppingBag,
  },
  {
    title: "Startups",
    desc: "Launch-ready websites, product experiences, landing pages and scalable technical foundations.",
    icon: Rocket,
  },
  {
    title: "SaaS & Technology",
    desc: "Product websites, dashboards, customer portals, interactive experiences, and application interfaces.",
    icon: Cpu,
  },
  {
    title: "Professional Services",
    desc: "Websites that communicate knowledge, services, trust and opportunity to enquire.",
    icon: Briefcase,
  },
  {
    title: "Healthcare",
    desc: "Content-heavy websites, booking experiences, service pages, and appropriate integrations dependent on requirements.",
    icon: Stethoscope,
  },
  {
    title: "Education",
    desc: "Institutional sites, course information, enquiry systems, content platforms, and portals.",
    icon: GraduationCap,
  },
  {
    title: "Real Estate",
    desc: "Property-based websites, listings, search/filter experiences, enquiry forms, and integrations.",
    icon: Home,
  },
  {
    title: "Hospitality",
    desc: "Hotel & hospitality site with service detail, booking processes, location information, and integration.",
    icon: Globe,
  },
  {
    title: "Restaurants & Food Businesses",
    desc: "Menus, locations, reservations, ordering experiences, promotions, and customer engagement features.",
    icon: Utensils,
  },
  {
    title: "Agencies & Creative Businesses",
    desc: "Portfolio-focused websites, case studies, service pages, lead-generation experiences and interactive presentations.",
    icon: PenTool,
  },
];

const PROCESS_STEPS_FULL = [
  {
    step: "01",
    title: "Discovery",
    desc: "We know your industry, target market, goals, needs, current systems, and what you’re looking for.",
  },
  {
    step: "02",
    title: "Planning",
    desc: "We establish the sitemap, functionality, technology approach, integrations, content type and project size.",
  },
  {
    step: "03",
    title: "UX & UI",
    desc: "We design the user experience, wireframes, page layouts, elements, responsive features and style guide.",
  },
  {
    step: "04",
    title: "Development",
    desc: "Our development team develops the site with all the functionality and requirements, including the integration of the necessary back end systems."
  },
  {
    step: "05",
    title: "Content & SEO Implementation",
    desc: "We add content models, metadata, internal links, images, forms, tracking needs and tech nic al SEO foundations."
  },
  {
    step: "06",
    title: "Testing & Quality Assurance",
    desc: "We navigate, fill out forms, click links, test responsive design, test cross browser, test functionality, integrations, test performance, and hit key user experiences."
  },
  {
    step: "07",
    title: "Deployment",
    desc: "We set up the production environment, upload the site, and conduct final inspections."
  },
  {
    step: "08",
    title: "Launch",
    desc: "Your website will be live once we’ve done the necessary checks and you’ve given us the thumbs up."
  },
  {
    step: "09",
    title: "Ongoing Improvement",
    desc: "After the launch, we can though continue to support new capabilities, content, performance enhancements, SEO work, integration and either technical or content updates."
  },
];

const TECH_CATEGORIES_GRID = [
  {
    title: "Frontend",
    icon: Layout,
    items: "React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS",
  },
  {
    title: "CMS",
    icon: Globe,
    items: "WordPress and other appropriate content management solutions",
  },
  {
    title: "Backend",
    icon: Server,
    items: "Node.js and other backend technologies as required by the project",
  },
  {
    title: "Databases",
    icon: Database,
    items: "Database technologies chosen based on the application's data, functionality, performance, and scalability needs",
  },
  {
    title: "APIs & Integrations",
    icon: Boxes,
    items: "REST APIs, third-party APIs, payment gateways, CRM systems, analytics, marketing platforms, authentication services, and business tools",
  },
];

const QUALITY_CHECKS = [
  {
    title: "Functional Testing",
    desc: "Forms, buttons, navigation, interactions, workflows, and core functionality.",
  },
  {
    title: "Responsive Testing",
    desc: "Desktop, tablet, and mobile layouts.",
  },
  {
    title: "Browser Testing",
    desc: "Relevant modern browsers and supported environments.",
  },
  {
    title: "Performance Review",
    desc: "Page loading, media, assets, and technical performance considerations.",
  },
  {
    title: "SEO Review",
    desc: "URLs, headings, metadata, internal links, indexing-related configuration, and other agreed SEO foundations.",
  },
  {
    title: "Integration Testing",
    desc: "APIs, forms, payment systems, analytics, CRM connections, and other integrations included in the project.",
  },
];

const WHY_NEXOVIO_REASONS = [
  {
    title: "Business Understanding",
    desc: "We build websites that work for your business, not just look pretty.",
  },
  {
    title: "Custom Approach",
    desc: "Your website structure and functionality are designed specifically for your needs.",
  },
  {
    title: "User-Focused Experience",
    desc: "We think about how customers browse, learn, and interact with content.",
  },
  {
    title: "Modern Development",
    desc: "We employ relevant modern technologies and development practices depending on the project.",
  },
  {
    title: "SEO Foundation",
    desc: "Technical SEO is integrated into the architecture and development of your website from the beginning, not added on as an afterthought.",
  },
  {
    title: "Performance Focus",
    desc: "Website performance is a key consideration throughout the development and optimization process.",
  },
  {
    title: "Scalable Architecture",
    desc: "We plan for future enhancements and functionalities when necessary.",
  },
  {
    title: "Clear Communication",
    desc: "Project requirements, progress, changes, testing, and launch requirements should always be transparent throughout development.",
  },
];

function RealisticHeroMockup() {
  return (
    <div className="relative w-full rounded-2xl border border-brand-cyan/40 bg-[#070D1B] backdrop-blur-xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(0,198,255,0.2)] overflow-hidden group">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-[#0B152B] rounded-t-xl">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#050914] border border-white/10 text-[11px] font-mono text-slate-300 w-full max-w-xs mx-auto">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">https://nexoviodigitalsolutions.com/web-dev</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <Activity className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-12 gap-3 p-3 bg-[#050914] rounded-b-xl min-h-[340px]">
        {/* Code Editor Panel */}
        <div className="col-span-12 sm:col-span-7 bg-[#091224] rounded-xl border border-white/10 p-3.5 text-left font-mono text-[11px] space-y-2 text-slate-300 shadow-inner">
          <div className="flex items-center justify-between text-[10px] text-slate-400 pb-2 border-b border-white/10">
            <span className="text-brand-cyan flex items-center gap-1.5 font-bold">
              <FileCode className="w-3.5 h-3.5" /> NextServer.ts
            </span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Active Build 200 OK
            </span>
          </div>

          <div className="space-y-1 pt-1 leading-relaxed">
            <p className="text-purple-400">
              <span className="text-blue-400">export async function</span> GET(req: Request) &#123;
            </p>
            <p className="pl-4 text-slate-400">
              // Strict Type Safety &amp; Edge Caching
            </p>
            <p className="pl-4 text-slate-200">
              const <span className="text-amber-300">siteData</span> = await fetchEngine();
            </p>
            <p className="pl-4 text-purple-400">
              return <span className="text-sky-300">NextResponse.json</span>(&#123;
            </p>
            <p className="pl-8 text-emerald-400">performance: "100/100",</p>
            <p className="pl-8 text-sky-300">security: "TLS_1.3_Encrypted",</p>
            <p className="pl-8 text-purple-300">seoReady: true</p>
            <p className="pl-4 text-purple-400">&#125;);</p>
            <p className="text-purple-400">&#125;</p>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[10px] text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-bold">Compiled successfully in 0.08s</span>
          </div>
        </div>

        {/* Live UI Output Panel */}
        <div className="col-span-12 sm:col-span-5 bg-gradient-to-br from-[#0c1834] to-[#081022] rounded-xl border border-brand-cyan/30 p-3.5 text-left flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-brand-cyan uppercase font-bold tracking-wider">
                Live Web App Output
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1.5">
              <div className="w-2/3 h-2.5 rounded bg-brand-cyan/40 animate-pulse" />
              <div className="w-full h-2 rounded bg-white/20" />
              <div className="w-4/5 h-2 rounded bg-white/15" />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">Core Vitals</span>
                <span className="text-xs font-bold text-emerald-400">100/100 Score</span>
              </div>
              <div className="p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">Client TTFB</span>
                <span className="text-xs font-bold text-brand-cyan">0.08s Latency</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-300">
            <span>Responsive Viewport</span>
            <span className="text-brand-cyan font-semibold">100% SEO Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealisticServiceMockup({ previewType }: { previewType: string }) {
  if (previewType === "custom") {
    return (
      <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0a152e] to-[#050b18] border border-brand-cyan/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] font-mono text-brand-cyan">Custom Corporate Platform</span>
        </div>
        <div className="space-y-2 my-auto">
          <div className="h-3 w-3/4 rounded bg-gradient-to-r from-brand-cyan to-brand-bright" />
          <div className="h-2 w-full rounded bg-white/20" />
          <div className="h-2 w-5/6 rounded bg-white/15" />
          <div className="flex gap-2 pt-1">
            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">Lead Form API</span>
            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Custom CRM Hook</span>
          </div>
        </div>
      </div>
    );
  }

  if (previewType === "wordpress") {
    return (
      <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0c1834] to-[#081022] border border-blue-500/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono text-blue-400 font-bold flex items-center gap-1">
            <Code2 className="w-3 h-3" /> WP Admin &amp; Gutenberg Block Engine
          </span>
          <span className="text-[9px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Custom Theme</span>
        </div>
        <div className="grid grid-cols-12 gap-2 my-auto text-left text-[10px]">
          <div className="col-span-4 bg-white/5 p-2 rounded border border-white/10 space-y-1">
            <span className="text-[9px] font-bold text-slate-300 block">Pages &amp; Posts</span>
            <div className="h-1.5 w-full bg-blue-400/40 rounded" />
            <div className="h-1.5 w-3/4 bg-white/20 rounded" />
          </div>
          <div className="col-span-8 bg-white/5 p-2 rounded border border-white/10 space-y-1.5">
            <span className="text-[9px] font-bold text-emerald-400 block">Custom Plugin &amp; SEO Schema</span>
            <div className="h-1.5 w-full bg-white/25 rounded" />
            <div className="h-1.5 w-4/5 bg-white/15 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (previewType === "react") {
    return (
      <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#071328] to-[#030814] border border-cyan-400/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono text-cyan-400 font-bold flex items-center gap-1">
            <Cpu className="w-3 h-3" /> React 18 &amp; Next.js App Router
          </span>
          <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">SSR Sub-Second</span>
        </div>
        <div className="space-y-2 my-auto font-mono text-[10px]">
          <div className="p-2 rounded bg-black/40 border border-cyan-400/20 text-slate-300">
            &lt;<span className="text-cyan-400">InteractiveDashboard</span> <span className="text-amber-300">data</span>=&#123;realtimeData&#125; /&gt;
          </div>
          <div className="flex items-center justify-between text-[9px] text-slate-400">
            <span>Component Reusability</span>
            <span className="text-emerald-400 font-bold">100% Client Hydrated</span>
          </div>
        </div>
      </div>
    );
  }

  if (previewType === "ecommerce") {
    return (
      <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0a1836] to-[#040a16] border border-amber-500/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono text-amber-400 font-bold flex items-center gap-1">
            <ShoppingBag className="w-3 h-3" /> Storefront &amp; Payment Gateway
          </span>
          <span className="text-[9px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">Stripe / WooCommerce</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2 bg-white/5 rounded border border-white/10 text-center space-y-1">
            <div className="h-6 w-full bg-amber-400/20 rounded" />
            <span className="text-[9px] font-bold text-slate-200 block">Product</span>
          </div>
          <div className="p-2 bg-white/5 rounded border border-white/10 text-center space-y-1">
            <div className="h-6 w-full bg-brand-cyan/20 rounded" />
            <span className="text-[9px] font-bold text-slate-200 block">Cart</span>
          </div>
          <div className="p-2 bg-emerald-500/10 rounded border border-emerald-500/20 text-center space-y-1">
            <div className="h-6 w-full bg-emerald-400/30 rounded" />
            <span className="text-[9px] font-bold text-emerald-400 block">Checkout</span>
          </div>
        </div>
      </div>
    );
  }

  if (previewType === "webapp") {
    return (
      <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#081226] to-[#030712] border border-purple-500/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono text-purple-400 font-bold flex items-center gap-1">
            <Layers className="w-3 h-3" /> Custom SaaS &amp; Portal Workflows
          </span>
          <span className="text-[9px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Role Permissions</span>
        </div>
        <div className="space-y-1.5 my-auto text-[10px]">
          <div className="flex items-center justify-between p-1.5 rounded bg-white/5 border border-white/10">
            <span className="text-slate-300 font-semibold">User Role Matrix</span>
            <span className="text-emerald-400 font-bold">Admin Portal</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-white/5 border border-white/10">
            <span className="text-slate-300 font-semibold">Database Workflow</span>
            <span className="text-brand-cyan font-bold">Realtime Sync</span>
          </div>
        </div>
      </div>
    );
  }

  // API
  return (
    <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#061022] to-[#02050c] border border-emerald-500/30 p-3 flex flex-col justify-between overflow-hidden shadow-md">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
          <Boxes className="w-3 h-3" /> REST &amp; GraphQL API Pipeline
        </span>
        <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Webhook Handler</span>
      </div>
      <div className="flex items-center justify-between my-auto px-2 text-[10px] font-mono text-slate-300">
        <span className="p-1.5 bg-brand-cyan/20 rounded border border-brand-cyan/30 text-brand-cyan font-bold">Web Form</span>
        <ArrowRight className="w-3 h-3 text-slate-500" />
        <span className="p-1.5 bg-emerald-500/20 rounded border border-emerald-500/30 text-emerald-400 font-bold">API Router</span>
        <ArrowRight className="w-3 h-3 text-slate-500" />
        <span className="p-1.5 bg-purple-500/20 rounded border border-purple-500/30 text-purple-300 font-bold">CRM System</span>
      </div>
    </div>
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
    <div className="bg-background overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO BANNER SECTION (Dark/Gradient Hero Background) */}
      <section className="pt-24 sm:28 md:pt-32 lg:pt-40 pb-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Services", url: "/services" },
              { name: "Web Development", url: "/services/web-development" },
            ]}
          />
          {/* Background Radial Glow & Futuristic Grid Lines */}
          <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-4">


            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright" />
                <span>WEB DEVELOPMENT SERVICES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight !leading-[1.14]">
                Web Development That Turns Your Ideas Into{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                <p className="font-medium text-md text-slate-900 dark:text-white">We craft clean, modern, responsive and scalable digital experience to connect businesses with customers, build trust and help them grow online. Business websites and e-commerce stores to web applications and API powered platforms, we architect solutions aligned to your objectives.</p>
              </div>

              {/* 6 Banner Badges in 3-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                {[
                  { name: "Custom Web Development", icon: Globe },
                  { name: "Responsive Web Development", icon: Smartphone },
                  { name: "E-Commerce Development", icon: ShoppingBag },
                  { name: "Web Application Development", icon: Cpu },
                  { name: "API Integration", icon: Boxes },
                  { name: "SEO-Friendly Development", icon: Search },
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
                  trackingName="web_dev_start_project"
                  trackingLocation="service_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow"
                >
                  Start Your Web Project
                </Button>
              </div>
            </div>

            {/* Right Side Image Banner (50% Width Both Sides) */}
            <div className="lg:col-span-6 relative flex items-center justify-center h-full">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[400px] sm:h-[460px] lg:h-[520px] w-full">
                  <Image
                    src="/images/services/web-development-digital-experience-team.webp"
                    alt="Web development team building modern custom digital solutions"
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

      {/* 2. BUILD A WEBSITE AROUND YOUR BUSINESS, NOT A TEMPLATE (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Side Custom Web Development Process Solutions Image (Sticky on Top during Scroll) */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl w-full flex items-center justify-center">
                  <Image
                    src="/images/services/custom-web-development-process-solutions.webp"
                    alt="Custom web development team building tailored digital solutions"
                    width={800}
                    height={600}
                    priority
                    className="w-full h-auto object-contain rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/40 via-transparent to-transparent pointer-events-none rounded-xl" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                STRATEGIC WEB ENGINEERING
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Build a Website Around Your Business, Not a Template
              </h2>
              <div className="space-y-4 text-base text-muted leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  All businesses have different customers, processes, goals, and challenges. This is why we approach every website project differently.
                </p>
                <p>
                  We use strategy, UI/UX, development, performance, SEO, integrations, and testing to build websites that are tailored to how your business truly operates.
                </p>
                <p className="text-sm font-medium text-brand-cyan italic">
                  We provide you with a simple business website or a complex digital platform, we help you to transform your requirements into a tangible web experience.
                </p>
              </div>

              {/* Approach Pillars Badges */}
              <div className="pt-2 space-y-3">
                <h3 className="text-xs font-mono font-bold text-brand-bright uppercase tracking-widest">
                  OUR INTEGRATED WEB DEVELOPMENT PILLARS:
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {APPROACH_PILLARS.map((pillar) => (
                    <div
                      key={pillar}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070F22] flex items-center gap-2 shadow-xs"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-cyan" />
                      <span className="text-xs font-semibold text-slate-900 dark:text-white">
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR WEB DEVELOPMENT SERVICES (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR SERVICES"
            title="Our Web Development"
            highlightText="Services"
            description="Web engineering end-to-end, customized to your business goals, technology stack, and future growth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {CORE_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Card
                  key={srv.title}
                  className="relative overflow-hidden flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.16)] hover:-translate-y-2 transition-all duration-400 group rounded-2xl"
                >
                  {/* Top Border Animate Left to Right on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />
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

                    {srv.controls && (
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                          Allows you to control:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 text-xs text-muted">
                          {srv.controls.slice(0, 6).map((c) => (
                            <div key={c} className="flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
                              <span className="truncate">{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {srv.capabilities && (
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                          What WordPress can do:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 text-xs text-muted">
                          {srv.capabilities.slice(0, 6).map((c) => (
                            <div key={c} className="flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
                              <span className="truncate">{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {srv.supports && (
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                          React &amp; Next.js supports:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 text-xs text-muted">
                          {srv.supports.slice(0, 6).map((s) => (
                            <div key={s} className="flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
                              <span className="truncate">{s}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {srv.features && (
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                          E-commerce development covers:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 text-xs text-muted">
                          {srv.features.slice(0, 6).map((f) => (
                            <div key={f} className="flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
                              <span className="truncate">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {srv.solutions && (
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                          Web application solutions:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 text-xs text-muted">
                          {srv.solutions.slice(0, 6).map((sol) => (
                            <div key={sol} className="flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
                              <span className="truncate">{sol}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {srv.examples && (
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                          API integration use cases:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 text-xs text-muted">
                          {srv.examples.slice(0, 6).map((ex) => (
                            <div key={ex} className="flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
                              <span className="truncate">{ex}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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

      {/* 4. FROM WEBSITE IDEA TO WORKING DIGITAL EXPERIENCE (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="END-TO-END METHODOLOGY"
            title="From Website Vision to"
            highlightText="Living, Breathing Online Presence"
            description="We bring together business strategy, UX planning, and front-end / back-end development to create end-to-end web platforms."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            {IDEA_TO_EXPERIENCE_PHASES.map((phase, pIdx) => (
              <div
                key={phase.title}
                className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20 inline-block mb-3">
                    Phase 0{pIdx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">
                    {phase.subtitle}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase font-mono font-bold text-brand-bright block">
                      We consider &amp; plan:
                    </span>
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200">
                        <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                  <p className="text-xs font-medium text-brand-cyan italic">
                    {phase.footerNote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Development Built Around the Right Technology */}
          <div className="border-t border-slate-200 dark:border-white/10 pt-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center">
              Development Built On the Right Technology
            </h3>
            <p className="text-sm text-muted text-center max-w-2xl mx-auto mb-8">
              Selected as per your project needs, not trying to fit every project into the same stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STACK_LAYERS.map((layer) => (
                <div
                  key={layer.name}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071226] space-y-4 shadow-sm"
                >
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {layer.name}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {layer.desc}
                  </p>

                  {layer.pills && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {layer.pills.map((pill) => (
                        <span
                          key={pill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  )}

                  {layer.supports && (
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-brand-bright block">
                        This can support:
                      </span>
                      <div className="grid grid-cols-2 gap-1 text-xs text-slate-700 dark:text-slate-300">
                        {layer.supports.map((sup) => (
                          <div key={sup} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-brand-cyan shrink-0" />
                            <span>{sup}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {layer.updates && (
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-brand-bright block">
                        Easier to update:
                      </span>
                      <div className="grid grid-cols-2 gap-1 text-xs text-slate-700 dark:text-slate-300">
                        {layer.updates.map((upd) => (
                          <div key={upd} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-brand-cyan shrink-0" />
                            <span>{upd}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WEBSITES BUILT FOR EVERY SCREEN (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                RESPONSIVE WEB DEVELOPMENT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Websites for All Screens
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Your customers might find your business from a laptop, tablet, smartphone or other device.We create responsive experiences that adapt to various screen sizes while preserving:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {RESPONSIVE_FEATURES.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-surface/80">
                    <Smartphone className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">{feat}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-brand-cyan italic font-medium pt-3 border-t border-slate-100 dark:border-white/10">
                A responsive website is one that feels like it was designed specifically for mobile rather than being a shrunken desktop version.
              </p>
            </div>

            {/* Right Side Realistic Multi-Device Showcase */}
            <div className="lg:col-span-6">
              <div className="relative p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-900 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-brand-cyan">
                    Fluid Breakpoint Scaling (320px to 4K)
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">100% Mobile Ready</span>
                </div>

                {/* Desktop & Mobile Dual Frame Preview */}
                <div className="grid grid-cols-12 gap-3 items-end pt-2">
                  <div className="col-span-8 bg-[#0a152e] rounded-xl border border-white/10 p-3 space-y-2">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-[9px] font-mono text-slate-400">Desktop Viewport 1920px</span>
                    </div>
                    <div className="h-3.5 w-3/4 bg-brand-cyan/40 rounded" />
                    <div className="h-2 w-full bg-white/20 rounded" />
                    <div className="h-2 w-5/6 bg-white/15 rounded" />
                  </div>

                  <div className="col-span-4 bg-[#050b18] rounded-2xl border border-brand-cyan/40 p-2.5 space-y-2 shadow-lg">
                    <div className="w-6 h-1 rounded-full bg-white/30 mx-auto mb-1" />
                    <div className="h-2.5 w-full bg-brand-cyan/50 rounded" />
                    <div className="h-1.5 w-3/4 bg-white/30 rounded" />
                    <div className="h-1.5 w-full bg-white/20 rounded" />
                    <span className="text-[8px] font-mono text-brand-cyan block text-center">Touch 44px</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEO-FRIENDLY WEB DEVELOPMENT (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TECHNICAL SEARCH FOUNDATIONS"
            title="SEO-Friendly Web Development"
            highlightText="Establish a Solid Technical Base for Search"
            description="SEO is about more than adding a few keywords to a page. We take into account the technical and structural issues that can assist your overall SEO strategy while developing the content."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {SEO_PILLARS.map((sp) => (
              <div
                key={sp.title}
                className="p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] space-y-2 hover:border-brand-cyan/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {sp.title}
                  </h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {sp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PERFORMANCE THAT SUPPORTS BETTER EXPERIENCES (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                CORE WEB VITALS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Performance That Enables Better Experiences
              </h2>
              <h3 className="text-lg font-semibold text-brand-bright">
                Fast Websites Are More Enjoyable to Use
              </h3>
              <p className="text-base text-muted leading-relaxed">
                Performance has an impact on how users engage with your site.We look at areas like:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {PERFORMANCE_AREAS.map((area) => (
                  <div
                    key={area}
                    className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-surface/80 flex items-center gap-2.5"
                  >
                    <Zap className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-muted italic pt-3 border-t border-slate-100 dark:border-white/10">
                Where appropriate, we also consider Core Web Vitals and other performance signals during development and optimization.
              </p>
            </div>

            {/* Right Side Realistic Performance Score Panel */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl border border-emerald-500/30 bg-[#061226] text-white shadow-2xl space-y-4 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 text-2xl font-mono font-extrabold shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  100
                </div>
                <h3 className="text-lg font-bold text-white">Google Lighthouse Benchmark</h3>
                <div className="grid grid-cols-3 gap-2 text-left pt-2">
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">FCP</span>
                    <span className="text-xs font-bold text-emerald-400">0.32s</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">LCP</span>
                    <span className="text-xs font-bold text-emerald-400">0.45s</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">CLS</span>
                    <span className="text-xs font-bold text-emerald-400">0.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CUSTOM FEATURES FOR REAL BUSINESS REQUIREMENTS (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TAILORED FUNCTIONALITY"
            title="Custom Solutions for"
            highlightText="Real Business Needs"
            description="No two businesses are the same, and they don’t need the same features, either. Based on your needs, we can create custom functionality for your workflows."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {CUSTOM_FEATURES.map((cf) => (
              <Card
                key={cf.category}
                className="bg-white dark:bg-[#071328] p-6 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/40 transition-all shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan" />
                  {cf.category}
                </h3>
                <div className="space-y-2">
                  {cf.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-muted">
                      <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONNECT YOUR WEBSITE WITH THE TOOLS YOU ALREADY USE (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="API INTEGRATIONS"
            title="Integrate Your Website with the"
            highlightText="Tools You Use"
            description="There are a vast number of external systems with which your website might be required to talk. We can work with you based on desired APIs or integration requirements."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {TOOL_INTEGRATIONS.map((tool) => (
              <div
                key={tool.name}
                className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#071226] space-y-2 shadow-xs"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Boxes className="w-4 h-4 text-brand-cyan shrink-0" />
                  {tool.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SECURITY CONSIDERATIONS (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ENTERPRISE SECURITY"
            title="Security Issues From"
            highlightText="Development Through Deployment"
            description="The security needs are different for each site, because they process different types of information. Security FirstWe design and build just with security."
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-12 mb-8">
            {SECURITY_CONSIDERATIONS.map((sec) => (
              <div
                key={sec}
                className="p-3.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] flex items-center gap-2.5 text-center justify-center shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">{sec}</span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-center text-muted border-t border-slate-200 dark:border-white/10 pt-6">
            For applications handling sensitive information or complex user roles, security requirements are defined specifically around the project.
          </p>
        </div>
      </section>

      {/* 11. BUILT TO GROW WITH YOUR BUSINESS (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="SCALABILITY &amp; EXPANSION"
            title="Built to Grow With Your Business"
            highlightText="Your Website Shouldn't Become a Limitation"
            description="We plan for maintainability and future expansion during the architecture phase, as your requirements can change after launch."
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-12 mb-8">
            {FUTURE_EXPANSIONS.map((exp) => (
              <div
                key={exp}
                className="p-3 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-surface/80 flex items-center gap-2"
              >
                <TrendingUp className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">{exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WEB DEVELOPMENT FOR DIFFERENT INDUSTRIES (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INDUSTRIES WE SERVE"
            title="Web Development for"
            highlightText="Different Sectors"
            description="Digital Experiences Across Business Types"
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

      {/* 13. OUR WEB DEVELOPMENT PROCESS (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR METHODOLOGY"
            title="Our Web Development"
            highlightText="Process"
            description="A 9-step discovery to ongoing post-launch optimization 15-track structured execution pipeline."
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
                    Step {pst.step}
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

      {/* 14. TECHNOLOGY WE WORK WITH (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MODERN TECH STACK"
            title="The Technology "
            highlightText="Behind Your Website"
            description="Not every website is the same. We use the appropriate web development technologies to create fast, responsive, scalable websites, online stores, and web apps. "
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-8">
            {TECH_CATEGORIES_GRID.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {cat.items}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. QUALITY CHECKS BEFORE YOUR WEBSITE GOES LIVE (White Background) */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="QUALITY ASSURANCE"
            title="Quality Testing Prior to"
            highlightText="Website Launch"
            description="We test your website for functionality, mobile responsiveness, performance, and SEO before launch — so everything is ready for real users."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {QUALITY_CHECKS.map((qc) => (
              <div
                key={qc.title}
                className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#071226] space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {qc.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {qc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. WHY BUSINESSES WORK WITH NEXOVIO DIGITAL SOLUTIONS (Section Blue Background) */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY CHOOSE US"
            title="Why Businesses Choose"
            highlightText="Nexovio Digital Solutions"
            description="Design, development, SEO, and integrations—all in one place for a website focused on your business. "
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {WHY_NEXOVIO_REASONS.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071226] space-y-2 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                  {reason.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 18. FREQUENTLY ASKED QUESTIONS (FaqSection with built-in section-blue) */}
      <FaqSection faqs={service.faqs} />
    </div>
  );
}
