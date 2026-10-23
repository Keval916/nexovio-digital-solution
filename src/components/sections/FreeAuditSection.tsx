"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Gauge,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Globe,
  Mail,
  Building,
  User,
  Zap,
} from "lucide-react";
import { trackFormSubmit } from "@/src/lib/analytics";

interface FreeAuditSectionProps {
  className?: string;
}

export function FreeAuditSection({ className = "" }: FreeAuditSectionProps) {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [formStartedAt] = useState(() => Date.now());

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!url.trim()) {
      setErrorMsg("Please enter your website URL.");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please provide a valid work email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Website Owner",
          email: email.trim(),
          company: company.trim() || "Not Specified",
          service: "free-website-audit",
          budget: "free-audit",
          message: `Free 5-Minute Technical & Core Web Vitals Audit Request for Website: ${formattedUrl}. Requested by: ${name.trim() || "Website Owner"} (${email.trim()}). Company: ${company.trim() || "Not Specified"}.`,
          website_url: honeypot,
          form_started_at: formStartedAt,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success !== false) {
        setIsSuccess(true);
        try {
          trackFormSubmit("free_website_audit", "free-website-audit");
        } catch { }
      } else {
        setErrorMsg(data.message || "Failed to submit audit request. Please try again or email info@nexoviodigitalsolutions.com.");
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="free-audit"
      aria-label="Free Website and Core Web Vitals Audit"
      className={`py-16 sm:py-24 relative overflow-hidden ${className}`}
    >
      {/* Background radial gradient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[550px] bg-radial-glow pointer-events-none opacity-40"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-brand-cyan/35 bg-gradient-to-br from-white/90 via-slate-50/80 to-white/95 dark:from-[#071328]/95 dark:via-[#050D1C]/95 dark:to-[#091B38]/95 shadow-[0_20px_60px_rgba(0,198,255,0.08)] backdrop-blur-xl">
          {/* Top highlight line */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-80"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Value Proposition & Teardown points */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-cyan" />
                <span>Zero Cost • 24-Hour Turnaround</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Get a Free 5-Minute Technical &amp;{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">
                    Core Web Vitals Audit
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Wondering why your website gets traffic but not enough qualified leads? Enter your website URL and work email. Our engineering team will run deep diagnostic traces and deliver an actionable architectural, speed, and conversion friction report directly to your inbox.
                </p>
              </div>

              {/* 4 Diagnostic Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.03]">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                    Sub-second LCP &amp; Core Web Vitals speed analysis
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.03]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                    Technical SEO crawlability, schema &amp; indexing check
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.03]">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                    Mobile user journey &amp; lead form drop-off friction
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.03]">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                    AI automation &amp; customer self-service viability
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2 text-xs text-muted font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Confidential</span>
                </span>
                <span>•</span>
                <span>Zero Sales Pressure</span>
                <span>•</span>
                <span>Real Engineering Review</span>
              </div>
            </div>

            {/* Right Column: Interactive Card Form */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl border border-brand-cyan/30 bg-white dark:bg-[#071022] shadow-xl relative">
                {isSuccess ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Audit Request Confirmed!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
                        Our engineering team is analyzing{" "}
                        <strong className="text-brand-cyan font-mono">{url}</strong>. You will receive your complete technical performance report at{" "}
                        <strong className="text-white font-mono">{email}</strong> within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setUrl("");
                        setEmail("");
                      }}
                      className="text-xs font-semibold text-brand-cyan hover:underline mt-2 inline-block cursor-pointer"
                    >
                      Audit another website →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold">
                        Fast 60-Second Request
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Where should we send your report?
                      </h3>
                    </div>

                    {errorMsg && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-medium">
                        {errorMsg}
                      </div>
                    )}

                    {/* Invisible Honeypot Trap */}
                    <div aria-hidden="true" style={{ display: "none" }}>
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    {/* Website URL (Required) */}
                    <div>
                      <label
                        htmlFor="audit-url"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Website URL <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="audit-url"
                          type="text"
                          required
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="https://yourcompany.com"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-xs sm:text-sm text-foreground focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                        />
                      </div>
                    </div>

                    {/* Work Email (Required) */}
                    <div>
                      <label
                        htmlFor="audit-email"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="audit-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@yourcompany.com"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-xs sm:text-sm text-foreground focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                        />
                      </div>
                    </div>

                    {/* Name & Company (Optional in 2 columns) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="audit-name"
                          className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1"
                        >
                          Your Name (Optional)
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            id="audit-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Alex Brooks"
                            className="w-full pl-8 pr-2.5 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-xs text-foreground focus:outline-hidden focus:border-brand-cyan"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="audit-company"
                          className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1"
                        >
                          Company (Optional)
                        </label>
                        <div className="relative">
                          <Building className="w-3.5 h-3.5 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            id="audit-company"
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Company Name"
                            className="w-full pl-8 pr-2.5 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-xs text-foreground focus:outline-hidden focus:border-brand-cyan"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-5 rounded-xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-cyan-500/25 hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Queuing Technical Audit...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Free Technical Audit</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[10px] text-center text-muted font-mono">
                      No credit card required. Free report sent in 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
