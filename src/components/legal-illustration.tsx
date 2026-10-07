import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./icon";

/** Shared glass card shell for the sticky legal-page illustration. */
function Card({ children, title, desc }: { children: React.ReactNode; title: string; desc: string }) {
  return (
    <aside className="hidden lg:sticky lg:top-[calc(var(--header-offset)_+_32px)] lg:block lg:self-start">
      <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-[linear-gradient(160deg,#f3f6fe_0%,#e6edfb_55%,#ece6fb_100%)] p-8 shadow-[0_24px_48px_-28px_rgba(10,91,255,0.35)]">
        <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full bg-white/70 blur-2xl" />
        {children}
        <div className="relative mt-6">
          <p className="font-display text-xl font-semibold text-ink">{title}</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{desc}</p>
          <Link
            href={`mailto:${site.email}`}
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-btn bg-blue px-4 font-semibold text-white hover:bg-blue-deep"
          >
            Questions? Email us
          </Link>
        </div>
      </div>
    </aside>
  );
}

const grad = (
  <defs>
    <linearGradient id="lg-brand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#6d28d9" />
      <stop offset="0.55" stopColor="#0a5bff" />
      <stop offset="1" stopColor="#00c2f0" />
    </linearGradient>
    <linearGradient id="lg-paper" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#ffffff" />
      <stop offset="1" stopColor="#eef2fc" />
    </linearGradient>
  </defs>
);

/** Privacy: a protective shield with a lock over a data card, surrounded by guarded data points. */
export function PrivacyIllustration() {
  return (
    <Card
      title="Your data stays yours"
      desc="We collect only what we need to reply to you, keep it secure, and never sell it."
    >
      <svg viewBox="0 0 360 300" className="relative w-full" role="img" aria-label="Shield with a lock protecting personal data">
        {grad}
        {/* orbit rings */}
        <ellipse cx="180" cy="160" rx="160" ry="112" fill="none" stroke="#c4d1f1" strokeDasharray="4 8" />
        <ellipse cx="180" cy="160" rx="118" ry="82" fill="none" stroke="#d4def6" />
        {/* data card behind */}
        <rect x="70" y="118" width="150" height="104" rx="16" fill="url(#lg-paper)" stroke="#dbe3f5" />
        <rect x="88" y="138" width="44" height="44" rx="22" fill="#dfe7fb" />
        <rect x="142" y="144" width="62" height="9" rx="4.5" fill="#c9d5f2" />
        <rect x="142" y="162" width="44" height="9" rx="4.5" fill="#dfe7fb" />
        <rect x="88" y="196" width="116" height="9" rx="4.5" fill="#dfe7fb" />
        {/* shield */}
        <path d="M228 66 L292 90 V146 C292 190 264 216 228 232 C192 216 164 190 164 146 V90 Z" fill="url(#lg-brand)" />
        <path d="M228 80 L280 99 V146 C280 182 258 204 228 218 C198 204 176 182 176 146 V99 Z" fill="#ffffff" fillOpacity="0.14" />
        {/* lock */}
        <rect x="204" y="140" width="48" height="40" rx="9" fill="#ffffff" />
        <path d="M214 140 V128 a14 14 0 0 1 28 0 V140" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
        <circle cx="228" cy="157" r="5" fill="#0a5bff" />
        <rect x="226" y="159" width="4" height="10" rx="2" fill="#0a5bff" />
        {/* guarded data points */}
        {[
          [40, 150],
          [96, 70],
          [318, 210],
          [300, 62],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="13" fill="#ffffff" stroke="#c9d5f2" />
            <path d={`M${x - 5} ${y} l3.5 4 l6.5 -8`} fill="none" stroke="#0a5bff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}
      </svg>
      <div className="relative mt-2 flex gap-2">
        {(["lock", "shield", "key"] as const).map((n) => (
          <span key={n} className="grid size-12 place-items-center rounded-[14px] bg-white/80 ring-1 ring-white">
            <Icon name={n} className="size-8" float={false} />
          </span>
        ))}
      </div>
    </Card>
  );
}

/** Terms: a signed agreement with checked clauses, a pen and an approval seal. */
export function TermsIllustration() {
  return (
    <Card
      title="Clear terms, no surprises"
      desc="Plain-language rules for using this website. Client projects are covered by their own written agreements."
    >
      <svg viewBox="0 0 360 300" className="relative w-full" role="img" aria-label="Signed agreement with checked clauses and an approval seal">
        {grad}
        <ellipse cx="180" cy="160" rx="160" ry="112" fill="none" stroke="#c4d1f1" strokeDasharray="4 8" />
        {/* back sheet */}
        <rect x="104" y="40" width="160" height="210" rx="16" fill="#e3eafb" transform="rotate(-6 184 145)" />
        {/* front sheet */}
        <rect x="96" y="44" width="160" height="214" rx="16" fill="url(#lg-paper)" stroke="#dbe3f5" />
        <rect x="116" y="66" width="80" height="11" rx="5.5" fill="url(#lg-brand)" />
        {[96, 128, 160].map((y) => (
          <g key={y}>
            <rect x="116" y={y} width="16" height="16" rx="5" fill="#0a5bff" />
            <path d={`M120 ${y + 8} l3 3 l6 -6`} fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="140" y={y + 3} width="96" height="9" rx="4.5" fill="#dfe7fb" />
          </g>
        ))}
        {/* signature */}
        <path d="M118 222 c10 -16 18 -16 22 0 s14 12 22 -6 s14 -10 22 4" fill="none" stroke="#3b3ff0" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="116" y="232" width="100" height="2" rx="1" fill="#c9d5f2" />
        {/* pen */}
        <g transform="rotate(38 272 196)">
          <rect x="262" y="120" width="20" height="104" rx="10" fill="url(#lg-brand)" />
          <path d="M262 224 L272 250 L282 224 Z" fill="#070b2e" />
          <rect x="262" y="138" width="20" height="8" fill="#ffffff" fillOpacity="0.35" />
        </g>
        {/* approval seal */}
        <circle cx="262" cy="84" r="30" fill="url(#lg-brand)" />
        <circle cx="262" cy="84" r="22" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeDasharray="3 4" />
        <path d="M250 84 l8 8 l15 -16" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="relative mt-2 flex gap-2">
        {(["briefcase", "handshake", "check"] as const).map((n) => (
          <span key={n} className="grid size-12 place-items-center rounded-[14px] bg-white/80 ring-1 ring-white">
            <Icon name={n} className="size-8" float={false} />
          </span>
        ))}
      </div>
    </Card>
  );
}
