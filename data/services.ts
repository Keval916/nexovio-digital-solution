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
      "Custom web application & website development using WordPress, React, Next.js, Vue, Node.js, PHP, and E-Commerce (Shopify/WooCommerce) platforms built for speed, security, and scalability.",
    fullDescription:
      "We build robust, maintainable digital products across WordPress, React, Next.js, Vue, Node.js, and E-Commerce platforms. From custom WordPress CMS websites and headless WordPress setups to React & Next.js web applications, client portals, and Shopify/WooCommerce storefronts, our engineering delivers high performance, security, and effortless management.",
    businessProblem:
      "Businesses often struggle with slow, bloated websites that fail to convert visitors, suffer from security vulnerabilities, and cannot scale as product lines or traffic volumes grow.",
    whyItMatters:
      "A fast, modern website is the digital backbone of your business. Every 100ms of latency impacts conversion, search crawl efficiency, and brand credibility.",
    capabilities: [
      {
        title: "WordPress & Custom CMS Websites",
        description:
          "Bespoke WordPress theme & plugin development, WooCommerce setups, custom CMS configurations, and effortless publishing interfaces tailored for your team.",
      },
      {
        title: "React & Next.js Web Applications",
        description:
          "High-impact web platforms engineered with React and Next.js for sub-second rendering, server-side performance, and modern web ergonomics.",
      },
      {
        title: "Full-Stack Web Development (Vue, Node.js, PHP)",
        description:
          "Full-stack custom applications tailored to your operational workflows, built with Vue.js, Node.js, PHP, and modern backend databases.",
      },
      {
        title: "E-Commerce Solutions (Shopify & WooCommerce)",
        description:
          "Seamless checkout flows, headless commerce setups, custom Shopify theme configurations, WooCommerce integrations, and payment gateways.",
      },
      {
        title: "API & Third-Party Integrations",
        description:
          "Robust API connections linking your web platform to CRM systems (HubSpot, Salesforce), ERPs, payment gateways, and custom backend databases.",
      },
      {
        title: "Performance, Security & Code Refactoring",
        description:
          "Comprehensive optimization to eliminate render-blocking assets, secure top-tier Core Web Vitals scores, and harden security protocols.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Architecture & Technical Scoping",
        description:
          "We analyze user load requirements, data flows, technology selection (WordPress, React, Next.js, etc.), and integration points.",
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
      "WordPress / WooCommerce",
      "React & Next.js",
      "Vue.js",
      "Node.js & PHP",
      "Shopify & E-Commerce",
      "TypeScript",
      "Tailwind CSS",
      "REST & GraphQL APIs",
      "PostgreSQL / MySQL / MongoDB",
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
    id: "mobile-app-development",
    name: "Mobile App Development",
    slug: "mobile-app-development",
    iconName: "Smartphone",
    shortDescription:
      "We build mobile applications that give businesses a direct way to connect with customers, teams and digital services.",
    fullDescription:
      "We build mobile applications that give businesses a direct way to connect with customers, teams and digital services. From product planning and UI/UX to development and deployment, we help turn mobile app ideas into practical products.",
    businessProblem:
      "Businesses need mobile experiences that operate reliably offline and across iOS and Android without fragmented, high-maintenance codebases.",
    whyItMatters:
      "Mobile products create direct touchpoints with users, offering higher retention and engagement than mobile browser sessions alone.",
    capabilities: [
      {
        title: "Cross-Platform Mobile Development",
        description:
          "Engineering high-performance native-feeling mobile applications for iOS and Android using React Native and Flutter frameworks.",
      },
      {
        title: "Mobile UI/UX Architecture",
        description:
          "Designing touch-optimized screens, intuitive gesture navigation, and accessible mobile component systems.",
      },
      {
        title: "API & Backend Data Synchronization",
        description:
          "Connecting mobile apps to cloud APIs, authentication services, push notifications, and secure offline databases.",
      },
      {
        title: "App Store Deployment & Lifecycle Support",
        description:
          "Managing Apple App Store and Google Play Store submission, compliance checks, over-the-air updates, and performance monitoring.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Product Strategy & Technical Scoping",
        description:
          "Defining mobile feature requirements, platform targeting, offline capabilities, and backend API contracts.",
      },
      {
        step: "02",
        title: "Mobile UI Wireframing & Prototyping",
        description:
          "Designing screen flows and clickable mobile prototypes for iOS and Android form factors.",
      },
      {
        step: "03",
        title: "Cross-Platform Mobile Development",
        description:
          "Developing secure, performant mobile app code integrated with cloud backends and device sensors.",
      },
      {
        step: "04",
        title: "Device Testing & QA",
        description:
          "Validating app performance across real iOS and Android hardware models, battery usage, and network conditions.",
      },
      {
        step: "05",
        title: "App Store Publishing",
        description:
          "Deploying approved application packages to Apple App Store and Google Play Store.",
      },
    ],
    techStack: [
      "React Native",
      "Flutter",
      "iOS / Swift",
      "Android / Kotlin",
      "REST & GraphQL APIs",
      "Firebase / Push Notifications",
    ],
    deliverables: [
      "iOS App Store package and Google Play Store APK/AAB builds",
      "Full mobile codebase with documentation and API bindings",
      "Interactive Figma mobile design kit and component library",
    ],
    seoTitle: "Mobile App Development Services | Nexovio Digital Solutions",
    seoDescription:
      "Custom mobile app development services by Nexovio Digital Solutions. Cross-platform iOS and Android apps built for business performance.",
    image: "/images/services/mobile-app-development-nexovio.webp",
    imageAlt: "Mobile app development workflow by Nexovio Digital Solutions",
    faqs: [
      {
        question: "Do you build apps for both iOS and Android?",
        answer:
          "Yes. We specialize in cross-platform development (React Native & Flutter), allowing you to deploy to both Apple App Store and Google Play Store simultaneously.",
      },
      {
        question: "Can mobile apps work offline?",
        answer:
          "Yes. We can architect mobile apps with local database caching and background synchronization when connectivity is restored.",
      },
    ],
  },
  {
    id: "seo-digital-marketing",
    name: "SEO & Digital Marketing",
    slug: "seo-digital-marketing",
    iconName: "TrendingUp",
    shortDescription:
      "Turn online visibility into opportunity with search optimization, audience targeting, and measurable digital growth strategies.",
    fullDescription:
      "Getting traffic is only part of the job. Our SEO and digital marketing services focus on improving search visibility, reaching the right audience and creating digital campaigns that support measurable business growth.",
    businessProblem:
      "Companies invest heavily in websites that remain invisible to search engines, generate unqualified random visits, or fail to convert visitors into inquiries.",
    whyItMatters:
      "Sustainable organic search traffic compounds over time, lowering customer acquisition costs and creating an enduring inbound lead pipeline without continual ad spend dependence.",
    capabilities: [
      {
        title: "Technical SEO & Site Architecture",
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
        title: "Analytics & Tracking Architecture",
        description:
          "Deploying Google Analytics 4 (GA4) and Google Tag Manager (GTM) with custom event tracking for form submissions, clicks, and downloads.",
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
    seoTitle: "SEO & Digital Marketing Services | Nexovio Digital Solutions",
    seoDescription:
      "SEO and digital marketing services by Nexovio Digital Solutions. Technical SEO, search-intent content strategy, and conversion rate optimization.",
    image: "/images/services/digital-marketing-strategy.webp",
    imageAlt: "Digital marketing strategy and organic search analytics dashboard by Nexovio Digital Solutions",
    faqs: [
      {
        question: "Do you provide SEO with website development?",
        answer:
          "Yes. Technical SEO, site structure, performance, mobile responsiveness, and search-friendly architecture are built in during development.",
      },
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "While technical fixes show immediate crawl improvements, organic ranking growth typically matures over 3 to 6 months.",
      },
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    slug: "graphic-design",
    iconName: "Palette",
    shortDescription:
      "Brand visual identity, digital creative assets, marketing collateral, and UI graphics tailored to elevate your business presentation.",
    fullDescription:
      "We design compelling visual assets that articulate your brand's unique identity. From logo design and typography systems to digital ad creatives, presentation decks, and marketing collateral, our graphic design service ensures visual consistency and high commercial impact across every touchpoint.",
    businessProblem:
      "Inconsistent visual branding, amateur marketing graphics, and poorly designed collateral erode brand credibility and fail to capture customer attention.",
    whyItMatters:
      "Strong visual design establishes immediate market authority, improves brand recognition, and communicates quality before a single word is read.",
    capabilities: [
      {
        title: "Brand Identity & Logo Design",
        description:
          "Designing memorable logo marks, typography pairings, color systems, and comprehensive brand identity guidelines.",
      },
      {
        title: "Digital Marketing & Ad Creatives",
        description:
          "Crafting high-converting social media graphics, banner ads, email templates, and promotional visual assets.",
      },
      {
        title: "Marketing Collateral & Print Design",
        description:
          "Designing brochures, pitch decks, whitepapers, business cards, and event signage with print-ready precision.",
      },
      {
        title: "Custom Vector Illustration & Icons",
        description:
          "Bespoke SVG illustrations, custom icon sets, and infographics that simplify complex concepts into visual stories.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand Discovery & Creative Brief",
        description:
          "Understanding your audience, positioning, visual preferences, and business goals to define the design direction.",
      },
      {
        step: "02",
        title: "Concept Exploration & Moodboards",
        description:
          "Developing initial visual concepts, typography exploration, and color palettes for stakeholder review.",
      },
      {
        step: "03",
        title: "Refinement & Final Asset Production",
        description:
          "Fleshing out selected design directions into polished, pixel-perfect visual assets and multi-format exports.",
      },
      {
        step: "04",
        title: "Asset Handoff & Guidelines",
        description:
          "Delivering organized asset packages (SVG, PNG, PDF, EPS) along with visual style guides for future team use.",
      },
    ],
    techStack: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Vector SVG Graphics",
      "Print & Digital Pre-press Workflows",
    ],
    deliverables: [
      "Vector logo files (SVG, EPS, PNG, PDF) and brand style guide",
      "Social media graphic templates and digital banner packages",
      "Custom vector illustration library and icon sets",
    ],
    seoTitle: "Graphic Design & Branding Services | Nexovio Digital Solutions",
    seoDescription:
      "Professional graphic design and brand identity services by Nexovio Digital Solutions. Elevate your brand with custom logos, digital marketing creatives, and collateral.",
    image: "/images/services/graphic-design-mockup.svg",
    imageAlt: "Graphic design and brand identity visual assets by Nexovio Digital Solutions",
    faqs: [
      {
        question: "What visual assets do you provide with graphic design services?",
        answer:
          "We provide logo packages, brand style guides, digital marketing creatives, vector illustrations, social media assets, and print collateral.",
      },
      {
        question: "In what formats will I receive my final design assets?",
        answer:
          "You will receive editable vector files (SVG, EPS, AI, PDF) alongside high-resolution web-ready formats (PNG, WebP, JPG).",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find(
    (s) => s.slug === slug || (slug === "digital-marketing" && s.slug === "seo-digital-marketing")
  );
}
