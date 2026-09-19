"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
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
    <section className="section-white pt-12 sm:pt-16 pb-4 sm:pb-6 relative" id="process">
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
              <Card
                key={item.step}
                className="flex flex-col justify-between h-full bg-surface-elevated/70"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono px-3 py-1 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300">
                      {item.step}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

