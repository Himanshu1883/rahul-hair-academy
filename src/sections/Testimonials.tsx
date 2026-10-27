import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { SectionHeader } from "@/components/site/SectionHeader";
import { site } from "@/content";
import { cn } from "@/lib/utils";

const AVATAR = ["#1a73e8", "#e37400", "#188038", "#d93025", "#9334e6", "#00838f"];

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.97 10.97 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 0 1 5.5 12c0-.72.13-1.43.34-2.09V7.07H2.18A10.97 10.97 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" />
    </svg>
  );
}

export function Testimonials() {
  const reviews = site.testimonials.items;
  const autoplay = reviews.length > 4;

  return (
    <section id="reviews" className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader
          label={site.testimonials.label}
          title={site.testimonials.title}
          lead={site.testimonials.lead}
          align="center"
        />
        <div className="mt-3 flex justify-center">
          <a
            href={site.contact.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]"
          >
            <GoogleMark />
            {site.ui.viewOnGoogle}
          </a>
        </div>

        <div className="relative mt-6">
          {reviews.length > 1 ? (
            <>
              <button
                id="review-prev"
                type="button"
                className="absolute top-1/2 left-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--gold)] md:inline-flex"
                aria-label={site.ui.prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                id="review-next"
                type="button"
                className="absolute top-1/2 right-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--gold)] md:inline-flex"
                aria-label={site.ui.nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <Swiper
            className="review-swiper px-1 md:px-8"
            modules={autoplay ? [Autoplay, Navigation] : [Navigation]}
            autoplay={autoplay ? { delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
            navigation={{ prevEl: "#review-prev", nextEl: "#review-next" }}
            spaceBetween={14}
            slidesPerView={1.08}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: Math.min(4, reviews.length) },
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={`${review.name}-${i}`} className="h-auto">
                <GoogleReviewCard review={review} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function GoogleReviewCard({
  review,
  index,
}: {
  review: (typeof site.testimonials.items)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const long = review.text.length > 120;
  const color = AVATAR[index % AVATAR.length] ?? "#1a73e8";
  const meta = [review.reviewsLabel, "photosLabel" in review ? review.photosLabel : null].filter(Boolean).join(" · ");

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ background: color }}
            aria-hidden="true"
          >
            {review.name.slice(0, 1)}
          </span>
          <div className="min-w-0">
            <p className="truncate font-semibold">{review.name}</p>
            <p className="text-xs text-muted-foreground">{meta}</p>
          </div>
        </div>
        <GoogleMark />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex" aria-label={`${review.rating} stars`}>
          {Array.from({ length: 5 }).map((_, s) => (
            <Star
              key={s}
              className={cn("h-3.5 w-3.5", s < review.rating ? "fill-[#FABB05] text-[#FABB05]" : "text-muted-foreground")}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.when}</span>
      </div>

      <p className={cn("mt-3 text-sm leading-relaxed text-muted-foreground", !open && "line-clamp-4")}>{review.text}</p>
      {long ? (
        <button
          type="button"
          className="mt-1 self-start text-sm font-medium text-[#8ab4f8]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? site.ui.readLess : site.ui.readMore}
        </button>
      ) : null}

      {"ownerResponse" in review && review.ownerResponse ? (
        <div className="mt-3 rounded-lg bg-[var(--background)] px-3 py-2">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {site.ui.ownerResponse}
            {"ownerWhen" in review && review.ownerWhen ? ` · ${review.ownerWhen}` : ""}
          </p>
          <p className="mt-1 text-sm">{review.ownerResponse}</p>
        </div>
      ) : null}
    </article>
  );
}
