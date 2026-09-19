"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Cpu, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 sm:pt-36 pb-20 overflow-hidden bg-background">
      {/* Background Radial Glow & Futuristic Grid Lines */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle geometric grid background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Column (Copy & CTAs) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill Badge */}
            <AnimateOnScroll variant="fadeDown" duration={0.6} start="top 95%">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright" />
                <span>Digital Engineering &amp; Creative Studio</span>
              </div>
            </AnimateOnScroll>

            {/* H1 Headline */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.15} start="top 95%">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Digital Experiences Built to{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Move Your Business Forward.
                </span>
              </h1>
            </AnimateOnScroll>

            {/* Supporting Copy */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.3} start="top 95%">
              <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                Nexovio Digital Solutions combines strategy, design, development, and digital marketing to help businesses create better digital experiences and build a stronger online presence.
              </p>
            </AnimateOnScroll>

            {/* Action Buttons */}
            <AnimateOnScroll variant="fadeUp" duration={0.7} delay={0.45} start="top 95%">
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  trackingName="hero_start_project"
                  trackingLocation="hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow"
                >
                  Start Your Project
                </Button>

                <Button
                  href="/portfolio"
                  variant="secondary"
                  size="lg"
                  trackingName="hero_view_work"
                  trackingLocation="hero"
                  className="w-full sm:w-auto hover:border-brand-cyan/40"
                >
                  View Our Work
                </Button>
              </div>
            </AnimateOnScroll>

            {/* Trust Points */}
            <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.55} start="top 95%">
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Next.js Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Modern Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Core Web Vitals</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Hero Right Column (Rich Interactive Dashboard Showcase & Floating Badges) */}
          <AnimateOnScroll variant="scaleUp" duration={1} delay={0.3} start="top 95%" className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />

            {/* Top Floating Badge */}
            <div className="absolute -top-4 -left-4 sm:left-4 z-20 px-3.5 py-2 rounded-xl border border-white/15 bg-surface-elevated/90 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-left">
                <span className="text-[10px] text-muted uppercase tracking-wider block font-mono">
                  Performance Score
                </span>
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  100% Core Web Vitals
                </span>
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-4 z-20 px-3.5 py-2 rounded-xl border border-brand-cyan/30 bg-[#070E1C]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,198,255,0.25)] flex items-center gap-2.5 animate-float-slow">
              <div className="p-1.5 rounded-lg bg-brand-cyan/15 text-brand-cyan">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-brand-cyan uppercase tracking-wider block font-mono">
                  Edge Delivery
                </span>
                <span className="text-xs font-bold text-white">
                  0.08s Client Latency
                </span>
              </div>
            </div>

            {/* Main Interactive Dashboard Mockup Frame */}
            <div className="relative w-full rounded-2xl border border-brand-cyan/30 bg-surface-elevated/80 backdrop-blur-md p-2 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(23,105,255,0.2)] overflow-hidden group hover:border-brand-cyan/60 transition-all duration-500">
              <div className="relative w-full aspect-[16/10.5] rounded-xl overflow-hidden bg-[#070D18]">
                <Image
                  src="/images/hero/dashboard-preview.svg"
                  alt="Nexovio Digital Solutions Production Telemetry Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
