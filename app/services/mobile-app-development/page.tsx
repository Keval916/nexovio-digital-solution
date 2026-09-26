import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Smartphone,
  Layers,
  Cpu,
  Sparkles,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCode2,
  Search,
  Workflow,
  Eye,
  Check,
  MousePointerClick,
  Palette,
  Terminal,
  Activity,
  Rocket,
  Building2,
  ShoppingBag,
  Boxes,
  HelpCircle,
  ExternalLink,
  Lock,
  Code2,
  Clock3,
  Database,
  BarChart3,
  Component,
  GitBranch,
  BellRing,
  CheckSquare,
  RefreshCw,
  Server,
  Cloud,
  Apple,
  Stethoscope,
  Briefcase,
  GraduationCap,
  Store,
  Compass,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { generatePageMetadata, SITE_URL } from "@/lib/seo";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

// ==========================================
// METADATA & SEO FOUNDATION
// ==========================================

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Mobile App Development Services | iOS & Android Apps",
    description:
      "Build scalable iOS and Android mobile apps with cross-platform development, mobile UI/UX, API integration, testing and app store deployment.",
    keywords: [
      "mobile app development",
      "mobile app development company",
      "mobile app development services",
      "custom mobile app development",
      "mobile application development",
      "app development services",
      "iOS app development",
      "Android app development",
      "iPhone app development",
      "Android application development",
      "cross platform app development",
      "React Native app development",
      "Flutter app development",
      "enterprise mobile app development",
      "MVP app development",
      "mobile app design and development",
      "mobile UI UX design",
      "mobile UX design",
      "mobile app development agency",
      "mobile app maintenance",
      "mobile app testing",
      "mobile app API integration",
      "offline mobile app development",
      "push notification integration",
      "app store deployment",
      "SaaS mobile app development",
      "B2B mobile app development",
      "on demand app development",
      "ecommerce mobile app development",
      "fintech app development",
      "healthcare mobile app development",
    ],
    path: "/services/mobile-app-development",
  }),
  title: "Mobile App Development Services | iOS & Android Apps | Nexovio",
};

// ==========================================
// DATA STRUCTURES: 12 CORE SERVICES WITH MATCHED REALISTIC IMAGES
// ==========================================

interface MobileServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keywordCluster: string;
  image: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

