"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FinalCtaSection } from "@/src/components/sections/FinalCtaSection";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@nexoviodigitalsolutions.com";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+91-6351312234";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91-6351312234";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/nexovio-digital-solutions";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/nexovio.web/";

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <FinalCtaSection />

      <footer className="site-footer relative bg-[#050B17] text-white keep-white border-t border-slate-800">
        {/* Subtle decorative top highlight line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        {/* Quick Contact & Action Bar */}
        <div className="border-b border-slate-800/80 bg-slate-900/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-sm text-slate-200 keep-slate">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                </span>
                <span className="font-semibold text-white keep-white">Have a project in mind?</span>
                <span className="text-slate-400 keep-slate hidden sm:inline">— Let&apos;s build something exceptional together.</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-xs font-medium text-slate-200 keep-slate hover:text-white keep-white transition-all duration-200"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-200 keep-slate hover:text-white keep-white">{contactEmail}</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-950/70 border border-emerald-500/30 hover:border-emerald-500/50 text-xs font-medium text-emerald-400 hover:text-emerald-400 transition-all duration-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

            {/* Column 1: Brand Info (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <Link
                href="/"
                className="inline-block group focus:outline-none select-none"
                aria-label="Nexovio Digital Solutions Homepage"
              >
                <img
                  src="/images/brand/nexovio-digital-solution.webp"
                  alt="Nexovio Digital Solutions"
                  width={220}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <p className="text-sm text-slate-300 keep-slate leading-relaxed max-w-sm">
                Nexovio Digital Solutions delivers custom web development, intuitive UI/UX design, mobile applications, and search growth strategies engineered for modern, ambitious brands.
              </p>

              {/* Direct Reach */}
              <div className="space-y-2.5 pt-1 text-sm text-slate-300 keep-slate">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors"
                  >
                    {contactPhone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-300 keep-slate">Global Delivery • Remote First</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nexovio on LinkedIn"
                  className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 keep-slate hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nexovio on Instagram"
                  className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 keep-slate hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Services (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white keep-white">
                Services
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300 keep-slate">
                <li>
                  <Link href="/services/web-development" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-design" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app-development" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Mobile App Dev
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo-digital-marketing" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    SEO &amp; Growth
                  </Link>
                </li>
                <li>
                  <Link href="/services/graphic-design" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-development" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors block footer-link flex items-center gap-1.5">
                    <span>AI Development</span>
                    <span className="px-1 py-0.2 rounded text-[9px] font-mono font-bold bg-cyan-400/20 text-cyan-300">
                      NEW
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Solutions & Partnerships (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white keep-white">
                Solutions
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300 keep-slate">
                <li>
                  <Link href="/agency-partnership" className="text-cyan-300 hover:text-cyan-200 font-medium transition-colors block footer-link">
                    Agency Partnership
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-development" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    React &amp; Next.js Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-development" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    E-Commerce Stores
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Design Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo-digital-marketing" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Technical SEO Audits
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Digital Showcase
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Company (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white keep-white">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300 keep-slate">
                <li>
                  <Link href="/about" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/#industries" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Resources (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white keep-white">
                Resources
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300 keep-slate">
                <li>
                  <Link href="/blog" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Tech Articles
                  </Link>
                </li>
                <li>
                  <Link href="/schedule-a-call" className="text-cyan-300 hover:text-cyan-200 transition-colors block font-medium footer-link">
                    Schedule a Call
                  </Link>
                </li>
                <li>
                  <Link href="/#faqs" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Client FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-slate-300 keep-slate hover:text-cyan-400 transition-colors block footer-link">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Legal & Back to Top */}
          <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 keep-slate">
            <p className="text-slate-400 keep-slate">
              © {currentYear} Nexovio Digital Solutions. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-slate-400 keep-slate hover:text-cyan-400 transition-colors footer-link">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-slate-400 keep-slate hover:text-cyan-400 transition-colors footer-link">
                Terms & Conditions
              </Link>
              <Link href="/schedule-a-call" className="text-slate-400 keep-slate hover:text-cyan-400 transition-colors footer-link">
                Discovery Call
              </Link>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 keep-slate hover:text-white keep-white border border-slate-700 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
