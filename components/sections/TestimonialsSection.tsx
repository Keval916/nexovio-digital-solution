"use client";

import React from "react";
import { MessageSquareQuote, ShieldCheck, CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function TestimonialsSection() {
  return (
    <section className="section-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              CLIENT EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold tracking-tight leading-tight">
              What Working Together{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Looks Like</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-foreground">
                We believe successful projects come from more than good code or attractive design.
              </p>
              <p className="text-sm sm:text-base">
                They come from communication, collaboration and a clear understanding of what the business needs.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="staggerChildren" stagger={0.12} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-brand-cyan/45 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <MessageSquareQuote className="w-6 h-6 text-brand-cyan" />
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold">
                    Ecommerce Platform
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  &ldquo;Nexovio handled our headless e-commerce migration seamlessly without missing a beat. Their custom integration team synchronized our inventory and boosted overall conversion.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-border-subtle flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xs font-bold text-brand-cyan">
                  PC
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Parts Connexion Team</div>
                  <div className="text-[10px] text-muted">Headless E-Commerce Migration</div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-brand-cyan/45 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <MessageSquareQuote className="w-6 h-6 text-brand-cyan" />
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold">
                    AI &amp; Workflows
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  &ldquo;The custom AI automation Nexovio engineered turned a complex multi-step user registration into an effortless intake flow. Our registrations increased by 25%.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-border-subtle flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xs font-bold text-brand-cyan">
                  II
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Inside Injury Team</div>
                  <div className="text-[10px] text-muted">Custom AI Automation Build</div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-brand-cyan/45 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <MessageSquareQuote className="w-6 h-6 text-brand-cyan" />
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-semibold">
                    Digital Booking
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  &ldquo;Our HVAC digital booking system is lightning fast and boasts 99.9% uptime. Customer booking calls convert smoothly into confirmed schedule dispatches.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-border-subtle flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xs font-bold text-brand-cyan">
                  IH
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Infiniti Home Comfort</div>
                  <div className="text-[10px] text-muted">HVAC Booking Platform</div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

