import { ChevronDown, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

import { Crown } from "@/components/brand/Crown";
import { Wings } from "@/components/brand/Wings";
import { Magnetic } from "@/components/site/Magnetic";
import { SmartImage } from "@/components/site/SmartImage";
import { useSite } from "@/hooks/site-context";
import { site } from "@/content";

export function Hero() {
  const { goTo, goToEnrol, goToBooking, reducedMotion } = useSite();
  const [slide, setSlide] = useState(0);
  const [linesIn, setLinesIn] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLinesIn(true), 280);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (site.hero.video || reducedMotion) return;
    const t = window.setInterval(() => {
      setSlide((s) => (s + 1) % site.hero.slideshow.length);
    }, 7000);
    return () => window.clearInterval(t);
  }, [reducedMotion]);

  return (
    <section id="home" className="hero relative h-[100svh] min-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        {site.hero.video ? (
          <video
            className="hero-media h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={site.hero.slideshow[0]?.src}
          >
            <source src={site.hero.video} />
          </video>
        ) : (
          site.hero.slideshow.map((item, i) => (
            <div
              key={item.src}
              className="absolute inset-0 transition-opacity duration-[1.2s]"
              style={{ opacity: i === slide ? 1 : 0 }}
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                width={1920}
                height={1080}
                priority={i === 0}
                className={reducedMotion ? "hero-media" : "hero-media animate-[ken-burns_16s_ease-in-out_infinite_alternate]"}
              />
            </div>
          ))
        )}
        <div className="hero-scrim absolute inset-0" />
        <div className="hero-vignette absolute inset-0" />
      </div>

      <div className="hero-copy relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center md:px-8 lg:px-12">
        <div className="hero-copy-veil" aria-hidden="true" />

        <p className="hero-kicker section-label justify-center">
          <span className="h-px w-8 bg-current" />
          {site.about.label}
          <span className="h-px w-8 bg-current" />
        </p>

        <div className="relative mt-5 mb-1">
          <Wings className="hero-wings pointer-events-none absolute top-1/2 left-1/2 w-[min(94vw,760px)] -translate-x-1/2 -translate-y-[58%]" />
          <Crown className="animate-crown-float relative z-10 h-9 w-12 md:h-11 md:w-14" />
        </div>

        <h1 className="hero-headline relative z-10 mt-2 font-display text-[2.85rem] leading-[0.96] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.35rem]">
          {site.hero.headlineLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className="hero-headline-line block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transitionDelay: `${160 * i}ms`,
                  transform: linesIn ? "translateY(0)" : "translateY(110%)",
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero-rule mt-6 h-px w-24" />

        <p className="hero-subline relative z-10 mt-5 max-w-xl text-[0.95rem] leading-relaxed md:text-lg">
          {site.hero.subline}
        </p>

        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
          <Magnetic>
            <button type="button" className="btn-gold" onClick={() => goToEnrol()}>
              {site.hero.ctas.enrol}
            </button>
          </Magnetic>
          <button type="button" className="btn-outline-gold" onClick={() => goTo("courses")}>
            {site.hero.ctas.explore}
          </button>
          <button type="button" className="hero-ghost" onClick={() => goToBooking()}>
            {site.hero.ctas.book}
          </button>
        </div>

        <ul className="relative z-10 mt-9 flex flex-wrap justify-center gap-2">
          {site.hero.badges.map((badge) => (
            <li key={badge} className="hero-badge">
              {badge}
            </li>
          ))}
        </ul>

        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-ig relative z-10 mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em]"
        >
          <Instagram className="h-3.5 w-3.5" />
          {site.instagram.handle}
          <span aria-hidden="true">·</span>
          {site.instagram.followersLabel}
        </a>
      </div>

      <button
        type="button"
        onClick={() => goTo("academy")}
        className="hero-scroll absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1"
        aria-label={site.ui.scroll}
      >
        {site.ui.scroll}
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
