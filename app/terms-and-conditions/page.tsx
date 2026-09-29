import type { Metadata } from "next";
import TermsAndConditions from "@/src/views/TermsAndConditions";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "Terms & Conditions | Nexovio Digital Solutions",
  description:
    "Review the Terms & Conditions governing use of the Nexovio Digital Solutions website and services. Includes service scope, intellectual property and legal disclaimers.",
  keywords: [
    "terms and conditions",
    "usage policy",
    "legal disclaimers",
    "Nexovio policy",
    "Terms of Service",
  ],
  path: "/terms-and-conditions",
});

export default function Page() {
  return <TermsAndConditions />;
}
