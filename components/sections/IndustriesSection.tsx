"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface IndustryItem {
  id: string;
  category: string;
  stat: string;
  statLabel: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "ecommerce",
    category: "eCommerce",
    stat: "92%",
    statLabel: "conversion rate increase",
    title: "Parts Connexion",
    description: "BigCommerce migration + custom integrations",
    image: "https://images.unsplash.com/photo-1556742049-0a6756da99fc?q=80&w=800&auto=format&fit=crop",
    link: "/case-studies/parts-connexion",
  },
  {
    id: "ai",
    category: "AI & Tech",
    stat: "25%",
    statLabel: "increase in registration conversions",
    title: "Inside Injury",
    description: "Custom AI build & automated workflows",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    link: "/case-studies/inside-injury",
  },
  {
    id: "home-services",
    category: "Home Services",
    stat: "99.9%",
    statLabel: "uptime + 40% faster page loads",
    title: "Infiniti Home Comfort",
    description: "HVAC digital booking & lead pipeline",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    link: "/case-studies/infiniti-home-comfort",
  },
  {
    id: "saas",
    category: "B2B SaaS",
    stat: "3.8x",
    statLabel: "user onboarding acceleration",
    title: "Apex Cloud Platform",
    description: "Next.js enterprise SaaS front-end architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    link: "/case-studies/apex-cloud-enterprise-platform",
  },
  {
    id: "healthcare",
    category: "Healthcare",
    stat: "150%",
    statLabel: "boost in patient appointment bookings",
    title: "Lumina Health Network",
    description: "HIPAA-compliant telemedicine portal & mobile flow",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    link: "/case-studies/lumina-health-patient-experience",
  },
  {
    id: "real-estate",
    category: "Real Estate",
    stat: "4.5x",
    statLabel: "qualified lead capture rate",
    title: "Pulse Realty Group",
    description: "High-resolution property showcase & CRM sync",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    link: "/case-studies/pulse-logistics-organic-growth-engine",
  },
];

export function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const touchStartX = useRef<number | null>(null);

  // Responsive cards count calculation
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const maxIndex = Math.max(0, INDUSTRIES_DATA.length - cardsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16 relative" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8">
          <AnimateOnScroll variant="fadeUp" duration={0.6}>
            <SectionHeading
              badge="Proven Sector Results"
              title="Tailored Solutions for"
              highlightText="High-Growth Industries"
              description="Explore real performance metrics delivered across e-commerce, AI, healthcare, SaaS, and home services."
              align="center"
              className="mb-0"
            />
          </AnimateOnScroll>

          {/* Slider Controls - Positioned on Right Corner */}
          <div className="flex items-center justify-end gap-3 ">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${currentIndex === 0
                ? "border-border-subtle/50 text-muted/40 cursor-not-allowed bg-surface-elevated/30"
                : "border-border-subtle bg-surface-elevated text-foreground hover:border-brand-cyan hover:bg-brand-cyan/10 hover:text-brand-cyan shadow-sm active:scale-95"
                }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${currentIndex >= maxIndex
                ? "border-border-subtle/50 text-muted/40 cursor-not-allowed bg-surface-elevated/30"
                : "border-border-subtle bg-surface-elevated text-foreground hover:border-brand-cyan hover:bg-brand-cyan/10 hover:text-brand-cyan shadow-sm active:scale-95"
                }`}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Slider Wrapper */}
        <div
          className="relative overflow-hidden pt-2 pb-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
            }}
          >
            {INDUSTRIES_DATA.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 flex flex-col"
              >
                {/* Split Industry Card Matching Screenshot Design */}
                <div className="group relative rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-brand-cyan/60 transition-all duration-300 overflow-hidden flex flex-row h-full min-h-[250px]">
                  {/* Left Side: Media / Visual Background Image (42% width) */}
                  <div className="w-[42%] relative overflow-hidden shrink-0 bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
                  </div>

                  {/* Right Side: Content Details (58% width) */}
                  <div className="w-[58%] p-4 sm:p-5 flex flex-col justify-between bg-white text-slate-900">
                    <div>
                      {/* Pill Badge */}
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold text-white bg-sky-500 shadow-sm mb-2">
                        {item.category}
                      </span>

                      {/* Giant Stat Highlight */}
                      <div className="text-3xl sm:text-4xl font-extrabold text-sky-500 tracking-tight leading-none mt-1">
                        {item.stat}
                      </div>

                      {/* Stat Metric Label */}
                      <p className="text-xs font-semibold text-slate-700 leading-snug mt-1 mb-3">
                        {item.statLabel}
                      </p>
                    </div>

                    <div>
                      {/* Divider */}
                      <div className="w-full border-t border-slate-100 my-2" />

                      {/* Client / Project Title */}
                      <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                        {item.title}
                      </h3>

                      {/* Subtitle / Tech description */}
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Read Case Study Link */}
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 mt-3 group/link transition-colors"
                      >
                        <span>Read The Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                ? "w-8 bg-brand-cyan"
                : "w-2 bg-border-subtle hover:bg-brand-cyan/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
