import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/lib/../components/ui/Button";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@nexoviodigitalsolutions.com";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+91-6351312234";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91-6351312234";

  return (
    <>
      <FinalCtaSection />
      <footer className="relative bg-[#001025] text-white keep-white border-t border-blue-900/40 pt-16 pb-12 overflow-hidden">
        {/* Background glow motif */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-radial-glow pointer-events-none opacity-40" />
        {/* Main Footer Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-blue-900/40">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <Link
                href="/"
                className="inline-flex items-center group outline-none focus:outline-none select-none p-0.5"
                aria-label="Nexovio Digital Solutions Homepage"
              >
                {/* White Brand Logo for Footer Background */}
                <img
                  src="/images/brand/nexovio-digital-solution.webp"
                  alt="Nexovio Digital Solutions"
                  width={380}
                  height={100}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </Link>

              <p className="text-xs font-mono font-bold text-brand-cyan tracking-wider uppercase">
                Make the business grow with us building digital experience.
              </p>

              <p className="text-sm text-slate-300 keep-slate leading-relaxed max-w-sm">
                We are a web development, design, technology and digital marketing company that works with businesses to improve their digital experience and gain access to more clients online.
              </p>

              <div className="pt-2 space-y-2">
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2.5 text-xs text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-bright" />
                  <span>{contactEmail}</span>
                </a>
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-xs text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-bright" />
                  <span>{contactPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white keep-white mb-4">
                Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-design"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-design"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mobile-app-development"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo-digital-marketing"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo-digital-marketing"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white keep-white mb-4">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agency-partnership"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Agency Partnership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#process"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#industries"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white keep-white mb-4">
                Resources
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo-digital-marketing"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    SEO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo-digital-marketing"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-design"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#technology"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-300 keep-slate hover:text-brand-cyan transition-colors"
                  >
                    Business Growth
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 keep-slate">
            <p>
              © {currentYear} Nexovio Digital Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-brand-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-brand-cyan transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