const MOBILE_SERVICES: MobileServiceItem[] = [
  {
    id: "discovery",
    number: "01",
    title: "Product Discovery & App Strategy",
    tagline: "Define Problem, Workflows & MVP Scope Before Code",
    description:
      "Define the problem, target audience, key workflows, MVP scope, and technical direction before development begins to minimize risks and ensure measurable product viability.",
    keywordCluster: "mobile app development services · app development company",
    image: "/images/services/ui-ux/01-ux-research-personas.jpg",
    imageAlt: "Mobile app product discovery, persona research, and MVP technical roadmap planning",
    icon: Compass,
    deliverables: [
      "Target user persona & problem framing",
      "MVP scope definition & feature matrix",
      "Technical architecture & platform recommendation",
      "Third-party API & dependency assessment",
      "Sprint roadmap & milestone scheduling",
    ],
  },
  {
    id: "uiux",
    number: "02",
    title: "Mobile UI/UX Design",
    tagline: "Touch-Optimized Interfaces for Real Mobile Contexts",
    description:
      "Create touch-optimized interfaces, navigation patterns, component systems, and interactive clickable prototypes tailored for real-world mobile behavior and ergonomics.",
    keywordCluster: "mobile app UI UX · mobile UX design",
    image: "/images/services/ui-ux/05-ui-interface-design.jpg",
    imageAlt: "High-fidelity modern mobile app UI interface design on studio display",
    icon: MousePointerClick,
    deliverables: [
      "Mobile-first user journey & navigation flows",
      "Touch target ergonomics (48x48px minimum)",
      "High-fidelity Figma component library",
      "Clickable interactive mobile prototypes",
      "Light and dark mode theme specifications",
    ],
  },
  {
    id: "cross-platform",
    number: "03",
    title: "Cross-Platform Development",
    tagline: "Unified Codebase for iOS & Android with React Native / Flutter",
    description:
      "Build iOS and Android applications from a unified codebase using React Native or Flutter, eliminating duplicate development while delivering 60fps native performance.",
    keywordCluster: "cross-platform app development · React Native · Flutter",
    image: "/images/services/ui-ux/09-responsive-mobile-ux.webp",
    imageAlt: "Cross-platform mobile application development across iOS and Android form factors",
    icon: Cpu,
    deliverables: [
      "Single shared codebase across iOS & Android",
      "Native device bridge & sensor integration",
      "Modular component architecture",
      "Reusable business logic & state stores",
      "Up to 40% reduction in delivery timeline",
    ],
  },
  {
    id: "ios",
    number: "04",
    title: "iOS App Development",
    tagline: "Tailored Experiences Engineered for the Apple Ecosystem",
    description:
      "Develop mobile experiences for Apple devices with platform-aware interaction, Human Interface Guidelines adherence, Swift integration, and Apple App Store compliance.",
    keywordCluster: "iOS app development · iPhone app development",
    image: "/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp",
    imageAlt: "Native iOS mobile application development with Apple Human Interface Guidelines and biometric auth",
    icon: Apple,
    deliverables: [
      "Swift & iOS SDK native capabilities",
      "Apple Human Interface Guidelines adherence",
      "Dynamic Island & WidgetKit extensions",
      "Apple Pay & Face ID / Touch ID security",
      "TestFlight distribution builds",
    ],
  },
  {
    id: "android",
    number: "05",
    title: "Android App Development",
    tagline: "Responsive Experiences for the Diverse Android Ecosystem",
    description:
      "Build Android applications with responsive layouts across diverse screen sizes, device hardware variations, Material 3 design standards, and Google Play requirements.",
    keywordCluster: "Android app development · Android application development",
    image: "/images/services/mobile-app-development-nexovio.webp",
    imageAlt: "Responsive Android app development with Kotlin and Material 3 design standards",
    icon: Smartphone,
    deliverables: [
      "Kotlin & Android Jetpack architecture",
      "Material 3 design system implementation",
      "Multi-screen & tablet responsive handling",
      "Google Pay & BiometricPrompt integration",
      "Google Play internal testing tracks",
    ],
  },
  {
    id: "api",
    number: "06",
    title: "API & Backend Integration",
    tagline: "Seamless Data Flow to Cloud Platforms & Business Systems",
    description:
      "Connect mobile apps to REST/GraphQL APIs, authentication providers, cloud microservices, transactional databases, and external business SaaS platforms.",
    keywordCluster: "mobile app API integration · app backend development",
    image: "/images/services/ui-ux/02-information-architecture.jpg",
    imageAlt: "Mobile app REST and GraphQL API backend data integration and information architecture",
    icon: Boxes,
    deliverables: [
      "REST & GraphQL endpoint binding",
      "Sub-second network request serialization",
      "Webhook & real-time WebSocket listeners",
      "Payment gateway & CRM integrations",
      "Automated payload schema validation",
    ],
  },
  {
    id: "security",
    number: "07",
    title: "Authentication & Security",
    tagline: "Enterprise-Grade Session, Token & Storage Protection",
    description:
      "Implement secure biometric login, OAuth 2.0 / JWT flows, encrypted token session storage, fine-grained permissions, and protected data access across all screens.",
    keywordCluster: "mobile app security · mobile authentication",
    image: "/images/services/ui-ux/07-design-systems-components.jpg",
    imageAlt: "Mobile app biometric security tokens, Keychain storage and encrypted authentication architecture",
    icon: Lock,
    deliverables: [
      "Biometric authentication (Face ID / Fingerprint)",
      "OAuth 2.0, SSO & JWT token management",
      "Keychain (iOS) & Keystore (Android) encryption",
      "HTTPS / TLS certificate pinning",
      "Role-based screen & API authorization",
    ],
  },
  {
    id: "offline",
    number: "08",
    title: "Offline & Data Synchronization",
    tagline: "Dependable App Performance with Intermittent Connectivity",
    description:
      "Support local SQLite/WatermelonDB storage, intelligent caching, and background synchronization so users can continue work seamlessly even when internet access drops.",
    keywordCluster: "offline mobile app development · mobile data synchronization",
    image: "/images/services/ui-ux/03-user-flows-journey-mapping.jpg",
    imageAlt: "Offline mobile app data caching, SQLite synchronization, and background offline queues",
    icon: Database,
    deliverables: [
      "Embedded SQLite / WatermelonDB caching",
      "Optimistic UI updates for instant feedback",
      "Conflict resolution & two-way synchronization",
      "Offline queue management for actions",
      "Zero data loss upon reconnecting",
    ],
  },
  {
    id: "push",
    number: "09",
    title: "Push Notifications",
    tagline: "Targeted Messaging for Retention, Reminders & Updates",
    description:
      "Design targeted notification workflows for transactional receipts, workflow reminders, product announcements, and user re-engagement via Firebase Cloud Messaging.",
    keywordCluster: "push notification integration · Firebase Cloud Messaging",
    image: "/images/services/ui-ux/04-ux-wireframing.jpg",
    imageAlt: "Push notification deep linking architecture and actionable user engagement flows",
    icon: BellRing,
    deliverables: [
      "Firebase Cloud Messaging (FCM) & APNs setup",
      "Segmented & behavioral notification triggers",
      "Deep linking directly to specific app screens",
      "Interactive rich notification action buttons",
      "Opt-in prompt timing & permission flows",
    ],
  },
  {
    id: "qa",
    number: "10",
    title: "Testing & Quality Assurance",
    tagline: "Rigorous Hardware Validation Across Devices & OS Versions",
    description:
      "Validate core workflows, layout responsiveness, real hardware behaviors, API connectivity, memory usage, and battery performance before release readiness.",
    keywordCluster: "mobile app testing · mobile QA",
    image: "/images/services/ui-ux/08-usability-testing-ux-audits.jpg",
    imageAlt: "Multi-device mobile QA hardware testing and real device usability verification",
    icon: CheckSquare,
    deliverables: [
      "Physical device matrix testing (iOS & Android)",
      "Automated unit & integration test suites",
      "Network throttling & edge-case recovery checks",
      "Memory leak & battery drain profiling",
      "Accessibility audit for assistive technologies",
    ],
  },
  {
    id: "deployment",
    number: "11",
    title: "App Store Deployment",
    tagline: "Frictionless Apple App Store & Google Play Release Pipelines",
    description:
      "Prepare production release builds, signing certificates, screenshots, App Store privacy declarations, Google Play compliance checks, and launch monitoring.",
    keywordCluster: "App Store deployment · Google Play deployment",
    image: "/images/services/ui-ux/06-interactive-prototyping.jpg",
    imageAlt: "Apple App Store and Google Play Store deployment approval and release builds",
    icon: Rocket,
    deliverables: [
      "Apple App Store & Google Play developer account setup",
      "Provisioning profiles, keystores & code signing",
      "App Store Guidelines & privacy compliance checks",
      "Optimized screenshot assets & localized metadata",
      "Phased rollout strategy & release monitoring",
    ],
  },
  {
    id: "maintenance",
    number: "12",
    title: "Maintenance & Lifecycle Support",
    tagline: "Continuous Improvements, OS Updates & Performance Monitoring",
    description:
      "Provide ongoing lifecycle support, crash analytics monitoring, annual iOS/Android OS compatibility updates, performance tuning, and planned feature sprints.",
    keywordCluster: "mobile app maintenance · app support services",
    image: "/images/services/ui-ux/10-developer-handoff.jpg",
    imageAlt: "Mobile app developer maintenance, monitoring, telemetry, and continuous lifecycle support",
    icon: RefreshCw,
    deliverables: [
      "Real-time crash & telemetry reporting",
      "Annual iOS & Android major version upgrades",
      "Third-party library & security patch updates",
      "Over-the-air (OTA) code updates for fast fixes",
      "Dedicated SLA support & feature development",
    ],
  },
];

