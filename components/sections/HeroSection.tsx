"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Cpu, Zap, CheckCircle2, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-32 sm:pt-36 pb-20 overflow-hidden bg-slate-950">
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/images/hero/dashboard-preview.svg"
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-tech-abstract-digital-background-34674-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-digital-network-lines-5378/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* 2. Video Overlay Layers for Contrast & Aesthetic Depth */}
        {/* Dark Vignette & Gradient Mesh */}
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />

        {/* Dynamic Ambient Glows */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-bright/20 rounded-full blur-[140px]" />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* 3. Floating Video Controls (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-slate-900/80 border border-white/10 backdrop-blur-md rounded-full px-3 py-1.5 shadow-2xl">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <div className="w-px h-4 bg-white/15" />
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          title={isMuted ? "Unmute Video" : "Mute Video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <span className="text-[10px] uppercase font-mono tracking-wider text-brand-cyan px-1">
          {isPlaying ? "LIVE BG" : "PAUSED"}
        </span>
      </div>

      {/* 4. Overlay Text & Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, CTAs, Trust Points */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill Badge */}
            <AnimateOnScroll variant="fadeDown" duration={0.6} start="top 95%">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/40 bg-slate-900/90 text-brand-cyan shadow-[0_0_25px_rgba(0,198,255,0.25)] backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright animate-pulse" />
                <span>Next-Gen Digital Engineering &amp; Creative Studio</span>
              </div>
            </AnimateOnScroll>

            {/* H1 Headline */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.15} start="top 95%">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Digital Experiences Built to{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,198,255,0.4)]">
                  Move Your Business Forward.
                </span>
              </h1>
            </AnimateOnScroll>

            {/* Supporting Copy */}
            <AnimateOnScroll variant="fadeUp" duration={0.8} delay={0.3} start="top 95%">
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl backdrop-blur-sm bg-slate-950/20 p-2 rounded-lg border border-white/5">
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
                  className="w-full sm:w-auto shadow-[0_0_30px_rgba(23,105,255,0.5)] border border-brand-bright/50"
                >
                  Start Your Project
                </Button>

                <Button
                  href="/portfolio"
                  variant="secondary"
                  size="lg"
                  trackingName="hero_view_work"
                  trackingLocation="hero"
                  className="w-full sm:w-auto hover:border-brand-cyan/50 backdrop-blur-md bg-slate-900/60"
                >
                  View Our Work
                </Button>
              </div>
            </AnimateOnScroll>

            {/* Trust Points */}
            <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.55} start="top 95%">
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
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

          {/* Right Column: Glass Showcase Frame & Dynamic Floating Badges */}
          <AnimateOnScroll variant="scaleUp" duration={1} delay={0.3} start="top 95%" className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-brand opacity-25 blur-3xl rounded-3xl -z-10" />

            {/* Top Floating Badge */}
            <div className="absolute -top-4 -left-4 sm:left-4 z-20 px-4 py-2.5 rounded-xl border border-white/20 bg-slate-900/90 backdrop-blur-xl shadow-2xl flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                  Performance Score
                </span>
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  100% Core Web Vitals
                </span>
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-4 z-20 px-4 py-2.5 rounded-xl border border-brand-cyan/40 bg-slate-900/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,198,255,0.3)] flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-brand-cyan/20 text-brand-cyan">
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

            {/* Main Interactive Dashboard Frame with Glass Blur */}
            <div className="relative w-full rounded-2xl border border-brand-cyan/40 bg-slate-900/70 backdrop-blur-xl p-2 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(23,105,255,0.25)] overflow-hidden group hover:border-brand-cyan/70 transition-all duration-500">
              <div className="relative w-full aspect-[16/10.5] rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src="/images/hero/dashboard-preview.svg"
                  alt="Nexovio Digital Solutions Production Telemetry Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
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

