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
      "A complex legacy ecommerce site hindered conversions and made managing inventory across multiple channels difficult.",
    objectives: [
      "Migrate seamlessly to BigCommerce without downtime",
      "Integrate custom ERP and inventory sync systems",
      "Improve mobile conversion funnel performance",
    ],
    strategy:
      "A scalable ecommerce experience designed to improve the customer journey while supporting complex business and integration requirements.",
    designApproach:
      "Clean visual product layout, streamlined checkout flow, and simplified category filtering.",
    development:
      "Built with BigCommerce API integrations, custom middleware, and responsive front-end components.",
    solution:
      "A high-performing ecommerce platform built for scale, inventory accuracy, and streamlined customer purchasing.",
    results: "92% conversion rate increase",
    keyLearnings: [
      "Optimizing inventory integration and mobile checkout directly improves e-commerce conversion rates.",
    ],
    relatedServices: ["web-development", "web-design"],
    publishedAt: "2026-04-10",
    seoTitle: "Parts Connexion Ecommerce Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Discover how Nexovio Digital Solutions executed a BigCommerce migration + custom integrations for Parts Connexion resulting in a 92% conversion rate increase.",
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
      "Complex user registration and manual intake workflows led to high user drop-offs and administrative overhead.",
    objectives: [
      "Automate user onboarding and data capture",
      "Integrate custom AI-powered functionality",
      "Accelerate user registration conversions",
    ],
    strategy:
      "A custom digital solution combining AI-powered functionality and automated workflows to create a smoother user experience.",
    designApproach:
      "Intuitive multi-step onboarding interface with clear progression and real-time guidance.",
    development:
      "Engineered automated API workflows, AI model hooks, and reactive front-end components.",
    solution:
      "An automated digital platform that simplifies registration and leverages AI automation for faster user processing.",
    results: "25% increase in registration conversions",
    keyLearnings: [
      "Automating complex intake workflows significantly reduces user drop-off.",
    ],
    relatedServices: ["web-development", "ui-ux-design"],
    publishedAt: "2026-06-15",
    seoTitle: "Inside Injury AI Build Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Explore how Nexovio Digital Solutions built a custom AI application with automated workflows for Inside Injury, boosting registration conversions by 25%.",
  },
  {
    slug: "infiniti-home-comfort",
    title: "HVAC digital booking + lead pipeline",
    client: "Infiniti Home Comfort",
    industry: "Home Services",
    services: ["Web Development", "SEO & Digital Marketing"],
    coverImage: "/images/case-studies/pulse-logistics-case-study.svg",
    coverImageAlt: "Infiniti Home Comfort HVAC digital booking platform by Nexovio Digital Solutions",
    challenge:
      "Slow page speeds and an outdated booking interface caused lost service bookings during peak seasonal periods.",
    objectives: [
      "Achieve sub-second page load times and 99.9% uptime",
      "Build an instant online HVAC booking engine",
      "Capture local home service search leads",
    ],
    strategy:
      "A performance-focused digital experience designed to simplify online booking and improve the lead management journey.",
    designApproach:
      "Mobile-optimized service selector, clear pricing estimators, and one-tap booking forms.",
    development:
      "Developed on high-availability cloud infrastructure with Next.js edge caching and CRM lead hooks.",
    solution:
      "A ultra-fast digital booking platform that reliably captures and dispatches HVAC service leads.",
    results: "99.9% uptime + 40% faster page loads",
    keyLearnings: [
      "High reliability and fast mobile load times directly translate into higher local service booking rates.",
    ],
    relatedServices: ["web-development", "seo-digital-marketing"],
    publishedAt: "2026-08-01",
    seoTitle: "Infiniti Home Comfort Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Read how Nexovio Digital Solutions engineered an HVAC digital booking platform for Infiniti Home Comfort achieving 99.9% uptime and 40% faster page loads.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
