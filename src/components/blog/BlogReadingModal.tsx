"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  Loader2,
  AlertCircle,
  User,
  Mail,
  ChevronDown,
} from "lucide-react";

interface BlogReadingModalProps {
  articleTitle: string;
  articleSlug: string;
  category?: string;
}

const SERVICE_OPTIONS = [
  { value: "web-development", label: "Custom Web Application" },
  { value: "mobile-app", label: "Mobile App (iOS / Android)" },
  { value: "ai-solutions", label: "AI Automation & Agents" },
  { value: "ui-ux-design", label: "UI/UX & Product Design" },
  { value: "speed-seo-audit", label: "Performance & SEO Audit" },
  { value: "other", label: "General Project Consultation" },
];

export function BlogReadingModal({
  articleTitle,
  articleSlug,
  category,
}: BlogReadingModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasTriggered, setHasTriggered] = useState<boolean>(false);

  // Form Fields (Clean & Simple)
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>(() => {
    const cat = (category || "").toLowerCase();
    if (cat.includes("ai")) return "ai-solutions";
    if (cat.includes("ui") || cat.includes("design")) return "ui-ux-design";
    if (cat.includes("app") || cat.includes("mobile")) return "mobile-app";
    return "web-development";
  });
  const [honeypot, setHoneypot] = useState<string>("");
  const [formStartedAt, setFormStartedAt] = useState<number>(0);

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Dismiss & Close
  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("nexovio_blog_modal_dismissed", "true");
    } catch {
      // Ignore storage restrictions
    }
  }, []);

  // Keyboard accessibility: ESC key to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  // Scroll trigger (150px scroll threshold) & timer fallback
  useEffect(() => {
    try {
      if (
        sessionStorage.getItem("nexovio_blog_modal_dismissed") === "true" ||
        localStorage.getItem("nexovio_lead_submitted") === "true"
      ) {
        return;
      }
    } catch {
      // Ignore storage access errors
    }

    let timer: NodeJS.Timeout | null = null;

    // Fallback timer after 25s reading
    timer = setTimeout(() => {
      setHasTriggered((prev) => {
        if (!prev) {
          setIsOpen(true);
          setFormStartedAt(Date.now());
          return true;
        }
        return prev;
      });
    }, 25000);

    // Trigger when user scrolls 100px to 200px on the page (150px threshold)
    function handleScroll() {
      if (hasTriggered) return;

      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY >= 150) {
        setHasTriggered(true);
        setIsOpen(true);
        setFormStartedAt(Date.now());
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasTriggered]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please enter both your name and email.");
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedLabel =
        SERVICE_OPTIONS.find((s) => s.value === selectedService)?.label || selectedService;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          service: selectedService,
          message: `[Blog Reading Inquiry] Reader on "${articleTitle}" requested a free consultation for: ${selectedLabel}.`,
          sourcePage: `Blog Article: ${articleTitle} (/blog/${articleSlug})`,
          budget: "unspecified",
          website_url: honeypot, // Honeypot trap
          form_started_at: formStartedAt || Date.now() - 5000,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== false) {
        setIsSuccess(true);
        try {
          localStorage.setItem("nexovio_lead_submitted", "true");
        } catch {
          // Ignore
        }
      } else {
        setErrorMessage(
          data.message || "Unable to send your request. Please try again or contact us directly."
        );
      }
    } catch (err: any) {
      setErrorMessage(
        err?.message || "A network error occurred. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-brand-bright/30 bg-white dark:bg-[#071328] text-slate-900 dark:text-white shadow-[0_20px_50px_rgba(0,198,255,0.2)] overflow-hidden transition-all my-6 animate-in zoom-in-95 duration-200">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-electric/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Gradient Line */}
        <div className="h-1.5 w-full bg-gradient-brand" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer border border-slate-200 dark:border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-7 relative z-10">
          {isSuccess ? (
            /* ======================================================= */
            /* SIMPLE SUCCESS STATE                                    */
            /* ======================================================= */
            <div className="py-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-brand-bright">{name}</strong>. Our senior engineers will review your request and reply within <strong className="text-slate-900 dark:text-white">4 business hours</strong>.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <Link
                  href="/schedule-a-call"
                  onClick={handleClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-brand text-white shadow-glow hover:brightness-110 transition-all"
                >
                  <span>Book Exact 30-Min Time</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
                >
                  Continue Reading
                </button>
              </div>
            </div>
          ) : (
            /* ======================================================= */
            /* BETTER & SIMPLE LEAD FORM STATE                         */
            /* ======================================================= */
            <div className="space-y-5">
              {/* Header */}
              <div className="space-y-1.5 pr-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-bright/10 text-brand-bright border border-brand-bright/25">
                  <Sparkles className="w-3 h-3 text-brand-bright" />
                  <span>Free Technical Consultation</span>
                </div>

                <h3
                  id="blog-modal-title"
                  className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-snug"
                >
                  Planning a Web, Mobile or AI Project?
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Get a free 30-minute architecture review with our senior engineering team. No sales pressure, just actionable technical recommendations.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-brand-bright">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:border-brand-bright focus:outline-none focus:ring-1 focus:ring-brand-bright transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      Work Email <span className="text-brand-bright">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:border-brand-bright focus:outline-none focus:ring-1 focus:ring-brand-bright transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection Dropdown */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    What area are you exploring?
                  </label>
                  <div className="relative">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-[#0c1b33] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-brand-bright focus:outline-none focus:ring-1 focus:ring-brand-bright transition-all appearance-none cursor-pointer pr-9"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#0c1b33] text-slate-900 dark:text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit CTA */}
                <div className="pt-1 space-y-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-brand text-white shadow-glow hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Trust Signals */}
                  <div className="flex items-center justify-center gap-4 text-[10px] text-muted">
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      Strict NDA &amp; Zero Spam
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock3 className="w-3 h-3 text-brand-bright" />
                      Reply in 4 business hours
                    </span>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
