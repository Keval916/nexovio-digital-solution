import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Code2,
  Users,
  Sparkles,
  Cpu,
  Layers,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getAboutPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "About Us | Nexovio Digital Solutions",
  description:
    "Learn why Nexovio Digital Solutions exists, our engineering philosophy, core values, and how we collaborate with ambitious businesses to build high-performance digital products.",
  path: "/about",
});

const VALUES = [
  {
    title: "Engineering Discipline",
    desc: "We write clean, typed, modular code built to endure. We refuse to cut corners with fragile plugins or unmaintainable templates.",
  },
  {
    title: "Purpose-Driven Design",
    desc: "Every visual element, typography scale, and micro-interaction exists to solve user problems and clarify communication.",
  },
  {
    title: "Radical Transparency",
    desc: "We communicate project scope, technical tradeoffs, and milestones honestly. No manufactured vanity metrics or hidden surprises.",
  },
  {
    title: "Compounding Growth",
    desc: "We build digital assets that accumulate value over time through resilient architecture, sustainable SEO, and iterative enhancement.",
  },
];

const COLLABORATION_STEPS = [
  {
    number: "01",
    title: "Clear Communication Channels",
    description: "You have direct access to the designers and software engineers building your product—not layers of non-technical account managers.",
  },
  {
    number: "02",
    title: "Iterative Feedback Cadence",
    description: "We share clickable prototypes, staging previews, and sprint demonstrations early so you inspect progress with zero ambiguity.",
  },
  {
    number: "03",
    title: "Complete Code & IP Ownership",
    description: "Every line of code, design system token, and creative asset belongs entirely to your organization upon project completion.",
  },
];

const LEADERSHIP = [
  {
    name: "Keval Patel",
    role: "Founder & Lead Software Architect",
    image: "/images/about/team-keval.svg",
    bio: "Specializing in Next.js distributed architecture, edge runtime rendering, and full-stack software systems.",
  },
  {
    name: "Sarah Lin",
    role: "Head of UI/UX & Design Systems",
    image: "/images/about/team-sarah.svg",
    bio: "Pioneering human-centered interface psychology, accessible WCAG 2.1 design systems, and conversion-first prototyping.",
  },
  {
    name: "Marcus Vance",
    role: "Technical SEO & Growth Strategist",
    image: "/images/about/team-marcus.svg",
    bio: "Architecting entity-based SEO frameworks, topical SILO maps, and sustainable organic pipeline infrastructure.",
  },
];

export default function AboutPage() {
  const aboutSchema = getAboutPageSchema();

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      
      {/* 1. Hero & Our Story Section (White) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About", url: "/about" }]} />

          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-4">
              Our Purpose &amp; Philosophy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Bridging High-Tech Engineering &amp;{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Human-Centered Design.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
              Nexovio Digital Solutions was founded to solve a fundamental problem in digital services: companies often had to choose between creative agencies with fragile technical execution, or engineering consultancies that overlooked user experience and conversion strategy. We combine both under one disciplined roof.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan block">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Why Nexovio Exists
              </h2>
              <p className="text-sm sm:text-base text-muted-light leading-relaxed">
                We observed too many businesses investing significant capital into websites and software products that looked attractive on surface mockups, but collapsed under real-world usage—failing Core Web Vitals, generating zero search visibility, and confusing actual customers.
              </p>
              <p className="text-sm sm:text-base text-muted-light leading-relaxed">
                Nexovio was established to provide an alternative: a technology partner that values architectural stability as much as visual polish. We build bespoke web platforms, intuitive UI/UX systems, and compounding organic search architectures for businesses that take their digital presence seriously.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  trackingName="about_hero_contact"
                  trackingLocation="about_story"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-glow"
                >
                  Discuss a Project With Us
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-brand-cyan/30 bg-surface-elevated shadow-2xl group">
                <Image
                  src="/images/about/studio-workspace.svg"
                  alt="Nexovio Digital Solutions Engineering Studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                  Operations Lab
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Engineering Standards Topology (Blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-cyan/20 bg-surface-elevated/70 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan block mb-2">
                Engineering Topology
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3">
                Production Architecture Standards
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Every system we build follows a strict three-tier decoupled pipeline ensuring lightning-fast client hydration, maximum SEO crawlability, and rock-solid uptime.
              </p>
            </div>

            <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden border border-white/10 bg-[#050B16] shadow-xl">
              <Image
                src="/images/about/architecture-diagram.svg"
                alt="Nexovio High-Availability System Topology"
                fill
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Bento (White) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-surface-elevated/70 p-8">
              <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-bright mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan block mb-2">
                Our Mission
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                To engineer digital solutions that move businesses forward with measurable clarity.
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Our mission is to eliminate friction between complex software engineering and high-converting design. We empower growing businesses to compete at the highest digital standards through scalable, maintainable, and search-optimized web experiences.
              </p>
            </Card>

            <Card className="bg-surface-elevated/70 p-8">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan block mb-2">
                Our Vision
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                To be the trusted digital engineering studio for ambitious brands worldwide.
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                We envision a digital landscape where businesses are no longer trapped by slow, closed site-builder monoliths or misleading agency vanity claims. We champion open, modern web standards built for long-term compounding authority.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Craft (Blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership & Craft"
            title="Engineers, Designers &"
            highlightText="Strategic Thinkers"
            description="Direct access to the craftsmen building your digital products. No account manager intermediaries."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-7 text-center flex flex-col items-center hover:border-brand-cyan/40 transition-all duration-300 shadow-card group"
              >
                <div className="relative w-24 h-24 mb-5 rounded-full overflow-hidden border-2 border-brand-cyan/40 shadow-glow/30 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {leader.name}
                </h3>
                <span className="text-xs font-mono text-brand-cyan mb-3 block">
                  {leader.role}
                </span>
                <p className="text-xs text-muted leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Values (White) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operating Principles"
            title="The Values That"
            highlightText="Guide Every Project"
            description="These principles govern every line of code we write, every layout we compose, and every client conversation we hold."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val) => (
              <Card key={val.title} className="bg-surface-elevated/70 p-6 hover:border-brand-cyan/35 transition-colors">
                <h3 className="text-base font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {val.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How We Work Partnership (Blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16" id="how-we-work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partnership Model"
            title="How We Collaborate"
            highlightText="With Your Team"
            description="We treat your project as our own product. Here is how we ensure seamless transparency and alignment."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COLLABORATION_STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-border-subtle bg-surface-elevated/60 p-7 space-y-4 hover:border-brand-cyan/35 transition-colors"
              >
                <span className="text-3xl font-extrabold font-mono text-brand-bright/30">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section (White - handled by FaqSection component class section-white) */}
      <FaqSection
        title="Questions About"
        highlightText="Partnering With Nexovio"
        description="Find clear answers about how we manage engagements, scopes, and technical handoffs."
      />
    </div>
  );
}
