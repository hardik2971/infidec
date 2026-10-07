import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { QualityGates } from "@/components/infographics";
import { serviceCategories, services } from "@/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Software Development Services",
  description:
    "Custom software, web and mobile apps, UI/UX design, AI and generative AI, data, cloud and DevOps, QA and dedicated teams. Explore INFIDEC's 15 services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="hero/services"
        crumbs={[{ name: "Services", href: "/services" }]}
        title="Software development services, end to end"
        intro="Fifteen services organised into six practices. Start with the one you need today; the rest of the team is ready when the product grows."
        actions={
          <>
            <Button href="/contact">Discuss your project</Button>
            <Button href="/engagement-models" variant="secondary">
              Engagement models
            </Button>
          </>
        }
      />

      <nav aria-label="Service practices" className="sticky top-[calc(var(--header-offset)_+_8px)] z-30 border-b border-line bg-white/95 backdrop-blur">
        <ul className="container-x flex gap-2 overflow-x-auto py-3">
          {serviceCategories.map((c) => (
            <li key={c.name}>
              <a
                href={`#${c.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="block whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-blue hover:text-blue"
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {serviceCategories.map((cat, idx) => {
        const id = cat.name.toLowerCase().replace(/[^a-z]+/g, "-");
        return (
          <Section key={cat.name} tone={idx % 2 ? "mist" : "paper"} labelledBy={id} className="scroll-mt-32">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="lg:sticky lg:top-40 lg:self-start">
                <h2 id={id} className="display-3 scroll-mt-40 text-ink">
                  {cat.name}
                </h2>
                <p className="mt-3 max-w-sm leading-relaxed text-slate">{cat.blurb}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {services
                  .filter((s) => s.category === cat.name)
                  .map((s) => (
                    <ServiceCard key={s.slug} s={s} />
                  ))}
              </div>
            </div>
          </Section>
        );
      })}

      <Section labelledBy="gates-title">
        <SectionHeading
          id="gates-title"
          title="The same quality bar on every service"
          intro="Whichever service you choose, releases pass the same six gates."
        />
        <div className="mt-12">
          <QualityGates />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
