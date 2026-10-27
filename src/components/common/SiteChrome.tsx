"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { CookieConsent } from "../analytics/CookieConsent";
import { LeadCaptureScrollModal } from "./LeadCaptureScrollModal";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <div className="h-screen w-full overflow-hidden bg-[#F8FAFC] text-slate-900">{children}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1 mt-[30px] sm:mt-[70px] md:mt-[85px] lg:mt-[110px]">{children}</main>
      <Footer />
      <CookieConsent />
      <LeadCaptureScrollModal />
    </div>
  );
}
