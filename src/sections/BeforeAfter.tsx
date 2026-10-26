import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { site } from "@/content";

export function BeforeAfter() {
  const pair = site.beforeAfter.items[0];
  const [pos, setPos] = useState(50);

  return (
    <section className="px-4 py-20 md:px-8 md:py-24 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.beforeAfter.label} title={site.beforeAfter.title} align="center" />
        <Reveal className="mt-12">
          {pair ? (
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border)]">
              <img src={pair.after} alt={`${pair.caption} after`} className="block w-full" />
              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
                <img src={pair.before} alt={`${pair.caption} before`} className="h-full w-[100vw] max-w-none object-cover" />
              </div>
              <div className="absolute inset-y-0 w-0.5 bg-[var(--gold)]" style={{ left: `${pos}%` }} />
              <div
                className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-grad text-[#0B0B0B]"
                style={{ left: `${pos}%` }}
              >
                ↔
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                className="ba-range absolute inset-0 h-full w-full"
                aria-label="Before and after comparison"
              />
            </div>
          ) : (
            <div className="card-lux flex min-h-72 flex-col items-center justify-center p-10 text-center">
              <p className="font-display text-2xl gold-text">{site.ui.moreComing}</p>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">{site.beforeAfter.emptyNote}</p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
