"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function FinalCtaSection() {
  return (
    <section className="section-blue py-8 sm:py-12 relative overflow-hidden">
      {/* Background glow motifs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-64 bg-radial-glow pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll variant="scaleUp" duration={0.7}>
          <div className="relative rounded-2xl border border-brand-cyan/40 bg-gradient-to-r from-[#010e24] via-[#031c3d] to-[#010e24] p-6 sm:p-10 text-center shadow-[0_20px_50px_rgba(0,198,255,0.15)] overflow-hidden">
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand pointer-events-none" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-electric/20 rounded-full blur-3xl pointer-events-none" />

            {/* Pill Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-brand-cyan/50 bg-brand-cyan/20 text-brand-cyan keep-cyan shadow-sm mb-4">
              READY TO BUILD SOMETHING BETTER?
            </span>

            {/* Title - Bright Crisp White in All Themes */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight keep-white text-white leading-tight max-w-4xl mx-auto">
              Have an Idea{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Worth Building?</span>
            </h2>

            {/* Description Text - Luminous High Contrast Silver/White */}
            <div className="mt-3 text-sm sm:text-base text-slate-200 keep-slate max-w-3xl mx-auto leading-relaxed space-y-2">
              <p className="font-semibold text-white keep-white">
                Whether you have a site that’s overdue for a makeover, a new product concept, or a digital dilemma you’re eager to solve, let’s talk.
              </p>
              <p className="text-slate-300 keep-slate text-xs sm:text-sm">
                Just tell us what you are trying to achieve. We will make you know the possible solution, technology and how to proceed.</p>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button
                href="https://calendly.com/nexoviodigitalsolutions-info"
                variant="primary"
                size="lg"
                trackingName="final_cta_schedule_call"
                trackingLocation="final_cta"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-glow"
              >
                Schedule a Call
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                trackingName="final_cta_talk_team"
                trackingLocation="final_cta"
                icon={<MessageSquare className="w-4 h-4" />}
                className="w-full sm:w-auto bg-[#082a57] text-white keep-white border-blue-400/30 hover:bg-[#0a356e]"
              >
                Get in Touch
              </Button>
            </div>

            {/* Supporting Text Footer Line */}
            <div className="mt-6 pt-4 border-t border-blue-800/40 text-xs font-medium text-slate-300 keep-slate">
              No complicated process. Just a conversation about what you&apos;re building.
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
