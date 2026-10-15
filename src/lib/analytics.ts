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
    const consent = localStorage.getItem("nexovio_cookie_consent");
    return consent !== "denied";
  } catch {
    return true;
  }
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  // Push to GTM dataLayer if present
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // Send to GA4 gtag if consent granted or if no strict cookie blockage
  if (window.gtag && (hasAnalyticsConsent() || !localStorage.getItem("nexovio_cookie_consent"))) {
    window.gtag("event", eventName, params);
  }
}

export function trackCtaClick(ctaName: string, location: string, destination?: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: location,
    destination: destination || "",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackFormSubmit(formName: string, serviceSelected?: string) {
  trackEvent("contact_form_submit", {
    form_name: formName,
    service_name: serviceSelected || "unspecified",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
  // Fire standard GA4 generate_lead conversion event
  trackEvent("generate_lead", {
    form_name: formName,
    service_name: serviceSelected || "unspecified",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackContactClick(channel: "whatsapp" | "phone" | "email") {
  trackEvent(`${channel}_click`, {
    channel,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackPageView(url: string) {
  if (typeof window === "undefined") return;

  const fullUrl = window.location.href;
  const pageTitle = typeof document !== "undefined" ? document.title : "";

  // 1. Send virtual pageview to GA4 via gtag
  if (window.gtag && GA_TRACKING_ID) {
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
