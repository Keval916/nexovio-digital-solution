import type { Metadata } from "next";

export const SITE_NAME = "Nexovio Digital Solutions";
export const SITE_TAGLINE = "IT Software Development & Digital Solutions Agency";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nexoviodigitalsolutions.com";
export const DEFAULT_OG_IMAGE = "/images/brand/nexovio-digital-solutions-og-image.jpg";
export const BRAND_LOGO_SQUARE = "/images/brand/nexovio-logo-square.png";

export interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string[] | string;
  path?: string;
  canonicalOverride?: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const cleanSiteUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
  return cleanPath === "/" ? cleanSiteUrl : `${cleanSiteUrl}${cleanPath}`;
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  path = "",
  canonicalOverride,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
  noFollow = false,
}: PageMetadataProps): Metadata {
  const canonical = (canonicalOverride && canonicalOverride.trim()) ? canonicalOverride.trim() : getCanonicalUrl(path);
  const fullTitle = title.includes(SITE_NAME) || title.includes("Nexovio") ? title : `${title} | ${SITE_NAME}`;
  const fullImageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

  return {
    title: fullTitle,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        "x-default": canonical,
        "en": canonical,
      },
    },
    robots: (noIndex || noFollow)
      ? {
        index: !noIndex,
        follow: !noFollow,
      }
      : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      alternateLocale: [
        "en_GB",
        "en_CA",
        "en_AU",
        "en_IN",
        "en_AE",
        "en_SG",
        "en_IE",
        "en_NZ",
        "en_ZA",
      ],
      countryName: "Worldwide",
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - ${title}`,
        },
        ...(ogImage === DEFAULT_OG_IMAGE
          ? [
            {
              url: `${SITE_URL}${BRAND_LOGO_SQUARE}`,
              width: 512,
              height: 512,
              alt: `${SITE_NAME} Logo`,
            },
          ]
          : []),
      ],
      ...(type === "article" && publishedTime
        ? {
          publishedTime,
          modifiedTime: modifiedTime || publishedTime,
          authors: authors || [SITE_NAME],
        }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImageUrl],
    },
    category: "technology",
    classification: "Business & IT Services",
    other: {
      distribution: "global",
      coverage: "Worldwide",
      rating: "General",
      "revisit-after": "2 days",
    },
  };
}
