import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ServicesInteractive } from "@/components/sections/ServicesInteractive";
import { WhyNexovio } from "@/components/sections/WhyNexovio";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Nexovio Digital Solutions | Web Development, Design & Digital Marketing",
  description:
    "Nexovio Digital Solutions combines strategy, design, development and digital marketing to help businesses create better digital experiences and build a stronger online presence.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Value Proposition Section */}
      <ValueProposition />

      {/* 3. Interactive Services Showcase */}
      <ServicesInteractive />

      {/* 4. Why Nexovio Differentiators */}
      <WhyNexovio />

      {/* 5. 6-Step Project Delivery Process */}
      <ProcessSection />

      {/* 6. Selected Work & Case Study Previews */}
      <SelectedWork />

      {/* 7. Industries / Target Audiences Served */}
      <IndustriesSection />

      {/* 8. Design + Modern Technology Standards */}
      <TechStackSection />

      {/* 9. Authentic Testimonials Placeholder Architecture */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions with JSON-LD */}
      <FaqSection />
    </>
  );
}
