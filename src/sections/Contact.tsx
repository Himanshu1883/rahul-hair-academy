import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { PlaceholderText } from "@/components/site/PlaceholderText";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { isPlaceholder, mailLink, site, telLink, waLink } from "@/content";
import { mapsEmbedSrc } from "@/lib/forms";

export function Contact() {
  const embed = !isPlaceholder(site.contact.address) || !isPlaceholder(site.contact.mapsLink) ? mapsEmbedSrc() : "";

  return (
    <section id="contact" className="px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="grid w-full gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader label="CONTACT" title="Visit the Academy" />
          <ul className="mt-8 space-y-5">
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-[var(--gold)]" />
              <a href={telLink()}>
                <PlaceholderText value={site.contact.phone} />
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-[var(--gold)]" />
              <a href={waLink(`Hi ${site.brand}, I’d like to get in touch.`)} target="_blank" rel="noopener noreferrer">
                WhatsApp · <PlaceholderText value={site.contact.whatsapp} />
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-[var(--gold)]" />
              <a href={mailLink()}>
                <PlaceholderText value={site.contact.email} />
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-[var(--gold)]" />
              <span>
                <PlaceholderText value={site.contact.address} />
                {", "}
                <PlaceholderText value={site.contact.city} />
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-5 w-5 text-[var(--gold)]" />
              <PlaceholderText value={site.contact.hours} />
            </li>
            <li className="flex gap-3">
              <Instagram className="h-5 w-5 text-[var(--gold)]" />
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
        <Reveal>
          {embed ? (
            <iframe
              title="Map"
              src={embed}
              className="h-[360px] w-full rounded-3xl border border-[var(--border)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex h-[360px] items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--surface)] text-center">
              <p className="max-w-xs text-sm text-muted-foreground">
                Map appears here once <PlaceholderText value={site.contact.mapsLink} /> or the address is filled in.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
