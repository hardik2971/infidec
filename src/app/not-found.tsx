import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const links = [
  { label: "Services", href: "/services" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/blog" },
];

export default function NotFound() {
  return (
    <section className="container-x py-24 md:py-32">
      <p className="brand-gradient-text font-display text-7xl font-bold tracking-tight md:text-8xl">404</p>
      <h1 className="display-2 mt-6 max-w-2xl text-ink">This page does not exist, or it has moved.</h1>
      <p className="lede mt-5 max-w-xl">Check the address, or go to one of these pages.</p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex rounded-full border border-line px-4 py-2 font-medium text-ink hover:border-blue hover:text-blue"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Button href="/">Go to the home page</Button>
      </div>
    </section>
  );
}
