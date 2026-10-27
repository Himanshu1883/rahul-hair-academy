import { useEffect, useRef } from "react";

import { armMutedAutoplay, tryPlay } from "@/lib/autoplay-video";

export function useAutoplayVideo(unmuted: boolean) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let visible = false;

    const playNow = () => {
      if (!visible) return;
      if (!unmuted) armMutedAutoplay(el);
      else {
        el.muted = false;
        el.playsInline = true;
      }
      tryPlay(el);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = !!entry?.isIntersecting;
        if (visible) playNow();
        else el.pause();
      },
      { threshold: [0, 0.08, 0.2, 0.4], rootMargin: "160px 0px" },
    );
    io.observe(el);

    const rect = el.getBoundingClientRect();
    visible = rect.bottom > 0 && rect.top < window.innerHeight + 160;

    const onVis = () => {
      if (document.visibilityState === "visible") playNow();
    };

    el.addEventListener("loadeddata", playNow);
    el.addEventListener("canplay", playNow);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pageshow", playNow);
    window.addEventListener("focus", playNow);
    document.addEventListener("touchstart", playNow, { passive: true });
    document.addEventListener("pointerdown", playNow, { passive: true });

    if (!unmuted) armMutedAutoplay(el);
    playNow();

    return () => {
      io.disconnect();
      el.removeEventListener("loadeddata", playNow);
      el.removeEventListener("canplay", playNow);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pageshow", playNow);
      window.removeEventListener("focus", playNow);
      document.removeEventListener("touchstart", playNow);
      document.removeEventListener("pointerdown", playNow);
    };
  }, [unmuted]);

  return ref;
}
