import type { Metadata } from "next";
import WebDesign from "@/src/views/services/WebDesign";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Web Design Services | Responsive UI/UX Website Design",
    description:
      "Bespoke website design focused on UX and conversions. Nexovio creates modern, responsive websites and landing pages with intuitive layouts and brand-driven graphics.",
    keywords: [
      "web design services",
      "responsive website design",
      "UI/UX design",
      "conversion-focused design",
      "custom web design",
      "website redesign services",
      "e-commerce web design",
    ],
    path: "/services/web-design",
  }),
  title: "Web Design Services | UI/UX & Responsive Website Design | Nexovio",
};

export default function Page() {
  return <WebDesign />;
}
