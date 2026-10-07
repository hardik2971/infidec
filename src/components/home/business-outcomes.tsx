"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type Swiper from "swiper";
import "swiper/css";

export type OutcomeSlide = {
  slug: string;
  industry: string;
  title: string;
  desc: string;
  chips: string[];
  href: string;
  tint: string;
  image?: { src: string; width: number; height: number };
};

/**
 * Business outcomes carousel, modelled on tatvasoft.com: Swiper with 1.13 slides per view,
 * 16px gap (20px from 767px), infinite loop, 800ms transitions, wheel and keyboard control.
 * Styles live in globals.css under "Business outcomes".
 */
export function BusinessOutcomes({
  heading,
  slides,
}: {
  heading: ReactNode;
  slides: OutcomeSlide[];
}) {
  const el = useRef<HTMLDivElement>(null);
  const swiper = useRef<Swiper | null>(null);

  useEffect(() => {
    let cancelled = false;
    // Swiper loads after first paint, so it is not part of the critical download
    Promise.all([import("swiper"), import("swiper/modules")]).then(
      ([{ default: SwiperCtor }, { A11y, Keyboard, Mousewheel }]) => {
        if (cancelled || !el.current) return;
        swiper.current = new SwiperCtor(el.current, {
          modules: [A11y, Keyboard, Mousewheel],
          slidesPerView: 1.13,
          spaceBetween: 16,
          loop: true,
          speed: 800,
          grabCursor: true,
          mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          },
          keyboard: { enabled: true, onlyInViewport: true },
          a11y: {
            prevSlideMessage: "Previous case study",
            nextSlideMessage: "Next case study",
          },
          breakpoints: { 767: { spaceBetween: 20 } },
        });
      },
    );
    return () => {
      cancelled = true;
      swiper.current?.destroy(true, true);
      swiper.current = null;
    };
  }, []);

  return (
    <div className="bo-section">
      <div className="container-x">
        <div className="bo-head">
          {heading}
          <div className="bo-nav">
            <button
              type="button"
              className="slider-btn"
              aria-label="Previous case study"
              onClick={() => swiper.current?.slidePrev()}
            >
              <ArrowLeft className="size-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="slider-btn"
              aria-label="Next case study"
              onClick={() => swiper.current?.slideNext()}
            >
              <ArrowRight className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={el}
          className="swiper bo-swiper"
          aria-label="Business outcomes"
        >
          <div className="swiper-wrapper">
            {slides.map((s) => (
              <div key={s.slug} className="swiper-slide">
                <article className="bo-card">
                  {s.image && (
                    <Image
                      src={s.image.src}
                      width={s.image.width}
                      height={s.image.height}
                      alt=""
                      sizes="(min-width: 1400px) 1200px, 90vw"
                      className="bo-card-bg"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="bo-card-tint"
                    style={{
                      background: s.image
                        ? `linear-gradient(90deg, ${s.tint} 0%, ${s.tint}f0 30%, ${s.tint}a6 52%, ${s.tint}00 78%)`
                        : `linear-gradient(120deg, ${s.tint} 0%, ${s.tint}e6 55%, #0a5bff 130%)`,
                    }}
                  />
                  <div className="bo-card-top">
                    <div className="bo-card-header">
                      <p>{s.industry}</p>
                      <h3>{s.title}</h3>
                    </div>
                    <p className="bo-card-desc">{s.desc}</p>
                    <div className="bo-card-chips">
                      {s.chips.map((c) => (
                        <span key={c}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bo-card-bottom">
                    <Link href={s.href} className="bo-card-cta">
                      View case study
                      <span className="sr-only">: {s.title}</span>
                      <span className="bo-card-cta-badge" aria-hidden="true">
                        <ArrowRight className="size-5" />
                      </span>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
