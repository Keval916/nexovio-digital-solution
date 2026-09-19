import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Server,
  Database,
  Terminal,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

const service = getServiceBySlug("web-development")!;

export const metadata = generatePageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  keywords: [
    "Web Development Services",
    "Custom WordPress Development",
    "React Development Agency",
    "Next.js Web Applications",
    "Vue.js Node.js Developers",
    "Shopify WooCommerce E-Commerce",
  ],
  path: `/services/${service.slug}`,
});

export default function WebDevelopmentPage() {
  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "SoftwareDevelopment",
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
              Custom Software &amp; Web Engineering
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#001025] tracking-tight leading-[1.12]">
              Web Development Services Built for{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Speed, Security &amp; Scale.
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
                trackingName="web_dev_start_project"
                trackingLocation="service_hero"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow"
              >
                Start Your Web Development Project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                trackingName="web_dev_view_work"
                trackingLocation="service_hero"
                className="hover:border-brand-cyan/40"
              >
                View Web Projects
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-brand-cyan/30 bg-[#060D1A] shadow-2xl group">
              <Image
                src="/images/services/web-development-mockup.svg"
                alt="Web Development Code & Architecture Preview"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                WordPress • React • Next.js • Vue • Node.js
              </div>
            </div>
          </div>
        </div>

        {/* What We Build Section */}
        <div className="mb-24">
          <SectionHeading
            badge="Engineering Scope"
            title="What We Engineer &"
            highlightText="Deploy for Clients"
            description="From custom WordPress CMS sites to React & Next.js web applications, Vue/Node.js portals, and Shopify/WooCommerce e-commerce stores."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap) => (
              <Card key={cap.title} className="bg-surface-elevated/70">
                <div className="w-10 h-10 rounded-lg bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-4">
                  <Terminal className="w-5 h-5" />
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

        {/* Technology Architecture Section */}
        <div className="mb-24 rounded-2xl border border-border-subtle bg-surface-elevated/80 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block">
                Technical Stack & Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                WordPress, React, Next.js, Vue, Node.js &amp;{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">E-Commerce</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                We engineer custom websites and web applications across WordPress, React, Next.js, Vue.js, Node.js, PHP, and E-Commerce platforms (Shopify &amp; WooCommerce). Whether you need a flexible WordPress CMS website or a high-speed React/Next.js web portal, we tailor the ideal technology stack for your business.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Request a technical consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              {service.techStack.map((tech) => (
                <div
                  key={tech}
                  className="p-3.5 rounded-lg border border-border-subtle bg-surface/90 flex items-center gap-2.5 text-xs font-medium text-white"
                >
                  <Cpu className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Process Timeline */}
        <div className="mb-24">
          <SectionHeading
            badge="Execution Pipeline"
            title="Our Web Development"
            highlightText="Methodology"
            description="How we shepherd your web application from technical scoping through continuous deployment and post-launch monitoring."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-border-subtle bg-surface/60 p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-brand-cyan/40 block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="mb-24 rounded-xl border border-border-subtle bg-surface/50 p-6 sm:p-8">
          <h3 className="text-base font-bold text-white uppercase tracking-wider mb-6">
            What You Receive Upon Project Completion
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-muted-light">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Specific FAQ */}
        <FaqSection faqs={service.faqs} />
      </div>
    </div>
  );
}
