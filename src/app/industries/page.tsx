import type { Metadata } from "next";
import Link from "next/link";
import { Button, CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icon";
import { industries, servicesIn } from "@/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "Software development for healthcare, fintech, retail, education, logistics, real estate, manufacturing and travel, built around each sector's standards.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        image="hero/industries"
        crumbs={[{ name: "Industries", href: "/industries" }]}
        title="Software for regulated, complex and fast-moving industries"
        intro="Each sector has its own standards, legacy systems and user expectations. Our teams bring that context with them, so less of your budget goes on explaining the domain."
        actions={<Button href="/contact">Talk to an industry lead</Button>}
      />
      <Section labelledBy="list-title">
        <h2 id="list-title" className="sr-only">
          Industries
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {industries.map((i) => (
            <article
              key={i.slug}
              className="group relative flex flex-col rounded-panel border border-line bg-white p-7 transition-colors hover:border-blue/40 md:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-btn bg-haze">
                  <Icon name={i.icon} className="size-10" />
                </span>
                <h3 className="text-xl font-semibold text-ink">
                  <Link href={`/industries/${i.slug}`} className="after:absolute after:inset-0">
                    {i.name}
                  </Link>
                </h3>
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-slate">{i.short}</p>
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-sm text-muted">Standards we design for</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {i.compliance.slice(0, 4).map((c) => (
                    <li key={c} className="rounded-chip bg-mist px-2.5 py-1 text-xs font-medium text-ink">
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate">
                  Common services:{" "}
                  {servicesIn(i.services)
                    .slice(0, 3)
                    .map((s) => s.name)
                    .join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="mist" labelledBy="other-title">
        <SectionHeading
          id="other-title"
          title="Your industry is not listed?"
          intro="We also work with media, energy, legal, nonprofit and public-sector teams. Tell us about your domain and we will match you with engineers who have shipped in it."
        />
        <div className="mt-8">
          <Button href="/contact">Tell us about your project</Button>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
