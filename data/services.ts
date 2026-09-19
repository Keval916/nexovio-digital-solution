export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  businessProblem: string;
  whyItMatters: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  techStack: string[];
  deliverables: string[];
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-development",
    name: "Web Development",
    slug: "web-development",
    iconName: "Code2",
    shortDescription:
      "Engineered web applications, custom corporate portals, and high-performance websites built for reliability, security, and scalability.",
    fullDescription:
      "We build robust, maintainable digital products that combine clean software architecture with high-speed rendering. From bespoke corporate web platforms to custom SaaS interfaces and API integrations, our engineering approach prioritizes measurable performance, security, and effortless maintainability.",
    businessProblem:
      "Businesses often struggle with slow, bloated websites that fail to convert visitors, suffer from frequent downtime, and cannot scale as product lines or traffic volumes grow.",
    whyItMatters:
      "A fast, modern website is the digital backbone of your business. Every 100ms of latency impacts conversion, search crawl efficiency, and brand credibility.",
    capabilities: [
      {
        title: "Custom Web Application Development",
        description:
          "Full-stack custom applications tailored to your exact operational workflows, customer portals, and internal business dashboards.",
      },
      {
        title: "Corporate & Business Websites",
        description:
          "High-impact corporate web platforms engineered with modern frameworks (Next.js/React) for speed, security, and effortless content publishing.",
      },
      {
        title: "High-Converting E-Commerce Solutions",
        description:
          "Seamless checkout flows, headless commerce architectures, custom product configurators, and resilient inventory integrations.",
      },
      {
        title: "API & Third-Party Integrations",
        description:
          "Robust API connections linking your web platform to CRM systems (HubSpot, Salesforce), ERPs, payment gateways, and custom backend databases.",
      },
      {
        title: "Performance & Core Web Vitals Optimization",
        description:
          "Comprehensive refactoring to eliminate render-blocking assets, minimize JavaScript bundle footprints, and secure top-tier Core Web Vitals scores.",
      },
      {
        title: "Website Modernization & Code Refactoring",
        description:
          "Migrating legacy monolithic websites or vulnerable legacy CMS setups to contemporary, secure, decoupled front-end architectures.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Architecture & Technical Scoping",
        description:
          "We analyze user load requirements, data flows, database schemas, and integration points to create a bulletproof architectural blueprint.",
      },
      {
        step: "02",
        title: "Component & System Construction",
        description:
          "Modular development using strict TypeScript, component libraries, and clean code principles with continuous integration checks.",
      },
      {
        step: "03",
        title: "API Integration & Data Binding",
        description:
          "Connecting front-end interfaces to secure backend APIs, webhook handlers, databases, and third-party SaaS services.",
      },
      {
        step: "04",
        title: "Rigorous Testing & QA",
        description:
          "Cross-browser validation, responsive viewport checks, load stress testing, accessibility auditing, and security vulnerability scans.",
      },
      {
        step: "05",
        title: "Deployment & Production Monitoring",
        description:
          "Zero-downtime deployment pipelines, edge caching configuration, uptime monitoring, and error tracking instrumentation.",
      },
    ],
    techStack: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "REST & GraphQL APIs",
      "PostgreSQL / MongoDB",
      "Edge Caching / Vercel / AWS",
    ],
    deliverables: [
      "Clean, modular source code repository with comprehensive documentation",
      "Optimized production build with high Core Web Vitals scores",
      "Fully integrated APIs, contact forms, and lead capture hooks",
      "Automated CI/CD deployment configuration",
    ],
    seoTitle: "Web Development Services | Nexovio Digital Solutions",
    seoDescription:
      "Custom web development and engineering services by Nexovio Digital Solutions. Scalable Next.js web applications, corporate websites, and high-performance digital platforms.",
    image: "/images/services/nexovio-web-development-services.webp",
    imageAlt: "Nexovio Digital Solutions web development architecture and responsive dashboard interface",
    faqs: [
      {
        question: "What web development technologies does Nexovio specialize in?",
        answer:
          "We specialize in modern web architectures centered on Next.js, React, TypeScript, Node.js, and Tailwind CSS. We emphasize server components, optimized static/dynamic rendering, and clean headless integrations.",
      },
      {
        question: "Can Nexovio rebuild or modernize an existing legacy website?",
        answer:
          "Yes. We frequently modernize legacy websites by refactoring outdated codebases, migrating from slow monoliths to modern frameworks like Next.js, preserving existing SEO rankings with careful 301 redirects, and improving performance.",
      },
      {
        question: "Do you build custom web applications or only standard websites?",
        answer:
          "We engineer both. Our team builds complex web applications including client portals, SaaS interfaces, dashboard systems, and custom business management software alongside standard marketing websites.",
      },
      {
        question: "How do you ensure web application security?",
        answer:
          "We follow OWASP best practices, enforce strict HTTPS and security headers (CSP, HSTS, X-Frame-Options), validate all inputs on both client and server, protect against CSRF/XSS, and never expose sensitive keys in client bundles.",
      },
    ],
  },
  {
    id: "web-design",
    name: "Web Design",
    slug: "web-design",
    iconName: "Palette",
    shortDescription:
      "Bespoke, conversion-focused website designs that blend distinct brand aesthetics with intuitive navigation and seamless responsive adaptability.",
    fullDescription:
      "Great web design is not mere decoration—it is visual communication engineered to build trust and guide visitors toward meaningful actions. We craft custom digital interfaces that reflect your unique value proposition, avoid generic template cliches, and deliver a frictionless experience across smartphones, tablets, and wide desktop displays.",
    businessProblem:
      "Generic agency templates and uninspired visual layouts make brands indistinguishable from competitors, resulting in high bounce rates and low visitor retention.",
    whyItMatters:
      "First impressions happen in less than 50 milliseconds. A cohesive, bespoke visual design elevates perceived authority and commands commercial trust immediately.",
    capabilities: [
      {
        title: "Bespoke Visual Identity Integration",
        description:
          "Translating your brand character into modern typography, bespoke color palettes, micro-interactions, and visual motifs.",
      },
      {
        title: "Mobile-First Responsive Web Design",
        description:
          "Intentional screen layouts engineered for every device breakpoint (320px to 4K) without clipped text or awkward viewport shifts.",
      },
      {
        title: "Conversion-Centered Layout Architecture",
        description:
          "Structuring content hierarchy, eye-tracking scan paths, trust signals, and prominent calls-to-action that systematically drive lead inquiries.",
      },
      {
        title: "Interactive Prototypes & High-Fidelity Mockups",
        description:
          "Interactive Figma prototypes providing a realistic preview of animations, page transitions, and component behavior before code execution.",
      },
      {
        title: "Design System & Component Library Creation",
        description:
          "Reusable design tokens, typography scales, button states, and card structures that ensure visual harmony across every inner page.",
      },
      {
        title: "Website Redesign & Brand Repositioning",
        description:
          "Revitalizing tired web interfaces to realign with elevated market positioning, modern customer expectations, and current web standards.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Visual Discovery & Brand Alignment",
        description:
          "We dissect your target audience personas, competitor landscape, brand assets, and emotional touchpoints to establish visual creative direction.",
      },
      {
        step: "02",
        title: "Wireframing & Information Architecture",
        description:
          "Mapping out low-fidelity page blueprints to validate content layout, user flow, and conversion checkpoints before aesthetic styling.",
      },
      {
        step: "03",
        title: "High-Fidelity Interface Design",
        description:
          "Crafting full-color screens with bespoke typography, brand gradients, dark-mode styling, and tailored visual components.",
      },
      {
        step: "04",
        title: "Responsive Adaptation & Prototyping",
        description:
          "Validating tactile mobile interactions, tablet breakpoints, hover micro-interactions, and clickable prototype pathways.",
      },
      {
        step: "05",
        title: "Design Specification & Developer Handoff",
        description:
          "Exporting pixel-perfect design specifications, SVG assets, and design system variables ready for flawless front-end implementation.",
      },
    ],
    techStack: [
      "Figma",
      "Tailwind CSS Design Tokens",
      "SVG Vector Workflows",
      "Responsive Layout Grids",
      "Modern Typography (Inter / Sans)",
    ],
    deliverables: [
      "Complete high-fidelity Figma design files with responsive variations",
      "Interactive clickable prototype of critical user journeys",
      "Design system style guide (typography, colors, components, states)",
      "Optimized production visual assets and SVG icon library",
    ],
    seoTitle: "Web Design Services | Nexovio Digital Solutions",
    seoDescription:
      "Professional web design services by Nexovio Digital Solutions. Bespoke, conversion-focused, mobile-first website designs crafted for growing businesses.",
    image: "/images/services/web-design-services-nexovio.webp",
    imageAlt: "Modern web design interface system designed by Nexovio Digital Solutions",
    faqs: [
      {
        question: "How is Nexovio's web design approach different from standard agency templates?",
        answer:
          "We reject off-the-shelf templates and generic themes. Every website we design is tailored from scratch around your brand identity, target demographic, and conversion goals, ensuring an authentic digital presence.",
      },
      {
        question: "Will the design look good on mobile devices?",
        answer:
          "Yes. We design mobile-first with intentional adaptations for 320px, 375px, 768px, 1024px, and ultra-wide screens. Navigation, typography, and buttons are custom-tuned for touch interaction.",
      },
      {
        question: "Can I review and approve designs before development begins?",
        answer:
          "Absolutely. We provide interactive Figma prototypes and conduct iterative feedback cycles at wireframe and high-fidelity stages so you approve every detail before code is written.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    slug: "ui-ux-design",
    iconName: "Layout",
    shortDescription:
      "Human-centered user experience research, wireframing, interactive prototyping, and design systems engineered for effortless usability.",
    fullDescription:
      "Complex digital products require clear, intuitive interfaces. Our UI/UX design practice bridges user empathy and product strategy to reduce cognitive friction, streamline user journeys, and transform intricate software features into clean, engaging digital interactions that users love.",
    businessProblem:
      "Cluttered interfaces and confusing navigation confuse users, spike churn rates, drive up customer support tickets, and cause cart or onboarding abandonment.",
    whyItMatters:
      "Every dollar invested in UX design yields substantial returns by boosting task completion rates, onboarding velocity, and customer lifetime value.",
    capabilities: [
      {
        title: "User Experience Research & Personas",
        description:
          "Conducting qualitative research, stakeholder interviews, competitor teardowns, and user journey mapping to identify core user friction.",
      },
      {
        title: "Information Architecture & User Flows",
        description:
          "Structuring clean sitemaps, intuitive taxonomy, and logical step-by-step user paths from first touchpoint to goal completion.",
      },
      {
        title: "Wireframing & Interactive Prototyping",
        description:
          "Validating concepts early with functional clickable prototypes that model user states, transitions, and edge cases.",
      },
      {
        title: "Design Systems & Component Libraries",
        description:
          "Building scalable, documented UI component libraries that accelerate front-end development and maintain product consistency.",
      },
      {
        title: "Usability Testing & Interface Auditing",
        description:
          "Identifying UX bottlenecks through heuristic evaluations, accessibility checks (WCAG 2.1 AA), and interactive session reviews.",
      },
      {
        title: "Seamless Developer Handoff",
        description:
          "Providing clean tokenized variables, component variants, spacing matrices, and behavior notes that minimize development misinterpretation.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research & Problem Framing",
        description:
          "Uncovering user pain points, business requirements, and operational bottlenecks through structured user research.",
      },
      {
        step: "02",
        title: "Information Architecture & Wireframes",
        description:
          "Creating intuitive flowcharts, sitemaps, and structural wireframes prioritizing clarity and effortless navigation.",
      },
      {
        step: "03",
        title: "UI Design & Visual Hierarchy",
        description:
          "Applying brand aesthetics, accessible contrast, typography hierarchy, and micro-interaction states to the wireframes.",
      },
      {
        step: "04",
        title: "Interactive Prototyping & Validation",
        description:
          "Simulating realistic product interactions, evaluating usability, and refining edge states based on user feedback.",
      },
      {
        step: "05",
        title: "Documentation & Handoff Support",
        description:
          "Delivering comprehensive design systems, component properties, and working closely with engineers throughout development.",
      },
    ],
    techStack: [
      "Figma",
      "FigJam",
      "Design Systems Architecture",
      "WCAG 2.1 AA Accessibility Standards",
      "User Journey Mapping",
    ],
    deliverables: [
      "Comprehensive UX research summary and user persona profiles",
      "Complete user flow diagrams and information architecture maps",
      "Full interactive prototype in Figma covering primary user workflows",
      "Production-ready design system token package for developers",
    ],
    seoTitle: "UI/UX Design Services | Nexovio Digital Solutions",
    seoDescription:
      "User-centered UI/UX design services by Nexovio Digital Solutions. Wireframing, interactive prototyping, user journey mapping, and scalable design systems.",
    image: "/images/services/ui-ux-design-process.webp",
    imageAlt: "UI/UX design wireframe and interface workflow crafted by Nexovio Digital Solutions",
    faqs: [
      {
        question: "What is the difference between UI design and UX design?",
        answer:
          "UX (User Experience) focuses on how a product functions, how intuitive the journey feels, and how easily users complete tasks. UI (User Interface) focuses on the visual presentation—typography, color harmony, buttons, spacing, and aesthetic polish. We seamlessly integrate both.",
      },
      {
        question: "How do you ensure UI/UX accessibility?",
        answer:
          "We adhere to WCAG 2.1 AA guidelines, ensuring minimum color contrast ratios, clear focus indicators, accessible touch targets (minimum 44x44px), semantic hierarchy, and keyboard navigability.",
      },
      {
        question: "Do you create design systems for product teams?",
        answer:
          "Yes. We design comprehensive, tokenized design systems in Figma complete with variants, autolayout, typography hierarchies, and dark/light mode configurations that synchronize smoothly with modern codebases.",
      },
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    slug: "graphic-design",
    iconName: "Sparkles",
    shortDescription:
      "Strategic visual identities, marketing collateral, digital brand assets, and creative designs that establish instant authority and memorability.",
    fullDescription:
      "Visual consistency builds brand equity. Our graphic design services help businesses articulate their technological capability and professional credibility through cohesive visual assets—ranging from brand identity systems to digital marketing graphics, presentation decks, and executive collateral.",
    businessProblem:
      "Inconsistent graphics, amateur social media visuals, and fragmented brand collateral dilute company credibility and make prospective clients doubt technical competence.",
    whyItMatters:
      "Unified, professional graphic communication signals rigor, attention to detail, and premium value across every marketing touchpoint.",
    capabilities: [
      {
        title: "Brand Visual Systems & Identity Guidelines",
        description:
          "Comprehensive visual guidelines governing logo usage, color palettes, typography rules, iconography, and photography treatments.",
      },
      {
        title: "Digital Marketing & Campaign Creatives",
        description:
          "Attention-commanding social media assets, ad creatives, newsletter graphics, and digital display banners tailored for engagement.",
      },
      {
        title: "High-Stakes Presentation & Pitch Decks",
        description:
          "Polished investor pitch decks, capability presentations, and client proposal templates that articulate complex technical ideas clearly.",
      },
      {
        title: "Executive Business Collateral",
        description:
          "Stationery systems, digital business cards, white paper templates, case study one-sheeters, and corporate brochures.",
      },
      {
        title: "Custom Iconography & Vector Illustrations",
        description:
          "Tailored icon sets and technical diagrams that align strictly with your brand's geometric and aesthetic language.",
      },
      {
        title: "Social Media Brand Kits",
        description:
          "Pre-formatted, editable templates across LinkedIn, Twitter/X, and Instagram that empower internal teams to publish cohesive visuals quickly.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand Audit & Creative Brief",
        description:
          "We review existing brand assets, competitive positioning, and target audience expectations to define creative objectives.",
      },
      {
        step: "02",
        title: "Concept Exploration & Moodboards",
        description:
          "Developing visual directions, exploring typography pairings, color systems, and geometric motifs that embody your brand.",
      },
      {
        step: "03",
        title: "Asset Refinement & Application",
        description:
          "Fleshing out chosen concepts into comprehensive digital assets, social kits, and corporate templates with meticulous attention to detail.",
      },
      {
        step: "04",
        title: "Quality Review & Export Formats",
        description:
          "Exporting production-ready files in vector (SVG, PDF, EPS) and optimized web formats (WebP, PNG) for print and digital channels.",
      },
    ],
    techStack: [
      "Vector Graphic Systems",
      "Adobe Illustrator & Photoshop",
      "Figma Asset Libraries",
      "Scalable Vector Graphics (SVG)",
      "High-Resolution Print & Web Workflows",
    ],
    deliverables: [
      "Comprehensive brand visual style guide in PDF format",
      "Vector logo suite in full-color, monochrome, and dark-mode variants",
      "Social media graphic templates and campaign creative pack",
      "Custom vector iconography set in SVG and PNG formats",
    ],
    seoTitle: "Graphic Design Services | Nexovio Digital Solutions",
    seoDescription:
      "Strategic graphic design services by Nexovio Digital Solutions. Brand visual identity systems, digital marketing assets, presentation decks, and marketing collateral.",
    image: "/images/services/graphic-design-visual-systems.webp",
    imageAlt: "Brand graphic design system and corporate collateral designed by Nexovio Digital Solutions",
    faqs: [
      {
        question: "What formats do you provide for delivered graphics?",
        answer:
          "We provide all source files along with production formats: vector formats (SVG, EPS, PDF) for infinite scalability and print, plus optimized web formats (WebP, PNG, JPEG) tailored for digital platforms.",
      },
      {
        question: "Can you help our existing team maintain visual consistency?",
        answer:
          "Yes. We deliver clear brand guidelines and reusable template kits (Figma, Canva, or presentation formats) so your internal team can produce on-brand materials seamlessly.",
      },
      {
        question: "Do you design presentations and pitch decks?",
        answer:
          "Yes. We specialize in transforming dense technical content and complex business propositions into clear, visually captivating presentation decks.",
      },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    iconName: "TrendingUp",
    shortDescription:
      "Strategy-led organic search engine optimization, content frameworks, and conversion optimization built for sustainable, compounding growth.",
    fullDescription:
      "Digital marketing should never rely on vanity metrics or empty ranking guarantees. At Nexovio Digital Solutions, we treat marketing as a rigorous, data-driven system combining technical SEO, search-intent content architecture, and conversion rate optimization (CRO) to attract qualified prospects and turn traffic into measurable business pipeline.",
    businessProblem:
      "Companies invest heavily in websites that remain invisible to search engines, generate unqualified random visits, or fail to convert visitors into inquiries.",
    whyItMatters:
      "Sustainable organic search traffic compounds over time, lowering customer acquisition costs and creating an enduring inbound lead pipeline without continual ad spend dependence.",
    capabilities: [
      {
        title: "Technical SEO & Site Health Auditing",
        description:
          "Fixing crawl errors, optimizing site architecture, configuring XML sitemaps, structured data (JSON-LD), canonicalization, and Core Web Vitals.",
      },
      {
        title: "Search-Intent Content Strategy",
        description:
          "Identifying high-value commercial, informational, and transactional search queries to build authority content that captures ready-to-buy prospects.",
      },
      {
        title: "On-Page Content Optimization",
        description:
          "Structuring H1-H3 hierarchies, semantic HTML markup, contextual internal links, descriptive meta descriptions, and image alt architectures.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description:
          "Analyzing user friction, testing call-to-action placement, streamlining form fields, and refining copy to increase lead conversion percentages.",
      },
      {
        title: "Analytics & Conversion Tracking Architecture",
        description:
          "Deploying Google Analytics 4 (GA4) and Google Tag Manager (GTM) with custom event tracking for form submissions, clicks, and downloads.",
      },
      {
        title: "Local Search Optimization Readiness",
        description:
          "Preparing local schema, Google Business Profile readiness, and localized landing pages to win qualified regional market share.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Competitive Intelligence",
        description:
          "We analyze your technical site health, indexation status, current rankings, and competitor strengths to uncover growth gaps.",
      },
      {
        step: "02",
        title: "Search Intent Mapping & Strategy",
        description:
          "Mapping commercial, transactional, and problem-based search topics directly to dedicated service pages and educational articles.",
      },
      {
        step: "03",
        title: "Technical & On-Page Execution",
        description:
          "Resolving code-level bottlenecks, deploying rich schema, optimizing metadata, and fine-tuning internal link networks.",
      },
      {
        step: "04",
        title: "Measurement & Conversion Refinement",
        description:
          "Tracking search console impressions, crawl frequency, and on-site conversions to continually optimize content and lead funnels.",
      },
    ],
    techStack: [
      "Google Search Console",
      "Google Analytics 4 (GA4)",
      "Google Tag Manager (GTM)",
      "Structured Data (Schema.org / JSON-LD)",
      "Core Web Vitals Performance Tooling",
    ],
    deliverables: [
      "Technical SEO health audit and prioritized remediation roadmap",
      "Keyword & search-intent topic mapping matrix",
      "Configured GA4 and GTM tracking container with conversion events",
      "On-page optimization guidelines and content calendar framework",
    ],
    seoTitle: "Digital Marketing & SEO Services | Nexovio Digital Solutions",
    seoDescription:
      "Strategic digital marketing and SEO services by Nexovio Digital Solutions. Technical SEO, search-intent content strategy, and conversion rate optimization for sustainable growth.",
    image: "/images/services/digital-marketing-strategy.webp",
    imageAlt: "Digital marketing strategy and organic search analytics dashboard by Nexovio Digital Solutions",
    faqs: [
      {
        question: "Do you guarantee #1 rankings on Google?",
        answer:
          "No, and any agency that promises guaranteed #1 rankings is misleading you. Google's ranking algorithms are proprietary and dynamic. We promise rigorous, best-practice technical SEO, search-intent content alignment, and continuous optimization that drives compounding organic visibility over time.",
      },
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a compounding long-term investment. While technical crawl fixes and on-page improvements often yield positive signals within 4 to 8 weeks, substantial organic ranking and qualified traffic growth typically mature between 3 to 6 months.",
      },
      {
        question: "How do you track and report marketing conversions?",
        answer:
          "We set up GA4 and Google Tag Manager to track meaningful business actions—such as form submissions, quote requests, phone taps, and WhatsApp inquiries—so you see exact lead pipeline contributions rather than vanity pageviews.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
