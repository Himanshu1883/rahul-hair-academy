import { site } from "@/content";

export function Marquee() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-2.5">
      <div className="marquee-track gap-8 px-4">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-display text-sm uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
          >
            {item}
            <span aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
