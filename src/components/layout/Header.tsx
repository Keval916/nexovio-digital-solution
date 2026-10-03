"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Code2,
  Palette,
  Layout,
  Smartphone,
  TrendingUp,
  PenTool,
  Bot,
  Cpu,
  BrainCircuit,
  Zap,
  Sparkles,
  MessageSquare,
  Handshake,
  Clock,
  Tag,
  BookOpen,
  Briefcase,
  HelpCircle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@nexoviodigitalsolutions.com";
const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+91-6351312234";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91-6351312234";

// ============================================================================
// NAVIGATION DATA STRUCTURES
// ============================================================================

// 1. Core Digital Services (6 disciplines)
const ALL_SERVICES = [
  {
    name: "Web Development",
    href: "/services/web-development",
    description: "Scalable web applications, responsive websites & API integrations",
    icon: Code2,
    category: "Engineering",
  },
  {
    name: "Web Design",
    href: "/services/web-design",
    description: "Bespoke, conversion-focused website experiences",
    icon: Palette,
    category: "Design",
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "User research, wireframing & interactive design systems",
    icon: Layout,
    category: "Design",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Cross-platform iOS & Android mobile application engineering",
    icon: Smartphone,
    category: "Engineering",
  },
  {
    name: "Graphic Design",
    href: "/services/graphic-design",
    description: "Brand identity, logos, packaging, menus & marketing collateral",
    icon: PenTool,
    category: "Creative",
  },
  {
    name: "SEO & Digital Marketing",
    href: "/services/seo-digital-marketing",
    description: "Technical SEO, search visibility & organic growth roadmaps",
    icon: TrendingUp,
    category: "Growth",
  },
];

// 2. AI Solutions & Workflow Intelligence (Directly from homepage AI workflow section)
// All boxes uniform format, with AI Development live and the others clearly labeled Coming Soon
const AI_SOLUTIONS = [
  {
    name: "AI Development",
    href: "/services/ai-development",
    description: "Custom AI software, intelligent web apps & production LLM integrations",
    icon: Sparkles,
    badge: "LIVE",
    category: "Flagship",
    isLive: true,
  },
  {
    name: "Generative AI Development",
    href: "/services/generative-ai-development",
    description: "Custom generative models, prompt pipelines & intelligent content workflows",
    icon: Cpu,
    badge: "LIVE",
    category: "GenAI",
    isLive: true,
  },
  {
    name: "AI Agent Development",
    href: "/services/ai-development#ai-services",
    description: "Task-specific autonomous agents reasoning across multi-step workflows",
    icon: Bot,
    badge: "Coming Soon",
    category: "Agents",
    isLive: false,
  },
  {
    name: "AI Chatbot Development",
    href: "/services/ai-development#ai-services",
    description: "Intelligent conversational bots for customer service & lead qualification",
    icon: MessageSquare,
    badge: "Coming Soon",
    category: "Assistants",
    isLive: false,
  },
  {
    name: "AI Automation Solutions",
    href: "/services/ai-development#ai-services",
    description: "Automate repetitive support, CRM, document processing & lead workflows",
    icon: Zap,
    badge: "Coming Soon",
    category: "Automation",
    isLive: false,
  },
  {
    name: "AI Search & RAG Solutions",
    href: "/services/ai-development#ai-services",
    description: "Connect language models to proprietary enterprise docs & private vector data",
    icon: BrainCircuit,
    badge: "Coming Soon",
    category: "Search & RAG",
    isLive: false,
  },
];

