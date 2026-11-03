import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SmartImage } from "@/components/site/SmartImage";
import { site } from "@/content";

type Shot = {
  src: string;
  alt: string;
  caption: string;
};

export function CourseClassroom({ photos }: { photos: readonly Shot[] }) {
  if (!photos.length) return null;

  return (
    <section className="section-y px-4 md:px-8 lg:px-12">
      <SectionHeader
        align="center"
        label={site.ui.insideTheClassroom}
        title={site.ui.learnOnTheFloor}
        lead={site.ui.learnOnTheFloorLead}
      />
      <div className="mx-auto mt-8 grid w-full max-w-5xl gap-4 sm:grid-cols-2">
        {photos.map((shot, i) => (
          <Reveal key={shot.src} delay={i * 80}>
            <figure className="frame-gold overflow-hidden rounded-2xl">
              <SmartImage
                src={shot.src}
                alt={shot.alt}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--gold)] uppercase">
                {shot.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
