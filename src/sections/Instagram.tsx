import { useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { AutoplayVideo } from "@/components/site/AutoplayVideo";
import { IgAccounts } from "@/components/site/IgAccounts";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { site } from "@/content";
import { cn } from "@/lib/utils";

type Reel = (typeof site.igSection.reels)[number];

export function Instagram() {
  const [unmutedId, setUnmutedId] = useState<string | null>(null);
  const reels = site.igSection.reels;

  return (
    <section id="instagram" className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader
          label={site.igSection.label}
          title={site.igSection.title}
          lead={site.igSection.lead}
          align="center"
        />

        {reels.length ? (
          <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-4">
            {reels.map((reel, i) => (
              <Reveal key={reel.video} delay={i * 70} className="w-[min(62vw,16.5rem)] shrink-0 snap-center md:w-auto">
                <ReelCard
                  reel={reel}
                  unmuted={unmutedId === reel.video}
                  onToggleMute={() => setUnmutedId((id) => (id === reel.video ? null : reel.video))}
                />
              </Reveal>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-col items-center gap-3">
          <IgAccounts iconClassName="h-10 w-10" />
          <a
            href={site.instagram.statsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm text-muted-foreground transition hover:text-[var(--gold)]"
          >
            <span className="font-semibold text-foreground">{site.instagram.statsHandle}</span>
            <span className="mx-2 text-[var(--gold)]">·</span>
            {site.instagram.followersLabel}
            <span className="mx-2 text-[var(--gold)]">·</span>
            {site.instagram.followingLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

function ReelCard({
  reel,
  unmuted,
  onToggleMute,
}: {
  reel: Reel;
  unmuted: boolean;
  onToggleMute: () => void;
}) {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-black shadow-[var(--shadow-lux)]">
      <AutoplayVideo src={reel.video} unmuted={unmuted} label={reel.caption} className="aspect-[4/5] w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />

      <div className="absolute top-3 right-3 left-3 z-10 flex items-start justify-between gap-2">
        <span className="inline-flex h-9 items-center rounded-full bg-black/55 px-2 backdrop-blur-sm">
          <Logo variant="mono" className="h-7" />
        </span>
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

      <p
        className={cn(
          "absolute bottom-4 left-1/2 z-10 w-[calc(100%-1.5rem)] -translate-x-1/2 text-center text-[0.62rem] font-semibold tracking-[0.12em] text-white uppercase sm:text-[0.68rem]",
        )}
      >
        <span className="inline-block rounded-full bg-black/45 px-3 py-1.5 backdrop-blur-sm">{reel.overlay}</span>
      </p>
    </article>
  );
}
