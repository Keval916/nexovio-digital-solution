"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Layers,
  Palette,
  MousePointerClick,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Sliders,
  Code2,
  Copy,
  Check,
  Eye,
  Smartphone,
  Monitor,
  ArrowRight,
  RefreshCw,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TABS = [
  { id: "tokens", label: "Design Tokens", icon: Palette, badge: "Figma Variables" },
  { id: "components", label: "Component States", icon: MousePointerClick, badge: "Auto-Layout" },
  { id: "flows", label: "User Flow Simulator", icon: GitBranch, badge: "Frictionless IA" },
  { id: "wcag", label: "WCAG 2.1 AA Lab", icon: ShieldCheck, badge: "Accessibility" },
];

const COLOR_TOKENS = [
  { name: "--brand-cyan", hex: "#00D9F1", role: "Primary Interactive & Accent", category: "Brand Core", contrast: "11.2:1 (AAA)" },
  { name: "--brand-electric", hex: "#0072FF", role: "Secondary Brand & Active", category: "Brand Core", contrast: "7.8:1 (AAA)" },
  { name: "--surface-card", hex: "#0B1528", role: "Elevated Card Container", category: "Surface UI", contrast: "Dark Theme" },
  { name: "--text-headline", hex: "#FFFFFF", role: "Primary Pure White Heading", category: "Typography", contrast: "17.4:1 (AAA)" },
  { name: "--text-muted", hex: "#94A3B8", role: "Secondary Labels & Captions", category: "Typography", contrast: "6.2:1 (AA)" },
  { name: "--accent-emerald", hex: "#10B981", role: "Success States & KPIs", category: "Feedback", contrast: "8.4:1 (AAA)" },
];

const BUTTON_STATES = [
  { id: "default", label: "Default Idle", bgClass: "bg-gradient-brand text-slate-950 font-bold", desc: "Base idle state with standard 1px border" },
  { id: "hover", label: "Hover State", bgClass: "bg-brand-cyan text-slate-950 font-extrabold shadow-[0_0_24px_rgba(0,217,241,0.55)] scale-105", desc: "Luminous cyan bloom with micro-scale feedback" },
  { id: "active", label: "Active Pressed", bgClass: "bg-blue-600 text-white scale-95 shadow-inner", desc: "Compressed state providing haptic tactile feedback" },
  { id: "focus", label: "Keyboard Focus", bgClass: "bg-gradient-brand text-slate-950 ring-4 ring-brand-cyan/70 ring-offset-2 ring-offset-slate-950", desc: "WCAG 2.1 AA visible 3px outline for keyboard tab navigation" },
  { id: "disabled", label: "Disabled State", bgClass: "bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed opacity-60", desc: "Clear non-clickable styling preventing deceptive interactions" },
];

const FLOW_STEPS = [
  {
    step: "01",
    title: "Global Search & Intent Filter",
    screenName: "Omnisearch Modal",
    dropoff: "< 1.2% Drop-off",
    metric: "80ms Resolution",
    detail: "Instant faceted autocomplete with keyboard shortcuts (Cmd+K) and predictive query caching.",
    uiType: "search",
  },
  {
    step: "02",
    title: "Faceted Catalog Drilldown",
    screenName: "Category Navigation",
    dropoff: "Zero Zero-Results",
    metric: "Instant Refinement",
    detail: "Multi-select pill tags, price range sliders, and real-time live inventory availability.",
    uiType: "filter",
  },
  {
    step: "03",
    title: "Quick-View Slideover Drawer",
    screenName: "Product Context Drawer",
    dropoff: "88% Add-to-Cart Rate",
    metric: "No Context Loss",
    detail: "Non-disruptive drawer that keeps the user's scroll position and filters completely intact.",
    uiType: "drawer",
  },
  {
    step: "04",
    title: "Two-Step Frictionless Checkout",
    screenName: "Checkout Funnel",
    dropoff: "32% Abandonment (Down from 68%)",
    metric: "92% Conversion Lift",
    detail: "Pre-validated address autocomplete, one-click payment passkeys, and instantaneous receipt generation.",
    uiType: "checkout",
  },
];

