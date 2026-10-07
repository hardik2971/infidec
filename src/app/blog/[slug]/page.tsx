import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand, JsonLd, Section, SectionHeading } from "@/components/ui";
import { PostCard, formatDate } from "@/components/cards";
import { getPost, posts } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { SiteImage } from "@/components/site-image";
import { site } from "@/lib/site";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMetadata({ ownImage: true,
    title: p.title,
    description: p.metaDescription,
    path: `/blog/${p.slug}`,
    type: "article",
    publishedTime: p.date,
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author, url: site.url },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <>
      <article>
        <header className="border-b border-line bg-paper">
          <div className="container-x pb-14 pt-10 md:pt-14">
            <Breadcrumbs
              items={[
                { name: "Insights", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <p className="mt-8 text-sm text-muted">
              <span className="font-medium text-violet">{post.category}</span>
              <span aria-hidden="true"> / </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true"> / </span>
              {post.readMinutes} min read
            </p>
            <h1 className="display-2 mt-4 max-w-4xl text-ink">{post.title}</h1>
            <p className="lede mt-6 max-w-3xl">{post.excerpt}</p>
            <p className="mt-6 text-sm text-slate">By {post.author}</p>
            <SiteImage
              id={`blog/${post.slug}`}
              sizes="(min-width: 1240px) calc(100vw - 4rem), 100vw"
              eager
              className="mt-10 aspect-[16/9] w-full rounded-[28px] object-cover md:aspect-[21/9]"
            />
          </div>
        </header>

        <div className="container-x grid gap-14 py-16 lg:grid-cols-[240px_1fr] lg:py-20">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-sm font-semibold text-ink">On this page</p>
              <ol className="mt-4 space-y-2.5 border-l border-line">
                {post.sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${slugify(s.heading)}`}
                      className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-slate hover:border-blue hover:text-blue"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="prose-infidec max-w-[68ch]">
            {post.sections.map((s) => (
              <section key={s.heading} aria-labelledby={slugify(s.heading)}>
                <h2 id={slugify(s.heading)} className="scroll-mt-28">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>

      <Section tone="mist" labelledBy="related-title">
        <SectionHeading id="related-title" title="Keep reading" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {related.map((p) => (
            <PostCard key={p.slug} p={p} />
          ))}
        </div>
      </Section>
      <CtaBand />
      <JsonLd data={jsonLd} />
    </>
  );
}
