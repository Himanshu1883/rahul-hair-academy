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
      <img src={src} alt={site.brand} className="logo-img max-h-full" />
    </span>
  );
}
