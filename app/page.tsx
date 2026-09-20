import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ServicesInteractive } from "@/components/sections/ServicesInteractive";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyNexovio } from "@/components/sections/WhyNexovio";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import { getOrganizationSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Nexovio Digital Solutions – Web Development, Design & SEO",
  description:
    "Nexovio combines strategy, design and development to create digital experiences that help businesses turn ideas into real results.",
  keywords: [
    "Web Development Company",
    "Digital Marketing Agency",
    "Custom Web Applications",
    "UI UX Design Company",
    "SEO Optimization Services",
    "Mobile App Development",
    "React Next.js Developers",
  ],
  path: "/",
});

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Introduction & Core Value Cards */}
      <ValueProposition />

      {/* 3. Services Showcase */}
      <ServicesInteractive />

      {/* 4. Our Process */}
      <ProcessSection />

      {/* 5. Why Businesses Work With Us */}
      <WhyNexovio />

      {/* 6. Case Studies / Our Work */}
      <SelectedWork />

      {/* 7. Industries We Serve */}
      <IndustriesSection />

      {/* 8. Technology & Development */}
      <TechStackSection />

      {/* 9. Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Common Questions (FAQ) */}
      <FaqSection />
    </>
  );
}

