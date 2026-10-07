import { caseStudies, getCaseStudy, getIndustry } from "@/data";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "INFIDEC case study";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCaseStudy((await params).slug);
  const ind = c ? getIndustry(c.industry) : undefined;
  return renderOg({ eyebrow: ind ? `Case study / ${ind.name}` : "Case study", title: c?.shortTitle ?? "Case study", subtitle: c?.summary, icon: ind?.icon ?? "award" });
}
