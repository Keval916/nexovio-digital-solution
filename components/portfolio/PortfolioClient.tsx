"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const CATEGORIES = [
  "All Categories",
  "Web Development",
  "Web Design",
  "UI/UX Design",
  "Graphic Design",
  "Digital Marketing",
];

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredProjects =
    activeCategory === "All Categories"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <Breadcrumbs items={[{ name: "Portfolio", url: "/portfolio" }]} />

        {/* Page Hero */}
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-4">
              Proven Digital Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Representative Projects &amp;{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Engineered Work.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
              Explore curated web applications, bespoke digital interfaces, and organic growth architectures delivered across our five core disciplines.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Interactive Category Filter Pills */}
        <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.1}>
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isSelected = category === activeCategory;
              const count =
                category === "All Categories"
                  ? PORTFOLIO_PROJECTS.length
                  : PORTFOLIO_PROJECTS.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`group flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-[border-color,background-color,color,box-shadow] duration-[400ms] border outline-none select-none ${
                    isSelected
                      ? "bg-gradient-brand text-white keep-white border-transparent shadow-[0_4px_20px_rgba(0,198,255,0.4)]"
                      : "bg-surface-elevated text-muted hover:text-white border-border-subtle hover:border-brand-cyan/50 hover:bg-surface-subtle"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-white/5 text-muted-dark"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* Projects Grid with Rich Visuals */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.1} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col justify-between h-full bg-surface-elevated/70 p-5 sm:p-6 group hover:border-brand-cyan/45 shadow-card hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(0,198,255,0.15)]"
              >
                <div>
                  {/* Visual Project Preview Image */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 group-hover:border-brand-cyan/35 mb-5 bg-[#050A14]">
                    <Image
                      src={project.featuredImage}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/85 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-muted-dark font-mono font-medium">
                      {project.industry}
                    </span>
                    {project.hasCaseStudy && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                        <Sparkles className="w-3 h-3" />
                        <span>Case Study Available</span>
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2.5 leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {project.techStack && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-muted-light border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  {project.hasCaseStudy ? (
                    <Link
                      href={`/case-studies/${project.slug}`}
                      className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1.5 transition-colors group/link"
                    >
                      <span>Read In-Depth Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="text-xs font-medium text-muted hover:text-white inline-flex items-center gap-1.5 transition-colors group/link"
                    >
                      <span>Inquire About Similar Architecture</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Conversion Banner */}
        <AnimateOnScroll variant="scaleUp" duration={0.8}>
          <div className="rounded-2xl border border-brand-cyan/25 bg-surface-elevated/90 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Have a project with similar technical requirements?
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6 max-w-xl mx-auto">
              We review technical specifications, architecture feasibility, and target milestones before providing transparent scope recommendations.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              trackingName="portfolio_bottom_cta"
              trackingLocation="portfolio_page"
              icon={<ArrowRight className="w-4 h-4" />}
              className="shadow-glow"
            >
              Start Your Project Inquiry
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
