import type { Metadata } from "next";
import About from "@/src/views/About";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "About Nexovio Digital Solutions | Web Development & Digital Solutions",
  description:
    "Learn about Nexovio Digital Solutions and our approach to web development, web design, UI/UX, mobile apps, SEO, digital marketing and practical digital solutions.",
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
