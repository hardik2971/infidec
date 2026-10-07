"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";

export type FaqItem = { q: string; a: string };

/**
 * FAQ accordion, modelled on tatvasoft.com: two columns of glass cards, one answer open at a
 * time across both columns, 0.3s grid-row height animation and a +/- icon. Keyboard: Enter/Space
 * toggles, Up/Down/Home/End move between questions. Styles live in globals.css under "FAQ".
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  const onKey = (e: KeyboardEvent, i: number) => {
    const last = items.length - 1;
    const next =
      e.key === "ArrowDown" ? (i + 1) % items.length
      : e.key === "ArrowUp" ? (i - 1 + items.length) % items.length
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    refs.current[next]?.focus();
  };

  return (
    <div className="faq-row">
      {columns.map((col, c) => (
        <div key={c} className="faq-col">
          {col.map((f, j) => {
            const i = c * half + j;
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq-item${isOpen ? " is-open" : ""}`} onClick={() => setOpen(isOpen ? null : i)}>
                <h3>
                  <button
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-${i}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(isOpen ? null : i);
                    }}
                    onKeyDown={(e) => onKey(e, i)}
                  >
                    {f.q}
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`${id}-${i}`} className="faq-panel" role="region" aria-hidden={!isOpen}>
                  <div className="faq-panel-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
