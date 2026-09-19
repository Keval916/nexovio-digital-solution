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
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/lib/../components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";

const SERVICES_NAV = [
  {
    name: "Web Development",
    href: "/services/web-development",
    description: "Custom corporate portals & scalable web applications",
    icon: Code2,
  },
  {
    name: "Web Design",
    href: "/services/web-design",
    description: "Bespoke, conversion-focused mobile-first website experiences",
    icon: Palette,
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "User research, wireframing, and interactive design systems",
    icon: Layout,
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Cross-platform iOS and Android mobile app development",
    icon: Sparkles,
  },
  {
    name: "SEO & Digital Marketing",
    href: "/services/seo-digital-marketing",
    description: "Technical SEO, search visibility & conversion optimization",
    icon: TrendingUp,
  },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
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
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside for dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
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
      {/* Soft Page Backdrop Blur when Services MegaMenu is Open */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-[3px] transition-all duration-300 pointer-events-none",
          servicesDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        aria-hidden="true"
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2"
            : "bg-transparent py-2.5 sm:py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Full Brand Logo */}
          <Link
            href="/"
            className="flex items-center group outline-none focus:outline-none select-none py-0.5 px-1 transition-transform hover:opacity-95"
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
                className="hidden dark:block h-10 sm:h-11 md:h-12 lg:h-14 xl:h-[60px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
              {/* Light Theme Logo */}
              <Image
                src="/images/brand/nexovio-digital-solution-light.webp"
                alt="Nexovio Digital Solutions"
                width={380}
                height={100}
                priority
                className="block dark:hidden h-10 sm:h-11 md:h-12 lg:h-14 xl:h-[60px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className={cn(
                "px-3.5 py-2 text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
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
                    isActive("/") && pathname === "/"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </span>
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-3.5 py-2 text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                isActive("/about")
                  ? "text-brand-cyan font-semibold"
                  : "text-muted hover:text-brand-cyan"
              )}
            >
              <span className="relative py-0.5">
                About
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                    isActive("/about")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </span>
            </Link>

            {/* Services MegaMenu */}
            <div
              className="static"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                  isActive("/services") || servicesDropdownOpen
                    ? "text-brand-cyan font-semibold"
                    : "text-muted hover:text-brand-cyan"
                )}
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span className="relative py-0.5 flex items-center gap-1.5">
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-300",
                      servicesDropdownOpen ? "rotate-180 text-brand-cyan" : "text-muted group-hover:text-brand-cyan"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                      isActive("/services") || servicesDropdownOpen
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </span>
              </button>

              {/* Eye-Catching Desktop MegaMenu - Smooth CSS Transition (Connected directly to header bottom) */}
              <div
                className={cn(
                  "absolute top-full mt-0.5 left-1/2 -translate-x-1/2 w-[min(calc(100vw-2rem),960px)] max-h-[calc(100vh-5rem)] overflow-y-auto rounded-2xl border border-white/10 bg-[#070D1A]/95 backdrop-blur-2xl p-5 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(23,105,255,0.2)] z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']",
                  "transition-all duration-300 ease-out origin-top transform-gpu",
                  servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
                )}
                role="menu"
              >
                {/* Top Bar inside MegaMenu */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-muted">
                      Nexovio Engineering &amp; Creative Disciplines
                    </span>
                  </div>
                  <Link
                    href="/services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Responsive Grid: Adapts seamlessly to tablets, laptops, and large monitors */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
                  {/* Column 1: Core 5 Disciplines */}
                  <div className="col-span-12 md:col-span-6 lg:col-span-5 space-y-1.5 md:border-r border-white/5 md:pr-4">
                    <span className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-2 px-2">
                      Core Capabilities
                    </span>
                    {SERVICES_NAV.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-brand-cyan/30 transition-all duration-200 group"
                        >
                          <div className="p-2 rounded-lg bg-surface-subtle border border-white/10 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 group-hover:text-brand-cyan text-muted transition-all shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors flex items-center gap-2">
                              <span>{service.name}</span>
                            </div>
                            <div className="text-xs text-muted line-clamp-1 mt-0.5">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Column 2: Fast-Track Solutions */}
                  <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-2 lg:border-r border-white/5 lg:pr-4">
                    <span className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-2 px-1">
                      Fast-Track Solutions
                    </span>
                    <div className="space-y-1 text-xs">
                      <Link
                        href="/services/web-development"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span className="font-semibold text-white block">Next.js Web Apps</span>
                        <span className="text-[11px] text-muted-dark">SSR, App Router &amp; APIs</span>
                      </Link>
                      <Link
                        href="/services/ui-ux-design"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span className="font-semibold text-white block">UI/UX Design Systems</span>
                        <span className="text-[11px] text-muted-dark">Figma tokens &amp; WCAG AA</span>
                      </Link>
                      <Link
                        href="/services/web-design"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span className="font-semibold text-white block">Corporate Portals</span>
                        <span className="text-[11px] text-muted-dark">High-trust lead funnels</span>
                      </Link>
                      <Link
                        href="/services/digital-marketing"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span className="font-semibold text-white block">Technical SEO &amp; Schema</span>
                        <span className="text-[11px] text-muted-dark">Compounding organic traffic</span>
                      </Link>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <div className="p-2.5 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 text-[11px] text-brand-cyan font-medium">
                        ✦ 100% Code &amp; IP Transfer Guaranteed
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Spotlight Case Study Showcase */}
                  <div className="col-span-12 lg:col-span-4 pl-0 lg:pl-1 mt-2 lg:mt-0 md:hidden lg:block">
                    <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider block mb-2">
                      Case Study Spotlight
                    </span>
                    <div className="rounded-xl border border-border-subtle bg-surface/80 p-3.5 hover:border-brand-cyan/40 transition-all duration-300 group flex flex-col justify-between h-[calc(100%-28px)]">
                      <div>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 mb-3 bg-surface-elevated">
                          <Image
                            src="/images/case-studies/apex-cloud-case-study.svg"
                            alt="Apex Cloud Platform Spotlight"
                            fill
                            sizes="280px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2 left-2 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30">
                            Production Study
                          </span>
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                          Apex Cloud Enterprise Platform
                        </h4>
                        <p className="text-[11px] text-muted line-clamp-2 mt-1">
                          High-throughput cloud management dashboard engineered with Next.js &amp; real-time telemetry streaming.
                        </p>

                        <div className="flex items-center gap-2 mt-2.5">
                          <span className="text-[10px] font-mono text-brand-cyan px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                            50K+ Nodes
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                            0.08s Latency
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between">
                        <Link
                          href="/case-studies/apex-cloud-enterprise-platform"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Read Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/contact"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-[11px] text-muted hover:text-white font-medium"
                        >
                          Inquire Scope
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className={cn(
                "px-3.5 py-2 text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                isActive("/portfolio")
                  ? "text-brand-cyan font-semibold"
                  : "text-muted hover:text-brand-cyan"
              )}
            >
              <span className="relative py-0.5">
                Portfolio
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                    isActive("/portfolio")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </span>
            </Link>

            <Link
              href="/case-studies"
              className={cn(
                "px-3.5 py-2 text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                isActive("/case-studies")
                  ? "text-brand-cyan font-semibold"
                  : "text-muted hover:text-brand-cyan"
              )}
            >
              <span className="relative py-0.5">
                Case Studies
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                    isActive("/case-studies")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </span>
            </Link>

            <Link
              href="/blog"
              className={cn(
                "px-3.5 py-2 text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                isActive("/blog")
                  ? "text-brand-cyan font-semibold"
                  : "text-muted hover:text-brand-cyan"
              )}
            >
              <span className="relative py-0.5">
                Blog
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                    isActive("/blog")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </span>
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-3.5 py-2 text-sm font-medium transition-colors duration-300 group outline-none focus:outline-none flex items-center",
                isActive("/contact")
                  ? "text-brand-cyan font-semibold"
                  : "text-muted hover:text-brand-cyan"
              )}
            >
              <span className="relative py-0.5">
                Contact
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan transition-all duration-300 ease-out",
                    isActive("/contact")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </span>
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              trackingName="header_start_project"
              trackingLocation="header"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Your Project
            </Button>
          </div>

          {/* Mobile Header Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              trackingName="mobile_header_cta"
              trackingLocation="header_mobile"
              className="text-xs px-3 py-1.5"
            >
              Start
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
        <div className="md:hidden border-b border-border-subtle bg-background/98 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            <Link
              href="/"
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium",
                pathname === "/" ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
              )}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium",
                isActive("/about") ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
              )}
            >
              About Nexovio
            </Link>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl border border-white/5 bg-surface-elevated/40 overflow-hidden">
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-muted hover:text-white focus:outline-none"
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
                <div className="px-3 pb-3 space-y-1.5 border-t border-white/5 pt-2 animate-in fade-in duration-200">
                  <Link
                    href="/services"
                    className="flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/5 rounded-lg border border-brand-cyan/20"
                  >
                    <span>All Services Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {SERVICES_NAV.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                          pathname === service.href ? "bg-brand-cyan/10 text-brand-cyan font-semibold" : "text-muted hover:text-white hover:bg-white/5"
                        )}
                      >
                        <div className="p-1.5 rounded bg-white/5 text-brand-cyan">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-medium">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium",
                isActive("/portfolio") ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
              )}
            >
              Portfolio
            </Link>

            <Link
              href="/case-studies"
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium",
                isActive("/case-studies") ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
              )}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium",
                isActive("/blog") ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
              )}
            >
              Blog & Insights
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium",
                isActive("/contact") ? "bg-white/10 text-brand-cyan font-semibold" : "text-muted hover:text-white"
              )}
            >
              Contact
            </Link>

            <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
              <ThemeToggle showText className="w-full justify-center py-2.5" />
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackingName="mobile_menu_start_project"
                trackingLocation="mobile_menu"
                className="w-full justify-center"
              >
                Start Your Project
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  </>
  );
}
