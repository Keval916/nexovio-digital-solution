"use client";

import React from "react";
import { Cpu, ShieldCheck, Zap, Server, Globe2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const TECH_PILLARS = [
  {
    icon: Cpu,
    title: "Next.js App Router & React 18+",
    description: "Hybrid server/client rendering with zero-waterfall data fetching, sub-second initial loads, and streaming HTML.",
  },
  {
    icon: ShieldCheck,
    title: "Strict TypeScript End-to-End",
    description: "Rock-solid type safety across front-end components, API routes, and database models to prevent runtime regressions.",
  },
  {
    icon: Zap,
    title: "Tailwind CSS Design Tokens",
    description: "Utility-first, purgeable CSS architecture producing lean stylesheets (<15KB) without unused framework overhead.",
  },
  {
    icon: Server,
    title: "Modern API & Microservice Ready",
    description: "Clean REST and GraphQL integration layers connecting seamlessly to CRMs, payment gateways, and cloud databases.",
  },
  {
    icon: Globe2,
    title: "Global Edge CDN Caching",
    description: "Asset distribution across low-latency edge nodes worldwide to deliver lightning-fast responses on any continent.",
  },
  {
    icon: Sparkles,
    title: "Core Web Vitals Obsession",
    description: "Optimized image loading (WebP/AVIF), font preloading, and minimal layout shifts (CLS < 0.05) standard on every page.",
  },
];

export function TechStackSection() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-4 sm:pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge="Engineering Rigor"
            title="Modern Technology Stack,"
            highlightText="Zero Compromises"
            description="We do not build on outdated monolithic templates. Our applications are engineered using industry-leading modern tooling for optimal security, speed, and developer ergonomics."
            align="center"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_PILLARS.map((tech) => {
              const Icon = tech.icon;
              return (
                <Card key={tech.title} className="bg-surface-elevated/80 border-border-subtle">
                  <div className="w-10 h-10 rounded-lg bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {tech.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
