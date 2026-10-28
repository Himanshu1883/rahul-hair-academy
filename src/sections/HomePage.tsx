import { SiteChrome } from "@/components/chrome/SiteChrome";
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
    <SiteChrome withPreloader>
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
      {/* <Booking /> */}
      <Instagram />
      <Testimonials />
      <FAQ />
      <Contact />
    </SiteChrome>
  );
}
