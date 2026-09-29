"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("nexovio_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => {
          setShowBanner(true);
          // Trigger entrance animation
          requestAnimationFrame(() => {
            setTimeout(() => setVisible(true), 20);
          });
        }, 0);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage restricted
    }
  }, []);

  const dismiss = (value: "granted" | "denied") => {
    setVisible(false);
    setTimeout(() => {
      try {
        localStorage.setItem("nexovio_cookie_consent", value);
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("consent", "update", { analytics_storage: value });
        }
      } catch { }
      setShowBanner(false);
    }, 400);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 49,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(2px)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Banner */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Cookie Preferences"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Gradient glow above */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "60px",
            background: "radial-gradient(ellipse at center bottom, rgba(23,105,255,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Main panel */}
        <div
          style={{
            background: "linear-gradient(180deg, rgba(10,16,32,0.98) 0%, rgba(5,9,20,0.99) 100%)",
            backdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(23,105,255,0.2)",
            boxShadow: "0 -20px 60px rgba(0,0,0,0.7)",
          }}
        >
          {/* Top shimmer line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent 0%, #1769FF 25%, #00C6FF 50%, #1769FF 75%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer-x 3s ease-in-out infinite",
            }}
          />

          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "28px 24px 24px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Top row: icon + title + close */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                {/* Icon badge */}
                <div
                  style={{
                    flexShrink: 0,
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(23,105,255,0.2) 0%, rgba(0,198,255,0.1) 100%)",
                    border: "1px solid rgba(23,105,255,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(23,105,255,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <ShieldCheck size={22} style={{ color: "#00C6FF" }} />
                </div>

                {/* Title + subtitle */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px", margin: 0, lineHeight: 1.3 }}>
                    We Value Your Privacy
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", margin: "4px 0 0", lineHeight: 1.5 }}>
                    We use cookies to enhance your experience and analyse site performance.{" "}
                    <Link
                      href="/privacy-policy"
                      style={{ color: "#00C6FF", fontWeight: 500, textDecoration: "none" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.textDecoration = "underline")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.textDecoration = "none")}
                    >
                      Privacy Policy ↗
                    </Link>
                  </p>
                </div>

                {/* Close X */}
                <button
                  type="button"
                  onClick={() => dismiss("denied")}
                  aria-label="Close cookie notice"
                  style={{
                    flexShrink: 0,
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.09)";
                    el.style.color = "rgba(255,255,255,0.8)";
                    el.style.borderColor = "rgba(255,255,255,0.15)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.color = "rgba(255,255,255,0.35)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

              {/* Action row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "11px", margin: 0, lineHeight: 1.5 }}>
                  You can change your preferences at any time in our{" "}
                  <Link
                    href="/privacy-policy"
                    style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  {/* Decline */}
                  <button
                    type="button"
                    onClick={() => dismiss("denied")}
                    style={{
                      padding: "10px 22px",
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "13px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget;
                      el.style.background = "rgba(255,255,255,0.09)";
                      el.style.color = "rgba(255,255,255,0.85)";
                      el.style.borderColor = "rgba(255,255,255,0.2)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget;
                      el.style.background = "rgba(255,255,255,0.05)";
                      el.style.color = "rgba(255,255,255,0.6)";
                      el.style.borderColor = "rgba(255,255,255,0.12)";
                    }}
                  >
                    Decline
                  </button>

                  {/* Accept All */}
                  <button
                    type="button"
                    onClick={() => dismiss("granted")}
                    style={{
                      padding: "10px 28px",
                      borderRadius: "10px",
                      border: "none",
                      background: "linear-gradient(135deg, #1769FF 0%, #00C6FF 100%)",
                      color: "#ffffff",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      boxShadow: "0 4px 24px rgba(23,105,255,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                      transition: "all 0.25s ease",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.01em",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(-1px) scale(1.02)";
                      el.style.boxShadow = "0 8px 32px rgba(0,198,255,0.55), inset 0 1px 0 rgba(255,255,255,0.2)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(0) scale(1)";
                      el.style.boxShadow = "0 4px 24px rgba(23,105,255,0.4), inset 0 1px 0 rgba(255,255,255,0.15)";
                    }}
                  >
                    Accept All Cookies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <style>{`
        @keyframes shimmer-x {
          0%   { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </>
  );
}
