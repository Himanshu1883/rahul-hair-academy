import { Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { useSite } from "@/hooks/site-context";
import { site, telLink, waLink } from "@/content";

export function MobileStickyBar() {
  const { goToEnrol } = useSite();

  return (
    <div className="mobile-sticky fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_92%,transparent)] px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-1.5">
        <a href={telLink()} className="btn-outline-gold min-w-0 px-1 text-[0.58rem] tracking-[0.08em]">
          <Phone className="h-3.5 w-3.5" />
          {site.ui.call}
        </a>
        <a
          href={waLink(`Hi ${site.brand}, I’d like to enrol.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold min-w-0 px-1 text-[0.58rem] tracking-[0.08em]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {site.ui.whatsapp}
        </a>
        <button type="button" className="btn-gold min-w-0 px-1 text-[0.58rem] tracking-[0.08em]" onClick={() => goToEnrol()}>
          {site.ui.enrolNow}
        </button>
      </div>
    </div>
  );
}
