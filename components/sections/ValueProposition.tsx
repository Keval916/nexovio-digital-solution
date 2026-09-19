"use client";

import React from "react";
import { Compass, PenTool, Terminal, LineChart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const VALUE_CARDS = [
  {
    number: "01",
    pillarLabel: "STRATEGY BEFORE DEVELOPMENT",
    icon: Compass,
    title: "Clear Direction. Better Decisions.",
    description:
      "Before writing code, we understand your business, audience, goals and challenges. This helps us create a digital solution with a clear purpose instead of building features simply because they are possible.",
  },
  {
    number: "02",
    pillarLabel: "DESIGN THAT FEELS NATURAL",
    icon: PenTool,
    title: "Simple Experiences. Stronger Connections.",
    description:
      "We create clean, intuitive UI/UX experiences that make it easy for visitors and customers to navigate your website or application and understand what you offer.",
  },
  {
    number: "03",
    pillarLabel: "TECHNOLOGY BUILT FOR GROWTH",
    icon: Terminal,
    title: "Flexible Today. Ready for Tomorrow.",
    description:
      "From business websites to custom web applications and mobile products, we use modern development practices to build digital solutions that can evolve with your business.",
  },
  {
    number: "04",
    pillarLabel: "MARKETING THAT BRINGS VISIBILITY",
    icon: LineChart,
    title: "Get Found. Get Remembered. Get Results.",
    description:
      "A website is only valuable when people can find it. Our SEO and digital marketing strategies help businesses improve visibility, attract relevant traffic and create more opportunities online.",
  },
];

export function ValueProposition() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              HOW WE HELP BUSINESSES GROW
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              From Your Idea to a{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Digital Experience That Works</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-3 pt-2">
              <p className="font-semibold text-foreground/90">
                A good digital product should do more than look impressive. It should make it easier for people to understand your business, trust your brand and take action.
              </p>
              <p>
                At Nexovio, we combine strategy, design, development and digital marketing to create digital solutions built around your actual business goals — not just trends.
              </p>
              <p className="text-sm sm:text-base">
                Whether you&apos;re launching a new business, redesigning an outdated website or building a completely custom digital product, we help turn your ideas into something useful, scalable and ready for growth.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.12} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {VALUE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.number}
                  className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                        {card.number}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-brand-bright uppercase tracking-widest block mb-2">
                      {card.pillarLabel}
                    </span>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-brand-cyan transition-colors mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {card.description}
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

