"use client";

import React from "react";
import Link from "next/link";
import { PRICING_PACKAGES, CURRENCY_CONFIG, SupportedCurrency } from "@/src/data/pricing";
import { useGeoCurrency } from "@/src/lib/geo";

interface PricingPackagesProps {
  showTitle?: boolean;
  className?: string;
  initialCurrency?: "USD" | "INR" | "AED";
}

export function PricingPackages({
  showTitle = true,
  className = "",
  initialCurrency,
}: PricingPackagesProps) {
  const { currency, setCurrency } = useGeoCurrency(initialCurrency);

  const currencyOptions: SupportedCurrency[] = ["USD", "INR", "AED"];

  return (
    <section className={`py-12 sm:py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER & H1 */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Flexible{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Website Development Packages
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] dark:text-slate-400 font-normal">
              Transparent, fixed-price website development packages designed for small businesses, growing companies, and custom digital products.
            </p>

            {/* CURRENCY SELECTOR */}
            <div className="mt-6 inline-flex items-center p-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 px-3 hidden sm:inline">
                Select Currency:
              </span>
              <div className="flex items-center gap-1">
                {currencyOptions.map((code) => {
                  const cfg = CURRENCY_CONFIG[code];
                  const isActive = currency === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setCurrency(code)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? "bg-brand-cyan text-slate-950 font-bold shadow-xs"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
                      }`}
                    >
                      <span>{cfg.flag}</span>
                      <span>{code}</span>
                      <span className="opacity-75 text-[10px]">({cfg.symbol.trim()})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 3 PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PACKAGES.map((plan) => {
            const planPricing = plan.pricing[currency] || plan.pricing.USD;
            const isPopular = Boolean(plan.isPopular);

            return (
              <div
                key={plan.id}
                className={`relative rounded-[26px] bg-white dark:bg-[#0B132B] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${isPopular
                  ? "border-2 border-[#1769FF] dark:border-[#1769FF] shadow-[0_12px_40px_rgba(99,102,241,0.18)] dark:shadow-[0_12px_40px_rgba(99,102,241,0.28)] lg:-translate-y-2 z-10"
                  : "border border-[#E2E8F0] dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-300 dark:hover:border-white/20"
                  }`}
              >
                {/* MOST POPULAR BADGE */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1769FF] text-white text-[10px] font-bold uppercase tracking-widest px-5 py-1 rounded-full shadow-md z-20 whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Card Title & Tagline */}
                  <div className="text-center">
                    <h3 className=" text-2xl sm:text-[26px] font-bold text-[#0F172A] dark:text-white tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1.5">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className="text-center my-7">
                    {planPricing.amount === "Custom" ? (
                      <div className=" text-4xl sm:text-[42px] font-bold text-[#0F172A] dark:text-white py-1">
                        Custom
                      </div>
                    ) : (
                      <div className="flex items-baseline justify-center">
                        <span className=" text-4xl sm:text-[42px] font-bold text-[#0F172A] dark:text-white tracking-tight">
                          {planPricing.symbol}
                          {planPricing.amount}
                        </span>
                        {planPricing.suffix && (
                          <span className="text-xs text-[#94A3B8] font-normal ml-1">
                            {planPricing.suffix}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Features List with Dividers */}
                  <ul className="my-6">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="py-2.5 border-b border-[#F1F5F9] dark:border-white/5 flex items-center text-xs sm:text-[13px] text-[#475569] dark:text-slate-300"
                      >
                        <span className="text-[#0EA5E9] font-bold text-sm mr-2.5 select-none leading-none">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={plan.cta.href}
                    className={`block w-full py-3.5 rounded-full text-center text-xs font-bold tracking-widest uppercase transition-all duration-300 ${isPopular
                      ? "bg-gradient-brand text-white shadow-[0_4px_15px_rgba(23,105,255,0.35)] hover:shadow-[0_6px_20px_rgba(23,105,255,0.5)] hover:brightness-110"
                      : "border border-[#E2E8F0] dark:border-white/20 bg-white dark:bg-transparent text-[#0F172A] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 shadow-xs"
                      }`}
                  >
                    {plan.cta.text}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* PACKAGE DELIVERABLES, SCOPE & CUSTOM QUOTE CLARITY */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-10 shadow-lg space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Package Deliverables, Scope &amp; Custom Quote Criteria
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-2">
              Every Nexovio project operates with 100% transparent milestone billing, zero hidden fees, and clear deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-border-subtle space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan font-bold">
                Starter Scope
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">5-Page Launch Website</h3>
              <p className="text-xs text-muted leading-relaxed">
                Designed for local businesses, consultants, and service providers needing a rapid, credible web presence.
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-1">
                <li>• <strong>Includes:</strong> Home, About, Services, Portfolio/Work, and Contact.</li>
                <li>• <strong>Integrations:</strong> Contact form with email alerts &amp; WhatsApp chat button.</li>
                <li>• <strong>Scope Limit:</strong> Static / basic content; does not include database user logins or eCommerce checkout.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-brand-bright/30 dark:border-brand-bright/20 space-y-2.5 relative">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-bright font-bold">
                Professional Scope
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Up to 10 Pages + CMS</h3>
              <p className="text-xs text-muted leading-relaxed">
                Tailored for expanding companies requiring custom UI/UX design, CMS editing, and lead generation funnels.
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-1">
                <li>• <strong>Includes:</strong> Up to 10 tailored pages with Figma UI/UX review before code.</li>
                <li>• <strong>SEO &amp; Telemetry:</strong> Technical schema markup, GA4, and Google Search Console.</li>
                <li>• <strong>Warranty:</strong> 60 days of bug fixes, cross-browser audits, and content support.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-border-subtle space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold">
                Custom Scopes
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Bespoke Web Apps &amp; AI</h3>
              <p className="text-xs text-muted leading-relaxed">
                For platforms requiring custom backend logic, enterprise integrations, or tailored commercial architecture.
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-1">
                <li>• <strong>eCommerce:</strong> Shopify Plus &amp; WooCommerce multi-catalog stores with ERP sync.</li>
                <li>• <strong>Web Applications:</strong> Next.js client portals, SaaS dashboards, and database backends.</li>
                <li>• <strong>AI Workflows:</strong> Autonomous triage agents, RAG document search, and LLM tooling.</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
            <span>Need extra pages, multi-language internationalization (i18n), or custom third-party API connectors?</span>
            <Link
              href="/contact?plan=custom"
              className="inline-flex items-center text-xs font-bold text-brand-cyan hover:underline shrink-0"
            >
              Request a Custom Project Estimate →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
