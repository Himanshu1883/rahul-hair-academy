import { Award, GraduationCap, Layers, Scissors, Sparkles, Users, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { TiltCard } from "@/components/site/TiltCard";
import { site } from "@/content";

const icons: Record<string, LucideIcon> = {
  scissors: Scissors,
  layers: Layers,
  users: Users,
  award: Award,
  sparkles: Sparkles,
  graduation: GraduationCap,
};

export function Highlights() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.highlights.label} title={site.highlights.title} align="center" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.highlights.items.map((item, i) => {
            const Icon = icons[item.icon] ?? Sparkles;
            return (
              <Reveal key={item.title} delay={i * 70}>
                <TiltCard>
                  <article className="card-lux h-full p-7">
                    <Icon className="h-7 w-7 text-[var(--gold)]" />
                    <h3 className="mt-5 font-display text-xl">
                      {item.title}
                      {"confirm" in item && item.confirm ? (
                        <span className="ml-2 text-xs tracking-widest text-[var(--gold)]">[CONFIRM]</span>
                      ) : null}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
