"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/src/lib/analytics";

export function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip initial mount because gtag config in initial HTML already sent initial pageview
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (pathname) {
      const url = searchParams?.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;
      // Allow Next.js App Router to commit document.title in DOM before sending GA4 pageview
      const timer = setTimeout(() => {
        trackPageView(url);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  return null;
}
