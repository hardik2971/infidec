import type { Metadata } from "next";
import { Button, CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";
import { DeliveryStaircase, MvpGantt, QualityGates } from "@/components/infographics";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How We Work: Agile Software Delivery Process",
  description:
    "Discovery, design, two-week sprints, automated QA and continuous delivery. See how INFIDEC runs software projects and keeps you in control at every stage.",
  path: "/process",
});

const phases = [
  {
    name: "Discover",
    time: "1 to 3 weeks",
    what: "Stakeholder workshops, user interviews, current-system review and a prioritised feature map.",
    out: "Scope document, architecture outline, estimate and delivery plan",
  },
  {
    name: "Design",
    time: "2 to 4 weeks, overlapping build",
    what: "User flows, wireframes, a clickable prototype tested with real users and a UI component library.",
    out: "Figma prototype, design system, usability findings",
  },
  {
    name: "Build",
    time: "Two-week sprints",
    what: "Planning, daily stand-ups, code review on every pull request, and a demo of working software every sprint.",
    out: "Deployed increments, sprint report, updated backlog",
  },
  {
    name: "Assure",
    time: "Continuous",
    what: "Automated unit, integration and end-to-end tests grow with the code; exploratory and accessibility testing each sprint.",
    out: "Test reports, coverage trends, defect log",
  },
  {
    name: "Launch",
    time: "1 to 2 weeks",
    what: "Load testing, security review, production cut-over plan, monitoring and alerting, and team training.",
    out: "Go-live checklist, runbooks, dashboards",
  },
  {
    name: "Scale",
    time: "Ongoing",
    what: "Analytics review, performance tuning, roadmap planning and support under an agreed service level.",
    out: "Monthly product report, SLA reporting, roadmap",
  },
];

const rituals = [
  ["Sprint planning", "Every two weeks", "Agree goals and scope for the sprint with your product owner."],
  ["Daily stand-up", "Daily, 15 minutes", "Open to you; blockers raised and resolved the same day."],
  ["Sprint demo", "Every two weeks", "Working software on a staging environment, not slides."],
  ["Retrospective", "Every two weeks", "What to keep, change and stop, with actions tracked."],
  ["Steering review", "Monthly", "Budget, timeline, risks and roadmap with decision makers."],
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        image="hero/process"
        crumbs={[{ name: "How we work", href: "/process" }]}
        title="A delivery process you can see into at any moment"
        intro="Agile done properly: short feedback loops, visible progress and quality built into the pipeline. You always know what was done, what is next and what it costs."
        actions={<Button href="/contact">Start with discovery</Button>}
        aside={<DeliveryStaircase />}
      />
      <Section labelledBy="phases-title">
        <SectionHeading id="phases-title" title="Six stages, from idea to scale" />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {phases.map((p, i) => (
            <li key={p.name} className="flex flex-col rounded-panel border border-line bg-white p-7">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-btn bg-ink font-bold text-white">{i + 1}</span>
                <span className="text-sm text-muted">{p.time}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{p.name}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-slate">{p.what}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm text-ink">
                <span className="font-semibold">You receive: </span>
                {p.out}
              </p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="mist" labelledBy="timeline-title">
        <SectionHeading
          id="timeline-title"
          title="Parallel tracks keep timelines short"
          intro="Design runs a sprint ahead of engineering, and QA automation starts in sprint one rather than at the end."
        />
        <div className="mt-12">
          <MvpGantt />
        </div>
      </Section>
      <Section labelledBy="rituals-title">
        <SectionHeading id="rituals-title" title="Meetings with a purpose" />
        <div className="mt-10 overflow-x-auto rounded-panel border border-line">
          <table className="w-full min-w-[600px] text-left">
            <caption className="sr-only">Delivery rituals and their cadence</caption>
            <thead className="bg-mist text-sm text-muted">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Ritual</th>
                <th scope="col" className="px-6 py-4 font-medium">Cadence</th>
                <th scope="col" className="px-6 py-4 font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rituals.map(([r, c, p]) => (
                <tr key={r}>
                  <th scope="row" className="px-6 py-4 font-semibold text-ink">{r}</th>
                  <td className="px-6 py-4 text-slate">{c}</td>
                  <td className="px-6 py-4 text-slate">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section tone="mist" labelledBy="gates-title">
        <SectionHeading id="gates-title" title="Release quality gates" />
        <div className="mt-12">
          <QualityGates />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
