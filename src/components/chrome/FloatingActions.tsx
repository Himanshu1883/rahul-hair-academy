import { Instagram } from "lucide-react";

import { site, waLink } from "@/content";

export function FloatingActions() {
  return (
    <div className="fixed right-3 bottom-[calc(6.25rem+env(safe-area-inset-bottom))] z-40 flex flex-col gap-3 md:right-4 md:bottom-8">
      <a
        href={waLink(`Hi ${site.brand}, I’d like to know more about your courses.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulse-gold inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-grad text-[#0B0B0B] shadow-lg"
        aria-label={site.ui.whatsapp}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 16.9L1 23l6.3-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5ZM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.7.7.7-3.6-.2-.3A9 9 0 1 1 12 21Zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.3 5.3 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.1 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
        </svg>
      </a>
      <a
        href={site.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--surface)] text-[var(--gold)]"
        aria-label={site.instagram.handle}
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
}
