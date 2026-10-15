import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.nexoviodigitalsolutions.com";
const SITE_ORIGIN = `https://${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const rawHost = request.headers.get("x-forwarded-host") || request.headers.get("host") || request.nextUrl.hostname || "";
  const host = rawHost.split(":")[0].toLowerCase();
  const proto = request.headers.get("x-forwarded-proto");

  // Skip static files, api routes, and Next.js internal files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // 1. Redirect apex domain (nexoviodigitalsolutions.com) to www.nexoviodigitalsolutions.com (301 Permanent)
  const isApex = host === "nexoviodigitalsolutions.com";
  // 2. Redirect http to https (in production)
  const isHttp = proto === "http" && process.env.NODE_ENV === "production";
  // 3. Remove trailing slash (e.g. /case-studies/ -> /case-studies)
  const hasTrailingSlash = pathname.length > 1 && pathname.endsWith("/");

  if (isApex || isHttp || hasTrailingSlash) {
    const cleanPath = hasTrailingSlash ? pathname.slice(0, -1) : pathname;
    const targetHost = isApex ? CANONICAL_HOST : host;
    const targetProto = isHttp ? "https" : (proto || "https");
    const redirectUrl = `${targetProto}://${targetHost}${cleanPath}${search}`;

    return NextResponse.redirect(new URL(redirectUrl), 301);
  }

  // Set explicit canonical Link header on every response for Googlebot
  const cleanPath = pathname === "/" ? "" : pathname;
  const canonicalUrl = `${SITE_ORIGIN}${cleanPath}`;

  const response = NextResponse.next();
  response.headers.set("Link", `<${canonicalUrl}>; rel="canonical"`);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
