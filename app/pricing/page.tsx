import type { Metadata } from "next";
import PricingView from "@/src/views/Pricing";
import { generatePageMetadata } from "@/src/lib/seo";
import { headers } from "next/headers";
import { SupportedCurrency, getCurrencyForCountry } from "@/src/data/pricing";

export const metadata = generatePageMetadata({
  title: "Website Development Pricing & Packages | Nexovio",
  description:
    "Transparent website development packages starting at $149 / ₹9,999. Fixed-price starter, professional, and custom web application pricing with zero surprises.",
  keywords: [
    "website development pricing",
    "website design packages",
    "custom web development cost",
    "business website packages",
    "affordable web development",
    "transparent website pricing",
    "5 page website cost",
    "professional website design packages",
    "ecommerce website development pricing",
    "custom web application quote",
  ],
  path: "/pricing",
});

export default function Page() {
  const headerList = headers();
  const country = (
    headerList.get("x-vercel-ip-country") ||
    headerList.get("cf-ipcountry") ||
    headerList.get("x-country-code") ||
    ""
  ).toUpperCase();

  // If on edge with detected country, use it; otherwise default to USD (client performs live IP detection)
  const initialCurrency: SupportedCurrency = country
    ? getCurrencyForCountry(country)
    : "USD";

  return <PricingView initialCurrency={initialCurrency} />;
}
