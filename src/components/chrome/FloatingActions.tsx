import { InstagramIcon, WhatsAppIcon } from "@/components/brand/SocialIcons";
import { site, waLink } from "@/content";

export function FloatingActions() {
  return (
    <div className="fixed right-3 bottom-[calc(6.25rem+env(safe-area-inset-bottom))] z-40 flex flex-col gap-3 md:right-4 md:bottom-8">
      <a
        href={waLink(`Hi ${site.brand}, I’d like to know more about your courses.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
        aria-label={site.ui.whatsapp}
      >
        <WhatsAppIcon className="h-12 w-12" />
      </a>
      <a
        href={site.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-[0.9rem] shadow-lg"
        aria-label={site.instagram.handle}
      >
        <InstagramIcon className="h-12 w-12" />
      </a>
    </div>
  );
}
