import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";
import { SiteImage, hasImage } from "./site-image";

type BtnProps = ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "ghost" };

export function Button({ variant = "primary", className = "", children, ...props }: BtnProps) {
  const styles = {
    primary:
      "bg-blue text-white hover:bg-blue-deep shadow-[0_8px_24px_-10px_rgba(10,91,255,0.7)]",
    secondary: "bg-white text-ink ring-1 ring-line hover:ring-ink/30",
    ghost: "text-blue hover:text-blue-deep px-0",
  }[variant];
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-btn px-5 text-[0.9375rem] font-semibold transition-colors ${styles} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  title,
  intro,
  as: Tag = "h2",
  align = "left",
  id,
}: {
  title: ReactNode;
  intro?: ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Tag id={id} className="display-2 text-ink">
        {title}
      </Tag>
      {intro ? <p className="lede mt-5">{intro}</p> : null}
    </div>
  );
}

export function Section({
  children,
  tone = "paper",
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  tone?: "paper" | "mist";
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={`py-20 md:py-28 ${tone === "mist" ? "bg-mist" : "bg-paper"} ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Breadcrumbs({ items, dark = false }: { items: { name: string; href: string }[]; dark?: boolean }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.href === "/" ? "" : it.href}`,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${dark ? "text-white/80" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {all.map((it, i) => (
          <li key={it.href} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
            {i === all.length - 1 ? (
              <span aria-current="page" className={dark ? "text-white" : "text-ink"}>
                {it.name}
              </span>
            ) : (
              <Link href={it.href} className={dark ? "hover:text-white hover:underline" : "hover:text-blue"}>
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <JsonLd data={jsonLd} />
    </nav>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Inner-page hero: breadcrumb, H1, lede, optional actions and aside (infographic). */
export function PageHero({
  crumbs,
  title,
  intro,
  actions,
  aside,
  image,
}: {
  crumbs: { name: string; href: string }[];
  title: ReactNode;
  intro: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  /** Image id from the image manifest; renders the dark photo banner when it exists */
  image?: string;
}) {
  const dark = Boolean(image && hasImage(image));
  return (
    <section className={`relative overflow-hidden border-b ${dark ? "border-ink bg-ink" : "border-line bg-paper"}`}>
      {dark && image ? (
        <>
          <SiteImage id={image} sizes="100vw" eager decorative className="absolute inset-0 size-full object-cover" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,46,0.94)_0%,rgba(7,11,46,0.82)_45%,rgba(7,11,46,0.45)_100%)]"
          />
        </>
      ) : (
        !aside && (
          <TileField className="pointer-events-none absolute -right-10 -top-6 hidden w-[380px] opacity-60 lg:block" />
        )
      )}
      <div
        className={`container-x relative grid gap-12 pb-16 pt-10 md:pb-20 md:pt-14 ${dark ? "min-h-[400px] content-center lg:min-h-[460px]" : ""} ${aside ? "lg:grid-cols-[1.15fr_1fr] lg:items-center" : ""}`}
      >
        <div>
          <Breadcrumbs items={crumbs} dark={dark} />
          <h1 className={`${aside ? "display-2" : "display-1"} mt-6 max-w-4xl ${dark ? "text-white" : "text-ink"}`}>{title}</h1>
          <p className={`lede mt-6 max-w-2xl ${dark ? "!text-white/85" : ""}`}>{intro}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        {aside}
      </div>
    </section>
  );
}

/** The logo's pixel tiles, as a quiet decorative field. */
export function TileField({ className = "" }: { className?: string }) {
  const tiles: [number, number, number, string][] = [
    [300, 10, 34, "#0a5bff"],
    [250, 60, 22, "#00c2f0"],
    [340, 70, 18, "#6d28d9"],
    [200, 20, 14, "#a855f7"],
    [280, 120, 26, "#0039c6"],
    [350, 150, 12, "#00c2f0"],
    [220, 110, 10, "#6d28d9"],
  ];
  return (
    <svg viewBox="0 0 400 200" className={className} aria-hidden="true">
      {tiles.map(([x, y, s, c], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={s}
          height={s}
          rx={s / 5}
          fill={c}
          opacity={0.18 + (i % 3) * 0.08}
          transform={`skewY(-8)`}
        />
      ))}
    </svg>
  );
}

export function CtaBand({
  title = "Have a product to build or a system to fix?",
  intro = "Tell us where you are and what you need. A senior engineer replies within 24 hours with next steps, not a sales script.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-paper py-20 md:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-14 text-white md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="brand-gradient absolute -right-24 -top-24 size-80 rotate-12 rounded-[48px] opacity-90 blur-[2px]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-6 bottom-8 hidden size-24 rotate-12 rounded-[18px] bg-cyan/80 md:block"
          />
          <div className="relative max-w-2xl">
            <h2 id="cta-title" className="display-2">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-btn bg-white px-5 font-semibold text-ink hover:bg-haze"
              >
                Start a project
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-12 items-center gap-2 rounded-btn px-5 font-semibold text-white ring-1 ring-white/30 hover:ring-white/70"
              >
                Email {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 font-semibold text-blue hover:text-blue-deep"
    >
      {children}
      <ArrowUpRight
        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              aria-hidden="true"
              className="mt-1 grid size-6 shrink-0 place-items-center rounded-chip bg-haze text-blue transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">{f.a}</p>
        </details>
      ))}
      <JsonLd data={jsonLd} />
    </div>
  );
}
