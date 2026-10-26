"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Globe,
  Mail,
  Target,
  ArrowRight,
  TrendingUp,
  Search,
  Zap,
  ShieldCheck,
  Check,
} from "lucide-react";
import { trackEvent, trackFormSubmit } from "@/src/lib/analytics";

// Storage Keys
const DISMISSED_SESSION_KEY = "nexovio_growth_modal_dismissed";
const SUBMITTED_KEY = "nexovio_growth_modal_submitted_until";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

interface OfferConfig {
  offerKey: string;
  eyebrow: string;
  headline: string;
  description: string;
  ctaText: string;
  benefits: string[];
}

const DEFAULT_OFFER: OfferConfig = {
  offerKey: "growth-review",
  eyebrow: "FREE WEBSITE GROWTH REVIEW",
  headline: "Is Your Website Turning Visitors Into Clients?",
  description:
    "Your website should do more than look good. Discover opportunities to improve your website's user experience, organic visibility, performance and lead generation.",
  ctaText: "Request My Website Review",
  benefits: [
    "Identify potential UX and conversion issues.",
    "Discover SEO and website performance improvements.",
    "Get recommendations tailored to your business goals.",
  ],
};

const PAGE_OFFERS: Record<string, OfferConfig> = {
  "/": DEFAULT_OFFER,
  "/services/web-development": {
    offerKey: "web-dev-review",
    eyebrow: "WEBSITE IMPROVEMENT REVIEW",
    headline: "Is Your Code & Architecture Ready to Scale?",
    description:
      "Modern websites need speed, scalability, and clean code. Discover how performance upgrades and modern web architecture can strengthen your digital foundation.",
    ctaText: "Request Website Improvement Review",
    benefits: [
      "Identify speed bottlenecks and Core Web Vitals issues.",
      "Evaluate tech stack scalability and architecture.",
      "Get actionable code & performance recommendations.",
    ],
  },
  "/services/web-design": {
    offerKey: "web-design-review",
    eyebrow: "WEBSITE REDESIGN REVIEW",
    headline: "Ready for a Design That Drives Real Business?",
    description:
      "Outdated layouts and unclear customer journeys quietly cost you sales. Discover how a modern redesign can elevate your brand and convert more traffic.",
    ctaText: "Request Website Redesign Review",
    benefits: [
      "Spot visual friction and outdated design elements.",
      "Improve responsive layout and mobile user journey.",
      "Receive design recommendations tailored to your industry.",
    ],
  },
  "/services/ui-ux-design": {
    offerKey: "ui-ux-review",
    eyebrow: "UX AND CONVERSION REVIEW",
    headline: "Where Are Users Dropping Off in Your Funnel?",
    description:
      "Turn clicks into conversions. Discover usability hurdles, interface friction, and high-impact design changes to lift user retention.",
    ctaText: "Request UX & Conversion Review",
    benefits: [
      "Identify friction in your inquiry and lead funnels.",
      "Evaluate clarity of layout and call-to-actions.",
      "Get UX recommendations aligned with user expectations.",
    ],
  },
  "/services/seo-digital-marketing": {
    offerKey: "seo-review",
    eyebrow: "SEO OPPORTUNITY REVIEW",
    headline: "Missing High-Intent Organic Search Traffic?",
    description:
      "Rank for keywords your buyers actually search for. Uncover technical SEO issues, indexing hurdles, and on-page ranking opportunities holding back your reach.",
    ctaText: "Request SEO Opportunity Review",
    benefits: [
      "Discover missed search ranking opportunities.",
      "Spot technical indexing and Core Web Vitals roadblocks.",
      "Get a clear roadmap for sustainable organic visibility.",
    ],
  },
};

const GOAL_OPTIONS = [
  "Get more organic traffic",
  "Generate more qualified leads",
  "Redesign my existing website",
  "Improve website performance or user experience",
  "Explore AI solutions",
  "Other",
];

