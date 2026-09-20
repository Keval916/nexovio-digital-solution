import React from "react";
import Homepage from "@/components/homepage";
import { generatePageMetadata } from "@/lib/seo";
import { getOrganizationSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Nexovio Digital Solutions – Web Development, Design & SEO",
  description:
    "Nexovio combines strategy, design and development to create digital experiences that help businesses turn ideas into real results.",
  keywords: [
    "Web Development Company",
    "Digital Marketing Agency",
    "Custom Web Applications",
    "UI UX Design Company",
    "SEO Optimization Services",
    "Mobile App Development",
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
