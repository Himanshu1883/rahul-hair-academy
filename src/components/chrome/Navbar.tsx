import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Logo } from "@/components/brand/Logo";
import { InstagramIcon } from "@/components/brand/SocialIcons";
import { IgChooser } from "@/components/site/IgChooser";
import { Magnetic } from "@/components/site/Magnetic";
import { useSite } from "@/hooks/site-context";
import { site } from "@/content";
import { startLenis, stopLenis } from "@/lib/lenis";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme, goTo, goToEnrol, goToBooking, activeSection } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (open) {
      stopLenis();
      html.classList.add("menu-open");
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.overscrollBehavior = "none";
    } else {
      startLenis();
      html.classList.remove("menu-open");
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.overscrollBehavior = "";
    }
    return () => {
      startLenis();
      html.classList.remove("menu-open");
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.overscrollBehavior = "";
    };
  }, [open]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!coursesRef.current?.contains(e.target as Node)) setCoursesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCoursesOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setCoursesOpen(false);
    goTo(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[70] pt-[env(safe-area-inset-top)] transition-[background-color,backdrop-filter,padding,box-shadow] duration-[400ms]",
        open
          ? "bg-[var(--background)] py-3 sm:py-4"
          : scrolled
            ? "bg-[color-mix(in_srgb,var(--background)_78%,transparent)] py-2 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "bg-transparent py-3 sm:py-4",
      )}
    >
      <div className="relative z-50 flex w-full min-w-0 items-center justify-between gap-2 px-3 sm:gap-4 sm:px-4 md:px-8 lg:px-12">
        <button type="button" onClick={() => go("home")} className="min-w-0 max-w-[46%] shrink sm:max-w-none" aria-label={site.brand}>
          <Logo
            variant="mono"
            className={cn(
              "h-8 max-w-[6.5rem] overflow-hidden sm:h-11 sm:max-w-[10rem] md:h-14 md:max-w-[12rem]",
              scrolled ? "md:h-11" : "md:h-14",
            )}
          />
        </button>

        <nav className="hidden items-center gap-0 whitespace-nowrap xl:flex" aria-label="Primary">
          {site.nav.map((item) =>
            item.id === "courses" ? (
              <div
                key={item.id}
                ref={coursesRef}
                className="relative"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setCoursesOpen((v) => !v);
                    goTo("courses");
                  }}
                  aria-expanded={coursesOpen}
                  aria-haspopup="true"
                  className={cn("nav-link gap-1 px-2 2xl:px-3", activeSection === item.id && "is-active")}
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", coursesOpen && "rotate-180")} />
                </button>
                <div
                  className={cn(
                    "absolute top-full left-0 z-50 min-w-[min(22rem,calc(100vw-2rem))] origin-top pt-2 transition-all",
                    coursesOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
                  )}
                >
                  <div className="border border-[var(--border)] bg-[var(--surface)] py-2 shadow-[var(--shadow-lux)]">
                    {site.navCourses.map((course) => (
                      <Link
                        key={course.id}
                        to="/courses/$slug"
                        params={{ slug: course.slug }}
                        onClick={() => {
                          setOpen(false);
                          setCoursesOpen(false);
                        }}
                        className="block w-full px-5 py-3 text-left text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-foreground hover:bg-[var(--background)] hover:text-[var(--gold)]"
                      >
                        {course.navLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={cn("nav-link px-2 2xl:px-3", activeSection === item.id && "is-active")}
              >
                {item.label}
              </button>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1 md:gap-2">
          <IgChooser
            className="hidden sm:block"
            panelAlign="right"
            trigger={
              <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-[0.7rem]">
                <InstagramIcon className="h-7 w-7" />
              </span>
            }
          />
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--gold)] hover:bg-[var(--surface)]"
            aria-label={theme === "dark" ? site.ui.themeLight : site.ui.themeDark}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button type="button" onClick={() => goToBooking()} className="btn-ghost-gold hidden 2xl:inline-flex">
            {site.ui.bookSalon}
          </button>
          <Magnetic>
            <button type="button" onClick={() => goToEnrol()} className="btn-gold hidden lg:inline-flex">
              {site.ui.enrolNow}
            </button>
          </Magnetic>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--gold)] xl:hidden"
            aria-label={open ? site.ui.close : site.ui.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  className="fixed inset-0 z-[60] flex h-dvh w-full flex-col overflow-y-auto overscroll-contain bg-[var(--background)] px-6 pt-[calc(5.5rem+env(safe-area-inset-top))] pb-[calc(2rem+env(safe-area-inset-bottom))] sm:px-8 xl:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <nav className="flex flex-col gap-1" aria-label="Mobile">
                    {site.nav.map((item, i) => (
                      <div key={item.id}>
                        <motion.button
                          type="button"
                          onClick={() => go(item.id)}
                          initial={{ y: 16, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.04 * i }}
                          className="font-display w-full py-1 text-left text-3xl text-foreground sm:text-4xl"
                        >
                          {item.label}
                        </motion.button>
                        {item.id === "courses"
                          ? site.navCourses.map((course) => (
                              <Link
                                key={course.id}
                                to="/courses/$slug"
                                params={{ slug: course.slug }}
                                onClick={() => {
                                  setOpen(false);
                                  setCoursesOpen(false);
                                }}
                                className="block w-full py-2.5 pl-1 text-left text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]"
                              >
                                {course.navLabel}
                              </Link>
                            ))
                          : null}
                      </div>
                    ))}
                  </nav>
                  <div className="mt-8 flex flex-col gap-3 pb-4">
                    <button
                      type="button"
                      className="btn-gold w-full"
                      onClick={() => {
                        setOpen(false);
                        goToEnrol();
                      }}
                    >
                      {site.ui.enrolNow}
                    </button>
                    <button
                      type="button"
                      className="btn-outline-gold w-full"
                      onClick={() => {
                        setOpen(false);
                        goToBooking();
                      }}
                    >
                      {site.ui.bookSalon}
                    </button>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </header>
  );
}
