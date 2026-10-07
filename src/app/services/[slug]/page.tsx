import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Button, CtaBand, FaqList, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { CaseStudyCard, ServiceCard } from "@/components/cards";
import { Icon } from "@/components/icon";
import { SiteImage } from "@/components/site-image";
import { caseStudies, getService, industriesIn, services } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ ownImage: true, title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = caseStudies.filter((c) => c.services.includes(s.slug)).slice(0, 3);
  const siblings = services.filter((o) => o.category === s.category && o.slug !== s.slug).slice(0, 3);
  const fillers = services.filter((o) => o.category !== s.category && o.slug !== s.slug);
  const moreServices = [...siblings, ...fillers].slice(0, 3);
  const inds = industriesIn(s.industries);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: `${site.url}/services/${s.slug}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.name} offerings`,
      itemListElement: s.offerings.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o.title, description: o.desc },
      })),
    },
  };

  return (
    <>
      <PageHero
        image={`hero/service-${s.category.toLowerCase().replace(/[^a-z]+/g, "-")}`}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: s.name, href: `/services/${s.slug}` },
        ]}
        title={s.heroTitle}
        intro={s.intro}
        actions={
          <>
            <Button href="/contact">Get a proposal</Button>
            <Button href="/case-studies" variant="secondary">
              See case studies
            </Button>
          </>
        }
        aside={
          <aside aria-labelledby="deliverables-title" className="rounded-panel border border-line bg-mist p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-btn bg-white ring-1 ring-line">
                <Icon name={s.icon} className="size-10" />
              </span>
              <div>
                <p className="text-sm text-muted">{s.category}</p>
                <h2 id="deliverables-title" className="font-semibold text-ink">
                  What you receive
                </h2>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-[0.9375rem] text-ink">
                  <Check className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </aside>
        }
      />

      <Section labelledBy="offerings-title">
        <SiteImage
          id={`service/${s.slug}`}
          sizes="(min-width: 1240px) calc(100vw - 4rem), 100vw"
          className="mb-16 aspect-[16/9] w-full rounded-[28px] object-cover md:aspect-[21/9] md:mb-20"
        />
        <SectionHeading
          id="offerings-title"
          title="What's included"
          intro={`The ${s.offerings.length} areas this service covers. Take one, or combine them into a single engagement.`}
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-panel border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {s.offerings.map((o) => (
            <div key={o.title} className="bg-white p-7">
              <h3 className="text-lg font-semibold text-ink">{o.title}</h3>
              <p className="mt-3 leading-relaxed text-slate">{o.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="process-title">
        <SectionHeading
          id="process-title"
          title="How the engagement runs"
          intro="Five stages, each ending with something you can review and approve."
        />
        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {s.process.map((p, i) => (
            <li key={p.title} className="relative">
              {i < s.process.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-12 right-0 top-6 hidden h-px bg-gradient-to-r from-blue/60 to-cyan/60 lg:block"
                />
              )}
              <span
                className={`relative grid size-12 place-items-center rounded-btn text-lg font-bold text-white ${
                  i === s.process.length - 1 ? "brand-gradient" : "bg-ink"
                }`}
              >
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{p.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="outcomes-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading id="outcomes-title" title="Why teams choose INFIDEC for this" />
            <h3 className="mt-10 font-semibold text-ink">Technologies we use</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.techs.map((t) => (
                <li key={t} className="rounded-chip bg-mist px-3 py-1.5 text-sm font-medium text-ink">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {s.outcomes.map((o) => (
              <div key={o.title} className="rounded-panel border border-line p-6">
                <span className="block h-1 w-10 rounded-full bg-blue" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-ink">{o.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {inds.length > 0 && (
        <Section tone="mist" labelledBy="industries-title">
          <SectionHeading id="industries-title" title="Industries where we deliver this" />
          <ul className="mt-10 flex flex-wrap gap-3">
            {inds.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2.5 font-medium text-ink hover:border-blue hover:text-blue"
                >
                  <Icon name={i.icon} className="size-6" float={false} />
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {related.length > 0 && (
        <Section labelledBy="cases-title">
          <SectionHeading id="cases-title" title="Related case studies" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {related.map((c) => (
              <CaseStudyCard key={c.slug} c={c} />
            ))}
          </div>
        </Section>
      )}

      <Section tone={related.length > 0 ? "mist" : "paper"} labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="faq-title" title="Frequently asked questions" />
          <FaqList faqs={s.faqs} />
        </div>
      </Section>

      <Section labelledBy="more-title">
        <SectionHeading id="more-title" title="Related services" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {moreServices.map((o) => (
            <ServiceCard key={o.slug} s={o} />
          ))}
        </div>
      </Section>

      <CtaBand title="Planning a project? Let's scope it together." />
      <JsonLd data={jsonLd} />
    </>
  );
}
