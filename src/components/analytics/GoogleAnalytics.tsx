"use client";

import Script from "next/script";
import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_TRACKING_ID, trackPageView } from "@/src/lib/analytics";

function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip initial mount because gtag config already sent initial pageview
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

export function GoogleAnalytics() {
  const gaId = GA_TRACKING_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            var storedConsent = null;
            try { storedConsent = localStorage.getItem('nexovio_cookie_consent'); } catch(e){}
            gtag('consent', 'default', {
              'analytics_storage': storedConsent === 'denied' ? 'denied' : 'granted',
              'ad_storage': storedConsent === 'denied' ? 'denied' : 'granted',
              'ad_user_data': storedConsent === 'denied' ? 'denied' : 'granted',
              'ad_personalization': storedConsent === 'denied' ? 'denied' : 'granted'
            });
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_location: window.location.href,
              page_title: document.title
            });
          `,
        }}
      />
      <Script
        id="google-analytics-tag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Suspense fallback={null}>
        <RouteTracker />
      </Suspense>
    </>
  );
}
