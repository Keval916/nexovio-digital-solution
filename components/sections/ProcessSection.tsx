"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const STEPS = [
  {
    step: "01",
    h3Title: "Discover",
    headline: "Understand Before We Build",
    summary:
      "We start by understanding your business, audience, competitors, existing digital presence and project objectives.",
  },
  {
    step: "02",
    h3Title: "Plan",
    headline: "Turn Ideas Into a Clear Roadmap",
    summary:
      "We define the structure, features, user journeys, technology requirements and project priorities before development begins.",
  },
  {
    step: "03",
    h3Title: "Design",
    headline: "Create the Experience",
    summary:
      "Our designers turn the strategy into intuitive interfaces, responsive layouts and a consistent visual system for your brand.",
  },
  {
    step: "04",
    h3Title: "Develop",
    headline: "Bring the Product to Life",
    summary:
      "Our development team builds the website, web application or mobile product with performance, responsiveness, security and scalability in mind.",
  },
  {
    step: "05",
    h3Title: "Test",
    headline: "Refine Every Important Detail",
    summary:
      "We test functionality, responsiveness, usability and key user journeys across different devices and screen sizes before launch.",
  },
  {
    step: "06",
    h3Title: "Launch & Grow",
    headline: "Launch Is Just the Beginning",
    summary:
      "Once your product is live, we can continue supporting SEO, digital marketing, improvements, analytics and ongoing optimization.",
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              From First Conversation to Final Launch
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                Great digital products aren&apos;t created in one step.
              </p>
              <p className="text-sm sm:text-base">
                We work through a clear process that keeps strategy, design, development and business objectives connected from beginning to launch.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {STEPS.map((item) => (
              <Card
                key={item.step}
                className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black font-mono px-3 py-1 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                      Phase {item.step}
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
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}


