import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { InstagramIcon } from "@/components/brand/SocialIcons";
import { useEffect, useMemo, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () => site.gallery.items.filter((item) => filter === "all" || item.category === filter),
    [filter],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length]);

  const active = index !== null ? items[index] : undefined;

  return (
    <section id="gallery" className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.gallery.label} title={site.gallery.title} />
        <div className="tab-scroller mt-5">
          {site.gallery.filters
            .filter((f) => f.id === "all" || site.gallery.items.some((item) => item.category === f.id))
            .map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "min-h-11 shrink-0 rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.16em]",
                  filter === f.id
                    ? "border-[var(--gold)] bg-gold-grad text-[#0B0B0B]"
                    : "border-[var(--border)] text-muted-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
        </div>

        <div className="masonry mt-10">
          {items.map((item, i) => (
            <Reveal key={item.src} className="masonry-item" delay={i * 50}>
              <button
                type="button"
                className="group relative block overflow-hidden rounded-2xl"
                onClick={() => setIndex(i)}
              >
                <SmartImage src={item.src} alt={item.alt} width={800} height={800} />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm text-[var(--gold)]">{item.category}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button type="button" className="absolute top-4 right-4 h-11 w-11 text-white" onClick={() => setIndex(null)} aria-label={site.ui.close}>
            <X />
          </button>
          <button
            type="button"
            className="absolute left-3 h-11 w-11 text-white"
            onClick={() => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length))}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <img src={active.src} alt={active.alt} className="max-h-[82vh] max-w-[92vw] object-contain" />
          <button
            type="button"
            className="absolute right-3 h-11 w-11 text-white"
            onClick={() => setIndex((i) => (i === null ? i : (i + 1) % items.length))}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 inline-flex items-center gap-2"
          >
            <InstagramIcon className="h-4 w-4" />
            {site.instagram.handle}
          </a>
        </div>
      ) : null}
    </section>
  );
}
