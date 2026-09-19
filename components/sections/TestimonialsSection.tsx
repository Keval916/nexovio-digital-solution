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
                className="rounded-xl border border-dashed border-border-subtle bg-surface/40 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <MessageSquareQuote className="w-6 h-6 text-brand-cyan/60" />
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-muted">
                      Slot #{num}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted italic leading-relaxed">
                    &ldquo;Verified client review placeholder: Project feedback regarding engineering quality, communication velocity, and delivery results will be published following direct client consent.&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-muted">
                    CL
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
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
