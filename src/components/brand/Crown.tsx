import { cn } from "@/lib/utils";

export function Crown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" className={cn("text-[var(--gold)]", className)}>
      <path
        d="M8 36 16 14l16 14L48 10l8 26H8Z"
        fill="url(#crownGold)"
        stroke="url(#crownGold)"
        strokeLinejoin="round"
      />
      <path d="M12 40h40" stroke="url(#crownGold)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="16" cy="12" r="3.2" fill="#F6E27A" />
      <circle cx="32" cy="6" r="3.6" fill="#F6E27A" />
      <circle cx="48" cy="8" r="3.2" fill="#F6E27A" />
      <defs>
        <linearGradient id="crownGold" x1="8" y1="8" x2="56" y2="42">
          <stop stopColor="#F6E27A" />
          <stop offset="0.5" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#8A6A12" />
        </linearGradient>
      </defs>
    </svg>
  );
}
