"use client";

import React from "react";
import {
  Rocket,
  ShoppingBag,
  Cloud,
  Stethoscope,
  Building2,
  Briefcase,
  GraduationCap,
  Utensils,
  Dumbbell,
  Hotel,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const INDUSTRIES = [
  { name: "Startups & Scaleups", icon: Rocket, desc: "Fast-to-market MVPs, high-converting investor decks, and scalable Next.js architectures." },
  { name: "B2B SaaS Platforms", icon: Cloud, desc: "Intuitive user dashboards, onboarding workflows, and high-performance web front-ends." },
  { name: "E-Commerce Brands", icon: ShoppingBag, desc: "Headless product catalogs, mobile-first storefronts, and frictionless checkout funnels." },
  { name: "Clinics & Healthcare", icon: Stethoscope, desc: "Accessible patient booking portals, WCAG compliance, and privacy-first web systems." },
  { name: "Real Estate & Architecture", icon: Building2, desc: "High-resolution property showcases, interactive floorplans, and localized lead capture." },
  { name: "Professional Advisory", icon: Briefcase, desc: "High-trust corporate portals, client calculators, and authoritative editorial layouts." },
  { name: "Education & Institutes", icon: GraduationCap, desc: "Course discovery engines, responsive enrollment forms, and structured content libraries." },
  { name: "Hospitality & Dining", icon: Utensils, desc: "Digital reservation pathways, interactive menus, and localized search optimization." },
  { name: "Fitness & Wellness", icon: Dumbbell, desc: "Class scheduling interfaces, membership lead funnels, and dynamic mobile portals." },
  { name: "Hotels & Travel", icon: Hotel, desc: "Direct booking web engines, destination showcases, and multi-language accessibility." },
];

export function IndustriesSection() {
  return (
    <section className="py-20 sm:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge="Market Versatility"
            title="Digital Solutions for Growing Businesses"
            highlightText="Across Industries"
            description="We tailor our architectural engineering, design systems, and SEO frameworks to the distinct commercial realities of diverse business sectors."
            align="center"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.06} duration={0.5}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="p-5 rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md hover:bg-surface-elevated hover:border-brand-cyan/45 hover:-translate-y-1 hover:shadow-[0_12px_25px_-8px_rgba(23,105,255,0.18)] transition-all duration-300 group text-center flex flex-col items-center justify-center relative overflow-hidden"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 text-brand-cyan flex items-center justify-center mb-3 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-[11px] text-muted line-clamp-2 leading-tight">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
