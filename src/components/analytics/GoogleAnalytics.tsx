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
            try {
              storedConsent = localStorage.getItem('nexovio_consent_v2');
              if (!storedConsent) {
                var legacy = localStorage.getItem('nexovio_cookie_consent');
                // Auto-migrate legacy bug: previous 'denied' caused by clicking X is converted to dismissed
                if (legacy === 'denied') {
                  storedConsent = 'dismissed';
                  localStorage.setItem('nexovio_consent_v2', 'dismissed');
                } else if (legacy) {
                  storedConsent = legacy;
                }
              }
            } catch(e){}

            var isDeclined = storedConsent === 'declined';
            gtag('consent', 'default', {
              'analytics_storage': isDeclined ? 'denied' : 'granted',
              'ad_storage': isDeclined ? 'denied' : 'granted',
              'ad_user_data': isDeclined ? 'denied' : 'granted',
              'ad_personalization': isDeclined ? 'denied' : 'granted'
            });
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_location: window.location.href,
              page_title: document.title,
              send_page_view: true
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
