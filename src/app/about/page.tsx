import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button, CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";
import { StatRuler } from "@/components/infographics";
import { Icon, type IconName } from "@/components/icon";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { SiteImage, hasImage } from "@/components/site-image";

export const metadata: Metadata = pageMetadata({
  title: "About INFIDEC: Our Story, Values and Team",
  description:
    "INFIDEC is a software engineering partner building custom software, AI and cloud products. Learn how we work, what we value and why clients stay with us.",
  path: "/about",
});

const values: { title: string; desc: string; icon: IconName }[] = [
  {
    title: "Own the outcome",
    desc: "We measure ourselves by what changes for your users and your business, not by hours logged or tickets closed.",
    icon: "target",
  },
  {
    title: "Say it early",
    desc: "Risks, delays and better ideas are raised the day we spot them. Clients should never be surprised at a demo.",
    icon: "idea",
  },
  {
    title: "Senior by default",
    desc: "Every team has an experienced tech lead who reviews code and architecture decisions. Juniors learn on real work, never unsupervised.",
    icon: "award",
  },
  {
    title: "Build to hand over",
    desc: "Documentation, tests and clean repositories mean you can bring work in-house or switch vendors without starting again.",
    icon: "handshake",
  },
  {
    title: "Security from the first commit",
    desc: "Least-privilege access, secret management and dependency scanning are part of setup, not a pre-launch scramble.",
    icon: "lock",
  },
  {
    title: "Keep learning",
    desc: "Engineers get paid time for certifications, internal tech talks and contribution to open source.",
    icon: "education",
  },
];

const howWeWork: { title: string; desc: string; icon: IconName; bg: string; fg: string }[] = [
  {
    title: "Plan and discover",
    desc: "We agree goals, scope, users and success measures, then turn them into a prioritised plan for your app, website or platform.",
    icon: "compass",
    bg: "#f1f3e7",
    fg: "#6b8a1f",
  },
  {
    title: "Design and prototype",
    desc: "Our designers map user flows and build a clickable prototype that real users test before any production code is written.",
    icon: "palette",
    bg: "#fdf1e7",
    fg: "#e07b1f",
  },
  {
    title: "Develop and integrate",
    desc: "Engineers build in two-week sprints with code review and automated tests, and connect your payments, ERP, CRM and other systems.",
    icon: "code",
    bg: "#fde4ee",
    fg: "#e3125f",
  },
  {
    title: "Test and launch",
    desc: "We test across devices, harden security and performance, then launch with monitoring in place and stay on for support.",
    icon: "rocket",
    bg: "#e6f1f3",
    fg: "#2a8a96",
  },
];

/** Small four-point star used beside the section label */
function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M12 2c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7Z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="hero/about"
        crumbs={[{ name: "About", href: "/about" }]}
        title="Engineers who care what happens after launch"
        intro={`${site.name} was founded in ${site.founded} by engineers who had seen too many projects delivered on time and then abandoned. We build software the way we would want it built for us: tested, documented and designed to keep improving.`}
        actions={
          <>
            <Button href="/contact">Work with us</Button>
            <Button href="/careers" variant="secondary">
              Join the team
            </Button>
          </>
        }
        aside={
          hasImage("about/team") ? (
            <SiteImage
              id="about/team"
              sizes="(min-width: 1024px) 520px, 100vw"
              eager
              className="aspect-[4/5] w-full max-w-[520px] justify-self-end rounded-[28px] object-cover"
            />
          ) : undefined
        }
      />

      <Section labelledBy="mission-title">
        <SiteImage
          id="about/office"
          sizes="(min-width: 1240px) calc(100vw - 4rem), 100vw"
          className="mb-16 aspect-[16/9] w-full rounded-[28px] object-cover md:aspect-[21/9] md:mb-20"
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="mission-title" className="display-2 text-ink">
              Our mission
            </h2>
            <p className="lede mt-5">
              Give every client, from a two-person startup to a global enterprise, the kind of engineering team that
              usually takes years to hire: senior, accountable and focused on their product.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-panel bg-ink p-7 text-white">
              <h3 className="text-lg font-semibold">Vision</h3>
              <p className="mt-3 leading-relaxed text-white/80">
                To be the partner that product leaders call first when the work is hard and the stakes are real.
              </p>
            </div>
            <div className="brand-gradient rounded-panel p-7 text-white">
              <h3 className="text-lg font-semibold">Promise</h3>
              <p className="mt-3 leading-relaxed text-white/90">
                Working software every sprint, honest estimates and code you fully own.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <StatRuler stats={site.stats} />
        </div>
      </Section>

      <Section tone="mist" labelledBy="values-title">
        <SectionHeading
          id="values-title"
          title="What we value"
          intro="Six principles that shape how we hire, estimate, write code and talk to clients."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-panel border border-line bg-white p-7">
              <span className="grid size-11 place-items-center rounded-btn bg-haze text-blue">
                <Icon name={v.icon} className="size-8" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-slate">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section aria-labelledby="how-title" className="bg-paper py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-[200px_1fr_1fr] lg:gap-10">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-blue">
              <Sparkle />
              How we work
              <Sparkle />
            </p>
            <h2 id="how-title" className="display-3 !text-[clamp(1.75rem,1.6vw+1.1rem,2.375rem)] text-ink">
              From idea to launch, one process behind every product
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              From the first workshop to go-live, a lean four-step process covers research, UI/UX, engineering, testing and
              launch, so you always know what happens next.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
            {howWeWork.map((s, i) => (
              <li key={s.title} className="flex flex-col rounded-[20px] p-6" style={{ background: s.bg }}>
                <div className="flex items-center justify-between rounded-[14px] bg-white px-5 py-4">
                  <Icon name={s.icon} className="size-10" />
                  <span
                    className="grid size-14 place-items-center rounded-full font-display text-3xl"
                    style={{ background: s.bg, color: s.fg }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold text-ink sm:mt-24 md:mt-32">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <span className="mt-4 block h-px w-full bg-ink/10" aria-hidden="true" />
                <p className="mt-4 leading-relaxed text-ink-soft">{s.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid overflow-hidden rounded-[20px] lg:grid-cols-[1.1fr_1fr]">
            <div className="relative bg-blue px-8 py-8 lg:[clip-path:polygon(0_0,100%_0,calc(100%-64px)_100%,0_100%)] lg:pr-24">
              <p className="font-display text-2xl font-bold uppercase leading-tight text-white md:text-[1.75rem]">
                Ready to start your
                <br />
                journey with us?
              </p>
            </div>
            <div className="flex flex-col gap-6 bg-ink px-8 py-8 text-white sm:flex-row sm:items-center sm:justify-between lg:-ml-16 lg:pl-24">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-blue">
                  <Mail className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Reply within 24 hours</p>
                  <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center text-lg font-semibold hover:underline">
                    {site.email}
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-11 w-fit items-center gap-2 rounded-btn bg-white px-4 font-medium text-ink hover:bg-haze"
              >
                Contact us
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section tone="mist" labelledBy="regions-title">
        <SectionHeading
          id="regions-title"
          title="Serving clients worldwide"
          intro="Distributed delivery with working-hour overlap planned into every engagement, so decisions never wait a day."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {site.regions.map((r) => (
            <li key={r} className="flex items-center gap-3 rounded-btn border border-line bg-white px-4 py-4 font-medium text-ink">
              <Icon name="globe" className="size-7" float={false} />
              {r}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
