"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Palette,
  Layout,
  Smartphone,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const ICONS = {
  Code2,
  Palette,
  Layout,
  Smartphone,
  TrendingUp,
};

const SERVICE_TITLES: Record<string, string> = {
  "web-development": "Build More Than a Website",
  "web-design": "Make Your First Impression Count",
  "ui-ux-design": "Design Around Real People",
  "mobile-app-development": "Take Your Product Beyond the Browser",
  "seo-digital-marketing": "Turn Online Visibility Into Opportunity",
};

const SERVICE_MOCKUPS: Record<string, string> = {
  "web-development": "/images/services/web-development-mockup.svg",
  "web-design": "/images/services/web-design-mockup.svg",
  "ui-ux-design": "/images/services/ui-ux-mockup.svg",
  "mobile-app-development": "/images/services/ui-ux-mockup.svg",
  "seo-digital-marketing": "/images/services/digital-marketing-mockup.svg",
};

export function ServicesInteractive() {
  const [activeSlug, setActiveSlug] = useState(SERVICES[0].slug);
  const activeService = SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];
  const activeMockup = SERVICE_MOCKUPS[activeService.slug] || "/images/services/web-development-mockup.svg";

  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Engineered for Impact,{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Designed for Growth</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                Your business doesn&apos;t need another generic website. It needs a digital experience that supports the way you actually operate and the way your customers make decisions.
              </p>
              <p className="text-sm sm:text-base">
                Our services bring design, development, technology and marketing together under one roof, giving you a connected digital foundation instead of disconnected solutions.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Interactive Navigation Pills */}
        <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.15}>
          <div className="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {SERVICES.map((service, index) => {
              const IconComponent = (ICONS as any)[service.iconName] || Code2;
              const isSelected = service.slug === activeSlug;

              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setActiveSlug(service.slug)}
                  className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 border outline-none select-none ${
                    isSelected
                      ? "bg-gradient-brand text-white keep-white border-transparent shadow-[0_4px_20px_rgba(0,198,255,0.4)]"
                      : "bg-surface-elevated text-muted hover:text-white border-border-subtle hover:border-brand-bright/50 hover:bg-surface-subtle"
                  }`}
                >
                  <span className="text-xs font-mono opacity-70">0{index + 1}</span>
                  <IconComponent className="w-4 h-4 shrink-0" />
                  <span>{service.name}</span>
                </button>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* Active Service Showcase Card */}
        <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.2}>
          <div className="relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Context & Business Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase block mb-1">
                    SERVICE 0{SERVICES.findIndex((s) => s.slug === activeService.slug) + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {activeService.name}
                  </h3>
                  <div className="text-lg font-semibold text-brand-bright">
                    {SERVICE_TITLES[activeService.slug] || activeService.name}
                  </div>
                </div>

                <p className="text-base text-muted-light leading-relaxed">
                  {activeService.fullDescription}
                </p>

                {/* Capabilities List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
                    Key Capabilities &amp; Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.capabilities.slice(0, 4).map((cap) => (
                      <div key={cap.title} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-xs font-semibold text-white">
                            {cap.title}
                          </h5>
                          <p className="text-[11px] text-muted mt-0.5 line-clamp-2">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button
                    href={`/services/${activeService.slug}`}
                    variant="primary"
                    size="md"
                    trackingName={`service_view_${activeService.slug}`}
                    trackingLocation="services_interactive"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore {activeService.name}
                  </Button>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-brand-cyan hover:underline py-2"
                  >
                    Start Your Project →
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Mockup Showcase */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-brand-cyan/25 bg-[#050A14] shadow-xl group">
                  <Image
                    src={activeMockup}
                    alt={`${activeService.name} Visual Architecture Mockup`}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                    /services/{activeService.slug}
                  </div>
                </div>

                {/* Service Cards Grid Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`p-3.5 rounded-xl border transition-all text-left block ${
                        s.slug === activeService.slug
                          ? "border-brand-cyan/50 bg-brand-cyan/10"
                          : "border-border-subtle bg-surface/60 hover:border-brand-cyan/30"
                      }`}
                    >
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>{s.name}</span>
                        <ArrowRight className="w-3 h-3 text-brand-cyan opacity-0 group-hover:opacity-100" />
                      </div>
                      <p className="text-[11px] text-muted line-clamp-1 mt-1">
                        {SERVICE_TITLES[s.slug]}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
