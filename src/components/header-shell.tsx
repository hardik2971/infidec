"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

const isExternal = (href: string) => /^https?:\/\//.test(href);

/** External sites open in a new tab */
const external = (href: string) =>
  isExternal(href) ? { target: "_blank", rel: "noopener noreferrer", prefetch: false } : {};

function ExternalMark({ href }: { href: string }) {
  if (!isExternal(href)) return null;
  return (
    <>
      <ArrowUpRight className="size-3.5 opacity-70" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </>
  );
}

export function HeaderShell({
  logo,
  nav,
  servicesMenu,
}: {
  logo: ReactNode;
  nav: readonly NavItem[];
  servicesMenu: ReactNode;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);

  // Close menus on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMegaOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Full-width bar at the top of the page; floating glass bar once the page scrolls
  const floating = scrolled;

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
    <header
      data-floating={floating ? "true" : "false"}
      className={`site-header fixed inset-x-0 z-50 ${floating ? "top-2" : "top-0"}`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-btn focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-x relative">
      <div
        className="site-header-inner flex h-16 items-center justify-between gap-4 lg:h-[74px] lg:gap-6"
      >
        {logo}

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.href === "/services" ? (
                <li key={item.href} ref={megaRef} className="static">
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    aria-controls="services-menu"
                    onClick={() => setMegaOpen((o) => !o)}
                    className={`flex items-center gap-1 rounded-btn px-3 py-2 text-[0.9375rem] font-medium hover:text-blue ${
                      isActive("/services") ? "text-blue" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id="services-menu"
                    hidden={!megaOpen}
                    className="absolute inset-x-5 top-[calc(100%+8px)] overflow-hidden rounded-[12px] border border-white/80 bg-white/95 shadow-[0_24px_48px_-24px_rgba(7,11,46,0.25)] backdrop-blur-xl md:inset-x-8"
                  >
                    {servicesMenu}
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    {...external(item.href)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`inline-flex items-center gap-1 rounded-btn px-3 py-2 text-[0.9375rem] font-medium hover:text-blue ${
                      isActive(item.href) ? "text-blue" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <ExternalMark href={item.href} />
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-btn bg-blue px-4 text-[0.9375rem] font-semibold text-white hover:bg-blue-deep sm:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-btn text-ink ring-1 ring-line lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      </div>
    </header>

      {/* Outside <header>: its backdrop-filter would otherwise contain this fixed panel */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="fixed inset-x-3 bottom-3 top-[80px] z-50 overflow-y-auto rounded-[12px] border border-white/80 bg-white/95 shadow-[0_24px_48px_-24px_rgba(7,11,46,0.25)] backdrop-blur-xl sm:inset-x-5 sm:top-[84px] lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  {...external(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex min-h-14 items-center gap-1.5 text-xl font-semibold text-ink"
                >
                  {item.label}
                  <ExternalMark href={item.href} />
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="flex min-h-14 items-center text-xl font-semibold text-blue">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
