import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlaceholderText } from "@/components/site/PlaceholderText";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { useSite } from "@/hooks/site-context";
import { site, type Course } from "@/content";
import { cn } from "@/lib/utils";

export function Courses() {
  const { goToEnrol, prefilledCourseId } = useSite();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<Course | null>(null);

  useEffect(() => {
    if (prefilledCourseId) setFilter("all");
  }, [prefilledCourseId]);

  const items = useMemo(
    () => site.courses.items.filter((c) => filter === "all" || c.level === filter),
    [filter],
  );

  return (
    <section id="courses" className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.courses.label} title={site.courses.title} lead={site.courses.lead} />

        <div className="tab-scroller mt-5 pb-1" role="tablist" aria-label="Course levels">
          {site.courses.levels.map((level) => (
            <button
              key={level.id}
              type="button"
              role="tab"
              aria-selected={filter === level.id}
              onClick={() => setFilter(level.id)}
              className={cn(
                "min-h-10 shrink-0 rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.16em]",
                filter === level.id
                  ? "border-[var(--gold)] bg-gold-grad text-[#0B0B0B]"
                  : "border-[var(--border)] text-muted-foreground",
              )}
            >
              {level.label}
            </button>
          ))}
        </div>

        <div className="relative mt-6">
          <button
            id="course-prev"
            type="button"
            className="absolute top-1/2 left-1 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--surface)] text-[var(--gold)] shadow-[var(--shadow-lux)] md:inline-flex"
            aria-label={site.ui.prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            id="course-next"
            type="button"
            className="absolute top-1/2 right-1 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--surface)] text-[var(--gold)] shadow-[var(--shadow-lux)] md:inline-flex"
            aria-label={site.ui.nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            key={filter}
            className="course-swiper px-1"
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: "#course-prev", nextEl: "#course-next" }}
            spaceBetween={16}
            slidesPerView={1.12}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {items.map((course) => (
              <SwiperSlide key={course.id}>
                <article
                  id={`course-${course.id}`}
                  className="card-lux relative flex h-full scroll-mt-28 flex-col overflow-hidden"
                >
                  {"ribbon" in course && course.ribbon ? (
                    <span className="absolute top-3 right-3 z-10 rounded-full bg-gold-grad px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#0B0B0B]">
                      {course.ribbon}
                    </span>
                  ) : null}
                  <SmartImage
                    src={course.image}
                    alt={course.title}
                    width={640}
                    height={360}
                    className="aspect-[16/10] object-cover"
                  />
                  <div className="flex flex-1 flex-col px-4 pt-3 pb-4">
                    <p className="text-[0.6rem] uppercase tracking-[0.18em] text-[var(--gold)]">{course.level}</p>
                    <h3 className="mt-1 font-display text-lg leading-tight">{course.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">{course.teaser}</p>
                    <p className="mt-2 text-[0.7rem] text-muted-foreground">
                      <PlaceholderText value={course.duration} /> · <PlaceholderText value={course.mode} />
                    </p>
                    <div className="mt-auto flex gap-2 pt-3">
                      <button
                        type="button"
                        className="btn-outline-gold flex-1 px-2 text-[0.62rem]"
                        onClick={() => setOpen(course)}
                      >
                        {site.ui.viewSyllabus}
                      </button>
                      <button
                        type="button"
                        className="btn-gold flex-1 px-2 text-[0.62rem]"
                        onClick={() => goToEnrol(course.id)}
                      >
                        {site.ui.enrolNow}
                      </button>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={() => setOpen(null)}>
        <DialogContent className="max-h-[85vh] w-[calc(100%-1.5rem)] overflow-y-auto border-[var(--border)] bg-[var(--surface)] sm:max-w-lg">
          {open ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{open.title}</DialogTitle>
                <DialogDescription>{open.teaser}</DialogDescription>
              </DialogHeader>
              <ul className="space-y-2">
                {open.syllabus.map((mod) => (
                  <li key={mod} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                    {mod}
                  </li>
                ))}
              </ul>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd>
                    <PlaceholderText value={open.duration} />
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Batches</dt>
                  <dd>
                    <PlaceholderText value={site.courses.batches} />
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{site.ui.kitIncluded}</dt>
                  <dd>{open.kitIncluded ? "Yes" : "No"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{site.ui.certificate}</dt>
                  <dd>{open.certificate ? "Yes" : "No"}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-muted-foreground">Eligibility</dt>
                  <dd>{open.eligibility}</dd>
                </div>
              </dl>
              <button
                type="button"
                className="btn-gold mt-4 w-full"
                onClick={() => {
                  const id = open.id;
                  setOpen(null);
                  goToEnrol(id);
                }}
              >
                {site.ui.enrolNow}
              </button>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