export function LeadCaptureScrollModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  // Form State
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState("Generate more qualified leads");
  const [honeypot, setHoneypot] = useState(""); // Bot honeypot

  // Validation & UI State
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formStartedAt, setFormStartedAt] = useState<number | null>(null);

  // Trigger State
  const hasTriggeredRef = useRef(false);
  const triggerSourceRef = useRef<"scroll_150px" | "timer_25s">("scroll_150px");

  // Determine current offer configuration
  const currentOffer: OfferConfig = PAGE_OFFERS[pathname || "/"] || DEFAULT_OFFER;

  // Route exclusions
  const isExcludedRoute =
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/blog/") ||
    pathname === "/contact" ||
    pathname === "/schedule-a-call" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-and-conditions";

  // Safe dismiss handler
  const dismissModal = useCallback(
    (method: "close_button" | "esc_key" | "backdrop") => {
      setIsOpen(false);
      trackEvent("lead_modal_dismiss", {
        page_path: pathname,
        offer_type: currentOffer.offerKey,
        dismiss_method: method,
      });

      // Suppress dismissal for current session so it doesn't repeatedly harass the user
      try {
        sessionStorage.setItem(DISMISSED_SESSION_KEY, "true");
      } catch {}

      setTimeout(() => {
        setIsRendered(false);
      }, 300);
    },
    [pathname, currentOffer.offerKey]
  );

  // Trigger modal display
  const triggerModal = useCallback(
    (source: "scroll_150px" | "timer_25s") => {
      if (hasTriggeredRef.current) return;

      hasTriggeredRef.current = true;
      triggerSourceRef.current = source;

      setIsRendered(true);
      setFormStartedAt(Date.now());

      requestAnimationFrame(() => {
        setIsOpen(true);
        trackEvent("lead_modal_view", {
          page_path: pathname,
          offer_type: currentOffer.offerKey,
          trigger_source: source,
        });
      });
    },
    [pathname, currentOffer.offerKey]
  );

  // Set up 150px scroll trigger and 25s fallback timer
  useEffect(() => {
    if (isExcludedRoute || hasTriggeredRef.current) return;

    // Check suppression limits: don't show if already submitted or dismissed in this session
    try {
      // Clear legacy permanent blocking keys if present in browser
      localStorage.removeItem("nexovio_growth_modal_shown");
      localStorage.removeItem("nexovio_growth_modal_dismissed_until");

      if (sessionStorage.getItem(DISMISSED_SESSION_KEY) === "true") {
        return;
      }

      const submittedUntil = localStorage.getItem(SUBMITTED_KEY);
      if (submittedUntil && Date.now() < parseInt(submittedUntil, 10)) {
        return;
      }

      if (localStorage.getItem("nexovio_lead_submitted") === "true") {
        return;
      }
    } catch {}

    // 1. Fallback 25-Second Active Timer Trigger
    const timer = setTimeout(() => {
      if (!hasTriggeredRef.current) {
        triggerModal("timer_25s");
      }
    }, 25000);

    // 2. 150px Scroll Trigger: Directly open modal once user scrolls past 150px
    const handleScroll = () => {
      if (hasTriggeredRef.current) return;

      const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollY >= 150) {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
        triggerModal("scroll_150px");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position immediately (e.g. reload or anchor link)
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExcludedRoute, triggerModal]);

  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismissModal("esc_key");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, dismissModal]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Track first interaction with form
  const handleFieldFocus = () => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackEvent("lead_form_start", {
        page_path: pathname,
        offer_type: currentOffer.offerKey,
      });
    }
  };

  // Clean URL helper
  const cleanUrl = (input: string) => {
    let trimmed = input.trim();
    if (!trimmed) return "";
    if (!/^https?:\/\//i.test(trimmed)) {
      trimmed = `https://${trimmed}`;
    }
    return trimmed;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Track CTA click (distinct from success)
    trackEvent("lead_modal_cta_click", {
      page_path: pathname,
      offer_type: currentOffer.offerKey,
      primary_goal: primaryGoal,
    });

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    // 1. Validation: Website URL
    const cleanedWebsite = cleanUrl(website);
    const domainPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    if (!website.trim() || !domainPattern.test(cleanedWebsite)) {
      setIsSubmitting(false);
      setStatus("error");
      const err = "Please enter a valid website address (e.g. yourcompany.com).";
      setErrorMessage(err);
      trackEvent("lead_form_submit_error", {
        page_path: pathname,
        offer_type: currentOffer.offerKey,
        error_type: "invalid_website",
      });
      return;
    }

    // 2. Validation: Work Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setIsSubmitting(false);
      setStatus("error");
      const err = "Please enter a valid work email address.";
      setErrorMessage(err);
      trackEvent("lead_form_submit_error", {
        page_path: pathname,
        offer_type: currentOffer.offerKey,
        error_type: "invalid_email",
      });
      return;
    }

    // 3. Validation: Primary Goal
    if (!primaryGoal) {
      setIsSubmitting(false);
      setStatus("error");
      const err = "Please select your primary website goal.";
      setErrorMessage(err);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: "website-growth-review",
          sourcePage: "website-growth-review-modal",
          website: cleanedWebsite,
          email: email.trim(),
          primaryGoal,
          bot_trap: honeypot, // Honeypot field
          form_started_at: formStartedAt || Date.now() - 2500,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== false) {
        setStatus("success");

        // Track verified success (without PII)
        trackEvent("lead_form_submit_success", {
          page_path: pathname,
          offer_type: currentOffer.offerKey,
          primary_goal: primaryGoal,
        });
        trackFormSubmit("lead_capture_scroll_modal", currentOffer.offerKey);

        // Suppress for 30 days & mark as submitted
        try {
          localStorage.setItem(SUBMITTED_KEY, (Date.now() + THIRTY_DAYS_MS).toString());
          localStorage.setItem("nexovio_lead_submitted", "true");
        } catch {}
      } else {
        setStatus("error");
        const msg = data.message || "Unable to send your request. Please try again or email us directly.";
        setErrorMessage(msg);
        trackEvent("lead_form_submit_error", {
          page_path: pathname,
          offer_type: currentOffer.offerKey,
          error_type: "server_rejection",
        });
      }
    } catch {
      setStatus("error");
      const netErr = "A network error occurred. Please check your connection and try again.";
      setErrorMessage(netErr);
      trackEvent("lead_form_submit_error", {
        page_path: pathname,
        offer_type: currentOffer.offerKey,
        error_type: "network_failure",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isRendered) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="growth-modal-title"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={() => dismissModal("backdrop")}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#070F22] border border-slate-200/90 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 motion-reduce:transition-none ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-3"
        }`}
      >
        {/* Subtle Top Brand Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-electric via-brand-cyan to-amber-400" />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => dismissModal("close_button")}
          aria-label="Close review offer"
          className="absolute top-4 right-4 z-20 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container for All Devices */}
        <div className="overflow-y-auto max-h-[calc(92vh-10px)] p-6 sm:p-8 lg:p-10">
          {status === "success" ? (
            /* ========================================================== */
            /* SUCCESS CONFIRMATION STATE                                 */
            /* ========================================================== */
            <div className="text-center py-8 sm:py-12 space-y-5 max-w-lg mx-auto">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Website Review Request Received!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thank you! Our technical and digital strategy team will evaluate{" "}
                  <span className="font-semibold text-brand-electric dark:text-brand-cyan">
                    {website}
                  </span>{" "}
                  and email tailored recommendations to{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {email}
                  </span>
                  .
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400 text-left space-y-2">
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  What our team evaluates in your review:
                </p>
                <ul className="space-y-1.5 pl-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Usability, navigation, and conversion roadblocks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Core Web Vitals and mobile responsiveness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Search visibility opportunities tailored to your goals</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => dismissModal("close_button")}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Done &amp; Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            /* ========================================================== */
            /* 2-COLUMN MODAL CONTENT (Desktop Balanced, Mobile Stack)   */
            /* ========================================================== */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* LEFT COLUMN: Headings, Benefits & Compact Form */}
              <div className="lg:col-span-7 space-y-5 text-left">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-electric/10 dark:bg-brand-cyan/10 text-brand-electric dark:text-brand-cyan border border-brand-electric/20 dark:border-brand-cyan/30">
                  <span>{currentOffer.eyebrow}</span>
                </div>

                {/* Headline & Description */}
                <div className="space-y-2">
                  <h2
                    id="growth-modal-title"
                    className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug"
                  >
                    {currentOffer.headline}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {currentOffer.description}
                  </p>
                </div>

                {/* Benefits Bullet Points */}
                <div className="space-y-1.5 py-1">
                  {currentOffer.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Compact Lead Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
                  {/* Invisible Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="growth_bot_trap">Do not fill this</label>
                    <input
                      type="text"
                      id="growth_bot_trap"
                      name="bot_trap"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Inline Error Notice */}
                  {status === "error" && errorMessage && (
                    <div
                      role="alert"
                      className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Field 1: Website URL */}
                  <div>
                    <label
                      htmlFor="growth_website_url"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Website URL <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="growth_website_url"
                        type="text"
                        required
                        placeholder="e.g. yourcompany.com"
                        value={website}
                        onFocus={handleFieldFocus}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.04] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:bg-white dark:focus:bg-[#070F22] transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 2: Work Email */}
                  <div>
                    <label
                      htmlFor="growth_work_email"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="growth_work_email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onFocus={handleFieldFocus}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.04] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:bg-white dark:focus:bg-[#070F22] transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 3: Primary Goal */}
                  <div>
                    <label
                      htmlFor="growth_primary_goal"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Primary Goal <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Target className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="growth_primary_goal"
                        required
                        value={primaryGoal}
                        onFocus={handleFieldFocus}
                        onChange={(e) => setPrimaryGoal(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#0A1633] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all appearance-none cursor-pointer"
                      >
                        {GOAL_OPTIONS.map((goal) => (
                          <option
                            key={goal}
                            value={goal}
                            className="bg-white dark:bg-[#070F22] text-slate-900 dark:text-white"
                          >
                            {goal}
                          </option>
                        ))}
                      </select>
                      {/* Custom dropdown chevron */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-brand hover:brightness-105 shadow-md shadow-brand-electric/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Your Request...</span>
                        </>
                      ) : (
                        <>
                          <span>{currentOffer.ctaText}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Supporting Text & Privacy Note */}
                  <div className="space-y-1 pt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    <p>
                      Tell us about your website and goals. Our team will review your request and recommend relevant next steps.
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500">
                      Your information will be used to respond to your enquiry in accordance with our{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-brand-electric dark:text-brand-cyan underline hover:no-underline"
                      >
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>

              {/* RIGHT COLUMN: Website Analytics & Growth Report Preview Card (Desktop) */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] p-5 space-y-4 shadow-sm">
                  {/* Mock Window Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Audit Engine Preview
                    </span>
                  </div>

                  {/* Website Scope Target Banner */}
                  <div className="p-3 rounded-xl bg-white dark:bg-[#070F22] border border-slate-200/70 dark:border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                        Target Website
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                        Review Ready
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 truncate">
                      {website ? cleanUrl(website) : "https://yourcompany.com"}
                    </p>
                  </div>

                  {/* 3 Metric Review Focus Tiles */}
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-white dark:bg-[#070F22] border border-slate-200/70 dark:border-white/10 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-brand-electric dark:text-brand-cyan flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          UX &amp; Conversion Flow
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Identifies user friction and drop-off points
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#070F22] border border-slate-200/70 dark:border-white/10 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Speed &amp; Core Web Vitals
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Evaluates page load, responsiveness &amp; code
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#070F22] border border-slate-200/70 dark:border-white/10 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                        <Search className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Organic Search Opportunities
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Highlights high-intent keyword ranking gaps
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Footer Note */}
                  <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>No automated spam. Manual review by engineers.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeadCaptureScrollModal;
