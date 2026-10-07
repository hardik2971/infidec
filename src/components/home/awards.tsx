import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { siGoogle, siUpwork } from "simple-icons";
import { site } from "@/lib/site";

type Platform = (typeof site.profiles)[number]["platform"];

/** Platform wordmarks. Google and Upwork use their open-licence marks; the others are set in type. */
function PlatformMark({ platform }: { platform: Platform }) {
  switch (platform) {
    case "Google Reviews":
      return (
        <span className="flex flex-col items-center gap-1">
          <span className="flex items-center gap-2 text-[1.6rem] font-semibold leading-none text-[#3c4043]">
            <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
              <path d={siGoogle.path} fill={`#${siGoogle.hex}`} />
            </svg>
            Google
          </span>
          <span className="flex items-center gap-1.5 text-[0.8125rem] font-semibold text-[#5f6368]">
            Reviews
            <span className="text-[#f5b800]" aria-hidden="true">
              ★★★★★
            </span>
          </span>
        </span>
      );
    case "Clutch":
      return (
        <span className="text-[1.85rem] font-bold leading-none tracking-tight text-[#17313b]">
          Clutch<span className="text-[#ef4335]">.</span>
        </span>
      );
    case "GoodFirms":
      return (
        <span className="text-[1.55rem] font-bold leading-none tracking-tight text-[#0f2846]">
          Good<span className="text-[#b86e00]">Firms</span>
        </span>
      );
    case "Upwork":
      return (
        <span className="flex items-center gap-2 text-[1.6rem] font-semibold leading-none text-[#14a800]">
          <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
            <path d={siUpwork.path} fill="#14a800" />
          </svg>
          upwork
        </span>
      );
  }
}

/** Generic certification seal (not an issuer's trademark). */
function CertSeal({ code }: { code: string }) {
  const id = `seal-${code.replace(/\W/g, "")}`;
  const [top, ...rest] = code.split(" ");
  return (
    <svg viewBox="0 0 100 100" className="size-[88px] shrink-0 drop-shadow-[0_10px_20px_rgba(0,194,240,0.25)]" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a855f7" />
          <stop offset="0.5" stopColor="#0a5bff" />
          <stop offset="1" stopColor="#00c2f0" />
        </linearGradient>
        <path id={`${id}-p`} d="M50 50 m-37 0 a37 37 0 1 1 74 0 a37 37 0 1 1 -74 0" />
      </defs>
      {/* scalloped outer edge */}
      <path
        d={Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const r = i % 2 ? 46 : 49;
          return `${i ? "L" : "M"}${(50 + r * Math.cos(a)).toFixed(1)} ${(50 + r * Math.sin(a)).toFixed(1)}`;
        }).join(" ") + "Z"}
        fill={`url(#${id}-g)`}
      />
      <circle cx="50" cy="50" r="42" fill="#0b1240" />
      <text fontSize="7.5" fontWeight="700" letterSpacing="2" fill="#9fb7ff">
        <textPath href={`#${id}-p`}>CERTIFIED · VERIFIED · CERTIFIED · VERIFIED ·</textPath>
      </text>
      <circle cx="50" cy="50" r="27" fill={`url(#${id}-g)`} />
      <text x="50" y={rest.length ? 48 : 54} textAnchor="middle" fontSize="13" fontWeight="800" fill="#ffffff">
        {top}
      </text>
      {rest.length > 0 && (
        <text x="50" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
          {rest.join(" ")}
        </text>
      )}
    </svg>
  );
}

export function AwardsAndCertifications() {
  const { profiles, certifications } = site;
  if (!profiles.length && !certifications.length) return null;

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-ink px-5 py-12 text-white sm:px-10 md:py-16 lg:px-14">
      {/* brand glows and tile motif */}
      {/* Radial gradients instead of blur() filters: same glow, far cheaper to paint on phones */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_55%_at_0%_0%,rgba(109,40,217,0.45),transparent),radial-gradient(50%_60%_at_100%_100%,rgba(10,91,255,0.4),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80">
              <BadgeCheck className="size-4 text-cyan" aria-hidden="true" />
              Awards &amp; certifications
            </p>
            <h2 id="trust-title" className="mt-5 font-display text-[clamp(2rem,2.4vw+1rem,3.25rem)] leading-[1.1] tracking-[-0.02em]">
              Reviewed by clients.{" "}
              <span className="bg-gradient-to-r from-[#c4a6ff] via-[#7fb2ff] to-cyan bg-clip-text text-transparent">
                Certified for trust.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-white/75">
            Independent reviews and audited standards behind every project we deliver.
          </p>
        </div>

        {profiles.length > 0 && (
          <div className="mt-12">
            <h3 className="text-sm font-semibold tracking-[0.12em] text-white/60 uppercase">Find us on</h3>
            <ul className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {profiles.map((p) => {
                const inner = (
                  <>
                    <PlatformMark platform={p.platform} />
                    <span className="sr-only">{p.platform}</span>
                    {p.url && (
                      <ArrowUpRight
                        aria-hidden="true"
                        className="absolute right-3 top-3 size-4 text-ink/30 transition-colors group-hover:text-blue"
                      />
                    )}
                  </>
                );
                const cls =
                  "group relative flex h-28 items-center justify-center rounded-[18px] bg-white px-4 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)] transition-transform duration-300 md:h-32";
                return (
                  <li key={p.platform}>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className={`${cls} hover:-translate-y-1.5`}>
                        {inner}
                        <span className="sr-only"> profile (opens in a new tab)</span>
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {certifications.length > 0 && (
          <div className="mt-14">
            <h3 className="text-sm font-semibold tracking-[0.12em] text-white/60 uppercase">Certified standards</h3>
            <div className="relative mt-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -inset-y-10 bg-[radial-gradient(28%_60%_at_16%_45%,rgba(168,85,247,0.55),transparent_70%),radial-gradient(28%_60%_at_52%_60%,rgba(10,91,255,0.55),transparent_70%),radial-gradient(28%_60%_at_86%_40%,rgba(0,194,240,0.45),transparent_70%)]"
            />
            <ul className="relative grid gap-5 md:grid-cols-3">
              {certifications.map((c) => (
                <li
                  key={c.code}
                  className="glass-card group relative overflow-hidden rounded-[22px] p-6 md:p-7"
                >
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#a855f7] via-blue to-cyan" />
                  <div className="flex items-start justify-between gap-4">
                    <CertSeal code={c.code} />
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00c2f0]/15 px-3 py-1 text-xs font-semibold text-[#7fe3ff]">
                      <BadgeCheck className="size-3.5" aria-hidden="true" />
                      Certified
                    </span>
                  </div>
                  <p className="mt-6 font-display text-3xl font-bold tracking-tight">{c.code}</p>
                  <p className="mt-1 text-lg font-semibold text-white/90">{c.name}</p>
                  <p className="mt-3 leading-relaxed text-white/70">{c.desc}</p>
                </li>
              ))}
            </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