// ==========================================
// VALUE PROPOSITION PILLARS
// ==========================================

const VALUE_PROPOSITION_PILLARS = [
  {
    title: "Design Around Real Mobile Behavior",
    description:
      "Touch targets, single-hand thumb navigation, gestures, viewport scales, and environmental context all directly influence how users experience your application.",
  },
  {
    title: "Build One Connected Product Experience",
    description:
      "Product discovery, UI/UX design, application logic, backend APIs, and app store deployment work together in a synchronized workflow rather than isolated stages.",
  },
  {
    title: "Support Reliable Offline Connectivity",
    description:
      "Local database caching, offline queueing, and background synchronization enable users to complete critical tasks even in low-reception environments.",
  },
  {
    title: "Keep the Architecture Maintainable",
    description:
      "Reusable components, modular state management, and clear API boundaries make future feature updates predictable, cost-effective, and easy to maintain.",
  },
  {
    title: "Prepare for Both Major Mobile Ecosystems",
    description:
      "Cross-platform engineering with React Native or Flutter allows businesses to deliver cohesive, native-feeling experiences across iOS and Android from a single codebase.",
  },
  {
    title: "Plan for Launch and Beyond",
    description:
      "App store guidelines compliance, release packaging, continuous crash telemetry, OS updates, and post-launch iterations are built directly into our product lifecycle.",
  },
];

// ==========================================
// BUSINESS MODELS & PRODUCT COVERAGE
// ==========================================

const BUSINESS_MODELS = [
  {
    title: "SaaS & Business Apps",
    focus:
      "Account management, responsive mobile dashboards, role-based workflows, permissions, background synchronization, notifications, and enterprise tool integrations.",
    icon: Cpu,
  },
  {
    title: "E-Commerce & Retail Apps",
    focus:
      "Product catalog discovery, high-speed search, filters, cart, frictionless checkout, Apple Pay/Google Pay, customer accounts, and real-time order tracking.",
    icon: ShoppingBag,
  },
  {
    title: "Healthcare & Wellness Apps",
    focus:
      "Accessible patient workflows, HIPAA-conscious secure authentication, appointment scheduling, health telemetry, medication reminders, and sensitive data protection.",
    icon: Stethoscope,
  },
  {
    title: "Finance & FinTech Apps",
    focus:
      "Security-conscious biometric authentication, transaction audit histories, ledger clarity, payment alerts, and encrypted integration with core banking systems.",
    icon: Shield,
  },
  {
    title: "On-Demand & Service Apps",
    focus:
      "Vendor discovery, appointment booking, geolocation tracking, status notifications, live updates, and dual customer/provider experience flows.",
    icon: Clock3,
  },
  {
    title: "Education & Learning Apps",
    focus:
      "Course catalog discovery, step-by-step learning journeys, video/audio content delivery, progress tracking, offline downloads, and gamified engagement.",
    icon: GraduationCap,
  },
  {
    title: "Enterprise & Internal Tools",
    focus:
      "Role-based access controls, operational field workflows, offline data sync, manager approvals, reporting dashboards, and ERP/CRM system integration.",
    icon: Building2,
  },
  {
    title: "Startup & MVP Apps",
    focus:
      "Prioritized core workflows, rapid market validation, scalable cross-platform architecture, and an agile product foundation primed for rapid feature iterations.",
    icon: Rocket,
  },
];

// ==========================================
// TECH STACK MATRIX
// ==========================================

const TECH_STACK_MATRIX = [
  {
    tech: "React Native",
    role: "Cross-Platform Framework",
    detail:
      "Cross-platform mobile development using reusable React components, native device bridging, and shared business logic for iOS and Android.",
    badge: "Cross-Platform",
  },
  {
    tech: "Flutter",
    role: "Cross-Platform Framework",
    detail:
      "High-performance Google framework rendering custom widgets with Skia/Impeller for pixel-perfect, consistent 60fps experiences across both operating systems.",
    badge: "Cross-Platform",
  },
  {
    tech: "iOS / Swift",
    role: "Native Apple Engineering",
    detail:
      "Platform-specific Swift and SwiftUI development to unlock deep Apple device integrations, WidgetKit, Dynamic Island, and Apple HealthKit capabilities.",
    badge: "Native iOS",
  },
  {
    tech: "Android / Kotlin",
    role: "Native Android Engineering",
    detail:
      "Platform-aware Kotlin and Jetpack Compose engineering designed around diverse Android device ecosystems, background services, and hardware APIs.",
    badge: "Native Android",
  },
  {
    tech: "REST & GraphQL APIs",
    role: "Backend Connectivity",
    detail:
      "Structured, low-latency communication contracts between mobile applications and cloud services, with automatic caching and schema validation.",
    badge: "Data Layer",
  },
  {
    tech: "Firebase & Push Services",
    role: "Cloud Infrastructure & Messaging",
    detail:
      "Scalable authentication, Cloud Messaging (FCM), APNs integration, crash telemetry (Crashlytics), and real-time remote configuration.",
    badge: "Cloud Services",
  },
  {
    tech: "Offline Storage & Sync",
    role: "Local Persistence",
    detail:
      "Embedded SQLite, WatermelonDB, and MMKV for lightning-fast local data caching, offline persistence, and seamless background sync queues.",
    badge: "Offline Sync",
  },
  {
    tech: "Figma",
    role: "Mobile UI/UX Design",
    detail:
      "Mobile-first design systems, interactive prototypes, auto-layout responsive components, and developer-ready handoff specs.",
    badge: "Design Systems",
  },
];

