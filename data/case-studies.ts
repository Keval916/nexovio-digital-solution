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
    slug: "apex-cloud-enterprise-platform",
    title: "Engineering a High-Throughput Cloud Management Interface",
    client: "Apex Cloud Technologies (Sample Case Study)",
    industry: "Enterprise SaaS & Cloud Infrastructure",
    services: ["Web Development", "UI/UX Design"],
    coverImage: "/images/case-studies/apex-cloud-case-study.svg",
    coverImageAlt: "Apex Cloud Enterprise Platform interface architecture by Nexovio Digital Solutions",
    challenge:
      "Apex Cloud experienced severe interface lag, unmanageable code sprawl, and user frustration across its enterprise dashboard as server instance telemetry expanded past 50,000 active nodes. Client administrators struggled with fragmented navigation and sluggish filter operations.",
    objectives: [
      "Eliminate client-side UI latency under heavy telemetry streaming",
      "Consolidate fragmented server management controls into an intuitive unified dashboard",
      "Architect a scalable component library for continuous engineering velocity",
      "Achieve zero layout shifts during dynamic data updates",
    ],
    strategy:
      "We initiated a full architectural decouple: separating data-heavy table views into virtualized windowing components, introducing strict TypeScript domain models, and implementing an intentional dark-mode visual hierarchy with accessible contrast tokens.",
    designApproach:
      "Designed an asymmetric bento layout prioritizing critical health vitals, active CPU/RAM gauges, and quick action bars. Reduced cognitive noise by grouping tertiary server metrics into contextual collapsible drawers.",
    development:
      "Implemented with Next.js App Router and Tailwind CSS, leveraging React server components for layout scaffolding and optimized client components with virtualized lists for live data rendering.",
    solution:
      "Delivered a state-of-the-art enterprise web application that handles high-frequency data streaming gracefully while maintaining 60fps interaction smoothness across all modern desktop browsers.",
    results: "Results data to be added upon completion of production client verification cycle.",
    keyLearnings: [
      "Server-side component composition significantly reduces initial bundle delivery to client machines.",
      "Strict typographic hierarchy and muted background contrast reduce eye fatigue for sysadmins monitoring complex dashboards.",
    ],
    relatedServices: ["web-development", "ui-ux-design"],
    publishedAt: "2026-03-15",
    seoTitle: "Apex Cloud Platform Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Read how Nexovio Digital Solutions engineered a high-throughput, responsive enterprise cloud management interface using Next.js and modern UX design.",
  },
  {
    slug: "lumina-health-patient-experience",
    title: "Designing an Accessible Healthcare Onboarding & Booking Journey",
    client: "Lumina Health Network (Sample Case Study)",
    industry: "Healthcare & Telemedicine",
    services: ["UI/UX Design", "Web Design"],
    coverImage: "/images/case-studies/lumina-health-case-study.svg",
    coverImageAlt: "Lumina Health patient onboarding workflow case study by Nexovio Digital Solutions",
    challenge:
      "Patients frequently abandoned online appointment scheduling due to convoluted multi-step forms, unreadable micro-copy, and poor mobile accessibility for elderly users.",
    objectives: [
      "Design a frictionless appointment booking journey requiring less than 2 minutes to complete",
      "Achieve full WCAG 2.1 AA accessibility compliance across all interactive elements",
      "Build a clear information architecture for specialist provider discovery",
    ],
    strategy:
      "Through user journey mapping and accessibility auditing, we restructured the consultation funnel into logical single-focus steps with clear progress indicators, generous touch targets, and natural language confirmations.",
    designApproach:
      "Utilized clean sans-serif typography, high contrast color pairings (compliant with 4.5:1 ratio), intuitive calendar pickers, and reassurance messaging around patient data privacy.",
    development:
      "Created an interactive component prototype in Figma and collaborated directly with engineering teams to produce accessible HTML5 forms with ARIA live regions for screen readers.",
    solution:
      "A human-first telemedicine onboarding system that guides patients effortlessly through specialist selection, insurance verification, and booking confirmation.",
    results: "Results data to be added upon completion of production client verification cycle.",
    keyLearnings: [
      "Progressive disclosure in healthcare forms drastically lowers cognitive overload for anxious patients.",
      "Accessible design directly improves commercial usability for all age demographics.",
    ],
    relatedServices: ["ui-ux-design", "web-design"],
    publishedAt: "2026-05-10",
    seoTitle: "Lumina Health UI/UX Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Explore how Nexovio Digital Solutions redesigned the patient onboarding and telemedicine booking journey for Lumina Health with accessible UX.",
  },
  {
    slug: "pulse-logistics-organic-growth-engine",
    title: "Building an Organic Search Acquisition Engine for Commercial Freight",
    client: "Pulse Logistics Global (Sample Case Study)",
    industry: "Freight, Logistics & Supply Chain",
    services: ["Digital Marketing", "Web Development"],
    coverImage: "/images/case-studies/pulse-logistics-case-study.svg",
    coverImageAlt: "Pulse Logistics organic search architecture case study by Nexovio Digital Solutions",
    challenge:
      "Pulse Logistics relied entirely on expensive paid search clicks to acquire freight inquiries. Their existing website suffered from crawl errors, duplicate URL parameters, slow Core Web Vitals, and zero search visibility for core regional transport terms.",
    objectives: [
      "Resolve critical technical SEO crawl bottlenecks and eliminate duplicate parameter indexing",
      "Build an organic search-intent architecture targeting high-value commercial freight corridors",
      "Implement transparent conversion tracking in GA4 for lead quote requests",
    ],
    strategy:
      "We executed an in-depth technical SEO refactoring, implemented structured schema (Service, Organization, FAQ), established clean canonicalization rules, and engineered dedicated hub pages for regional freight solutions.",
    designApproach:
      "Redesigned the quote inquiry flow with sticky CTAs, route pricing calculators, and upfront trust factors (carrier vetting, transit guarantees).",
    development:
      "Rebuilt the core marketing templates in Next.js, optimizing server response times, eliminating render-blocking scripts, and configuring dynamic XML sitemaps.",
    solution:
      "An enterprise search-optimized web engine that systematically captures commercial transport searches and converts qualified visitors into quote inquiries.",
    results: "Results data to be added upon completion of production client verification cycle.",
    keyLearnings: [
      "Fixing underlying technical crawl architecture and canonical tags must precede any content expansion.",
      "Clear, upfront conversion paths turn informational search traffic into transactional business quotes.",
    ],
    relatedServices: ["digital-marketing", "web-development"],
    publishedAt: "2026-07-22",
    seoTitle: "Pulse Logistics SEO Case Study | Nexovio Digital Solutions",
    seoDescription:
      "Discover how Nexovio Digital Solutions structured a technical SEO and organic search acquisition architecture for commercial freight logistics.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
