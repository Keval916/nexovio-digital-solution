import type { Metadata } from "next";
import WebDevelopment from "@/src/views/services/WebDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Web Development Services | Custom Websites & E-commerce | Nexovio",
    description:
      "Professional web development services for custom websites, e-commerce and web apps. We use WordPress, React/Next.js and headless CMS to build fast, secure, scalable online platforms.",
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
  title: "Web Development Services | Websites, E-commerce & Web Apps | Nexovio",
};

export default function Page() {
  return <WebDevelopment />;
}
