import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Layers,
  Cpu,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Mobile App Development Services – iOS & Android Solutions | Nexovio",
  description:
    "Custom mobile app development services by Nexovio Digital Solutions. Cross-platform iOS and Android apps built with React Native & Flutter for performance.",
  keywords: [
    "Mobile App Development Services",
    "iOS and Android App Developers",
    "React Native App Development",
    "Flutter Mobile Apps",
    "Cross-Platform Mobile Apps",
    "Nexovio Mobile App Engineering",
  ],
  path: "/services/mobile-app-development",
});

export default function MobileAppDevelopmentPage() {
  const service = getServiceBySlug("mobile-app-development");

  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.fullDescription,
    url: `/services/${service.slug}`,
    serviceType: "MobileAppDevelopment",
    image: service.image,
  });

  return (
    <div className="pt-24 pb-14 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
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
              Cross-Platform iOS &amp; Android Apps
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Mobile App Development Built for{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Performance &amp; Engagement.
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
                trackingName="mobile_app_start_project"
                trackingLocation="service_hero"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow"
              >
                Start Your Mobile App Project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                trackingName="mobile_app_view_work"
                trackingLocation="service_hero"
                className="hover:border-brand-cyan/40"
              >
                View App Portfolio
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-brand-cyan/30 bg-[#060D1A] shadow-2xl group">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                iOS &amp; Android Architecture
              </div>
            </div>
          </div>
        </div>

        {/* Business Problem & Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 sm:mb-24">
          <Card className="p-8 border-border-subtle bg-surface-elevated/70">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan block mb-2">
              The Mobile Challenge
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              Why Native Performance Matters
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {service.businessProblem}
            </p>
          </Card>

          <Card className="p-8 border-border-subtle bg-surface-elevated/70">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
              The Nexovio Solution
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              Direct Customer Touchpoints
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {service.whyItMatters}
            </p>
          </Card>
        </div>

        {/* Core Capabilities Grid */}
        <div className="mb-20 sm:mb-24">
          <SectionHeading
            badge="CAPABILITIES"
            title="What We Deliver in"
            highlightText="Mobile Engineering"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {service.capabilities.map((cap, idx) => (
              <Card
                key={cap.title}
                className="p-6 sm:p-7 border-border-subtle bg-surface-elevated/70 hover:border-brand-cyan/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-brand-bright/10 border border-brand-bright/20 text-brand-cyan shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-brand-cyan font-bold block mb-1">
                      0{idx + 1}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {cap.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 sm:mb-24">
          <div className="lg:col-span-6">
            <Card className="p-8 h-full border-border-subtle bg-surface-elevated/70">
              <h3 className="text-xl font-bold text-white mb-4">
                Mobile Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-surface-subtle border border-white/10 text-brand-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-6">
            <Card className="p-8 h-full border-border-subtle bg-surface-elevated/70">
              <h3 className="text-xl font-bold text-white mb-4">
                Key Mobile Deliverables
              </h3>
              <ul className="space-y-3">
                {service.deliverables.map((del) => (
                  <li key={del} className="flex items-start gap-3 text-xs sm:text-sm text-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* FAQs */}
        <FaqSection
          faqs={service.faqs}
          badge="MOBILE APP FAQ"
          title="Questions About"
          highlightText="Mobile App Development"
        />
      </div>
    </div>
  );
}
