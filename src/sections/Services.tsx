import { useState } from "react";

import { PlaceholderText } from "@/components/site/PlaceholderText";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useSite } from "@/hooks/site-context";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function Services() {
  const { goToBooking } = useSite();
  const [tab, setTab] = useState<(typeof site.services.tabs)[number]>("Women");
  const group = site.services.items.find((item) => item.tab === tab) ?? site.services.items[0];

  return (
    <section id="salon" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${site.services.image})`, backgroundSize: "cover" }}
      />
      <div className="absolute inset-0 bg-[var(--background)]/80" />
      <div className="relative w-full">
        <SectionHeader label={site.services.label} title={site.services.title} align="center" />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {site.services.tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.16em]",
                tab === t
                  ? "border-[var(--gold)] bg-gold-grad text-[#0B0B0B]"
                  : "border-[var(--border)] text-muted-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <Reveal className="mt-8 divide-y divide-[var(--border)] rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
          {group?.services.map((svc) => (
            <div key={`${tab}-${svc.name}`} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-8">
              <p className="font-display text-lg">{svc.name}</p>
              <div className="flex items-center gap-4">
                <PlaceholderText value={svc.price} className="text-sm" />
                <button type="button" className="btn-outline-gold px-4 text-[0.7rem]" onClick={() => goToBooking(svc.name)}>
                  {site.ui.bookThis}
                </button>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
