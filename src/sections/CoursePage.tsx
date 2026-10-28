import { Award, Check, Clock, MapPin, Sparkles, Wallet } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SiteChrome } from "@/components/chrome/SiteChrome";
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
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-[calc(5.5rem+env(safe-area-inset-top))] pb-10 lg:h-svh lg:max-h-svh lg:justify-center lg:pb-16">
        <div className="absolute inset-0">
          <SmartImage
            src={course.image}
            alt={course.title}
            width={1920}
            height={1080}
            priority
            className="hero-media h-full w-full object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="hero-vignette absolute inset-0" />
        </div>

        <div className="relative z-10 mt-3 flex justify-center px-4">
          <p className="w-fit max-w-[calc(100%-1.5rem)] rounded-full bg-gold-grad px-5 py-2 text-center text-[0.58rem] font-bold tracking-[0.14em] text-[#0B0B0B] sm:px-7 sm:text-[0.62rem]">
            {site.courses.promo.banner}
          </p>
        </div>

        <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
          <p className="section-label">
            <span className="h-px w-8 bg-current" />
            {site.courses.promo.tagline}
          </p>
          <p className="mt-2 text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--gold)] uppercase">
            {site.courses.promo.subtitle}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(2rem,6vw,4.4rem)] leading-[0.95]">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{course.teaser}</p>
          <div className="mt-5 flex flex-wrap items-end gap-x-6 gap-y-2">
            <p className="font-display text-3xl gold-text-shimmer sm:text-4xl">{course.fee}</p>
            <p className="text-sm text-muted-foreground">
              {course.duration} · {course.mode}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Magnetic>
              <button type="button" className="btn-gold" onClick={() => goToEnrol(course.id)}>
                {site.ui.enrolNow}
              </button>
            </Magnetic>
            <a
              href={waLink(`Hi ${site.brand}, I want to enrol in ${course.title}.`)}
              className="btn-outline-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.ui.whatsapp}
            </a>
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
