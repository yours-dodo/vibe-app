"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  metric: string;
};

type TestimonialCarouselProps = {
  testimonials: readonly Testimonial[];
};

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4200, disableOnInteraction: false }}
      spaceBetween={20}
      slidesPerView={1.08}
      breakpoints={{
        768: { slidesPerView: 1.3 },
        1024: { slidesPerView: 2.15 },
      }}
    >
      {testimonials.map((item) => (
        <SwiperSlide key={`${item.name}-${item.metric}`}>
          <article className="surface-card card-highlight h-full rounded-[28px] p-6">
            <span className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              Client Voice
            </span>
            <p className="mt-5 text-base leading-8 text-[var(--foreground)]">
              “{item.quote}”
            </p>
            <div className="mt-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {item.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {item.role}
                </p>
              </div>
              <div className="rounded-2xl bg-white/88 px-4 py-3 text-right shadow-[0_12px_30px_rgba(38,102,190,0.08)]">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Result
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
                  {item.metric}
                </p>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
