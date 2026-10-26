# Rahul Hair Academy

1. Role and goal

You are a senior creative front-end developer and UI/UX designer. Build a premium, luxury, single-page website (SPA) for Rahul Hair Academy, a professional hair salon and hair-education academy (“Where Passion Meets Hair Education”).

The site has three conversion goals, in this priority:

Course enrolment enquiries (the main goal)
Salon appointment bookings
Instagram follows (@rahul_hairacademy)

It must feel like a high-end beauty institute: dark, gold and cinematic, with smooth scroll storytelling. It should be fast, mobile-first, and easy for the client to edit.

Inspiration: https://anuraagkaushik.in/ for polish, plus the best luxury salon and beauty-academy sites (full-bleed hero video, big typography, pinned scroll sections). Do not copy any site’s layout or content.

2. Real client data (use exactly)
Field	Value
Brand	Rahul Hair Academy
Instagram	@rahul_hairacademy → https://www.instagram.com/rahul_hairacademy/
IG stats	47 posts, 1,587 followers (show as “1.5K+ Followers”; do not hardcode live numbers, keep them editable)
Tagline	“Where Passion Meets Hair Education”
Motto	“Learn • Create • Master Hair”
Training level	“Basic to Advanced training”
CTA	“Enrol Now”
Still unknown	[FOUNDER FULL NAME & BIO], [CITY], [ADDRESS], [PHONE], [WHATSAPP], [EMAIL], [HOURS], [MAPS LINK], [COURSE FEES, DURATION, BATCH DATES], [SALON PRICES], [CERTIFICATION DETAILS]

Put all of this in one content.ts file. Never hardcode it in components. Every unknown stays a visible [PLACEHOLDER] and is listed in the README.

3. Assets
Logo (rha_logo.jpeg): a 3D gold RA monogram with wings and a crown, on black.
Make a transparent PNG/SVG by removing the black background. Keep the gold shading.
For light mode, keep the gold logo but add a very subtle dark drop-shadow or a dark rounded badge behind it, so the gold stays readable on white. Never recolor it flat.
Make a compact monogram-only version (RA with wings) for the navbar, favicon and loader.
Photos and videos: the client will upload them (hair work, classes, salon, students, certificates). Map files by filename into the sections below. Convert all to WebP/AVIF with srcset, blur-up placeholders, and explicit width/height.
Fallbacks: use real Unsplash images for any empty slot (search “hair salon”, “hairdresser”, “hair colour”, “barber”, “hair academy classroom”, “hair styling”). Download and self-host them in /assets/stock/, and credit them in ASSETS.md. Do not guess or invent photo IDs.
Honesty rule: stock images must never appear in Student Work, Our Work, Before/After, Instagram grid or Instructor sections. Use stock only for service cards, section backgrounds and textures. Tag stock in content.ts with isStock: true and // REPLACE WITH CLIENT PHOTO.
4. Tech stack
React + Vite + TypeScript + Tailwind CSS (or Next.js static export).
GSAP + ScrollTrigger, Lenis smooth scroll, Framer Motion, Swiper, Lucide icons.
No heavy backend. Forms deliver via WhatsApp (prefilled), with an optional Formspree/EmailJS email copy via env var.
Static deploy (Vercel or Netlify).
5. Design system

Two themes with a sun/moon toggle in the navbar. Save the choice in localStorage (wrapped in try/catch), default to system preference, and use a 400ms smooth transition. Everything runs on CSS variables.

Token	Dark: Black + Gold (default)	Light: Ivory/White + Gold
Background	
#0B0B0B	
#FFFFFF
Surface/cards	
#141414	
#FAF6EC
Gold (primary)	
#D4AF37	
#B8902A
Gold gradient	#F6E27A → #D4AF37 → #8A6A12	#E6C65A → #B8902A → #7A5A0E
Text	
#F5F1E6	
#14110A
Muted text	
#A89F8A	
#6B6352
Border	rgba(212,175,55,.2)	rgba(184,144,42,.25)
Typography: headings in Cinzel or Cormorant Garamond (echoes the logo’s classical serif). Body in Montserrat or Inter. Section labels are small uppercase, tracked about 0.3em, like “HAIR ACADEMY”.
Gold treatment: use gold gradient text on key headlines, with a subtle shimmer sweep on hover. Add thin gold hairline dividers, gold-outlined buttons that fill with a gold gradient on hover, and a faint grain overlay in dark mode.
Signature motifs: an animated wing SVG that spreads open on scroll (reuse the logo’s wings), a crown mark as a small ornament, and scissors/comb line icons in gold.
Custom cursor on desktop: a gold dot with a ring that grows over links. Disable it on touch.
Mobile-first at 360 / 768 / 1024 / 1440 / 1920px, with 44px minimum touch targets.
WCAG AA contrast in both themes. Gold text on white must meet contrast, so use the darker light-mode gold for text.
6. Page structure (in order)

1. Preloader. The RA monogram fades in, the wings spread, a gold shine sweeps across, then a curtain reveal (about 2s maximum).

