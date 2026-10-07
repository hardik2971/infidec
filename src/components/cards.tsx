import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./icon";
import type { BlogPost, CaseStudy, Industry, Service } from "@/lib/types";
import { getIndustry } from "@/data";
import { SiteImage, hasImage } from "./site-image";

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group flex h-full flex-col rounded-panel border border-line bg-white p-6 transition-colors hover:border-blue/40"
    >
      <span className="grid size-11 place-items-center rounded-btn bg-haze text-blue">
        <Icon name={s.icon} className="size-8" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink group-hover:text-blue">{s.name}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-slate">{s.short}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue">
        Explore service
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function IndustryCard({ i }: { i: Industry }) {
  return (
    <Link
      href={`/industries/${i.slug}`}
      className="group flex items-start gap-4 rounded-panel border border-line bg-white p-5 transition-colors hover:border-blue/40"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-btn bg-haze">
        <Icon name={i.icon} className="size-8" />
      </span>
      <span>
        <span className="block font-semibold text-ink group-hover:text-blue">{i.name}</span>
        <span className="mt-1 block text-sm leading-relaxed text-slate">{i.short}</span>
      </span>
    </Link>
  );
}

export function CaseStudyCard({ c, headingLevel = "h3" }: { c: CaseStudy; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  const industry = getIndustry(c.industry);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-panel border border-line bg-white">
      {hasImage(`case/${c.slug}`) ? (
        <div className="aspect-[16/9] overflow-hidden bg-mist">
          <SiteImage
            id={`case/${c.slug}`}
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            decorative
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="brand-gradient relative h-2" aria-hidden="true" />
      )}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-sm font-medium text-violet">{industry?.name}</p>
        <H className="mt-2 text-xl font-semibold leading-snug text-ink">
          <Link href={`/case-studies/${c.slug}`} className="after:absolute after:inset-0 group-hover:text-blue">
            {c.title}
          </Link>
        </H>
        <p className="mt-3 flex-1 leading-relaxed text-slate">{c.summary}</p>
        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
          {c.results.map((r) => (
            <div key={r.label}>
              <dt className="sr-only">{r.label}</dt>
              <dd>
                <span className="font-display block text-2xl font-bold tracking-tight text-ink">{r.value}</span>
                <span className="mt-1 block text-xs leading-snug text-slate">{r.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}

export function PostCard({ p, headingLevel = "h3" }: { p: BlogPost; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-panel border border-line bg-white p-6">
      {hasImage(`blog/${p.slug}`) && (
        <div className="-mx-6 -mt-6 mb-6 aspect-[16/9] overflow-hidden bg-mist">
          <SiteImage
            id={`blog/${p.slug}`}
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            decorative
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <p className="text-sm text-muted">
        <span className="font-medium text-violet">{p.category}</span>
        <span aria-hidden="true"> / </span>
        <time dateTime={p.date}>{formatDate(p.date)}</time>
      </p>
      <H className="mt-3 text-lg font-semibold leading-snug text-ink">
        <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 group-hover:text-blue">
          {p.title}
        </Link>
      </H>
      <p className="mt-3 flex-1 leading-relaxed text-slate">{p.excerpt}</p>
      <p className="mt-5 text-sm text-muted">{p.readMinutes} min read</p>
    </article>
  );
}
