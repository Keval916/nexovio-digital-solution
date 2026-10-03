import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "@/src/index.css";
import SiteChrome from "@/src/components/common/SiteChrome";
import { GoogleTagManager } from "@/src/components/analytics/GoogleTagManager";
import { GoogleAnalytics } from "@/src/components/analytics/GoogleAnalytics";
import { getOrganizationSchema, getWebSiteSchema } from "@/src/lib/schema";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, DEFAULT_OG_IMAGE } from "@/src/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["600", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Web Development Company | AI, Web Design & SEO | Nexovio", template: "%s" },
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  classification: "Business & IT Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : {}),
      ...(process.env.NEXT_PUBLIC_BAIDU_VERIFICATION ? { "baidu-site-verification": process.env.NEXT_PUBLIC_BAIDU_VERIFICATION } : {}),
    },
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon-32x32.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        {/* Favicon & touch icons — explicit for Google crawler */}
        <link rel="icon" href="/favicon-48x48.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00C6FF" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="2 days" />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable} ${playfair.variable} min-h-screen bg-background text-foreground selection:bg-brand-bright selection:text-white flex flex-col font-sans transition-colors duration-300`}>
        <GoogleTagManager />
        <GoogleAnalytics />
        <SiteChrome>{children}</SiteChrome>
        {/* Tawk.to Live Chat Script */}
        <Script
          id="tawk-to-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6aaf91985454c934401856d2/1k2ut1ff4';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
