import type { Metadata } from "next";
import About from "@/src/views/About";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "About Nexovio | Global Web Development & Digital Solutions",
  description:
    "Learn about Nexovio Digital Solutions. We deliver custom web development, UI/UX design, mobile apps, and enterprise AI solutions engineered to scale.",
  keywords: [
    "About Nexovio Digital Solutions",
    "web development company",
    "digital solutions company",
    "web design company",
    "website development company",
    "UI/UX design services",
    "mobile app development",
    "SEO services",
    "digital marketing services",
    "custom website development",
    "e-commerce development",
    "AI solutions",
  ],
  path: "/about",
});

export default function Page() {
  return <About />;
}
