import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { Wings } from "@/components/brand/Wings";
import { useSite } from "@/hooks/site-context";
import { site } from "@/content";

export function Preloader() {
  const { reducedMotion, markPreloaderDone, preloaderDone } = useSite();
  const [visible, setVisible] = useState(true);
  const [spread, setSpread] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(false);
      markPreloaderDone();
      return;
    }
    const spreadTimer = window.setTimeout(() => setSpread(true), 160);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      markPreloaderDone();
    }, 900);
    return () => {
      window.clearTimeout(spreadTimer);
      window.clearTimeout(hideTimer);
    };
  }, [reducedMotion, markPreloaderDone]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0B]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden={preloaderDone}
        >
          <div className="relative flex w-[min(88vw,420px)] flex-col items-center shine-sweep">
            <Wings spread={spread} solid className="mb-[-12%] max-w-md opacity-90" />
            <Logo variant="mono" className="relative z-10 h-24 md:h-28" />
            <p className="mt-6 font-display text-sm tracking-[0.35em] text-[var(--gold)] uppercase">
              {site.shortBrand}
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
