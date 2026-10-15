import Script from "next/script";
import { Suspense } from "react";
import { GA_TRACKING_ID } from "@/src/lib/analytics";
import { RouteTracker } from "./RouteTracker";

/**
 * Server-rendered Google Analytics base tag initializer.
 * Renders into initial HTML stream so GA4 begins downloading immediately
 * without waiting for client-side React hydration to complete.
 */
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
