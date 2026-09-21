import React from "react";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { generatePageMetadata } from "@/lib/seo";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Portfolio & Selected Projects | Nexovio Digital Solutions",
  description:
    "Explore Nexovio's portfolio of custom web applications, e-commerce platforms, UI/UX systems and technical SEO client projects built for growth.",
  keywords: [
    "digital portfolio",
    "web development portfolio",
    "UI UX project showcase",
    "custom web app examples",
    "Nexovio portfolio",
  ],
  path: "/portfolio",
});

export default function PortfolioPage() {
  const schema = getCollectionPageSchema(
    "Portfolio & Selected Work",
    "Explore Nexovio's representative digital engineering projects, custom web applications, bespoke UI/UX designs, and technical search systems.",
    "/portfolio"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PortfolioClient />
    </>
  );
}
