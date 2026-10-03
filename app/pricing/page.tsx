import type { Metadata } from "next";
import PricingView from "@/src/views/Pricing";
import { generatePageMetadata } from "@/src/lib/seo";
import { headers } from "next/headers";
import { SupportedCurrency, getCurrencyForCountry } from "@/src/data/pricing";

export const metadata = generatePageMetadata({
  title: "Website Development Pricing & Packages | Starting ₹9,999 | Nexovio",
  description:
    "Explore affordable website development plans from Nexovio. Get responsive, professional business websites starting at ₹9,999 with SEO, contact forms and support.",
  keywords: [
    "affordable website development",
    "website development cost",
    "website development price",
    "affordable web development company",
    "business website cost",
    "5 page website",
    "5 page website price",
    "website design pricing",
    "cheap website development",
    "professional website affordable",
    "website development India",
    "affordable web design India",
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
