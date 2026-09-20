"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function SelectedWork() {
  const featured = CASE_STUDIES.slice(0, 3);

  return (
    <section className="section-blue pt-12 sm:pt-16 pb-6 sm:pb-8 relative" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan mb-3">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl">
              Digital Solutions Built Around{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Real Business Goals</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-2 max-w-3xl">
              <p className="font-semibold text-foreground/90">
                Every business has a different challenge.
              </p>
              <p className="text-sm sm:text-base">
                Some need a better website. Some need a faster digital experience. Others need custom technology that connects their teams, customers and operations.
              </p>
              <p className="text-xs sm:text-sm text-muted-light">
                Explore how we&apos;ve approached different digital challenges through strategy, design and development.
              </p>
            </div>
            <div className="pt-6">
              <Button
                href="/case-studies"
                variant="secondary"
                size="md"
                trackingName="selected_work_view_all"
                trackingLocation="selected_work"
                icon={<ArrowRight className="w-4 h-4" />}
                className="hover:border-brand-cyan/40"
              >
                View All Case Studies
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.15} duration={0.7}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((project, index) => (
              <Card
                key={project.slug}
                variant="scale"
                className="flex flex-col justify-between h-full bg-surface-elevated/70 p-6 sm:p-7 border-border-subtle group hover:border-brand-cyan/45"
              >
                <div>
                  {/* Visual Project Cover Image */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border-subtle group-hover:border-brand-cyan/35 mb-5 bg-[#050A14]">
                    <Image
                      src={project.coverImage}
                      alt={project.coverImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                      CASE STUDY 0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-brand-cyan font-mono font-bold uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg border bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-500/40 shadow-sm shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{project.results}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-brand-cyan transition-colors mb-1.5 leading-snug">
                    {project.client}
                  </h3>

                  <div className="text-xs font-semibold text-brand-bright mb-3">
                    {project.title}
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {project.strategy}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1.5 transition-colors group/link"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

