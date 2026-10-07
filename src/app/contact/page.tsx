import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/icon";
import { Breadcrumbs, JsonLd } from "@/components/ui";
import { ContactForm } from "./contact-form";
import { services } from "@/data";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact INFIDEC: Get a Software Development Quote",
  description:
    "Tell us about your software, app, AI or cloud project. A senior INFIDEC engineer replies within 24 hours with next steps and a scoping call.",
  path: "/contact",
});

const contactCards = [
  {
    title: "Email us",
    icon: "mail" as IconName,
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Send us an email and we'll get back to you within 24 hours.",
  },
  {
    title: "Call us",
    icon: "phone" as IconName,
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: "Speak directly with our team for immediate assistance.",
  },
  {
    title: "Visit us",
    icon: "pin" as IconName,
    value: site.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`,
    external: true,
    note: "Come visit our office for in-person consultations.",
  },
  {
    title: "Working hours",
    icon: "clock" as IconName,
    value: site.hours.label,
    note: "We're available during business hours for all your needs.",
  },
].filter((c) => c.value);

const next = [
  ["We reply within 24 hours", "A senior engineer or solution architect reads every enquiry."],
  ["Scoping call", "30 to 45 minutes on goals, constraints and timelines. NDA available on request."],
  ["Proposal", "Approach, team, timeline and a transparent estimate, usually within a week."],
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact INFIDEC",
    url: `${site.url}/contact`,
    mainEntity: { "@id": `${site.url}/#organization` },
  };

  return (
    <section className="bg-mist">
      <div className="container-x grid gap-12 pb-12 pt-10 md:pt-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
          <h1 className="display-2 mt-6 text-ink">Let&apos;s talk about what you are building</h1>
          <p className="lede mt-6">
            Share a few details and we will come back with questions, ideas and a clear next step. No obligation, and
            your information stays confidential.
          </p>

          <ul className="mt-10 space-y-4">
            {contactCards.map((c) => (
              <li key={c.title} className="flex gap-4 rounded-panel border border-line bg-white p-5 md:p-6">
                <span className="grid size-14 shrink-0 place-items-center rounded-btn bg-haze">
                  <Icon name={c.icon} className="size-9" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-semibold text-ink">{c.title}</h2>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-1 block break-words text-lg text-ink hover:text-blue"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg text-ink">{c.value}</p>
                  )}
                  <p className="mt-1 text-sm text-slate">{c.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm services={services.map((s) => s.name)} />
      </div>

      <div className="container-x pb-24">
        <div className="rounded-panel border border-line bg-white p-6 md:p-10">
          <h2 className="text-xl font-semibold text-ink">What happens next</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
            {next.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-chip bg-ink text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-slate">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <JsonLd data={jsonLd} />
    </section>
  );
}
