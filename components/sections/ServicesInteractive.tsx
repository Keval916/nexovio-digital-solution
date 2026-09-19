"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Palette,
  Layout,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const ICONS = {
  Code2,
  Palette,
  Layout,
  Sparkles,
  TrendingUp,
};

const SERVICE_MOCKUPS: Record<string, string> = {
  "web-development": "/images/services/web-development-mockup.svg",
  "web-design": "/images/services/web-design-mockup.svg",
  "ui-ux-design": "/images/services/ui-ux-mockup.svg",
  "graphic-design": "/images/services/graphic-design-mockup.svg",
  "digital-marketing": "/images/services/digital-marketing-mockup.svg",
};

export function ServicesInteractive() {
  const [activeSlug, setActiveSlug] = useState(SERVICES[0].slug);
  const activeService = SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];
  const activeMockup = SERVICE_MOCKUPS[activeService.slug] || "/images/services/web-development-mockup.svg";

  return (
    <section className="py-20 sm:py-28 bg-background relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge="Core Specializations"
            title="Engineered for Impact,"
            highlightText="Designed for Growth"
            description="We deliver five tightly integrated digital disciplines. Explore each capability below to see how we solve real business challenges."
            align="center"
          />
        </AnimateOnScroll>

        {/* Interactive Navigation Pills */}
        <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.15}>
          <div className="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {SERVICES.map((service) => {
              const IconComponent = (ICONS as any)[service.iconName] || Code2;
              const isSelected = service.slug === activeSlug;

              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setActiveSlug(service.slug)}
                  className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-[border-color,background-color,color,box-shadow] duration-[400ms] border outline-none select-none ${
                    isSelected
                      ? "bg-gradient-brand text-white keep-white border-transparent shadow-[0_4px_20px_rgba(0,198,255,0.4)]"
                      : "bg-surface-elevated text-muted hover:text-white border-border-subtle hover:border-brand-bright/50 hover:bg-surface-subtle"
                  }`}
                >
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
              {/* Left Column: Context & Business Problem */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase block mb-1">
                    Service Capability
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeService.name}
                  </h3>
                </div>

                <p className="text-base text-muted-light leading-relaxed">
                  {activeService.fullDescription}
                </p>

                {/* Business Problem Solved Callout */}
                <div className="rounded-xl border border-red-500/25 bg-red-950/20 p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-300">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span>The Business Challenge We Solve</span>
                  </div>
                  <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed">
                    {activeService.businessProblem}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                    Key Technologies &amp; Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-muted-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    href={`/services/${activeService.slug}`}
                    variant="primary"
                    size="md"
                    trackingName={`service_view_${activeService.slug}`}
                    trackingLocation="services_interactive"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore {activeService.name} Page
                  </Button>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-brand-cyan hover:underline py-2"
                  >
                    Discuss Your Requirements →
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Mockup Showcase & Deliverables */}
              <div className="lg:col-span-6 space-y-6">
                {/* Visual Mockup Display */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-brand-cyan/25 bg-[#050A14] shadow-xl group">
                  <Image
                    src={activeMockup}
                    alt={`${activeService.name} Visual Architecture Mockup`}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                    Live Deliverable
                  </div>
                </div>

                {/* Capabilities Checklist */}
                <div className="bg-surface/80 rounded-xl border border-border-subtle p-5 sm:p-6 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/5 pb-2.5">
                    Core Capabilities &amp; Deliverables
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

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-muted">
                    <span>Standard: 100% bespoke engineering</span>
                    <Link
                      href={`/services/${activeService.slug}`}
                      className="text-brand-bright hover:text-brand-cyan font-medium inline-flex items-center gap-1"
                    >
                      <span>Full Breakdown</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
