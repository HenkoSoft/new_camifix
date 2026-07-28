import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: siteConfig.lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
