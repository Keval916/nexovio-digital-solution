"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Code2,
  Palette,
  Layout,
  Smartphone,
  TrendingUp,
  Bot,
  Cpu,
  BrainCircuit,
  Zap,
  Boxes,
  ShoppingBag,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";

// ============================================================================
// NAVIGATION DATA STRUCTURES
// ============================================================================

const WEB_DEV_SUBITEMS = [
  { name: "Custom Website Development", href: "/services/web-development" },
  { name: "WordPress Development", href: "/services/web-development" },
  { name: "React / Next.js Development", href: "/services/web-development" },
  { name: "E-commerce Development", href: "/services/web-development" },
  { name: "Web Application Development", href: "/services/web-development" },
  { name: "API Development & Integration", href: "/services/web-development" },
];

const OTHER_SERVICES = [
  {
    name: "Web Design",
    href: "/services/web-design",
    description: "Bespoke, conversion-focused website experiences",
    icon: Palette,
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "User research, wireframing & interactive design systems",
    icon: Layout,
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Cross-platform iOS & Android mobile application engineering",
    icon: Smartphone,
  },
  {
    name: "SEO & Digital Marketing",
    href: "/services/seo-digital-marketing",
    description: "Technical SEO, search visibility & organic growth roadmaps",
    icon: TrendingUp,
  },
];

const AI_SOLUTIONS_NAV = [
  { name: "AI Website Development", href: "/services/web-development", desc: "Intelligent web platforms with embedded AI capabilities" },
  { name: "AI Web App Development", href: "/services/web-development", desc: "Custom web apps powered by LLMs & neural networks" },
  { name: "AI Chatbot Development", href: "/services/web-development", desc: "Conversational AI agents for sales, support & operations" },
  { name: "AI Agent Development", href: "/services/web-development", desc: "Autonomous AI agents executing multi-step workflows" },
  { name: "AI Automation", href: "/services/seo-digital-marketing", desc: "End-to-end enterprise process automation & RPA" },
  { name: "Generative AI Development", href: "/services/web-development", desc: "Custom gen-AI models, prompt engineering & RAG pipelines" },
  { name: "AI Integration", href: "/services/web-development", desc: "Seamless OpenAI, Anthropic & Llama API integrations" },
  { name: "AI Search & Recommendation", href: "/services/seo-digital-marketing", desc: "Vector search & personalized recommendation engines" },
  { name: "AI Document Processing", href: "/services/web-development", desc: "Automated OCR & intelligent document data extraction" },
];

