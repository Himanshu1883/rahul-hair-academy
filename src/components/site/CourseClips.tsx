import { useState } from "react";

import { AutoplayVideo } from "@/components/site/AutoplayVideo";
import { Magnetic } from "@/components/site/Magnetic";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { site } from "@/content";
import { cn } from "@/lib/utils";

type Clip = {
  src: string;
  headline: string;
  subline: string;
};

export function CourseClips({
  clips,
  onEnrol,
}: {
  clips: readonly Clip[];
  onEnrol: () => void;
}) {
  const [unmutedId, setUnmutedId] = useState<string | null>(null);
  if (!clips.length) return null;

  const pair = clips.length > 1;

  return (
    <section className="section-y px-4 md:px-8 lg:px-12">
      <SectionHeader align="center" label={site.ui.inTheSalon} title={site.ui.watchTheWork} />

      <div
        className={cn(
          "mt-10 grid gap-5",
          pair ? "mx-auto w-full max-w-3xl sm:grid-cols-2 lg:max-w-4xl" : "mx-auto w-full max-w-[22rem]",
        )}
      >
        {clips.map((clip, i) => (
          <Reveal key={clip.src} delay={i * 80}>
            <ClipCard
              clip={clip}
              unmuted={unmutedId === clip.src}
              onToggleMute={() => setUnmutedId((id) => (id === clip.src ? null : clip.src))}
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Magnetic>
          <button type="button" className="btn-gold" onClick={onEnrol}>
            {site.ui.enrolNow}
          </button>
        </Magnetic>
      </div>
    </section>
  );
}

function ClipCard({
  clip,
  unmuted,
  onToggleMute,
}: {
  clip: Clip;
  unmuted: boolean;
  onToggleMute: () => void;
}) {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-black shadow-[var(--shadow-lux)]">
      <AutoplayVideo src={clip.src} unmuted={unmuted} label={clip.headline} className="aspect-[4/5] w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25" />
      <div className="absolute top-4 right-4 z-10">
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
        <h3 className="font-display text-[clamp(1.35rem,3vw,1.9rem)] leading-[1.08] gold-text-shimmer">{clip.headline}</h3>
        <p className="mt-2 text-[0.68rem] leading-relaxed text-white/80">{clip.subline}</p>
      </div>
    </article>
  );
}
