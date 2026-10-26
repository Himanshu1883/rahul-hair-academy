# Assets

## Brand (client)

| File | Use |
| --- | --- |
| `src/assets/brand/logo_full_transparent.webp` | Full RA + wings + crown lockup. Gold is preserved (never flattened). Light theme sits the mark on a dark rounded badge. Dark theme uses `mix-blend-mode: screen` so the black plate drops out. |
| `src/assets/brand/logo_monogram.webp` | Compact RA + wings for navbar, preloader, team fallback |
| `public/favicon.png` | Favicon / apple touch icon |
| `src/assets/brand/ig_1.webp` … `ig_6.webp` | Real academy posters from the client Instagram. Used **only** in Gallery, Instagram grid, About overlapping image, and founder/team slots until a dedicated portrait is supplied. |

These six `ig_*` files are **not stock**. Do not replace them with Unsplash.

## Stock / cinematic plates (backgrounds, courses, journey only)

These files live in `src/assets/stock/` and are tagged in code as decorative. They must **never** appear in Student Work, Our Work, Before/After, the Instagram grid, or instructor portraits.

They were generated as black-and-gold cinematic plates for empty slots (not Unsplash IDs — do not invent photographer credits). Replace with client photography when available; keep `// REPLACE WITH CLIENT PHOTO` comments in `src/content.ts`.

| File | Section |
| --- | --- |
| `hero-salon.jpg` | Hero slideshow |
| `hero-styling.jpg` | Hero slideshow / enrol image |
| `hero-classroom.jpg` | Hero slideshow |
| `course-cutting.jpg` | Cutting courses |
| `course-colour.jpg` | Colour course |
| `course-bridal.jpg` | Bridal course |
| `course-treatments.jpg` | Treatments course + salon section texture |
| `course-barbering.jpg` | Barbering course |
| `course-master.jpg` | Master course |
| `course-business.jpg` | Business course |
| `journey-basics.jpg` | Learning journey 01 |
| `journey-model.jpg` | Learning journey 02 |
| `journey-create.jpg` | Learning journey 03 |
| `journey-certified.jpg` | Learning journey 04 |

## Videos

Drop client reels / salon footage in `public/videos/`. Point `site.hero.video` or `site.igSection.reels[].video` at those paths.
