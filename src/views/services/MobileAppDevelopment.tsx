"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Layers,
  Code2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  UserCheck,
  Clock,
  Headphones,
  Check,
  CheckCircle2,
  Apple,
  ExternalLink,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  getOrganizationSchema,
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/src/lib/schema";

// ============================================================================
// DATA STRUCTURES: WHY CHOOSE, PROCESS, TECH, PORTFOLIO & FAQS
// ============================================================================

const WHY_CHOOSE_ITEMS = [
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description: "Tailored apps that match your business goals.",
    icon: Code2,
  },
  {
    id: "user-centric-design",
    title: "User-Centric Design",
    description: "Intuitive and engaging UI/UX for higher retention.",
    icon: UserCheck,
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Expertise",
    description: "Build for iOS, Android and cross-platform (Flutter/React Native).",
    icon: Smartphone,
  },
  {
    id: "performance-security",
    title: "Performance & Security",
    description: "Optimized for speed, reliability and data protection.",
    icon: ShieldCheck,
  },
  {
    id: "on-time-delivery",
    title: "On-Time Delivery",
    description: "Agile process with transparent communication.",
    icon: Clock,
  },
  {
    id: "ongoing-support",
    title: "Ongoing Support",
    description: "Continuous maintenance and feature updates.",
    icon: Headphones,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "Understand your goals, users and market.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build with the latest technologies and best practices.",
  },
  {
    number: "04",
    title: "Testing",
    description: "Ensure quality, performance and security.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Deploy and provide ongoing support for success.",
  },
];

const TECH_STACK = [
  {
    name: "React Native",
    color: "#00D8FF",
    icon: (
      <svg className="w-6 h-6" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Flutter",
    color: "#02569B",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-foreground" viewBox="0 0 128 128"><g fill="#3FB6D3"><path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z" /></g><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z" /><path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z" /><linearGradient id="flutter-original-a" gradientUnits="userSpaceOnUse" x1="59.365" y1="116.36" x2="86.825" y2="99.399"><stop offset="0" stop-color="#1b4e94" /><stop offset=".63" stop-color="#1a5497" /><stop offset="1" stop-color="#195a9b" /></linearGradient><path fill="url(#flutter-original-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z" /></svg>
    ),
  },
  {
    name: "Swift",
    color: "#F05138",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-foreground" viewBox="0 0 128 128"><path fill="#f05138" d="M126.33 34.06a39.32 39.32 0 00-.79-7.83 28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.82 21.82 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.5 78.5 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.49 78.49 0 00.79-7.83V34.06z" /><path fill="#fefefe" d="M85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.7 32.7 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.59 12.63 7.68 26 6.35 23.5C101 91 90.37 94.33 85 96.5z" /></svg>
    ),
  },
  {
    name: "Kotlin",
    color: "#7F52FF",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-foreground" viewBox="0 0 128 128">
        <defs>
          <linearGradient id="a" x1="500.003" x2="-.097" y1="579.106" y2="1079.206" gradientTransform="translate(15.534 -96.774) scale(.1939)" gradientUnits="userSpaceOnUse">
            <stop offset=".003" stop-color="#e44857" />
            <stop offset=".469" stop-color="#c711e1" />
            <stop offset="1" stop-color="#7f52ff" />
          </linearGradient>
        </defs>
        <path fill="url(#a)" d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0" />
      </svg>

    ),
  },
  {
    name: "Firebase",
    color: "#FFA611",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-foreground" viewBox="0 0 128 128"><path fill="#f58220" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z" /></svg>
    ),
  },
  {
    name: "node",
    color: "#5FA04E",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-foreground" viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" /></svg>
    ),
  },
  {
    name: "aws",
    color: "#FF9900",
    icon: (
      <svg className="w-6 h-6 fill-current text-foreground" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#252f3e" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0" />
        <path fill="#f90" d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z" />
      </svg>
    ),
  },
];

const PORTFOLIO_APPS = [
  {
    id: "fitness-wellness",
    title: "Fitness & Wellness App",
    category: "Health & Fitness",
    tags: ["iOS", "Android", "React Native"],
    image: "/images/services/mobile-app-development/portfolio-fitness-wellness-mobile-app.jpg",
    alt: "Health and fitness mobile app tracking hydration, daily routine and workout progress on smartphone",
  },
  {
    id: "food-lifestyle",
    title: "Food Delivery App",
    category: "Food & Restaurant",
    tags: ["iOS", "Android", "Flutter"],
    image: "/images/services/mobile-app-development/portfolio-ecommerce-lifestyle-mobile-app.jpg",
    alt: "Food delivery and restaurant mobile application with real-time order tracking on smartphone",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance App",
    category: "Finance",
    tags: ["iOS", "Android", "React Native"],
    image: "/images/services/mobile-app-development/portfolio-fintech-banking-mobile-app.jpg",
    alt: "Fintech banking and transactions mobile application tested by engineers",
  },
];

