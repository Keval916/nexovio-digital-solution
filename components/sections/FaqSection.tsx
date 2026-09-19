"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GLOBAL_FAQS } from "@/data/faqs";
import { getFaqSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface FaqSectionProps {
  faqs?: { question: string; answer: string }[];
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
}

export function FaqSection({
  faqs = GLOBAL_FAQS,
  badge = "COMMON QUESTIONS",
  title = "Frequently",
  highlightText = "Asked Questions",
  description,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const schema = getFaqSchema(faqs);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section-blue py-12 sm:py-20 relative overflow-hidden" id="faq">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-radial-glow pointer-events-none opacity-40 blur-3xl" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge={badge}
            title={title}
            highlightText={highlightText}
            description={description}
            align="center"
          />
        </AnimateOnScroll>

        {/* FAQ Accordion List */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.06} duration={0.4}>
          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={cn(
                    "relative rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-md",
                    isOpen
                      ? "bg-white dark:bg-[#07162c] border border-transparent shadow-[0_8px_30px_rgba(0,198,255,0.14)]"
                      : "bg-white/95 dark:bg-[#081226]/90 border border-slate-200/90 dark:border-blue-900/40 hover:border-brand-cyan dark:hover:border-brand-cyan hover:bg-white dark:hover:bg-[#0d1b38] shadow-sm hover:shadow-md"
                  )}
                >
                  {/* Glowing Top 2px Animated Shimmer Line (Only when Open - matches CookieConsent) */}
                  {isOpen && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none animate-shimmer-x" />
                  )}

                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4.5 text-left outline-none focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 pr-3">
                      {/* Question Text with Hover Match to Border Color */}
                      <span
                        className={cn(
                          "text-sm sm:text-base md:text-lg transition-colors duration-200 leading-snug",
                          isOpen
                            ? "text-brand-cyan font-bold"
                            : "text-slate-800 dark:text-slate-200 font-semibold group-hover:text-brand-cyan"
                        )}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Chevron Toggle Icon */}
                    <div
                      className={cn(
                        "w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                        isOpen
                          ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 rotate-180 shadow-xs"
                          : "bg-slate-100 text-slate-500 border border-slate-200 dark:bg-blue-900/40 dark:text-slate-300 dark:border-blue-800/40 group-hover:bg-brand-cyan/15 group-hover:text-brand-cyan group-hover:border-brand-cyan/30"
                      )}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Smooth Animated Answer Panel */}
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={cn(
                      "faq-accordion-grid",
                      isOpen ? "open" : ""
                    )}
                  >
                    <div className="faq-accordion-inner">
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1.5 border-t border-slate-100 dark:border-blue-900/40">
                        <div className="pl-3.5 sm:pl-4 border-l-2 border-brand-cyan py-0.5">
                          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