// ==========================================
// PROCESS STEPS: 4x2 BALANCED GRID SYSTEM
// ==========================================

const PROCESS_STEPS_GRID = [
  {
    number: "01",
    name: "Discover",
    title: "Discovery & Alignment",
    detail:
      "Understand the business objective, target audience, core problem, existing backend systems, project constraints, and measurable success criteria.",
    deliverable: "Product Scope Document",
    icon: Compass,
  },
  {
    number: "02",
    name: "Plan",
    title: "Architecture & Roadmap",
    detail:
      "Define the MVP release scope, user journeys, data architecture, third-party integrations, technology selection (React Native vs. Flutter), and roadmap.",
    deliverable: "Technical Architecture Specs",
    icon: Workflow,
  },
  {
    number: "03",
    name: "Design",
    title: "Mobile UI/UX Design",
    detail:
      "Create mobile-first UX wireframes, interface layouts, touch-friendly component systems, and clickable Figma prototypes for key journeys.",
    deliverable: "Figma Interactive Prototypes",
    icon: MousePointerClick,
  },
  {
    number: "04",
    name: "Develop",
    title: "Engineering & APIs",
    detail:
      "Build the mobile application with clean, modular code, connect backend REST/GraphQL APIs, configure offline caching, and implement device capabilities.",
    deliverable: "Shared Codebase Build",
    icon: Code2,
  },
  {
    number: "05",
    name: "Test",
    title: "Multi-Device QA",
    detail:
      "Validate functionality, device behavior across real hardware, usability, API connectivity, authentication, offline scenarios, and store compliance.",
    deliverable: "QA Validation Report",
    icon: CheckSquare,
  },
  {
    number: "06",
    name: "Deploy",
    title: "App Store Publishing",
    detail:
      "Prepare production builds, app store submissions, release metadata, screenshot assets, privacy compliance documentation, and launch monitoring.",
    deliverable: "Live App Store Packages",
    icon: Rocket,
  },
  {
    number: "07",
    name: "Launch",
    title: "Release & Telemetry",
    detail:
      "Execute phased rollouts on Google Play and Apple App Store, configure real-time crash reporting, and monitor early user adoption metrics.",
    deliverable: "Active Telemetry & Rollout",
    icon: Activity,
  },
  {
    number: "08",
    name: "Scale",
    title: "Evolve & Optimize",
    detail:
      "Use telemetry, crash analytics, user feedback, and product priorities to plan version updates, annual OS upgrades, and planned feature sprints.",
    deliverable: "Lifecycle SLA Roadmap",
    icon: RefreshCw,
  },
];

// ==========================================
// EXPERIENCE & USABILITY FACTORS
// ==========================================

const EXPERIENCE_FACTORS = [
  "Touch-friendly controls and ergonomic tap targets (48x48px minimum)",
  "Responsive layouts adapting smoothly across standard phone and tablet screens",
  "Clear navigation hierarchies with predictable native back-button behavior",
  "Explicit visual states for loading, empty content, success, and error recovery",
  "Accessible typography scales, high contrast ratios, and screen-reader support",
  "Optimized image delivery, vector icons, and lazy-loaded asset bundles",
  "Efficient, batched API requests with intelligent client-side caching",
  "Predictable offline or low-connectivity degradation without app crashes",
  "Background synchronization for uninterrupted user productivity",
  "Push notification workflows with deep-linked actionable destinations",
];

// ==========================================
// SECURITY FOUNDATIONS
// ==========================================

const SECURITY_FOUNDATIONS = [
  {
    title: "Biometric & Secure Auth",
    desc: "Seamless authentication flows leveraging Face ID, Touch ID, and Android BiometricPrompt with OAuth 2.0 / JWT token rotation.",
  },
  {
    title: "Encrypted Local Storage",
    desc: "Sensitive credentials and offline cache stored strictly in hardware-backed secure storage (iOS Keychain and Android Keystore).",
  },
  {
    title: "Protected API Communication",
    desc: "Enforced TLS 1.3 encryption, certificate pinning, and signed API requests to eliminate man-in-the-middle vulnerabilities.",
  },
  {
    title: "Role & Permission Controls",
    desc: "Strict screen-level and operational permission gates ensuring users only access verified account capabilities.",
  },
  {
    title: "Input Sanitization & Validation",
    desc: "Rigorous client-side input validation and error handling to protect against injection attacks and malformed network payloads.",
  },
  {
    title: "Dependency Management",
    desc: "Automated vulnerability scanning and continuous auditing of all third-party libraries and native SDK modules.",
  },
  {
    title: "Session & Token Invalidation",
    desc: "Automatic session timeouts, instant token revocation upon logout, and remote wipe support for sensitive accounts.",
  },
  {
    title: "Privacy & Compliance Standards",
    desc: "Privacy-conscious handling of user telemetry, GDPR/CCPA alignment, and transparent App Store privacy nutritional labels.",
  },
];

// ==========================================
// DELIVERABLES LIST
// ==========================================

