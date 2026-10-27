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
    <section
      id="academy"
      className="relative flex min-h-0 items-center overflow-x-clip px-4 py-8 md:px-8 lg:h-svh lg:max-h-svh lg:px-12 lg:py-8"
    >
      <div className="grid w-full items-center gap-5 lg:grid-cols-2 lg:gap-8">
        <Reveal className="relative img-wipe max-w-[22rem] lg:max-w-[26rem]">
          <div className="frame-gold overflow-hidden rounded-2xl">
            <SmartImage
              src={site.founder.portrait}
              alt={site.founder.name}
              width={720}
              height={720}
              priority
              className="aspect-square max-h-[min(26rem,calc(100svh-10rem))] w-full object-contain"
            />
          </div>
          <div className="absolute right-2 bottom-2 w-20 overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow-lux)] sm:w-24">
            <SmartImage src={site.about.classroomImage} alt="Academy classroom" width={480} height={360} />
          </div>
          <div className="absolute left-2 top-3 h-14 w-14 sm:h-20 sm:w-20">
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
          <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {site.about.story.map((p) => (
              <p key={p} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-2.5 text-sm text-[var(--gold)]">
            — <PlaceholderText value={site.founder.name} />, {site.founder.title}
          </p>
          <IgLink className="mt-1.5 text-sm text-[var(--gold)]" showIcon>
            {site.instagram.handle} · {site.instagram.followersLabel}
          </IgLink>

          <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {site.about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                  {"confirm" in stat && stat.confirm ? (
                    <span className="ml-1 text-[var(--gold)]">[CONFIRM]</span>
                  ) : null}
                </dt>
                <dd className="mt-0.5 font-display text-xl gold-text md:text-2xl">
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
