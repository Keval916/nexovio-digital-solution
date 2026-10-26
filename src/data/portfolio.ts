export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  category: "Web Development" | "Web Design" | "UI/UX Design" | "Graphic Design" | "Digital Marketing";
  industry: string;
  shortDescription: string;
  services: string[];
  techStack?: string[];
  featuredImage: string;
  imageAlt: string;
  hasCaseStudy: boolean;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "apex-cloud-platform",
    title: "Apex Cloud Enterprise Platform",
    slug: "b2b-digital-platform",
    category: "Web Development",
    industry: "Enterprise SaaS",
    shortDescription:
      "A high-throughput cloud infrastructure management dashboard engineered with Next.js, strict TypeScript, and real-time telemetry streaming.",
    services: ["Web Development", "UI/UX Design"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js"],
    featuredImage: "/images/portfolio/apex-cloud-enterprise-platform.svg",
    imageAlt: "Apex Cloud Enterprise Platform dashboard interface developed by Nexovio Digital Solutions",
    hasCaseStudy: true,
  },
  {
    id: "parts-connexion-platform",
    title: "Parts Connexion Headless Storefront",
    slug: "parts-connexion",
    category: "Web Development",
    industry: "Ecommerce & Retail",
    shortDescription:
      "A high-volume headless ecommerce migration with 40k+ SKUs, sub-second edge rendering, and real-time bidirectional ERP inventory synchronization.",
    services: ["Web Development", "Web Design"],
    techStack: ["Next.js", "Shopify Storefront API", "TypeScript", "Tailwind CSS", "Cloudflare"],
    featuredImage: "/images/case-studies/parts-connexion-ecommerce-platform.jpg",
    imageAlt: "Parts Connexion headless ecommerce platform by Nexovio Digital Solutions",
    hasCaseStudy: true,
  },
  {
    id: "lumina-health-portal",
    title: "Lumina Health Patient Experience",
    slug: "lumina-health-patient-experience",
    category: "UI/UX Design",
    industry: "Healthcare & Telemedicine",
    shortDescription:
      "A frictionless, accessible patient onboarding and consultation booking system designed with human-centric UX and WCAG 2.1 AA compliance.",
    services: ["UI/UX Design", "Web Design"],
    techStack: ["Figma", "User Journey Mapping", "Design Systems", "WCAG 2.1 AA"],
    featuredImage: "/images/portfolio/lumina-health-patient-experience.svg",
    imageAlt: "Lumina Health patient consultation workflow designed by Nexovio Digital Solutions",
    hasCaseStudy: true,
  },
  {
    id: "inside-injury-ai",
    title: "Inside Injury Legal AI Intake Engine",
    slug: "inside-injury",
    category: "UI/UX Design",
    industry: "AI & Legal Tech",
    shortDescription:
      "A secure, conversational AI-assisted legal intake engine that cut claimant onboarding time to under 4 minutes while pre-qualifying case viability.",
    services: ["UI/UX Design", "Web Development"],
    techStack: ["Next.js", "Python FastAPI", "OpenAI API", "PostgreSQL", "Tailwind CSS"],
    featuredImage: "/images/case-studies/enterprise-saas-ai-knowledge-agent-web-portal.webp",
    imageAlt: "Inside Injury custom AI build and automated workflows by Nexovio Digital Solutions",
    hasCaseStudy: true,
  },
  {
    id: "strata-financial-advisory",
    title: "Strata Financial Mobile & Wealth Portal",
    slug: "fintech-mobile-app",
    category: "Web Design",
    industry: "FinTech & Banking",
    shortDescription:
      "A high-trust cross-platform FinTech application and corporate portal combining biometric KYC onboarding with dark-mode financial analytics.",
    services: ["Web Design", "Web Development"],
    techStack: ["React Native", "Next.js", "TypeScript", "Tailwind CSS", "AWS KMS"],
    featuredImage: "/images/portfolio/strata-financial-corporate-portal.svg",
    imageAlt: "Strata Financial advisory corporate web design crafted by Nexovio Digital Solutions",
    hasCaseStudy: true,
  },
  {
    id: "infiniti-home-comfort-hvac",
    title: "Infiniti Home Comfort HVAC Platform",
    slug: "infiniti-home-comfort",
    category: "Digital Marketing",
    industry: "Home Services & HVAC",
    shortDescription:
      "A lightning-fast digital booking engine and programmatic local SEO pipeline that achieved sub-second loads and top-3 Google Map Pack rankings.",
    services: ["Digital Marketing", "Web Development"],
    techStack: ["Next.js", "Tailwind CSS", "Redis", "Google Maps API", "Local SEO"],
    featuredImage: "/images/case-studies/infiniti-home-comfort-booking-platform.jpg",
    imageAlt: "Infiniti Home Comfort HVAC digital booking platform by Nexovio Digital Solutions",
    hasCaseStudy: true,
  },
  {
    id: "zenith-brand-system",
    title: "Zenith Robotics Visual Identity",
    slug: "zenith-robotics-visual-identity",
    category: "Graphic Design",
    industry: "Industrial Automation & Robotics",
    shortDescription:
      "A comprehensive visual identity suite comprising modular vector iconography, investor pitch collateral, and digital brand guidelines.",
    services: ["Graphic Design"],
    techStack: ["Vector Design", "Brand Guidelines", "Design Tokens"],
    featuredImage: "/images/portfolio/zenith-robotics-visual-identity.svg",
    imageAlt: "Zenith Robotics brand visual system and presentation collateral by Nexovio Digital Solutions",
    hasCaseStudy: false,
  },
  {
    id: "pulse-growth-engine",
    title: "Pulse Logistics Organic Growth Engine",
    slug: "pulse-logistics-organic-growth-engine",
    category: "Digital Marketing",
    industry: "Freight & Supply Chain",
    shortDescription:
      "A programmatic search-intent architecture covering 250+ national freight lanes, structured Schema markup, and real-time rate estimators.",
    services: ["Digital Marketing", "Web Development"],
    techStack: ["Technical SEO", "Content Architecture", "Cloudflare Workers", "GA4 / GTM"],
    featuredImage: "/images/portfolio/pulse-logistics-organic-growth-engine.svg",
    imageAlt: "Pulse Logistics organic search growth strategy implemented by Nexovio Digital Solutions",
    hasCaseStudy: true,
  },
  {
    id: "kora-commerce-storefront",
    title: "Kora Modern Goods E-Commerce",
    slug: "kora-modern-goods-ecommerce",
    category: "Web Development",
    industry: "Direct-to-Consumer Retail",
    shortDescription:
      "A headless storefront featuring sub-second page transitions, dynamic product filtering, and an optimized mobile checkout experience.",
    services: ["Web Development", "Web Design"],
    techStack: ["Next.js", "Tailwind CSS", "Headless Commerce"],
    featuredImage: "/images/portfolio/kora-modern-goods-ecommerce.svg",
    imageAlt: "Kora Modern Goods e-commerce web platform developed by Nexovio Digital Solutions",
    hasCaseStudy: false,
  },
];
