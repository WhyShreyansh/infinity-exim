import { MetadataRoute } from "next";
import { PRODUCTS_DATA } from "@/data/products";
import { ARTICLES_DATA } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://infinityexim.com";

  const staticRoutes = [
    "",
    "/about",
    "/commodities",
    "/services",
    "/global-reach",
    "/insights",
    "/contact",
    "/request-a-quote",
    "/privacy-policy",
    "/terms"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const productRoutes = PRODUCTS_DATA.map((product) => ({
    url: `${baseUrl}/commodities/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const articleRoutes = ARTICLES_DATA.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