const MOBILE_FAQS = [
  {
    question: "How much does it cost to build a mobile app?",
    answer:
      "Mobile app development costs depend on project scope, feature complexity, custom backend requirements, and whether you target iOS, Android, or cross-platform frameworks. Simple MVPs typically start at $5,000–$10,000, while feature-rich enterprise apps with third-party API integrations and custom security guardrails range higher based on specific roadmap requirements.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "Most production-grade mobile MVPs and pilot applications launch in 6 to 10 weeks. Comprehensive cross-platform applications featuring real-time synchronization, custom dashboards, payment gateways, and backend database integrations generally take 12 to 18 weeks.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Nexovio offers proactive ongoing maintenance, OS version compatibility updates (for the newest iOS and Android releases), crash monitoring, bug fixes, performance tuning, and feature expansion retainers.",
  },
  {
    question: "Which platform is better — iOS or Android?",
    answer:
      "It depends on your target demographic, geographic reach, and monetization strategy. iOS users typically generate higher in-app transaction revenue, while Android commands a larger global market share. Using cross-platform technologies like React Native or Flutter allows you to launch on both platforms simultaneously with a single codebase, cutting costs by up to 40%.",
  },
  {
    question: "Can you help with app store submission?",
    answer:
      "Yes, we manage end-to-end Apple App Store and Google Play Store submission, including signing certificates, metadata preparation, privacy disclosures, screenshot guidelines, and review compliance audits to ensure seamless approval.",
  },
];

