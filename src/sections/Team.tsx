import { Instagram } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { PlaceholderText } from "@/components/site/PlaceholderText";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { site } from "@/content";

export function Team() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.team.label} title={site.team.title} align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {site.team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <article className="card-lux group overflow-hidden p-4">
                <div className="overflow-hidden rounded-2xl border border-transparent transition-all duration-500 group-hover:border-[var(--gold)] group-hover:outline group-hover:outline-1 group-hover:outline-offset-4 group-hover:outline-[var(--gold)]">
                  {member.photo ? (
                    <SmartImage src={member.photo} alt={member.name} width={900} height={700} className="aspect-[5/4]" />
                  ) : (
                    <div className="flex aspect-[5/4] items-center justify-center bg-black">
                      <Logo variant="mono" className="h-24" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-2xl">
                    <PlaceholderText value={member.name} />
                  </h3>
                  <p className="mt-1 text-sm text-[var(--gold)]">
                    <PlaceholderText value={member.role} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <PlaceholderText value={member.specialities} />
                  </p>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--gold)]"
                  >
                    <Instagram className="h-4 w-4" />
                    {site.instagram.handle}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
