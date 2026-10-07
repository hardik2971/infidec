import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Breadcrumbs, CtaBand, JsonLd, Section, SectionHeading } from "@/components/ui";
import { CaseStudyCard } from "@/components/cards";
import { caseStudies, getCaseStudy, getIndustry, servicesIn } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { SiteImage } from "@/components/site-image";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return pageMetadata({ ownImage: true, title: c.title, description: c.metaDescription, path: `/case-studies/${c.slug}`, type: "article" });
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();
  const industry = getIndustry(c.industry);
  const svc = servicesIn(c.services);
  const more = caseStudies.filter((o) => o.slug !== c.slug).slice(0, 3);

  const facts = [
    { k: "Client", v: c.client },
    { k: "Industry", v: industry?.name ?? "" },
    { k: "Region", v: c.region },
    { k: "Duration", v: c.duration },
    { k: "Team", v: c.team },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.metaDescription,
    url: `${site.url}/case-studies/${c.slug}`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    about: industry?.name,
  };

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="container-x pb-14 pt-10 md:pt-14">
          <Breadcrumbs
            items={[
              { name: "Case studies", href: "/case-studies" },
              { name: c.title, href: `/case-studies/${c.slug}` },
            ]}
          />
          <p className="mt-8 font-medium text-violet">{industry?.name}</p>
          <h1 className="display-2 mt-3 max-w-4xl text-ink">{c.title}</h1>
          <p className="lede mt-6 max-w-3xl">{c.summary}</p>

          <dl className="mt-12 grid overflow-hidden rounded-panel bg-ink text-white sm:grid-cols-3">
            {c.results.map((r, i) => (
              <div
                key={r.label}
                className={`p-7 md:p-9 ${i > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}
              >
                <dt className="sr-only">{r.label}</dt>
                <dd>
                  <span className={`font-display block text-5xl font-bold tracking-tight md:text-6xl ${i === 0 ? "text-cyan" : ""}`}>
                    {r.value}
                  </span>
                  <span className="mt-3 block text-white/80">{r.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <SiteImage
            id={`case/${c.slug}`}
            sizes="(min-width: 1240px) calc(100vw - 4rem), 100vw"
            className="mt-6 aspect-[16/9] w-full rounded-panel object-cover md:aspect-[21/9]"
          />
        </div>
      </section>

      <Section labelledBy="story-title">
        <div className="grid gap-14 lg:grid-cols-[1fr_320px]">
          <div className="max-w-3xl">
            <h2 id="story-title" className="display-3 text-ink">
              The challenge
            </h2>
            <div className="prose-infidec mt-5">
              {c.challenge.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <h2 className="display-3 mt-14 text-ink">Our approach</h2>
            <div className="prose-infidec mt-5">
              {c.solution.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <h2 className="display-3 mt-14 text-ink">What we delivered</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {c.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-btn bg-mist p-4 text-ink">
                  <Check className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-panel border border-line p-6">
              <h2 className="font-semibold text-ink">Project facts</h2>
              <dl className="mt-4 space-y-4">
                {facts.map((f) => (
                  <div key={f.k}>
                    <dt className="text-sm text-muted">{f.k}</dt>
                    <dd className="mt-0.5 text-[0.9375rem] text-ink">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-panel border border-line p-6">
              <h2 className="font-semibold text-ink">Services</h2>
              <ul className="mt-3 space-y-2">
                {svc.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-[0.9375rem] text-blue hover:text-blue-deep">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className="mt-6 font-semibold text-ink">Technology</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {c.stack.map((t) => (
                  <li key={t} className="rounded-chip bg-mist px-2.5 py-1 text-sm text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="mist" labelledBy="more-title">
        <SectionHeading id="more-title" title="More case studies" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {more.map((o) => (
            <CaseStudyCard key={o.slug} c={o} />
          ))}
        </div>
      </Section>
      <CtaBand title="Facing a similar challenge?" />
      <JsonLd data={jsonLd} />
    </>
  );
}
