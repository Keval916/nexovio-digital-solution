import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Eye,
  ArrowRight,
  LayoutTemplate,
  Sliders,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

const service = getServiceBySlug("web-design")!;

export const metadata = generatePageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  keywords: [
    "Bespoke Web Design Services",
    "Conversion-Focused Web Design",
    "Custom Website Design",
    "Responsive Web Design Agency",
    "Modern Web Interfaces",
  ],
  path: `/services/${service.slug}`,
});

export default function WebDesignPage() {
  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "DesignServices",
  });

  return (
    <div className="pt-28 pb-20 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <Breadcrumbs
          items={[
            { name: "Services", url: "/services" },
            { name: service.name, url: `/services/${service.slug}` },
          ]}
        />

        {/* Hero Section with Visual Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20 sm:mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-2">
              Bespoke Web Design &amp; Visual Systems
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Custom Web Design Services for{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Modern Brands.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackingName="web_design_start_project"
                trackingLocation="service_hero"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow"
              >
                Start Your Web Design Project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                trackingName="web_design_view_work"
                trackingLocation="service_hero"
                className="hover:border-brand-cyan/40"
              >
                View Design Showcase
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-brand-cyan/30 bg-[#060D1A] shadow-2xl group">
              <Image
                src="/images/services/web-design-mockup.svg"
                alt="Bespoke Responsive Multi-Device Web Design Showcase"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                Multi-Device Canvas
              </div>
            </div>
          </div>
        </div>

        {/* Why Bespoke Web Design Matters */}
        <div className="mb-24 rounded-2xl border border-brand-cyan/20 bg-surface-elevated/70 p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
              Our Core Design Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Visual Communication That Respects the{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">User's Intelligence</span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We reject off-the-shelf templates and generic visual themes. In a market flooded with identical SaaS layouts and boilerplate agency themes, a custom visual language communicates confidence, operational rigor, and premium value. Every screen we compose is tailored from scratch around your brand character, target audience, and commercial objectives.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-24">
          <SectionHeading
            badge="Design Capabilities"
            title="Comprehensive Web Design"
            highlightText="Solutions"
            description="From initial low-fidelity wireframes to interactive Figma prototypes and production design systems, we craft cohesive digital interfaces."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap) => (
              <Card key={cap.title} className="bg-surface-elevated/70">
                <div className="w-10 h-10 rounded-lg bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-4">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {cap.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile-First & Responsive Focus */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block">
              Responsive Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Engineered Mobile-First{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Across Every Breakpoint</span>
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              More than 60% of modern web traffic originates on mobile devices. We do not merely shrink desktop designs—we design intentionally for touch targets (minimum 44x44px), legible mobile typography, collapsible navigation menus, and zero horizontal scrolling across 320px, 375px, 768px, 1024px, and ultra-wide displays.
            </p>
            <ul className="space-y-2.5 text-xs text-muted-light pt-2">
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-brand-bright shrink-0" />
                <span>Zero layout shifts or truncated headlines</span>
              </li>
              <li className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>WCAG 2.1 AA compliant color contrast standards</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface-elevated/80 rounded-2xl border border-border-subtle p-8 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Deliverables You Receive
            </h3>
            <div className="space-y-3">
              {service.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <FaqSection faqs={service.faqs} />
      </div>
    </div>
  );
}
