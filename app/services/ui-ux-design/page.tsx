import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layout,
  CheckCircle2,
  GitBranch,
  Layers,
  MousePointerClick,
  Users,
  ArrowRight,
  ShieldCheck,
  FileCode2,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

const service = getServiceBySlug("ui-ux-design")!;

export const metadata = generatePageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: `/services/${service.slug}`,
});

export default function UiUxDesignPage() {
  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "ProductDesign",
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
              Human-Centered Product Design
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#001025] tracking-tight leading-[1.12]">
              UI/UX Design Services That{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Elevate Product Usability.
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
                trackingName="uiux_start_project"
                trackingLocation="service_hero"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow"
              >
                Start Your UI/UX Design Project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                trackingName="uiux_view_work"
                trackingLocation="service_hero"
                className="hover:border-brand-cyan/40"
              >
                View UI/UX Work
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-brand-cyan/30 bg-[#060D1A] shadow-2xl group">
              <Image
                src="/images/services/ui-ux-mockup.svg"
                alt="UI/UX User Flow & Design Tokens Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                Figma Tokens &amp; WCAG AA
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-24">
          <SectionHeading
            badge="Specialized Capabilities"
            title="From User Research to"
            highlightText="Tokenized Design Systems"
            description="We bridge the gap between human psychology and software architecture to deliver frictionless digital experiences."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap) => (
              <Card key={cap.title} className="bg-surface-elevated/70">
                <div className="w-10 h-10 rounded-lg bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-4">
                  <Layout className="w-5 h-5" />
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

        {/* Visually Interesting Process Timeline */}
        <div className="mb-24 rounded-2xl border border-border-subtle bg-surface-elevated/80 p-8 sm:p-12">
          <SectionHeading
            badge="Process Timeline"
            title="The UI/UX Journey:"
            highlightText="From Discovery to Handoff"
            description="A structured workflow designed to de-risk feature development and validate usability before engineering execution."
            align="center"
            className="mb-10"
          />

          <div className="relative border-l-2 border-brand-cyan/30 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            {service.process.map((step) => (
              <div key={step.step} className="relative group">
                <div className="absolute -left-[33px] sm:-left-[41px] top-1 w-6 h-6 rounded-full bg-surface border-2 border-brand-cyan flex items-center justify-center text-[10px] font-bold text-brand-cyan">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Handoff Standards */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block">
              Engineering Handoff
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Zero Guesswork for Software Developers
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              One of the largest causes of UI degradation is poor developer handoff. Because our design team works directly alongside full-stack Next.js developers, our Figma files feature tokenized color variables, explicit responsive autolayout, exact spacing scales, hover/active/disabled states, and semantic ARIA notes.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1.5"
              >
                <span>Schedule a UI/UX consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-surface-elevated/70 rounded-2xl border border-border-subtle p-8 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Deliverables Package
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
        <FaqSection
          faqs={service.faqs}
          title="UI/UX Design"
          highlightText="Frequently Asked Questions"
          description="Clear answers regarding UI vs UX, accessibility audits, and design systems for enterprise software."
        />
      </div>
    </div>
  );
}
