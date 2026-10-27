import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { site } from "@/content";
import { cn } from "@/lib/utils";

type Pair = (typeof site.beforeAfter.items)[number];

export function BeforeAfter() {
  const items = site.beforeAfter.items;
  const [unmutedId, setUnmutedId] = useState<string | null>(null);

  return (
    <section className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader
          label={site.beforeAfter.label}
          title={site.beforeAfter.title}
          lead={site.beforeAfter.lead}
          align="center"
        />
        {items.length ? (
          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {items.map((item, i) => (
              <Reveal key={item.video} delay={i * 80} className="w-[min(78vw,20rem)] shrink-0 snap-center md:w-auto">
                <TransformationCard
                  item={item}
                  unmuted={unmutedId === item.video}
                  onToggleMute={() => setUnmutedId((id) => (id === item.video ? null : item.video))}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-6">
            <div className="card-lux flex min-h-72 flex-col items-center justify-center p-10 text-center">
              <p className="font-display text-2xl gold-text">{site.ui.moreComing}</p>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">{site.beforeAfter.emptyNote}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function TransformationCard({
  item,
  unmuted,
  onToggleMute,
}: {
  item: Pair;
  unmuted: boolean;
  onToggleMute: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) void el.play().catch(() => undefined);
        else el.pause();
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = !unmuted;
    if (unmuted) void el.play().catch(() => undefined);
  }, [unmuted]);

  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-black shadow-[var(--shadow-lux)]">
      <video
        ref={ref}
        src={item.video}
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-[4/5] w-full object-cover"
        aria-label={item.headline}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35" />

      <div className="absolute top-4 right-4 left-4 z-10 flex items-start justify-between gap-2">
        <p className="flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.28em] text-[var(--gold)] uppercase">
          <span>Before</span>
          <span className="h-px w-6 bg-[var(--gold)]" />
          <span>After</span>
        </p>
        <button
          type="button"
          onClick={onToggleMute}
          className="pointer-events-auto inline-flex min-h-9 items-center rounded-full bg-white px-3 text-[0.68rem] font-semibold text-[#14110a] shadow-sm"
          aria-pressed={unmuted}
          aria-label={unmuted ? site.ui.mute : site.ui.unmute}
        >
          {unmuted ? site.ui.mute : site.ui.unmute}
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-6 pt-16 text-center">
        <h3
          className={cn(
            "font-display text-[clamp(1.45rem,3.4vw,2.05rem)] leading-[1.08] gold-text-shimmer",
          )}
        >
          {item.headline}
        </h3>
        <p className="mt-3 text-[0.68rem] leading-relaxed tracking-[0.14em] text-white/80 uppercase">
          {item.subline}
        </p>
      </div>
    </article>
  );
}
