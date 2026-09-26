"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll, GSAPSection } from "@/components/ui/AnimateOnScroll";

export function FinalCtaSection() {
  return (
    <GSAPSection animation="scale-up">
      <section className="cta-section py-16 lg:py-20 section-blue relative overflow-hidden text-center border-t border-slate-200" id="contact">
        <div className="cta-orbit cta-orbit-one" />
        <div className="cta-orbit cta-orbit-two" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mx-auto">
            Let&apos;s make something useful
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to build <span className="bg-gradient-brand bg-clip-text text-transparent">something better?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            You do not need every technical answer. Bring the business goal, the customer problem, or the part of your current digital experience that is not working as well as it should.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
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
                className="group relative inline-flex items-center justify-center overflow-hidden outline-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none bg-surface-elevated text-foreground border border-border-subtle backdrop-blur-sm hover:border-brand-bright hover:text-brand-bright transition-all duration-200 shadow-sm text-base px-8 py-3.5 gap-3 rounded-xl font-medium"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </GSAPSection>
  );
}