const SOLUTIONS_NAV = [
  { name: "E-commerce Solutions", href: "/services/web-development", desc: "High-converting online stores & custom checkouts", icon: ShoppingBag },
  { name: "SaaS Development", href: "/services/web-development", desc: "Multi-tenant cloud platforms & subscription models", icon: Layers },
  { name: "Business Automation", href: "/services/seo-digital-marketing", desc: "Streamlined operational workflows & integration hubs", icon: Zap },
  { name: "Custom Software Solutions", href: "/services/web-development", desc: "Tailored enterprise software & API architectures", icon: Boxes },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop active dropdown menu: "services" | "ai" | "solutions" | null
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWebDevOpen, setMobileWebDevOpen] = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileServicesOpen(false);
    setMobileWebDevOpen(false);
    setMobileAiOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside for dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Page Backdrop Blur when Any Dropdown is Open */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-md transition-all duration-300 pointer-events-none",
          activeDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        aria-hidden="true"
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || activeDropdown
            ? "bg-white/95 dark:bg-[#070D1A]/95 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/10 shadow-lg py-2"
            : "bg-transparent py-2.5 sm:py-3.5"
        )}
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Full Brand Logo */}
            <Link
              href="/"
              className="flex items-center group outline-none focus:outline-none select-none py-0.5 px-1 transition-transform hover:opacity-95 shrink-0"
              aria-label="Nexovio Digital Solutions Homepage"
            >
              <div className="relative flex items-center">
                {/* Dark Theme Logo */}
                <Image
                  src="/images/brand/nexovio-digital-solution.webp"
                  alt="Nexovio Digital Solutions"
                  width={380}
                  height={100}
                  priority
                  className="hidden dark:block h-9 sm:h-11 md:h-12 lg:h-13 xl:h-[56px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
                {/* Light Theme Logo */}
                <Image
                  src="/images/brand/nexovio-digital-solution-light.webp"
                  alt="Nexovio Digital Solutions"
                  width={380}
                  height={100}
                  priority
                  className="block dark:hidden h-9 sm:h-11 md:h-12 lg:h-13 xl:h-[56px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* Desktop Main Navigation */}
            <nav
              className="hidden lg:flex items-center gap-0.5 xl:gap-1.5"
              aria-label="Main Navigation"
            >
              {/* 1. Home */}
              <Link
                href="/"
                className={cn(
                  "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                  isActive("/") && pathname === "/"
                    ? "text-brand-cyan font-semibold"
                    : "text-muted hover:text-brand-cyan"
                )}
              >
                <span className="relative py-0.5">
                  Home
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                      isActive("/") && pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </span>
              </Link>

              {/* 2. Services MegaMenu ▾ */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={cn(
                    "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center gap-1",
                    isActive("/services") || activeDropdown === "services"
                      ? "text-brand-cyan font-semibold"
                      : "text-muted hover:text-brand-cyan"
                  )}
                  onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-300",
                      activeDropdown === "services" ? "rotate-180 text-brand-cyan" : "text-muted group-hover:text-brand-cyan"
                    )}
                  />
                </button>

                {/* Services Desktop Dropdown Panel */}
                <div
                  className={cn(
                    "absolute top-full mt-2 -left-[220px] xl:-left-[240px] w-[780px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/98 dark:bg-[#070D1A]/98 backdrop-blur-2xl p-5 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50",
                    "transition-all duration-300 ease-out origin-top transform-gpu",
                    activeDropdown === "services"
                      ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
                  )}
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-brand-cyan" />
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-muted">
                        Nexovio Engineering Disciplines
                      </span>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-electric dark:hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-12 gap-5">
                    {/* Left Sub-column: Web Development with 6 Sub-items */}
                    <div className="col-span-6 border-r border-slate-100 dark:border-white/10 pr-4 space-y-2">
                      <div className="flex items-center gap-2 px-2.5 py-1.5 bg-brand-cyan/10 rounded-lg border border-brand-cyan/20">
                        <Code2 className="w-4 h-4 text-brand-cyan" />
                        <Link
                          href="/services/web-development"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold text-slate-900 dark:text-white hover:text-brand-cyan uppercase tracking-wider"
                        >
                          Web Development
                        </Link>
                      </div>

                      <div className="space-y-1 pl-2">
                        {WEB_DEV_SUBITEMS.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 rounded-md text-xs text-slate-600 dark:text-muted hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5 transition-colors"
                          >
                            <span className="hover:text-brand-cyan transition-colors">{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Sub-column: Other 4 Core Services */}
                    <div className="col-span-6 space-y-2">
                      <span className="text-[11px] font-mono text-slate-400 dark:text-muted uppercase tracking-wider block px-1">
                        Core Capabilities
                      </span>
                      {OTHER_SERVICES.map((svc) => {
                        const Icon = svc.icon;
                        return (
                          <Link
                            key={svc.name}
                            href={svc.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 border border-transparent hover:border-brand-cyan/30 transition-all duration-200 group"
                          >
                            <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/10 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 text-slate-500 dark:text-muted group-hover:text-brand-cyan transition-all shrink-0">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                                {svc.name}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-muted line-clamp-1 mt-0.5">
                                {svc.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. AI Solutions ▾ */}
              {/* <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("ai")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={cn(
                    "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center gap-1",
                    activeDropdown === "ai" ? "text-brand-cyan font-semibold" : "text-muted hover:text-brand-cyan"
                  )}
                  onClick={() => setActiveDropdown(activeDropdown === "ai" ? null : "ai")}
                >
                  <span className="flex items-center gap-1">
                    <span>AI Solutions</span>
                  </  span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-300",
                      activeDropdown === "ai" ? "rotate-180 text-brand-cyan" : "text-muted group-hover:text-brand-cyan"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute top-full mt-1.5 -left-36 w-[680px] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-white/10 bg-[#070D1A]/95 backdrop-blur-2xl p-5 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-50",
                    "transition-all duration-300 ease-out origin-top transform-gpu",
                    activeDropdown === "ai"
                      ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
                  )}
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="w-4 h-4 text-brand-cyan" />
                      <span className="text-xs font-mono uppercase tracking-widest text-muted">
                        Nexovio Artificial Intelligence Suite
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {AI_SOLUTIONS_NAV.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-brand-cyan/30 transition-all duration-200 group"
                      >
                        <div className="text-xs font-semibold text-white group-hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                          <Bot className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                          <span>{item.name}</span>
                        </div>
                        <div className="text-[11px] text-muted line-clamp-1 mt-0.5">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* 4. Solutions ▾ */}
              {/* <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={cn(
                    "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center gap-1",
                    activeDropdown === "solutions" ? "text-brand-cyan font-semibold" : "text-muted hover:text-brand-cyan"
                  )}
                  onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-300",
                      activeDropdown === "solutions" ? "rotate-180 text-brand-cyan" : "text-muted group-hover:text-brand-cyan"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute top-full mt-1.5 -left-20 w-[420px] rounded-2xl border border-white/10 bg-[#070D1A]/95 backdrop-blur-2xl p-4 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-50",
                    "transition-all duration-300 ease-out origin-top transform-gpu",
                    activeDropdown === "solutions"
                      ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
                  )}
                >
                  <div className="space-y-1.5">
                    {SOLUTIONS_NAV.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-brand-cyan/30 transition-all duration-200 group"
                        >
                          <div className="p-1.5 rounded-lg bg-surface-subtle border border-white/10 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 text-muted group-hover:text-brand-cyan transition-all shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-brand-cyan transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-muted line-clamp-1 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div> */}

              {/* 5. Work / Case Studies */}
              <Link
                href="/case-studies"
                className={cn(
                  "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                  isActive("/case-studies") || isActive("/portfolio")
                    ? "text-brand-cyan font-semibold"
                    : "text-muted hover:text-brand-cyan"
                )}
              >
                <span className="relative py-0.5">
                  Case Studies
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                      isActive("/case-studies") || isActive("/portfolio") ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </span>
              </Link>

              {/* 7. About */}
              <Link
                href="/about"
                className={cn(
                  "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                  isActive("/about") ? "text-brand-cyan font-semibold" : "text-muted hover:text-brand-cyan"
                )}
              >
                <span className="relative py-0.5">
                  About
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                      isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </span>
              </Link>

              {/* 8. Blog */}
              <Link
                href="/blog"
                className={cn(
                  "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                  isActive("/blog") ? "text-brand-cyan font-semibold" : "text-muted hover:text-brand-cyan"
                )}
              >
                <span className="relative py-0.5">
                  Blog
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                      isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </span>
              </Link>

              {/* 9. Contact */}
              <Link
                href="/contact"
                className={cn(
                  "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                  isActive("/contact") ? "text-brand-cyan font-semibold" : "text-muted hover:text-brand-cyan"
                )}
              >
                <span className="relative py-0.5">
                  Contact
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                      isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </span>
              </Link>
            </nav>

            {/* Desktop Action Buttons (Theme Toggle + CTA) */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              <ThemeToggle />
              <Button
                href="https://calendly.com/nexoviodigitalsolutions-info"
                variant="primary"
                size="sm"
                trackingName="header_schedule_call"
                trackingLocation="header"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                className="text-xs px-3.5 py-2 whitespace-nowrap"
              >
                Schedule a Call
              </Button>
            </div>

            {/* Mobile Header Buttons (Tablet / Mobile) */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <Button
                href="https://calendly.com/nexoviodigitalsolutions-info"
                variant="primary"
                size="sm"
                trackingName="mobile_header_cta"
                trackingLocation="header_mobile"
                className="text-xs px-3 py-1.5 whitespace-nowrap"
              >
                Schedule
              </Button>
              <button
                type="button"
                className="p-2 text-muted-light hover:text-white hover:bg-white/10 rounded-lg outline-none focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down / Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-border-subtle bg-background/98 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {/* Mobile Home */}
              <Link
                href="/"
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium",
                  pathname === "/" ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
                )}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="rounded-xl border border-white/5 bg-surface-elevated/40 overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-muted hover:text-white focus:outline-none"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <div className="flex items-center gap-2">
                    <span>Services</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                      5 Disciplines
                    </span>
                  </div>
                  <ChevronDown
                    className={cn("w-4 h-4 transition-transform duration-300", mobileServicesOpen && "rotate-180 text-brand-cyan")}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 space-y-2 border-t border-white/5 pt-2 animate-in fade-in duration-200">
                    {/* Web Development Sub-accordion */}
                    <div className="rounded-lg bg-white/5 p-2 space-y-1">
                      <button
                        type="button"
                        onClick={() => setMobileWebDevOpen(!mobileWebDevOpen)}
                        className="w-full flex items-center justify-between text-xs font-bold text-brand-cyan px-2 py-1"
                      >
                        <span>Web Development</span>
                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", mobileWebDevOpen && "rotate-180")} />
                      </button>
                      {mobileWebDevOpen && (
                        <div className="pl-3 space-y-1 pt-1">
                          {WEB_DEV_SUBITEMS.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-1 text-xs text-muted hover:text-white"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Other Services */}
                    {OTHER_SERVICES.map((svc) => (
                      <Link
                        key={svc.name}
                        href={svc.href}
                        className="block px-3 py-1.5 rounded-lg text-xs font-medium text-muted hover:text-white hover:bg-white/5"
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile AI Solutions Accordion */}
              <div className="rounded-xl border border-white/5 bg-surface-elevated/40 overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-muted hover:text-white focus:outline-none"
                  onClick={() => setMobileAiOpen(!mobileAiOpen)}
                >
                  <div className="flex items-center gap-2">
                    <span>AI Solutions</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                      AI Suite
                    </span>
                  </div>
                  <ChevronDown
                    className={cn("w-4 h-4 transition-transform duration-300", mobileAiOpen && "rotate-180 text-brand-cyan")}
                  />
                </button>

                {mobileAiOpen && (
                  <div className="px-3 pb-3 space-y-1 border-t border-white/5 pt-2 animate-in fade-in duration-200">
                    {AI_SOLUTIONS_NAV.map((ai) => (
                      <Link
                        key={ai.name}
                        href={ai.href}
                        className="block px-3 py-1.5 rounded-lg text-xs font-medium text-muted hover:text-white hover:bg-white/5"
                      >
                        {ai.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Solutions Accordion */}
              <div className="rounded-xl border border-white/5 bg-surface-elevated/40 overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-muted hover:text-white focus:outline-none"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={cn("w-4 h-4 transition-transform duration-300", mobileSolutionsOpen && "rotate-180 text-brand-cyan")}
                  />
                </button>

                {mobileSolutionsOpen && (
                  <div className="px-3 pb-3 space-y-1 border-t border-white/5 pt-2 animate-in fade-in duration-200">
                    {SOLUTIONS_NAV.map((sol) => (
                      <Link
                        key={sol.name}
                        href={sol.href}
                        className="block px-3 py-1.5 rounded-lg text-xs font-medium text-muted hover:text-white hover:bg-white/5"
                      >
                        {sol.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Work / Case Studies */}
              <Link
                href="/case-studies"
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium",
                  isActive("/case-studies") ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
                )}
              >
                Work / Case Studies
              </Link>

              {/* Mobile AI Lab */}
              <Link
                href="/services/web-development"
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-white flex items-center gap-1.5"
              >
                <span>AI Lab</span>
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              </Link>

              {/* Mobile About */}
              <Link
                href="/about"
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium",
                  isActive("/about") ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
                )}
              >
                About Nexovio
              </Link>

              {/* Mobile Blog */}
              <Link
                href="/blog"
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium",
                  isActive("/blog") ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
                )}
              >
                Blog & Insights
              </Link>

              {/* Mobile Contact */}
              <Link
                href="/contact"
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium",
                  isActive("/contact") ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
                )}
              >
                Contact
              </Link>

              <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
                <ThemeToggle showText className="w-full justify-center py-2.5" />
                <Button
                  href="https://calendly.com/nexoviodigitalsolutions-info"
                  variant="primary"
                  size="lg"
                  trackingName="mobile_menu_schedule_call"
                  trackingLocation="mobile_menu"
                  className="w-full justify-center"
                >
                  Schedule a Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
