import { isPlaceholder } from "@/content";
import { cn } from "@/lib/utils";

export function PlaceholderText({ value, className }: { value: string; className?: string }) {
  if (isPlaceholder(value)) {
    return <span className={cn("placeholder-tag", className)}>{value}</span>;
  }
  return <span className={className}>{value}</span>;
}
