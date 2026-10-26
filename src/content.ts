/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  RAHUL HAIR ACADEMY — single source of content truth.
 *  Every word, course, price, link and media slot lives here.
 *  Values wrapped in [SQUARE BRACKETS] are placeholders the client must fill.
 *  Nothing in this file is hardcoded in components.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import logoFull from "@/assets/brand/logo_full_transparent.webp";
import logoMonogram from "@/assets/brand/logo_monogram.webp";
import ig1 from "@/assets/brand/ig_1.webp";
import ig2 from "@/assets/brand/ig_2.webp";
import ig3 from "@/assets/brand/ig_3.webp";
import ig4 from "@/assets/brand/ig_4.webp";
import ig5 from "@/assets/brand/ig_5.webp";
import ig6 from "@/assets/brand/ig_6.webp";
import heroSalon from "@/assets/stock/hero-salon.jpg";
import heroStyling from "@/assets/stock/hero-styling.jpg";
import heroClassroom from "@/assets/stock/hero-classroom.jpg";
import courseCutting from "@/assets/stock/course-cutting.jpg";
import courseColour from "@/assets/stock/course-colour.jpg";
import courseBridal from "@/assets/stock/course-bridal.jpg";
import courseTreatments from "@/assets/stock/course-treatments.jpg";
import courseBarbering from "@/assets/stock/course-barbering.jpg";
import courseMaster from "@/assets/stock/course-master.jpg";
import courseBusiness from "@/assets/stock/course-business.jpg";
import journeyBasics from "@/assets/stock/journey-basics.jpg";
import journeyModel from "@/assets/stock/journey-model.jpg";
import journeyCreate from "@/assets/stock/journey-create.jpg";
import journeyCertified from "@/assets/stock/journey-certified.jpg";

export const brandAssets = { logoFull, logoMonogram };

