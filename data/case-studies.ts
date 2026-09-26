export interface CaseStudyStat {
  label: string;
  value: string;
  detail: string;
}

export interface BeforeAfterMetric {
  metric: string;
  before: string;
  after: string;
}

export interface ClientQuote {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  services: string[];
  techStack: string[];
  coverImage: string;
  coverImageAlt: string;
  readTime: string;
  challenge: string;
  objectives: string[];
  strategy: string;
  designApproach: string;
  development: string;
  solution: string;
  results: string;
  stats: CaseStudyStat[];
  beforeAfter: BeforeAfterMetric[];
  clientQuote?: ClientQuote;
  keyLearnings: string[];
  relatedServices: string[];
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "parts-connexion",
    title: "Headless E-Commerce Migration + Custom ERP Integrations",
    client: "Parts Connexion",
    industry: "Ecommerce & Retail",
    category: "Web Development",
    services: ["Web Development", "Web Design", "API Integrations"],
    techStack: ["Next.js", "Shopify Storefront API", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "Cloudflare"],
    coverImage: "/images/case-studies/parts-connexion-ecommerce-platform.jpg",
    coverImageAlt: "Parts Connexion headless ecommerce platform by Nexovio Digital Solutions",
    readTime: "5 min read",
    challenge:
      "A high-volume catalog ecommerce site with 40,000+ SKUs was constrained by a fragile legacy platform. Mobile checkout abandonment was escalating, page loads averaged 4.8 seconds, and real-time inventory updates failed across multi-channel warehouse systems.",
    objectives: [
      "Zero-downtime migration of 40,000+ SKUs and customer historical accounts",
      "Sub-second page speeds across all product and category listings",
      "Real-time bidirectional ERP and multi-warehouse inventory synchronization",
      "Frictionless mobile checkout flow with one-click payment gateways",
    ],
    strategy:
      "Architected a headless ecommerce experience using Shopify Plus with custom Next.js frontend middleware. Decoupled catalog querying from the transactional core to guarantee resilient uptime during high-traffic flash promotions.",
    designApproach:
      "Engineered an intuitive visual hierarchy with instant faceted category filtering, high-density component layouts for audio enthusiasts, and a distraction-free two-step checkout funnel.",
    development:
      "Implemented a high-throughput webhook synchronization service connecting the store to internal warehouse databases. Cached product metadata at the edge via Cloudflare workers for instant catalog rendering.",
    solution:
      "A modern, ultra-fast headless ecommerce platform delivering instant mobile browsing, reliable warehouse synchronization, and frictionless checkout that drastically lifted revenue.",
    results: "92% conversion rate increase + zero migration downtime",
    stats: [
      { label: "Conversion Lift", value: "+92%", detail: "Post-launch checkout completion rate" },
      { label: "Migration Downtime", value: "0 min", detail: "Zero revenue or transaction loss" },
      { label: "Mobile Page Speed", value: "0.9s", detail: "Down from 4.8s on legacy platform" },
      { label: "Inventory Sync", value: "<2s", detail: "Real-time automated warehouse sync" },
    ],
    beforeAfter: [
      { metric: "Mobile Page Load", before: "4.8 seconds", after: "0.9 seconds" },
      { metric: "Cart Abandonment", before: "68.4%", after: "32.1%" },
      { metric: "SKU Catalog Indexing", before: "Batch (Every 4 hrs)", after: "Event-Driven (<2s)" },
      { metric: "Core Web Vitals", before: "Failing (LCP 4.2s)", after: "Passing 100/100 (LCP 0.8s)" },
    ],
    clientQuote: {
      quote:
        "The migration to our modern headless architecture was completely seamless without losing a single second of sales. Our conversion rates jumped 92% in the first quarter, and warehouse syncing is finally automated and rock solid.",
      author: "David R.",
      role: "VP of Digital Operations",
      company: "Parts Connexion",
    },
    keyLearnings: [
      "Headless catalog caching combined with mobile-first checkout design creates exponential conversion uplift for high-SKU stores.",
      "Event-driven webhooks prevent race conditions and stock discrepancies between ERP and storefront.",
    ],
    relatedServices: ["web-development", "web-design"],
    publishedAt: "2026-04-10",
    seoTitle: "Parts Connexion Ecommerce Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Learn how Nexovio Digital Solutions executed a seamless headless ecommerce migration + ERP integration for Parts Connexion, driving a 92% conversion rate increase.",
  },
  {
    slug: "inside-injury",
    title: "Custom AI Build + Automated Intake Workflows",
    client: "Inside Injury",
    industry: "AI & Legal Tech",
    category: "AI & Automation",
    services: ["Web Development", "UI/UX Design", "AI Solutions"],
    techStack: ["React", "Next.js", "Python", "FastAPI", "OpenAI API", "PostgreSQL", "Docker", "TailwindCSS"],
    coverImage: "/images/case-studies/enterprise-saas-ai-knowledge-agent-web-portal.webp",
    coverImageAlt: "Inside Injury custom AI build and automated workflows by Nexovio Digital Solutions",
    readTime: "6 min read",
    challenge:
      "Complex claimant registration and manual legal intake documents created severe operational bottlenecks. Prospective clients faced 15-minute static PDF questionnaires, resulting in a 44% form abandonment rate and requiring 3-4 hours of manual administrative review per intake.",
    objectives: [
      "Transform static intake questionnaires into an interactive conversational AI flow",
      "Automate document classification, medical record parsing, and metadata extraction",
      "Reduce client abandonment while upholding strict data privacy and encryption standards",
      "Integrate directly with internal CRM and case management systems",
    ],
    strategy:
      "Engineered an intelligent multi-step digital intake portal powered by a custom LLM pipeline. The system dynamically adjusts follow-up questions based on claimant responses and instantly compiles structured legal briefs for attorneys.",
    designApproach:
      "Crafted an empathetic, calm UI/UX design with clear progress indicators, mobile-friendly touch targets, inline assistance, and real-time save states to minimize cognitive fatigue.",
    development:
      "Built a secure microservices architecture with Next.js frontend, Python FastAPI backend, and vector embeddings for contextual record analysis, safeguarded by end-to-end encryption.",
    solution:
      "An automated AI-assisted intake portal that reduced claimant onboarding time to under 4 minutes while automatically pre-qualifying case viability for legal teams.",
    results: "25% increase in intake conversions + 70% faster administrative processing",
    stats: [
      { label: "Intake Conversion", value: "+25%", detail: "Increase in completed registrations" },
      { label: "Admin Processing", value: "-70%", detail: "Automated document parsing time" },
      { label: "Average Intake Time", value: "3.8 min", detail: "Down from 15+ minutes on PDFs" },
      { label: "Form Abandonment", value: "-34%", detail: "Drop in mid-session drop-offs" },
    ],
    beforeAfter: [
      { metric: "Intake Completion Time", before: "15 - 20 minutes", after: "3.8 minutes" },
      { metric: "Administrative Review", before: "3.5 hrs / case", after: "45 mins / case" },
      { metric: "User Drop-off Rate", before: "44.2%", after: "10.4%" },
      { metric: "Mobile Usability", before: "Unresponsive PDF", after: "100% Adaptive Web Portal" },
    ],
    clientQuote: {
      quote:
        "Nexovio delivered an AI intake pipeline that cut our administrative processing time by 70% while delighting claimants with a modern, frictionless experience. It has redefined our operational efficiency.",
      author: "Jessica M.",
      role: "Co-Founder & COO",
      company: "Inside Injury",
    },
    keyLearnings: [
      "Dynamic multi-step forms with AI-driven branch logic significantly reduce user cognitive overload compared to traditional static forms.",
      "Strict data sanitization and SOC2-aligned encryption layers must be architected from day one for sensitive intake portals.",
    ],
    relatedServices: ["web-development", "ui-ux-design"],
    publishedAt: "2026-06-15",
    seoTitle: "Inside Injury AI Build Case Study | Nexovio Digital Solutions",
    seoDescription:
      "See how Nexovio Digital Solutions created an AI-powered intake portal and automated workflow engine for Inside Injury, boosting conversions by 25% and cutting processing by 70%.",
  },
  {
    slug: "infiniti-home-comfort",
    title: "HVAC Digital Booking Engine + Local SEO Pipeline",
    client: "Infiniti Home Comfort",
    industry: "Home Services & HVAC",
    category: "SEO & Performance",
    services: ["Web Development", "SEO & Digital Marketing", "Web Design"],
    techStack: ["Next.js", "React", "TailwindCSS", "Node.js", "Google Maps API", "Redis", "Vercel Edge"],
    coverImage: "/images/case-studies/infiniti-home-comfort-booking-platform.jpg",
    coverImageAlt: "Infiniti Home Comfort HVAC digital booking platform by Nexovio Digital Solutions",
    readTime: "4 min read",
    challenge:
      "Slow, bloated WordPress architecture with 5.2s load times caused severe revenue leakage during seasonal heatwaves. Local search visibility was fragmented across key service territories, and customers could not book appointments online in real-time.",
    objectives: [
      "Engineer sub-second page speeds with 99.9% high-availability during seasonal demand spikes",
      "Deploy an automated real-time online service booking calendar and dispatch system",
      "Dominate local organic search rankings for residential HVAC repairs and installations",
      "Increase mobile conversion rate for emergency heating and cooling service calls",
    ],
    strategy:
      "Rebuilt the digital footprint on Next.js with Vercel edge caching and an interactive live dispatch booking engine. Implemented programmatic local SEO landing pages with structured schema for every service territory.",
    designApproach:
      "Engineered an emergency-ready mobile interface featuring sticky click-to-call bars, instant technician availability selectors, and transparent upfront pricing estimators.",
    development:
      "Constructed a lightweight Next.js application with server-side rendered service territory hubs, Redis-cached booking slot availability, and instant SMS dispatch integration.",
    solution:
      "A lightning-fast digital booking platform and technical SEO engine that consistently captures top Google rankings and automates technician appointment dispatching.",
    results: "99.9% uptime + 40% faster page loads + 185% increase in organic leads",
    stats: [
      { label: "Organic Search Leads", value: "+185%", detail: "Increase in qualified monthly leads" },
      { label: "Page Speed Benchmark", value: "0.7s", detail: "40% faster Core Web Vitals score" },
      { label: "System Uptime", value: "99.99%", detail: "Zero downtime during peak heatwaves" },
      { label: "Mobile Booking Rate", value: "+54%", detail: "Direct online appointment scheduling" },
    ],
    beforeAfter: [
      { metric: "Mobile Speed Index", before: "5.2 seconds", after: "0.7 seconds" },
      { metric: "Google PageSpeed Score", before: "38 / 100", after: "98 / 100" },
      { metric: "Local Search Rankings", before: "Page 3 – 5", after: "Top 3 Local Map Pack" },
      { metric: "Online Booking Share", before: "0% (Phone Only)", after: "62% Direct Online" },
    ],
    clientQuote: {
      quote:
        "Our booking numbers during peak summer doubled. The sub-second speed on mobile combined with local search ranking transformed our inbound lead pipeline. Nexovio delivered exactly what our business needed to scale.",
      author: "Robert K.",
      role: "Director of Growth",
      company: "Infiniti Home Comfort",
    },
    keyLearnings: [
      "Sub-second load times on mobile devices directly drive higher conversion rates for urgent, high-intent local home service searches.",
      "Programmatic SEO architecture with automated schema markup unlocks substantial organic market share across regional service areas.",
    ],
    relatedServices: ["web-development", "seo-digital-marketing"],
    publishedAt: "2026-08-01",
    seoTitle: "Infiniti Home Comfort Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Explore how Nexovio Digital Solutions engineered an HVAC digital booking engine and local SEO pipeline for Infiniti Home Comfort, boosting organic leads by 185% with 99.9% uptime.",
  },
  {
    slug: "fintech-mobile-app",
    title: "Cross-Platform FinTech Mobile App & Biometric Onboarding",
    client: "Strata Financial",
    industry: "FinTech & Banking",
    category: "Mobile App Development",
    services: ["Mobile App Development", "UI/UX Design", "API Integrations"],
    techStack: ["React Native", "TypeScript", "Node.js", "GraphQL", "Biometric SDK", "AWS KMS", "PostgreSQL"],
    coverImage: "/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp",
    coverImageAlt: "FinTech mobile app with biometric onboarding and banking dashboards by Nexovio Digital Solutions",
    readTime: "5 min read",
    challenge:
      "High customer drop-off during multi-step KYC identity verification, coupled with fragmented native codebases that doubled engineering overhead and resulted in delayed security patches across iOS and Android.",
    objectives: [
      "Consolidate separate native apps into a unified, high-performance React Native codebase",
      "Streamline biometric KYC identity verification into an instantaneous sub-90s flow",
      "Achieve bank-grade end-to-end payload encryption and SOC2 compliance",
      "Deliver fluid 60fps transaction feeds and interactive portfolio visualizations",
    ],
    strategy:
      "Engineered a single cross-platform React Native architecture sharing 94% of business logic across platforms, integrated with hardware-accelerated biometric SDKs and asynchronous webhook verification.",
    designApproach:
      "Constructed a high-trust, dark-mode financial design system with clear feedback states, micro-haptics, and zero-distraction biometric verification screens.",
    development:
      "Implemented hardware-backed key storage via Secure Enclave/KeyStore, offline-first GraphQL caching, and automated end-to-end security compliance CI pipelines.",
    solution:
      "A lightning-fast, unified mobile banking application that slashed KYC verification drop-offs and earned a 4.8-star user rating across major app stores.",
    results: "+42% increase in KYC completion + 4.8 App Store rating across 1.2M transactions",
    stats: [
      { label: "KYC Completion Lift", value: "+42%", detail: "Increase in finished account activations" },
      { label: "App Store Rating", value: "4.8★", detail: "Consistently rated across iOS & Android" },
      { label: "Crash-Free Rate", value: "99.98%", detail: "High-stability production runtime" },
      { label: "Verification Time", value: "<90s", detail: "Automated instant biometric pass" },
    ],
    beforeAfter: [
      { metric: "KYC Onboarding Time", before: "7.5 minutes", after: "1.2 minutes" },
      { metric: "Onboarding Drop-off", before: "38.2%", after: "9.1%" },
      { metric: "App Store Rating", before: "3.2 / 5.0", after: "4.8 / 5.0" },
      { metric: "Code Duplication", before: "100% (2 Codebases)", after: "6% (Unified React Native)" },
    ],
    clientQuote: {
      quote:
        "Consolidating to a single React Native application with Nexovio delivered instant cost efficiencies and boosted our user onboarding completion by 42%. The speed and design quality exceeded all expectations.",
      author: "Marcus V.",
      role: "Chief Technology Officer",
      company: "Strata Financial",
    },
    keyLearnings: [
      "Biometric hardware APIs coupled with proactive user guidance drastically eliminate friction in high-security financial user journeys.",
      "A unified component library dramatically shortens release cycles for multi-platform compliance updates.",
    ],
    relatedServices: ["mobile-app-development", "ui-ux-design"],
    publishedAt: "2026-08-20",
    seoTitle: "FinTech Mobile App Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Learn how Nexovio engineered a high-security cross-platform FinTech app and biometric KYC flow for Strata Financial, boosting onboarding by 42%.",
  },
  {
    slug: "b2b-digital-platform",
    title: "B2B SaaS Portal & Programmatic Search Architecture",
    client: "Apex Cloud Systems",
    industry: "Enterprise SaaS & Cloud",
    category: "SEO & Performance",
    services: ["Web Development", "Web Design", "SEO & Digital Marketing"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma", "Vercel Edge", "Algolia"],
    coverImage: "/images/case-studies/b2b-digital-platform-technical-seo-optimization.webp",
    coverImageAlt: "B2B digital platform with technical SEO and enterprise analytics by Nexovio Digital Solutions",
    readTime: "4 min read",
    challenge:
      "Stagnant organic enterprise search volume, bloated legacy CMS architecture with 5.6s LCP, and a disjointed self-serve trial funnel that converted under 1.8% of inbound organic prospects.",
    objectives: [
      "Re-platform the entire marketing site and web portal onto a lightning-fast Next.js architecture",
      "Deploy 500+ programmatic search intent landing pages targeting high-intent SaaS keywords",
      "Achieve 100/100 Core Web Vitals to maximize organic crawl efficiency and rankings",
      "Integrate an interactive ROI calculator that captures qualified enterprise demo leads",
    ],
    strategy:
      "Architected a Next.js edge-rendered platform with programmatic SEO templates, dynamic vector search via Algolia, and an integrated real-time enterprise cost savings calculator.",
    designApproach:
      "Crafted an authoritative, sleek dark enterprise design system with interactive product simulators, transparent pricing matrices, and prominent social proof.",
    development:
      "Engineered incremental static regeneration (ISR) for 500+ landing pages, edge-cached database queries, and bidirectional HubSpot CRM integration.",
    solution:
      "An enterprise-ready SaaS marketing engine and client portal that lifted organic demo requests by 240% while sustaining sub-second global response times.",
    results: "+240% organic demo signups + 0.8s LCP across 500+ programmatic pages",
    stats: [
      { label: "Organic Demo Signups", value: "+240%", detail: "Increase in qualified pipeline" },
      { label: "LCP Benchmark", value: "0.8s", detail: "Down from 5.6s on legacy CMS" },
      { label: "Organic Traffic", value: "+310%", detail: "Non-brand search impressions" },
      { label: "Funnel Conversion", value: "4.9%", detail: "Up from 1.8% baseline" },
    ],
    beforeAfter: [
      { metric: "Largest Contentful Paint", before: "5.6 seconds", after: "0.8 seconds" },
      { metric: "Organic Monthly Impressions", before: "24,000", after: "98,400" },
      { metric: "Trial-to-Demo Conversion", before: "1.8%", after: "4.9%" },
      { metric: "Lighthouse Performance", before: "29 / 100", after: "100 / 100" },
    ],
    clientQuote: {
      quote:
        "Nexovio rebuilt our enterprise platform from the ground up. Our demo signups surged 240% in just four months, and our site now scores 100/100 on Lighthouse. They are truly elite technical partners.",
      author: "Elena S.",
      role: "Head of Growth",
      company: "Apex Cloud Systems",
    },
    keyLearnings: [
      "Programmatic SEO with dynamic Schema markup accelerates Google indexation for deep enterprise SaaS keyword clusters.",
      "Sub-second page speeds directly improve Google organic rankings while increasing demo form completions.",
    ],
    relatedServices: ["web-development", "seo-digital-marketing", "web-design"],
    publishedAt: "2026-09-05",
    seoTitle: "Apex Cloud SaaS Platform Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Discover how Nexovio re-engineered the B2B SaaS platform for Apex Cloud Systems, boosting organic demo conversions by 240% with sub-second page speeds.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

