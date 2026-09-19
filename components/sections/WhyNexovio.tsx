"use client";

import React from "react";
import { Check, Code, Search, Layers, ShieldCheck, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const REASONS = [
  {
    number: "01",
    title: "BUSINESS-FIRST THINKING",
    icon: Code,
    description: "We start with your business objective rather than starting with technology.",
  },
  {
    number: "02",
    title: "HUMAN-CENTERED DESIGN",
    icon: Layers,
    description: "Every interface is designed around real users, their expectations and the actions you want them to take.",
  },
  {
    number: "03",
    title: "MODERN DEVELOPMENT",
    icon: Check,
    description: "We use modern development approaches to create responsive, maintainable and scalable digital products.",
  },
  {
    number: "04",
    title: "SEO-FRIENDLY FOUNDATIONS",
    icon: Search,
    description: "We consider technical SEO, content structure, performance, mobile responsiveness and search-friendly architecture during development.",
  },
  {
    number: "05",
    title: "TRANSPARENT COLLABORATION",
    icon: HeartHandshake,
    description: "You stay involved throughout the project with clear communication, feedback cycles and defined milestones.",
  },
  {
    number: "06",
    title: "BUILT TO EVOLVE",
    icon: ShieldCheck,
    description: "Your business will change. Your digital product should be able to change with it.",
  },
];

export function WhyNexovio() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              WHY BUSINESSES WORK WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Technology With{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Purpose, Not Complexity</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground/90">
                Technology should make your business easier to run — not harder.
              </p>
              <p className="text-sm sm:text-base">
                We focus on building solutions that are practical for your team, useful for your customers and flexible enough to evolve as your business changes.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {REASONS.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.number} className="bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2.5 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
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

