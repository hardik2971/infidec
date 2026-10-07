import Image from "next/image";
import Link from "next/link";
import { HeaderShell } from "./header-shell";
import { Icon } from "./icon";
import { nav, site } from "@/lib/site";
import { serviceCategories, services } from "@/data";

export function Logo({ className = "h-[calc(.35rem*9)] w-auto" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
      <Image
        src="/images/infidec-logo.png"
        alt={site.name}
        width={1920}
        height={569}
        sizes="180px"
        loading="eager"
        className={className}
      />
    </Link>
  );
}

function ServicesMenu() {
  return (
    <div className="container-x grid gap-10 py-10 lg:grid-cols-[1fr_280px]">
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
        {serviceCategories.map((cat) => (
          <div key={cat.name}>
            <p className="text-sm font-semibold text-violet">{cat.name}</p>
            <ul className="mt-3 space-y-1">
              {services
                .filter((s) => s.category === cat.name)
                .map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2.5 rounded-btn py-1.5 text-[0.9375rem] text-ink hover:text-blue"
                    >
                      <Icon name={s.icon} className="size-6" float={false} />
                      {s.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="rounded-panel bg-mist p-6">
        <p className="text-lg font-semibold text-ink">Not sure where to start?</p>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          Book a 30-minute call with a solution architect. We will map your goals to the right team and
          engagement model.
        </p>
        <Link href="/contact" className="mt-4 inline-flex font-semibold text-blue hover:text-blue-deep">
          Talk to an architect
        </Link>
        <Link
          href="/services"
          className="mt-2 block text-sm font-medium text-slate underline-offset-4 hover:text-ink hover:underline"
        >
          View all services
        </Link>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return <HeaderShell logo={<Logo />} nav={nav} servicesMenu={<ServicesMenu />} />;
}
