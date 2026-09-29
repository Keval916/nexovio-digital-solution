import type { Metadata } from "next";
import Services from "@/src/views/services/Services";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "Digital Engineering & IT Services | Nexovio Digital Solutions",
  description:
    "Explore our end-to-end digital services: web development, bespoke UI/UX and web design, mobile app development, graphic design, and SEO & digital marketing. We create solutions that drive growth.",
  keywords: [
    "IT services",
    "web development services",
    "SEO and marketing",
    "mobile app development",
    "UI/UX services",
    "Digital Solutions",
    "Web Design Agency",
    "Graphic Design",
  ],
  path: "/services",
});

export default function Page() {
  return <Services />;
}
