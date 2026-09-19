import { MetadataRoute } from "next";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Nexovio",
    description: `${SITE_NAME} - ${SITE_TAGLINE}`,
    start_url: "/",
    display: "standalone",
    background_color: "#001025",
    theme_color: "#00C6FF",
    icons: [
      {
        src: "/images/brand/nexovio-favicon-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
