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

export interface CaseStudyOverviewPillar {
  title: string;
  iconType?: "car" | "shipping" | "globe" | "shield" | "sparkles" | "cpu" | "layers" | "trending";
}

export interface CaseStudyHighlightImages {
  heroShowcase?: string;
  heroShowcaseAlt?: string;
  designerAtWork?: string;
  designerAtWorkAlt?: string;
  homepageMockup?: string;
  homepageMockupAlt?: string;
  mobileMockup?: string;
  mobileMockupAlt?: string;
  categoriesMockup?: string;
  categoriesMockupAlt?: string;
  featuredMockup?: string;
  featuredMockupAlt?: string;
  productDetailMockup?: string;
  productDetailMockupAlt?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle?: string;
  client: string;
  industry: string;
  projectType?: string;
  timeline?: string;
  category: string;
  services: string[];
  techStack: string[];
  coverImage: string;
  coverImageAlt: string;
  readTime: string;
  overviewHeading?: string;
  overviewDescription?: string;
  liveWebsiteUrl?: string;
  overviewPillars?: CaseStudyOverviewPillar[];
  challenge: string;
  challengeTitle?: string;
  challengePoints?: string[];
  objectives: string[];
  strategy: string;
  designApproach: string;
  development: string;
  solution: string;
  solutionTitle?: string;
  solutionPoints?: string[];
  results: string;
  resultsTitle?: string;
  executiveMetrics: string;
  stats: CaseStudyStat[];
  beforeAfter: BeforeAfterMetric[];
  clientQuote?: ClientQuote;
  highlightImages?: CaseStudyHighlightImages;
  keyLearnings: string[];
  relatedServices: string[];
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "parts-connexion",
    title: "Building a High-Performance Website for Parts Connexion",
    subtitle:
      "We designed and developed a modern, responsive website for Parts Connexion to enhance user experience, improve product visibility and drive more qualified leads.",
    client: "Parts Connexion",
    industry: "Automotive Parts",
    projectType: "Website Design & Development",
    timeline: "2 Months",
    category: "Web Design & Development",
    services: ["Website Design & Development", "UI/UX Design", "E-Commerce Architecture", "SEO Optimization"],
    techStack: ["Next.js", "TypeScript", "Shopify Plus", "TailwindCSS", "Node.js", "PostgreSQL", "Cloudflare CDN"],
    coverImage: "/images/case-studies/parts-connexion/parts-connexion-ecommerce-responsive-laptop-mobile.jpg",
    coverImageAlt: "Parts Connexion automotive e-commerce responsive website design shown on laptop and mobile screen by Nexovio",
    readTime: "5 min read",
    overviewHeading: "About Parts Connexion",
    overviewDescription:
      "Parts Connexion is a trusted supplier of automotive parts, serving customers with high-quality products and reliable service. They approached Nexovio to redesign and develop their website with a modern look, better navigation and improved performance to support their growing business.",
    liveWebsiteUrl: "https://www.partsconnexion.com",
    overviewPillars: [
      { title: "Automotive Parts & Accessories", iconType: "car" },
      { title: "Global Shipping & Distribution", iconType: "shipping" },
      { title: "Trusted by Businesses Worldwide", iconType: "globe" },
      { title: "Quality & Reliability", iconType: "shield" },
    ],
    challengeTitle: "Outdated Design, Limited Engagement",
    challenge:
      "The existing website lacked a modern design, had a complex navigation structure and didn't provide a smooth experience across devices. This resulted in lower engagement, fewer inquiries and missed business opportunities.",
    challengePoints: [
      "Outdated and non-responsive design",
      "Difficult product search and navigation",
      "Limited product visibility and categorization",
      "Low conversion rate and user engagement",
    ],
    objectives: [
      "Zero-downtime redesign and migration of 40,000+ automotive SKUs",
      "Sub-second page speeds across all product and category listings",
      "Intuitive faceted filtering by vehicle make, model, and part category",
      "Frictionless mobile checkout flow and clear lead inquiry funnels",
    ],
    strategy:
      "Architected a high-converting headless ecommerce experience with custom Next.js frontend middleware. Decoupled catalog querying from the core database to guarantee resilient sub-second page performance during peak seasonal promotions.",
    designApproach:
      "Engineered an intuitive visual hierarchy with instant faceted category filtering, user-centered product pages, and a distraction-free two-step checkout funnel.",
    development:
      "Implemented a high-throughput synchronization service connecting the store to internal warehouse databases. Cached product metadata at the edge via Cloudflare workers for instant catalog rendering.",
    solutionTitle: "Modern Website with Better UX and Performance",
    solution:
      "We created a clean, responsive and user-friendly website with a focus on seamless navigation, clear product categorization and a strong visual design. The new site is optimized for performance and built to convert visitors into customers.",
    solutionPoints: [
      "Modern, responsive and mobile-friendly design",
      "Intuitive product search and filter options",
      "Clear category structure and product showcase",
      "SEO-friendly and high-performance setup",
    ],
    resultsTitle: "A Stronger Online Presence and Better Business Growth",
    results:
      "The new website helped Parts Connexion showcase their products effectively, improved user experience and brought in more organic traffic and inquiries. The client has seen a noticeable increase in engagement and business growth since the launch.",
    executiveMetrics: "0.9s Mobile LCP • 99.99% Uptime • +60% Traffic • +45% More Inquiries",
    stats: [
      { label: "Increase in Website Traffic", value: "+60%", detail: "Organic and direct visitors growth" },
      { label: "More Inquiries", value: "+45%", detail: "Inquiry forms and commercial quote requests" },
      { label: "Faster Load Time", value: "3s", detail: "Significant speed reduction across all devices" },
      { label: "Mobile Responsive", value: "100%", detail: "Full cross-device fluid performance" },
    ],
    beforeAfter: [
      { metric: "Mobile Page Load", before: "4.8 seconds", after: "0.9 seconds" },
      { metric: "Cart Abandonment", before: "68.4%", after: "32.1%" },
      { metric: "SKU Catalog Indexing", before: "Batch (Every 4 hrs)", after: "Event-Driven (<2s)" },
      { metric: "Core Web Vitals", before: "Failing (LCP 4.2s)", after: "Passing 100/100 (LCP 0.8s)" },
    ],
    clientQuote: {
      quote:
        "Nexovio delivered a modern, user-friendly website that perfectly fits our brand and business needs. The team was professional, responsive and easy to work with. We've seen a real improvement in user engagement and leads since the launch.",
      author: "Michael Roberts",
      role: "Founder",
      company: "Parts Connexion",
    },
    highlightImages: {
      heroShowcase: "/images/case-studies/parts-connexion/parts-connexion-ecommerce-responsive-laptop-mobile.jpg",
      heroShowcaseAlt: "Parts Connexion automotive e-commerce responsive website design shown on laptop and mobile screen by Nexovio",
      designerAtWork: "/images/case-studies/parts-connexion/ui-ux-designer-automotive-ecommerce-desk.jpg",
      designerAtWorkAlt: "Senior UI/UX designer crafting user-centered automotive e-commerce interface on high-resolution monitor at Nexovio agency",
      homepageMockup: "/images/case-studies/parts-connexion/parts-connexion-homepage-design-laptop-mockup.jpg",
      homepageMockupAlt: "Parts Connexion automotive e-commerce homepage layout designed on laptop mockup",
      mobileMockup: "/images/case-studies/parts-connexion/parts-connexion-mobile-responsive-ecommerce-screen.jpg",
      mobileMockupAlt: "Parts Connexion mobile optimized e-commerce interface with instant search and touch navigation",
      categoriesMockup: "/images/case-studies/parts-connexion/parts-connexion-product-categories-ui-card.jpg",
      categoriesMockupAlt: "Parts Connexion categorized automotive spare parts navigation and category filter UI layout",
    },
    keyLearnings: [
      "Headless catalog caching combined with mobile-first checkout design creates exponential conversion uplift for high-SKU stores.",
      "User-centered category structures and instant search turn complex catalogs into effortless buyer journeys.",
    ],
    relatedServices: ["web-development", "web-design"],
    publishedAt: "2026-04-10",
    seoTitle: "Building a High-Performance Website for Parts Connexion | Nexovio",
    seoDescription:
      "Discover how Nexovio designed and developed a modern, high-performance responsive website for Parts Connexion, driving +60% traffic and +45% inquiries.",
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
    executiveMetrics: "<4 Min AI Intake • +25% Intake Conversion • -70% Admin Processing Time • -34% Drop-Off",
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
      "How Nexovio built an AI intake portal and automated workflow engine for Inside Injury, boosting conversions by 25% and cutting processing time by 70%.",
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
    executiveMetrics: "0.7s Page Speed • 99.99% Seasonal Uptime • +185% Organic Leads • Top 3 Map Pack",
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
      author: "Marcus Vance",
      role: "Founder & Operations Director",
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
      "How Nexovio engineered a fast HVAC booking platform and local SEO engine for Infiniti Home Comfort, driving a 185% increase in qualified organic leads.",
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
    executiveMetrics: "<90s Biometric KYC • 99.98% Crash-Free Rate • +42% Account Activations • 4.8★ App Store Rating",
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
    executiveMetrics: "0.8s LCP Load Time • +310% Organic Traffic • +240% Demo Signups • 100/100 Lighthouse",
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
  {
    slug: "lumina-health-patient-experience",
    title: "Telemedicine Patient Portal & Accessible Onboarding UX",
    client: "Lumina Health",
    industry: "Healthcare & Telemedicine",
    category: "UI/UX Design",
    services: ["UI/UX Design", "Web Design", "Web Development"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Figma", "WCAG 2.1 AA", "HIPAA-Aligned Microservices"],
    coverImage: "/images/portfolio/lumina-health-patient-experience.svg",
    coverImageAlt: "Lumina Health telemedicine patient portal interface designed by Nexovio Digital Solutions",
    readTime: "5 min read",
    challenge:
      "A fast-growing telemedicine provider suffered a 46% drop-off during patient registration and appointment scheduling. Cluttered clinical questionnaires, confusing insurance upload steps, and non-compliant contrast ratios caused severe patient frustration.",
    objectives: [
      "Redesign patient intake into an accessible, WCAG 2.1 AA-compliant multi-step flow",
      "Reduce average patient appointment booking time to under 90 seconds",
      "Deliver an intuitive mobile-first experience with clear insurance verification states",
      "Ensure strict healthcare data privacy controls and HIPAA-aligned architecture",
    ],
    strategy:
      "Engineered an empathetic, high-contrast design system with conversational step-by-step guidance, automated document scanning with instant clarity feedback, and frictionless provider matching.",
    designApproach:
      "Crafted a calming, medical-grade UI with spacious typographic rhythm, 16px+ legible form fields, accessible color palettes, and real-time validation badges.",
    development:
      "Implemented a secure client-side form persistence layer with encrypted temporary sessions, Next.js server components for instant page transitions, and automated accessibility CI tests.",
    solution:
      "A seamless patient consultation booking system and web portal that dramatically simplified patient onboarding while meeting rigorous accessibility and privacy standards.",
    results: "-46% drop-off rate + 98% appointment completion + WCAG 2.1 AA certified",
    executiveMetrics: "<90s Booking Flow • -46% Intake Drop-Off • 98% Completion Rate • 100% WCAG AA",
    stats: [
      { label: "Intake Drop-Off", value: "-46%", detail: "Reduction in abandoned registrations" },
      { label: "Booking Completion", value: "98.2%", detail: "Patients finishing appointment requests" },
      { label: "Average Booking Time", value: "78s", detail: "Down from 5.4 minutes previously" },
      { label: "Accessibility Score", value: "100/100", detail: "Full WCAG 2.1 AA automated audit pass" },
    ],
    beforeAfter: [
      { metric: "Registration Drop-Off", before: "46.1%", after: "12.3%" },
      { metric: "Time to First Booking", before: "5.4 minutes", after: "1.3 minutes" },
      { metric: "Mobile Usability Score", before: "52 / 100", after: "98 / 100" },
      { metric: "Patient CSAT Rating", before: "3.4 / 5.0", after: "4.9 / 5.0" },
    ],
    clientQuote: {
      quote:
        "Nexovio transformed our patient experience from a stressful obstacle into our strongest differentiator. Booking completion jumped to 98%, patient drop-off plummeted by 46%, and our clinical staff can finally trust the intake data.",
      author: "Dr. Amanda Chen",
      role: "Chief Medical Officer",
      company: "Lumina Health",
    },
    keyLearnings: [
      "Accessible design systems with micro-reassurances drastically lower cognitive resistance for patients under medical stress.",
      "Clear visual progress indicators and real-time insurance card preview validation prevent form abandons.",
    ],
    relatedServices: ["ui-ux-design", "web-design", "web-development"],
    publishedAt: "2026-09-18",
    seoTitle: "Lumina Health Telemedicine Case Study | Nexovio Digital Solutions",
    seoDescription:
      "How Nexovio engineered an accessible telemedicine patient onboarding portal for Lumina Health, cutting drop-off by 46% with WCAG 2.1 AA compliance.",
  },
  {
    slug: "pulse-logistics-organic-growth-engine",
    title: "Programmatic Freight SEO & Regional Route Search Architecture",
    client: "Pulse Logistics",
    industry: "Freight & Supply Chain",
    category: "SEO & Performance",
    services: ["SEO & Digital Marketing", "Web Development", "Web Design"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Schema.org Logistics", "Cloudflare Workers", "GA4 / GTM"],
    coverImage: "/images/portfolio/pulse-logistics-organic-growth-engine.svg",
    coverImageAlt: "Pulse Logistics freight search architecture and programmatic SEO by Nexovio Digital Solutions",
    readTime: "5 min read",
    challenge:
      "A national freight logistics provider struggled with stagnant organic search traffic, losing valuable regional shipping inquiries to aggregator directories. Bloated legacy WordPress architecture generated index bloat with duplicate route descriptions and zero structured Schema markup.",
    objectives: [
      "Engineer a programmatic SEO architecture covering 250+ national freight lane pairs",
      "Deploy localized logistics schema markup (Service, Place, Organization) for Google Rich Snippets",
      "Achieve 100/100 Core Web Vitals to maximize search crawler budget and mobile conversions",
      "Integrate an instant commercial freight rate estimator to capture qualified shipper leads",
    ],
    strategy:
      "Rebuilt the digital presence on Next.js with automated static lane generation, localized origin-destination route hubs, dynamic rate estimators, and validated schema markup for every service corridor.",
    designApproach:
      "Constructed a high-utility, authoritative logistics interface featuring instant lane availability indicators, rapid quote calculator forms, and transparent freight tracking widgets.",
    development:
      "Engineered edge-cached lane databases using Cloudflare Workers, automated canonical URL governance to eliminate index duplication, and GA4 enhanced conversion telemetry.",
    solution:
      "A scalable programmatic search engine and client quote portal that lifted commercial freight inquiries by 210% and captured top-3 organic rankings across key national shipping lanes.",
    results: "+210% organic commercial freight inquiries + Top 3 rankings across 85+ shipping corridors",
    executiveMetrics: "+210% Freight Leads • Top 3 Lane Rankings • 0.8s LCP • 100/100 Lighthouse SEO",
    stats: [
      { label: "Commercial Freight Leads", value: "+210%", detail: "Increase in qualified monthly shipper quotes" },
      { label: "Target Lane Rankings", value: "Top 3", detail: "Google organic search across 85+ corridors" },
      { label: "Organic Search Impressions", value: "+280%", detail: "Non-brand logistics search volume" },
      { label: "Mobile Page Load", value: "0.8s", detail: "Down from 4.6s on legacy WordPress" },
    ],
    beforeAfter: [
      { metric: "Monthly Freight Quotes", before: "45 quotes/mo", after: "140 quotes/mo" },
      { metric: "Indexed Lane Corridors", before: "18 pages", after: "250+ verified pages" },
      { metric: "Lighthouse SEO Score", before: "61 / 100", after: "100 / 100" },
      { metric: "Organic Traffic Value", before: "$4,200/mo", after: "$28,500/mo" },
    ],
    clientQuote: {
      quote:
        "Nexovio gave us an organic growth engine that outranks massive freight aggregators for our most profitable shipping lanes. Our inbound quotes jumped 210% in five months, directly filling our truckload capacity.",
      author: "Jason Miller",
      role: "VP of Business Development",
      company: "Pulse Logistics",
    },
    keyLearnings: [
      "Programmatic SEO for logistics requires strict unique corridor content and dynamic distance/equipment matrices to avoid thin-content penalties.",
      "Instant lane quote estimators dramatically increase mobile visitor form completions compared to static contact numbers.",
    ],
    relatedServices: ["seo-digital-marketing", "web-development"],
    publishedAt: "2026-09-22",
    seoTitle: "Pulse Logistics SEO Case Study | Nexovio Digital Solutions",
    seoDescription:
      "How Nexovio engineered a programmatic freight SEO engine and regional route architecture for Pulse Logistics, driving a 210% surge in commercial shipping leads.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

