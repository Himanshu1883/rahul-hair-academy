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
      <h2 className="mt-4 font-display text-3xl leading-[1.12] md:text-5xl lg:text-[3.35rem] gold-text-shimmer">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{lead}</p>
      ) : null}
    </header>
  );
}
