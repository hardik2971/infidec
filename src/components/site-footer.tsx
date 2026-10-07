import Link from "next/link";
import { Icon } from "./icon";
import { Logo } from "./site-header";
import { site } from "@/lib/site";
import { industries, services } from "@/data";
import { CopyrightYear } from "./copyright-year";

const company = [
  { label: "About us", href: "/about" },
  { label: "How we work", href: "/process" },
  { label: "Engagement models", href: "/engagement-models" },
  { label: "Hire developers", href: "/hire-developers" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Marketplace", href: "https://marketplace.elaynetech.com/" },
  { label: "Technologies", href: "/technologies" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer", prefetch: false } : {})}
              className="text-[0.9375rem] text-slate hover:text-blue"
            >
              {l.label}
              {l.href.startsWith("http") && <span className="sr-only"> (opens in a new tab)</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-10 w-auto" />
          <p className="mt-5 max-w-sm leading-relaxed text-slate">{site.description}</p>
          <ul className="mt-6 space-y-3 text-[0.9375rem]">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 text-ink hover:text-blue">
                <Icon name="mail" className="size-5" float={false} />
                {site.email}
              </a>
            </li>
            {site.phone && (
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-ink hover:text-blue"
                >
                  <Icon name="phone" className="size-5" float={false} />
                  {site.phone}
                </a>
              </li>
            )}
            {site.address && (
              <li className="flex items-start gap-2.5 text-slate">
                <Icon name="pin" className="mt-0.5 size-5" float={false} />
                {site.address}
              </li>
            )}
            <li className="flex items-start gap-2.5 text-slate">
              <Icon name="clock" className="mt-0.5 size-5" float={false} />
              {site.hours.label}
            </li>
          </ul>
        </div>
        <FooterCol
          title="Services"
          links={services.slice(0, 9).map((s) => ({ label: s.name, href: `/services/${s.slug}` }))}
        />
        <FooterCol
          title="Industries"
          links={industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` }))}
        />
        <FooterCol title="Company" links={company} />
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-4 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © <CopyrightYear /> {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="inline-flex min-h-11 items-center hover:text-ink">
              Privacy policy
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-ink">
              Terms of use
            </Link>
            <Link href="/sitemap.xml" className="inline-flex min-h-11 items-center hover:text-ink" prefetch={false}>
              Sitemap
            </Link>
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on LinkedIn`}
                className="grid size-11 place-items-center text-slate hover:text-blue"
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
