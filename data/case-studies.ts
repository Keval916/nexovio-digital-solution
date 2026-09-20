export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  coverImage: string;
  coverImageAlt: string;
  challenge: string;
  objectives: string[];
  strategy: string;
  designApproach: string;
  development: string;
  solution: string;
  results: string;
  keyLearnings: string[];
  relatedServices: string[];
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "parts-connexion",
    title: "BigCommerce migration + custom integrations",
    client: "Parts Connexion",
    industry: "Ecommerce",
    services: ["Web Development", "Web Design"],
    coverImage: "/images/case-studies/apex-cloud-case-study.svg",
    coverImageAlt: "Parts Connexion BigCommerce migration ecommerce platform by Nexovio Digital Solutions",
    challenge:
      "Legacy ecommerce site with complex architecture was hampering conversions and creating inventory management challenges across multiple channels.",
    objectives: [
      "Migrate to BigCommerce without any downtime",
      "Custom ERP and inventory sync systems integrations",
      "Enhance mobile conversion funnel performance",
    ],
    strategy:
      "A scalable ecommerce experience built to optimize the customer journey while handling complex business and integration requirements.",
    designApproach:
      "Clean visual product layout, optimized checkout flow, and simplified category filtering.",
    development:
      "Built using BigCommerce API integrations, custom middleware, and responsive front-end components.",
    solution:
      "High-performance ecommerce platform for scalability, accurate inventory, and efficient customer purchasing.",
    results: "92% conversion rate increase",
    keyLearnings: [
      "Inventory integration and mobile checkout optimization directly impact e-commerce conversion rates.",
    ],
    relatedServices: ["web-development", "web-design"],
    publishedAt: "2026-04-10",
    seoTitle: "Parts Connexion Ecommerce Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Learn how Nexovio Digital Solutions implemented a BigCommerce migration + custom integrations for Parts Connexion leading to a 92% conversion rate improvement.",
  },
  {
    slug: "inside-injury",
    title: "Custom AI build + automated workflows",
    client: "Inside Injury",
    industry: "AI & Technology",
    services: ["Web Development", "UI/UX Design"],
    coverImage: "/images/case-studies/lumina-health-case-study.svg",
    coverImageAlt: "Inside Injury custom AI build and automated workflows by Nexovio Digital Solutions",
    challenge:
      "User drop-offs and administrative burden were high due to complex user registration and manual intake workflows.",
    objectives: [
      "Automate user onboarding and data capture",
      "Implement custom AI capabilities",
      "Improve user registration conversion rates",
    ],
    strategy:
      "A custom digital solution with AI-powered functionality and automated workflows for a seamless user experience.",
    designApproach:
      "Simple multi-step onboarding interface, with clear progression and real-time guidance.",
    development:
      "Automated API workflows, AI model hooks, and reactive front-end components engineered.",
    solution:
      "Automated digital platform that streamlines registration and uses AI automation for faster user processing.",
    results: "25% increase in registration conversions",
    keyLearnings: [
      "Automating complex intake workflows significantly reduces user drop-off.",
    ],
    relatedServices: ["web-development", "ui-ux-design"],
    publishedAt: "2026-06-15",
    seoTitle: "Inside Injury AI Build Case Study | Nexovio Digital Solutions",
    seoDescription:
      "See how Nexovio Digital Solutions created a custom AI application with automated workflows for Inside Injury, leading to a 25% increase in registration conversions.",
  },
  {
    slug: "infiniti-home-comfort",
    title: "HVAC digital booking + lead pipeline",
    client: "Infiniti Home Comfort",
    industry: "Home Services",
    services: ["Web Development", "SEO & Digital Marketing"],
    coverImage: "/images/case-studies/pulse-logistics-case-study.svg",
    coverImageAlt: "Infiniti Home Comfort HVAC digital booking platform by Nexovio Digital Solutions",
    challenge:
      "Slow page speeds and an old booking interface were resulting in lost service bookings in the busy summer seasonal periods.",
    objectives: [
      "Deliver sub-second page load times and 99.9% uptime",
      "Create a real-time, online HVAC booking engine",
      "Harvest local home service search leads",
    ],
    strategy:
      "A performance-oriented digital experience that makes online booking simpler and the lead management experience easier.",
    designApproach:
      "Mobile service selector, clear pricing estimators, and single-tap booking forms.",
    development:
      "Built with high-availability cloud infrastructure, Next.js edge caching, and CRM lead hooks.",
    solution:
      "A fast, digital booking platform that effectively rakes in and dispatches hvac service leads.",
    results: "99.9% uptime + 40% faster page loads",
    keyLearnings: [
      "Fast, stable, mobile load times result in higher local service booking rates. ",
    ],
    relatedServices: ["web-development", "seo-digital-marketing"],
    publishedAt: "2026-08-01",
    seoTitle: "Infiniti Home Comfort Case Study | Nexovio Digital Solutions",
    seoDescription:
      "See how Nexovio Digital Solutions built an HVAC digital booking platform for Infiniti Home Comfort with 99.9% uptime and 40% faster page loads.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
