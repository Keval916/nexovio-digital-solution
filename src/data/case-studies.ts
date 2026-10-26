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
  avatar?: string;
  logo?: string;
}

export interface CaseStudyOverviewPillar {
  title: string;
  iconType?:
    | "car"
    | "shipping"
    | "globe"
    | "shield"
    | "sparkles"
    | "cpu"
    | "layers"
    | "trending"
    | "monitor"
    | "file"
    | "compass"
    | "smartphone"
    | "calendar"
    | "lock"
    | "users"
    | "zap"
    | "heart"
    | "map";
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
  screen1?: string;
  screen1Title?: string;
  screen1Alt?: string;
  screen2?: string;
  screen2Title?: string;
  screen2Alt?: string;
  screen3?: string;
  screen3Title?: string;
  screen3Alt?: string;
  screen4?: string;
  screen4Title?: string;
  screen4Alt?: string;
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
  // ==========================================
  // 1. PARTS CONNEXION
  // ==========================================
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
      avatar: "/images/case-studies/parts-connexion/michael-roberts-founder-parts-connexion.jpg",
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
      screen1: "/images/case-studies/parts-connexion/parts-connexion-product-categories-ui-card.jpg",
      screen1Title: "Product Categories",
      screen1Alt: "Parts Connexion categorized automotive spare parts navigation and category filter UI card",
      screen2: "/images/case-studies/parts-connexion/parts-connexion-faceted-filter-search-ui-screen.jpg",
      screen2Title: "Vehicle Fitment Search",
      screen2Alt: "Parts Connexion year, make, model vehicle fitment search and real-time inventory filter interface",
      screen3: "/images/case-studies/parts-connexion/parts-connexion-mobile-responsive-ecommerce-screen.jpg",
      screen3Title: "Mobile View",
      screen3Alt: "Parts Connexion mobile responsive automotive e-commerce shopping experience",
      screen4: "/images/case-studies/parts-connexion/parts-connexion-product-details-specifications-ui-screen.jpg",
      screen4Title: "OEM Spec & B2B Cart",
      screen4Alt: "Parts Connexion OEM technical specification matrix, fitment cross-reference, and express B2B checkout",
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

