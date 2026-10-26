import { Star } from "lucide-react";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { PlaceholderText } from "@/components/site/PlaceholderText";
import { SectionHeader } from "@/components/site/SectionHeader";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [tab, setTab] = useState<"student" | "salon">("student");
  const reviews = tab === "student" ? site.testimonials.studentReviews : site.testimonials.salonReviews;

  return (
    <section id="reviews" className="px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.testimonials.label} title={site.testimonials.title} align="center" />
        <div className="mt-8 flex justify-center gap-2">
          {(["student", "salon"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "min-h-11 rounded-full border px-5 text-xs font-semibold uppercase tracking-[0.16em]",
                tab === t
                  ? "border-[var(--gold)] bg-gold-grad text-[#0B0B0B]"
                  : "border-[var(--border)] text-muted-foreground",
              )}
            >
              {t === "student" ? site.ui.studentReviews : site.ui.salonReviews}
            </button>
          ))}
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          spaceBetween={18}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
          className="mt-10"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={`${review.name}-${i}`}>
              <article className="card-lux h-full p-7">
                <div className="flex gap-1 text-[var(--gold)]">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  <PlaceholderText value={review.text} />
                </p>
                <p className="mt-6 font-display text-lg">
                  <PlaceholderText value={review.name} />
                </p>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)]">
                  <PlaceholderText value={review.course} />
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