const DELIVERABLES_LIST = [
  "Product discovery blueprint and technical architecture documentation",
  "Mobile information architecture, sitemap, and user journey flowcharts",
  "Interactive Figma mobile design kit with scalable design tokens",
  "High-fidelity mobile UI screens and clickable prototypes",
  "Production-ready React Native or Flutter source codebase",
  "iOS (.ipa) and Android (.aab) signed release build packages",
  "REST / GraphQL API integration bindings and data models",
  "Biometric authentication and Firebase push notification integration",
  "Offline data persistence and background synchronization engine",
  "Comprehensive multi-device QA testing and release-readiness report",
  "Apple App Store and Google Play Store submission and approval support",
  "Technical architecture handoff documentation for long-term ownership",
];

// ==========================================
// BRAND ADVANTAGES: WHY NEXOVIO
// ==========================================

const WHY_NEXOVIO_ADVANTAGES = [
  {
    title: "Strategy Before Code",
    desc: "We define the user problem, commercial priorities, and technical roadmap before writing code, preventing costly scope reworks.",
    icon: Compass,
  },
  {
    title: "Design & Engineering Together",
    desc: "Mobile UI/UX designers and software engineers work in the same unified workflow, ensuring pixel-perfect fidelity and smooth interaction.",
    icon: Workflow,
  },
  {
    title: "Cross-Platform Efficiency",
    desc: "React Native and Flutter provide single-codebase velocity, allowing you to launch simultaneously on iOS and Android with unified logic.",
    icon: Cpu,
  },
  {
    title: "Business-Aware Architecture",
    desc: "Every architecture decision is calibrated to your business model, expected scale, integration landscape, and ongoing maintenance cost.",
    icon: Building2,
  },
  {
    title: "Full Launch & Store Support",
    desc: "We shepherd your app through strict Apple App Store and Google Play compliance, certificates, and approval checklists until live.",
    icon: Rocket,
  },
  {
    title: "Built to Evolve",
    desc: "Modular code, structured state stores, and living design systems ensure your mobile product can scale rapidly as user demand grows.",
    icon: RefreshCw,
  },
];

// ==========================================
// FAQ DATA
// ==========================================

const MOBILE_APP_FAQS = [
  {
    question: "Do you build apps for both iOS and Android?",
    answer:
      "Yes. Nexovio specializes in cross-platform development using React Native and Flutter, which allows you to target both Apple App Store and Google Play Store from a shared codebase. We also support native iOS (Swift) or Android (Kotlin) development when specific hardware or platform requirements call for it.",
  },
  {
    question: "What is cross-platform mobile app development?",
    answer:
      "Cross-platform development uses a single unified codebase to build applications for multiple operating systems, primarily iOS and Android. Modern frameworks like React Native and Flutter compile into native interface elements and device code, reducing development costs and timeline by up to 40% while preserving 60fps native performance.",
  },
  {
    question: "Do you provide custom mobile app development?",
    answer:
      "Yes. We do not use generic app templates. Every mobile product is designed and engineered around your specific business processes, target user personas, technical integrations, and commercial objectives.",
  },
  {
    question: "Can you build an MVP mobile app?",
    answer:
      "Yes. We specialize in scoping and engineering Minimum Viable Products (MVPs). We focus on the core user journeys needed to validate your concept in the market, while establishing a rock-solid architectural foundation that can easily scale into a full product.",
  },
  {
    question: "Can mobile apps work offline?",
    answer:
      "Yes. Where product requirements call for it, we architect local database storage (such as SQLite or WatermelonDB), intelligent data caching, and background sync queues that automatically synchronize updates once an active internet connection is restored.",
  },
  {
    question: "Can you integrate APIs with a mobile application?",
    answer:
      "Yes. We integrate mobile applications with custom REST or GraphQL APIs, payment gateways (Stripe, Apple Pay, Google Pay), authentication systems (OAuth, Auth0, Firebase), CRMs, ERPs, and cloud microservices.",
  },
  {
    question: "Can you add push notifications?",
    answer:
      "Yes. We implement robust push notification systems using Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs). This includes transactional notifications, scheduled reminders, behavioral messages, and deep links that open specific app screens.",
  },
  {
    question: "Do you provide mobile UI/UX design?",
    answer:
      "Yes. Mobile UI/UX is central to our offering. We conduct user research, design wireframes, craft touch-friendly design systems in Figma, and build interactive clickable prototypes so you can experience your app's flow before development starts.",
  },
  {
    question: "Do you handle App Store and Google Play deployment?",
    answer:
      "Yes. We manage the entire release process: developer account configuration, signing certificates, privacy nutrition label documentation, screenshot asset preparation, App Store Guidelines compliance, and submission monitoring until your app is live.",
  },
  {
    question: "How long does mobile app development take?",
    answer:
      "A typical cross-platform mobile app development project takes approximately 8 to 16 weeks, depending on feature complexity, backend API integration scope, and custom design requirements. A focused MVP can be launched in 6 to 10 weeks, while complex enterprise platforms may span 14 to 20 weeks.",
  },
  {
    question: "Which technologies do you use for mobile apps?",
    answer:
      "Our core mobile stack includes React Native, Flutter, Swift (iOS), Kotlin (Android), TypeScript, REST and GraphQL APIs, Firebase, SQLite/WatermelonDB for local caching, and Figma for mobile UI/UX design systems.",
  },
  {
    question: "Can you maintain and update the app after launch?",
    answer:
      "Yes. We offer ongoing maintenance and lifecycle support packages that include annual iOS/Android OS compatibility updates, crash telemetry monitoring, security patch management, performance tuning, and continuous feature sprints.",
  },
];

// ==========================================
// REALISTIC CARD IMAGE PREVIEW COMPONENT
// ==========================================

function RealisticMobileCardImage({
  image,
  imageAlt,
  number,
}: {
  image: string;
  imageAlt: string;
  number: string;
}) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-slate-950 group-hover:border-brand-cyan/50 shadow-sm transition-all duration-500">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-2.5 right-2.5">
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-md">
          {number}
        </span>
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT EXPORT
// ==========================================

