import { InstagramIcon } from "@/components/brand/SocialIcons";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function IgAccounts({
  className,
  iconClassName = "h-8 w-8",
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-start gap-4", className)}>
      {site.instagram.accounts.map((account) => (
        <a
          key={account.url}
          href={account.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-[6.25rem] flex-col items-center gap-1.5 text-center"
          aria-label={`Instagram ${account.name} ${account.handle}`}
        >
          <InstagramIcon className={iconClassName} />
          <span className="text-[0.62rem] leading-tight font-semibold">{account.name}</span>
        </a>
      ))}
    </div>
  );
}
