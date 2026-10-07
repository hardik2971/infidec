import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { PrivacyIllustration } from "@/components/legal-illustration";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal information submitted through this website, and the choices and rights you have.`,
  path: "/privacy-policy",
});

/** VERIFY: have this policy reviewed by legal counsel for your jurisdictions before launch. */
const sections: { h: string; p: string[] }[] = [
  {
    h: "Who we are",
    p: [
      `${site.legalName} ("${site.name}", "we", "us") operates ${site.url}. This policy explains how we handle personal information collected through this website. For questions, contact ${site.email}.`,
    ],
  },
  {
    h: "Information we collect",
    p: [
      "Information you give us: when you submit the contact form or email us, we receive your name, email address and any company, phone, project or budget details you choose to share. If you apply for a job, we receive your CV and the information in your application.",
      "Information collected automatically: our hosting provider records standard server logs such as IP address, browser type and pages requested, used for security and to keep the site running. We do not use advertising cookies.",
    ],
  },
  {
    h: "How we use information",
    p: [
      "We use your information to respond to enquiries, prepare proposals, assess job applications, keep the website secure and meet legal obligations. We do not sell personal information and do not use it for automated decision-making.",
    ],
  },
  {
    h: "Legal bases",
    p: [
      "Where data protection laws such as the GDPR or UK GDPR apply, we process enquiry data on the basis of your consent and our legitimate interest in responding to business requests, and application data to take steps before entering into a contract with you.",
    ],
  },
  {
    h: "Sharing",
    p: [
      "We share information only with service providers that help us operate the website and handle email, under contracts that require them to protect it, or where the law requires disclosure.",
    ],
  },
  {
    h: "Retention",
    p: [
      "Enquiries are kept for up to 24 months unless they lead to a contract, in which case they are kept for the life of the relationship and as required by law. Unsuccessful job applications are deleted within 12 months unless you ask us to keep them longer.",
    ],
  },
  {
    h: "Your rights",
    p: [
      `Depending on where you live, you may have the right to access, correct, delete or export your personal information, and to object to or restrict its processing. Email ${site.email} to make a request. You can also complain to your local data protection authority.`,
    ],
  },
  {
    h: "Cookies",
    p: [
      "Essential cookies and browser storage keep the site working, for example remembering your cookie choice. They do not track you and cannot be switched off.",
      "Analytics cookies help us understand which pages are useful. We only set them if you select Accept all in the cookie banner. To change your choice, clear this site's data in your browser and the banner will appear again.",
    ],
  },
  {
    h: "Security",
    p: [
      "We use encryption in transit, access controls and least-privilege policies to protect personal information. No method of transmission over the internet is completely secure, but we work to protect your data and will notify you of a breach where the law requires.",
    ],
  },
  {
    h: "Changes",
    p: ["We may update this policy. The latest version is always on this page."],
  },
];

export default function PrivacyPage() {
  return (
    <div className="container-x pb-24 pt-10 md:pt-14">
      <Breadcrumbs items={[{ name: "Privacy policy", href: "/privacy-policy" }]} />
      <h1 className="display-2 mt-6 text-ink">Privacy policy</h1>
      <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
        <div className="prose-infidec max-w-[68ch]">
        {sections.map((s) => (
          <section key={s.h} id={s.h === "Cookies" ? "cookies" : undefined} className="scroll-mt-24">
            <h2>{s.h}</h2>
            {s.p.map((t) => (
              <p key={t.slice(0, 40)}>{t}</p>
            ))}
          </section>
        ))}
        </div>
        <PrivacyIllustration />
      </div>
    </div>
  );
}
