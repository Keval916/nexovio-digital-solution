import type { Metadata } from "next";
import Services from "@/src/views/services/Services";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "Web, Mobile, UI/UX & AI Solutions | Digital Services | Nexovio",
  description:
    "Discover Nexovio's digital services including web development, mobile apps, UI/UX design, graphic design, AI solutions, SEO and digital marketing.",
  keywords: [
    "IT services",
    "web development services",
    "SEO and marketing",
    "mobile app development",
    "UI/UX services",
    "Digital Solutions",
    "Web Design Agency",
    "Graphic Design",
    "AI solutions",
  ],
  path: "/services",
});

export default function Page() {
  return <Services />;
}
