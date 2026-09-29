import React from "react";
import Home from "@/src/views/Home";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "Web Development Company | AI, Web Design & SEO | Nexovio",
  description:
    "Nexovio Digital Solutions is a global web development and AI solutions company offering custom web development, web design, UI/UX, eCommerce, SEO and digital marketing services for modern businesses.",
  keywords: [
    "web development company",
    "web development services",
    "custom web development",
    "website development company",
    "web design company",
    "web design services",
    "AI solutions",
    "AI web development",
    "UI/UX design services",
    "eCommerce development",
    "SEO services",
    "digital marketing services",
  ],
  path: "/",
});

export default function Page() {
  return <Home />;
}
