import { getPost, posts } from "@/data";
import type { IconName } from "@/components/icon";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "INFIDEC insights article";
export const size = ogSize;
export const contentType = ogContentType;

const categoryIcon: Record<string, IconName> = {
  Engineering: "code",
  "AI & Data": "brain",
  Cloud: "cloud",
  Design: "palette",
  Strategy: "chart",
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  return renderOg({ eyebrow: p ? `Insights / ${p.category}` : "Insights", title: p?.title ?? "INFIDEC insights", subtitle: p ? `${p.readMinutes} min read` : undefined, icon: (p && categoryIcon[p.category]) || "idea" });
}
