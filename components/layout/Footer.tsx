import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/lib/../components/ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@nexovio.com";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+1 (555) 019-2834";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+15550192834";

  return (
    <footer className="relative bg-surface border-t border-border-subtle pt-16 pb-12 overflow-hidden">
      {/* Background glow motif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-radial-glow pointer-events-none opacity-40" />

      {/* Global Final Conversion Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="group relative rounded-2xl border border-brand-cyan/25 bg-surface-elevated/90 p-8 sm:p-12 md:p-14 overflow-hidden shadow-md">
          {/* Top Animated Left-to-Right Border */}
          <div className="absolute top-0 left-0 h-[2.5px] w-0 bg-gradient-brand group-hover:w-full transition-all duration-500 ease-out pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-80 h-80 bg-brand-electric/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan">
                Ready For Real Growth?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Have an idea worth building?{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Let’s turn it into a digital experience.
                </span>
              </h2>
              <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
                Connect directly with our engineering and design team to discuss your project scope, architecture, and timeline.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full lg:w-auto">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackingName="footer_banner_start_project"
                trackingLocation="footer_banner"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Start Your Project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                trackingName="footer_banner_view_work"
                trackingLocation="footer_banner"
                className="w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center group outline-none focus:outline-none select-none p-0.5"
              aria-label="Nexovio Digital Solutions Homepage"
            >
              {/* Dark Theme Logo */}
              <Image
                src="/images/brand/nexovio-digital-solution.webp"
                alt="Nexovio Digital Solutions"
                width={380}
                height={100}
                className="hidden dark:block h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
              {/* Light Theme Logo */}
              <Image
                src="/images/brand/nexovio-digital-solution-light.webp"
                alt="Nexovio Digital Solutions"
                width={380}
                height={100}
                className="block dark:hidden h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Nexovio Digital Solutions is an IT software development and digital solutions agency. We combine strategy, design, full-stack engineering, and search intelligence to build digital experiences that move businesses forward.
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2.5 text-xs text-muted hover:text-brand-cyan transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-bright" />
                <span>{contactEmail}</span>
              </a>
              <a
                href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 text-xs text-muted hover:text-brand-cyan transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-bright" />
                <span>{contactPhone}</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-muted hover:text-brand-cyan transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-brand-cyan" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-design"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-design"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs text-brand-bright hover:underline inline-flex items-center gap-1 pt-1 font-semibold"
                >
                  <span>All Capabilities</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  About Nexovio
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Legal Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Trust & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/about#how-we-work"
                  className="text-muted hover:text-brand-cyan transition-colors"
                >
                  How We Work
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            © {currentYear} Nexovio Digital Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
