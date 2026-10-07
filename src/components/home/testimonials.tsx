"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import type Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  logo?: string;
  /** Optional link, e.g. to the related case study */
  href?: string;
  linkLabel?: string;
  /** Icon shown in the logo position when there is no client logo */
  iconSrc?: string;
  /** "quote" shows the quote mark; "story" is a project summary, not a client quotation */
  kind?: "quote" | "story";
};
export type Rating = {
  platform: string;
  score: string;
  count: number;
  url: string;
};

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 60 44"
      width="60"
      height="44"
      aria-hidden="true"
      className="testimonial-quote-mark"
    >
      <path d="M4 2h22a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H13l7 15a1 1 0 0 1-1 1.4h-6a3 3 0 0 1-2.7-1.6L2 26V4a2 2 0 0 1 2-2Z" />
      <path d="M36 2h22a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H45l7 15a1 1 0 0 1-1 1.4h-6a3 3 0 0 1-2.7-1.6L34 26V4a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function RatingBadge({ rating }: { rating: Rating }) {
  return (
    <a
      href={rating.url}
      target="_blank"
      rel="noopener noreferrer"
      className="testimonials-rating"
    >
      <span className="testimonials-rating-platform">{rating.platform}</span>
      <span>
        <span className="flex items-center gap-1.5">
          <span className="font-semibold">{rating.score}/5.0</span>
          <span className="flex" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-4 fill-[#f5b800] text-[#f5b800]" />
            ))}
          </span>
        </span>
        <span className="block text-sm text-ink-soft">
          Based on {rating.count} client reviews
        </span>
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/**
 * Success stories, modelled on tatvasoft.com: Swiper fade (cross-fade), loop, 500ms,
 * 7s autoplay, arrows inside the card. Autoplay pauses on hover/focus and is disabled
 * for visitors who prefer reduced motion. Styles live in globals.css under "Success stories".
 */
export function Testimonials({
  heading,
  items,
  rating,
}: {
  heading: ReactNode;
  items: Testimonial[];
  rating: Rating | null;
}) {
  const el = useRef<HTMLDivElement>(null);
  const swiper = useRef<Swiper | null>(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    let cancelled = false;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const stop = () => swiper.current?.autoplay?.stop();
    // Swiper loads after first paint, so it is not part of the critical download
    Promise.all([import("swiper"), import("swiper/modules")]).then(
      ([{ default: SwiperCtor }, { A11y, Autoplay, EffectFade, Keyboard }]) => {
        if (cancelled) return;
        swiper.current = new SwiperCtor(node, {
          modules: [A11y, Autoplay, EffectFade, Keyboard],
          effect: "fade",
          fadeEffect: { crossFade: true },
          slidesPerView: 1,
          spaceBetween: 20,
          loop: items.length > 1,
          speed: 500,
          autoHeight: window.innerWidth <= 767,
          keyboard: { enabled: true, onlyInViewport: true },
          autoplay:
            reduce || items.length < 2
              ? false
              : {
                  delay: 7000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                },
          a11y: {
            prevSlideMessage: "Previous testimonial",
            nextSlideMessage: "Next testimonial",
          },
        });
        node.addEventListener("focusin", stop);
      },
    );
    return () => {
      cancelled = true;
      node.removeEventListener("focusin", stop);
      swiper.current?.destroy(true, true);
      swiper.current = null;
    };
  }, [items.length]);

  // No published reviews yet: same card design, with an honest invitation instead of a quote
  if (items.length === 0) {
    return (
      <div>
        <div className="home-testimonials-head">{heading}</div>
        <figure className="testimonial-card">
          <div className="testimonial-top">
            <QuoteMark />
          </div>
          <blockquote className="testimonial-quote">
            <p>
              Your project could be our next success story. Tell us what you are building and a senior engineer will
              reply within 24 hours with questions, ideas and a clear next step.
            </p>
          </blockquote>
          <div className="testimonial-bottom">
            <figcaption className="testimonial-client">
              <span className="testimonial-client-name">The INFIDEC team</span>
            </figcaption>
          </div>
        </figure>
      </div>
    );
  }

  return (
    <div>
      <div className="home-testimonials-head">
        {heading}
        {rating && <RatingBadge rating={rating} />}
      </div>
      <div
        ref={el}
        className="swiper testimonials-swiper"
        aria-label="Client testimonials"
      >
        <div className="swiper-wrapper">
          {items.map((t) => (
            <div key={t.name + t.company} className="swiper-slide">
              <figure className="testimonial-card">
                <div className="testimonial-top">
                  <QuoteMark />
                </div>
                <blockquote className="testimonial-quote">
                  <p>{t.quote}</p>
                </blockquote>
                <div className="testimonial-bottom">
                  <figcaption className="testimonial-client">
                    {t.iconSrc && !t.logo && (
                      <Image src={t.iconSrc} width={48} height={48} alt="" aria-hidden="true" className="size-12 shrink-0" unoptimized />
                    )}
                    {t.logo && (
                      <Image
                        src={t.logo}
                        width={120}
                        height={40}
                        alt={t.company}
                        className="testimonial-client-logo"
                      />
                    )}
                    <span className="testimonial-client-name">
                      {t.name}
                      <span className="text-ink-soft">
                        {t.role ? `, ${t.role}` : ""}
                        {t.logo || !t.company ? "" : `, ${t.company}`}
                      </span>
                    </span>
                    {t.href && (
                      <Link href={t.href} className="ml-1 text-[0.9375rem] font-medium text-blue underline-offset-4 hover:underline">
                        {t.linkLabel ?? "Read more"}
                        <span className="sr-only">: {t.name}</span>
                      </Link>
                    )}
                  </figcaption>
                  {items.length > 1 && (
                    <div className="testimonial-nav">
                      <button
                        type="button"
                        className="slider-btn"
                        aria-label="Previous testimonial"
                        onClick={() => swiper.current?.slidePrev()}
                      >
                        <ArrowLeft className="size-6" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="slider-btn"
                        aria-label="Next testimonial"
                        onClick={() => swiper.current?.slideNext()}
                      >
                        <ArrowRight className="size-6" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
