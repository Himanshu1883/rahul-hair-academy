import { Check } from "lucide-react";
import { useMemo, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlaceholderText } from "@/components/site/PlaceholderText";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { useSite } from "@/hooks/site-context";
import { site, type Course } from "@/content";
import { cn } from "@/lib/utils";

export function Courses() {
  const { goToEnrol } = useSite();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<Course | null>(null);

  const items = useMemo(
    () => site.courses.items.filter((c) => filter === "all" || c.level === filter),
    [filter],
  );

  return (
    <section id="courses" className="px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.courses.label} title={site.courses.title} lead={site.courses.lead} />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Course levels">
          {site.courses.levels.map((level) => (
            <button
              key={level.id}
              type="button"
              role="tab"
              aria-selected={filter === level.id}
              onClick={() => setFilter(level.id)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.16em]",
                filter === level.id
                  ? "border-[var(--gold)] bg-gold-grad text-[#0B0B0B]"
                  : "border-[var(--border)] text-muted-foreground",
              )}
            >
              {level.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((course, i) => (
            <Reveal key={course.id} delay={i * 60}>
              <article className="card-lux relative flex h-full flex-col overflow-hidden">
                {"ribbon" in course && course.ribbon ? (
                  <span className="absolute top-4 right-4 z-10 rounded-full bg-gold-grad px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-[#0B0B0B]">
                    {course.ribbon}
                  </span>
                ) : null}
                <div className="frame-gold m-4 overflow-hidden">
                  <SmartImage src={course.image} alt={course.title} width={800} height={560} className="aspect-[16/11]" />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--gold)]">{course.level}</p>
                  <h3 className="mt-2 font-display text-2xl">{course.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{course.teaser}</p>
                  <dl className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                    <div>
                      <dt className="uppercase tracking-widest">Duration</dt>
                      <dd><PlaceholderText value={course.duration} /></dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-widest">Mode</dt>
                      <dd><PlaceholderText value={course.mode} /></dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-widest">Fee</dt>
                      <dd><PlaceholderText value={course.fee} /></dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--gold)]">
                    {site.ui.whatYoullLearn}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{course.syllabus[0]}</p>
                  <div className="mt-auto flex gap-2 pt-5">
                    <button type="button" className="btn-outline-gold flex-1 px-3 text-[0.7rem]" onClick={() => setOpen(course)}>
                      {site.ui.viewSyllabus}
                    </button>
                    <button type="button" className="btn-gold flex-1 px-3 text-[0.7rem]" onClick={() => goToEnrol(course.id)}>
                      {site.ui.enrolNow}
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 overflow-x-auto">
          <h3 className="mb-4 font-display text-2xl">Compare the path</h3>
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-[var(--border)] p-3 text-left text-muted-foreground"> </th>
                {site.courses.comparison.columns.map((col) => (
                  <th key={col} className="border-b border-[var(--border)] p-3 text-left font-display text-base">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {site.courses.comparison.rows.map((row) => (
                <tr key={row.label}>
                  <th className="border-b border-[var(--border)] p-3 text-left text-muted-foreground">{row.label}</th>
                  {row.values.map((v, i) => (
                    <td key={`${row.label}-${i}`} className="border-b border-[var(--border)] p-3">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>

      <Dialog open={!!open} onOpenChange={() => setOpen(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-[var(--border)] bg-[var(--surface)] sm:max-w-lg">
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
                  <dd><PlaceholderText value={open.duration} /></dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Batches</dt>
                  <dd><PlaceholderText value={site.courses.batches} /></dd>
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
