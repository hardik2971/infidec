"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Icon, type IconName } from "@/components/icon";

type Img = { src: string; width: number; height: number };

export type IndustryItem = {
  slug: string;
  name: string;
  desc: string;
  href: string;
  icon: IconName;
  image?: Img;
  cases: { title: string; href: string; thumb?: Img }[];
};

/**
 * Industries accordion, modelled on the tatvasoft.com interaction:
 * desktop: click a vertical strip, it grows (flex-basis 0.4s) and its content fades in after 0.3s;
 * tablet/mobile (<= 991px): stacked accordion with an animated height and scroll-into-view.
 * Styles live in globals.css under "Industries accordion".
 */
export function IndustryAccordion({ items, initial = 0 }: { items: IndustryItem[]; initial?: number }) {
  const [active, setActive] = useState(initial);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const id = useId();
  const userOpened = useRef(false);

  // On small screens, bring the opened item into view below the sticky header
  useEffect(() => {
    if (!userOpened.current || !window.matchMedia("(max-width: 991px)").matches) return;
    const el = refs.current[active];
    if (!el) return;
    const t = setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 72 - 16;
      window.scrollTo({ top, behavior: "smooth" });
    }, 360);
    return () => clearTimeout(t);
  }, [active]);

  const open = (i: number) => {
    userOpened.current = true;
    setActive(i);
  };

  return (
    <ul className="ind-row" aria-label="Industries">
      {items.map((it, i) => {
        const isActive = i === active;
        return (
          <li
            key={it.slug}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`ind-item${isActive ? " is-active" : ""}`}
          >
            <h3 className="ind-label-heading">
              <button
                type="button"
                className="ind-label"
                aria-expanded={isActive}
                aria-controls={`${id}-${i}`}
                onClick={() => open(i)}
              >
                <span className="ind-label-text">{it.name}</span>
                <span className="ind-label-arrow-wrapper" aria-hidden="true">
                  <Plus className="ind-label-arrow" strokeWidth={1.5} />
                </span>
              </button>
            </h3>

            <div id={`${id}-${i}`} className="ind-panel" aria-hidden={!isActive} inert={!isActive}>
              <div className="ind-panel-inner">
                {it.image ? (
                  <Image
                    src={it.image.src}
                    width={it.image.width}
                    height={it.image.height}
                    alt=""
                    sizes="(min-width: 992px) 340px, 100vw"
                    className="ind-panel-img"
                  />
                ) : (
                  <div className="ind-panel-img brand-gradient grid place-items-center">
                    <Icon name={it.icon} className="size-28" />
                  </div>
                )}
                <div className="ind-panel-body">
                  <div>
                    <p className="ind-panel-title">{it.name}</p>
                    <p className="ind-panel-desc">{it.desc}</p>
                    <Link href={it.href} className="ind-learn">
                      Learn more<span className="sr-only"> about {it.name}</span>
                      <span className="ind-learn-badge" aria-hidden="true">
                        <ArrowRight className="size-5 text-white" />
                      </span>
                    </Link>
                  </div>
                  {it.cases.length > 0 && (
                    <div>
                      <p className="ind-panel-foot-title">Case studies</p>
                      <div className="ind-panel-foot">
                        {it.cases.map((c) => (
                          <Link key={c.href} href={c.href} className="ind-case">
                            {c.thumb ? (
                              <Image
                                src={c.thumb.src}
                                width={c.thumb.width}
                                height={c.thumb.height}
                                alt=""
                                sizes="70px"
                                className="ind-case-thumb"
                              />
                            ) : (
                              <span className="ind-case-thumb grid place-items-center bg-haze">
                                <Icon name={it.icon} className="size-9" float={false} />
                              </span>
                            )}
                            <span className="ind-case-text">{c.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
