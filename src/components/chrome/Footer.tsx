import { useEffect, useRef } from "react";
import { ArrowUp, Instagram } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { IgLink } from "@/components/site/IgLink";
import { OpeningHours } from "@/components/site/OpeningHours";
import { useSite } from "@/hooks/site-context";
import { site, telLink, waLink } from "@/content";

export function Footer() {
  const { goTo, goToCourse } = useSite();
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    let st: { kill: () => void } | undefined;
    void (async () => {
      const gsap = (await import("gsap")).gsap;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      st = gsap.fromTo(
        el,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top 85%", end: "bottom 55%", scrub: true },
        },
      );
    })();
    return () => st?.kill();
  }, []);

  return (
    <footer className="relative overflow-x-clip border-t border-[var(--border)] pt-16 pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pb-10">
      <div className="grid w-full gap-10 px-4 sm:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-12">
        <div>
          <Logo variant="full" className="h-16 sm:h-24" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{site.tagline}</p>
          <IgLink showIcon className="mt-4 text-sm text-[var(--gold)]">
            {site.instagram.handle}
          </IgLink>
        </div>
        <div>
          <p className="section-label mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.id}>
                <button type="button" className="hover:text-[var(--gold)]" onClick={() => goTo(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="section-label mb-4">Courses</p>
          <ul className="space-y-2 text-sm">
            {site.navCourses.map((course) => (
              <li key={course.id}>
                <button type="button" className="text-left hover:text-[var(--gold)]" onClick={() => goToCourse(course.id)}>
                  {course.navLabel}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="section-label mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={telLink()}>{site.contact.phone}</a>
            </li>
            <li>
              <a href={waLink(`Hi ${site.brand}, I’d like to get in touch.`)} target="_blank" rel="noopener noreferrer">
                WhatsApp · {site.contact.whatsapp}
              </a>
            </li>
            <li>
              <a href={site.contact.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)]">
                {site.contact.address}, {site.contact.city}
              </a>
            </li>
            <li>
              <OpeningHours compact />
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--gold)]">
                <Instagram className="h-4 w-4" />
                {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mt-8 w-full px-5">
        <div className="wordmark wordmark-outline">{site.brand}</div>
        <div ref={fillRef} className="wordmark wordmark-fill">
          {site.brand}
        </div>
      </div>

      <div className="mt-10 flex w-full flex-wrap items-center justify-between gap-3 px-4 text-xs text-muted-foreground md:px-10 lg:px-12">
        <p>© {new Date().getFullYear()} {site.brand}</p>
        <button type="button" className="inline-flex items-center gap-2 hover:text-[var(--gold)]" onClick={() => goTo("home")}>
          {site.ui.backToTop}
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
