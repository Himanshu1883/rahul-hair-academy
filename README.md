# Rahul Hair Academy

Premium single-page site for **Rahul Hair Academy** — a professional hair salon and hair-education academy. Tagline: *Where Passion Meets Hair Education*.

Conversion order: **course enrolment** → salon bookings → Instagram follows ([@rahul_hairacademy](https://www.instagram.com/rahul_hairacademy/)).

This project was built with [Lovable](https://lovable.dev).

## Stack

React + Vite + TypeScript + TanStack Start + Tailwind CSS, GSAP + ScrollTrigger, Lenis, Framer Motion, Swiper, Lucide.

Forms send a prefilled WhatsApp message. An optional Formspree email copy can be enabled with an env var. Static-friendly deploy (Vercel / Netlify / Lovable).

## Setup

```sh
git clone <this-repository-url>
cd rahul-hair-academy
npm i
npm run dev
```

Copy `.env.example` to `.env` if you want the optional email or live Instagram feed.

## Edit copy, courses, fees, and links

**Everything the client can change lives in `src/content.ts`.** Do not hardcode copy in components.

| Want to change | Where |
| --- | --- |
| Brand, tagline, CTAs, nav | `site` |
| Instagram handle / stats | `site.instagram` (`followersLabel` is editable — do not scrape live counts) |
| Phone, WhatsApp, address, hours, maps | `site.contact` |
| Founder name & bio | `site.founder` |
| Courses, fees, duration, syllabus, batches | `site.courses` |
| Salon prices | `site.services` |
| Gallery (real client photos only) | `site.gallery.items` |
| Reels `{ video, poster, igUrl, caption }` | `site.igSection.reels` |
| Reviews | `site.testimonials` |
| FAQ | `site.faq` |
| Brochure button | `site.brochureUrl` (hidden while empty) |

Values in `[SQUARE BRACKETS]` are placeholders. They render with a gold dashed underline so they stay visible until the client fills them.

## Swap media

- Brand logo / monogram: `src/assets/brand/`
- Client Instagram / academy photos: `src/assets/brand/ig_*.webp` — mapped in gallery + Instagram grid
- Hero video: put a file in `public/videos/` and set `site.hero.video` (e.g. `"/videos/hero.mp4"`). Empty string = Ken Burns slideshow
- Course / journey / service plates: `src/assets/stock/` (stock / generated plates only — never used in Student Work, Our Work, Before/After, Instagram grid, or instructor portraits)
- Favicon: `public/favicon.png`

See `ASSETS.md` for credits and the honesty rules.

## Add Instagram reels

1. Drop the mp4 into `public/videos/`
2. Add a poster image
3. Push an object into `site.igSection.reels`:

```ts
{ video: "/videos/reel-1.mp4", poster: "/videos/reel-1.jpg", igUrl: "https://www.instagram.com/reel/…", caption: "Cutting class" }
```

Reels autoplay muted while in view and pause off-screen. Each card links to its Instagram URL.

## Optional email copy

Set `VITE_FORMSPREE_ENDPOINT` to a Formspree form URL. Enrolment and booking still open WhatsApp; the endpoint receives a JSON copy. If the env var is empty, WhatsApp is the only delivery.

## Optional live Instagram feed

Set `VITE_INSTAGRAM_FEED_URL` to a Behold.so (or similar) JSON feed. If it is empty or the request fails, the curated 3×3 grid is used with no error UI.

## Theme

Sun/moon toggle in the navbar. Choice is stored in `localStorage` (`rha-theme`) inside try/catch. Default is the system preference. CSS variables in `src/styles.css` drive both themes (400ms transition).

## Deploy

```sh
npm run build
```

Deploy the output with Vercel, Netlify, or Lovable.

## Remaining media to add

Contact phone, WhatsApp, address, hours, and maps are live. Course fees and salon prices show as “On enquiry” until exact amounts are confirmed.

Ask the client for:

- Exact course fees and salon prices
- Founder / trainer portraits
- Before/after photos
- Certificate preview image
- Brochure PDF
- Hero / classroom video

## Continue in Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0289d5e6-dd02-4c0e-8fed-cc910d41b19d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.
