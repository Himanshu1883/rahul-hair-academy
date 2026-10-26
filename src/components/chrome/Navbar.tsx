import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { Magnetic } from "@/components/site/Magnetic";
import { useSite } from "@/hooks/site-context";
import { site } from "@/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme, goTo, goToEnrol, goToBooking, activeSection } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    goTo(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding,box-shadow] duration-[400ms]",
        scrolled
          ? "bg-[color-mix(in_srgb,var(--background)_78%,transparent)] py-2 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "bg-transparent py-4",
      )}
    >
      <div className="relative z-50 flex w-full items-center justify-between gap-4 px-4 md:px-8 lg:px-12">
        <button type="button" onClick={() => go("home")} className="shrink-0" aria-label={site.brand}>
          <Logo variant="mono" className={cn("transition-all", scrolled ? "h-11" : "h-14")} />
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={cn("nav-link px-3", activeSection === item.id && "is-active")}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={site.instagram.handle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--gold)] hover:bg-[var(--surface)]"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--gold)] hover:bg-[var(--surface)]"
            aria-label={theme === "dark" ? site.ui.themeLight : site.ui.themeDark}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button type="button" onClick={() => goToBooking()} className="btn-ghost-gold hidden xl:inline-flex">
            {site.ui.bookSalon}
          </button>
          <Magnetic>
            <button type="button" onClick={() => goToEnrol()} className="btn-gold hidden md:inline-flex">
              {site.ui.enrolNow}
            </button>
          </Magnetic>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--gold)] lg:hidden"
            aria-label={open ? site.ui.close : site.ui.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-[#0B0B0B] px-8 pt-28 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-1 flex-col gap-2" aria-label="Mobile">
              {site.nav.map((item, i) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-left text-4xl text-[var(--ivory)]"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <div className="mb-10 flex flex-col gap-3 pb-8">
              <button type="button" className="btn-gold w-full" onClick={() => { setOpen(false); goToEnrol(); }}>
                {site.ui.enrolNow}
              </button>
              <button type="button" className="btn-outline-gold w-full" onClick={() => { setOpen(false); goToBooking(); }}>
                {site.ui.bookSalon}
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