  // ==========================================
  // 2. INSIDE INJURY
  // ==========================================
  {
    slug: "inside-injury",
    title: "Building a Stronger Online Presence for Inside Injury",
    subtitle:
      "We helped Inside Injury, a personal injury law firm, build a modern, responsive website that builds trust, improves user experience, and generates more client inquiries.",
    client: "Inside Injury",
    industry: "Legal Services",
    projectType: "Website Design & Development",
    timeline: "2 Months",
    category: "Web Design & Development",
    services: ["Website Design & Development", "UI/UX Design", "Conversion Rate Optimization", "SEO Optimization"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL", "Cloudflare CDN"],
    coverImage: "/images/case-studies/inside-injury/inside-injury-website-redesign-laptop-desk.jpg",
    coverImageAlt: "Inside Injury law firm responsive website redesign shown on laptop desk with plant by Nexovio",
    readTime: "5 min read",
    overviewHeading: "About Inside Injury",
    overviewDescription:
      "Inside Injury is a trusted personal injury law firm dedicated to helping individuals and families get the justice and compensation they deserve. They approached us to redesign their website with a modern look, clear information, and a smooth user experience across all devices.",
    liveWebsiteUrl: "https://www.insideinjury.com",
    overviewPillars: [
      { title: "Modern & Professional Design", iconType: "monitor" },
      { title: "Clear Service Information", iconType: "file" },
      { title: "User-Friendly Navigation", iconType: "compass" },
      { title: "Mobile Responsive", iconType: "smartphone" },
    ],
    challengeTitle: "Outdated Design & Low User Engagement",
    challenge:
      "The existing website felt outdated and didn't effectively communicate the firm's expertise. It had limited engagement, unclear service structure, and was not optimized for mobile, which resulted in fewer inquiries and lower trust.",
    challengePoints: [
      "Old and unresponsive design",
      "Unclear service information",
      "Low engagement and conversions",
      "Not optimized for mobile devices",
    ],
    objectives: [
      "Re-engineer website into an empathetic, high-trust digital front door for injured claimants",
      "Clarify practice areas and past settlement results to maximize immediate credibility",
      "Achieve sub-second mobile page loads and 100% responsive fluid mobile layouts",
      "Deploy seamless, accessible consultation booking forms and click-to-call integrations",
    ],
    strategy:
      "Structured a clear information hierarchy centered around claimant empathy and rapid proof points. Placed settlement results, client testimonials, and practice area pathways front-and-center while eliminating legal jargon barriers.",
    designApproach:
      "Crafted an authoritative, calming navy and electric blue legal aesthetic with legible typography, spacious card layouts, and intuitive consultation funnels optimized for mobile callers.",
    development:
      "Built a modern Next.js static and server-rendered architecture with edge caching, automated SSL encryption, and bidirectional CRM intake webhook integrations.",
    solutionTitle: "Modern Website with Clear Structure & Better UX",
    solution:
      "We designed and developed a clean, modern, and responsive website that highlights their practice areas, showcases client success, and makes it easy for users to get in touch.",
    solutionPoints: [
      "Modern, professional and trustworthy design",
      "Clear service pages and case results",
      "Easy-to-use contact and consultation form",
      "Fully responsive across all devices",
    ],
    resultsTitle: "A Stronger Digital Presence, More Client Inquiries",
    results:
      "The new website helped Inside Injury establish a professional online presence, improve user engagement, and bring in more qualified leads through a clean, responsive, and conversion-focused design.",
    executiveMetrics: "0.8s Mobile LCP • 100% Responsive • +70% Traffic • +55% More Inquiries",
    stats: [
      { label: "Increase in Website Traffic", value: "+70%", detail: "Organic and local search visitor growth" },
      { label: "More Inquiries", value: "+55%", detail: "Free consultation requests and direct call taps" },
      { label: "Faster Load Time", value: "3s", detail: "Significant speed reduction across all devices" },
      { label: "Mobile Responsive", value: "100%", detail: "Full cross-device fluid performance" },
    ],
    beforeAfter: [
      { metric: "Mobile Page Load", before: "4.5 seconds", after: "0.8 seconds" },
      { metric: "Consultation Form Abandonment", before: "58.2%", after: "18.4%" },
      { metric: "Mobile Usability Score", before: "48 / 100", after: "100 / 100" },
      { metric: "Organic Search Inquiries", before: "22 / month", after: "68 / month" },
    ],
    clientQuote: {
      quote:
        "Nexovio delivered a clean, professional, and user-friendly website that truly represents our mission. The new design has helped us gain more client inquiries and build greater trust online.",
      author: "Michael Carter",
      role: "Founder",
      company: "Inside Injury",
      avatar: "/images/case-studies/inside-injury/michael-carter-founder-inside-injury.jpg",
    },
    highlightImages: {
      heroShowcase: "/images/case-studies/inside-injury/inside-injury-website-redesign-laptop-desk.jpg",
      heroShowcaseAlt: "Inside Injury personal injury law firm responsive website redesign shown on laptop desk by Nexovio",
      designerAtWork: "/images/case-studies/inside-injury/ui-ux-designer-legal-website-desk.jpg",
      designerAtWorkAlt: "Senior UX designer crafting trustworthy, empathetic legal claim evaluation flows on modern workstation at Nexovio",
      homepageMockup: "/images/case-studies/inside-injury/inside-injury-homepage-design-laptop-mockup.jpg",
      homepageMockupAlt: "Inside Injury legal website homepage design on modern laptop mockup with practice areas and trust badges",
      mobileMockup: "/images/case-studies/inside-injury/inside-injury-mobile-responsive-ui-screen.jpg",
      mobileMockupAlt: "Inside Injury mobile responsive website layout with instant attorney consultation tap actions",
      screen1: "/images/case-studies/inside-injury/inside-injury-practice-areas-ui-screen.jpg",
      screen1Title: "Practice Areas & Specialization",
      screen1Alt: "Inside Injury comprehensive personal injury practice areas grid with attorney profiles",
      screen2: "/images/case-studies/inside-injury/inside-injury-case-results-ui-screen.jpg",
      screen2Title: "Proven Settlement Results",
      screen2Alt: "Inside Injury verified multi-million dollar jury verdicts and insurance settlement case proof",
      screen3: "/images/case-studies/inside-injury/inside-injury-mobile-responsive-ui-screen.jpg",
      screen3Title: "Mobile View",
      screen3Alt: "Inside Injury mobile responsive 24/7 legal evaluation and emergency attorney call interface",
      screen4: "/images/case-studies/inside-injury/inside-injury-contact-consultation-form-ui-screen.jpg",
      screen4Title: "Confidential Case Intake",
      screen4Alt: "Inside Injury encrypted confidential case review intake form and law office consultation map",
    },
    keyLearnings: [
      "In personal injury law, immediate credibility indicators (settlement numbers, attorney credentials, real testimonials) cut visitor bounce rates in half.",
      "A frictionless, accessible 2-step consultation form drastically improves conversion compared to lengthy legal questionnaires.",
    ],
    relatedServices: ["web-development", "web-design", "ui-ux-design"],
    publishedAt: "2026-06-15",
    seoTitle: "Building a Stronger Online Presence for Inside Injury | Nexovio",
    seoDescription:
      "How Nexovio redesigned Inside Injury's legal website, building trust and driving +70% website traffic and +55% more qualified client inquiries.",
  },

  // ==========================================
  // 3. INFINITI HOME COMFORT
  // ==========================================
  {
    slug: "infiniti-home-comfort",
    title: "Building a High-Performance Digital Platform for Infiniti Home Comfort",
    subtitle:
      "We engineered a lightning-fast, conversion-optimized website and real-time dispatch booking system for Infiniti Home Comfort, helping them capture local homeowners and surge seasonal service revenue.",
    client: "Infiniti Home Comfort",
    industry: "Home Services & HVAC",
    projectType: "Website Design & Booking Engine",
    timeline: "2 Months",
    category: "Web Design & Development",
    services: ["Website Design & Development", "UI/UX Design", "Local SEO Engine", "Real-Time Booking Integration"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Google Maps API", "Redis", "Cloudflare CDN"],
    coverImage: "/images/case-studies/infiniti-home-comfort/infiniti-home-comfort-hvac-booking-platform-laptop-desk.jpg",
    coverImageAlt: "Infiniti Home Comfort HVAC responsive website and live dispatch booking platform shown on laptop and smartphone by Nexovio",
    readTime: "5 min read",
    overviewHeading: "About Infiniti Home Comfort",
    overviewDescription:
      "Infiniti Home Comfort is a leading residential HVAC and indoor climate specialist providing 24/7 heating, ventilation, and air conditioning solutions. They partnered with Nexovio to replace their slow legacy site with a modern digital booking engine and capture local organic search traffic across regional service territories.",
    liveWebsiteUrl: "https://www.infinitihomecomfort.com",
    overviewPillars: [
      { title: "24/7 Live Emergency Booking", iconType: "calendar" },
      { title: "Local Service Territory Hubs", iconType: "map" },
      { title: "Upfront Flat-Rate Pricing", iconType: "shield" },
      { title: "Mobile Technician Dispatch", iconType: "smartphone" },
    ],
    challengeTitle: "Slow Load Times & Lost Seasonal Leads",
    challenge:
      "The legacy WordPress website took 5.2 seconds to load on mobile devices, causing high bounce rates during urgent weather spikes. Customers could not book appointments online, phone lines were overwhelmed, and local search visibility was fragmented across key cities.",
    challengePoints: [
      "Slow 5.2s mobile load time causing high bounce rates",
      "No real-time online appointment scheduling",
      "Low visibility in Google Local Map Pack rankings",
      "Unclear service pricing causing customer drop-off",
    ],
    objectives: [
      "Deliver sub-second page rendering on mobile devices during seasonal traffic surges",
      "Integrate an automated real-time online appointment scheduling & dispatch calendar",
      "Dominate local organic search rankings across regional residential service territories",
      "Elevate emergency click-to-call conversion rates with sticky high-contrast action bars",
    ],
    strategy:
      "Engineered an emergency-first digital experience on Next.js. Deployed programmatic regional service hubs with automated local business Schema, coupled with a frictionless calendar selector that confirms technician dispatch in under 60 seconds.",
    designApproach:
      "Created a high-trust, comforting navy and cyan design system with prominent emergency call triggers, transparent flat-rate pricing tiers, and real-time technician status tracking.",
    development:
      "Built a high-performance Next.js frontend with Redis-cached appointment slots, Google Maps distance matrix calculation, and automated SMS confirmation dispatching.",
    solutionTitle: "Sub-Second Speed & Automated Online Booking",
    solution:
      "We designed and developed a high-converting, modern website featuring instant online technician booking, localized service territory architecture with automated Schema markup, and clear upfront pricing estimators.",
    solutionPoints: [
      "Sub-second mobile speed with instant page rendering",
      "Automated real-time service scheduling & SMS alerts",
      "Dedicated local service territory hubs with Schema markup",
      "Transparent upfront pricing and seasonal rebate calculator",
    ],
    resultsTitle: "Surging Inbound Leads and Seamless Service Dispatch",
    results:
      "The new platform transformed Infiniti Home Comfort's inbound sales pipeline, doubling online appointments during peak seasonal heatwaves and securing dominant positions across regional search rankings.",
    executiveMetrics: "0.7s Page Speed • 99.99% Seasonal Uptime • +185% Organic Leads • Top 3 Map Pack",
    stats: [
      { label: "Increase in Organic Leads", value: "+185%", detail: "High-intent regional homeowners search traffic" },
      { label: "Online Booking Rate", value: "+54%", detail: "Direct online appointment self-scheduling" },
      { label: "Faster Page Speed", value: "0.7s", detail: "Down from 5.2s on legacy WordPress" },
      { label: "High-Demand Uptime", value: "99.99%", detail: "Zero crashes during severe heatwaves" },
    ],
    beforeAfter: [
      { metric: "Mobile Speed Index", before: "5.2 seconds", after: "0.7 seconds" },
      { metric: "Google PageSpeed Score", before: "38 / 100", after: "98 / 100" },
      { metric: "Local Search Rankings", before: "Page 3 – 5", after: "Top 3 Local Map Pack" },
      { metric: "Online Booking Share", before: "0% (Phone Only)", after: "62% Direct Online" },
    ],
    clientQuote: {
      quote:
        "Nexovio delivered exactly what our business needed to scale. Our online bookings doubled during peak summer, and our mobile speed index dropped under one second. The investment paid for itself within the first sixty days.",
      author: "Marcus Vance",
      role: "Founder & Operations Director",
      company: "Infiniti Home Comfort",
      avatar: "/images/case-studies/infiniti-home-comfort/marcus-vance-founder-infiniti-home-comfort.jpg",
    },
    highlightImages: {
      heroShowcase: "/images/case-studies/infiniti-home-comfort/infiniti-home-comfort-hvac-booking-platform-laptop-desk.jpg",
      heroShowcaseAlt: "Infiniti Home Comfort HVAC booking platform shown on laptop and mobile screen",
      designerAtWork: "/images/case-studies/infiniti-home-comfort/ui-ux-designer-hvac-booking-platform-desk.jpg",
      designerAtWorkAlt: "Senior UX architect designing real-time service booking interface for Infiniti Home Comfort at Nexovio",
      homepageMockup: "/images/case-studies/infiniti-home-comfort/infiniti-home-comfort-homepage-laptop-mockup.jpg",
      homepageMockupAlt: "Infiniti Home Comfort HVAC website dashboard and booking calendar on laptop mockup",
      mobileMockup: "/images/case-studies/infiniti-home-comfort/hvac-mobile-booking-flow-ui-screen.jpg",
      mobileMockupAlt: "Infiniti Home Comfort mobile booking flow and emergency technician dispatch UI",
      screen1: "/images/case-studies/infiniti-home-comfort/hvac-service-booking-calendar-ui-screen.jpg",
      screen1Title: "Booking Calendar",
      screen1Alt: "Infiniti Home Comfort real-time service booking calendar UI",
      screen2: "/images/case-studies/infiniti-home-comfort/hvac-live-technician-dispatch-map-ui-screen.jpg",
      screen2Title: "Live Dispatch Map",
      screen2Alt: "Infiniti Home Comfort live technician dispatch map and territory coverage",
      screen3: "/images/case-studies/infiniti-home-comfort/hvac-mobile-booking-flow-ui-screen.jpg",
      screen3Title: "Mobile View",
      screen3Alt: "Infiniti Home Comfort mobile responsive emergency repair booking screen",
      screen4: "/images/case-studies/infiniti-home-comfort/hvac-pricing-tier-package-selector-ui-screen.jpg",
      screen4Title: "Upfront Pricing Plans",
      screen4Alt: "Infiniti Home Comfort upfront flat-rate pricing tiers and annual Comfort Club membership plans",
    },
    keyLearnings: [
      "Sub-second load times on mobile devices directly drive higher conversion rates for urgent, high-intent local home service searches.",
      "Programmatic SEO architecture with automated schema markup unlocks substantial organic market share across regional service areas.",
    ],
    relatedServices: ["web-development", "seo-digital-marketing", "web-design"],
    publishedAt: "2026-08-01",
    seoTitle: "Building a High-Performance Digital Platform for Infiniti Home Comfort | Nexovio",
    seoDescription:
      "How Nexovio engineered a fast HVAC booking platform and local SEO engine for Infiniti Home Comfort, driving a +185% surge in qualified leads.",
  },

  // ==========================================
  // 4. FINTECH MOBILE APP (STRATA FINANCIAL)
  // ==========================================
  {
    slug: "fintech-mobile-app",
    title: "Building an Intuitive Mobile Banking App for Strata Financial",
    subtitle:
      "We engineered a secure, 60fps React Native mobile banking application with instant biometric KYC verification for Strata Financial, boosting customer onboarding completion by 42%.",
    client: "Strata Financial",
    industry: "FinTech & Banking",
    projectType: "Cross-Platform Mobile App & KYC System",
    timeline: "3 Months",
    category: "Mobile App Development",
    services: ["Mobile App Development", "UI/UX Design", "Biometric KYC Integration", "Security Architecture"],
    techStack: ["React Native", "TypeScript", "Node.js", "GraphQL", "Biometric SDK", "AWS KMS", "PostgreSQL"],
    coverImage: "/images/case-studies/fintech-mobile-app/strata-financial-mobile-banking-app-hero-showcase.jpg",
    coverImageAlt: "Strata Financial cross-platform mobile banking app with biometric onboarding floating screens by Nexovio",
    readTime: "5 min read",
    overviewHeading: "About Strata Financial",
    overviewDescription:
      "Strata Financial is a modern digital banking platform offering frictionless multi-currency personal accounts, instant card issuance, and automated wealth management tools. They chose Nexovio to unify their separate iOS and Android native apps into a single, bank-grade React Native architecture.",
    liveWebsiteUrl: "https://www.stratafinancial.com",
    overviewPillars: [
      { title: "Sub-90s Biometric KYC", iconType: "lock" },
      { title: "Real-Time Account Balances", iconType: "trending" },
      { title: "Bank-Grade Encryption", iconType: "shield" },
      { title: "60fps Cross-Platform UI", iconType: "smartphone" },
    ],
    challengeTitle: "High Onboarding Drop-Off & Duplicate Codebases",
    challenge:
      "Managing two separate native apps doubled engineering costs and caused delayed feature rollouts. The complex 5-step identity verification process took over 7 minutes, leading to a 38% user abandonment rate before customers completed their first deposit.",
    challengePoints: [
      "38% drop-off during manual KYC document review",
      "Separate iOS and Android codebases doubling costs",
      "Slow transaction loading and outdated visual design",
      "Inconsistent user ratings across app stores (3.2★)",
    ],
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
    solutionTitle: "Unified React Native App with Instant Biometrics",
    solution:
      "We engineered a unified React Native application with 94% shared code, automated facial biometric scanning, real-time balance feeds, zero-latency P2P payments, and a sleek dark-mode design system.",
    solutionPoints: [
      "Lightning-fast sub-90s biometric identity verification",
      "Unified React Native codebase for iOS and Android",
      "High-trust dark mode banking interface with haptics",
      "Offline-first GraphQL caching and end-to-end encryption",
    ],
    resultsTitle: "Higher User Retention and Top App Store Ratings",
    results:
      "The unified app accelerated onboarding completion, earned a 4.8-star user rating across 1.2M transactions, and reduced monthly engineering maintenance overhead by 50%.",
    executiveMetrics: "<90s Biometric KYC • 99.98% Crash-Free Rate • +42% Account Activations • 4.8★ App Store Rating",
    stats: [
      { label: "KYC Completion Lift", value: "+42%", detail: "Finished biometric account activations" },
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
      author: "Elena Rostova",
      role: "Chief Technology Officer",
      company: "Strata Financial",
      avatar: "/images/case-studies/fintech-mobile-app/elena-rostova-cto-strata-financial.jpg",
    },
    highlightImages: {
      heroShowcase: "/images/case-studies/fintech-mobile-app/strata-financial-mobile-banking-app-hero-showcase.jpg",
      heroShowcaseAlt: "Strata Financial mobile banking app hero showcase on desk with floating UI screens",
      designerAtWork: "/images/case-studies/fintech-mobile-app/ui-ux-designer-fintech-mobile-app-desk.jpg",
      designerAtWorkAlt: "Female UI/UX designer crafting fintech mobile banking interface with wireframes at Nexovio",
      homepageMockup: "/images/case-studies/fintech-mobile-app/strata-financial-mobile-banking-dashboard-mockup.jpg",
      homepageMockupAlt: "Strata Financial mobile banking app dashboard screen mockup",
      mobileMockup: "/images/case-studies/fintech-mobile-app/strata-financial-mobile-banking-dashboard-mockup.jpg",
      mobileMockupAlt: "Strata Financial mobile banking touch UI with instant balance feeds",
      screen1: "/images/case-studies/fintech-mobile-app/fintech-biometric-kyc-verification-ui-screen.jpg",
      screen1Title: "Biometric KYC Flow",
      screen1Alt: "Strata Financial biometric KYC identity verification camera screen",
      screen2: "/images/case-studies/fintech-mobile-app/fintech-account-tier-plans-ui-screen.jpg",
      screen2Title: "Tiered Plan Selector",
      screen2Alt: "Strata Financial account tier selector and plan comparison interface",
      screen3: "/images/case-studies/fintech-mobile-app/fintech-account-verified-success-ui-screen.jpg",
      screen3Title: "Mobile View",
      screen3Alt: "Strata Financial account verified success confirmation screen",
      screen4: "/images/case-studies/fintech-mobile-app/fintech-instant-p2p-transfer-ui-screen.jpg",
      screen4Title: "Virtual Card & P2P",
      screen4Alt: "Strata Financial virtual card security controls and instant biometric P2P money transfer interface",
    },
    keyLearnings: [
      "Biometric hardware APIs coupled with proactive user guidance drastically eliminate friction in high-security financial user journeys.",
      "A unified component library dramatically shortens release cycles for multi-platform compliance updates.",
    ],
    relatedServices: ["mobile-app-development", "ui-ux-design"],
    publishedAt: "2026-08-20",
    seoTitle: "Building an Intuitive Mobile Banking App for Strata Financial | Nexovio",
    seoDescription:
      "Learn how Nexovio engineered a high-security cross-platform FinTech app and biometric KYC flow for Strata Financial, boosting onboarding by 42%.",
  },

  // ==========================================
  // 5. B2B DIGITAL PLATFORM (APEX CLOUD SYSTEMS)
  // ==========================================
  {
    slug: "b2b-digital-platform",
    title: "Building an Enterprise Cloud Platform for Apex Cloud Systems",
    subtitle:
      "We designed and engineered an enterprise SaaS marketing platform and programmatic search architecture for Apex Cloud Systems, driving +240% qualified demo signups with sub-second page performance.",
    client: "Apex Cloud Systems",
    industry: "Enterprise SaaS & Cloud",
    projectType: "Enterprise Web Portal & Programmatic SEO",
    timeline: "3 Months",
    category: "Web Design & Development",
    services: ["Web Development", "Web Design", "SEO & Digital Marketing", "Enterprise Cloud Architecture"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma", "Vercel Edge", "Algolia"],
    coverImage: "/images/case-studies/b2b-digital-platform/apex-cloud-enterprise-platform-laptop-desk.jpg",
    coverImageAlt: "Apex Cloud Systems enterprise cloud platform with technical SEO dashboard and analytics by Nexovio",
    readTime: "5 min read",
    overviewHeading: "About Apex Cloud Systems",
    overviewDescription:
      "Apex Cloud Systems provides hybrid cloud orchestration and enterprise data management software for Fortune 500 enterprises. They selected Nexovio to rebuild their marketing site into an authoritative digital platform that automates organic lead capture and accelerates sales cycles.",
    liveWebsiteUrl: "https://www.apexcloudsystems.com",
    overviewPillars: [
      { title: "Sub-Second Global LCP", iconType: "zap" },
      { title: "Programmatic SEO Engine", iconType: "globe" },
      { title: "Interactive ROI Estimator", iconType: "trending" },
      { title: "Enterprise CRM Telemetry", iconType: "layers" },
    ],
    challengeTitle: "Stagnant Search Rankings & Complex Demo Funnel",
    challenge:
      "A bloated legacy CMS took 5.6 seconds to load and failed Core Web Vitals audits. Enterprise decision-makers bounced from complex self-serve trial forms, and organic search impressions were locked out of high-intent SaaS keywords.",
    challengePoints: [
      "5.6s load time failing Google Core Web Vitals",
      "Low 1.8% demo conversion on bloated static forms",
      "Fragmented enterprise keyword ranking across competitors",
      "Lack of interactive product cost savings calculators",
    ],
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
    solutionTitle: "Next.js Edge Architecture & Programmatic SEO Hubs",
    solution:
      "We engineered a high-velocity Next.js platform featuring 500+ programmatic search intent pages, an interactive enterprise cloud ROI calculator, instant live chat integration, and frictionless demo request funnels.",
    solutionPoints: [
      "Sub-second edge-rendered pages with 100/100 Lighthouse",
      "500+ programmatic solution landing pages with rich schema",
      "Interactive real-time cloud migration ROI calculator",
      "Two-step enterprise demo booking with HubSpot sync",
    ],
    resultsTitle: "Massive Organic Pipeline and Record Demo Conversions",
    results:
      "The re-platformed digital engine propelled Apex Cloud Systems to top Google rankings for high-intent B2B search terms, surging qualified enterprise demo requests by 240% within four months.",
    executiveMetrics: "0.8s LCP Load Time • +310% Organic Traffic • +240% Demo Signups • 100/100 Lighthouse",
    stats: [
      { label: "Organic Demo Signups", value: "+240%", detail: "Increase in qualified sales pipeline" },
      { label: "LCP Benchmark", value: "0.8s", detail: "Down from 5.6s on legacy CMS" },
      { label: "Organic Traffic Growth", value: "+310%", detail: "Non-brand enterprise search impressions" },
      { label: "Funnel Conversion", value: "4.9%", detail: "Up from 1.8% baseline on legacy portal" },
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
      author: "Elena Sommer",
      role: "Head of Growth",
      company: "Apex Cloud Systems",
      avatar: "/images/case-studies/b2b-digital-platform/elena-sommer-head-of-growth-apex-cloud.jpg",
    },
    highlightImages: {
      heroShowcase: "/images/case-studies/b2b-digital-platform/apex-cloud-enterprise-platform-laptop-desk.jpg",
      heroShowcaseAlt: "Apex Cloud Systems enterprise cloud platform on laptop desk with analytics floating cards",
      designerAtWork: "/images/case-studies/b2b-digital-platform/ui-ux-designer-enterprise-saas-desk.jpg",
      designerAtWorkAlt: "Engineering and design team collaborating on enterprise cloud architecture at Nexovio",
      homepageMockup: "/images/case-studies/b2b-digital-platform/apex-cloud-enterprise-homepage-laptop-mockup.jpg",
      homepageMockupAlt: "Apex Cloud Systems enterprise homepage and dashboard on laptop mockup",
      mobileMockup: "/images/case-studies/b2b-digital-platform/apex-cloud-marketing-portal-ui-screen.jpg",
      mobileMockupAlt: "Apex Cloud Systems marketing portal and solutions interface",
      screen1: "/images/case-studies/b2b-digital-platform/apex-cloud-marketing-portal-ui-screen.jpg",
      screen1Title: "Enterprise Portal",
      screen1Alt: "Apex Cloud Systems enterprise portal UI showcase",
      screen2: "/images/case-studies/b2b-digital-platform/apex-cloud-organic-seo-growth-chart-ui-screen.jpg",
      screen2Title: "SEO Growth Engine",
      screen2Alt: "Apex Cloud Systems organic search traffic growth metrics and charts",
      screen3: "/images/case-studies/b2b-digital-platform/apex-cloud-resource-content-hub-ui-screen.jpg",
      screen3Title: "Resource Hub",
      screen3Alt: "Apex Cloud Systems technical content and resource hub card",
      screen4: "/images/case-studies/b2b-digital-platform/apex-cloud-roi-cost-calculator-ui-screen.jpg",
      screen4Title: "Cloud Migration ROI",
      screen4Alt: "Apex Cloud Systems enterprise cloud migration ROI and workload compute savings calculator screen",
    },
    keyLearnings: [
      "Programmatic SEO with dynamic Schema markup accelerates Google indexation for deep enterprise SaaS keyword clusters.",
      "Sub-second page speeds directly improve Google organic rankings while increasing demo form completions.",
    ],
    relatedServices: ["web-development", "seo-digital-marketing", "web-design"],
    publishedAt: "2026-09-05",
    seoTitle: "Building an Enterprise Cloud Platform for Apex Cloud Systems | Nexovio",
    seoDescription:
      "Discover how Nexovio re-engineered the B2B SaaS platform for Apex Cloud Systems, boosting organic demo conversions by 240% with sub-second page speeds.",
  },

  // ==========================================
  // 6. LUMINA HEALTH PATIENT EXPERIENCE
  // ==========================================
  {
    slug: "lumina-health-patient-experience",
    title: "Building an Empathetic Telemedicine Portal for Lumina Health",
    subtitle:
      "We designed and developed a WCAG 2.1 AA-compliant patient intake portal and telemedicine booking experience for Lumina Health, slashing registration drop-off by 46%.",
    client: "Lumina Health",
    industry: "Healthcare & Telemedicine",
    projectType: "Patient Portal & Accessible Onboarding UX",
    timeline: "2.5 Months",
    category: "UI/UX Design",
    services: ["UI/UX Design", "Web Design", "Web Development", "Accessibility Auditing (WCAG 2.1)"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Figma", "WCAG 2.1 AA", "HIPAA-Aligned Microservices"],
    coverImage: "/images/case-studies/lumina-health-patient-experience/lumina-health-telemedicine-portal-laptop-desk.jpg",
    coverImageAlt: "Lumina Health accessible telemedicine patient portal and triage workflow on laptop desk by Nexovio",
    readTime: "5 min read",
    overviewHeading: "About Lumina Health",
    overviewDescription:
      "Lumina Health connects patients with licensed physicians, specialists, and mental health counselors through virtual consultations. They partnered with Nexovio to eliminate friction from their patient onboarding flow and deliver a secure, accessible web portal that patients of all ages can navigate effortlessly.",
    liveWebsiteUrl: "https://www.luminahealth.com",
    overviewPillars: [
      { title: "WCAG 2.1 AA Accessible UI", iconType: "heart" },
      { title: "Sub-90s Specialist Booking", iconType: "calendar" },
      { title: "HIPAA-Aligned Security", iconType: "shield" },
      { title: "Instant Insurance Scanning", iconType: "sparkles" },
    ],
    challengeTitle: "Confusing Intake Flow & High Patient Drop-Off",
    challenge:
      "Patients seeking urgent medical care encountered cluttered multi-page questionnaires, illegible typography, and confusing insurance verification steps. Over 46% of patients abandoned the onboarding process before scheduling a consultation.",
    challengePoints: [
      "46% patient drop-off during clinical questionnaire",
      "Non-compliant contrast ratios failing accessibility audits",
      "Average booking time exceeding 5.4 minutes",
      "Confusing insurance card upload errors and rejections",
    ],
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
    solutionTitle: "Empathetic Multi-Step Onboarding with Instant Verification",
    solution:
      "We designed a calming, high-contrast healthcare design system featuring conversational step-by-step triage, real-time insurance card OCR parsing, instant provider matching, and HIPAA-compliant data encryption.",
    solutionPoints: [
      "WCAG 2.1 AA certified accessible typography & colors",
      "Conversational 4-step guided medical intake flow",
      "Instant camera-based insurance card scanning & validation",
      "Real-time provider availability calendar with calendar sync",
    ],
    resultsTitle: "Seamless Patient Care and Record Completion Rates",
    results:
      "The accessible redesign reduced appointment booking times to under 80 seconds, slashed registration drop-off by 46%, and earned a 4.9/5 patient satisfaction score.",
    executiveMetrics: "<90s Booking Flow • -46% Intake Drop-Off • 98% Completion Rate • 100% WCAG AA",
    stats: [
      { label: "Intake Drop-Off Reduction", value: "-46%", detail: "Decrease in abandoned patient registrations" },
      { label: "Booking Completion", value: "98.2%", detail: "Patients finishing appointment requests" },
      { label: "Average Booking Time", value: "78s", detail: "Down from 5.4 minutes on legacy flow" },
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
      avatar: "/images/case-studies/lumina-health-patient-experience/dr-amanda-chen-cmo-lumina-health.jpg",
    },
    highlightImages: {
      heroShowcase: "/images/case-studies/lumina-health-patient-experience/lumina-health-telemedicine-portal-laptop-desk.jpg",
      heroShowcaseAlt: "Lumina Health telemedicine patient portal shown on modern laptop workstation",
      designerAtWork: "/images/case-studies/lumina-health-patient-experience/ui-ux-designer-healthcare-portal-desk.jpg",
      designerAtWorkAlt: "UI/UX designer crafting accessible healthcare user flows on laptop workstation at Nexovio",
      homepageMockup: "/images/case-studies/lumina-health-patient-experience/lumina-health-telemedicine-homepage-laptop-mockup.jpg",
      homepageMockupAlt: "Lumina Health telemedicine patient portal interface on laptop mockup",
      mobileMockup: "/images/case-studies/lumina-health-patient-experience/lumina-health-mobile-doctor-consultation-ui-screen.jpg",
      mobileMockupAlt: "Lumina Health mobile doctor consultation and encrypted video telehealth view",
      screen1: "/images/case-studies/lumina-health-patient-experience/lumina-health-accessible-symptom-triage-ui-screen.jpg",
      screen1Title: "Accessible Triage Flow",
      screen1Alt: "Lumina Health accessible conversational triage interface",
      screen2: "/images/case-studies/lumina-health-patient-experience/lumina-health-instant-insurance-ocr-verification-ui-screen.jpg",
      screen2Title: "Insurance OCR Check",
      screen2Alt: "Lumina Health instant insurance document scanning and validation screen",
      screen3: "/images/case-studies/lumina-health-patient-experience/lumina-health-mobile-doctor-consultation-ui-screen.jpg",
      screen3Title: "Mobile View",
      screen3Alt: "Lumina Health mobile doctor video consultation, vital telemetry, and e-prescription pickup confirmation",
      screen4: "/images/case-studies/lumina-health-patient-experience/lumina-health-specialist-telehealth-video-schedule-ui-screen.jpg",
      screen4Title: "Specialist Scheduling",
      screen4Alt: "Lumina Health real-time specialist consultation scheduling matrix across board-certified physicians",
    },
    keyLearnings: [
      "Accessible design systems with micro-reassurances drastically lower cognitive resistance for patients under medical stress.",
      "Clear visual progress indicators and real-time insurance card preview validation prevent form abandons.",
    ],
    relatedServices: ["ui-ux-design", "web-design", "web-development"],
    publishedAt: "2026-09-18",
    seoTitle: "Building an Empathetic Telemedicine Portal for Lumina Health | Nexovio",
    seoDescription:
      "How Nexovio engineered an accessible telemedicine patient onboarding portal for Lumina Health, cutting drop-off by 46% with WCAG 2.1 AA compliance.",
  },

  // ==========================================
  // 7. PULSE LOGISTICS ORGANIC GROWTH ENGINE
  // ==========================================
  {
    slug: "pulse-logistics-organic-growth-engine",
    title: "Building an Organic Growth Engine for Pulse Logistics",
    subtitle:
      "We engineered a programmatic freight SEO architecture and instant lane rate estimator for Pulse Logistics, surging commercial shipper inquiries by 210% across 85+ national shipping corridors.",
    client: "Pulse Logistics",
    industry: "Freight & Supply Chain",
    projectType: "Programmatic Route Search & Freight Booking",
    timeline: "3 Months",
    category: "SEO & Digital Marketing",
    services: ["SEO & Digital Marketing", "Web Development", "Web Design", "Programmatic SEO Architecture"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Schema.org Logistics", "Cloudflare Workers", "GA4 / GTM"],
    coverImage: "/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-freight-platform-laptop-desk.jpg",
    coverImageAlt: "Pulse Logistics nationwide freight platform and programmatic route search architecture by Nexovio",
    readTime: "5 min read",
    overviewHeading: "About Pulse Logistics",
    overviewDescription:
      "Pulse Logistics is a nationwide freight brokerage and third-party logistics (3PL) provider managing dry van, refrigerated, and flatbed transport across North America. They approached Nexovio to outrank freight directories and capture high-intent commercial shipping leads through programmatic search.",
    liveWebsiteUrl: "https://www.pulselogistics.com",
    overviewPillars: [
      { title: "250+ Freight Corridors", iconType: "shipping" },
      { title: "Instant Lane Rate Estimator", iconType: "trending" },
      { title: "Dedicated Route Hubs", iconType: "map" },
      { title: "Real-Time Carrier Dispatch", iconType: "globe" },
    ],
    challengeTitle: "Stagnant Search Visibility & Slow Manual Quoting",
    challenge:
      "Pulse Logistics struggled to compete against massive freight aggregator directories. Shippers had to wait hours for manual phone quotes, while the legacy website had duplicate route pages and zero structured schema markup for Google Search.",
    challengePoints: [
      "Inability to compete with major logistics aggregator directories",
      "Slow manual phone quoting taking 3+ hours per quote",
      "Duplicate shipping route pages causing Google index bloat",
      "Zero structured Logistics Schema markup on key corridors",
    ],
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
    solutionTitle: "Programmatic Corridors & Instant Commercial Quoting",
    solution:
      "We engineered an automated Next.js route generation engine covering 250+ national freight lanes, integrated an instant shipping cost calculator, and deployed rich Schema.org logistics markup.",
    solutionPoints: [
      "250+ programmatic lane pages with dynamic mileage & transit times",
      "Instant commercial freight rate estimator with equipment filters",
      "Google-compliant Schema.org logistics structured data",
      "Real-time carrier capacity indicator and instant BOL submission",
    ],
    resultsTitle: "Top Search Rankings and Surging Freight Quotes",
    results:
      "The programmatic growth platform propelled Pulse Logistics into Google's top 3 rankings across 85+ national freight lanes, lifting monthly commercial shipping quotes by 210%.",
    executiveMetrics: "+210% Freight Leads • Top 3 Lane Rankings • 0.8s LCP • 100/100 Lighthouse SEO",
    stats: [
      { label: "Commercial Freight Leads", value: "+210%", detail: "Increase in qualified monthly shipper quotes" },
      { label: "Target Lane Rankings", value: "Top 3", detail: "Google organic search across 85+ corridors" },
      { label: "Organic Search Volume", value: "+280%", detail: "Non-brand logistics search volume" },
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
      avatar: "/images/case-studies/pulse-logistics-organic-growth-engine/jason-miller-vp-pulse-logistics.jpg",
    },
    highlightImages: {
      heroShowcase: "/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-freight-platform-laptop-desk.jpg",
      heroShowcaseAlt: "Pulse Logistics freight platform on laptop desk with shipping dashboard",
      designerAtWork: "/images/case-studies/pulse-logistics-organic-growth-engine/ui-ux-designer-logistics-platform-desk.jpg",
      designerAtWorkAlt: "Logistics solutions architects mapping national freight lane corridors at Nexovio",
      homepageMockup: "/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-freight-homepage-laptop-mockup.jpg",
      homepageMockupAlt: "Pulse Logistics freight quote platform on modern laptop mockup",
      mobileMockup: "/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-mobile-responsive-carrier-screen.jpg",
      mobileMockupAlt: "Pulse Logistics mobile responsive freight tracking and rate quote screen",
      screen1: "/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-national-freight-lane-corridors-ui-screen.jpg",
      screen1Title: "Lane Corridors Engine",
      screen1Alt: "Pulse Logistics programmatic national freight lane corridor search UI",
      screen2: "/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-carrier-dispatch-fleet-management-ui-screen.jpg",
      screen2Title: "Carrier Dispatch Board",
      screen2Alt: "Pulse Logistics real-time fleet GPS tracking, automated carrier dispatch, and active in-transit loads",
      screen3: "/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-mobile-responsive-carrier-screen.jpg",
      screen3Title: "Mobile View",
      screen3Alt: "Pulse Logistics mobile carrier app with lane availability and rate calculator",
      screen4: "/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-instant-freight-quote-calculator-ui-screen.jpg",
      screen4Title: "Spot Rate Estimator",
      screen4Alt: "Pulse Logistics instant commercial freight rate calculator with equipment selection and guaranteed price lock",
    },
    keyLearnings: [
      "Programmatic SEO for logistics requires strict unique corridor content and dynamic distance/equipment matrices to avoid thin-content penalties.",
      "Instant lane quote estimators dramatically increase mobile visitor form completions compared to static contact numbers.",
    ],
    relatedServices: ["seo-digital-marketing", "web-development"],
    publishedAt: "2026-09-22",
    seoTitle: "Building an Organic Growth Engine for Pulse Logistics | Nexovio",
    seoDescription:
      "How Nexovio engineered a programmatic freight SEO engine and regional route architecture for Pulse Logistics, driving a 210% surge in commercial shipping leads.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
