import { JsonLd } from "@/components/site/JsonLd";
import { FloatingActions } from "@/components/chrome/FloatingActions";
import { Footer } from "@/components/chrome/Footer";
import { MobileStickyBar } from "@/components/chrome/MobileStickyBar";
import { Navbar } from "@/components/chrome/Navbar";
import { Preloader } from "@/components/chrome/Preloader";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
import { SiteProvider } from "@/hooks/site-context";
import { About } from "@/sections/About";
import { BeforeAfter } from "@/sections/BeforeAfter";
import { Booking } from "@/sections/Booking";
import { Certification } from "@/sections/Certification";
import { Contact } from "@/sections/Contact";
import { Courses } from "@/sections/Courses";
import { Enrol } from "@/sections/Enrol";
import { FAQ } from "@/sections/FAQ";
import { Gallery } from "@/sections/Gallery";
import { Hero } from "@/sections/Hero";
import { Highlights } from "@/sections/Highlights";
import { Instagram } from "@/sections/Instagram";
import { Journey } from "@/sections/Journey";
import { Marquee } from "@/sections/Marquee";
import { Services } from "@/sections/Services";
import { Team } from "@/sections/Team";
import { Testimonials } from "@/sections/Testimonials";

export function HomePage() {
  return (
    <SiteProvider>
      <JsonLd />
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Marquee />
        <About />
        <Highlights />
        <Courses />
        <Journey />
        <Gallery />
        <BeforeAfter />
        <Services />
        <Team />
        <Certification />
        <Enrol />
        <Booking />
        <Instagram />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <MobileStickyBar />
    </SiteProvider>
  );
}
