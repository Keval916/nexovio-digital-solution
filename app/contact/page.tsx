import type { Metadata } from "next";
import Contact from "@/src/views/Contact";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "Contact Nexovio | Start Your Web, App & AI Project",
  description:
    "Contact Nexovio to discuss your web development, mobile app, or AI project. Our engineering team reviews requirements and responds within 24 hours.",
  keywords: [
    "contact web development agency",
    "request quote digital marketing",
    "SEO consultation",
    "software development inquiry",
    "Contact Nexovio",
    "Hire Web Developers",
  ],
  path: "/contact",
});

export default function Page() {
  return <Contact />;
}
