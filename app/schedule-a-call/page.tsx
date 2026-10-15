import type { Metadata } from "next";
import ScheduleACall from "@/src/views/ScheduleACall";
import { generatePageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Schedule a 30-Minute Discovery Call | Nexovio",
    description:
      "Book a free 30-minute discovery call with Nexovio's engineering team. Discuss your technical scope, architecture, timeline, and custom budget estimates.",
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
  title: "Schedule a 30-Minute Discovery Call | Nexovio",
};

export default function Page() {
  return <ScheduleACall />;
}
