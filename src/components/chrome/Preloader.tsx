import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { useSite } from "@/hooks/site-context";

export function Preloader() {
  const { reducedMotion, markPreloaderDone, preloaderDone } = useSite();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(false);
      markPreloaderDone();
      return;
    }
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      markPreloaderDone();
    }, 700);
    return () => window.clearTimeout(hideTimer);
  }, [reducedMotion, markPreloaderDone]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden={preloaderDone}
        >
          <Logo variant="mono" className="h-20 md:h-24" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
