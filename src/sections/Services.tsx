import { useState } from "react";

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
    <section id="salon" className="section-y relative overflow-hidden px-4 md:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${site.services.image})`, backgroundSize: "cover" }}
      />
      <div className="absolute inset-0 bg-[var(--background)]/80" />
      <div className="relative w-full">
        <SectionHeader label={site.services.label} title={site.services.title} align="center" />
        <div className="tab-scroller mt-4 justify-start sm:justify-center">
          {site.services.tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.16em]",
                tab === t
                  ? "border-[var(--gold)] bg-gold-grad text-[#0B0B0B]"
                  : "border-[var(--border)] text-muted-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <Reveal className="mt-4 divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          {group?.services.map((svc) => (
            <div key={`${tab}-${svc.name}`} className="flex flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between md:px-6">
              <p className="font-display text-base">{svc.name}</p>
              <button type="button" className="btn-outline-gold min-h-9 w-fit px-3 text-[0.65rem]" onClick={() => goToBooking(svc.name)}>
                {site.ui.bookThis}
              </button>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
