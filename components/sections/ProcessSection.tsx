"use client";

import React from "react";
import { Search, Map, Palette, Code2, CheckCircle2, Rocket } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const STEPS = [
  {
    icon: Search,
    h3Title: "Discover",
    headline: "Know Before We Go",
    summary:
      "We begin by getting a clear understanding of your business, your audience, your competitors, your current digital presence, and the goals of the project.",
  },
  {
    icon: Map,
    h3Title: "Plan",
    headline: "From ideas into a detailed roadmap",
    summary:
      "We outline the structure, functionality, user flows, technology needs and project priorities before starting the development.",
  },
  {
    icon: Palette,
    h3Title: "Design",
    headline: "Build the Experience",
    summary:
      "Our designers transform the strategy into fluid interactions, flexible grid systems and a cohesive visual system for your company.",
  },
  {
    icon: Code2,
    h3Title: "Develop",
    headline: "Make the Product a Reality",
    summary:
      "Our development team designs and develops software and websites for optimized performance, responsiveness, security and scalability.",
  },
  {
    icon: CheckCircle2,
    h3Title: "Test",
    headline: "Polish Every Detail That Matters",
    summary:
      "Prior to launch, we check the functionality, responsiveness, usability, and important user flows on varying devices and screen resolutions.",
  },
  {
    icon: Rocket,
    h3Title: "Launch & Grow",
    headline: "Launch Is Just the Beginning",
    summary:
      "After your product is live, we can help continue to support SEO, digital marketing, development, analytics and ongoing optimization.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              From First Conversation to{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Final Launch</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                Great digital products aren&apos;t built in a day.
              </p>
              <p className="text-sm sm:text-base">
                We follow a transparent process that ensures strategy, design, development and business goals are linked from start to launch.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.h3Title}
                  className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                        Phase 0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-brand-cyan transition-colors">
                      {item.h3Title}
                    </h3>
                    <div className="text-sm font-semibold text-brand-bright mb-3">
                      {item.headline}
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.summary}
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
