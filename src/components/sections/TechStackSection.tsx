"use client";

import React from "react";
import { Layout, Server, Cloud, ShoppingBag, Link2, LineChart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const TECH_CATEGORIES = [
  {
    icon: Layout,
    title: "FRONTEND DEVELOPMENT",
    description: "Modern responsive interfaces and interactive web experiences.",
  },
  {
    icon: Server,
    title: "BACKEND DEVELOPMENT",
    description: "Reliable APIs, databases and business logic designed for real-world applications.",
  },
  {
    icon: Cloud,
    title: "CLOUD & INFRASTRUCTURE",
    description: "Scalable infrastructure and deployment workflows built around your application's needs.",
  },
  {
    icon: ShoppingBag,
    title: "CMS & ECOMMERCE",
    description: "Flexible content management and ecommerce solutions for growing businesses.",
  },
  {
    icon: Link2,
    title: "APIs & INTEGRATIONS",
    description: "Connect your website or application with the tools your business already uses.",
  },
  {
    icon: LineChart,
    title: "ANALYTICS & TRACKING",
    description: "Understand how users interact with your digital experience and where opportunities exist.",
  },
];

export function TechStackSection() {
  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              TECHNOLOGY &amp; DEVELOPMENT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold tracking-tight leading-tight">
              Modern Technology Stack,{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Zero Unnecessary Complexity</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-slate-900 dark:text-white/90">
                The right technology depends on the problem we&apos;re solving.
              </p>
              <p className="text-sm sm:text-base">
                We choose tools and frameworks based on your project&apos;s requirements, performance expectations, scalability needs and long-term goals — rather than forcing every project into the same technology stack.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_CATEGORIES.map((tech) => {
              const Icon = tech.icon;
              return (
                <Card key={tech.title} className="bg-surface-elevated/80 border-border-subtle p-6 hover:border-brand-cyan/40">
                  <div className="w-10 h-10 rounded-lg bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide mb-2">
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

