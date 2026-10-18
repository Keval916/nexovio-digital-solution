import type { Metadata } from "next";
import UiUxDesign from "@/src/views/services/UiUxDesign";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "UI/UX Design Services, SaaS Product Design & Prototyping | Nexovio",
  description:
    "Research-led UI/UX design services for SaaS platforms, mobile apps, and business websites. Wireframing, Figma prototyping, usability audits, and scalable design systems.",
  keywords: [
    "UI/UX design services",
    "SaaS product design",
    "website UX",
    "Figma prototyping",
    "UI UX design agency",
    "product design agency",
    "design system services",
    "usability testing",
    "interaction design",
    "web application UX design",
  ],
  path: "/services/ui-ux-design",
});

export default function Page() {
  return <UiUxDesign />;
}
