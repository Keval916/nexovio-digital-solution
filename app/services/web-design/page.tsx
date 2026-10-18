import type { Metadata } from "next";
import WebDesign from "@/src/views/services/WebDesign";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Professional Web Design & Responsive Website Design | Nexovio",
  description:
    "Bespoke, conversion-focused web design services for business websites and landing pages. Intuitive layouts, responsive design, modern typography, and brand-driven visual systems.",
  keywords: [
    "web design services",
    "responsive website design",
    "professional web design",
    "UI/UX design",
    "conversion-focused design",
    "custom web design",
    "website redesign services",
    "landing page design",
    "e-commerce web design",
  ],
  path: "/services/web-design",
});

export default function Page() {
  return <WebDesign />;
}
