"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function SelectedWork() {
  const featured = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section className="section-blue pt-12 sm:pt-16 pb-4 sm:pb-6 relative" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <SectionHeading
              badge="Selected Work"
              title="Featured Solutions &"
              highlightText="Digital Case Studies"
              description="Explore representative digital platforms, interface architectures, and search systems engineered by our team."
              align="center"
              className="mb-6"
            />
            <div>
              <Button
                href="/portfolio"
                variant="secondary"
                size="md"
                trackingName="selected_work_view_all"
                trackingLocation="selected_work"
                icon={<ArrowRight className="w-4 h-4" />}
                className="hover:border-brand-cyan/40"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.15} duration={0.7}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((project) => (
              <Card
                key={project.id}
                variant="scale"
                className="flex flex-col justify-between h-full bg-surface-elevated/70 p-5 sm:p-6"
              >
                <div>
                  {/* Visual Project Cover Image Showcase */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border-subtle group-hover:border-brand-cyan/35 mb-5 bg-[#050A14]">
                    <Image
                      src={project.featuredImage}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
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
                        <span>Case Study</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2.5 leading-snug">
                    {project.title}
                  </h3>

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

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
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
                      href="/portfolio"
                      className="text-xs font-medium text-muted hover:text-white inline-flex items-center gap-1.5 transition-colors group/link"
                    >
                      <span>View Project Overview</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
