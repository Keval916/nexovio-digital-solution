import type { Metadata } from "next";
import BlogAdmin from "@/src/views/admin/BlogAdmin";

export const metadata: Metadata = {
  title: "Nexovio Blog Studio – Admin Content Management",
  description: "Internal content studio to create, edit, manage, and publish technical blog posts on Nexovio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <BlogAdmin />;
}
