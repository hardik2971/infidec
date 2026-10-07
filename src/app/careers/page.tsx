import type { Metadata } from "next";
import { Button, CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icon";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { SiteImage, hasImage } from "@/components/site-image";

export const metadata: Metadata = pageMetadata({
  title: "Careers at INFIDEC: Software Engineering Jobs",
  description:
    "Join INFIDEC to build real products with senior mentors, a learning budget and flexible work. See open roles in engineering, AI, design, QA and DevOps.",
  path: "/careers",
});

const perks: { title: string; desc: string; icon: IconName }[] = [
  { title: "Learning budget", desc: "Paid certifications, courses and conference tickets every year.", icon: "education" },
  { title: "Flexible work", desc: "Hybrid working with core collaboration hours and remote-friendly tooling.", icon: "globe" },
  { title: "Senior mentorship", desc: "Every engineer has a tech lead and a structured growth plan.", icon: "users" },
  { title: "Health cover", desc: "Medical insurance for you and your family.", icon: "health" },
  { title: "Real products", desc: "Ship software used by real customers, not internal busywork.", icon: "rocket" },
  { title: "Modern stack", desc: "Current frameworks, cloud platforms and AI tooling on every project.", icon: "cpu" },
];

/** VERIFY: replace with live openings before launch. */
const openings = [
  { title: "Senior full-stack engineer (React, Node.js)", team: "Engineering", type: "Full time", exp: "5+ years" },
  { title: "AI engineer (LLM, RAG, Python)", team: "Data & AI", type: "Full time", exp: "3+ years" },
  { title: "Flutter developer", team: "Mobile", type: "Full time", exp: "3+ years" },
  { title: "DevOps engineer (AWS, Kubernetes)", team: "Cloud", type: "Full time", exp: "4+ years" },
  { title: "Senior product designer", team: "Design", type: "Full time", exp: "5+ years" },
  { title: "QA automation engineer (Playwright)", team: "Quality", type: "Full time", exp: "3+ years" },
];

const hiring = [
  ["Apply", "Send your CV and, if you have one, a link to code or design work."],
  ["Intro call", "30 minutes with the hiring team about your experience and goals."],
  ["Practical task", "A short exercise, under three hours, close to real project work."],
  ["Team interview", "Discuss your solution with the people you would work with."],
  ["Offer", "A decision within a week of your final interview."],
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        image="hero/careers"
        crumbs={[{ name: "Careers", href: "/careers" }]}
        title="Do the best work of your career on products that ship"
        intro="We hire curious engineers, designers and testers who like ownership and clear feedback. You will work on real client products with senior people who want you to grow."
        actions={<Button href="#openings">See open roles</Button>}
        aside={
          hasImage("careers/team") ? (
            <SiteImage
              id="careers/team"
              sizes="(min-width: 1024px) 520px, 100vw"
              eager
              className="aspect-[4/5] w-full max-w-[520px] justify-self-end rounded-[28px] object-cover"
            />
          ) : undefined
        }
      />
      <Section labelledBy="perks-title">
        <SectionHeading id="perks-title" title="Why people join, and stay" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="flex gap-4 rounded-panel border border-line p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-btn bg-haze text-blue">
                <Icon name={p.icon} className="size-8" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-slate">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="mist" labelledBy="openings-title">
        <div id="openings" className="scroll-mt-28" />
        <SectionHeading
          id="openings-title"
          title="Open roles"
          intro={`Don't see your role? Send your CV to ${site.careersEmail} and tell us what you would like to work on.`}
        />
        <ul className="mt-10 divide-y divide-line overflow-hidden rounded-panel border border-line bg-white">
          {openings.map((o) => (
            <li key={o.title} className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-ink">{o.title}</h3>
                <p className="mt-1 text-sm text-slate">
                  {o.team}
                  <span aria-hidden="true"> / </span>
                  {o.type}
                  <span aria-hidden="true"> / </span>
                  {o.exp}
                </p>
              </div>
              <a
                href={`mailto:${site.careersEmail}?subject=${encodeURIComponent(`Application: ${o.title}`)}`}
                className="inline-flex min-h-11 items-center justify-center rounded-btn px-4 font-semibold text-blue ring-1 ring-line hover:ring-blue"
              >
                Apply<span className="sr-only"> for {o.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
      <Section labelledBy="hiring-title">
        <SectionHeading id="hiring-title" title="Our hiring process" intro="Typically two to three weeks from application to offer." />
        <ol className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {hiring.map(([t, d], i) => (
            <li key={t}>
              <span className="grid size-10 place-items-center rounded-btn bg-ink font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 font-semibold text-ink">{t}</h3>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-slate">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand
        title="Building something? We are hiring for it."
        intro="If you are here as a client rather than a candidate, our team is ready to talk about your project."
      />
    </>
  );
}