2. Sticky navbar. Monogram logo, then Home, Academy, Courses, Salon, Gallery, Reviews, Contact. On the right: Instagram icon, theme toggle, and a gold “Enrol Now” button, plus a secondary “Book Salon” link. It is transparent over the hero, then blurs and shrinks on scroll. Mobile gets a full-screen animated menu, and scroll-spy highlights the active link.

3. Full-width hero (100vh).

Full-bleed background video (client’s reels or classroom/salon footage). Fall back to a slow Ken Burns image slideshow, with a black-to-transparent gradient (light theme: ivory gradient).
Headline with a masked line-by-line reveal: “Where Passion Meets Hair Education.” Subline: “Learn. Create. Master Hair. Professional courses from Basic to Advanced, plus a premium hair salon.”
CTAs: Enrol Now (gold fill), Explore Courses (outline), and Book Salon Appointment (text link).
The large logo wings frame the headline, with a parallax floating crown. Badges: “Basic to Advanced”, “Hands-on Training”, “Certificate on Completion [CONFIRM]”.
A scroll-down indicator.

4. Marquee strip. Infinite gold ticker: Hair Cutting ✦ Colouring ✦ Styling ✦ Bridal Hair ✦ Keratin & Smoothening ✦ Barbering ✦ Hands-on Training ✦ Certification.

5. About / Academy story. A two-column layout with a founder portrait, an overlapping classroom image, and a rotating gold circular badge (“RAHUL HAIR ACADEMY • LEARN • CREATE • MASTER •”). Tell the story: passion → education → mastery. Include the founder bio ([FOUNDER]) and animated counters (Students Trained, Courses, Years of Experience, Instagram Followers 1.5K+), all marked [CONFIRM].

6. Academy highlights (why learn here). Six tiles: Hands-on Practical Training, Basic to Advanced Levels, Small Batches [CONFIRM], Industry-Experienced Trainers, Live Model Practice, Certificate and Placement Guidance [CONFIRM].

7. Courses (the main feature).

Filter tabs: All / Beginner / Advanced / Professional / Crash Courses.
Course cards, each with a gold-outlined image, level badge, duration, mode (offline/online [CONFIRM]), fee [PLACEHOLDER], a “What you’ll learn” teaser, and two buttons: View Syllabus and Enrol Now (prefills the form).
Suggested courses (confirm with the client, and make them fully editable in content.ts):
Basic Hair Cutting & Styling
Advanced Hair Cutting & Trends
Hair Colouring & Highlights
Hair Treatments: keratin, smoothening, spa
Bridal & Party Hairstyling
Men’s Grooming & Barbering
Master Professional Course: basic to advanced, full program
Salon Business & Entrepreneurship [OPTIONAL]
Syllabus modal or drawer per course: modules checklist, duration, kit included, certificate, eligibility, and batch dates.
A course comparison table (Basic vs Advanced vs Master) in a clean layout.
A highlighted “Most Popular” or “Best Value” ribbon on the Master course.

8. Pinned scroll showcase: “Your Learning Journey”. A GSAP pinned section with big gold numbers (01 → 04) that swap on scroll: Learn the Basics → Practice on Live Models → Create Your Style → Master & Get Certified. Each stage has an image or video, a short text and a gold progress line.

9. Student and Salon work gallery. A masonry grid with filter chips (All / Cuts / Colour / Bridal / Men / Class), a staggered reveal, a gold hover overlay and a lightbox with swipe, keyboard and video support. Only real client photos appear here.

10. Before/After. A draggable comparison slider with a gold handle. Show a “More transformations coming” placeholder if there are none yet.

11. Salon services and price list. Tabs for Women / Men / Hair Treatments / Bridal. List services (haircut, styling, colour, highlights, keratin, smoothening, hair spa, beard, bridal hair) with prices [PLACEHOLDER], each with a “Book this” button that prefills the appointment form.

12. Instructor / Team. A cards row with the founder (Rahul) and any trainers or stylists [CONFIRM], with portrait, role, specialities and an Instagram link. Hover shows a gold frame.

13. Certification and trust. A certificate preview image [CLIENT TO SEND], with logos or lines for any affiliation [CONFIRM]. Add a small “Trusted by students” strip. Do not claim any accreditation that isn’t provided.

14. Enrol / Admissions section (see §7).

15. Book Salon Appointment (see §8).

16. Instagram section (see §9).

17. Testimonials. An auto-sliding carousel with separate Student Reviews and Salon Client Reviews tabs, star ratings and a name plus course. Use placeholder reviews tagged [REPLACE WITH REAL REVIEWS], and ask the client for screenshots or videos.

18. FAQ. An animated accordion split into Academy (eligibility, duration, fees and instalments, certificate, kit, batches, online/offline, placement) and Salon (booking, products, timings).

19. Contact and map. Phone, WhatsApp, Instagram, email, address, hours and a Google Maps embed.

20. Footer. Logo, quick links, courses, salon, contact, Instagram, “Back to top”, and © Rahul Hair Academy. Finish with a giant outlined “RAHUL HAIR ACADEMY” wordmark that fills with gold on scroll.

Always on screen:

