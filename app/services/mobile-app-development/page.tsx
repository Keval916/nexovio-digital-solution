import type { Metadata } from "next";
import MobileAppDevelopment from "@/src/views/services/MobileAppDevelopment";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Mobile App Development Services | iOS & Android Apps",
    description:
      "Build scalable iOS and Android mobile apps with cross-platform development, mobile UI/UX, API integration, testing and app store deployment.",
    keywords: [
      "mobile app development",
      "mobile app development company",
      "mobile app development services",
      "custom mobile app development",
      "mobile application development",
      "app development services",
      "iOS app development",
      "Android app development",
      "iPhone app development",
      "Android application development",
      "cross platform app development",
      "React Native app development",
      "Flutter app development",
      "enterprise mobile app development",
      "MVP app development",
      "mobile app design and development",
      "mobile UI UX design",
      "mobile UX design",
      "mobile app development agency",
      "mobile app maintenance",
      "mobile app testing",
      "mobile app API integration",
      "offline mobile app development",
      "push notification integration",
      "app store deployment",
      "SaaS mobile app development",
      "B2B mobile app development",
      "on demand app development",
      "ecommerce mobile app development",
      "fintech app development",
      "healthcare mobile app development",
    ],
    path: "/services/mobile-app-development",
  }),
  title: "Mobile App Development Services | iOS & Android Apps | Nexovio",
};

export default function Page() {
  return <MobileAppDevelopment />;
}
