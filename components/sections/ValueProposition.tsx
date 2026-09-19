"use client";

import React from "react";
import { Compass, PenTool, Terminal, LineChart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const PILLARS = [
  {
    icon: Compass,
    title: "Strategy-Led Execution",
    description:
      "We begin with business objectives, user behavior analysis, and technical feasibility rather than jumping straight into code. Every architectural decision directly supports commercial viability.",
  },
  {
    icon: PenTool,
    title: "Design That Serves the User",
    description:
      "Aesthetics built around clarity, accessible hierarchy, and intuitive interaction flows. We eliminate cognitive clutter so visitors naturally navigate toward your primary value propositions.",
  },
  {
    icon: Terminal,
    title: "Technology Built for Growth",
    description:
      "Clean, modular software engineering powered by Next.js and TypeScript. We avoid fragile shortcuts, delivering secure, maintainable web systems prepared for scaling user traffic.",
  },
  {
    icon: LineChart,
    title: "Marketing Focused on Measurable Outcomes",
    description:
      "Organic search visibility and technical SEO aligned with user search intent. We build compounding inbound interest through content relevance and transparent conversion analytics.",
  },
];

export function ValueProposition() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-4 sm:pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge="Coordinated Digital Solutions"
            title="From Idea to"
            highlightText="Digital Growth"
            description="Most digital projects fail when strategy, design, development, and marketing operate in silos. Nexovio synchronizes all four disciplines into one cohesive growth engine."
            align="center"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.12} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.title}
                  className="flex flex-col justify-between h-full bg-surface-elevated/60"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
                      Phase 0{index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
