import { InstagramIcon } from "@/components/brand/SocialIcons";
import { useEffect, useState } from "react";

import { Crown } from "@/components/brand/Crown";
import { Magnetic } from "@/components/site/Magnetic";
import { SmartImage } from "@/components/site/SmartImage";
import { useSite } from "@/hooks/site-context";
import { site } from "@/content";

/**
 * Hero
 * - Photo/video is shown at full strength. Only the side that carries text is darkened,
 *   so the image stays clearly visible in BOTH light and dark theme.
 * - Text always sits on that dark zone, so it is white in every theme (no theme-dependent contrast).
 * - Desktop: left-aligned copy over the photo.
 * - Mobile: image on top, copy anchored to the bottom.
 */
export function Hero() {
  const { goTo, goToEnrol, goToBooking, reducedMotion } = useSite();
  const [slide, setSlide] = useState(0);
  const [linesIn, setLinesIn] = useState(false);

  const slides = site.hero.slideshow;
  const hasVideo = Boolean(site.hero.video);
  const showDots = !hasVideo && slides.length > 1;

  useEffect(() => {
    const t = window.setTimeout(() => setLinesIn(true), 280);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (hasVideo || reducedMotion || slides.length < 2) return;
    const t = window.setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(t);
  }, [hasVideo, reducedMotion, slides.length, slide]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-black text-white md:items-center"
    >
      {/* ───────── Media ───────── */}
      <div className="absolute inset-0 -z-10">
        {hasVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={slides[0]?.src}
            onCanPlay={(e) => {
              const el = e.currentTarget;
              el.defaultMuted = true;
              el.muted = true;
              el.setAttribute("muted", "");
              el.setAttribute("playsinline", "");
              el.setAttribute("webkit-playsinline", "true");
              void el.play().catch(() => undefined);
            }}
          >
            <source src={site.hero.video} />
          </video>
        ) : (
          slides.map((item, i) => (
            <div
              key={item.src}
              className="absolute inset-0 transition-opacity duration-[1.2s]"
              style={{ opacity: i === slide ? 1 : 0 }}
              aria-hidden={i !== slide}
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                width={1920}
                height={1080}
                priority={i === 0}
                className={`h-full w-full object-cover ${
                  reducedMotion ? "" : "animate-[ken-burns_16s_ease-in-out_infinite_alternate]"
                }`}
              />
            </div>
          ))
        )}

        {/* Text-side shade: bottom on mobile, left on desktop. The rest of the photo stays untouched. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/45 md:to-transparent" />
        {/* Keeps the navbar readable over bright photos */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent" />
      </div>

      {/* ───────── Copy ───────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-[calc(6.5rem+env(safe-area-inset-top))] pb-44 sm:px-8 md:pt-32 md:pb-36 lg:px-12">
        <div className="max-w-2xl text-left">
          <p className="flex items-center gap-3 text-sm font-medium text-[#E3C06F] sm:text-base">
            <Crown className="h-6 w-8 shrink-0 lg:hidden" />
            <span className="hidden h-px w-10 bg-[#E3C06F]/80 lg:block" />
            {site.about.label}
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.35rem,7.2vw,5.4rem)] leading-[1.02] tracking-[-0.02em] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            {site.hero.headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.1em]">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
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

          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#E3C06F] to-transparent" />

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {site.hero.subline}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Magnetic className="w-full sm:w-auto">
              <button type="button" className="btn-gold w-full sm:w-auto" onClick={() => goToEnrol()}>
                {site.hero.ctas.enrol}
              </button>
            </Magnetic>
            <button
              type="button"
              className="btn-outline-gold w-full bg-black/25 backdrop-blur-sm sm:w-auto"
              onClick={() => goTo("courses")}
            >
              {site.hero.ctas.explore}
            </button>
            <button
              type="button"
              className="rounded-sm px-2 py-3 text-sm font-medium text-white/90 underline decoration-white/40 underline-offset-[6px] transition hover:text-white hover:decoration-[#E3C06F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3C06F]"
              onClick={() => goToBooking()}
            >
              {site.hero.ctas.book}
            </button>
          </div>
        </div>
      </div>

      {/* ───────── Bottom bar: badges, slide control, Instagram ───────── */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-gradient-to-t from-black/75 to-black/30 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            {site.hero.badges.map((badge) => (
              <li
                key={badge}
                className="shrink-0 rounded-full border border-[#E3C06F]/45 bg-black/35 px-3.5 py-1.5 text-xs font-medium whitespace-nowrap text-white/95"
              >
                {badge}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between gap-5 md:justify-end">
            {showDots && (
              <div className="flex items-center gap-2" role="group" aria-label="Hero slides">
                {slides.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setSlide(i)}
                    aria-label={`Show slide ${i + 1} of ${slides.length}`}
                    aria-current={i === slide}
                    className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3C06F] ${
                      i === slide ? "w-8 bg-[#E3C06F]" : "w-3 bg-white/45 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            )}

            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-xs font-semibold whitespace-nowrap text-white transition hover:border-[#E3C06F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3C06F]"
            >
              <InstagramIcon className="h-4 w-4 shrink-0" />
              <span>{site.instagram.handle}</span>
              <span className="h-3 w-px bg-white/35" aria-hidden="true" />
              <span className="font-normal text-white/80">{site.instagram.followersLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}