const EXPLORE_ITEMS = [
  { name: "About Us", href: "/about", icon: Users },
  { name: "Case Studies", href: "/case-studies", icon: Briefcase },
  { name: "Blog", href: "/blog", icon: BookOpen },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop active dropdown menu: "services" | "ai" | "explore" | null
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

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
    }, 220); // 220ms buffer prevents flickering during pointer transition
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
    setMobileAiOpen(false);
    setMobileExploreOpen(false);
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
      {/* Page Backdrop Blur when Any Desktop Dropdown is Open */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-[2px] transition-all duration-300 pointer-events-none",
          activeDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        aria-hidden="true"
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || activeDropdown
            ? "bg-white/95 dark:bg-[#070D1A]/95 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/10 shadow-lg"
            : "bg-white/95 dark:bg-[#070D1A]/95 backdrop-blur-md border-b border-slate-200/60 dark:border-white/10"
        )}
        ref={dropdownRef}
      >
        {/* Topbar above header */}
        <div
          className="topbar-container bg-[#0f2f56] text-white keep-white text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block"
          style={{ color: "#ffffff" }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span
              className="flex items-center gap-1.5 text-white keep-white font-medium"
              style={{ color: "#ffffff" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-white keep-white" style={{ color: "#ffffff" }} />
              Your Digital Growth Partner for Web Development, Web Design, SEO &amp; AI Solutions
            </span>

            <div className="flex items-center gap-3">
              <Link
                href="/agency-partnership"
                className="flex items-center gap-2.5 text-xs text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
              >
                <Handshake className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Agency Partnership</span>
              </Link>
              <span>|</span>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-brand-cyan" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>

        <div className={cn("transition-all duration-300", isScrolled || activeDropdown ? "py-2" : "py-2.5 sm:py-3.5")}>
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
                {/* 3. AI Solutions ▾ (Consistent Uniform Box MegaMenu Matching Services Structure) */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("ai")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center gap-1.5",
                      pathname === "/services/ai-development" || activeDropdown === "ai"
                        ? "text-brand-cyan font-semibold"
                        : "text-muted hover:text-brand-cyan"
                    )}
                    onClick={() => setActiveDropdown(activeDropdown === "ai" ? null : "ai")}
                  >
                    <span>AI Solutions</span>
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        activeDropdown === "ai" ? "rotate-180 text-brand-cyan" : "text-muted group-hover:text-brand-cyan"
                      )}
                    />
                  </button>

                  {/* AI Solutions Desktop MegaMenu Dropdown Panel with Hover Bridge */}
                  <div
                    className={cn(
                      "absolute top-full pt-3 -left-[180px] xl:-left-[220px] w-[760px] max-w-[calc(100vw-3rem)] z-50",
                      "transition-all duration-300 ease-out origin-top transform-gpu",
                      activeDropdown === "ai"
                        ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 invisible -translate-y-2 scale-[0.98] pointer-events-none"
                    )}
                  >
                    <div className="rounded-2xl border border-brand-cyan/40 bg-white/98 dark:bg-[#070D1A]/98 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,198,255,0.14)]">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 dark:border-white/10">
                        <div className="flex items-center gap-2">
                          <BrainCircuit className="w-4 h-4 text-brand-cyan" />
                          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
                            Nexovio AI Solutions &amp; Workflow Intelligence
                          </span>
                        </div>
                        <Link
                          href="/services/ai-development"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-electric dark:hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <span>Explore AI Development</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* 6 AI Capabilities: Uniform 2-Column Grid (Directly From Homepage AI Capabilities) */}
                      <div className="grid grid-cols-2 gap-3">
                        {AI_SOLUTIONS.map((svc) => {
                          const Icon = svc.icon;
                          if (svc.isLive) {
                            return (
                              <Link
                                key={svc.name}
                                href={svc.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-3.5 p-3 rounded-xl border border-brand-cyan/50 hover:border-brand-cyan bg-brand-cyan/[0.06] hover:bg-brand-cyan/[0.12] transition-all duration-200 group relative shadow-sm"
                              >
                                <div className="p-2.5 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan group-hover:scale-105 transition-all shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                                      {svc.name}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                      LIVE
                                    </span>
                                  </div>
                                  <div className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                                    {svc.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          }

                          return (
                            <div
                              key={svc.name}
                              className="flex items-start gap-3.5 p-3 rounded-xl border border-slate-200/80 dark:border-white/5 bg-slate-50/60 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10 transition-all duration-200 group"
                            >
                              <div className="p-2.5 rounded-lg bg-white dark:bg-surface-subtle border border-slate-200/80 dark:border-white/10 text-slate-500 dark:text-muted group-hover:text-brand-cyan transition-all shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-cyan transition-colors">
                                    {svc.name}
                                  </span>
                                  <span className="inline-flex items-center gap-1 text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                                    <Clock className="w-2.5 h-2.5 text-amber-500" />
                                    Coming Soon
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-muted line-clamp-2 mt-1 leading-relaxed">
                                  {svc.description}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Footer Callout */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-muted">
                          Looking for custom AI tailored to your workflows?
                        </span>
                        <Link
                          href="/schedule-a-call"
                          onClick={() => setActiveDropdown(null)}
                          className="font-bold text-brand-cyan hover:underline flex items-center gap-1"
                        >
                          <span>Schedule AI Discovery Call</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Services MegaMenu ▾ (Core Digital & Creative Services) */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center gap-1",
                      (isActive("/services") && pathname !== "/services/ai-development") || activeDropdown === "services"
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

                  {/* Services Desktop MegaMenu Dropdown Panel with Hover Bridge */}
                  <div
                    className={cn(
                      "absolute top-full pt-3 -left-[140px] xl:-left-[180px] w-[760px] max-w-[calc(100vw-3rem)] z-50",
                      "transition-all duration-300 ease-out origin-top transform-gpu",
                      activeDropdown === "services"
                        ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 invisible -translate-y-2 scale-[0.98] pointer-events-none"
                    )}
                  >
                    <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/98 dark:bg-[#070D1A]/98 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 dark:border-white/10">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-brand-cyan" />
                          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-muted">
                            Nexovio Core Digital Services
                          </span>
                        </div>
                        <Link
                          href="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-electric dark:hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <span>Explore All 6 Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* 6 Core Services: 2-Column Spacious Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {ALL_SERVICES.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.name}
                              href={svc.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-100/90 dark:hover:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-brand-cyan/40 transition-all duration-200 group bg-slate-50/50 dark:bg-white/[0.02]"
                            >
                              <div className="p-2.5 rounded-lg bg-white dark:bg-surface-subtle border border-slate-200/80 dark:border-white/10 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 text-slate-600 dark:text-muted group-hover:text-brand-cyan transition-all shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                                    {svc.name}
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                    {svc.category}
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-muted line-clamp-2 mt-1 leading-relaxed">
                                  {svc.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer Callout */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-muted">
                          Need dedicated cross-functional teams?
                        </span>
                        <Link
                          href="/agency-partnership"
                          onClick={() => setActiveDropdown(null)}
                          className="font-bold text-brand-cyan hover:underline flex items-center gap-1"
                        >
                          <span>Agency &amp; Dedicated Team Partnerships</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Pricing */}
                <Link
                  href="/pricing"
                  className={cn(
                    "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                    isActive("/pricing")
                      ? "text-brand-cyan font-semibold"
                      : "text-muted hover:text-brand-cyan"
                  )}
                >
                  <span className="relative py-0.5">
                    Pricing
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                        isActive("/pricing") ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </span>
                </Link>

                {/* 4. Explore ▾ (Simple Submenu: About Us, Case Studies, Blog) */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("explore")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      "px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center gap-1.5",
                      isActive("/blog") ||
                        isActive("/case-studies") ||
                        isActive("/portfolio") ||
                        isActive("/about") ||
                        activeDropdown === "explore"
                        ? "text-brand-cyan font-semibold"
                        : "text-muted hover:text-brand-cyan"
                    )}
                    onClick={() => setActiveDropdown(activeDropdown === "explore" ? null : "explore")}
                  >
                    <span>Explore</span>
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        activeDropdown === "explore" ? "rotate-180 text-brand-cyan" : "text-muted group-hover:text-brand-cyan"
                      )}
                    />
                  </button>

                  {/* Simple Floating Submenu */}
                  <div
                    className={cn(
                      "absolute top-full left-0 pt-2 transition-all duration-200 z-50",
                      activeDropdown === "explore"
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="w-56 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/98 dark:bg-[#070D1A]/98 backdrop-blur-2xl p-2 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <div className="flex flex-col space-y-0.5">
                        {EXPLORE_ITEMS.map((item) => {
                          const Icon = item.icon;
                          const isItemActive = item.href === "/#faq" ? false : isActive(item.href);
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs xl:text-sm font-medium transition-all group",
                                isItemActive
                                  ? "bg-brand-cyan/10 text-brand-cyan font-semibold"
                                  : "text-slate-700 dark:text-slate-200 hover:text-brand-cyan hover:bg-slate-100/80 dark:hover:bg-white/5"
                              )}
                            >
                              <Icon className="w-4 h-4 text-brand-cyan shrink-0 transition-transform group-hover:scale-110" />
                              <span>{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Contact */}
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
                  href="/schedule-a-call"
                  variant="primary"
                  size="md"
                  fullWidthMobile={false}
                  trackingName="header_schedule_call"
                  trackingLocation="header"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="text-sm px-4 py-3 whitespace-nowrap"
                >
                  Schedule a Call
                </Button>
              </div>

              {/* Mobile Header Buttons (Tablet / Mobile) */}
              <div className="flex lg:hidden items-center gap-2">
                <ThemeToggle />
                <Button
                  href="/schedule-a-call"
                  variant="primary"
                  size="sm"
                  fullWidthMobile={false}
                  trackingName="mobile_header_cta"
                  trackingLocation="header_mobile"
                  className="w-auto text-xs px-3 py-1.5 whitespace-nowrap"
                >
                  Schedule
                </Button>

                {/* Smoothly Animated 3-Bar Hamburger Toggle */}
                <button
                  type="button"
                  className="relative w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                    {/* Top Bar */}
                    <span
                      className={cn(
                        "w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out origin-center",
                        mobileMenuOpen ? "translate-y-[7px] rotate-45 bg-brand-cyan" : ""
                      )}
                    />
                    {/* Middle Bar */}
                    <span
                      className={cn(
                        "w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out",
                        mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                      )}
                    />
                    {/* Bottom Bar */}
                    <span
                      className={cn(
                        "w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out origin-center",
                        mobileMenuOpen ? "-translate-y-[7px] -rotate-45 bg-brand-cyan" : ""
                      )}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down / Drawer Menu (Matches Desktop Header 1:1, Smooth Animated Collapse) */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-200/80 dark:border-white/10 bg-white/98 dark:bg-[#070D1A]/98 backdrop-blur-2xl shadow-2xl",
            mobileMenuOpen ? "max-h-[85vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          )}
        >
          <div className="px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {/* 2. Mobile Services Accordion (6 Core Services) */}
              <div className="rounded-xl border border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-muted hover:text-brand-cyan focus:outline-none transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <div className="flex items-center gap-2">
                    <span>Services</span>
                  </div>
                  <ChevronDown
                    className={cn("w-4 h-4 transition-transform duration-300", mobileServicesOpen && "rotate-180 text-brand-cyan")}
                  />
                </button>

                {/* Animated Accordion Content */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-3 pb-3 space-y-1 border-t border-slate-200/60 dark:border-white/5 pt-2">
                    {ALL_SERVICES.map((svc) => {
                      const Icon = svc.icon;
                      return (
                        <Link
                          key={svc.name}
                          href={svc.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-muted hover:text-brand-cyan dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-brand-cyan shrink-0" />
                            <span>{svc.name}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">
                            {svc.category}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 3. Mobile AI Solutions Accordion (Exact Match to Desktop, 1 Live Service + Roadmap) */}
              <div className="rounded-xl border border-brand-cyan/40 bg-brand-cyan/[0.03] overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-white focus:outline-none"
                  onClick={() => setMobileAiOpen(!mobileAiOpen)}
                >
                  <div className="flex items-center gap-2">
                    <span>AI Solutions</span>
                  </div>
                  <ChevronDown
                    className={cn("w-4 h-4 transition-transform duration-300", mobileAiOpen && "rotate-180 text-brand-cyan")}
                  />
                </button>

                {/* Animated Accordion Content */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    mobileAiOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-3 pb-3 space-y-1.5 border-t border-brand-cyan/20 pt-2">
                    {AI_SOLUTIONS.map((svc) => {
                      const Icon = svc.icon;
                      if (svc.isLive) {
                        return (
                          <Link
                            key={svc.name}
                            href={svc.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between p-2.5 rounded-lg text-xs font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/40"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <Icon className="w-4 h-4 text-brand-cyan shrink-0" />
                              <span className="truncate">{svc.name}</span>
                            </div>
                          </Link>
                        );
                      }

                      return (
                        <div
                          key={svc.name}
                          className="flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-muted bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Icon className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="truncate">{svc.name}</span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shrink-0">
                            <Clock className="w-2.5 h-2.5 text-amber-500" />
                            Coming Soon
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 3. Mobile Pricing */}
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive("/pricing") ? "bg-brand-cyan/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
                )}
              >
                Pricing
              </Link>

              {/* 4. Mobile Explore Accordion (About Us, Case Studies, Blog) */}
              <div className="rounded-xl border border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-white focus:outline-none"
                  onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                >
                  <div className="flex items-center gap-2">
                    <span>Explore</span>
                  </div>
                  <ChevronDown
                    className={cn("w-4 h-4 transition-transform duration-300", mobileExploreOpen && "rotate-180 text-brand-cyan")}
                  />
                </button>

                {/* Animated Accordion Content */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    mobileExploreOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-3 pb-3 space-y-1 border-t border-slate-200/60 dark:border-white/5 pt-2">
                    {EXPLORE_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-muted hover:text-brand-cyan dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        >
                          <Icon className="w-4 h-4 text-brand-cyan shrink-0" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 7. Mobile Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive("/contact") ? "bg-brand-cyan/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
                )}
              >
                Contact
              </Link>

              {/* Bottom Actions */}
              <div className="pt-4 mt-2 border-t border-slate-200/80 dark:border-white/10 space-y-3">
                <ThemeToggle showText className="w-full justify-center py-2.5" />
                <Button
                  href="/schedule-a-call"
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
        </div>
      </header>
    </>
  );
}