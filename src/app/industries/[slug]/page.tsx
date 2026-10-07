import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { Button, CtaBand, FaqList, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { CaseStudyCard, IndustryCard, ServiceCard } from "@/components/cards";
import { caseStudies, getIndustry, industries, servicesIn } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { SiteImage } from "@/components/site-image";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return pageMetadata({ ownImage: true, title: i.metaTitle, description: i.metaDescription, path: `/industries/${i.slug}` });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const svc = servicesIn(ind.services);
  const cases = caseStudies.filter((c) => c.industry === ind.slug);
  const others = industries.filter((o) => o.slug !== ind.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${ind.name} software development`,
    description: ind.metaDescription,
    url: `${site.url}/industries/${ind.slug}`,
    provider: { "@id": `${site.url}/#organization` },
    audience: { "@type": "BusinessAudience", name: ind.name },
  };

  return (
    <>
      <PageHero
        image={`hero/industry/${ind.slug}`}
        crumbs={[
          { name: "Industries", href: "/industries" },
          { name: ind.name, href: `/industries/${ind.slug}` },
        ]}
        title={ind.heroTitle}
        intro={ind.intro}
        actions={
          <>
            <Button href="/contact">Discuss your project</Button>
            <Button href="#solutions" variant="secondary">
              What we build
            </Button>
          </>
        }
        aside={
          <aside aria-labelledby="compliance-title" className="rounded-panel border border-line bg-mist p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-btn bg-white ring-1 ring-line">
                <Icon name="shield" className="size-10" />
              </span>
              <h2 id="compliance-title" className="font-semibold text-ink">
                Standards and regulations we design for
              </h2>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {ind.compliance.map((c) => (
                <li key={c} className="rounded-btn bg-white px-3 py-2.5 text-sm font-medium text-ink ring-1 ring-line">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted">
              We build to these requirements and support your audits. Certification remains with your organisation.
            </p>
          </aside>
        }
      />

      <Section labelledBy="challenges-title">
        <SiteImage
          id={`industry/${ind.slug}`}
          sizes="(min-width: 1240px) calc(100vw - 4rem), 100vw"
          className="mb-16 aspect-[16/9] w-full rounded-[28px] object-cover md:aspect-[21/9] md:mb-20"
        />
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            id="challenges-title"
            title="The problems we are usually called in to solve"
            intro="What teams in this sector tell us in the first workshop."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {ind.challenges.map((c) => (
              <li key={c.title} className="rounded-panel border border-line border-l-4 border-l-violet bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{c.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="mist" labelledBy="solutions-title" className="scroll-mt-20">
        <div id="solutions" className="scroll-mt-28" />
        <SectionHeading id="solutions-title" title="Solutions we build" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-panel border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {ind.solutions.map((s) => (
            <div key={s.title} className="bg-white p-7">
              <span className="block h-1 w-10 rounded-full bg-blue" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="svc-title">
        <SectionHeading id="svc-title" title="Services we deliver in this sector" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {svc.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      {cases.length > 0 && (
        <Section tone="mist" labelledBy="cases-title">
          <SectionHeading id="cases-title" title="Recent work in this industry" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {cases.map((c) => (
              <CaseStudyCard key={c.slug} c={c} />
            ))}
          </div>
        </Section>
      )}

      <Section labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="faq-title" title="Frequently asked questions" />
          <FaqList faqs={ind.faqs} />
        </div>
      </Section>

      <Section tone="mist" labelledBy="others-title">
        <SectionHeading id="others-title" title="Other industries" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <IndustryCard key={o.slug} i={o} />
          ))}
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={jsonLd} />
    </>
  );
}
