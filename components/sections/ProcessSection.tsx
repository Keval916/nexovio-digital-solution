"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    summary: "Deep-dive analysis of your business model, customer journeys, technical requirements, and competitive ecosystem.",
  },
  {
    step: "02",
    title: "Strategize",
    summary: "Defining exact technical architecture, data structures, responsive wireframes, and milestone roadmaps.",
  },
  {
    step: "03",
    title: "Design",
    summary: "Crafting bespoke high-fidelity UI screens, interactive Figma prototypes, and cohesive design systems.",
  },
  {
    step: "04",
    title: "Build",
    summary: "Developing clean, modular TypeScript code with Next.js, API integrations, and continuous QA testing.",
  },
  {
    step: "05",
    title: "Launch",
    summary: "Executing rigorous cross-browser validation, Core Web Vitals tuning, and zero-downtime production deployment.",
  },
  {
    step: "06",
    title: "Grow",
    summary: "Monitoring organic search crawling, refining conversion funnels, and supporting iterative feature releases.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-background relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge="Delivery Framework"
            title="A Structured 6-Step"
            highlightText="Engineering Process"
            description="We minimize ambiguity through predictable, milestone-driven execution from project discovery through production deployment and beyond."
            align="center"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-border-subtle bg-surface/70 p-6 sm:p-8 hover:border-brand-cyan/40 transition-[border-color] duration-[400ms] group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-brand-bright/30 group-hover:text-brand-cyan transition-colors">
                    {item.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
