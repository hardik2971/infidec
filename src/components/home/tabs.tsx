"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Technology tabs, modelled on tatvasoft.com: glass tab bar with a sliding indicator
 * (transform/width 0.3s), panels server-rendered. WAI-ARIA tabs with arrow-key support.
 * Styles live in globals.css under "Technology tabs".
 */
export function Tabs({ labels, panels }: { labels: string[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const id = useId();
  const bar = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicator = useRef<HTMLSpanElement>(null);

  const place = useCallback(() => {
    const t = tabs.current[active];
    const ind = indicator.current;
    if (!t || !ind) return;
    ind.style.width = `${t.offsetWidth}px`;
    ind.style.height = `${t.offsetHeight}px`;
    ind.style.transform = `translate(${t.offsetLeft}px, ${t.offsetTop}px)`;
  }, [active]);

  useIso(() => {
    place();
  }, [place]);

  useEffect(() => {
    // Enable the transition only after the first placement, so it never animates in from 0
    const r = requestAnimationFrame(() => setReady(true));
    const onResize = () => place();
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(place);
    return () => {
      cancelAnimationFrame(r);
      window.removeEventListener("resize", onResize);
    };
  }, [place]);

  const select = (i: number) => {
    setActive(i);
    tabs.current[i]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const d = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + labels.length) % labels.length;
    tabs.current[n]?.focus();
    select(n);
  };

  return (
    <div className="tech-tabs-inner">
      <div ref={bar} role="tablist" aria-label="Technology categories" className={`tech-tabs-bar has-indicator${ready ? " is-ready" : ""}`}>
        <span ref={indicator} className="tech-tab-indicator" aria-hidden="true" />
        {labels.map((l, i) => (
          <button
            key={l}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${id}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`tech-tab${active === i ? " is-active" : ""}`}
          >
            {l}
          </button>
        ))}
      </div>
      {panels.map((p, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          hidden={active !== i}
          tabIndex={0}
          className="tech-grid"
        >
          {p}
        </div>
      ))}
    </div>
  );
}
