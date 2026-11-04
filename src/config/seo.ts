import type { Metadata } from "next";
import { site } from "./site";

/** Full page metadata: title, description, canonical URL and social-share tags. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${site.brand}`;
  // A page that sets its own openGraph loses the site-wide share image, so add it back.
  const images = [
    { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.brand} — ${site.tagline}` },
  ];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.brand,
      locale: "en_IN",
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images },
  };
}
