"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("nexovio_cookie_consent");
      if (!consent) {
        // Show banner after brief delay
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage restricted
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("nexovio_cookie_consent", "granted");
      setShowBanner(false);
      // Notify gtag if available
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    } catch {
      setShowBanner(false);
    }
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("nexovio_cookie_consent", "denied");
      setShowBanner(false);
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
    } catch {
      setShowBanner(false);
    }
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Cookie and Privacy Preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-xl border border-border-subtle bg-surface-elevated/95 backdrop-blur-md p-5 shadow-2xl animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
          <ShieldCheck className="w-5 h-5 text-brand-cyan shrink-0" />
          <span>Privacy & Analytics</span>
        </div>
        <button
          type="button"
          onClick={handleDecline}
          aria-label="Close cookie notice"
          className="text-muted hover:text-white p-1 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="mt-2 text-xs text-muted leading-relaxed">
        We use privacy-friendly analytics to understand how visitors engage with our services. We never sell personal data or track sensitive credentials. Read our{" "}
        <Link href="/privacy-policy" className="text-brand-bright hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <div className="mt-4 flex items-center justify-end gap-2.5">
        <button
          type="button"
          onClick={handleDecline}
          className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-muted hover:text-white hover:bg-white/5 border border-border-subtle transition-all"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-brand hover:scale-[1.04] hover:shadow-[0_4px_20px_rgba(0,198,255,0.4)] shadow-glow transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        >
          Accept
        </button>
      </div>
    </aside>
  );
}