A floating WhatsApp button (gold pulse) and a floating Instagram button.
A mobile sticky bar with Call / WhatsApp / Enrol.
A thin gold scroll-progress bar.
7. Course enrolment system

A section with a split layout: a large image and the headline “Start Your Hair Career Today” on the left, trust points beside it, and a multi-step form with a progress bar on the right.

Step 1, Course: choose a course (cards or dropdown), preferred mode (offline/online), and preferred batch ([BATCHES]).
Step 2, About you: name, phone (validate a 10-digit Indian number), email (optional), age/qualification, city, and experience level (Beginner / Some experience / Working professional).
Step 3, Goals: “What do you want to achieve?” (job / own salon / freelance / personal interest), a message, and “How did you hear about us?”
Submit:
Validate with inline errors and a honeypot field.
Open a prefilled WhatsApp message (wa.me/[NUMBER]?text=...): “New Course Enquiry – Rahul Hair Academy: Name, Phone, Course, Mode, Batch, Experience, Goal, City, Message.”
Optionally POST to Formspree/EmailJS for an email copy.
Show a success screen with a gold sparkle animation, “Our team will contact you shortly”, plus Call, WhatsApp and DM on Instagram buttons.
Add a “Download Brochure” button that opens [BROCHURE.pdf] if provided (hide the button if not).
Every “Enrol Now” button on the page opens this section with the course prefilled.
8. Salon appointment booking

A separate, simpler form: service, date (no past dates), time slot, number of people, name, phone and notes. Submit sends a prefilled WhatsApp message. Add a success screen with an “Add to Calendar” (Google link and .ics) option and a note: “Final confirmation on WhatsApp.” Every “Book this” button prefills the service.

9. Instagram integration

Make it work with no login, API key or third-party script:

Profile card: monogram avatar, “@rahul_hairacademy”, the bio line “Where Passion Meets Hair Education ✨”, stats (editable in content.ts), and a gold “Follow on Instagram” button linking to https://www.instagram.com/rahul_hairacademy/ (new tab, rel="noopener noreferrer").
Reels carousel: vertical 9:16 cards from the client’s uploaded videos. They autoplay muted in view and pause off-screen, with a play icon and an IG badge. Each links to its Instagram reel URL. The array lives in content.ts as { video, poster, igUrl, caption }, and the client adds more by pasting a URL and a file.
Photo grid (3×3) of real images. Empty slots show gold-bordered branded tiles (“Follow for more”), never stock images. Every tile links to the profile.
Embed facade: show a poster first, and inject Instagram’s embed.js only after the user clicks.
Optional live feed: read an INSTAGRAM_FEED_URL env var (e.g. Behold.so or the Graph API behind a proxy). If it is empty or failing, silently fall back to the curated grid.
Instagram appears in the navbar, hero, about, footer, floating button, contact and gallery lightbox: at least 6 places.
10. Animation and interaction spec
Lenis smooth scroll with GSAP ScrollTrigger on every section.
Masked text reveals, fade-up and staggered cards, with clip-path image wipes and a scale-down (1.15 → 1).
Parallax on hero and about images, and a horizontal-scroll strip on desktop (e.g. the courses or gallery row).
Gold shimmer on headline hover, magnetic buttons, tilt cards, and animated nav underlines.
Wings spread, crown float and gold line-draw effects tied to scroll.
Animate only transform and opacity for 60fps, and pause off-screen video.
Respect prefers-reduced-motion by falling back to simple fades.
11. SEO, performance, accessibility
Title: “Rahul Hair Academy | Professional Hair Courses & Premium Salon in [CITY]”. Write the meta description, Open Graph and Twitter tags, theme-color and a favicon (the monogram).
JSON-LD: EducationalOrganization (with hasCourseInstance / Course entries per course) plus HairSalon (address, hours, phone, sameAs Instagram).
Semantic HTML with one h1, alt text everywhere, full keyboard support (menu, lightbox, modal, accordion, forms) and visible focus states.
Lighthouse 90+ on all four categories. Preload the hero, lazy-load the rest, and keep the bundle small.
12. Tone of copy

Premium, motivating, professional. Short, punchy lines such as “Learn the craft. Own the chair.”, “From basics to mastery.”, “Where passion meets hair education.” Keep salon copy elegant and academy copy aspirational.

13. Deliverables
A complete, runnable project with a clean structure (/components, /sections, /hooks, /assets, /styles).
One content.ts (all text, courses, prices, batches, reels, testimonials, links) and one theme-tokens CSS file.
A README covering setup, swapping media, editing courses and fees, adding Instagram reels, enabling the email and live-feed options, and deployment.
An ASSETS.md listing any stock images, with credits.
A final checklist of every remaining [PLACEHOLDER].
14. Quality bar

It must look like a top-tier luxury brand build, not a template. Before finishing, check that:

Both the gold-on-black and gold-on-ivory themes look intentional, and gold text is readable in light mode.
The hero impresses within 2 seconds.
The mobile experience is excellent.
There are no console errors or layout shifts.
A visitor can start an enrolment within two taps from anywhere on the page.
Instagram is visible and clickable in at least 6 places.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0289d5e6-dd02-4c0e-8fed-cc910d41b19d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
