import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { useMediaQuery, useReducedMotion } from "@/hooks/media";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function Journey() {
  const pin = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [stage, setStage] = useState(0);
  const current = site.journey.stages[stage] ?? site.journey.stages[0];

  useEffect(() => {
    if (reduced || !desktop) return;
    const el = pin.current;
    if (!el) return;
    let st: { kill: () => void } | undefined;
    void (async () => {
      const gsap = (await import("gsap")).gsap;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      st = ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "+=280%",
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const i = Math.min(site.journey.stages.length - 1, Math.floor(self.progress * site.journey.stages.length));
          setStage(i);
        },
      });
    })();
    return () => st?.kill();
  }, [reduced, desktop]);

  return (
    <section className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.journey.label} title={site.journey.title} align="center" />
      </div>
      <div ref={pin} className="mt-8 flex w-full flex-col justify-center lg:min-h-[70vh]">
        {desktop && !reduced ? (
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-display text-7xl gold-text md:text-9xl">{current?.no}</p>
              <h3 className="mt-4 font-display text-4xl md:text-5xl">{current?.title}</h3>
              <p className="mt-4 max-w-md text-muted-foreground">{current?.text}</p>
              <div className="mt-8 h-[2px] w-full bg-[var(--border)]">
                <div
                  className="h-full bg-[var(--gold-gradient)] transition-[width] duration-500"
                  style={{ width: `${((stage + 1) / site.journey.stages.length) * 100}%` }}
                />
              </div>
              <ol className="mt-6 flex gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {site.journey.stages.map((s, i) => (
                  <li key={s.no} className={cn(i === stage && "text-[var(--gold)]")}>
                    {s.no}
                  </li>
                ))}
              </ol>
            </div>
            <div className="frame-gold overflow-hidden">
              {current ? (
                <SmartImage src={current.image} alt={current.title} width={1200} height={900} className="aspect-[4/3]" />
              ) : null}
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {site.journey.stages.map((s, i) => (
              <Reveal key={s.no} delay={i * 80}>
                <article className="card-lux overflow-hidden">
                  <SmartImage src={s.image} alt={s.title} width={800} height={600} className="aspect-[16/10]" />
                  <div className="p-6">
                    <p className="font-display text-4xl gold-text">{s.no}</p>
                    <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
