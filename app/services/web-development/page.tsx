import type { Metadata } from "next";
import WebDevelopment from "@/src/views/services/WebDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Web Development Services | Custom Websites & Apps | Nexovio",
    description:
      "Custom web development services for high-speed websites, web apps, and eCommerce. We build scalable platforms using Next.js, React, Node, and WordPress.",
    keywords: [
      "web development services",
      "custom web apps",
      "React JS developer",
      "WordPress development",
      "ecommerce solutions",
      "custom website development",
      "Next.js development",
      "API integration services",
    ],
    path: "/services/web-development",
  }),
  title: "Web Development Services | Custom Websites & Apps | Nexovio",
};

export default function Page() {
  return <WebDevelopment />;
}
