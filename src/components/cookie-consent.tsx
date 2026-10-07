"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "infidec-cookie-consent";
export type Consent = "accepted" | "rejected";

/** Read the visitor's choice (null if they have not chosen yet). Use before loading analytics. */
export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

/**
 * First-visit cookie banner. Shown until the visitor accepts or rejects; the choice is stored
 * in localStorage and announced with a "cookie-consent" window event so analytics can react.
 */
export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Delay slightly so the banner never competes with the page's first paint
    const t = setTimeout(() => setOpen(getConsent() === null), 600);
    return () => clearTimeout(t);
  }, []);

  const choose = (v: Consent) => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* storage blocked: just close for this visit */
    }
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: v }));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="cookie-banner fixed inset-x-0 bottom-2 z-[60]"
    >
      <div className="container-x">
      <div className="flex flex-col gap-5 rounded-[12px] border border-line bg-white p-3 shadow-[0_24px_60px_-20px_rgba(7,11,46,0.35)] md:flex-row md:items-center md:p-3 md:px-5">
        <div className="flex-1">
          <div>
            <p id="cookie-title" className="font-semibold text-ink">
              We use cookies
            </p>
            <p id="cookie-desc" className="mt-1 text-[0.9375rem] leading-relaxed text-slate">
              We use essential cookies to run this site and, with your permission, analytics cookies to understand how
              it is used. Read our{" "}
              <Link href="/privacy-policy#cookies" className="font-medium text-blue underline-offset-2 hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="min-h-11 flex-1 rounded-btn px-5 font-semibold text-ink ring-1 ring-line hover:ring-ink/30 md:flex-none"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="min-h-11 flex-1 rounded-btn bg-blue px-5 font-semibold text-white hover:bg-blue-deep md:flex-none"
          >
            Accept all
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
