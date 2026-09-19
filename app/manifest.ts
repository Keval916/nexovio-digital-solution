import { MetadataRoute } from "next";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | ${SITE_TAGLINE}`,
    short_name: "Nexovio",
    description:
      "Nexovio Digital Solutions provides strategy-led custom web development, bespoke web design, UI/UX systems, brand graphic design, and organic digital marketing services.",
    start_url: "/",
    display: "standalone",
    background_color: "#03050A",
    theme_color: "#03050A",
    icons: [
      {
        src: "/images/brand/nexovio-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/images/brand/nexovio-digital-solutions-logo.svg",
        sizes: "500x500",
        type: "image/svg+xml",
      },
    ],
  };
}
