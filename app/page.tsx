import React from "react";
import Homepage from "@/components/homepage";
import { generatePageMetadata } from "@/lib/seo";
import { getOrganizationSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Nexovio Digital Solutions | Web Development, UI/UX & SEO Agency",
  description:
    "Nexovio Digital Solutions offers custom web development, UI/UX design and technical SEO services worldwide. We build fast, SEO-friendly websites and apps to boost your traffic and conversions.",
  keywords: [
    "digital agency",
    "web development",
    "SEO services",
    "UI/UX design",
    "global tech solutions",
    "Web Development Company",
    "Digital Marketing Agency",
    "Custom Web Applications",
    "React Next.js Developers",
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
