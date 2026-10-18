import type { Metadata } from "next";
import WebDevelopment from "@/src/views/services/WebDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Custom Web Development Services & Web Applications | Nexovio",
  description:
    "Custom web development services for high-performance business websites, ecommerce storefronts, and full-stack web applications built with Next.js, React, and scalable APIs.",
  keywords: [
    "custom web development services",
    "business websites",
    "web applications",
    "custom web development company",
    "Next.js web development",
    "React web development",
    "ecommerce website development",
    "headless CMS architecture",
    "API integration services",
    "full stack web development",
  ],
  path: "/services/web-development",
});

export default function Page() {
  return <WebDevelopment />;
}
