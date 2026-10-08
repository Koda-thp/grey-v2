import type { MetadataRoute } from "next";
import { cities } from "@/lib/data/cities";
import { legalPages } from "@/lib/data/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agence-grey.fr";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/villes/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalPages.map((page) => ({
    url: `${baseUrl}/mentions/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticRoutes, ...cityRoutes, ...legalRoutes];
}
