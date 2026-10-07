import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { TermsIllustration } from "@/components/legal-illustration";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: `The terms that apply when you use the ${site.name} website, including intellectual property, acceptable use, disclaimers and governing law.`,
  path: "/terms",
});

/** VERIFY: have these terms reviewed by legal counsel and set the governing law before launch. */
const sections: { h: string; p: string }[] = [
  {
    h: "Acceptance",
    p: `By using ${site.url} you agree to these terms. If you do not agree, please do not use the website. Client engagements are governed by separate written agreements, not by these terms.`,
  },
  {
    h: "Use of the website",
    p: "You may browse the website and share links to it. You must not attempt to disrupt it, gain unauthorised access to systems, scrape it at a volume that degrades service, or use it for unlawful purposes.",
  },
  {
    h: "Intellectual property",
    p: `The website's content, design, logo and trademarks belong to ${site.legalName} or its licensors. You may not reproduce them for commercial purposes without written permission.`,
  },
  {
    h: "Information on this site",
    p: "Content is provided for general information. Timelines, cost ranges and technical guidance are indicative and do not form an offer. A binding proposal is only made in writing after scoping.",
  },
  {
    h: "Third-party links",
    p: "Links to other websites are provided for convenience. We are not responsible for their content or privacy practices.",
  },
  {
    h: "Limitation of liability",
    p: "To the extent permitted by law, we are not liable for any indirect or consequential loss arising from use of this website. Nothing in these terms limits liability that cannot be limited by law.",
  },
  {
    h: "Changes and governing law",
    p: "We may update these terms at any time by posting a new version here. These terms are governed by the laws of the jurisdiction in which the company is registered.",
  },
];

export default function TermsPage() {
  return (
    <div className="container-x pb-24 pt-10 md:pt-14">
      <Breadcrumbs items={[{ name: "Terms of use", href: "/terms" }]} />
      <h1 className="display-2 mt-6 text-ink">Terms of use</h1>
      <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
        <div className="prose-infidec max-w-[68ch]">
        {sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </section>
        ))}
        </div>
        <TermsIllustration />
      </div>
    </div>
  );
}
