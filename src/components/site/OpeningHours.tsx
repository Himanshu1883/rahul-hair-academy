import { useEffect, useState } from "react";

import { getHoursStatus } from "@/lib/hours";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function OpeningHours({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState(() => getHoursStatus());

  useEffect(() => {
    const tick = () => setStatus(getHoursStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div>
      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 font-semibold",
            status.open ? "text-[var(--gold)]" : "text-muted-foreground",
          )}
        >
          <span
            className={cn("h-1.5 w-1.5 rounded-full", status.open ? "bg-[var(--gold)]" : "bg-muted-foreground")}
            aria-hidden="true"
          />
          {status.open ? site.ui.openNow : site.ui.closedNow}
        </span>
        <span className="text-muted-foreground">
          {status.today.day} · {status.today.label}
        </span>
      </p>
      <ul className={cn("mt-3 space-y-1 text-sm text-muted-foreground", compact && "mt-2 space-y-0.5 text-xs")}>
        {site.contact.weekHours.map((row) => (
          <li
            key={row.day}
            className={cn(
              "flex justify-between gap-4",
              row.day === status.weekday && "font-semibold text-foreground",
            )}
          >
            <span>{row.day}</span>
            <span>{row.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
