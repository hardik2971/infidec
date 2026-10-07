import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { PostCard, formatDate } from "@/components/cards";
import { posts } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { SiteImage, hasImage } from "@/components/site-image";

export const metadata: Metadata = pageMetadata({
  title: "Insights: Software Engineering, AI, Cloud and Design",
  description:
    "Practical articles from INFIDEC engineers and designers on software cost, RAG and generative AI, mobile frameworks, legacy modernisation, design systems and FinOps.",
  path: "/blog",
});

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <PageHero
        image="hero/blog"
        crumbs={[{ name: "Insights", href: "/blog" }]}
        title="Insights from the delivery floor"
        intro="Written by the engineers, architects and designers who do the work. No trend-chasing, just what we have learned shipping software."
      />
      <Section labelledBy="posts-title">
        <h2 id="posts-title" className="sr-only">
          Articles
        </h2>
        {lead && (
          <article className="group relative grid gap-8 overflow-hidden rounded-panel border border-line bg-white md:grid-cols-[1fr_1.2fr]">
            {hasImage(`blog/${lead.slug}`) ? (
              <div className="relative min-h-56 overflow-hidden bg-mist">
                <SiteImage
                  id={`blog/${lead.slug}`}
                  sizes="(min-width: 768px) 540px, 100vw"
                  decorative
                  eager
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ) : (
              <div className="brand-gradient relative min-h-48" aria-hidden="true">
                <div className="absolute bottom-6 left-6 grid grid-cols-3 gap-2 opacity-80">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} className="size-6 rounded-[6px] bg-white/30" />
                  ))}
                </div>
              </div>
            )}
            <div className="p-7 md:py-10 md:pr-10 md:pl-0">
              <p className="text-sm text-muted">
                <span className="font-medium text-violet">{lead.category}</span>
                <span aria-hidden="true"> / </span>
                <time dateTime={lead.date}>{formatDate(lead.date)}</time>
              </p>
              <h3 className="display-3 mt-3 text-ink">
                <Link href={`/blog/${lead.slug}`} className="after:absolute after:inset-0 group-hover:text-blue">
                  {lead.title}
                </Link>
              </h3>
              <p className="mt-4 leading-relaxed text-slate">{lead.excerpt}</p>
              <p className="mt-5 text-sm text-muted">{lead.readMinutes} min read</p>
            </div>
          </article>
        )}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <PostCard key={p.slug} p={p} />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
