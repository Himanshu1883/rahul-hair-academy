import { useEffect, useId, useRef, useState, type ReactNode } from "react";

import { InstagramIcon } from "@/components/brand/SocialIcons";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function IgChooser({
  trigger,
  className,
  panelAlign = "left",
}: {
  trigger: ReactNode;
  className?: string;
  panelAlign?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={labelId}
        aria-label={site.ui.chooseInstagram}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center"
      >
        {trigger}
      </button>
      {open ? (
        <div
          id={labelId}
          role="dialog"
          aria-label={site.ui.chooseInstagram}
          className={cn(
            "absolute z-50 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-2 shadow-[var(--shadow-lux)]",
            panelAlign === "left" ? "right-full top-1/2 mr-2 -translate-y-1/2" : "top-full right-0 mt-2",
          )}
        >
          <div className="flex gap-1">
            {site.instagram.accounts.map((account) => (
              <a
                key={account.url}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-[6.5rem] flex-col items-center gap-1.5 rounded-xl px-2 py-2 text-center transition-colors hover:bg-[var(--surface)]"
                aria-label={`Instagram ${account.name} ${account.handle}`}
              >
                <InstagramIcon className="h-9 w-9" />
                <span className="text-[0.62rem] leading-tight font-semibold">{account.name}</span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
