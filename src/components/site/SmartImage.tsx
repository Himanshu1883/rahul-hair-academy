import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function SmartImage({ src, alt, width, height, className, priority = false }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="eager"
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
