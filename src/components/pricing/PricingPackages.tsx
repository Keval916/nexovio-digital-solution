"use client";

import React from "react";
import Link from "next/link";
import { PRICING_PACKAGES } from "@/src/data/pricing";
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
  const { currency } = useGeoCurrency(initialCurrency);

  return (
    <section className={`py-12 sm:py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0F172A] dark:text-white tracking-tight">
              Flexible {" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Website Development Packages
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] dark:text-slate-400 font-normal">
              Explore affordable website development packages designed to fit your business needs and budget.
            </p>
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
      </div>
    </section>
  );
}
