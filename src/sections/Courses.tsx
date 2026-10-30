import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { useSite } from "@/hooks/site-context";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function Courses() {
  const { goToEnrol } = useSite();

  return (
    <section id="courses" className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.courses.label} title={site.courses.title} lead={site.courses.lead} />

        <div className="mt-10 space-y-10 lg:space-y-16">
          {site.courses.items.map((course, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={course.id} delay={index * 60}>
                <article
                  id={`course-${course.id}`}
                  className="grid scroll-mt-28 items-stretch gap-5 lg:grid-cols-2 lg:gap-12"
                >
                  <Link
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className={cn("frame-gold relative block overflow-hidden", reverse && "lg:order-2")}
                  >
                    {"ribbon" in course && course.ribbon ? (
                      <span className="absolute top-4 left-4 z-10 rounded-full bg-gold-grad px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-[#0B0B0B]">
                        {course.ribbon}
                      </span>
                    ) : null}
                    <SmartImage
                      src={course.heroImage}
                      alt={course.title}
                      width={960}
                      height={720}
                      priority
                      className="aspect-[16/10] h-full min-h-[16rem] w-full object-cover object-[78%_center] lg:aspect-auto lg:min-h-[22rem]"
                    />
                  </Link>

                  <div className={cn("flex flex-col justify-center py-1 lg:py-4", reverse && "lg:order-1")}>
                    <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--gold)] uppercase">
                      {course.duration} · {course.mode}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.55rem,3vw,2.35rem)] leading-[1.08]">
                      {course.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{course.teaser}</p>
                    <p className="mt-4 text-xs text-muted-foreground">{course.schedule}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {course.features.slice(0, 4).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[0.58rem] font-semibold tracking-[0.12em] text-[var(--gold)] uppercase"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link to="/courses/$slug" params={{ slug: course.slug }} className="btn-gold">
                        {site.ui.viewCourse}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <button type="button" className="btn-outline-gold" onClick={() => goToEnrol(course.id)}>
                        {site.ui.enrolNow}
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
