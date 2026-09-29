import type { Metadata } from "next";
import Contact from "@/src/views/Contact";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "Contact Nexovio Digital Solutions – Start Your Project",
  description:
    "Ready to build a website, app or digital marketing strategy? Contact Nexovio to discuss your project. Our technical team will review your requirements and respond within one business day.",
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
