import type { Metadata } from "next";
import GraphicDesign from "@/src/views/services/GraphicDesign";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "Graphic Design Services for Businesses | Nexovio",
  description:
    "Custom graphic design services for branding, social media, packaging, menus, brochures, advertising, print and marketing materials. Work with Nexovio.",
  keywords: [
    "Graphic Design Services",
    "Graphic Design Company",
    "Graphic Design Agency",
    "Custom Graphic Design Services",
    "Professional Graphic Design Services",
    "Graphic Design Services for Businesses",
    "Creative Design Services",
    "Business Graphic Design Services",
    "Social Media Design Services",
    "Social Media Graphic Design",
    "Social Media Post Design",
    "Instagram Post Design",
    "Branding Design Services",
    "Brand Identity Design",
    "Logo Design Services",
    "Packaging Design Services",
    "Product Packaging Design",
    "Product Label Design",
    "Food Packaging Design",
    "Brochure Design Services",
    "Flyer Design Services",
    "Print Design Services",
    "Restaurant Graphic Design",
    "Restaurant Menu Design",
    "Menu Design Services",
    "Pizza Menu Design",
    "Food Promotion Design",
    "Restaurant Social Media Design",
    "Pizza Shop Promotion Design",
    "E-commerce Graphic Design",
    "Product Graphic Design",
    "Advertising Graphic Design",
    "Ad Creative Design",
    "Presentation Design Services",
    "Pitch Deck Design",
    "PowerPoint Design Services",
    "Infographic Design Services",
  ],
  path: "/services/graphic-design",
});


export default function Page() {
  return <GraphicDesign />;
}

