import { useEffect, useRef, useState } from "react";

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
      className="relative overflow-x-clip px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
    >
      <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal className="relative img-wipe mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div className="frame-gold overflow-hidden rounded-2xl bg-black">
            <SmartImage
              src={site.about.image}
              alt={`${site.founder.name} teaching on the salon floor`}
              width={1600}
              height={1200}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="absolute right-3 bottom-3 w-24 overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow-lux)] sm:w-28 md:w-32">
            <SmartImage src={site.about.classroomImage} alt="Salon floor at Rahul Hair Academy" width={480} height={360} />
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
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--gold)]">
            {site.instagram.accounts.map((account, i) => (
              <span key={account.url} className="inline-flex items-center gap-3">
                {i > 0 ? <span className="text-muted-foreground" aria-hidden="true">·</span> : null}
                <a href={account.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {account.name}
                </a>
              </span>
            ))}
          </p>

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
