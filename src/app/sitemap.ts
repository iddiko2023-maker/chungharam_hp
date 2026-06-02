import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://cheongharam.co.kr";
  return ["", "/about", "/products", "/donation", "/donation/apply", "/business", "/news", "/notice", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
