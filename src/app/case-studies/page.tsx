import type { Metadata } from "next";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { CaseStudyCard } from "@/components/cards";
import { caseStudies } from "@/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies: Software, AI and Cloud Projects",
  description:
    "How INFIDEC teams delivered telehealth, lending, commerce, logistics, edtech and manufacturing platforms, and the results clients measured after launch.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        image="hero/case-studies"
        crumbs={[{ name: "Case studies", href: "/case-studies" }]}
        title="Work that moved a number someone cared about"
        intro="Each case study covers the problem, the approach and the result the client measured. Client names are withheld under NDA; we share references on request."
      />
      <Section labelledBy="cases-title">
        <h2 id="cases-title" className="sr-only">
          All case studies
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.slug} c={c} />
          ))}
        </div>
      </Section>
      <CtaBand title="Want results like these?" />
    </>
  );
}
