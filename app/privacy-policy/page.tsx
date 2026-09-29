import type { Metadata } from "next";
import PrivacyPolicy from "@/src/views/PrivacyPolicy";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata = generatePageMetadata({
  title: "Privacy Policy | Nexovio Digital Solutions",
  description:
    "Nexovio Digital Solutions Privacy Policy – how we collect, use and protect your personal information when you use our website or request services.",
  keywords: [
    "privacy policy",
    "data protection",
    "Nexovio confidentiality",
    "GDPR Cookie Terms",
  ],
  path: "/privacy-policy",
});

export default function Page() {
  return <PrivacyPolicy />;
}
