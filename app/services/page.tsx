import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Palette,
  Layout,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Digital Solutions & IT Services | Nexovio Digital Solutions",
  description:
    "Explore Nexovio's 5 core digital disciplines: Web Development, Web Design, UI/UX Design, Graphic Design, and Digital Marketing. Strategy-led digital solutions for ambitious brands.",
  keywords: [
    "IT Services",
    "Digital Solutions",
    "Web Development Services",
    "Web Design Agency",
    "UI UX Services",
    "Graphic Design",
    "Digital Marketing Services",
  ],
  path: "/services",
});

const ICONS = {
  Code2,
  Palette,
  Layout,
  Sparkles,
  TrendingUp,
};

const SERVICE_MOCKUPS: Record<string, string> = {
  "web-development": "/images/services/web-development-mockup.svg",
  "web-design": "/images/services/web-design-mockup.svg",
  "ui-ux-design": "/images/services/ui-ux-mockup.svg",
  "graphic-design": "/images/services/graphic-design-mockup.svg",
  "digital-marketing": "/images/services/digital-marketing-mockup.svg",
};

export default function ServicesPage() {
  const schema = getCollectionPageSchema(
    "Digital Solutions & IT Services",
    "Explore Nexovio's 5 core digital disciplines: Web Development, Web Design, UI/UX Design, Graphic Design, and Digital Marketing.",
    "/services"
  );

  return (
    <div className="pt-24 pb-14 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />

        {/* Page Hero */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-4">
            Comprehensive Digital Disciplines
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#001025] tracking-tight leading-[1.12]">
            End-to-End Digital Engineering &amp;{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Creative Solutions.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            We deliver five tightly coordinated technical services. Whether you require a full-stack Next.js web application, a modern UI/UX redesign, or search-intent organic SEO, our engineering approach prioritizes measurable performance and enduring authority.
          </p>
        </div>

        {/* Services In-Depth List with Rich Visual Mockups */}
        <div className="space-y-16 mb-24">
          {SERVICES.map((service, index) => {
            const Icon = (ICONS as any)[service.iconName] || Code2;
            const isReversed = index % 2 !== 0;
            const mockupImage = SERVICE_MOCKUPS[service.slug] || "/images/services/web-development-mockup.svg";

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="rounded-3xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-sm p-6 sm:p-10 lg:p-12 shadow-2xl hover:border-brand-cyan/35 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">
                          Service 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent">
                          {service.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-muted-light leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-300 mb-1.5">
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <span>Core Problem Solved</span>
                      </div>
                      <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed">
                        {service.businessProblem}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Button
                        href={`/services/${service.slug}`}
                        variant="primary"
                        size="md"
                        trackingName={`services_overview_explore_${service.slug}`}
                        trackingLocation="services_hub"
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="shadow-glow"
                      >
                        Explore Dedicated {service.name} Page
                      </Button>
                      <Button
                        href="/contact"
                        variant="secondary"
                        size="md"
                        trackingName={`services_overview_quote_${service.slug}`}
                        trackingLocation="services_hub"
                        className="hover:border-brand-cyan/40"
                      >
                        Request a Quote
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-5">
                    {/* Visual Mockup Display */}
                    <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-brand-cyan/25 bg-[#050A14] shadow-xl group">
                      <Image
                        src={mockupImage}
                        alt={`${service.name} Architecture Showcase`}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                        Live Preview
                      </div>
                    </div>

                    {/* Key Capabilities */}
                    <div className="bg-surface/90 rounded-xl border border-border-subtle p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/5 pb-2">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-2.5">
                        {service.capabilities.slice(0, 3).map((cap) => (
                          <li key={cap.title} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-semibold text-white block">
                                {cap.title}
                              </span>
                              <span className="text-[11px] text-muted line-clamp-1">
                                {cap.description}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                          Supported Stack
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {service.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-muted-light"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global FAQs */}
        <FaqSection />
      </div>
    </div>
  );
}
