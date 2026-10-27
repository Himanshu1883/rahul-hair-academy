import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { scrollToId, setLenis } from "@/lib/lenis";
import { preloadSiteMedia } from "@/lib/preload-media";
import { useReducedMotion } from "@/hooks/media";
import { useTheme, type Theme } from "@/hooks/use-theme";

type SiteCtx = {
  theme: Theme;
  toggleTheme: () => void;
  reducedMotion: boolean;
  preloaderDone: boolean;
  markPreloaderDone: () => void;
  activeSection: string;
  prefilledCourseId: string;
  prefilledService: string;
  goTo: (id: string) => void;
  goToEnrol: (courseId?: string) => void;
  goToCourse: (courseId: string) => void;
  goToBooking: (service?: string) => void;
};

const Ctx = createContext<SiteCtx | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const reducedMotion = useReducedMotion();
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [prefilledCourseId, setPrefilledCourseId] = useState("");
  const [prefilledService, setPrefilledService] = useState("");

  useEffect(() => {
    preloadSiteMedia();
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setLenis(null);
      return;
    }
    let destroyed = false;
    let instance: { destroy: () => void; raf: (t: number) => void } | null = null;
    let ticker: ((time: number) => void) | null = null;
    let gsapRef: { ticker: { add: (fn: (t: number) => void) => void; remove: (fn: (t: number) => void) => void; lagSmoothing: (n: number) => void } } | null =
      null;

    void (async () => {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (destroyed) return;
      const gsap = gsapMod.gsap;
      gsap.registerPlugin(stMod.ScrollTrigger);
      const lenis = new Lenis({ duration: 1.15, smoothWheel: true, autoRaf: false });
      instance = lenis;
      setLenis(lenis);
      lenis.on("scroll", stMod.ScrollTrigger.update);
      ticker = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
      gsapRef = gsap;
      stMod.ScrollTrigger.refresh();
    })();

    return () => {
      destroyed = true;
      if (ticker && gsapRef) gsapRef.ticker.remove(ticker);
      instance?.destroy();
      setLenis(null);
    };
  }, [reducedMotion]);

  useEffect(() => {
    const ids = ["home", "academy", "courses", "salon", "gallery", "reviews", "contact", "enrol"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [preloaderDone]);

  const goTo = useCallback((id: string) => {
    scrollToId(id);
  }, []);

  const goToEnrol = useCallback(
    (courseId?: string) => {
      if (courseId) setPrefilledCourseId(courseId);
      scrollToId("enrol");
    },
    [],
  );

  const goToCourse = useCallback((courseId: string) => {
    setPrefilledCourseId(courseId);
    window.setTimeout(() => {
      const target = `course-${courseId}`;
      scrollToId(document.getElementById(target) ? target : "courses");
    }, 80);
  }, []);

  const goToBooking = useCallback((service?: string) => {
    if (service) setPrefilledService(service);
    scrollToId("booking");
  }, []);

  const value = useMemo<SiteCtx>(
    () => ({
      theme,
      toggleTheme,
      reducedMotion,
      preloaderDone,
      markPreloaderDone: () => setPreloaderDone(true),
      activeSection,
      prefilledCourseId,
      prefilledService,
      goTo,
      goToEnrol,
      goToCourse,
      goToBooking,
    }),
    [
      theme,
      toggleTheme,
      reducedMotion,
      preloaderDone,
      activeSection,
      prefilledCourseId,
      prefilledService,
      goTo,
      goToEnrol,
      goToCourse,
      goToBooking,
    ],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSite() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
