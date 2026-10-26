import { useEffect, useRef, useState } from "react";

import { IgLink } from "@/components/site/IgLink";
import { PlaceholderText } from "@/components/site/PlaceholderText";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { site } from "@/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1400);
        setN(Number((value * (1 - Math.pow(1 - p, 3))).toFixed(value % 1 ? 1 : 0)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      io.disconnect();
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  const badge = `${site.brand} • LEARN • CREATE • MASTER • `;

  return (
    <section id="academy" className="relative px-4 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="grid w-full items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative img-wipe">
          <div className="frame-gold overflow-hidden">
            <SmartImage
              src={site.founder.portrait}
              alt={site.founder.name}
              width={900}
              height={1100}
              className="aspect-[4/5] object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-10 w-40 overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow-lux)] md:w-56">
            <SmartImage src={site.about.classroomImage} alt="Academy classroom" width={480} height={360} />
          </div>
          <div className="absolute -left-6 top-8 h-32 w-32 md:-left-10 md:h-40 md:w-40">
            <div className="badge-spin relative h-full w-full">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path id="rhaCircle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                </defs>
                <circle cx="100" cy="100" r="78" fill="none" stroke="var(--gold)" strokeWidth="1" />
                <text fill="var(--gold)" fontSize="13" letterSpacing="3">
                  <textPath href="#rhaCircle">{badge.repeat(2)}</textPath>
                </text>
              </svg>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader label={site.about.label} title={site.about.title} lead={site.about.lead} />
          <div className="mt-8 space-y-4 text-muted-foreground">
            {site.about.story.map((p) => (
              <Reveal key={p}>
                <p className="leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 border-l-2 border-[var(--gold)] pl-4 text-sm italic text-muted-foreground">
            <PlaceholderText value={site.founder.bio} />
            <p className="mt-2 not-italic text-[var(--gold)]">
              — <PlaceholderText value={site.founder.name} />, {site.founder.title}
            </p>
          </Reveal>
          <IgLink className="mt-4 text-sm text-[var(--gold)]" showIcon>
            {site.instagram.handle} · {site.instagram.followersLabel}
          </IgLink>

          <dl className="mt-10 grid grid-cols-2 gap-6">
            {site.about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.label}
                  {"confirm" in stat && stat.confirm ? (
                    <span className="ml-1 text-[var(--gold)]">[CONFIRM]</span>
                  ) : null}
                </dt>
                <dd className="mt-1 font-display text-3xl gold-text md:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
