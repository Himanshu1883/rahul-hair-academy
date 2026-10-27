import type { ReactNode } from "react";

import { InstagramIcon } from "@/components/brand/SocialIcons";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function IgLink({
  className,
  children,
  showIcon = false,
}: {
  className?: string;
  children?: ReactNode;
  showIcon?: boolean;
}) {
  return (
    <a
      href={site.instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-2", className)}
      aria-label={`Instagram ${site.instagram.handle}`}
    >
      {showIcon ? <InstagramIcon className="h-4 w-4" /> : null}
      {children ?? site.instagram.handle}
    </a>
  );
}
