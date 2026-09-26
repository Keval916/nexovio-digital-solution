import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Share2,
  FileSpreadsheet,
  Layers,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

const service = getServiceBySlug("graphic-design")!;

export const metadata = generatePageMetadata({
  title: "Graphic Design Services | Branding & Marketing Collateral",
  description:
    "Creative graphic design and brand identity services. We design cohesive logos, social media graphics, presentation decks and marketing materials that strengthen your brand.",
  keywords: [
    "graphic design services",
    "brand identity",
    "marketing graphics",
    "logo design",
    "visual design services",
    "Brand Graphic Design",
    "Visual Identity Systems",
  ],
  path: "/services/graphic-design",
});

export default function GraphicDesignPage() {
  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "GraphicDesignServices",
  });

  return (
    <div className="pt-24 sm:28 md:pt-32 lg:pt-40 pb-20 bg-background">
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
              Brand Visual Identity &amp; Digital Creatives
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Graphic Design &amp; Visual Identity That{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Captivates Audiences.
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
                trackingName="graphic_design_start_project"
                trackingLocation="service_hero"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow"
              >
                Start Your Graphic Design Project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                trackingName="graphic_design_view_work"
                trackingLocation="service_hero"
              >
                View Graphic Assets
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-brand-cyan/30 bg-[#060D1A] shadow-2xl group">
              <Image
                src="/images/services/graphic-design-mockup.svg"
                alt="Corporate Identity & Brand Assets Showcase"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                Brand Identity Kit
              </div>
            </div>
          </div>
        </div>

        {/* Why Visual Consistency Matters */}
        <div className="mb-24 rounded-2xl border border-brand-cyan/20 bg-surface-elevated/70 p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
              Commercial Credibility
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Visual Consistency Builds{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Compounding Market Trust</span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              When prospective clients encounter fragmented visuals across social channels, pitch decks, and digital touchpoints, they subconsciously question company stability. A disciplined visual identity communicates organizational rigor, attention to detail, and premium value—ensuring your company is instantly recognizable across every digital and print touchpoint.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-24">
          <SectionHeading
            badge="Creative Disciplines"
            title="Strategic Visual Assets &"
            highlightText="Marketing Collateral"
            description="From cohesive brand style guides and executive pitch decks to high-impact campaign creatives and vector icon sets."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap) => (
              <Card key={cap.title} className="bg-surface-elevated/70">
                <div className="w-10 h-10 rounded-lg bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-4">
                  <Sparkles className="w-5 h-5" />
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
            Standard Graphic Design Deliverables
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
