import type { MetadataRoute } from "next";
import { BUSINESS, SERVICES } from "@/lib/site";
import { ALL_CONTENT } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/service-areas/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy-policy/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-service/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];

  const seen = new Set<string>();
  const out: MetadataRoute.Sitemap = [...staticPages];

  const push = (path: string, priority: number) => {
    const url = `${base}${path}`;
    if (seen.has(url)) return;
    seen.add(url);
    out.push({
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority,
    });
  };

  SERVICES.forEach((s) => push(`/${s.slug}/`, 0.9));
  ALL_CONTENT.forEach((c) => push(`/${c.slug}/`, 0.8));

  return out;
}
