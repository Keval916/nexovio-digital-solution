"use client";

import React from "react";
import { Compass, PenTool, Terminal, LineChart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const VALUE_CARDS = [
  {
    pillarLabel: "STRATEGY PRIOR TO DEVELOPMENT",
    icon: Compass,
    title: "Clear Direction. Better Decisions.",
    description:
      "We delineate writing on the basis of your business, audience, goals and challenges, prior to writing code. It allows us to design a digital solution with a clear intent rather than developing features just because we can.",
  },
  {
    pillarLabel: "DESIGN THAT ALWAYS FEELS RIGHT",
    icon: PenTool,
    title: "Simple Experiences. Stronger Connections.",
    description:
      "We design clean and simple UI/UX interfaces to help the users find what you want to tell them to say and make it simple for you to attract visitors and customers to your site or app.",
  },
  {
    pillarLabel: "SCALE-READY TECHNOLOGY",
    icon: Terminal,
    title: "Flexible Today. Ready for Tomorrow.",
    description:
      "Whether you're building out business websites or custom web and mobile applications that help your company differentiate in the marketplace, we apply forward-looking development techniques and tools to ensure your digital solutions can evolve as your needs change.",
  },
  {
    pillarLabel: "BUSINESS-BUILDING MARKETING",
    icon: LineChart,
    title: "Get Found. Get Remembered. Get Results.",
    description:
      "A website has value, but only if people can find it. Our proven SEO and digital marketing techniques enable businesses to increase their visibility, drive targeted traffic and generate more leads on the internet.",
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
                Good digital product is not just about looks. It should help people to easily grasp your business, believe in your brand and feel compelled to take action.
              </p>
              <p>
                At Nexovio, we use strategy, design, development and digital marketing to deliver digital solutions aligned with your real business objectives — not just trends.
              </p>
              <p className="text-sm sm:text-base">
                Whether you are starting a new business, wanting to redevelop an old website or creating a totally custom digital product, we help you to transform your concepts into something useful, repeatable and ready to grow.
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
                  key={card.pillarLabel}
                  className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle hover:border-brand-cyan/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
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