export default function MobileAppDevelopmentPage() {
  const serviceSchema = getServiceSchema({
    name: "Mobile App Development Services",
    description:
      "Build scalable iOS and Android mobile apps with cross-platform development, mobile UI/UX, API integration, testing and app store deployment.",
    url: "/services/mobile-app-development",
    serviceType: "MobileAppDevelopment",
    image: "/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp",
  });

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Mobile App Development", url: "/services/mobile-app-development" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MOBILE_APP_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================================================================== */}
      {/* 1. HERO BANNER SECTION                                             */}
      {/* ================================================================== */}
      <section className="pt-24 sm:28 sm:pt-28 md:pt-32 lg:pt-40 pb-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Services", url: "/services" },
              { name: "Mobile App Development", url: "/services/mobile-app-development" },
            ]}
          />

          {/* Background Radial Glow & Futuristic Grid Lines */}
          <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Subtle Geometric Grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-4 relative z-10">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright animate-pulse" />
                <span>MOBILE APP DEVELOPMENT SERVICES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight !leading-[1.14]">
                Mobile App Development Services Built for{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Real Users and Business Growth
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                <p className="font-normal text-slate-700 dark:text-slate-300">
                  Turn your mobile app idea into a reliable digital product built around the people who will use it. Nexovio Digital Solutions provides end-to-end mobile app development services covering product planning,{" "}
                  <Link href="/services/ui-ux-design" className="text-brand-cyan hover:underline font-medium">
                    mobile UI/UX design
                  </Link>
                  , cross-platform engineering, API integration, testing and app store deployment.
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                  We build native-feeling mobile applications for iOS and Android using modern cross-platform technologies such as React Native and Flutter, with architecture designed around performance, maintainability and long-term product growth. Whether you are launching an MVP, extending a SaaS platform or creating a customer-facing mobile experience, we connect product strategy, design and engineering in one unified workflow.
                </p>
              </div>

              {/* 6 Quick Feature Highlights with Interactive Micro-Glow Hover */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {[
                  { name: "iOS & Android Apps", icon: Smartphone },
                  { name: "React Native & Flutter", icon: Cpu },
                  { name: "Touch-First UI/UX", icon: MousePointerClick },
                  { name: "REST & GraphQL APIs", icon: Boxes },
                  { name: "Offline & Data Sync", icon: Database },
                  { name: "App Store Deployment", icon: Rocket },
                ].map((badge) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <div
                      key={badge.name}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs hover:border-brand-cyan/60 hover:bg-brand-cyan/5 hover:scale-[1.03] transition-all duration-300 cursor-default"
                    >
                      <BadgeIcon className="w-3.5 h-3.5 text-brand-cyan group-hover:scale-125 transition-transform duration-300 shrink-0" />
                      <span className="truncate group-hover:text-brand-cyan transition-colors">{badge.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  trackingName="mobile_app_hero_start_project"
                  trackingLocation="service_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow font-bold"
                >
                  Start Your Mobile App Project
                </Button>
              </div>
            </div>

            {/* Right Side Realistic Human Smartphone Hero Visual */}
            <div className="lg:col-span-6 relative flex items-center justify-center h-full">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[450px] lg:h-[500px] w-full bg-[#050914]">
                  <Image
                    src="/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp"
                    alt="Realistic user interacting with modern cross-platform mobile app interface on smartphone in professional studio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/75 via-transparent to-transparent pointer-events-none rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. STICKY VALUE PROPOSITION SECTION                                */}
      {/* Hover Effect: Left Accent Border Slide Down + Subtle Tint Shift   */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Side Graphic Banner (Sticky on Top during Scroll) */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[360px] sm:h-[440px] lg:h-[500px] w-full">
                  <Image
                    src="/images/services/mobile-app-development-nexovio.webp"
                    alt="Realistic mobile application architecture on smartphones showing code development, cloud services, and data persistence"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/75 via-transparent to-transparent pointer-events-none rounded-xl" />

                  {/* Sticky Banner Floating Bottom Specs */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 border border-brand-cyan/30 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-white mb-1.5">
                      <span className="text-brand-cyan flex items-center gap-1.5">
                        <Workflow className="w-3.5 h-3.5" />
                        Practical Mobile Engineering
                      </span>
                      <span className="text-emerald-400">iOS &bull; Android</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      Cross-platform unified codebases, touch ergonomics, and reliable cloud synchronization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Value Proposition Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                VALUE PROPOSITION
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Build a Mobile Product{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  People Can Rely On
                </span>
              </h2>

              <div className="space-y-4 text-base text-muted leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  A successful mobile product needs more than a collection of screens. It needs a clear purpose, intuitive interaction patterns, dependable data flow and an architecture that can evolve as users and business requirements change.
                </p>
                <p>
                  We build one connected product experience where product planning, UI/UX, application logic, APIs, and deployment support each other rather than operating in silos.
                </p>
              </div>

              {/* 6 Value Proposition Pillars with Left Border Slide-Down Hover */}
              <div className="space-y-3 pt-2">
                {VALUE_PROPOSITION_PILLARS.map((vp) => (
                  <div
                    key={vp.title}
                    className="relative overflow-hidden group flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.04] hover:translate-x-2 transition-all duration-300 shadow-xs"
                  >
                    {/* Hover: Left Accent Border Slide Down */}
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-cyan via-brand-bright to-brand-electric scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5 group-hover:scale-125 group-hover:text-brand-bright transition-transform duration-300" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                        {vp.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed mt-0.5">
                        {vp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Promise Callout Banner */}
              <div className="p-4 rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 space-y-1 text-xs">
                <span className="font-bold text-brand-cyan block uppercase tracking-wider">
                  CORE PROMISE: PRACTICAL MOBILE ENGINEERING
                </span>
                <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  The goal is practical mobile engineering: a product that is useful to customers, manageable for your team, and structured to support future iterations without architectural dead ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. END-TO-END SERVICES SECTION (12 REALISTIC MATCHED CARDS)        */}
      {/* Hover Effect: TOP BORDER ANIMATE LEFT TO RIGHT + ELEVATION LIFT   */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR SERVICES"
            title="End-to-End Mobile App"
            highlightText="Development Services"
            description="From discovery and touch-optimized UI/UX to cross-platform code, secure API integration, and app store deployment, we coordinate every stage of the mobile product lifecycle."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {MOBILE_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Card
                  key={srv.id}
                  className="relative overflow-hidden group flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.16)] hover:-translate-y-2 transition-all duration-400 rounded-2xl"
                >
                  {/* USER REQUESTED: Top Border Animate Left to Right on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />

                  <div className="space-y-4">
                    {/* Realistic Visual Graphic Mockup Matched Per Card */}
                    <RealisticMobileCardImage
                      image={srv.image}
                      imageAlt={srv.imageAlt}
                      number={srv.number}
                    />

                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                          Capability 0{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                          {srv.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-brand-cyan/90 italic">
                      {srv.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Key Capabilities &amp; Deliverables:
                      </span>
                      <ul className="space-y-1.5">
                        {srv.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-muted">
                    <span className="text-slate-500 dark:text-slate-400 truncate max-w-[220px]">
                      {srv.keywordCluster}
                    </span>
                    <Link
                      href="/contact"
                      className="text-brand-cyan font-bold flex items-center gap-1 group-hover:translate-x-1.5 transition-transform shrink-0"
                    >
                      Inquire <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. PRODUCT COVERAGE / BUSINESS MODELS                              */}
      {/* Hover Effect: Corner Radial Flare Spotlight + Icon Tilt & Bounce  */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PRODUCT COVERAGE"
            title="Mobile Apps for Different"
            highlightText="Business Models"
            description="Mobile products have different technical and user requirements. We shape the architecture and experience around what the application needs to accomplish rather than forcing every project into the same structure."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {BUSINESS_MODELS.map((model) => {
              const ModelIcon = model.icon;
              return (
                <div
                  key={model.title}
                  className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,198,255,0.12)] transition-all duration-400 flex flex-col justify-between"
                >
                  {/* Hover: Top-Right Radial Glow Spotlight */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-115 group-hover:rotate-6 group-hover:bg-brand-cyan/20 transition-all duration-300">
                      <ModelIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                      {model.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {model.focus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sub-banner: From MVP to Scalable Product */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-brand-cyan/30 bg-gradient-to-r from-brand-cyan/10 via-surface-elevated to-brand-electric/10 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block">
                  FROM MVP TO SCALABLE PRODUCT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Focused Initial Launch Without Architecture Dead Ends
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  A first release should be focused without becoming a dead end. We prioritize the workflows that matter most, establish reusable foundations and leave room for additional features as the product gains users, feedback, and traction.
                </p>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                trackingName="mobile_app_mvp_consult"
                trackingLocation="business_models"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shrink-0 shadow-glow font-bold"
              >
                Discuss Your MVP Scope
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. MODERN MOBILE TECHNOLOGY STACK                                  */}
      {/* Hover Effect: Bottom Gradient Underline Glow & Glass Elevation     */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TECHNOLOGY STACK"
            title="Modern Mobile"
            highlightText="Technology Stack"
            description="Technology selection should follow product requirements. Nexovio's mobile engineering capabilities include cross-platform frameworks, platform-specific development, API connectivity, authentication, cloud services and mobile release workflows."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {TECH_STACK_MATRIX.map((stack) => (
              <div
                key={stack.tech}
                className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] hover:border-brand-cyan/60 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.35)] transition-all duration-400 space-y-3"
              >
                {/* Hover: Bottom Center-Expanding Animated Border */}
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-400 via-brand-cyan to-brand-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center ease-out" />

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-brand-cyan px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 group-hover:bg-brand-cyan group-hover:text-black group-hover:border-brand-cyan transition-all duration-300">
                    {stack.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                  {stack.tech}
                </h3>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                  {stack.role}
                </span>
                <p className="text-xs text-muted leading-relaxed">
                  {stack.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Technology Principle Callout Box */}
          <div className="mt-10 p-5 rounded-xl border border-brand-cyan/30 bg-surface-elevated/80 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-center max-w-4xl mx-auto">
            <span className="font-bold text-brand-cyan block mb-1 uppercase tracking-wider font-mono">
              TECHNOLOGY PRINCIPLE
            </span>
            Choose the architecture that fits the product. Framework selection should consider performance, device capabilities, team skills, release strategy, integrations, and long-term maintenance &mdash; not trends alone.
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. OUR MOBILE APP DEVELOPMENT PROCESS (4x2 GRID SYSTEM)            */}
      {/* Hover Effect: Light Sheen Sweep + Luminous Step Number Zoom       */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR PROCESS"
            title="Our Mobile App"
            highlightText="Development Process"
            description="A structured, collaborative 8-stage engineering methodology from initial concept discovery to App Store release, launch telemetry, and continuous scaling."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {PROCESS_STEPS_GRID.map((st) => {
              const StepIcon = st.icon;
              return (
                <div
                  key={st.number}
                  className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,198,255,0.14)] transition-all duration-400 flex flex-col justify-between space-y-4"
                >
                  {/* Hover: Light Sheen Sweep Across Card */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-extrabold text-brand-cyan group-hover:scale-110 group-hover:text-brand-bright transition-all duration-300">
                        {st.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:rotate-[360deg] transition-transform duration-700">
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        Phase: {st.name}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                        {st.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {st.detail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-brand-cyan relative z-10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-bright shrink-0" />
                    <span className="truncate group-hover:text-white transition-colors">{st.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. EXPERIENCE & PERFORMANCE SECTION (REALISTIC IMAGE RIGHT SIDE)   */}
      {/* Hover Effect: Left Border Indent Slide & Checkmark Spin           */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="EXPERIENCE &amp; PERFORMANCE"
            title="Mobile Experiences Designed for"
            highlightText="Real-World Use"
            description="Mobile users interact with products in changing environments: on different screen sizes, networks, devices and levels of attention. The interface and architecture should account for those realities."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12">
            {/* Left 10 Experience Factors with Left Indent Hover */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Real-World Mobile Usability Standards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPERIENCE_FACTORS.map((factor) => (
                  <div
                    key={factor}
                    className="group flex items-start gap-2.5 p-3 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] text-xs text-slate-700 dark:text-slate-300 shadow-xs hover:border-l-4 hover:border-l-brand-cyan hover:pl-4 hover:bg-brand-cyan/[0.04] transition-all duration-300 cursor-default"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="leading-snug group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Realistic Usability Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[440px] w-full">
                  <Image
                    src="/images/services/ui-ux/06-interactive-prototyping.jpg"
                    alt="Real-world mobile app usability testing with designer inspecting interactive prototype noodles on studio monitor and testing touch tap targets on smartphone"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/75 via-transparent to-transparent pointer-events-none rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. SECURITY & RELIABILITY FOUNDATIONS                              */}
      {/* Hover Effect: Center-Expanding Indigo/Cyan Top Border & Pulse Ring */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="SECURITY &amp; RELIABILITY"
            title="Secure Foundations for"
            highlightText="Mobile Applications"
            description="Mobile applications connect users to personal accounts, proprietary business data and external cloud services. Security requirements should be considered in architecture and implementation rather than added only at the end."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {SECURITY_FOUNDATIONS.map((sec) => (
              <div
                key={sec.title}
                className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-indigo-400/60 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(99,102,241,0.18)] transition-all duration-400 shadow-xs space-y-2.5"
              >
                {/* Hover: Vertical Cyber Security Scanner Sweep (Top to Bottom) */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent top-0 group-hover:top-full transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none" />
                <div className="absolute inset-0 bg-indigo-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:ring-4 group-hover:ring-indigo-500/20 group-hover:border-indigo-400/60 transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                  {sec.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 9. DELIVERABLES: WHAT YOU RECEIVE                                  */}
      {/* Hover Effect: Number Badge Inversion & Horizontal Text Slide       */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DELIVERABLES"
            title="What You Receive With Every"
            highlightText="Mobile Project"
            description="Clear, production-ready assets and comprehensive technical documentation ensuring complete ownership and seamless developer continuity."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12">
            {DELIVERABLES_LIST.map((deliv, index) => (
              <div
                key={deliv}
                className="group flex items-start gap-3.5 p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] shadow-xs hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.03] hover:translate-x-1.5 transition-all duration-300 cursor-default"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-mono text-xs font-bold shrink-0 mt-0.5 group-hover:bg-brand-cyan group-hover:text-slate-950 group-hover:border-brand-cyan group-hover:scale-110 transition-all duration-300">
                  0{index + 1}
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                  {deliv}
                </p>
              </div>
            ))}
          </div>

          {/* Long Term Ownership Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#070F22] text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block mb-1">
              A HANDOFF BUILT FOR LONG-TERM OWNERSHIP
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              Zero Vendor Lock-In &bull; Thorough Documentation
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Your project should not become dependent on undocumented decisions. We organize design and engineering deliverables so your internal team has a transparent foundation for ongoing maintenance, future feature sprints, and continued product development.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 10. WHY WORK WITH NEXOVIO FOR MOBILE APP DEV                       */}
      {/* Hover Effect: Ambient Halo Glow + Floating Upward Icon             */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY NEXOVIO"
            title="Why Work With Nexovio for"
            highlightText="Mobile App Development?"
            description="Engineering excellence, transparent collaboration, and a unified delivery team from concept to App Store launch."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {WHY_NEXOVIO_ADVANTAGES.map((adv) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,198,255,0.18)] transition-all duration-400 shadow-xs space-y-3"
                >
                  {/* Hover: Bottom Border Slide Right-to-Left */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-l from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right ease-out pointer-events-none" />

                  {/* Hover: Ambient Halo Glow in Background */}
                  <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:bg-brand-cyan/25 transition-all duration-300 relative z-10">
                    <AdvIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors relative z-10">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed relative z-10">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Unified Delivery Team Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-brand-cyan/30 bg-surface-elevated/90 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block mb-1">
              ONE TEAM FROM PRODUCT IDEA TO APP STORE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Seamless Continuity Between Strategy, Design, and Code
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Instead of separating strategy, design, engineering and deployment across disconnected vendors, Nexovio coordinates the major stages of the mobile product lifecycle. That gives stakeholders a clearer path from concept to launch and creates stronger continuity between the intended experience and the product users receive.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 11. COMPREHENSIVE FAQS                                             */}
      {/* ================================================================== */}
      <FaqSection
        faqs={MOBILE_APP_FAQS}
        badge="MOBILE APP FAQ"
        title="Frequently Asked Questions About"
        highlightText="Mobile App Development"
        description="Common technical and delivery questions regarding cross-platform frameworks, MVP timelines, App Store publishing, offline functionality, and post-launch maintenance."
      />
    </div>
  );
}
