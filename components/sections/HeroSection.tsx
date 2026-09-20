"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Cpu, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function HeroSection() {
  return (
    <section className="section-white relative min-h-[85vh] flex items-center justify-center pt-24 sm:pt-28 pb-6 sm:pb-8 overflow-hidden">
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
                <span>DIGITAL SOLUTIONS FOR MODERN BUSINESSES</span>
              </div>
            </AnimateOnScroll>

            {/* H1 Headline */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.15} start="top 95%">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Digital Experiences That{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Drive Your Business Forward.
                </span>
              </h1>
            </AnimateOnScroll>

            {/* Supporting Copy */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.3} start="top 95%">
              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                <p className="font-medium text-foreground">
                  We create, build and scale digital experiences that enable businesses to transform concepts into real outcomes.
                </p>
                <p>
                  From high converting websites, custom web applications and mobile apps to UI/UX design and SEO focused digital marketing, Nexovio empowers companies to establish a more powerful digital presence and provide their customers with superior experiences.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Action Buttons */}
            <AnimateOnScroll variant="fadeUp" duration={0.7} delay={0.45} start="top 95%">
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="https://calendly.com/nexoviodigitalsolutions-info"
                  variant="primary"
                  size="lg"
                  trackingName="hero_schedule_call"
                  trackingLocation="hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow"
                >
                  Schedule a Call
                </Button>

                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  trackingName="hero_explore_services"
                  trackingLocation="hero"
                  className="w-full sm:w-auto hover:border-brand-cyan/40"
                >
                  Explore Our Services
                </Button>
              </div>
            </AnimateOnScroll>

            {/* Supporting Text Bar */}
            <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.55} start="top 95%">
              <div className="pt-6 border-t border-white/10 text-xs font-semibold text-muted tracking-wide flex flex-wrap items-center gap-2">
                <span>Web Development</span>
                <span className="text-brand-cyan">•</span>
                <span>UI/UX Design</span>
                <span className="text-brand-cyan">•</span>
                <span>Mobile Apps</span>
                <span className="text-brand-cyan">•</span>
                <span>SEO</span>
                <span className="text-brand-cyan">•</span>
                <span>Digital Marketing</span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Hero Right Column (Rich Interactive Dashboard Showcase & Floating Badges) */}
          <AnimateOnScroll variant="scaleUp" duration={1} delay={0.3} start="top 95%" className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />

            {/* Top Floating Badge */}
            <div className="absolute -top-4 -left-4 sm:left-4 z-20 px-3.5 py-2 rounded-xl border border-white/20 keep-border bg-[#070E1C] keep-dark backdrop-blur-xl shadow-2xl flex items-center gap-2.5 animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block font-mono" style={{ color: "#94a3b8" }}>
                  Performance Score
                </span>
                <span className="text-xs font-bold flex items-center gap-1" style={{ color: "#ffffff" }}>
                  100% Core Web Vitals
                </span>
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-4 z-20 px-3.5 py-2 rounded-xl border border-brand-cyan/40 keep-border bg-[#070E1C] keep-dark backdrop-blur-xl shadow-[0_10px_30px_rgba(0,198,255,0.25)] flex items-center gap-2.5 animate-float-slow">
              <div className="p-1.5 rounded-lg bg-brand-cyan/15 text-brand-cyan">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block font-mono" style={{ color: "#00c6ff" }}>
                  Edge Delivery
                </span>
                <span className="text-xs font-bold" style={{ color: "#ffffff" }}>
                  0.08s Client Latency
                </span>
              </div>
            </div>

            {/* Main Interactive Image Frame (1:1 Aspect Ratio) */}
            <div className="relative w-full max-w-lg mx-auto rounded-2xl border border-brand-cyan/30 bg-surface-elevated/80 backdrop-blur-md p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(23,105,255,0.2)] overflow-hidden group hover:border-brand-cyan/60 transition-all duration-500">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#070D18]">
                <Image
                  src="/images/hero/digital-experience-web-development-team.webp"
                  alt="Nexovio Digital Experience Web Development Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  priority
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/50 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
