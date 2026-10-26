import { Instagram as IgIcon, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { site } from "@/content";

const GRID_SLOTS = 9;

export function Instagram() {
  const [feed, setFeed] = useState<string[] | null>(null);
  const reels = site.igSection.reels;
  const photos = feed ?? [...site.igSection.grid];

  useEffect(() => {
    const url = import.meta.env.VITE_INSTAGRAM_FEED_URL;
    if (!url) return;
    void fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: unknown) => {
        if (Array.isArray(data)) {
          const urls = data
            .map((item) => {
              if (typeof item === "string") return item;
              if (item && typeof item === "object" && "url" in item && typeof item.url === "string") return item.url;
              if (item && typeof item === "object" && "src" in item && typeof item.src === "string") return item.src;
              return "";
            })
            .filter(Boolean);
          if (urls.length) setFeed(urls);
        }
      })
      .catch(() => {
        /* silent fallback to curated grid */
      });
  }, []);

  return (
    <section id="instagram" className="px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.igSection.label} title={site.igSection.title} align="center" />

        <Reveal className="card-lux mt-10 flex w-full flex-col items-center p-8 text-center">
          <Logo variant="mono" className="h-20" />
          <p className="mt-4 font-display text-2xl">{site.instagram.handle}</p>
          <p className="mt-2 text-sm text-muted-foreground">{site.instagram.bioLine}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
            {site.instagram.postsLabel} · {site.instagram.followersLabel}
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-6"
          >
            <IgIcon className="h-4 w-4" />
            {site.ui.followIg}
          </a>
        </Reveal>

        {reels.length ? (
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4">
            {reels.map((reel) => (
              <ReelCard key={reel.igUrl} reel={reel} />
            ))}
          </div>
        ) : null}

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {Array.from({ length: GRID_SLOTS }).map((_, i) => {
            const src = photos[i];
            if (src) {
              return (
                <a
                  key={src}
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <SmartImage src={src} alt={`${site.instagram.handle} post`} width={640} height={640} className="aspect-square" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <IgIcon className="h-6 w-6 text-[var(--gold)]" />
                  </span>
                </a>
              );
            }
            return (
              <a
                key={`empty-${i}`}
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-square items-center justify-center rounded-2xl border border-[var(--gold)]/50 text-center text-xs uppercase tracking-[0.2em] text-[var(--gold)]"
              >
                {site.igSection.gridEmptyTileText}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReelCard({
  reel,
}: {
  reel: { video: string; poster: string; igUrl: string; caption: string };
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
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={reel.igUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-52 shrink-0 overflow-hidden rounded-2xl border border-[var(--border)]"
    >
      <video
        ref={ref}
        src={reel.video}
        poster={reel.poster}
        muted
        loop
        playsInline
        className="aspect-[9/16] w-full object-cover"
      />
      <span className="absolute top-3 left-3 rounded-full bg-black/50 px-2 py-1 text-[10px] uppercase tracking-widest text-[var(--gold)]">
        IG
      </span>
      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 text-xs text-white">
        <Play className="h-3 w-3" />
        {reel.caption}
      </span>
    </a>
  );
}
