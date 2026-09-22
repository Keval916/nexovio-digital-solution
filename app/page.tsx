import React from "react";
import Homepage from "@/components/homepage";
import { generatePageMetadata } from "@/lib/seo";
import { getOrganizationSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Web Development Company | Web Design, SEO & AI Solutions | Nexovio",
  description:
    "Nexovio Digital Solutions offers custom web development, web design, UI/UX, eCommerce, SEO, digital marketing and AI solutions for modern businesses worldwide.",
  keywords: [
    "web development company",
    "web development services",
    "web design company",
    "custom web development",
    "website development",
    "UI/UX design",
    "eCommerce development",
    "SEO services",
    "digital marketing",
    "AI web development",
    "AI solutions",
  ],
  path: "/",
});

export default function Page() {
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Homepage />
    </>
  );
}
