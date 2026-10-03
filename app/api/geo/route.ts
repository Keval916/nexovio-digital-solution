import { NextRequest, NextResponse } from "next/server";
import { getCurrencyForCountry } from "@/src/data/pricing";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // 0. Mock test support via query param or header
    const testCountry =
      req.nextUrl.searchParams.get("test_country") ||
      req.headers.get("x-mock-country") ||
      "";

    // 1. Check genuine edge headers (Vercel / Cloudflare edge)
    const country = (
      testCountry ||
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      req.headers.get("x-country-code") ||
      ""
    ).toUpperCase().trim();

    // 2. Strict mapping based on actual detected country (never guess from language)
    const currency = country ? getCurrencyForCountry(country) : "USD";

    return NextResponse.json(
      {
        success: Boolean(country),
        country: country || "UNKNOWN",
        currency,
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        country: "UNKNOWN",
        currency: "USD",
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  }
}
