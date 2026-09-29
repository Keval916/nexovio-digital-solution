import type { Metadata } from "next";
import ScheduleACall from "@/src/views/ScheduleACall";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Schedule a 30-Minute Discovery Call | Nexovio Digital Solutions",
    description:
      "Book a direct 30-minute discovery call with Nexovio's software engineering and UI/UX team. Discuss project requirements, technical architecture, timelines, and budget estimates.",
    keywords: [
      "schedule a call",
      "book a discovery call",
      "software consultation",
      "web development consultation",
      "mobile app consultation",
      "UI UX design consultation",
      "tech scoping call",
      "Nexovio digital solutions",
      "hire software engineers",
      "IT project estimate",
    ],
    path: "/schedule-a-call",
  }),
  title: "Schedule a 30-Minute Discovery Call | Nexovio Digital Solutions",
};

export default function Page() {
  return <ScheduleACall />;
}
