"use client";

import React from "react";
import { MessageSquareQuote, ShieldAlert } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 bg-background relative border-t border-b border-border-subtle/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge="Authentic Reviews Architecture"
            title="Client Testimonials &"
            highlightText="Partner Feedback"
            description="In alignment with Nexovio's transparent business standards, we do not fabricate fake customer reviews or artificial ratings. Verified client testimonials will appear here as ongoing production feedback cycles conclude."
            align="center"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.12} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="group relative rounded-2xl border border-dashed border-border-subtle bg-surface-elevated/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1.5 hover:border-brand-cyan/45 hover:bg-surface-elevated hover:shadow-[0_20px_45px_-12px_rgba(23,105,255,0.18)] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <MessageSquareQuote className="w-6 h-6 text-brand-cyan/60 group-hover:text-brand-cyan group-hover:scale-110 transition-all duration-300" />
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold">
                      Slot #{num}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted italic leading-relaxed">
                    &ldquo;Verified client review placeholder: Project feedback regarding engineering quality, communication velocity, and delivery results will be published following direct client consent.&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-border-subtle flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xs font-bold text-brand-cyan group-hover:scale-105 transition-transform">
                    CL
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-brand-cyan transition-colors">
                      Client Review Slot
                    </div>
                    <div className="text-[10px] text-muted">
                      Verified Engagement
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" duration={0.5} delay={0.2}>
          <div className="mt-8 max-w-xl mx-auto p-3.5 rounded-lg border border-border-subtle bg-surface-elevated/50 flex items-center justify-center gap-2 text-xs text-muted text-center">
            <ShieldAlert className="w-4 h-4 text-brand-bright shrink-0" />
            <span>Real feedback builds real trust. We never publish manufactured testimonials.</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
