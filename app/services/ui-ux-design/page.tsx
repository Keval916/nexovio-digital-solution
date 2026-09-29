import type { Metadata } from "next";
import UiUxDesign from "@/src/views/services/UiUxDesign";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "UI/UX Design Services | Product & Digital Experience Design",
    description:
      "Research-led UI/UX design for SaaS, web and mobile products. Get UX research, wireframes, prototypes, UI design and scalable design systems.",
    keywords: [
      "UI/UX design services",
      "UI UX design agency",
      "UX design agency",
      "UI design agency",
      "product design agency",
      "digital product design",
      "experience design agency",
      "UX research agency",
      "UX research services",
      "UX consulting",
      "usability testing",
      "SaaS UX design",
      "enterprise UX design",
      "web application UX design",
      "mobile app UX design",
      "design system services",
      "Figma design system",
      "UI component library",
      "user experience design",
      "user interface design",
      "interaction design",
      "product ux design",
      "b2b ux design agency",
      "startup ux design agency",
    ],
    path: "/services/ui-ux-design",
  }),
  title: "UI/UX Design Services | Product & Digital Experience Design | Nexovio",
};

export default function Page() {
  return <UiUxDesign />;
}
