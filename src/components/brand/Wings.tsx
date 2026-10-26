import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  spread?: boolean;
  solid?: boolean;
};

export function Wings({ className, spread = true, solid = false }: Props) {
  return (
    <svg
      viewBox="0 0 640 220"
      fill="none"
      aria-hidden="true"
      className={cn("w-full text-[var(--gold)]", className)}
    >
      <g
        className="origin-center transition-transform duration-1000 ease-out"
        style={{ transform: spread ? "scaleX(1)" : "scaleX(0.42)" }}
      >
        <path
          d="M318 118C260 96 190 40 42 28c58 38 96 78 112 118 38-22 86-32 164-28Z"
          fill="url(#wingGold)"
          opacity={solid ? 0.92 : 0.32}
        />
        <path
          d="M318 118C260 96 190 40 42 28c38 18 92 62 118 108"
          stroke="url(#wingGold)"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M322 118C380 96 450 40 598 28c-58 38-96 78-112 118-38-22-86-32-164-28Z"
          fill="url(#wingGold)"
          opacity={solid ? 0.92 : 0.32}
        />
        <path
          d="M322 118C380 96 450 40 598 28c-38 18-92 62-118 108"
          stroke="url(#wingGold)"
          strokeWidth="1.4"
          fill="none"
        />
        <path d="M300 40c8-22 20-36 20-36s12 14 20 36c-12-6-28-6-40 0Z" fill="url(#wingGold)" />
      </g>
      <defs>
        <linearGradient id="wingGold" x1="40" y1="20" x2="600" y2="180">
          <stop stopColor="#F6E27A" />
          <stop offset="0.45" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#8A6A12" />
        </linearGradient>
      </defs>
    </svg>
  );
}
