import { cn } from "@/lib/utils";

export function SectionHeader({
  label,
  title,
  lead,
  align = "left",
}: {
  label: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={cn(align === "center" && "text-center")}>
      <p className={cn("section-label", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-[var(--gold)]" />
        {label}
        <span className="h-px w-8 bg-[var(--gold)]" />
      </p>
      <h2 className="mt-2 font-display text-[clamp(1.45rem,4.2vw,2.55rem)] leading-[1.12] gold-text-shimmer">
        {title}
      </h2>
      {lead ? (
        <p className={cn("mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground", align === "center" && "mx-auto")}>{lead}</p>
      ) : null}
    </header>
  );
}
