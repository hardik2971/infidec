import { Check } from "lucide-react";
import { Icon, type IconName } from "./icon";

/* ------------------------------------------------------------------ */
/* Hero: delivery staircase. Five stages rise like the logo's tiles.    */
/* ------------------------------------------------------------------ */

const stages: { name: string; note: string; icon: IconName; tone: string }[] = [
  { name: "Discover", note: "Goals, users, constraints", icon: "compass", tone: "bg-[#5b21b6]" },
  { name: "Design", note: "Flows, prototypes, UI system", icon: "palette", tone: "bg-[#6d28d9]" },
  { name: "Build", note: "Two-week sprints, demos", icon: "code", tone: "bg-[#3730d6]" },
  { name: "Assure", note: "Automated and manual QA", icon: "shield", tone: "bg-[#0a4fdf]" },
  { name: "Launch", note: "CI/CD, observability", icon: "rocket", tone: "bg-[#0052cc]" },
];

export function DeliveryStaircase() {
  return (
    <figure className="relative w-full max-w-[640px] lg:ml-auto" aria-labelledby="staircase-caption">
      <div className="relative rounded-[28px] border border-line bg-white p-4 sm:p-6">
        <svg
          viewBox="0 0 600 600"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-6 hidden h-[calc(100%-3rem)] w-[calc(100%-3rem)] sm:block"
        >
          <path
            d="M50 550 L150 450 L250 350 L350 250 L450 150 L550 50"
            fill="none"
            stroke="#0a5bff"
            strokeOpacity="0.35"
            strokeWidth="2"
            className="flow-line"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol className="relative grid grid-cols-2 gap-3 sm:aspect-square sm:grid-cols-6 sm:grid-rows-6 sm:gap-2">
          {stages.map((s, i) => (
            <li
              key={s.name}
              className="tile-in sm:col-span-2 sm:row-span-2"
              style={
                {
                  gridColumnStart: undefined,
                  "--d": `${120 + i * 110}ms`,
                  "--tx": `${-18 - i * 4}px`,
                  "--ty": `${18 + i * 4}px`,
                } as React.CSSProperties
              }
              data-step={i}
            >
              <div
                className={`flex h-full flex-col justify-between gap-4 rounded-[18px] p-4 text-white ${s.tone}`}
              >
                <div className="flex items-center justify-between">
                  <Icon name={s.icon} className="size-8" float={false} />
                  <span className="text-xs font-semibold text-white/85">Step {i + 1}</span>
                </div>
                <div>
                  <p className="text-lg font-semibold leading-tight">{s.name}</p>
                  <p className="mt-1 text-[0.8125rem] leading-snug text-white/95">{s.note}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <style>{`
        @media (min-width: 640px) {
          [data-step="0"]{grid-area:5/1/7/3}
          [data-step="1"]{grid-area:4/2/6/4}
          [data-step="2"]{grid-area:3/3/5/5}
          [data-step="3"]{grid-area:2/4/4/6}
          [data-step="4"]{grid-area:1/5/3/7}
        }
      `}</style>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Stat ruler                                                          */
/* ------------------------------------------------------------------ */

export function StatRuler({
  stats,
}: {
  stats: readonly { value: number; suffix: string; label: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`px-1 py-8 sm:px-6 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
        >
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="font-display block text-[2.75rem] font-bold leading-none tracking-tight text-ink sm:text-6xl">
              {s.value}
              <span className="text-blue">{s.suffix}</span>
            </span>
            <span className="mt-3 block max-w-[16rem] text-[0.9375rem] leading-snug text-slate">
              {s.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------------ */
/* 12-week MVP Gantt                                                   */
/* ------------------------------------------------------------------ */

const tracks: { name: string; bars: [number, number, string][]; color: string }[] = [
  { name: "Discovery", bars: [[1, 2, "Workshops and scope"]], color: "#5b21b6" },
  { name: "UX and UI design", bars: [[2, 5, "Flows, prototype, design system"]], color: "#6d28d9" },
  { name: "Engineering", bars: [[3, 11, "Sprints 1 to 4: build and demo"]], color: "#0a5bff" },
  { name: "QA automation", bars: [[4, 12, "Test suites grow with every sprint"]], color: "#0052cc" },
  { name: "Cloud and DevOps", bars: [[3, 4, "CI/CD"], [10, 12, "Hardening"]], color: "#005fa3" },
  { name: "Launch", bars: [[12, 12, "Go live"]], color: "#070b2e" },
];

export function MvpGantt() {
  const weeks = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <figure aria-labelledby="gantt-caption" className="min-w-0 rounded-panel border border-line bg-white p-5 md:p-8">
      <figcaption id="gantt-caption" className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-lg font-semibold text-ink">A typical 12-week MVP</span>
        <span className="text-sm text-muted">Workstreams run in parallel, not one after another</span>
      </figcaption>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <caption className="sr-only">Typical MVP timeline by workstream and week</caption>
          <thead>
            <tr>
              <th scope="col" className="w-40 pb-3 text-left font-medium text-muted">
                Workstream
              </th>
              <th scope="col" className="pb-3" colSpan={12}>
                <div className="grid grid-cols-12 text-center font-medium text-muted">
                  {weeks.map((w) => (
                    <span key={w}>W{w}</span>
                  ))}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((t) => (
              <tr key={t.name} className="border-t border-line">
                <th scope="row" className="py-3 pr-4 text-left font-medium text-ink">
                  {t.name}
                </th>
                <td colSpan={12} className="py-3">
                  <div className="relative grid h-8 grid-cols-12">
                    {weeks.map((w) => (
                      <span key={w} className="border-l border-dashed border-line first:border-l-0" />
                    ))}
                    {t.bars.map(([start, end, label]) => (
                      <span
                        key={label}
                        title={label}
                        className="absolute inset-y-0 flex items-center overflow-hidden rounded-chip px-2 text-xs font-medium text-white"
                        style={{
                          left: `${((start - 1) / 12) * 100}%`,
                          width: `${((end - start + 1) / 12) * 100}%`,
                          background: t.color,
                        }}
                      >
                        <span className="truncate">{label}</span>
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* CI/CD quality gates                                                 */
/* ------------------------------------------------------------------ */

const gates = [
  { name: "Commit", detail: "Linting, type checks, pre-commit hooks" },
  { name: "Peer review", detail: "Every change reviewed by a second engineer" },
  { name: "Automated tests", detail: "Unit, integration and end-to-end suites" },
  { name: "Security scan", detail: "SAST, dependency and secret scanning" },
  { name: "Staging", detail: "Product owner sign-off on a live build" },
  { name: "Production", detail: "Zero-downtime deploy with rollback" },
];

export function QualityGates() {
  return (
    <figure aria-label="Release quality gates">
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
        {gates.map((g, i) => (
          <li key={g.name} className="relative lg:pr-4">
            {i < gates.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-10 right-0 top-5 hidden h-px bg-gradient-to-r from-blue to-cyan lg:block"
              />
            )}
            <div className="relative flex items-start gap-3 lg:block">
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-btn text-white ${
                  i === gates.length - 1 ? "brand-gradient" : "bg-ink"
                }`}
              >
                <Check className="size-5" aria-hidden="true" />
              </span>
              <div className="lg:mt-4">
                <p className="font-semibold text-ink">{g.name}</p>
                <p className="mt-1 text-sm leading-snug text-slate">{g.detail}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Engagement model comparison (dot meters)                            */
/* ------------------------------------------------------------------ */

export const engagementModels = [
  {
    name: "Dedicated team",
    slug: "dedicated-team",
    icon: "users" as IconName,
    best: "Long-running products, evolving roadmaps, scaling an in-house team",
    billing: "Monthly per team member",
    scores: { flexibility: 5, predictability: 4, speed: 4, control: 5 },
  },
  {
    name: "Fixed price",
    slug: "fixed-price",
    icon: "target" as IconName,
    best: "Well-defined scope, MVPs after discovery, regulated procurement",
    billing: "Milestone payments against agreed scope",
    scores: { flexibility: 2, predictability: 5, speed: 3, control: 3 },
  },
  {
    name: "Time and materials",
    slug: "time-and-materials",
    icon: "refresh" as IconName,
    best: "Exploratory work, R&D, AI pilots, changing priorities",
    billing: "Hours worked, reported weekly",
    scores: { flexibility: 5, predictability: 3, speed: 5, control: 4 },
  },
];

const dims: { key: keyof (typeof engagementModels)[number]["scores"]; label: string }[] = [
  { key: "flexibility", label: "Scope flexibility" },
  { key: "predictability", label: "Budget predictability" },
  { key: "speed", label: "Speed to start" },
  { key: "control", label: "Day-to-day control" },
];

function Meter({ value, label }: { value: number; label: string }) {
  return (
    <span className="flex gap-1" role="img" aria-label={`${label}: ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-2.5 w-6 rounded-[3px] ${n <= value ? "bg-blue" : "bg-line"}`}
        />
      ))}
    </span>
  );
}

export function EngagementCompare() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {engagementModels.map((m) => (
        <article key={m.name} className="flex flex-col rounded-panel border border-line bg-white p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-btn bg-haze text-blue">
              <Icon name={m.icon} className="size-8" />
            </span>
            <h3 className="text-xl font-semibold text-ink">{m.name}</h3>
          </div>
          <p className="mt-4 leading-relaxed text-slate">
            <span className="font-medium text-ink">Best for: </span>
            {m.best}
          </p>
          <dl className="mt-6 space-y-3 border-t border-line pt-6">
            {dims.map((d) => (
              <div key={d.key} className="flex items-center justify-between gap-4">
                <dt className="text-sm text-slate">{d.label}</dt>
                <dd>
                  <Meter value={m.scores[d.key]} label={d.label} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted">Billing: {m.billing}</p>
        </article>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Layered tech stack                                                  */
/* ------------------------------------------------------------------ */

export const stackLayers: { layer: string; desc: string; items: string[] }[] = [
  {
    layer: "Experience",
    desc: "Web, mobile and design",
    items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Flutter", "React Native", "Swift", "Kotlin", "Figma"],
  },
  {
    layer: "Application",
    desc: "APIs, services and integrations",
    items: ["Node.js", "NestJS", ".NET", "Java Spring Boot", "Python", "Django", "FastAPI", "Go", "GraphQL", "Laravel"],
  },
  {
    layer: "Data and AI",
    desc: "Storage, analytics and intelligence",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Snowflake", "Databricks", "PyTorch", "LangGraph", "OpenAI", "Claude"],
  },
  {
    layer: "Cloud and DevOps",
    desc: "Infrastructure and delivery",
    items: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Datadog"],
  },
];

export function StackLayers() {
  const tones = ["#6d28d9", "#3b3ff0", "#0a5bff", "#0090d6"];
  return (
    <figure aria-label="Technology stack by layer" className="space-y-3">
      {stackLayers.map((l, i) => (
        <div
          key={l.layer}
          className="grid gap-4 rounded-panel border border-line bg-white p-5 md:grid-cols-[220px_1fr] md:items-center md:p-6"
          style={{ marginInline: `${i * 0.75}rem` }}
        >
          <div className="flex items-center gap-3">
            <span className="h-10 w-1.5 rounded-full" style={{ background: tones[i] }} aria-hidden="true" />
            <div>
              <p className="font-semibold text-ink">{l.layer}</p>
              <p className="text-sm text-muted">{l.desc}</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {l.items.map((t) => (
              <li key={t} className="rounded-chip bg-mist px-3 py-1.5 text-sm font-medium text-ink">
                {t}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Dedicated team structure                                            */
/* ------------------------------------------------------------------ */

export function TeamStructure() {
  const pods = [
    { role: "Engineers", detail: "Frontend, backend, mobile", icon: "code" as IconName },
    { role: "QA engineer", detail: "Automation and exploratory", icon: "shield" as IconName },
    { role: "Product designer", detail: "UX research and UI", icon: "palette" as IconName },
    { role: "DevOps engineer", detail: "Shared, on demand", icon: "cloud" as IconName },
  ];
  return (
    <figure aria-labelledby="team-caption" className="rounded-panel border border-line bg-white p-6 md:p-8">
      <div className="flex flex-col items-center">
        <div className="rounded-btn bg-ink px-5 py-3 text-center text-white">
          <p className="font-semibold">You</p>
          <p className="text-xs text-white/75">Product owner and priorities</p>
        </div>
        <span className="h-6 w-px bg-line" aria-hidden="true" />
        <div className="brand-gradient rounded-btn px-5 py-3 text-center text-white">
          <p className="font-semibold">Delivery manager</p>
          <p className="text-xs text-white/85">Single point of contact</p>
        </div>
        <span className="h-6 w-px bg-line" aria-hidden="true" />
        <div className="rounded-btn border border-line px-5 py-3 text-center">
          <p className="font-semibold text-ink">Tech lead</p>
          <p className="text-xs text-muted">Architecture and code quality</p>
        </div>
        <span className="h-6 w-px bg-line" aria-hidden="true" />
        <ul className="grid w-full gap-3 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {pods.map((p) => (
            <li key={p.role} className="rounded-btn bg-mist p-4">
              <Icon name={p.icon} className="size-10" />
              <p className="mt-3 font-semibold text-ink">{p.role}</p>
              <p className="text-sm text-slate">{p.detail}</p>
            </li>
          ))}
        </ul>
      </div>
      <figcaption id="team-caption" className="mt-6 text-sm text-muted">
        A typical dedicated team. You set priorities; the delivery manager and tech lead own execution.
      </figcaption>
    </figure>
  );
}
