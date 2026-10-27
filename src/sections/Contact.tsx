import { MapPin, Phone } from "lucide-react";

import { InstagramIcon, WhatsAppIcon } from "@/components/brand/SocialIcons";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { site, telLink, waLink } from "@/content";
import { mapsEmbedSrc } from "@/lib/forms";

export function Contact() {
  const embed = mapsEmbedSrc();

  return (
    <section id="contact" className="section-y px-4 md:px-8 lg:px-12">
      <div className="grid w-full gap-6 lg:grid-cols-2">
        <div>
          <SectionHeader label="CONTACT" title="Visit the Academy" />
          <ul className="mt-4 space-y-3 break-words text-sm">
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[var(--gold)]" />
              <a href={telLink()}>{site.contact.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <a href={waLink(`Hi ${site.brand}, I’d like to get in touch.`)} target="_blank" rel="noopener noreferrer">
                {site.contact.whatsapp}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[var(--gold)]" />
              <a href={site.contact.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)]">
                {site.contact.address}, {site.contact.city}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <InstagramIcon className="h-5 w-5 shrink-0" />
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
        <Reveal>
          {embed ? (
            <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
              <iframe
                title={`${site.brand} map`}
                src={embed}
                className="h-[280px] w-full lg:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={site.contact.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-t border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]"
              >
                {site.ui.viewMap}
              </a>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
