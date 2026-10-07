import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { Button, CtaBand, FaqList, PageHero, Section, SectionHeading } from "@/components/ui";
import { TeamStructure } from "@/components/infographics";
import { Icon, type IconName } from "@/components/icon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hire Dedicated Developers: React, Node, Python, AI",
  description:
    "Hire vetted dedicated developers, designers, QA and DevOps engineers from INFIDEC. Interview candidates, start in two to three weeks and scale as you need.",
  path: "/hire-developers",
});

const roles: { group: string; icon: IconName; titles: string[] }[] = [
  { group: "Frontend", icon: "monitor", titles: ["React developers", "Next.js developers", "Angular developers", "Vue.js developers"] },
  { group: "Backend", icon: "server", titles: ["Node.js developers", "Python developers", ".NET developers", "Java developers", "PHP Laravel developers", "Go developers"] },
  { group: "Mobile", icon: "mobile", titles: ["iOS developers", "Android developers", "Flutter developers", "React Native developers"] },
  { group: "AI and data", icon: "brain", titles: ["AI/ML engineers", "LLM and RAG engineers", "Data engineers", "BI developers"] },
  { group: "Cloud and quality", icon: "cloud", titles: ["DevOps engineers", "Cloud architects", "QA automation engineers", "Performance testers"] },
  { group: "Product", icon: "palette", titles: ["UI/UX designers", "Product managers", "Business analysts", "Scrum masters"] },
];

const steps = [
  ["Share your needs", "Roles, seniority, stack, time zone and start date. A 30-minute call is enough."],
  ["Review profiles", "We send matched profiles within days, with code samples and project history."],
  ["Interview", "You interview and run any technical assessment you like. You choose who joins."],
  ["Onboard", "Equipment, access and security policies set up, typically within two to three weeks of selection."],
  ["Scale", "Add or release roles with agreed notice as the roadmap changes."],
];

const compare: { label: string; values: [boolean, boolean, boolean] }[] = [
  { label: "Start in weeks, not months", values: [false, true, true] },
  { label: "Vetted for skills and communication", values: [true, false, true] },
  { label: "Replacement guaranteed if someone leaves", values: [false, false, true] },
  { label: "Tech lead and QA oversight included", values: [true, false, true] },
  { label: "No recruiting, HR or equipment overhead", values: [false, true, true] },
  { label: "IP and code fully assigned to you", values: [true, false, true] },
];

const faqs = [
  {
    q: "Do the developers work only on my project?",
    a: "Yes. Dedicated developers are assigned full time to your product and work in your tools, rituals and time-zone overlap window.",
  },
  {
    q: "Can I hire a single developer?",
    a: "Yes. Many clients start with one or two engineers and grow to a full team. A tech lead from our side reviews work even for single-developer engagements.",
  },
  {
    q: "Is there a trial period?",
    a: "Engagements include an initial two-week period. If a developer is not the right fit, we replace them at no extra cost.",
  },
  {
    q: "How do you protect our code and data?",
    a: "NDAs and IP assignment are signed before work starts. Developers use managed devices, least-privilege access and your security policies.",
  },
];

function Yes({ v }: { v: boolean }) {
  return v ? (
    <span role="img" aria-label="Yes">
      <Check className="size-5 text-blue" aria-hidden="true" />
    </span>
  ) : (
    <span role="img" aria-label="No">
      <Minus className="size-5 text-muted" aria-hidden="true" />
    </span>
  );
}

export default function HirePage() {
  return (
    <>
      <PageHero
        image="hero/hire-developers"
        crumbs={[{ name: "Hire developers", href: "/hire-developers" }]}
        title="Hire dedicated developers who work like your own team"
        intro="Vetted engineers, designers and QA specialists, assigned full time to your product. You interview them, set the priorities and keep all the IP."
        actions={
          <>
            <Button href="/contact">Request profiles</Button>
            <Button href="/engagement-models" variant="secondary">
              Compare models
            </Button>
          </>
        }
      />
      <Section labelledBy="roles-title">
        <SectionHeading id="roles-title" title="Roles you can hire" intro="Junior to principal level, across 30+ technologies." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.group} className="rounded-panel border border-line bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-btn bg-haze text-blue">
                  <Icon name={r.icon} className="size-8" />
                </span>
                <h3 className="text-lg font-semibold text-ink">{r.group}</h3>
              </div>
              <ul className="mt-5 space-y-2">
                {r.titles.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-slate">
                    <span className="size-1.5 rounded-[2px] bg-blue" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="mist" labelledBy="steps-title">
        <SectionHeading id="steps-title" title="From first call to first commit" />
        <ol className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative">
              {i < steps.length - 1 && (
                <span aria-hidden="true" className="absolute left-12 right-0 top-6 hidden h-px bg-blue/40 lg:block" />
              )}
              <span
                className={`relative grid size-12 place-items-center rounded-btn text-lg font-bold text-white ${
                  i === steps.length - 1 ? "brand-gradient" : "bg-ink"
                }`}
              >
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{t}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section labelledBy="compare-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <SectionHeading id="compare-title" title="How it compares" />
            <div className="mt-10 overflow-x-auto rounded-panel border border-line">
              <table className="w-full min-w-[520px] text-left">
                <caption className="sr-only">In-house hiring vs freelancers vs INFIDEC dedicated team</caption>
                <thead className="bg-mist text-sm">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-medium text-muted">
                      &nbsp;
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold text-ink">In-house hire</th>
                    <th scope="col" className="px-4 py-4 font-semibold text-ink">Freelancer</th>
                    <th scope="col" className="px-4 py-4 font-semibold text-blue">INFIDEC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {compare.map((r) => (
                    <tr key={r.label}>
                      <th scope="row" className="px-5 py-4 text-[0.9375rem] font-medium text-ink">
                        {r.label}
                      </th>
                      {r.values.map((v, i) => (
                        <td key={i} className={`px-4 py-4 ${i === 2 ? "bg-haze/60" : ""}`}>
                          <Yes v={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <TeamStructure />
        </div>
      </Section>
      <Section tone="mist" labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="faq-title" title="Hiring questions" />
          <FaqList faqs={faqs} />
        </div>
      </Section>
      <CtaBand title="Tell us the roles you need" intro="Share your stack and seniority. We will send matched profiles you can interview this week." />
    </>
  );
}