export default function MobileAppDevelopmentPage() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "Mobile App Development Services | iOS & Android Apps",
    description:
      "We design and develop high-performance mobile applications for iOS and Android that deliver seamless user experiences, boost engagement and help your business stay ahead in a mobile-first world.",
    url: "/services/mobile-app-development",
    serviceType: "MobileAppDevelopmentServices",
    image: "/images/services/mobile-app-development/mobile-app-development-hero.webp",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Mobile App Development", url: "/services/mobile-app-development" },
  ]);

  return (
    <div className="bg-background text-foreground transition-colors overflow-hidden">
      {/* Structured Data Scripts for Google Crawling & Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* =================================================================== */}
      {/* 1. HERO SECTION (Build Powerful Mobile Apps That Drive Real Growth)  */}
      {/* =================================================================== */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-60" />
        <div className="absolute -top-36 -right-36 w-96 h-96 bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-36 -left-36 w-96 h-96 bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Services", url: "/services" },
                { name: "Mobile App Development", url: "/services/mobile-app-development" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Badge, Title, Copy, 4 Pills & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                MOBILE APP DEVELOPMENT SERVICES
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.14]">
                Build Powerful Mobile Apps <br />
                That Drive{" "}
                <span className="bg-gradient-to-r from-brand-electric via-blue-600 to-brand-bright bg-clip-text text-transparent">
                  Real Business Growth
                </span>
              </h1>

              <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                We design and develop high-performance mobile applications for iOS and Android that deliver seamless user experiences, boost engagement and help your business stay ahead in a mobile-first world.
              </p>

              {/* 4 Feature Pills */}
              <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <Smartphone className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Custom App Development</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <Layers className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>iOS &amp; Android Platforms</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <Sparkles className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>UI/UX Design Focused</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <ShieldCheck className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Scalable &amp; Secure Solutions</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  trackingName="mobile_hero_start_project"
                  trackingLocation="mobile_development_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-md"
                >
                  Start Your Project
                </Button>
                <Button
                  href="/portfolio"
                  variant="outline"
                  size="md"
                  trackingName="mobile_hero_view_work"
                  trackingLocation="mobile_development_hero"
                  className="w-full sm:w-auto border-brand-bright text-brand-bright hover:bg-brand-bright/10"
                >
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Right Column: Hero Visual with Floating Badge */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Decorative Dashed Arc Accent */}
              <div
                className="absolute -top-6 -left-6 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-[3px] border-brand-bright/30 border-dashed pointer-events-none -z-0"
                aria-hidden="true"
              />

              <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-elevated aspect-[4/3] sm:aspect-[16/12] z-10 group">
                <Image
                  src="/images/services/mobile-app-development/mobile-app-development-hero.webp"
                  alt="Customer holding smartphone and reviewing personal mobile finance dashboard"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Floating Card: Better Apps / Happier Users (Bottom-Right Overlay) */}
                <div className="absolute bottom-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 pr-4 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 z-20">
                  <div className="w-9 h-9 rounded-xl bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Better Apps
                    </span>
                    <span className="text-[10px] text-muted block leading-tight">
                      Happier Users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. WHY CHOOSE NEXOVIO (6 Feature Cards Grid)                        */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-surface-subtle/50 border-t border-border-subtle/60" id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
              WHY CHOOSE NEXOVIO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                Mobile App Development Services?
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted leading-relaxed">
              We combine innovative technology, user-centric design and agile development to create mobile applications that are fast, secure and built for long-term success.
            </p>
          </div>

          {/* 6 Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl border border-border-subtle bg-surface-elevated hover:shadow-lg hover:border-brand-bright/40 transition-all duration-300 flex flex-col justify-start text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-bright mb-4 group-hover:scale-105 transition-transform">
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-brand-bright transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. OUR PROCESS (Simple & Transparent App Development Process)        */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-background border-t border-border-subtle/60" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle, 5-Step Stepper & CTA */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div>
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                  OUR PROCESS
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
                  Simple &amp; Transparent <br className="hidden sm:inline" />
                  App Development Process
                </h2>
                <p className="mt-3 text-xs sm:text-sm md:text-base text-muted leading-relaxed max-w-xl">
                  From idea to launch, we follow a clear and collaborative process to ensure your app is delivered on time and exceeds expectations.
                </p>
              </div>

              {/* 5-Step Stepper with Connected Nodes */}
              <div className="space-y-6 pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative">
                  {PROCESS_STEPS.map((step, idx) => (
                    <div key={step.number} className="flex flex-col space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-brand-cyan/15 text-brand-bright font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0 border border-brand-cyan/35">
                          {step.number}
                        </div>
                        {idx < PROCESS_STEPS.length - 1 && (
                          <div className="hidden sm:block flex-1 h-[2px] bg-border-subtle" />
                        )}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-foreground leading-tight pt-1">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  trackingName="mobile_process_build_app"
                  trackingLocation="mobile_development_process"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Let&apos;s Build Your App
                </Button>
              </div>
            </div>

            {/* Right Column: Workstation Visual with Floating Platform Pill Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-elevated aspect-[4/3] group">
                <Image
                  src="/images/services/mobile-app-development/mobile-app-process-wireframes.jpg"
                  alt="Mobile application designer sketching interactive user journeys and testing live prototypes on smartphone"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Floating Platform Card (Top-Right): iOS, Android, Flutter, React Native */}
                <div className="absolute top-5 right-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-2 z-20">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <Apple className="w-4 h-4 text-foreground" />
                    <span>iOS</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <Smartphone className="w-4 h-4 text-emerald-500" />
                    <span>Android</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px] text-[#02569B]">
                      Fl
                    </span>
                    <span>Flutter</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px] text-brand-bright">
                      RN
                    </span>
                    <span>React Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. TECHNOLOGIES WE WORK WITH (7 Mobile Tech Badges Row)              */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 bg-surface-subtle/50 border-t border-border-subtle/60" id="technologies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Technologies{" "}
              <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                We Work With
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              We use modern and reliable technologies to build high-performance mobile applications.
            </p>
          </div>

          {/* 7 Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5 items-center justify-center">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl border border-border-subtle bg-surface-elevated flex flex-col items-center justify-center text-center shadow-xs hover:border-brand-bright/40 hover:shadow-md transition-all group"
              >
                <div className="mb-2 shrink-0 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs font-bold text-foreground block">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. OUR MOBILE APP PORTFOLIO (3 Industry Showcase Cards)              */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-background border-t border-border-subtle/60" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Button */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div className="text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Our Mobile App Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-muted max-w-xl">
                Take a look at some of the mobile apps we&apos;ve built for businesses across different industries.
              </p>
            </div>
            <div>
              <Button
                href="/portfolio"
                variant="primary"
                size="md"
                trackingName="mobile_portfolio_view_all"
                trackingLocation="mobile_development_portfolio"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View All Projects
              </Button>
            </div>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_APPS.map((app) => (
              <div
                key={app.id}
                className="rounded-2xl border border-border-subtle bg-surface-elevated overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-bright/40 transition-all duration-300 flex flex-col group text-left"
              >
                {/* Image Top */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={app.image}
                    alt={app.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-brand-bright transition-colors">
                        {app.title}
                      </h3>
                      <Link
                        href="/portfolio"
                        className="w-7 h-7 rounded-full bg-surface-subtle border border-border-subtle flex items-center justify-center text-muted group-hover:text-brand-bright group-hover:border-brand-bright/40 transition-all shrink-0"
                        aria-label={`View ${app.title} project`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <span className="text-xs text-muted block mt-0.5">
                      {app.category}
                    </span>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-[11px] font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. RELATED CAPABILITIES (Cross-linking for SEO & Discovery)          */}
      {/* =================================================================== */}
      <section className="py-8 bg-surface-subtle/50 border-t border-border-subtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-muted font-mono font-semibold">Explore Related Capabilities:</span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
              <Link href="/services/web-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                Web Development Services &rarr;
              </Link>
              <Link href="/services/web-design" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                Web Design Services &rarr;
              </Link>
              <Link href="/services/ui-ux-design" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                UI/UX Design Services &rarr;
              </Link>
              <Link href="/services/seo-digital-marketing" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                SEO &amp; Digital Marketing &rarr;
              </Link>
              <Link href="/services/ai-development" className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors">
                AI &amp; Automation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (Standard FaqSection Component)       */}
      {/* =================================================================== */}
      <FaqSection
        faqs={MOBILE_FAQS}
        badge="COMMON QUESTIONS"
        title="Frequently Asked"
        highlightText="Questions"
        description="Find answers to common questions about our mobile app development services, iOS & Android platforms, timelines, and post-launch maintenance."
        variant="white"
      />
    </div>
  );
}
