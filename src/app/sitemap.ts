import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Static export (Netlify): generate this file once at build time.
export const dynamic = "force-static";

// Fixed date so the sitemap is built once at build time; bump it when content changes.
const lastModified = new Date("2026-11-04");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/cloud-compliance", priority: 0.9 },
    { path: "/foodsafe", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
