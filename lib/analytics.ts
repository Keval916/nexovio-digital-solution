declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const consent = localStorage.getItem("nexovio_cookie_consent");
    return consent === "granted";
  } catch {
    return false;
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
}

export function trackContactClick(channel: "whatsapp" | "phone" | "email") {
  trackEvent(`${channel}_click`, {
    channel,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackPageView(url: string) {
  if (typeof window === "undefined" || !window.gtag || !GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
}
