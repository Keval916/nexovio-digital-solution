import React from "react";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { generatePageMetadata } from "@/lib/seo";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Portfolio & Selected Work | Nexovio Digital Solutions",
  description:
    "Explore Nexovio's representative digital engineering projects, custom web applications, bespoke UI/UX designs, and technical search systems.",
  keywords: [
    "Digital Portfolio",
    "Web Development Case Showcase",
    "UI UX Work Examples",
    "Custom Web App Projects",
    "Nexovio Portfolio",
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
