"use client";

import React from "react";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { PricingPackages } from "@/src/components/pricing/PricingPackages";
import { FaqSection } from "@/src/components/sections/FaqSection";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const PRICING_FAQS = [
  {
    question: "Can I customize the features or add extra pages to these packages?",
    answer:
      "Yes, absolutely. While our Starter and Professional plans cover the most common business requirements, every project can be tailored with additional pages, custom API integrations, third-party CRM connectors, or dedicated maintenance plans to match your exact business model.",
  },
  {
    question: "How does currency and payment work for international clients?",
    answer:
      "We accept payments in USD ($), INR (₹), and AED (AED) through international wire transfers, Stripe, PayPal, and domestic banking rails in India (UPI/NEFT/IMPS) and the UAE. Invoices are generated in your local currency with transparent milestone billing.",
  },
  {
    question: "Are there any hidden costs or recurring monthly fees?",
    answer:
      "None. Our project pricing is 100% transparent with zero surprise fees. Third-party operational fees (such as your chosen domain registrar, cloud hosting providers like Vercel or AWS, or paid third-party SaaS APIs) are billed directly to your own provider accounts with full ownership.",
  },
  {
    question: "What is your typical project delivery timeline?",
    answer:
      "A Starter package website is typically delivered within 2 to 3 weeks. A Professional custom website or e-commerce solution typically takes 4 to 6 weeks, depending on asset readiness, custom functionality, and revision feedback cycles.",
  },
  {
    question: "What does post-launch warranty and support cover?",
    answer:
      "Post-launch support includes bug fixes, security updates, Core Web Vitals performance monitoring, cross-browser compatibility maintenance, and hands-on guidance on managing your CMS content.",
  },
];

interface PricingViewProps {
  initialCurrency?: "USD" | "INR" | "AED";
}

export default function PricingView({ initialCurrency }: PricingViewProps) {
  return (
    <div className="pt-24 pb-12 bg-gradient-to-b from-[#f8faff] via-white to-[#f5f8ff] dark:from-[#070D1A] dark:via-[#091224] dark:to-[#070D1A] min-h-screen text-foreground">
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ name: "Pricing", url: "/pricing" }]} />
      </div>

      {/* PRICING PACKAGES (HERO & 3 CARDS MATCHING SCREENSHOT) */}
      <PricingPackages showTitle={true} initialCurrency={initialCurrency} />

      {/* THEME-CONSISTENT FAQ SECTION (Same component & style used across all pages) */}
      <FaqSection
        variant="white"
        faqs={PRICING_FAQS}
        badge=""
        title="FREQUENTLY ASKED"
        highlightText="QUESTIONS"
        description="Clear, transparent answers regarding billing milestones, multi-currency invoices, custom scope estimations, and post-launch support."
      />
    </div>
  );
}