export const isPlaceholder = (v?: string | null) =>
  !!v && /\[[A-Z0-9 /&.'-]+\]/.test(v);

/** Build a wa.me deep link. Falls back to Instagram DM when no number yet. */
export const waLink = (text: string) => {
  const num = site.contact.whatsapp.replace(/\D/g, "");
  if (!num || isPlaceholder(site.contact.whatsapp) || num.length < 10)
    return site.instagram.url; // PLACEHOLDER FALLBACK — set contact.whatsapp in content.ts
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
};

export const telLink = () => {
  if (isPlaceholder(site.contact.phone)) return site.instagram.url;
  return `tel:+${site.contact.phone.replace(/\D/g, "")}`;
};

export const mailLink = () => {
  if (isPlaceholder(site.contact.email)) return site.instagram.url;
  return `mailto:${site.contact.email}`;
};

export const site = {
  brand: "Rahul Hair Academy",
  shortBrand: "RHA",
  tagline: "Where Passion Meets Hair Education",
  motto: "Learn • Create • Master Hair",
  trainingLevel: "Basic to Advanced training",
  cta: "Enrol Now",
  brochureUrl: "", // e.g. "/brochure.pdf" — hide the Download Brochure button while empty

  instagram: {
    handle: "@rahul_hairacademy",
    url: "https://www.instagram.com/rahul_hairacademy/",
    // Editable stats — do NOT hardcode live numbers anywhere else
    followersLabel: "1.5K+ Followers",
    postsLabel: "47 Posts",
    bioLine: "Where Passion Meets Hair Education ✨",
  },

  contact: {
    phone: "[PHONE]",
    whatsapp: "[WHATSAPP]",
    email: "[EMAIL]",
    address: "[ADDRESS]",
    city: "[CITY]",
    hours: "[HOURS]",
    mapsLink: "[MAPS LINK]",
  },

  founder: {
    name: "Rahul [FOUNDER FULL NAME]",
    title: "Founder & Master Educator",
    // [FOUNDER FULL NAME & BIO] — 2-3 lines about the journey: passion → education → mastery
    bio: "[FOUNDER FULL NAME & BIO — e.g. “With over X years behind the chair and X students trained, Rahul built Rahul Hair Academy to turn passion for hair into a profession. From mastering the fundamentals to advanced artistry, his mission is simple: learn the craft, own the chair.”]",
    portrait: ig6, // REPLACE WITH CLIENT FOUNDER PORTRAIT (currently an academy photo)
  },

  hero: {
    // Client video (reels / classroom / salon footage). Leave "" to use the
    // Ken Burns image slideshow below. Put the file in /public/videos/.
    video: "",
    headlineLines: ["Where Passion", "Meets Hair", "Education."],
    subline:
      "Learn. Create. Master Hair. Professional courses from Basic to Advanced, plus a premium hair salon.",
    ctas: {
      enrol: "Enrol Now",
      explore: "Explore Courses",
      book: "Book Salon Appointment",
    },
    badges: [
      "Basic to Advanced",
      "Hands-on Training",
      "Certificate on Completion [CONFIRM]",
    ],
    slideshow: [
      { src: heroSalon, alt: "Luxury salon interior with golden lighting" },
      { src: heroStyling, alt: "Stylist blow-drying shiny hair" },
      { src: heroClassroom, alt: "Students practising at the hair academy" },
    ],
  },

  marquee: [
    "Hair Cutting",
    "Colouring",
    "Styling",
    "Bridal Hair",
    "Keratin & Smoothening",
    "Barbering",
    "Hands-on Training",
    "Certification",
  ],

  about: {
    label: "HAIR ACADEMY",
    title: "From Passion to Profession",
    lead: "Great hair doesn’t happen by chance — it happens by a skilled hairdresser.",
    story: [
      "It begins with passion — the pull of the scissors, the theatre of a transformation.",
      "It grows through education — structured, hands-on training from Basic to Advanced, on real models in real salon conditions.",
      "It ends in mastery — the confidence to create, the skill to earn, and a career that belongs to you.",
    ],
    classroomImage: ig3, // REPLACE WITH CLIENT CLASSROOM PHOTO
    stats: [
      { value: 500, suffix: "+", label: "Students Trained", confirm: true }, // [CONFIRM]
      { value: 8, suffix: "", label: "Courses", confirm: false },
      { value: 5, suffix: "+", label: "Years of Experience", confirm: true }, // [CONFIRM]
      { value: 1.5, suffix: "K+", label: "Instagram Followers", confirm: false },
    ],
  },

  highlights: {
    label: "WHY LEARN HERE",
    title: "Academy Highlights",
    items: [
      { icon: "scissors", title: "Hands-on Practical Training", text: "Every technique practised, not just demonstrated — scissors in hand from day one." },
      { icon: "layers", title: "Basic to Advanced Levels", text: "A clear path from your first sectioning to advanced creative artistry." },
      { icon: "users", title: "Small Batches", text: "Personal attention for every student.", confirm: true }, // [CONFIRM]
      { icon: "award", title: "Industry-Experienced Trainers", text: "Learn from professionals who work the chair every day." },
      { icon: "sparkles", title: "Live Model Practice", text: "Real clients, real hair, real confidence before you graduate." },
      { icon: "graduation", title: "Certificate & Placement Guidance", text: "Finish with a certificate and guidance to start earning.", confirm: true }, // [CONFIRM]
    ],
  },

  courses: {
    label: "COURSES",
    title: "Learn the Craft. Own the Chair.",
    lead: "Professional hair courses — Basic to Advanced training, taught hands-on.",
    batches: "[BATCH DATES]",
    levels: [
      { id: "all", label: "All" },
      { id: "beginner", label: "Beginner" },
      { id: "advanced", label: "Advanced" },
      { id: "professional", label: "Professional" },
      { id: "crash", label: "Crash Courses" },
    ],
    items: [
      {
        id: "basic-cutting",
        title: "Basic Hair Cutting & Styling",
        level: "beginner",
        image: courseCutting,
        duration: "[DURATION]",
        mode: "[OFFLINE / ONLINE — CONFIRM]",
        fee: "[FEE]",
        teaser: "Sectioning, scissor control, blow-dry and the classic shapes every career starts with.",
        syllabus: [
          "Salon hygiene, tools & sectioning",
          "Scissor over comb & blunt cutting",
          "Layering & graduation basics",
          "Blow-dry & styling fundamentals",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Open to beginners — no experience needed",
        popular: false,
      },
      {
        id: "advanced-cutting",
        title: "Advanced Hair Cutting & Trends",
        level: "advanced",
        image: courseCutting, // REPLACE WITH CLIENT PHOTO
        duration: "[DURATION]",
        mode: "[OFFLINE / ONLINE — CONFIRM]",
        fee: "[FEE]",
        teaser: "Precision geometry, face-shape mapping and today’s trend cuts.",
        syllabus: [
          "Face-shape & hair-density analysis",
          "Advanced graduation & disconnects",
          "Trend cuts: wolf, butterfly & more",
          "Editorial finishing",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Basic cutting knowledge recommended",
        popular: false,
      },
      {
        id: "colouring",
        title: "Hair Colouring & Highlights",
        level: "advanced",
        image: courseColour,
        duration: "[DURATION]",
        mode: "[OFFLINE / ONLINE — CONFIRM]",
        fee: "[FEE]",
        teaser: "Global colour, balayage, highlights and grey coverage with confidence.",
        syllabus: [
          "Colour theory & the level system",
          "Global colour & root touch-ups",
          "Balayage, highlights & foiling",
          "Corrective colour basics",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Open to beginners with cutting basics",
        popular: false,
      },
      {
        id: "treatments",
        title: "Hair Treatments: Keratin, Smoothening & Spa",
        level: "professional",
        image: courseTreatments,
        duration: "[DURATION]",
        mode: "[OFFLINE / ONLINE — CONFIRM]",
        fee: "[FEE]",
        teaser: "Keratin, smoothening, botox and spa rituals clients return for.",
        syllabus: [
          "Hair science & porosity",
          "Keratin & smoothening protocols",
          "Hair spa & scalp rituals",
          "Aftercare retailing",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Open to all levels",
        popular: false,
      },
      {
        id: "bridal",
        title: "Bridal & Party Hairstyling",
        level: "advanced",
        image: courseBridal,
        duration: "[DURATION]",
        mode: "[OFFLINE / ONLINE — CONFIRM]",
        fee: "[FEE]",
        teaser: "Buns, braids, curls and long-lasting looks for the biggest days.",
        syllabus: [
          "Bridal consultation & draping care",
          "Classic & textured buns",
          "Braids, curls & hair padding",
          "Long-wear setting techniques",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Styling basics recommended",
        popular: false,
      },
      {
        id: "barbering",
        title: "Men’s Grooming & Barbering",
        level: "beginner",
        image: courseBarbering,
        duration: "[DURATION]",
        mode: "[OFFLINE / ONLINE — CONFIRM]",
        fee: "[FEE]",
        teaser: "Fades, tapers, beard shaping and the full barbershop craft.",
        syllabus: [
          "Clipper work & guards",
          "Fades, tapers & line-ups",
          "Beard shaping & razor work",
          "Men’s styling & products",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Open to beginners",
        popular: false,
      },
      {
        id: "master",
        title: "Master Professional Course",
        level: "professional",
        image: courseMaster,
        duration: "[DURATION]",
        mode: "[OFFLINE / ONLINE — CONFIRM]",
        fee: "[FEE]",
        teaser: "The full program — Basic to Advanced. Cutting, colour, styling, treatments and business.",
        syllabus: [
          "Everything in Basic Cutting & Styling",
          "Advanced cutting & trend work",
          "Full colour & highlights module",
          "Treatments, bridal & barbering",
          "Salon business & client handling",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Serious about a professional career",
        popular: true,
        ribbon: "Most Popular",
      },
      {
        id: "business",
        title: "Salon Business & Entrepreneurship",
        level: "crash",
        image: courseBusiness,
        duration: "[DURATION]",
        mode: "[OFFLINE / ONLINE — CONFIRM]",
        fee: "[FEE]",
        teaser: "Pricing, branding, staff and client systems to run your own salon.",
        syllabus: [
          "Business planning & pricing",
          "Branding & social media",
          "Client retention systems",
          "Staffing & inventory",
        ],
        kitIncluded: false,
        certificate: true,
        eligibility: "Working stylists & salon owners",
        popular: false,
        optional: true, // [OPTIONAL — confirm with client]
      },
    ],
    comparison: {
      columns: ["Basic Cutting & Styling", "Advanced Cutting & Trends", "Master Professional"],
      rows: [
        { label: "Skill level", values: ["Beginner", "Intermediate+", "Beginner → Pro"] },
        { label: "Cutting", values: ["✓", "✓ Advanced geometry", "✓ Full program"] },
        { label: "Colour & highlights", values: ["—", "Add-on course", "✓ Included"] },
        { label: "Styling & bridal", values: ["✓ Basics", "—", "✓ Included"] },
        { label: "Certificate", values: ["✓", "✓", "✓"] },
        { label: "Business module", values: ["—", "—", "✓"] },
      ],
    },
  },

  journey: {
    label: "YOUR LEARNING JOURNEY",
    title: "01 → 04, one stage at a time",
    stages: [
      { no: "01", title: "Learn the Basics", text: "Tools, hygiene and sectioning — the grammar of great hair.", image: journeyBasics },
      { no: "02", title: "Practice on Live Models", text: "Real clients under trainer supervision until your hands are sure.", image: journeyModel },
      { no: "03", title: "Create Your Style", text: "Design, experiment and build looks that carry your signature.", image: journeyCreate },
      { no: "04", title: "Master & Get Certified", text: "Graduate with a certificate and a portfolio that gets you hired.", image: journeyCertified },
    ],
  },

  gallery: {
    label: "STUDENT & SALON WORK",
    title: "Work From the Floor",
    // ONLY real client photos below — never stock imagery.
    // Add: { src, alt, category } — categories must match filters.
    items: [
      { src: ig1, alt: "Academy class — join our academy poster", category: "Class", isStock: false }, // REPLACE WITH CLIENT PHOTO
      { src: ig2, alt: "Skill 1 — cutting technique poster", category: "Cuts", isStock: false },
      { src: ig3, alt: "Skill 2 poster", category: "Class", isStock: false },
      { src: ig4, alt: "Skill 3 poster", category: "Class", isStock: false },
      { src: ig5, alt: "Skill 4 poster", category: "Class", isStock: false },
      { src: ig6, alt: "Passion to profession poster", category: "Class", isStock: false },
    ],
    filters: [
      { id: "all", label: "All" },
      { id: "Cuts", label: "Cuts" },
      { id: "Colour", label: "Colour" },
      { id: "Bridal", label: "Bridal" },
      { id: "Men", label: "Men" },
      { id: "Class", label: "Class" },
    ],
  },

  beforeAfter: {
    label: "TRANSFORMATIONS",
    title: "Before / After",
    // Add real client pairs: { before, after, caption }
    items: [], // [CLIENT TO SEND BEFORE/AFTER PHOTOS]
    emptyNote: "More transformations coming — real client results will appear here.",
  },

  services: {
    label: "PREMIUM SALON",
    title: "The Salon Menu",
    tabs: ["Women", "Men", "Hair Treatments", "Bridal"],
    image: courseTreatments, // section background — REPLACE WITH CLIENT PHOTO
    items: [
      {
        tab: "Women",
        services: [
          { name: "Haircut & Styling", price: "[PRICE]" },
          { name: "Blow-Dry & Curls", price: "[PRICE]" },
          { name: "Global Hair Colour", price: "[PRICE]" },
          { name: "Highlights / Balayage", price: "[PRICE]" },
          { name: "Head Massage", price: "[PRICE]" },
        ],
      },
      {
        tab: "Men",
        services: [
          { name: "Haircut", price: "[PRICE]" },
          { name: "Beard Trim & Shaping", price: "[PRICE]" },
          { name: "Fade & Styling", price: "[PRICE]" },
          { name: "Head Massage", price: "[PRICE]" },
        ],
      },
      {
        tab: "Hair Treatments",
        services: [
          { name: "Keratin Treatment", price: "[PRICE]" },
          { name: "Hair Smoothening", price: "[PRICE]" },
          { name: "Hair Spa", price: "[PRICE]" },
          { name: "Anti-Dandruff Treatment", price: "[PRICE]" },
        ],
      },
      {
        tab: "Bridal",
        services: [
          { name: "Bridal Hair (Trial)", price: "[PRICE]" },
          { name: "Bridal Hair (Wedding Day)", price: "[PRICE]" },
          { name: "Party Hairstyling", price: "[PRICE]" },
        ],
      },
    ],
  },

  team: {
    label: "THE TEAM",
    title: "Masters Behind the Chair",
    members: [
      {
        name: site.founderPlaceholderDontUse ?? "Rahul [FOUNDER FULL NAME]",
        role: "Founder & Master Educator",
        specialities: "Cutting • Colour • Education",
        instagram: site.instagram.url,
        photo: ig6, // REPLACE WITH CLIENT PORTRAIT
      },
      {
        name: "[TRAINER NAME — CONFIRM]",
        role: "Senior Trainer [CONFIRM]",
        specialities: "[SPECIALITIES]",
        instagram: site.instagram.url,
        photo: "", // no stock photos in instructor slots — brand monogram shown until photo provided
      },
    ],
  },

  certification: {
    label: "CERTIFICATION",
    title: "Certified. Confident. Career-Ready.",
    certificateImage: "", // [CLIENT TO SEND — certificate preview image]
    affiliations: ["[AFFILIATION / ASSOCIATION — CONFIRM]"],
    trustedStrip: [
      "Students from [CITY]",
      "Salon-ready training",
      "Hands-on batches",
      "1.5K+ community",
    ],
  },

  enrol: {
    label: "ADMISSIONS",
    title: "Start Your Hair Career Today",
    trust: [
      "Basic to Advanced training",
      "Hands-on practice on live models",
      "Certificate on completion [CONFIRM]",
      "Guidance to start earning",
    ],
    modes: ["Offline", "Online [CONFIRM]"],
    experienceLevels: ["Beginner", "Some experience", "Working professional"],
    goals: ["Get a job", "Open my own salon", "Freelance", "Personal interest"],
    heardFrom: ["Instagram", "Friend / Family", "Walked past the salon", "Google", "Other"],
    batches: "[BATCHES]",
    successTitle: "Enquiry Sent!",
    successText: "Our team will contact you shortly.",
  },

  booking: {
    label: "APPOINTMENTS",
    title: "Book the Chair",
    note: "Final confirmation on WhatsApp.",
    timeSlots: ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "4:30 PM", "6:00 PM", "7:30 PM"], // [CONFIRM — replace with salon hours]
    successTitle: "Appointment Requested!",
    successText: "Final confirmation on WhatsApp.",
  },

  instagram: {
    label: "INSTAGRAM",
    title: "Follow the Craft",
    // Reels: client adds { video, poster, igUrl, caption }. Videos go in /public/videos/.
    reels: [] as { video: string; poster: string; igUrl: string; caption: string }[],
    grid: [ig1, ig2, ig3, ig4, ig5, ig6], // real client posts — add more by pasting files
    gridEmptyTileText: "Follow for more",
    // Optional live feed (Behold.so / Graph API behind a proxy).
    // Set VITE_INSTAGRAM_FEED_URL in .env; empty or failing → curated grid.
    feedUrlEnv: "VITE_INSTAGRAM_FEED_URL",
  },

  testimonials: {
    label: "REVIEWS",
    title: "Words From Our Chairs",
    studentReviews: [
      { name: "[STUDENT NAME]", course: "[COURSE]", rating: 5, text: "[REPLACE WITH REAL REVIEWS — ask the client for review screenshots or videos.]", confirm: true },
      { name: "[STUDENT NAME]", course: "[COURSE]", rating: 5, text: "[REPLACE WITH REAL REVIEWS]", confirm: true },
      { name: "[STUDENT NAME]", course: "[COURSE]", rating: 5, text: "[REPLACE WITH REAL REVIEWS]", confirm: true },
    ],
    salonReviews: [
      { name: "[CLIENT NAME]", course: "Salon Guest", rating: 5, text: "[REPLACE WITH REAL REVIEWS]", confirm: true },
      { name: "[CLIENT NAME]", course: "Salon Guest", rating: 5, text: "[REPLACE WITH REAL REVIEWS]", confirm: true },
      { name: "[CLIENT NAME]", course: "Salon Guest", rating: 5, text: "[REPLACE WITH REAL REVIEWS]", confirm: true },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Questions, Answered",
    academy: [
      { q: "Who can join the academy?", a: "Anyone with passion for hair — complete beginners to working stylists. Courses run from Basic to Advanced training." },
      { q: "How long are the courses?", a: "[DURATIONS — confirm with client. Each course card lists its duration.]" },
      { q: "What are the fees? Are instalments available?", a: "[FEES & INSTALMENT OPTIONS — confirm with client.]" },
      { q: "Do I get a certificate?", a: "Yes — a certificate on completion [CONFIRM]." },
      { q: "Is a kit included?", a: "[KIT DETAILS — confirm per course.]" },
      { q: "When do new batches start?", a: "[BATCH DATES]" },
      { q: "Are classes online or offline?", a: "[OFFLINE / ONLINE — CONFIRM]" },
      { q: "Is placement help available?", a: "Placement guidance is provided [CONFIRM]." },
    ],
    salon: [
      { q: "How do I book an appointment?", a: "Use the booking form above or message us on WhatsApp — you’ll get a confirmation within salon hours." },
      { q: "Which products do you use?", a: "[PRODUCT BRANDS — confirm with client.]" },
      { q: "What are your timings?", a: "[HOURS]" },
    ],
  },
} as const;

/* Satisfy TS on the self-reference above */
declare const _founderRef: never;
