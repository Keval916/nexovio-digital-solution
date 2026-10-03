"use client";

import { useState, useEffect, useCallback } from "react";
import { SupportedCurrency, getCurrencyForCountry } from "@/src/data/pricing";

export function useGeoCurrency(initialCurrency?: SupportedCurrency) {
  const [currency, setCurrencyState] = useState<SupportedCurrency>(initialCurrency || "USD");
  const [country, setCountry] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const applyCountryCode = useCallback((detectedCountry: string) => {
    const code = (detectedCountry || "").toUpperCase().trim();
    if (!code) {
      setCurrencyState("USD");
      return;
    }

    setCountry(code);

    // Apply strict currency rules:
    // IN -> INR, AE -> AED, All other countries / unknown / failed -> USD
    const newCurrency = getCurrencyForCountry(code);
    setCurrencyState(newCurrency);

    // Store in session storage & cookie for seamless navigation across pages
    try {
      sessionStorage.setItem("nexovio_country", code);
      sessionStorage.setItem("nexovio_currency", newCurrency);
      document.cookie = `nexovio_currency=${newCurrency}; path=/; max-age=3600; SameSite=Lax`;
    } catch {
      // Ignore storage errors
    }
  }, []);

  const detectLiveIpGeo = useCallback(async () => {
    // 0. Test / Mock support via query parameter (e.g. ?country=IN or ?country=AE or ?country=US)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const mock = params.get("country") || params.get("test_country");
      if (mock) {
        applyCountryCode(mock);
        setIsLoading(false);
        return;
      }
    }

    setIsLoading(true);

    // 1. Cloudflare trace: Fastest global edge lookup (~150ms). Unthrottled, always uses browser's active VPN tunnel.
    const fetchCloudflareTrace = async () => {
      const res = await fetch("https://www.cloudflare.com/cdn-cgi/trace", {
        cache: "no-store",
        signal: AbortSignal.timeout(3500),
      });
      const text = await res.text();
      const match = text.match(/loc=([A-Za-z]{2})/);
      if (!match || !match[1]) throw new Error("loc not found in cloudflare trace");
      return match[1].toUpperCase();
    };

    // 2. ipwho.is: Fast secondary global IP geolocation
    const fetchIpWhoIs = async () => {
      const res = await fetch("https://ipwho.is/", {
        cache: "no-store",
        signal: AbortSignal.timeout(3500),
      });
      const data = await res.json();
      if (!data.success || !data.country_code) throw new Error("ipwhois unsuccessful");
      return data.country_code.toUpperCase();
    };

    // 3. freeipapi.com: Fast tertiary global IP geolocation
    const fetchFreeIpApi = async () => {
      const res = await fetch("https://freeipapi.com/api/json", {
        cache: "no-store",
        signal: AbortSignal.timeout(3500),
      });
      const data = await res.json();
      if (!data.countryCode) throw new Error("freeipapi missing country");
      return data.countryCode.toUpperCase();
    };

    try {
      // Race external IP endpoints to get genuine visitor country
      const detected = await Promise.any([
        fetchCloudflareTrace(),
        fetchIpWhoIs(),
        fetchFreeIpApi(),
      ]);

      applyCountryCode(detected);
    } catch {
      // If all providers fail, timeout, or blocked, default to USD as required
      applyCountryCode("UNKNOWN");
    } finally {
      setIsLoading(false);
    }
  }, [applyCountryCode]);

  useEffect(() => {
    // 1. Run live IP detection on page mount
    detectLiveIpGeo();

    // 2. Re-detect live IP when user switches back to browser tab (e.g. after connecting/disconnecting VPN)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        detectLiveIpGeo();
      }
    };

    const handleFocus = () => {
      detectLiveIpGeo();
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [detectLiveIpGeo]);

  return { currency, country, isLoading };
}
