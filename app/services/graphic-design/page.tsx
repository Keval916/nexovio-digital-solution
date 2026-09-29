import type { Metadata } from "next";
import GraphicDesign from "@/src/views/services/GraphicDesign";
import { generatePageMetadata } from "@/src/lib/seo";

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

export default function Page() {
  return <GraphicDesign />;
}
