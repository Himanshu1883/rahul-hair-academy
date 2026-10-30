import { Award, Check, Clock, MapPin, Sparkles, Wallet } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SiteChrome } from "@/components/chrome/SiteChrome";
import { CourseClips } from "@/components/site/CourseClips";
import { Magnetic } from "@/components/site/Magnetic";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { useSite } from "@/hooks/site-context";
import { site, telLink, waLink, type Course } from "@/content";
import { cn } from "@/lib/utils";

export function CoursePage({ course }: { course: Course }) {
  const { goToEnrol } = useSite();
  const extras = course.extraBlocks as ReadonlyArray<{ title: string; items: readonly string[] }>;

  return (
    <SiteChrome>
      <section className="course-hero relative isolate flex min-h-[92svh] items-end overflow-hidden bg-black text-white md:min-h-svh md:items-center">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            src={course.heroImage}
            alt={course.title}
            width={1920}
            height={1080}
            priority
            className="h-full w-full object-cover object-[78%_center] max-md:object-[72%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/72 to-black/20 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-5 pb-36 pt-[calc(6rem+env(safe-area-inset-top))] sm:px-8 md:px-10 md:pb-20 lg:px-16 xl:px-20">
          <div className="max-w-[38rem] text-left">
            <p className="inline-block max-w-full rounded-full bg-gold-grad px-4 py-1.5 text-[0.55rem] font-bold tracking-[0.12em] text-[#0B0B0B] sm:px-5 sm:text-[0.62rem] sm:tracking-[0.14em]">
              {site.courses.promo.banner}
            </p>
            <p className="mt-5 flex items-center gap-3 text-[0.58rem] font-semibold tracking-[0.14em] text-[#E3C06F] uppercase sm:text-[0.68rem] sm:tracking-[0.22em]">
              <span className="h-px w-7 shrink-0 bg-[#E3C06F]/80 sm:w-10" />
              <span className="min-w-0 leading-relaxed">{site.courses.promo.tagline}</span>
            </p>
            <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.18em] text-white/70 uppercase sm:text-[0.68rem] sm:tracking-[0.2em]">
              {site.courses.promo.subtitle}
            </p>
            <h1 className="mt-3 font-display text-[clamp(1.85rem,7.4vw,4.35rem)] leading-[1.02] tracking-[-0.02em] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
              {course.title}
            </h1>
            <div className="mt-5 h-px w-20 bg-gradient-to-r from-[#E3C06F] to-transparent sm:w-24" />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">{course.teaser}</p>
            <div className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-2">
              <p className="font-display text-3xl gold-text-shimmer sm:text-4xl">{course.fee}</p>
              <p className="text-sm text-white/70">
                {course.duration} · {course.mode}
              </p>
            </div>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Magnetic className="w-full sm:w-auto">
                <button type="button" className="btn-gold w-full sm:w-auto" onClick={() => goToEnrol(course.id)}>
                  {site.ui.enrolNow}
                </button>
              </Magnetic>
              <a
                href={waLink(`Hi ${site.brand}, I want to enrol in ${course.title}.`)}
                className="btn-outline-gold w-full bg-black/25 backdrop-blur-sm sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.ui.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-px border-y border-[var(--border)] bg-[var(--surface)] sm:grid-cols-3 lg:grid-cols-6">
        {course.pillars.map((pillar) => (
          <div key={pillar.no} className="px-4 py-5">
            <p className="font-display text-2xl text-[var(--gold)]">{pillar.no}</p>
            <p className="mt-2 text-[0.72rem] leading-snug tracking-wide uppercase">{pillar.title}</p>
          </div>
        ))}
      </section>

      <section className="section-y px-4 md:px-8 lg:px-12">
        <SectionHeader label={site.courses.label} title={site.ui.courseOverview} />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, label: "Duration", value: `${course.duration} · ${course.schedule}` },
            { icon: Wallet, label: "Course Fee", value: course.fee },
            { icon: MapPin, label: "Location", value: site.courses.promo.location },
            { icon: Sparkles, label: "Eligibility", value: site.ui.limitedSeats },
          ].map((item) => (
            <article key={item.label} className="card-lux p-5">
              <item.icon className="h-5 w-5 text-[var(--gold)]" />
              <p className="mt-3 text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">{item.label}</p>
              <p className="mt-1 text-sm leading-relaxed">{item.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {course.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-[var(--gold)] px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.14em] text-[var(--gold)] uppercase"
            >
              {feature}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-4 bg-gold-grad px-6 py-8 text-[#0B0B0B] sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex items-start gap-3">
            <Award className="mt-0.5 h-7 w-7 shrink-0" />
            <div>
              <p className="font-display text-2xl">{site.ui.certificate}</p>
              <p className="mt-1 max-w-xl text-sm">
                Awarded on successful completion of {course.title}. Live practicals, client handling, and a career-ready finish.
              </p>
            </div>
          </div>
          <button type="button" className="btn-ghost-gold border-[#0B0B0B] text-[#0B0B0B]" onClick={() => goToEnrol(course.id)}>
            {site.ui.enrolNow}
          </button>
        </div>
      </section>

      <section className="section-y px-4 md:px-8 lg:px-12">
        <SectionHeader label={site.courses.promo.tagline} title={site.ui.courseHighlights} />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {course.syllabus.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-y px-4 md:px-8 lg:px-12">
        <SectionHeader label={site.ui.trainingPlan} title={course.planTitle} />
        <div className={cn("mt-8 grid gap-5", course.plan.length <= 2 ? "md:grid-cols-2" : "lg:grid-cols-3")}>
          {course.plan.map((stage) => (
            <Reveal key={stage.no}>
              <article className="card-lux h-full p-6">
                <p className="font-display text-4xl text-[var(--gold)]">{stage.no}</p>
                <p className="mt-3 text-[0.62rem] tracking-[0.2em] text-[var(--gold)] uppercase">{stage.kicker}</p>
                <h3 className="mt-1 font-display text-xl leading-tight">{stage.title}</h3>
                <p className="mt-3 text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">{site.ui.whatYoullLearn}</p>
                <ul className="mt-2 space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {extras.length ? (
        <section className="section-y px-4 md:px-8 lg:px-12">
          {extras.map((block) => (
            <div key={block.title}>
              <SectionHeader label={site.ui.trainingPlan} title={block.title} />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {block.items.map((item) => (
                  <li key={item} className="card-lux flex gap-3 p-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ) : null}

      <CourseClips clips={course.videos} onEnrol={() => goToEnrol(course.id)} />

      <section className="section-y px-4 md:px-8 lg:px-12">
        <SectionHeader label={site.ui.courseBenefits} title={site.ui.courseBenefits} />
        <div className="mt-6 flex flex-wrap gap-3">
          {course.benefits.map((item) => (
            <span key={item} className="card-lux px-4 py-3 text-sm">
              {item}
            </span>
          ))}
        </div>
        <p className="mt-8 text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">{site.ui.whoCanJoin}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {course.whoCanJoin.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border)] px-4 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-10 text-center font-display text-lg tracking-[0.08em] text-[var(--gold)] sm:text-xl">
          {course.footerLine}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" className="btn-gold" onClick={() => goToEnrol(course.id)}>
            {site.ui.enrolThisCourse}
          </button>
          <a href={telLink()} className="btn-outline-gold">
            {site.ui.call} {site.contact.phone}
          </a>
          <Link to="/" hash="courses" className="btn-ghost-gold">
            {site.ui.exploreCourses}
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
