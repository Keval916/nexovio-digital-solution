declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-N0YLWZTCPC";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-5M9NKD8C";

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const v2Consent = localStorage.getItem("nexovio_consent_v2");
    if (v2Consent) {
      return v2Consent !== "declined";
    }
    const legacy = localStorage.getItem("nexovio_cookie_consent");
    return legacy !== "declined";
  } catch {
    return true;
  }
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  // 1. Push to GTM dataLayer if present
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // 2. Always dispatch to GA4 gtag when available.
  // Google Consent Mode v2 handles whether to store cookies or send cookieless pings automatically.
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export function trackCtaClick(ctaName: string, location: string, destination?: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: location,
    destination: destination || "",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    page_title: typeof document !== "undefined" ? document.title : "",
  });
}

export function trackFormSubmit(formName: string, serviceSelected?: string) {
  const payload = {
    form_name: formName,
    service_name: serviceSelected || "unspecified",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    page_title: typeof document !== "undefined" ? document.title : "",
  };

  trackEvent("contact_form_submit", payload);
  // Fire standard GA4 generate_lead conversion event
  trackEvent("generate_lead", {
    ...payload,
    currency: "USD",
    value: 50.0,
  });
}

export function trackContactClick(channel: "whatsapp" | "phone" | "email", context?: string) {
  const payload = {
    channel,
    context: context || "direct_contact",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    page_title: typeof document !== "undefined" ? document.title : "",
  };

  trackEvent(`${channel}_click`, payload);
  // Also register as high-intent lead conversion
  trackEvent("generate_lead", {
    ...payload,
    lead_type: channel,
  });
}

export function trackPageView(url: string) {
  if (typeof window === "undefined") return;

  const fullUrl = window.location.href;
  const pageTitle = typeof document !== "undefined" ? document.title : "";

  // 1. Update GA4 config with active page context and fire page_view event
  if (window.gtag && GA_TRACKING_ID) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
      page_location: fullUrl,
      page_title: pageTitle,
    });
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: fullUrl,
      page_title: pageTitle,
    });
  }

  // 2. Push to GTM dataLayer for GTM tag triggers
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      page_path: url,
      page_location: fullUrl,
      page_title: pageTitle,
    });
  }
}
