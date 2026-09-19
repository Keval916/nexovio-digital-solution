"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, ShoppingBag, Cpu, HeartPulse, Home, Wrench, Briefcase, Rocket, Utensils } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FEATURED_CARDS = [
  {
    title: "Ecommerce & Retail",
    description: "Build better online shopping experiences and scalable ecommerce platforms.",
    icon: ShoppingBag,
    url: "/industries/ecommerce",
  },
  {
    title: "SaaS & Technology",
    description: "Create websites and digital products that explain complex technology clearly.",
    icon: Cpu,
    url: "/industries/saas",
  },
  {
    title: "Healthcare",
    description: "Build accessible digital experiences for clinics, healthcare businesses and their customers.",
    icon: HeartPulse,
    url: "/industries/healthcare",
  },
  {
    title: "Real Estate",
    description: "Create property-focused websites and lead-generation experiences designed around buyers and sellers.",
    icon: Home,
    url: "/industries/real-estate",
  },
  {
    title: "Home Services",
    description: "Help customers discover your services, request quotes and book appointments online.",
    icon: Wrench,
    url: "/industries/home-services",
  },
  {
    title: "Professional Services",
    description: "Build credible digital experiences that turn online visitors into qualified enquiries.",
    icon: Briefcase,
    url: "/industries/finance",
  },
  {
    title: "Startups",
    description: "Launch quickly with a scalable digital foundation that can evolve with your product.",
    icon: Rocket,
    url: "/industries/startups",
  },
  {
    title: "Restaurants & Hospitality",
    description: "Create digital experiences that make discovery, reservations and customer interactions easier.",
    icon: Utensils,
    url: "/industries/restaurants",
  },
];

const ALL_INDUSTRIES = [
  "Ecommerce & Online Retail", "Retail & Consumer Brands", "SaaS & Software", "Technology & IT Companies",
  "Startups & Scaleups", "AI & Machine Learning", "FinTech & Financial Services", "Banking & Financial Institutions",
  "Insurance", "Healthcare", "Hospitals & Medical Centers", "Clinics & Doctors", "Dental Clinics",
  "Mental Wellness & Wellness Businesses", "Fitness & Gyms", "Beauty Salons & Spas", "Real Estate",
  "Property Management", "Construction", "Architecture & Interior Design", "Home Services", "HVAC & Plumbing",
  "Electrical Services", "Cleaning Services", "Legal & Law Firms", "Accounting & Tax Services", "Consulting",
  "Professional Services", "Education & E-Learning", "Schools & Institutes", "Coaching & Training",
  "Universities & Educational Organizations", "Restaurants & Food Businesses", "Cafes & Bakeries",
  "Hotels & Hospitality", "Travel & Tourism", "Event Management", "Entertainment & Media", "Influencers & Personal Brands",
  "Marketing & Advertising", "Automotive & Auto Services", "Manufacturing", "Industrial & Engineering",
  "Logistics & Transportation", "Supply Chain & Distribution", "Wholesale & B2B", "Agriculture & Agritech",
  "Energy & Renewable Energy", "Telecommunications", "Nonprofits & NGOs", "Government & Public Services",
  "Pharmaceuticals & Life Sciences", "Fashion & Apparel", "Jewelry & Luxury Brands", "Sports & Recreation",
  "Gaming", "Publishing", "Recruitment & HR", "Travel Agencies", "Pet Care & Veterinary", "Home Decor & Furniture",
  "Consumer Electronics", "Subscription Businesses", "Marketplace Platforms", "B2B Services", "Local Businesses",
  "Franchise Businesses", "Membership Businesses", "Real-World Service Businesses", "Custom / Other Industries",
];

export function IndustriesSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedIndustries = showAll ? ALL_INDUSTRIES : ALL_INDUSTRIES.slice(0, 24);

  return (
    <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16 relative" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
              SOLUTIONS FOR DIFFERENT BUSINESS NEEDS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Digital Solutions for Businesses{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Across Industries</span>
            </h2>
            <div className="text-base sm:text-lg text-muted leading-relaxed space-y-2 pt-1 max-w-3xl mx-auto">
              <p className="font-semibold text-white/90">
                Every industry has different customers, workflows and challenges.
              </p>
              <p className="text-sm sm:text-base">
                We adapt our design, development and marketing approach to the way your business actually works.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Featured Industry Cards Grid */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.08} duration={0.6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {FEATURED_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.url}
                  className="group relative rounded-2xl bg-surface-elevated/70 border border-border-subtle p-6 hover:border-brand-cyan/45 hover:bg-surface-elevated transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-xs font-bold text-brand-cyan group-hover:text-white transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* 70 Industry Directory List */}
        <AnimateOnScroll variant="fadeUp" duration={0.6}>
          <div className="bg-surface-elevated/50 border border-border-subtle rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-bright mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-cyan" />
              <span>Full Industry Directory ({ALL_INDUSTRIES.length} Sectors Served)</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {displayedIndustries.map((ind, idx) => (
                <div
                  key={ind}
                  className="text-xs text-muted hover:text-white flex items-center gap-2 py-1 px-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-brand-cyan/30 transition-colors"
                >
                  <span className="text-[10px] font-mono text-brand-cyan font-bold">
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <span className="truncate">{ind}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="text-xs font-bold text-brand-cyan hover:underline"
              >
                {showAll ? "Show Less Industries" : `View All ${ALL_INDUSTRIES.length} Industries →`}
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-brand text-white shadow-glow hover:opacity-95"
              >
                <span>Explore Industries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

