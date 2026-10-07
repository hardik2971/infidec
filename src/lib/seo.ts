import type { Metadata } from "next";
import { site } from "./site";

/** Site-wide share image (src/app/opengraph-image.tsx). Detail pages override it with their own opengraph-image file. */
const defaultOgImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: AI-accelerated software engineering` };

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  ownImage = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** True when the route has its own opengraph-image file, which must not be overridden */
  ownImage?: boolean;
}): Metadata {
  const url = path === "/" ? "/" : path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: site.name,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
      ...(ownImage ? {} : { images: [defaultOgImage] }),
    },
    twitter: { card: "summary_large_image", title, description, ...(ownImage ? {} : { images: [defaultOgImage.url] }) },
  };
}
