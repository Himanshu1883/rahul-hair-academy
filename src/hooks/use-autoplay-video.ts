import { useEffect, useRef } from "react";

import { armMutedAutoplay, tryPlay } from "@/lib/autoplay-video";

export function useAutoplayVideo(unmuted: boolean) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let wantPlay = false;
    let stopped = false;
    let pauseTimer = 0;
    let watchdog = 0;
    let lastTry = 0;

    const prepare = () => {
      el.playsInline = true;
      el.loop = true;
      el.preload = "auto";
      el.setAttribute("playsinline", "");
      el.setAttribute("webkit-playsinline", "true");
      el.setAttribute("autoplay", "");
      if (!unmuted) armMutedAutoplay(el);
      else {
        el.muted = false;
        el.playsInline = true;
      }
    };

    const playNow = () => {
      if (stopped || !wantPlay) return;
      if (document.visibilityState === "hidden") return;
      const now = Date.now();
      if (now - lastTry < 180) return;
      lastTry = now;
      prepare();
      if (el.ended || (Number.isFinite(el.duration) && el.duration > 0 && el.currentTime >= el.duration - 0.05)) {
        el.currentTime = 0;
      }
      tryPlay(el);
    };

    const startWatchdog = () => {
      if (watchdog) return;
      watchdog = window.setInterval(() => {
        if (wantPlay && (el.paused || el.ended)) playNow();
      }, 650);
    };

    const stopWatchdog = () => {
      window.clearInterval(watchdog);
      watchdog = 0;
    };

    const setWantPlay = (next: boolean) => {
      if (next === wantPlay) {
        if (next) playNow();
        return;
      }
      wantPlay = next;
      window.clearTimeout(pauseTimer);
      if (next) {
        playNow();
        startWatchdog();
      } else {
        stopWatchdog();
        pauseTimer = window.setTimeout(() => {
          if (!wantPlay && !stopped) el.pause();
        }, 500);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry?.intersectionRatio ?? 0;
        if (ratio >= 0.08) setWantPlay(true);
        else if (!entry?.isIntersecting || ratio < 0.02) setWantPlay(false);
      },
      { threshold: [0, 0.02, 0.08, 0.2, 0.4, 0.7, 1], rootMargin: "120px 0px" },
    );
    io.observe(el);

    const onPause = () => {
      if (wantPlay && document.visibilityState === "visible") {
        window.setTimeout(playNow, 60);
      }
    };
    const onEnded = () => {
      if (!wantPlay) return;
      el.currentTime = 0;
      playNow();
    };
    const onVis = () => {
      if (document.visibilityState === "visible") playNow();
    };
    const onPlaying = () => {
      lastTry = 0;
    };

    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);
    el.addEventListener("stalled", playNow);
    el.addEventListener("canplay", playNow);
    el.addEventListener("loadeddata", playNow);
    el.addEventListener("playing", onPlaying);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pageshow", playNow);
    window.addEventListener("focus", playNow);

    const rect = el.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) setWantPlay(true);
    prepare();
    playNow();

    return () => {
      stopped = true;
      wantPlay = false;
      io.disconnect();
      window.clearTimeout(pauseTimer);
      stopWatchdog();
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("stalled", playNow);
      el.removeEventListener("canplay", playNow);
      el.removeEventListener("loadeddata", playNow);
      el.removeEventListener("playing", onPlaying);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pageshow", playNow);
      window.removeEventListener("focus", playNow);
    };
  }, [unmuted]);

  return ref;
}
