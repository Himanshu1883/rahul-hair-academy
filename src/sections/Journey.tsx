import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { useReducedMotion } from "@/hooks/media";
import { site } from "@/content";
import { cn } from "@/lib/utils";

const AUTO_MS = 5500;

export function Journey() {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [stage, setStage] = useState(0);
  const current = site.journey.stages[stage] ?? site.journey.stages[0];
  const total = site.journey.stages.length;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(!!entry?.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reduced) return;
    const timer = window.setInterval(() => {
      setStage((s) => (s + 1) % total);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [inView, reduced, total, stage]);

  return (
    <section ref={rootRef} className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader
          label={site.journey.label}
          title={site.journey.title}
          lead={site.journey.lead}
          align="center"
        />
      </div>

      <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <p className="font-display text-6xl text-[var(--gold)] sm:text-8xl">{current?.no}</p>
          <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{current?.title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{current?.text}</p>
          <ul className="mt-6 space-y-3">
            {current?.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 h-[2px] overflow-hidden bg-[var(--border)]">
            <div key={stage} className="journey-fill h-full bg-[var(--gold-gradient)]" />
          </div>

          <ol className="mt-5 flex flex-wrap gap-2">
            {site.journey.stages.map((s, i) => (
              <li key={s.no}>
                <button
                  type="button"
                  onClick={() => setStage(i)}
                  aria-pressed={i === stage}
                  className={cn(
                    "min-h-11 min-w-14 rounded-full border px-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors",
                    i === stage
                      ? "border-[var(--gold)] bg-gold-grad text-[#0B0B0B]"
                      : "border-[var(--border)] text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)]",
                  )}
                >
                  {s.no}
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="frame-gold overflow-hidden">
          {current ? (
            <SmartImage
              src={current.image}
              alt={current.title}
              width={1200}
              height={900}
              className="aspect-[4/3] h-full min-h-[16rem] w-full object-cover lg:min-h-[28rem]"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
