import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const revalidate = 0;

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
