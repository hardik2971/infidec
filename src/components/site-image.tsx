import Image from "next/image";
import generated from "@/data/image-manifest.json";

type Entry = { src: string; width: number; height: number; alt: string };
const images = generated as Record<string, Entry>;

/** True once `npm run images` has produced the image for this id. */
export const hasImage = (id: string) => id in images;

/** Plain image data (for passing to client components), or undefined if missing. */
export const imageData = (id: string) => {
  const e = images[id];
  return e ? { src: e.src, width: e.width, height: e.height } : undefined;
};

/**
 * Renders a generated image by manifest id (see scripts/images.manifest.mjs).
 * Renders nothing until the image exists, so layouts stay intact before generation.
 */
export function SiteImage({
  id,
  sizes,
  className = "",
  eager = false,
  decorative = false,
}: {
  id: string;
  sizes: string;
  className?: string;
  /** Above-the-fold images: load early with high priority */
  eager?: boolean;
  /** Purely decorative next to text that already says the same thing */
  decorative?: boolean;
}) {
  const e = images[id];
  if (!e) return null;
  return (
    <Image
      src={e.src}
      width={e.width}
      height={e.height}
      alt={decorative ? "" : e.alt}
      sizes={sizes}
      className={className}
      {...(eager ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
    />
  );
}
