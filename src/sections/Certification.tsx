import { Award } from "lucide-react";

import { PlaceholderText } from "@/components/site/PlaceholderText";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { site } from "@/content";

export function Certification() {
  const photo = site.certification.certificateImage;

  return (
    <section className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.certification.label} title={site.certification.title} align="center" />
        <Reveal className="mt-6 grid items-center gap-8 md:grid-cols-2">
          <div className="frame-gold overflow-hidden bg-[var(--surface)]">
            {photo ? (
              <SmartImage
                src={photo}
                alt={site.certification.certificateAlt}
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full object-cover object-[center_78%]"
              />
            ) : (
              <div className="flex min-h-72 flex-col items-center justify-center p-8 text-center">
                <Award className="h-12 w-12 text-[var(--gold)]" />
                <p className="mt-4 font-display text-xl">Certificate preview</p>
                <p className="mt-2 text-sm text-muted-foreground">{site.certification.previewNote}</p>
              </div>
            )}
          </div>
          <div>
            <p className="section-label mb-4">{site.ui.trustedBy}</p>
            <ul className="space-y-3 text-muted-foreground">
              {site.certification.affiliations.map((a) => (
                <li key={a}>
                  <PlaceholderText value={a} />
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.certification.trustedStrip.map((item) => (
                <span key={item} className="rounded-full border border-[var(--border)] px-3 py-2 text-xs uppercase tracking-widest">
                  <PlaceholderText value={item} />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
