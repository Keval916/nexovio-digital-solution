import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  CheckCircle2,
  Search,
  LineChart,
  Target,
  ShieldAlert,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

const service = getServiceBySlug("digital-marketing")!;

export const metadata = generatePageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  keywords: [
    "Technical SEO Services",
    "Digital Marketing Agency",
    "Organic Search Strategy",
    "Search Engine Optimization",
    "Conversion Rate Optimization",
  ],
  path: `/services/${service.slug}`,
});

export default function DigitalMarketingPage() {
  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "DigitalMarketingServices",
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
              Technical SEO &amp; Organic Acquisition
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#001025] tracking-tight leading-[1.12]">
              Digital Marketing &amp; SEO Services That{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Drive Organic Revenue.
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
                trackingName="marketing_start_project"
                trackingLocation="service_hero"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow"
              >
                Start Your SEO &amp; Growth Strategy
              </Button>
              <Button
                href="/case-studies"
                variant="secondary"
                size="lg"
                trackingName="marketing_view_case_studies"
                trackingLocation="service_hero"
                className="hover:border-brand-cyan/40"
              >
                View Marketing Case Studies
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-brand-cyan/30 bg-[#060D1A] shadow-2xl group">
              <Image
                src="/images/services/digital-marketing-mockup.svg"
                alt="Technical SEO & Organic Visibility Analytics Console"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                SERP Analytics
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Standards & Realistic Expectations */}
        <div className="mb-24 rounded-2xl border border-brand-cyan/20 bg-surface-elevated/80 p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-mono text-brand-cyan uppercase tracking-widest">
              <ShieldAlert className="w-4 h-4 text-brand-bright" />
              <span>Our Honest SEO & Growth Charter</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              No Gimmicks. No Fake #1 Guarantees.{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Just Disciplined Engineering.</span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We never guarantee overnight ranking miracles or vanity traffic spikes. Google’s algorithms reward technical crawl efficiency, topical entity depth, fast Core Web Vitals, and genuine human relevance. We approach SEO as a rigorous software engineering and content alignment discipline that builds durable, compounding business pipeline over 3 to 12 months.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-24">
          <SectionHeading
            badge="Organic Search Pillars"
            title="Core Marketing &"
            highlightText="SEO Capabilities"
            description="From resolving deep technical crawl errors to orchestrating search-intent editorial roadmaps and setting up GA4/GTM conversion architectures."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap) => (
              <Card key={cap.title} className="bg-surface-elevated/70">
                <div className="w-10 h-10 rounded-lg bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-4">
                  <TrendingUp className="w-5 h-5" />
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

        {/* Deliverables Overview */}
        <div className="mb-24 rounded-xl border border-border-subtle bg-surface-elevated/80 p-8 space-y-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Standard Marketing Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <FaqSection faqs={service.faqs} />
      </div>
    </div>
  );
}
