"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageSquare, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
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
  badge = "Frequently Asked Questions",
  title = "Clear Answers to",
  highlightText = "Common Inquiries",
  description = "Get transparent information regarding project scopes, development timelines, remote collaboration, and IP ownership.",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const schema = getFaqSchema(faqs);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 sm:py-28 bg-surface/30 relative" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp" duration={0.7}>
          <SectionHeading
            badge={badge}
            title={title}
            highlightText={highlightText}
            description={description}
            align="center"
          />
        </AnimateOnScroll>

        {/* FAQ Accordion List with Smooth CSS Grid Animation */}
        <AnimateOnScroll variant="staggerChildren" stagger={0.08} duration={0.5}>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const indexPadded = String(index + 1).padStart(2, "0");

            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl border transition-all duration-300 backdrop-blur-sm overflow-hidden",
                  isOpen
                    ? "border-brand-cyan/45 bg-surface-elevated/95 shadow-[0_0_25px_-5px_rgba(0,198,255,0.18)] ring-1 ring-brand-cyan/30"
                    : "border-border-subtle bg-surface-elevated/60 hover:border-brand-cyan/30 hover:bg-surface-elevated/80"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left outline-none focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex items-start sm:items-center gap-3.5 pr-4">
                    <span
                      className={cn(
                        "text-xs font-mono font-bold px-2 py-1 rounded shrink-0 transition-colors duration-300",
                        isOpen
                          ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30"
                          : "bg-white/5 text-muted-dark border border-white/5 group-hover:text-muted"
                      )}
                    >
                      Q{indexPadded}
                    </span>
                    <span
                      className={cn(
                        "text-base sm:text-lg font-semibold transition-colors duration-200",
                        isOpen
                          ? "text-white"
                          : "text-muted-light group-hover:text-white"
                      )}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                      isOpen
                        ? "bg-brand-cyan/15 text-brand-cyan rotate-180"
                        : "bg-white/5 text-muted group-hover:bg-white/10 group-hover:text-white"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth CSS Grid open/close container */}
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
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5">
                      <p className="text-sm sm:text-base text-muted-light leading-relaxed pl-1 sm:pl-10">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </AnimateOnScroll>

        {/* Quick Assistance Reassurance Card */}
        <AnimateOnScroll variant="fadeUp" duration={0.5} delay={0.15}>
        <div className="mt-12 rounded-2xl border border-border-subtle bg-surface-elevated/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Have a specific question not covered here?
              </h4>
              <p className="text-xs text-muted mt-0.5">
                Our engineering team reviews specifications and responds within 1 business day.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-brand-cyan/40 transition-all duration-200 shrink-0"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
          </Link>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
