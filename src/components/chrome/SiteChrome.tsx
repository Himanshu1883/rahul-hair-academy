import type { ReactNode } from "react";

import { FloatingActions } from "@/components/chrome/FloatingActions";
import { Footer } from "@/components/chrome/Footer";
import { MobileStickyBar } from "@/components/chrome/MobileStickyBar";
import { Navbar } from "@/components/chrome/Navbar";
import { Preloader } from "@/components/chrome/Preloader";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
import { JsonLd } from "@/components/site/JsonLd";

export function SiteChrome({
  children,
  withPreloader = false,
}: {
  children: ReactNode;
  withPreloader?: boolean;
}) {
  return (
    <>
      <JsonLd />
      {withPreloader ? <Preloader /> : null}
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-clip pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">{children}</main>
      <Footer />
      <FloatingActions />
      <MobileStickyBar />
    </>
  );
}
