"use client";

import React from "react";
import { Check, Code, Search, Layers, ShieldCheck, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const DIFFERENTIATORS = [
  {
    icon: Code,
    title: "Engineering Rigor Over Template Shortcuts",
    description:
      "We build on modern, decoupled stacks (Next.js, TypeScript, Tailwind) with strict type safety and zero bloated theme plugins. You receive a clean, maintainable asset that your team owns completely.",
  },
  {
    icon: Layers,
    title: "Strategy Synchronized With Design",
    description:
      "Design is never treated as superficial decoration. We engineer user flows, typographic hierarchy, and interactive states to guide visitors toward specific commercial outcomes.",
  },
  {
    icon: Search,
    title: "Built-In Technical SEO Architecture",
    description:
      "Search visibility is woven directly into the codebase from day one—including canonical URLs, structured JSON-LD schemas, automated sitemaps, and Core Web Vitals optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Honest Standards",
    description:
      "We never make fake ranking guarantees, fabricate testimonials, or hide behind ambiguous technical jargon. You get direct access to our engineers and clear milestone updates.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Partnership",
    description:
      "We work closely with your internal stakeholders at every milestone. Through interactive prototypes, clear code reviews, and structured feedback loops, you remain in complete control.",
  },
  {
    icon: Check,
    title: "Long-Term Digital Compounding",
    description:
      "We architect digital platforms to grow alongside your business. Code is structured cleanly so future feature expansions, API integrations, and redesigns can happen without tearing everything down.",
  },
];

export function WhyNexovio() {
  return (
    <section className="py-20 sm:py-28 bg-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge="Why Choose Nexovio"
            title="Engineered With Purpose,"
            highlightText="Delivered With Rigor"
            description="We are not a volume-driven template shop. We are a technical partner committed to building high-performance digital solutions that endure."
            align="center"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {DIFFERENTIATORS.map((diff) => {
              const Icon = diff.icon;
              return (
                <Card key={diff.title} className="bg-surface-elevated/70">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {diff.description}
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
