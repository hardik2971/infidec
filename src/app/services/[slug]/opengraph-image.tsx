import { getService, services } from "@/data";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "INFIDEC service";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  return renderOg({ eyebrow: s ? `Services / ${s.category}` : "Services", title: s?.name ?? "Software development services", subtitle: s?.short, icon: s?.icon });
}
