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

const localMobile = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
};

/** Build a wa.me deep link. Falls back to Instagram DM when no number yet. */
export const waLink = (text: string) => {
  const num = localMobile(site.contact.whatsapp);
  if (!num || isPlaceholder(site.contact.whatsapp) || num.length !== 10)
    return site.instagram.url;
  return `https://wa.me/91${num}?text=${encodeURIComponent(text)}`;
};

export const telLink = () => {
  const num = localMobile(site.contact.phone);
  if (!num || isPlaceholder(site.contact.phone) || num.length !== 10) return site.instagram.url;
  return `tel:+91${num}`;
};

export const telE164 = () => {
  const num = localMobile(site.contact.phone);
  if (!num || isPlaceholder(site.contact.phone) || num.length !== 10) return "";
  return `+91${num}`;
};

export const site = {
  brand: "Rahul Hair Academy",
  shortBrand: "RHA",
  tagline: "Where Passion Meets Hair Education",
  motto: "Learn • Create • Master Hair",
  trainingLevel: "12-week beginner to 18-week professional training",
  cta: "Enrol Now",
  brochureUrl: "", // e.g. "/brochure.pdf" — hide the Download Brochure button while empty

  seo: {
    title: "Rahul Hair Academy | Professional Hair Courses & Premium Salon in Dwarka, Delhi",
    description:
      "Where Passion Meets Hair Education. Professional hair courses from Basic to Advanced, plus a premium salon. Learn. Create. Master Hair — enrol at Rahul Hair Academy.",
    keywords:
      "hair academy, hair courses, hair salon, hair cutting course, colouring course, bridal hairstyling, barbering, Rahul Hair Academy",
    themeColorDark: "#0B0B0B",
    themeColorLight: "#FFFFFF",
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "academy", label: "Academy" },
    { id: "courses", label: "Courses" },
    { id: "salon", label: "Salon" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ],

  navCourses: [
    { id: "basic-cutting", navLabel: "12 Weeks Beginner Course" },
    { id: "master", navLabel: "18 Weeks Advanced Beginner Course" },
    { id: "barbering", navLabel: "2 Weeks Advanced Barbering Course" },
    { id: "colouring", navLabel: "4 Week Advanced Colour Training" },
  ],

  ui: {
    enrolNow: "Enrol Now",
    bookSalon: "Book Salon",
    bookAppointment: "Book Salon Appointment",
    exploreCourses: "Explore Courses",
    viewSyllabus: "View Syllabus",
    bookThis: "Book this",
    followIg: "Follow on Instagram",
    downloadBrochure: "Download Brochure",
    scroll: "Scroll",
    backToTop: "Back to top",
    call: "Call",
    whatsapp: "WhatsApp",
    onEnquiry: "On enquiry",
    whatYoullLearn: "What you’ll learn",
    kitIncluded: "Kit included",
    certificate: "Certificate",
    addToCalendar: "Add to Calendar",
    googleCalendar: "Google Calendar",
    downloadIcs: "Download .ics",
    next: "Next",
    back: "Back",
    submitEnquiry: "Send Enquiry",
    requestAppointment: "Request Appointment",
    studentReviews: "Student Reviews",
    salonReviews: "Salon Client Reviews",
    faqAcademy: "Academy",
    faqSalon: "Salon",
    trustedBy: "Trusted by students",
    moreComing: "More transformations coming",
    prevSlide: "Previous",
    nextSlide: "Next",
    playReel: "Play reel",
    mute: "Mute",
    unmute: "Unmute",
    close: "Close",
    menu: "Menu",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    dmInstagram: "DM on Instagram",
    openNow: "Open now",
    closedNow: "Closed",
    viewMap: "Open in Google Maps",
    hoursLabel: "Hours",
    readMore: "Read more",
    readLess: "Read less",
    viewOnGoogle: "View all on Google",
    ownerResponse: "Response from the owner",
  },

  instagram: {
    handle: "@rahul_hairacademy",
    url: "https://www.instagram.com/rahul_hairacademy/",
    // Editable stats — do NOT hardcode live numbers anywhere else
    followersLabel: "1.5K+ Followers",
    postsLabel: "47 Posts",
    bioLine: "Where Passion Meets Hair Education ✨",
  },

  contact: {
    phone: "09582557260",
    whatsapp: "09582557260",
    address: "E-521, Second Floor, Palam Extension, Sector 7 Dwarka, Palam",
    city: "Delhi 110077",
    hours: "Mon–Sat, 10:00 AM – 5:00 PM · Sunday closed",
    openingHoursSchema: "Mo-Sa 10:00-17:00",
    timezone: "Asia/Kolkata",
    weekHours: [
      { day: "Monday", label: "10:00 AM – 5:00 PM", openHour: 10, closeHour: 17 },
      { day: "Tuesday", label: "10:00 AM – 5:00 PM", openHour: 10, closeHour: 17 },
      { day: "Wednesday", label: "10:00 AM – 5:00 PM", openHour: 10, closeHour: 17 },
      { day: "Thursday", label: "10:00 AM – 5:00 PM", openHour: 10, closeHour: 17 },
      { day: "Friday", label: "10:00 AM – 5:00 PM", openHour: 10, closeHour: 17 },
      { day: "Saturday", label: "10:00 AM – 5:00 PM", openHour: 10, closeHour: 17 },
      { day: "Sunday", label: "Closed", openHour: null, closeHour: null },
    ],
    mapsLink:
      "https://www.google.com/maps/place/Rahul+hair+Academy/@28.5849844,77.0724583,17z/data=!4m6!3m5!1s0x390d1bcdefc14f73:0x693fe2e0edc0b8f0!8m2!3d28.5849844!4d77.0724583!16s%2Fg%2F11z9c1q0qh",
    lat: 28.5849844,
    lng: 77.0724583,
  },

  founder: {
    name: "Rahul",
    title: "Founder & Master Educator",
    bio: "Rahul is the founder and master educator at Rahul Hair Academy in Dwarka, Delhi. He built the academy to turn passion for hair into a profession — from a 12-week beginner path to 18-week professional training, with live-model practice, a certificate, and placement guidance.",
    portrait: ig6, // REPLACE WITH CLIENT FOUNDER PORTRAIT (currently an academy photo)
  },

  hero: {
    // Client video (reels / classroom / salon footage). Leave "" to use the
    // Ken Burns image slideshow below. Put the file in /public/videos/.
    video: "",
    headlineLines: ["Where Passion", "Meets Hair", "Education."],
    subline:
      "Learn. Create. Master Hair. 12-week beginner and 18-week professional programmes, plus colour, barbering and a premium salon.",
    ctas: {
      enrol: "Enrol Now",
      explore: "Explore Courses",
      book: "Book Salon Appointment",
    },
    badges: [
      "12-Week Beginner Path",
      "Toolkit Included",
      "Certificate & Placement Guidance",
    ],
    slideshow: [
      { src: heroSalon, alt: "Luxury salon interior with golden lighting", isStock: true }, // REPLACE WITH CLIENT PHOTO
      { src: heroStyling, alt: "Stylist blow-drying shiny hair", isStock: true }, // REPLACE WITH CLIENT PHOTO
      { src: heroClassroom, alt: "Students practising at the hair academy", isStock: true }, // REPLACE WITH CLIENT PHOTO
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
      "It grows through education — structured, hands-on programmes from a 12-week beginner path to 18-week professional training, on live models in real salon conditions.",
      "It ends in mastery — a certificate, placement guidance, and a career that belongs to you.",
    ],
    classroomImage: ig3, // REPLACE WITH CLIENT CLASSROOM PHOTO
    stats: [
      { value: 500, suffix: "+", label: "Students Trained" },
      { value: 8, suffix: "", label: "Courses" },
      { value: 5, suffix: "+", label: "Years of Experience" },
      { value: 1.5, suffix: "K+", label: "Instagram Followers" },
    ],
  },

  highlights: {
    label: "WHY LEARN HERE",
    title: "Academy Highlights",
    items: [
      { icon: "scissors", title: "Hands-on Practical Training", text: "Every technique practised, not just demonstrated — scissors in hand from day one, including live-model sessions." },
      { icon: "layers", title: "Beginner to Professional Paths", text: "A 12-week beginner course, an 18-week professional programme, plus focused colour and barbering intensives." },
      { icon: "users", title: "Limited Seats Per Batch", text: "Small groups so every student gets personal attention on the floor." },
      { icon: "award", title: "Industry-Experienced Trainers", text: "Learn from professionals who work the chair every day." },
      { icon: "sparkles", title: "Toolkit & Internship", text: "Flagship courses include a student toolkit and a guided salon internship." },
      { icon: "graduation", title: "Certificate & Placement Guidance", text: "Finish with a certificate and support to start earning behind the chair." },
    ],
  },

  courses: {
    label: "COURSES",
    title: "Learn the Craft. Own the Chair.",
    lead: "Professional hair courses — 12-week beginner and 18-week professional programmes, plus colour and barbering intensives. Offline, Mon–Fri, 10:00 AM – 5:30 PM.",
    batches: "Limited seats per batch — ask for the next start date",
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
        title: "12 Weeks Beginner Course",
        level: "beginner",
        image: courseCutting,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "12 weeks · Mon–Fri, 10:00 AM – 5:30 PM",
        mode: "Offline",
        fee: "On enquiry",
        teaser: "The finest start in hair — foundation, cutting and salon-ready colour, with a toolkit and a 3-week internship.",
        syllabus: [
          "Stage 1 · Foundation (Weeks 1–4): academy orientation, shampooing, blow-dry and finishing, styling and setting, head shape and bone structure, product knowledge and haircare treatments",
          "Stage 2 · Intermediate (Weeks 5–8): cutting technique workshops, client consultation, blow-dry recap, expanding product knowledge, practice on live models",
          "Stage 3 · Salon preparation (Weeks 9–12): colour demonstrations and formulas, live-model practice, keratin, smoothing and perm techniques, hair science, refined client handling",
          "Toolkit provided · 3-week internship · limited seats per batch",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "No experience required",
        popular: false,
      },
      {
        id: "master",
        title: "18 Weeks Advanced Beginner Course",
        level: "professional",
        image: courseMaster,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "18 weeks · Mon–Fri, 10:00 AM – 5:30 PM",
        mode: "Offline",
        fee: "On enquiry",
        teaser: "The full career programme — styling, cutting and colour on live models, with a toolkit, internship and placement guidance.",
        syllabus: [
          "Stage 1 · Foundation (Weeks 1–6): blow-dry and finishing, head shape and bone structure, updos, braiding and crimping, tongs and styling, haircare, client engagement",
          "Stage 2 · Cutting (Weeks 7–12): basic and advanced cutting on live models, short-hair specialism, demonstrations and lectures, blow-dry recap, product knowledge",
          "Stage 3 · Colouring (Weeks 13–18): colour formulas and charts, live demonstrations, hands-on live models, consultation, current colour techniques, keratin, smoothing and advanced perm",
          "Toolkit provided · 3-week internship · limited seats per batch",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Prior salon or training experience required",
        popular: true,
        ribbon: "Most Popular",
      },
      {
        id: "colouring",
        title: "4 Week Advanced Colour Training",
        level: "advanced",
        image: courseColour,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "4 weeks · Mon–Fri, 10:00 AM – 5:30 PM",
        mode: "Offline",
        fee: "On enquiry",
        teaser: "Colour science to correction — global, grey coverage, foiling, balayage and live-model mastery for working stylists.",
        syllabus: [
          "Week 1 · Colour science: hair and scalp structure, theory and neutralisation, the level system, developers, strand tests, porosity and elasticity drills",
          "Week 2 · Technical application: professional sectioning, virgin global colour, regrowth and refresh, grey coverage and root retouch, timing and saturation, mannequin and live models",
          "Week 3 · Advanced techniques: lightening and blonde lift stages, foiling, balayage and freehand painting, face-framing and contour, toner formulation",
          "Week 4 · Expert mastery: colour correction on live models, consultation and diagnostics, salon workflow, final assessment and portfolio review",
          "1-month internship · 6 months’ experience required",
        ],
        kitIncluded: false,
        certificate: true,
        eligibility: "Minimum 6 months’ salon experience",
        popular: false,
      },
      {
        id: "barbering",
        title: "2 Weeks Advanced Barbering Course",
        level: "crash",
        image: courseBarbering,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "2 weeks · Mon–Fri, 10:00 AM – 5:30 PM",
        mode: "Offline",
        fee: "On enquiry",
        teaser: "Classic men’s cutting through modern fades — clipper work, consultancy and assessment on real hair.",
        syllabus: [
          "Stage 1 · Foundations (Week 1): men’s hair structure, head shape and bone structure, product knowledge, classic cutting techniques",
          "Stage 2 · Advanced skills (Week 2): clipper work and fades, independent practice on real hair, image consultancy, modern men’s styles, practical assessment",
          "1-month internship · 1 year of salon experience required",
        ],
        kitIncluded: false,
        certificate: true,
        eligibility: "Minimum 1 year of salon experience",
        popular: false,
      },
      {
        id: "treatments",
        title: "Hair Treatments: Keratin, Smoothening & Spa",
        level: "professional",
        image: courseTreatments,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "Included in 12 & 18 week programmes · add-on module [DURATION]",
        mode: "Offline",
        fee: "On enquiry",
        teaser: "Keratin, smoothening, perm and spa rituals practised on live models — the services clients return for.",
        syllabus: [
          "Hair science, porosity and elasticity",
          "Keratin and smoothening protocols",
          "Perm techniques and aftercare",
          "Hair spa, scalp rituals and retailing",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Open to academy students and working stylists",
        popular: false,
      },
      {
        id: "bridal",
        title: "Bridal & Party Hairstyling",
        level: "advanced",
        image: courseBridal,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "Covered in the 18-week programme · dedicated module [DURATION]",
        mode: "Offline",
        fee: "On enquiry",
        teaser: "Updos, braids, tongs and long-wear looks for the biggest days.",
        syllabus: [
          "Bridal consultation and draping care",
          "Classic and textured buns, updos",
          "Braiding, crimping, tongs and padding",
          "Long-wear setting for events and weddings",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Styling basics recommended",
        popular: false,
      },
      {
        id: "advanced-cutting",
        title: "Advanced Hair Cutting & Trends",
        level: "advanced",
        image: courseCutting,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "Covered in Weeks 7–12 of the 18-week programme · [DURATION]",
        mode: "Offline",
        fee: "On enquiry",
        teaser: "Precision cutting on live models — short-hair specialism, geometry and today’s shapes.",
        syllabus: [
          "Face-shape and bone-structure mapping",
          "Basic and advanced cutting on live models",
          "Short-hair specialism and trend shapes",
          "Demonstrations, lectures and finishing",
        ],
        kitIncluded: true,
        certificate: true,
        eligibility: "Basic cutting knowledge recommended",
        popular: false,
      },
      {
        id: "business",
        title: "Salon Business & Entrepreneurship",
        level: "crash",
        image: courseBusiness,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "[DURATION]",
        mode: "Offline",
        fee: "On enquiry",
        teaser: "Pricing, branding, staff and client systems to run your own salon — for stylists ready to lead.",
        syllabus: [
          "Business planning and pricing",
          "Branding and social media",
          "Client retention systems",
          "Staffing and inventory",
        ],
        kitIncluded: false,
        certificate: true,
        eligibility: "Working stylists and salon owners",
        popular: false,
        optional: true,
      },
    ],
    comparison: {
      columns: ["12 Weeks Beginner", "18 Weeks Advanced Beginner", "4 Week Colour"],
      rows: [
        { label: "Skill level", values: ["No experience needed", "Prior experience required", "6 months’ salon experience"] },
        { label: "Schedule", values: ["Mon–Fri, 10:00–5:30", "Mon–Fri, 10:00–5:30", "Mon–Fri, 10:00–5:30"] },
        { label: "Cutting", values: ["✓ Foundation to salon floor", "✓ Advanced + short hair", "—"] },
        { label: "Colour", values: ["✓ Intro + live models", "✓ Full colour module", "✓ Specialist intensive"] },
        { label: "Toolkit", values: ["✓", "✓", "—"] },
        { label: "Internship", values: ["3 weeks", "3 weeks", "1 month"] },
        { label: "Certificate & placement", values: ["✓", "✓", "✓"] },
      ],
    },
  },

  journey: {
    label: "YOUR LEARNING JOURNEY",
    title: "01 → 04, one stage at a time",
    stages: [
      { no: "01", title: "Foundation", text: "Shampoo, blow-dry, bone structure and finishing — the grammar of great hair.", image: journeyBasics, isStock: true }, // REPLACE WITH CLIENT PHOTO
      { no: "02", title: "Practice on Live Models", text: "Cutting, consultation and product knowledge under trainer supervision until your hands are sure.", image: journeyModel, isStock: true },
      { no: "03", title: "Colour & Create", text: "Colour formulas, keratin and smoothing, then looks that carry your signature.", image: journeyCreate, isStock: true },
      { no: "04", title: "Certified & Placed", text: "Graduate with a certificate, an internship behind you, and guidance to get hired.", image: journeyCertified, isStock: true },
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
    lead: "Watch the change — colour, cut and finish, from the first pass to the final look.",
    items: [
      {
        video: "/videos/reel-passion-skill.mp4",
        headline: "Passion into a Professional Skill",
        subline: "Learn the art of hairstyling — from the chair to a career.",
      },
      {
        video: "/videos/reel-technique-transformation.mp4",
        headline: "Technique to Transformation",
        subline: "Every detail matters when creating beautiful, healthy-looking hair.",
      },
      {
        video: "/videos/ba-cool-new-hair.mp4",
        headline: "Unlock Cool New Hair",
        subline: "Ready for the coolest look? It starts behind the chair.",
      },
    ],
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
          { name: "Haircut & Styling", price: "On enquiry" },
          { name: "Blow-Dry & Curls", price: "On enquiry" },
          { name: "Global Hair Colour", price: "On enquiry" },
          { name: "Highlights / Balayage", price: "On enquiry" },
          { name: "Head Massage", price: "On enquiry" },
        ],
      },
      {
        tab: "Men",
        services: [
          { name: "Haircut", price: "On enquiry" },
          { name: "Beard Trim & Shaping", price: "On enquiry" },
          { name: "Fade & Styling", price: "On enquiry" },
          { name: "Head Massage", price: "On enquiry" },
        ],
      },
      {
        tab: "Hair Treatments",
        services: [
          { name: "Keratin Treatment", price: "On enquiry" },
          { name: "Hair Smoothening", price: "On enquiry" },
          { name: "Hair Spa", price: "On enquiry" },
          { name: "Anti-Dandruff Treatment", price: "On enquiry" },
        ],
      },
      {
        tab: "Bridal",
        services: [
          { name: "Bridal Hair (Trial)", price: "On enquiry" },
          { name: "Bridal Hair (Wedding Day)", price: "On enquiry" },
          { name: "Party Hairstyling", price: "On enquiry" },
        ],
      },
    ],
  },

  team: {
    label: "THE TEAM",
    title: "Masters Behind the Chair",
    reel: {
      video: "/videos/team-passion-colour.mp4",
      headline: "Passion into a Professional Skill",
      subline: "Want to master the art of hair colouring?",
    },
    members: [
      {
        name: "Rahul",
        role: "Founder & Master Educator",
        specialities: "Cutting • Colour • Education",
        instagram: "https://www.instagram.com/rahul_hairacademy/",
        photo: ig6,
      },
    ],
  },

  certification: {
    label: "CERTIFICATION",
    title: "Certified. Confident. Career-Ready.",
    certificateImage: "",
    previewNote: "Certificate awarded on successful completion of academy programmes.",
    affiliations: [
      "Academy certificate on successful completion",
      "Placement guidance included with flagship programmes",
    ],
    trustedStrip: [
      "Limited seats per batch",
      "Live-model training",
      "Toolkit on flagship courses",
      "1.5K+ community",
    ],
  },

  enrol: {
    label: "ADMISSIONS",
    title: "Start Your Hair Career Today",
    trust: [
      "Offline classes, Mon–Fri 10:00 AM – 5:30 PM",
      "Hands-on practice on live models",
      "Toolkit and internship on flagship courses",
      "Certificate and placement guidance",
    ],
    modes: ["Offline"],
    experienceLevels: ["Beginner", "Some experience", "Working professional"],
    goals: ["Get a job", "Full-time internship", "Part-time internship", "Open my own salon", "Freelance"],
    heardFrom: ["Instagram", "Friend / Family", "Walked past the salon", "Google", "Other"],
    batches: "Limited seats per batch — next start date on enquiry",
    successTitle: "Enquiry Sent!",
    successText: "Our team will contact you shortly.",
  },

  booking: {
    label: "APPOINTMENTS",
    title: "Book the Chair",
    note: "Final confirmation on WhatsApp.",
    timeSlots: ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "4:30 PM"],
    successTitle: "Appointment Requested!",
    successText: "Final confirmation on WhatsApp.",
  },

  igSection: {
    label: "INSTAGRAM",
    title: "Follow the Craft",
    lead: "Real journeys. Real craft. Watch how passion becomes a profession.",
    reels: [
      {
        video: "/videos/reel-passion-profession.mp4",
        igUrl: "https://www.instagram.com/rahul_hairacademy/",
        caption: "Turn your passion into a profession",
        overlay: "TURN YOUR PASSION INTO A PROFESSION",
      },
      {
        video: "/videos/reel-dull-to-dazzling.mp4",
        igUrl: "https://www.instagram.com/rahul_hairacademy/",
        caption: "From dull to dazzling",
        overlay: "FROM DULL TO DAZZLING",
      },
      {
        video: "/videos/reel-technique-transformation.mp4",
        igUrl: "https://www.instagram.com/rahul_hairacademy/",
        caption: "From technique to transformation",
        overlay: "FROM TECHNIQUE TO TRANSFORMATION",
      },
      {
        video: "/videos/reel-passion-skill.mp4",
        igUrl: "https://www.instagram.com/rahul_hairacademy/",
        caption: "Turn your passion for hair into a professional skill",
        overlay: "PASSION INTO A PROFESSIONAL SKILL",
      },
    ],
    grid: [ig1, ig2, ig3, ig4, ig5, ig6], // real client posts — add more by pasting files
    gridEmptyTileText: "Follow for more",
    // Optional live feed (Behold.so / Graph API behind a proxy).
    // Set VITE_INSTAGRAM_FEED_URL in .env; empty or failing → curated grid.
    feedUrlEnv: "VITE_INSTAGRAM_FEED_URL",
  },

  testimonials: {
    label: "REVIEWS",
    title: "Loved on Google",
    lead: "Real Google reviews from students at Rahul Hair Academy, Dwarka.",
    items: [
      {
        name: "Ajay Kumar",
        rating: 5,
        when: "3 months ago",
        reviewsLabel: "6 reviews",
        text: "This is the best acedmy of delhi dwarka & Sir is very helpful & best teacher 👌👌👌👌🙏🙏🙏",
      },
      {
        name: "Mithun Don",
        rating: 5,
        when: "4 months ago",
        reviewsLabel: "1 review",
        photosLabel: "4 photos",
        text: "Top hair academy. No 1 hair dresser institute. Professional hair academy",
        ownerResponse: "Thank you",
        ownerWhen: "3 months ago",
      },
      {
        name: "Abrar Salmani",
        rating: 5,
        when: "3 months ago",
        reviewsLabel: "1 review",
        text: "This is the beast teacher for hair art & hair camical mind blowing work & technology & technique",
      },
      {
        name: "Dinesh Kumar.c",
        rating: 5,
        when: "3 months ago",
        reviewsLabel: "3 reviews",
        text: "These teachers teach very well. They do a great job, and the method of teaching so much is very good and helps a lot.",
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Questions, Answered",
    academy: [
      { q: "Who can join the academy?", a: "Complete beginners can join the 12-week course — no experience required. The 18-week programme needs prior experience. Colour training needs 6 months in a salon; advanced barbering needs 1 year." },
      { q: "How long are the courses?", a: "12 weeks (beginner), 18 weeks (advanced beginner), 4 weeks (advanced colour) and 2 weeks (advanced barbering). Classes run Monday to Friday, 10:00 AM – 5:30 PM." },
      { q: "What are the fees? Are instalments available?", a: "Course fees are shared on enquiry. Call or WhatsApp 09582557260 and we will explain the fee and any instalment options for your chosen programme." },
      { q: "Do I get a certificate?", a: "Yes — a certificate on successful completion, with placement guidance on flagship programmes." },
      { q: "Is a kit included?", a: "Yes on the 12-week and 18-week programmes. Colour and barbering intensives focus on technique; ask us if you need a kit quote." },
      { q: "When do new batches start?", a: "Seats are limited per batch. Send an enrolment enquiry and we will share the next start date." },
      { q: "Are classes online or offline?", a: "Training is offline, Monday to Friday, 10:00 AM – 5:30 PM." },
      { q: "Is placement help available?", a: "Yes — flagship courses include placement guidance, and the 12- and 18-week paths include a 3-week internship (1 month on colour and barbering intensives)." },
    ],
    salon: [
      { q: "How do I book an appointment?", a: "Use the booking form above or message us on WhatsApp — you’ll get a confirmation within academy hours." },
      { q: "Which products do you use?", a: "Professional salon products are used in live-model training and salon services. Ask the academy for the current range when you visit or enquire." },
      { q: "What are your timings?", a: "Monday to Saturday, 10:00 AM – 5:00 PM. Closed on Sunday." },
    ],
  },
} as const;

export type Course = (typeof site.courses.items)[number];
export type GalleryItem = (typeof site.gallery.items)[number];
export type HighlightItem = (typeof site.highlights.items)[number];
export type TeamMember = (typeof site.team.members)[number];
export type JourneyStage = (typeof site.journey.stages)[number];
export type NavItem = (typeof site.nav)[number];
