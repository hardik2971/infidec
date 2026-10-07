import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { caseStudies, industries, posts, services } from "@/data";

const staticRoutes: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
  ["/", 1, "weekly"],
  ["/services", 0.9, "monthly"],
  ["/industries", 0.8, "monthly"],
  ["/case-studies", 0.8, "monthly"],
  ["/technologies", 0.7, "monthly"],
  ["/hire-developers", 0.8, "monthly"],
  ["/engagement-models", 0.7, "monthly"],
  ["/process", 0.6, "monthly"],
  ["/about", 0.7, "monthly"],
  ["/careers", 0.6, "weekly"],
  ["/blog", 0.7, "weekly"],
  ["/contact", 0.8, "yearly"],
  ["/privacy-policy", 0.2, "yearly"],
  ["/terms", 0.2, "yearly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = posts.map((p) => p.date).sort().at(-1);
  return [
    ...staticRoutes.map(([path, priority, changeFrequency]) => ({
      url: `${site.url}${path === "/" ? "" : path}`,
      priority,
      changeFrequency,
      ...(path === "/blog" && latestPost ? { lastModified: latestPost } : {}),
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    ...industries.map((i) => ({
      url: `${site.url}/industries/${i.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...caseStudies.map((c) => ({
      url: `${site.url}/case-studies/${c.slug}`,
      priority: 0.7,
      changeFrequency: "yearly" as const,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.date,
      priority: 0.6,
      changeFrequency: "yearly" as const,
    })),
  ];
}
