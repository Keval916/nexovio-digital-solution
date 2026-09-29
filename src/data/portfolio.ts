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
    slug: "apex-cloud-enterprise-platform",
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
    id: "lumina-health-portal",
    title: "Lumina Health Patient Experience",
    slug: "lumina-health-patient-experience",
    category: "UI/UX Design",
    industry: "Healthcare & Telemedicine",
    shortDescription:
      "A frictionless, accessible patient onboarding and consultation booking system designed with human-centric UX and WCAG 2.1 AA compliance.",
    services: ["UI/UX Design", "Web Design"],
    techStack: ["Figma", "User Journey Mapping", "Design Systems"],
    featuredImage: "/images/portfolio/lumina-health-patient-experience.svg",
    imageAlt: "Lumina Health patient consultation workflow designed by Nexovio Digital Solutions",
    hasCaseStudy: true,
  },
  {
    id: "strata-financial-advisory",
    title: "Strata Financial Corporate Portal",
    slug: "strata-financial-corporate-portal",
    category: "Web Design",
    industry: "Wealth Management & Advisory",
    shortDescription:
      "A high-trust, editorial corporate web platform combining clean typographic hierarchy, custom client calculators, and lead capture funnels.",
    services: ["Web Design", "Web Development"],
    techStack: ["Next.js", "Tailwind CSS", "Interactive Components"],
    featuredImage: "/images/portfolio/strata-financial-corporate-portal.svg",
    imageAlt: "Strata Financial advisory corporate web design crafted by Nexovio Digital Solutions",
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
      "A search-intent content architecture and technical SEO framework designed to capture commercial queries across national freight routes.",
    services: ["Digital Marketing"],
    techStack: ["Technical SEO", "Content Architecture", "GA4 / GTM"],
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
