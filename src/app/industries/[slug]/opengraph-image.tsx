import { getIndustry, industries } from "@/data";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "INFIDEC industry solutions";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const i = getIndustry((await params).slug);
  return renderOg({ eyebrow: "Industries", title: i ? `Software for ${i.name.toLowerCase()}` : "Industry solutions", subtitle: i?.short, icon: i?.icon });
}