export function UiUxInteractiveShowcase() {
  const [activeTab, setActiveTab] = useState("tokens");
  const [selectedToken, setSelectedToken] = useState(COLOR_TOKENS[0]);
  const [activeButtonState, setActiveButtonState] = useState(BUTTON_STATES[0]);
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-canvas-anim",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div ref={containerRef} className="my-12 sm:my-16">
      {/* Outer Cohesive Card - Works Beautifully in Light & Dark Mode */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-6 sm:p-10 shadow-xl relative overflow-hidden backdrop-blur-md gsap-canvas-anim">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-electric/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200/90 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive UI/UX Architecture Canvas</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore Our Live <span className="bg-gradient-brand bg-clip-text text-transparent">Design System Canvas</span>
            </h3>
            <p className="text-sm text-muted mt-1 max-w-xl leading-relaxed">
              Experience how Nexovio structures design tokens, component interaction states, user journey flows, and accessibility benchmarks for production engineering.
            </p>
          </div>

          {/* User-Friendly Segmented Tab Bar */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#050B18] border border-slate-200 dark:border-white/10">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-brand text-slate-950 font-bold shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================ */}
        {/* TAB 1: DESIGN TOKENS EXPLORER                                     */}
        {/* ================================================================ */}
        {activeTab === "tokens" && (
          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            {/* Left Swatches Grid */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold">
                  Semantic Design Tokens (Click to Preview)
                </span>
                <span className="text-xs font-mono text-muted">Auto-sync with Tailwind &amp; CSS Variables</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COLOR_TOKENS.map((token) => {
                  const isSelected = selectedToken.name === token.name;
                  return (
                    <button
                      key={token.name}
                      type="button"
                      onClick={() => setSelectedToken(token)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex items-center gap-3.5 cursor-pointer ${
                        isSelected
                          ? "bg-brand-cyan/10 border-brand-cyan shadow-sm ring-1 ring-brand-cyan/40"
                          : "bg-slate-50 dark:bg-[#070F22] border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/40 hover:bg-slate-100 dark:hover:bg-[#0a162e]"
                      }`}
                    >
                      <div
                        className="w-11 h-11 rounded-xl shrink-0 shadow-sm border border-slate-200 dark:border-white/20"
                        style={{ backgroundColor: token.hex }}
                      />
                      <div className="overflow-hidden">
                        <div className="text-xs font-mono font-bold text-slate-900 dark:text-white truncate">
                          {token.name}
                        </div>
                        <div className="text-[11px] font-mono font-semibold text-brand-cyan">
                          {token.hex}
                        </div>
                        <div className="text-[10px] text-muted truncate">
                          {token.role}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Live Token Inspector Box */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#050B18] p-6 space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-brand-cyan font-bold">
                  Token Inspector &amp; Contrast
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  {selectedToken.contrast}
                </span>
              </div>

              {/* Dynamic Live Preview Card */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071328] space-y-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg shadow-sm border border-black/10"
                    style={{ backgroundColor: selectedToken.hex }}
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                      {selectedToken.name}
                    </div>
                    <div className="text-[11px] text-muted">{selectedToken.category} · {selectedToken.role}</div>
                  </div>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-xl bg-slate-900 dark:bg-black/70 border border-slate-800 dark:border-white/10 p-3.5 relative font-mono text-xs text-slate-300">
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(`/* Figma Token */\n${selectedToken.name}: ${selectedToken.hex};`)
                  }
                  className="absolute top-2.5 right-2.5 p-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
                  title="Copy token code"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <div className="text-slate-500 text-[11px]">// Exported CSS Variable</div>
                <div className="text-brand-cyan mt-1">
                  {selectedToken.name}: <span className="text-emerald-400 font-bold">{selectedToken.hex}</span>;
                </div>
                <div className="text-slate-400 text-[11px] mt-1">
                  category: &quot;{selectedToken.category}&quot;;
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB 2: COMPONENT STATE MACHINE PLAYGROUND                          */}
        {/* ================================================================ */}
        {activeTab === "components" && (
          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            {/* Left State Selection */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold">
                Interactive State Machine (Click to Test)
              </div>
              <div className="space-y-2.5">
                {BUTTON_STATES.map((state) => {
                  const isSelected = activeButtonState.id === state.id;
                  return (
                    <button
                      key={state.id}
                      type="button"
                      onClick={() => setActiveButtonState(state)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-brand-cyan/10 border-brand-cyan shadow-sm ring-1 ring-brand-cyan/40"
                          : "bg-slate-50 dark:bg-[#070F22] border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/40 hover:bg-slate-100 dark:hover:bg-[#0a162e]"
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{state.label}</div>
                        <div className="text-xs text-muted mt-0.5">{state.desc}</div>
                      </div>
                      <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-brand-cyan animate-pulse" : "bg-slate-300 dark:bg-white/20"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Live Component Sandbox */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#050B18] p-8 flex flex-col items-center justify-center text-center space-y-6 min-h-[300px] shadow-sm">
              <div className="text-xs font-mono uppercase text-muted tracking-wider">
                Live Auto-Layout Preview
              </div>

              {/* Dynamic Component Preview */}
              <div className="py-6 flex items-center justify-center">
                <button
                  type="button"
                  className={`px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeButtonState.bgClass}`}
                >
                  Interactive Component Preview
                </button>
              </div>

              <div className="w-full pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-muted flex flex-wrap items-center justify-around gap-2">
                <span>auto-layout: <strong className="text-brand-cyan">14px 32px</strong></span>
                <span>radius: <strong className="text-brand-cyan">9999px</strong></span>
                <span>elevation: <strong className="text-brand-cyan">glow-cyan</strong></span>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB 3: USER FLOW SIMULATOR                                         */}
        {/* ================================================================ */}
        {activeTab === "flows" && (
          <div className="pt-8 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold">
                Conversion-Optimized Journey Stepper (Click a Step)
              </span>
              <span className="text-xs font-mono text-muted">Audited Friction Reduction</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FLOW_STEPS.map((item, idx) => {
                const isActive = activeFlowIndex === idx;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveFlowIndex(idx)}
                    className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? "bg-brand-cyan/10 border-brand-cyan shadow-md ring-1 ring-brand-cyan/40"
                        : "bg-slate-50 dark:bg-[#070F22] border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/40 hover:bg-slate-100 dark:hover:bg-[#0a162e]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-brand-cyan">
                          STEP {item.step}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                          {item.dropoff}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-2">
                        {item.title}
                      </div>
                      <div className="text-xs text-muted leading-relaxed">
                        {item.detail}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 text-[11px] font-mono text-brand-cyan font-medium">
                      Metric: {item.metric}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB 4: WCAG 2.1 AA AUDIT LAB                                      */}
        {/* ================================================================ */}
        {activeTab === "wcag" && (
          <div className="pt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
            <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#070F22] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-bold font-mono">
                4.5:1
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white">Normal Text Contrast</div>
              <p className="text-xs text-muted leading-relaxed">
                All body paragraphs and metadata exceed the 4.5:1 minimum ratio against background tokens, tested across calibrated OLED and LCD displays.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>WCAG Level AA Verified</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#070F22] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-500 dark:text-purple-400 font-bold font-mono">
                3.0:1
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white">UI Components &amp; Icons</div>
              <p className="text-xs text-muted leading-relaxed">
                Form inputs, checkboxes, toggles, and icon buttons adhere to the 3:1 graphical boundary contrast rule so users with low vision navigate easily.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Visual Ambiguity</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#070F22] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                Tab
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white">Visible Focus Indicators</div>
              <p className="text-xs text-muted leading-relaxed">
                Every interactive element features an explicit 2px to 3px cyan focus ring for keyboard navigation, ensuring 100% mouse-free operability.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Keyboard Nav Tested</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Metrics Bar matching other pages */}
        <div className="mt-10 pt-8 border-t border-slate-200/90 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-xs font-mono text-slate-700 dark:text-slate-300 mt-0.5">WCAG 2.1 AA Pass</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              40%
            </div>
            <div className="text-xs font-mono text-slate-700 dark:text-slate-300 mt-0.5">Faster Dev Handoff</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyan">
              8x
            </div>
            <div className="text-xs font-mono text-slate-700 dark:text-slate-300 mt-0.5">Component Token Reuse</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-500 dark:text-indigo-400">
              Zero
            </div>
            <div className="text-xs font-mono text-slate-700 dark:text-slate-300 mt-0.5">Guesswork Defects</div>
          </div>
        </div>
      </div>
    </div>
  );
}
