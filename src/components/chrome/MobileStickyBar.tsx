import { Phone } from "lucide-react";

import { useSite } from "@/hooks/site-context";
import { site, telLink, waLink } from "@/content";

export function MobileStickyBar() {
  const { goToEnrol } = useSite();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_92%,transparent)] px-3 py-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={telLink()} className="btn-outline-gold px-2 text-[0.65rem]">
          <Phone className="h-4 w-4" />
          {site.ui.call}
        </a>
        <a
          href={waLink(`Hi ${site.brand}, I’d like to enrol.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold px-2 text-[0.65rem]"
        >
          {site.ui.whatsapp}
        </a>
        <button type="button" className="btn-gold px-2 text-[0.65rem]" onClick={() => goToEnrol()}>
          {site.ui.enrolNow}
        </button>
      </div>
    </div>
  );
}
