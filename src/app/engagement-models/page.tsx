import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Button, CtaBand, FaqList, PageHero, Section, SectionHeading } from "@/components/ui";
import { EngagementCompare, engagementModels } from "@/components/infographics";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Engagement Models: Dedicated Team, Fixed Price, T&M",
  description:
    "Compare INFIDEC's dedicated team, fixed price and time and materials models on flexibility, budget predictability, speed and control to choose the right fit.",
  path: "/engagement-models",
});

const rows: { label: string; values: [boolean | string, boolean | string, boolean | string] }[] = [
  { label: "Scope can change mid-project", values: [true, "Via change request", true] },
  { label: "Fixed total budget", values: ["Monthly cap", true, "Optional cap"] },
  { label: "You prioritise the backlog", values: [true, "Within agreed scope", true] },
  { label: "Team scales up or down", values: [true, false, true] },
  { label: "Discovery phase required", values: ["Recommended", true, "Recommended"] },
  { label: "Typical minimum", values: ["3 months", "Defined MVP", "1 month"] },
];

const faqs = [
  {
    q: "Can we switch models later?",
    a: "Yes. A common path is a fixed-price discovery and MVP, followed by a dedicated team for ongoing development once the product has users and a changing roadmap.",
  },
  {
    q: "How are rates set?",
    a: "Rates depend on role, seniority and engagement length. You receive a transparent rate card per role in the proposal, with no hidden management fees.",
  },
  {
    q: "What happens if a team member leaves?",
    a: "We provide a replacement with a handover period at our cost, and documentation standards keep knowledge in the project rather than in one person's head.",
  },
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return (<span role="img" aria-label="Yes"><Check className="size-5 text-blue" aria-hidden="true" /></span>);
  if (v === false) return (<span role="img" aria-label="No"><X className="size-5 text-muted" aria-hidden="true" /></span>);
  return <span className="text-sm text-slate">{v}</span>;
}

export default function EngagementModelsPage() {
  return (
    <>
      <PageHero
        image="hero/engagement-models"
        crumbs={[{ name: "Engagement models", href: "/engagement-models" }]}
        title="Three ways to work together"
        intro="Choose by how certain your scope is and how much control you want day to day. We will recommend one honestly, even if it is the smaller contract."
        actions={<Button href="/contact">Get a recommendation</Button>}
      />
      <Section labelledBy="compare-title">
        <SectionHeading id="compare-title" title="Side by side" />
        <div className="mt-12">
          <EngagementCompare />
        </div>
      </Section>
      <Section tone="mist" labelledBy="table-title">
        <SectionHeading id="table-title" title="The details" />
        <div className="mt-10 overflow-x-auto rounded-panel border border-line bg-white">
          <table className="w-full min-w-[640px] text-left">
            <caption className="sr-only">Engagement model comparison</caption>
            <thead className="bg-mist">
              <tr>
                <th scope="col" className="px-6 py-4 text-sm font-medium text-muted">
                  Feature
                </th>
                {engagementModels.map((m) => (
                  <th key={m.name} scope="col" className="px-6 py-4 font-semibold text-ink">
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className="px-6 py-4 font-medium text-ink">
                    {r.label}
                  </th>
                  {r.values.map((v, i) => (
                    <td key={i} className="px-6 py-4">
                      <Cell v={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="faq-title" title="Common questions" />
          <FaqList faqs={faqs} />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
