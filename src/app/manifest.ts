import type { MetadataRoute } from "next";
import { business } from "@/config/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} — Web Design & Development`,
    short_name: business.shortName,
    description:
      "Independent web design and development studio building custom business websites, e-commerce experiences and SEO-ready digital platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1e9",
    theme_color: "#f4f1e9",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
