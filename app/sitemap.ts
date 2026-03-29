import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
