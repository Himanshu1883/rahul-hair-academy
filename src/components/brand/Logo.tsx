import { brandAssets, site } from "@/content";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "full" | "mono";
  className?: string;
};

export function Logo({ variant = "full", className }: Props) {
  const src = variant === "full" ? brandAssets.logoFull : brandAssets.logoMonogram;
  return (
    <span className={cn("logo-wrap inline-flex items-center justify-center", className)}>
      <img
        src={src}
        alt={site.brand}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="logo-img h-full max-h-full w-auto max-w-full object-contain"
      />
    </span>
  );
}
