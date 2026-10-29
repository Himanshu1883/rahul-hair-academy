import { useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { InstagramIcon } from "@/components/brand/SocialIcons";
import { AutoplayVideo } from "@/components/site/AutoplayVideo";
import { PlaceholderText } from "@/components/site/PlaceholderText";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { site } from "@/content";

export function Team() {
  const [unmuted, setUnmuted] = useState(false);
  const member = site.team.members[0];

  return (
    <section className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.team.label} title={site.team.title} align="center" />
        <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
          <Reveal>
            <TeamReel unmuted={unmuted} onToggleMute={() => setUnmuted((v) => !v)} />
          </Reveal>

          {member ? (
            <Reveal delay={80}>
              <article className="card-lux group flex h-full flex-col overflow-hidden p-4">
                <div className="overflow-hidden rounded-2xl border border-transparent transition-all duration-500 group-hover:border-[var(--gold)] group-hover:outline group-hover:outline-1 group-hover:outline-offset-4 group-hover:outline-[var(--gold)]">
                  {member.photo ? (
                    <SmartImage src={member.photo} alt={member.name} width={900} height={1125} className="aspect-[4/5] object-cover object-[center_12%]" />
                  ) : (
                    <div className="flex aspect-[4/5] items-center justify-center bg-black">
                      <Logo variant="mono" className="h-24" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-2xl">
                    <PlaceholderText value={member.name} />
                  </h3>
                  <p className="mt-1 text-sm text-[var(--gold)]">
                    <PlaceholderText value={member.role} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <PlaceholderText value={member.specialities} />
                  </p>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {site.instagram.handle}
                  </a>
                </div>
              </article>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function TeamReel({ unmuted, onToggleMute }: { unmuted: boolean; onToggleMute: () => void }) {
  const reel = site.team.reel;

  return (
    <article className="relative h-full overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-black shadow-[var(--shadow-lux)]">
      <AutoplayVideo
        src={reel.video}
        unmuted={unmuted}
        label={reel.headline}
        className="aspect-[4/5] h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />
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
        <h3 className="font-display text-[clamp(1.45rem,3.4vw,2.05rem)] leading-[1.08] gold-text-shimmer">
          {reel.headline}
        </h3>
        <p className="mt-3 text-[0.68rem] leading-relaxed tracking-[0.14em] text-white/80 uppercase">
          {reel.subline}
        </p>
      </div>
    </article>
  );
}
