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
import heroDark from "@/assets/brand/hero-dark.jpg";
import heroLight from "@/assets/brand/hero-light.jpg";
import founderAtChair from "@/assets/brand/founder-at-chair.jpg";
import salonFloor from "@/assets/brand/salon-floor.jpg";
import workMensCut from "@/assets/brand/work-mens-cut.jpg";
import colourDarkWaves from "@/assets/brand/colour-dark-waves.jpg";
import colourAshBlonde from "@/assets/brand/colour-ash-blonde.jpg";
import colourMagenta from "@/assets/brand/colour-magenta.jpg";
import colourBurgundy from "@/assets/brand/colour-burgundy.jpg";
import classCaramelWaves from "@/assets/brand/class-caramel-waves.jpg";
import classHoneyWaves from "@/assets/brand/class-honey-waves.jpg";
import awardsRahul from "@/assets/brand/awards-rahul.jpg";
import colourCopperSalon from "@/assets/brand/colour-copper-salon.jpg";
import colourBurgundySalon from "@/assets/brand/colour-burgundy-salon.jpg";
import courseColour from "@/assets/stock/course-colour.jpg";
import courseTreatments from "@/assets/stock/course-treatments.jpg";
import courseMaster from "@/assets/stock/course-master.jpg";

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
  trainingLevel: "2-day colour masterclass to 12-week chemical and hair-cut training",
  cta: "Enrol Now",
  brochureUrl: "", // e.g. "/brochure.pdf" — hide the Download Brochure button while empty

  seo: {
    title: "Rahul Hair Academy | Professional Hair Courses & Premium Salon in Dwarka, Delhi",
    description:
      "Where Passion Meets Hair Education. Professional hair courses from Basic to Advanced, plus a premium salon. Learn. Create. Master Hair — enrol at Rahul Hair Academy.",
    keywords:
      "hair academy, hair courses, chemical hair course, hair colouring, keratin, hair cutting course, Rahul Hair Academy, Dwarka",
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
    { id: "colour-masterclass-2d", slug: "2-days-colour-masterclass", navLabel: "2 Days Masterclass + Workshop" },
    { id: "chemical-7d", slug: "7-days-advance-chemical", navLabel: "7 Days Advance Chemical" },
    { id: "chemical-1m", slug: "4-weeks-advance-chemical", navLabel: "4 Weeks Advance Chemical" },
    { id: "chemical-cut-12w", slug: "12-weeks-chemical-haircut", navLabel: "12 Weeks Chemical & Hair Cut" },
  ],

  ui: {
    enrolNow: "Enrol Now",
    bookSalon: "Book Salon",
    bookAppointment: "Book Salon Appointment",
    exploreCourses: "Explore Courses",
    viewCourse: "View Course",
    viewSyllabus: "View Syllabus",
    courseOverview: "Course Overview",
    courseHighlights: "Course Highlights",
    trainingPlan: "Training Plan",
    courseBenefits: "Course Benefits",
    whoCanJoin: "Who Can Join?",
    limitedSeats: "Limited Seats Available",
    enrolThisCourse: "Enrol in this course",
    bookThis: "Book this",
    followIg: "Follow on Instagram",
    chooseInstagram: "Choose Instagram",
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
    accounts: [
      {
        name: "Rahul Hair Academy",
        handle: "@rahul_hairacademy",
        url: "https://www.instagram.com/rahul_hairacademy/",
      },
      {
        name: "Rahul Kumar",
        handle: "@rahulkumar7874kkc",
        url: "https://www.instagram.com/rahulkumar7874kkc/",
      },
    ],
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
    bio: "Rahul is the founder and master educator at Rahul Hair Academy in Dwarka, Delhi. He built the academy to turn passion for hair into a profession — from a 2-day colour masterclass to 12-week chemical and hair-cut training, with live practicals, a government-affiliated certificate, and 100% job assistance.",
    portrait: founderAtChair,
  },

  hero: {
    // Client video (reels / classroom / salon footage). Leave "" to use the
    // theme collage. Put the file in /public/videos/.
    video: "",
    headlineLines: ["Where Passion", "Meets Hair", "Education."],
    subline:
      "Learn. Practice. Master. Succeed. Professional colour, chemical and hair-cut training in Dwarka — from a 2-day masterclass to a 12-week programme — plus a premium salon.",
    ctas: {
      enrol: "Enrol Now",
      explore: "Explore Courses",
      book: "Book Salon Appointment",
    },
    badges: [
      "2-Day · 7-Day · 4-Week · 12-Week Paths",
      "100% Practical Training",
      "Certificate of Completion",
    ],
    images: {
      dark: {
        src: heroDark,
        alt: "Rahul Hair Academy — colour and styling with Rahul and students",
      },
      light: {
        src: heroLight,
        alt: "Rahul Hair Academy — colour and styling with Rahul and students",
      },
    },
  },

  marquee: [
    "Hair Cutting",
    "Colouring",
    "Styling",
    "Colour Workshop",
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
      "It grows through education — a 2-day colour masterclass, 7-day and 4-week chemical intensives, and a 12-week chemical plus hair-cut programme, practised on the floor until the science and the hands agree.",
      "It ends in mastery — a certificate, placement guidance, and a career that belongs to you.",
    ],
    classroomImage: salonFloor,
    stats: [
      { value: 500, suffix: "+", label: "Students Trained" },
      { value: 4, suffix: "", label: "Courses" },
      { value: 5, suffix: "+", label: "Years of Experience" },
      { value: 1.5, suffix: "K+", label: "Instagram Followers" },
    ],
  },

  highlights: {
    label: "WHY LEARN HERE",
    title: "Academy Highlights",
    items: [
      { icon: "scissors", title: "Hands-on Practical Training", text: "Every technique practised, not just demonstrated — scissors in hand from day one, including live-model sessions." },
      { icon: "layers", title: "Four Clear Paths", text: "A 2-day colour masterclass, 7-day and 4-week chemical intensives, and a 12-week chemical plus hair-cut programme." },
      { icon: "users", title: "Limited Seats Per Batch", text: "Small groups so every student gets personal attention on the floor." },
      { icon: "award", title: "Industry-Experienced Trainers", text: "Learn from professionals who work the chair every day." },
      { icon: "sparkles", title: "100% Practical Training", text: "Live demos, hands-on practice and client consultation — not just theory on a slide." },
      { icon: "graduation", title: "Certificate, Job & Affiliation", text: "Government-affiliated certification, 100% job assistance, and the support to start earning behind the chair." },
    ],
  },

  courses: {
    label: "COURSES",
    title: "Learn the Craft. Own the Chair.",
    lead: "Four professional programmes — 2-day colour masterclass, 7 days, 4 weeks or 12 weeks. Offline in Dwarka Sector 7, with live practicals, government-affiliated certification and 100% job assistance.",
    batches: "Admission open — limited seats — enrol now",
    promo: {
      tagline: "LEARN · PRACTICE · MASTER · SUCCEED",
      subtitle: "PROFESSIONAL TRAINING FOR PROFESSIONAL RESULTS",
      banner: "ADMISSION OPEN – LIMITED SEATS – ENROLL NOW!",
      location: "Dwarka Sector 7 (Ramphal Chowk)",
    },
    levels: [{ id: "all", label: "All" }],
    items: [
      {
        id: "colour-masterclass-2d",
        slug: "2-days-colour-masterclass",
        navLabel: "2 Days Masterclass + Workshop",
        title: "2 Days Masterclass + Workshop",
        level: "crash",
        image: courseColour,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "2 days",
        schedule: "Mon–Sat, 10:00 AM – 5:00 PM",
        mode: "Offline",
        fee: "₹12,999/-",
        feeAmount: 12999,
        teaser: "A colouring masterclass plus a live practical workshop — theory, formulation and hands-on work in two intensive days.",
        syllabus: [
          "Hair Analysis for Colour",
          "Global Colour Theory & Formulation",
          "Grey Coverage & Root Touch-up",
          "Toners, Highlights & Fashion Shades",
          "Live Colour Demo",
          "Hands-on Practical Workshop",
          "Client Consultation for Colour",
          "Aftercare & Problem Solving",
          "Certificate of Completion",
        ],
        pillars: [
          { no: "01", title: "Colour theory & formulation" },
          { no: "02", title: "Live colour demo" },
          { no: "03", title: "Hands-on workshop" },
          { no: "04", title: "Grey coverage & highlights" },
          { no: "05", title: "Client consultation" },
          { no: "06", title: "Certificate of completion" },
        ],
        features: ["COLOUR MASTERCLASS", "LIVE WORKSHOP", "100% PRACTICAL", "CERTIFICATE"],
        planTitle: "2 Days Training Plan",
        plan: [
          {
            no: "1",
            kicker: "Day 1",
            title: "Masterclass · Colour Theory & Demo",
            items: [
              "Hair analysis, porosity and underlying pigment",
              "Global colour theory and formulation",
              "Grey coverage and root touch-up",
              "Toners, highlights and fashion shades",
              "Live colour demonstration",
            ],
          },
          {
            no: "2",
            kicker: "Day 2",
            title: "Workshop · Practicals on the Floor",
            items: [
              "Hands-on colour application",
              "Highlights, toners and finishing",
              "Live practical work under trainer guidance",
              "Client consultation and aftercare",
              "Doubt session, assessment and certification",
            ],
          },
        ],
        extraBlocks: [],
        benefits: ["Expert Training", "100% Practical Knowledge", "Colour Confidence", "International Techniques", "Certificate of Completion"],
        whoCanJoin: ["Hair Stylists", "Salon Professionals", "Students", "Anyone passionate about colour"],
        footerLine: "LEARN THE COLOUR · PRACTISE THE CRAFT · OWN THE RESULT",
        kitIncluded: false,
        certificate: true,
        eligibility: "Hair stylists, salon professionals, students, and anyone passionate about colour",
        popular: false,
      },
      {
        id: "chemical-1m",
        slug: "4-weeks-advance-chemical",
        navLabel: "4 Weeks Advance Chemical",
        title: "4 Weeks Advance Chemical Course",
        level: "advanced",
        image: courseColour,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "4 weeks",
        schedule: "Mon–Sat, 10:00 AM – 5:00 PM",
        mode: "Offline",
        fee: "₹39,999/-",
        feeAmount: 39999,
        teaser: "In-depth hair chemistry, advanced colour, smoothing, keratin and botox — four weeks of live practical training.",
        syllabus: [
          "In-Depth Theory of Hair Structure & Chemistry",
          "Product Knowledge (Global Brands)",
          "Advanced Hair Analysis",
          "Chemical Treatments & Their Science",
          "Advanced Color Techniques",
          "Hair Smoothening & Straightening",
          "Rebonding & Soft Bonding",
          "Keratin & Botox Treatments",
          "Perming & Texturizing",
          "Hair Botox & Nanoplasty",
          "Scalp Treatments & Care",
          "Problem Solving & Client Consultation",
          "Live Demos & Practical Hands-on Training",
          "Certificate of Completion",
        ],
        pillars: [
          { no: "01", title: "Hair structure & chemistry" },
          { no: "02", title: "Global product knowledge" },
          { no: "03", title: "Advanced colour techniques" },
          { no: "04", title: "Keratin, botox & nanoplasty" },
          { no: "05", title: "Live demos & hands-on" },
          { no: "06", title: "Certificate of completion" },
        ],
        features: ["ADVANCE CHEMICAL", "COLOUR MASTERY", "100% PRACTICAL", "CERTIFICATE"],
        planTitle: "Week-Wise Training Plan",
        plan: [
          {
            no: "1",
            kicker: "Week 1",
            title: "Foundation · Hair Science",
            items: ["Hair Structure, Chemistry & Product Knowledge", "Hair Analysis", "pH Balance", "Porosity", "Patch Test", "Safety & Hygiene"],
          },
          {
            no: "2",
            kicker: "Week 2",
            title: "Hair Coloring Basics to Advanced",
            items: ["Global Color Theory", "Toners", "Highlights", "Root Touch-up", "Grey Coverage"],
          },
          {
            no: "3",
            kicker: "Week 3",
            title: "Smoothing & Straightening Techniques",
            items: ["Rebonding", "Soft Bonding", "Keratin", "Nanoplasty", "Botox"],
          },
          {
            no: "4",
            kicker: "Week 4",
            title: "Advanced Chemical Services",
            items: ["Perming", "Texturizing", "Hair Botox", "Scalp Treatments", "Client Handling & Final Assessment"],
          },
        ],
        extraBlocks: [],
        benefits: ["Expert Training", "100% Practical Knowledge", "Boost Your Career", "Start Your Own Salon", "International Techniques"],
        whoCanJoin: ["Hair Stylists", "Salon Professionals", "Students", "Anyone passionate about hair"],
        footerLine: "LEARN THE CHEMISTRY · MASTER THE TECHNIQUE · TRANSFORM YOUR CAREER",
        kitIncluded: false,
        certificate: true,
        eligibility: "Hair stylists, salon professionals, students, and anyone passionate about hair",
        popular: false,
      },
      {
        id: "chemical-cut-12w",
        slug: "12-weeks-chemical-haircut",
        navLabel: "12 Weeks Chemical & Hair Cut",
        title: "12 Weeks Basic to Advance Chemical & Hair Cut",
        level: "professional",
        image: courseMaster,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "12 weeks",
        schedule: "Mon–Sat, 10:00 AM – 5:00 PM",
        mode: "Offline",
        fee: "₹74,999/-",
        feeAmount: 74999,
        teaser: "Basic to advance chemical expertise plus hair-cut mastery — colour, smoothing, keratin and professional cutting across 12 weeks.",
        syllabus: [
          "Complete Knowledge of Hair Structure & Chemistry",
          "Hair Analysis, pH Balance, Porosity, Patch Test",
          "Global Color Theory & Formulation",
          "Chemical Treatments & Their Science",
          "Smoothing, Rebonding & Soft Bonding",
          "Keratin, Botox & Nanoplasty Treatments",
          "Hair Botox, Hair Spa & Advanced Care",
          "Advanced Coloring Techniques",
          "Professional Hair Cutting (Basic to Advance)",
          "Blow Dry, Styling & Finishing Techniques",
          "Client Consultation & Problem Solving",
          "Live Demos & 100% Practical Training",
          "Certificate of Completion",
        ],
        pillars: [
          { no: "01", title: "Basic to advance" },
          { no: "02", title: "Chemical expertise" },
          { no: "03", title: "Hair cut mastery" },
          { no: "04", title: "100% practical training" },
          { no: "05", title: "Client consultation" },
          { no: "06", title: "Certificate of completion" },
        ],
        features: ["BASIC TO ADVANCE", "CHEMICAL EXPERTISE", "HAIR CUT MASTERY", "100% PRACTICAL TRAINING"],
        planTitle: "12 Weeks Training Plan",
        extraBlocks: [
          {
            title: "Hair Cut Syllabus (Weeks 9–12)",
            items: [
              "Basic Cuts (U, V, One Length)",
              "Advanced Cuts (Layer, Feather, Textured)",
              "Men’s Cuts (Classic to Modern)",
              "Blow Dry Techniques",
              "Styling & Finishing",
              "Look Creation",
            ],
          },
        ],
        plan: [
          {
            no: "1",
            kicker: "Weeks 1–4",
            title: "Basic to Intermediate Chemical",
            items: [
              "Hair Structure & Chemistry",
              "Hair Analysis, pH Balance, Porosity",
              "Global Color Theory & Basics",
              "Hair Coloring Basics to Intermediate",
              "Chemical Treatments & Their Science",
              "Smoothing & Straightening Basics",
              "Perming Basics & Texturizing",
              "Hair Care, Scalp Care & Product Knowledge",
            ],
          },
          {
            no: "2",
            kicker: "Weeks 5–8",
            title: "Advance Chemical",
            items: [
              "Advanced Coloring Techniques & Tone Customization",
              "Advanced Smoothing, Rebonding & Soft Bonding",
              "Keratin, Botox, Nanoplasty Treatments",
              "Hair Botox & Advanced Spa Therapies",
              "Scalp Treatments & Advanced Services",
              "Chemical Service Customization",
              "Client Handling & Problem Solving",
            ],
          },
          {
            no: "3",
            kicker: "Weeks 9–12",
            title: "Hair Cut & Styling Mastery",
            items: [
              "Hair Cut Basics (Tools, Sections, Elevations)",
              "Basic Hair Cut (U, V, One Length, Step Cut)",
              "Advanced Hair Cut (Layer, Feather, Textured)",
              "Men’s Hair Cut (Classic to Modern Styles)",
              "Blow Dry Techniques (Curly, Volume, Smooth)",
              "Styling, Finishing & Look Creation",
              "Final Assessment, Live Practice & Certification",
            ],
          },
        ],
        benefits: ["Expert Training", "100% Practical Knowledge", "Boost Your Career", "Start Your Own Salon", "International Techniques", "Certificate of Completion"],
        whoCanJoin: ["Hair Stylists", "Salon Professionals", "Students", "Anyone passionate about hair"],
        footerLine: "LEARN THE CHEMISTRY · MASTER THE TECHNIQUE · TRANSFORM YOUR CAREER",
        kitIncluded: false,
        certificate: true,
        eligibility: "Hair stylists, salon professionals, students, and anyone passionate about hair",
        popular: true,
        ribbon: "Most Popular",
      },
      {
        id: "chemical-7d",
        slug: "7-days-advance-chemical",
        navLabel: "7 Days Advance Chemical",
        title: "7 Days Advance Chemical Course",
        level: "crash",
        image: courseTreatments,
        isStock: true, // REPLACE WITH CLIENT PHOTO
        duration: "7 days",
        schedule: "Mon–Sat, 10:00 AM – 5:00 PM",
        mode: "Offline",
        fee: "₹24,999/-",
        feeAmount: 24999,
        teaser: "A one-week chemical intensive — colour, smoothing, keratin, botox, perming and scalp care, with a practical assessment.",
        syllabus: [
          "Complete Chemical Knowledge of Hair",
          "Advanced Hair Analysis",
          "Global Color Theory & Formulation",
          "Chemical Treatments & Their Science",
          "Smoothening, Rebonding & Soft Bonding",
          "Keratin, Botox & Nanoplasty",
          "Hair Botox & Hair Spa Treatments",
          "Advanced Coloring Techniques",
          "Perming & Texturizing",
          "Scalp Treatments & Care",
          "Product Knowledge (Global Brands)",
          "Problem Solving & Client Consultation",
          "Live Demos & Practical Hands-on",
          "Certificate of Completion",
        ],
        pillars: [
          { no: "01", title: "Complete chemical knowledge" },
          { no: "02", title: "Global colour theory" },
          { no: "03", title: "Keratin, botox & nanoplasty" },
          { no: "04", title: "Perming & texturizing" },
          { no: "05", title: "Live demos & hands-on" },
          { no: "06", title: "Certificate of completion" },
        ],
        features: ["7-DAY INTENSIVE", "ADVANCE CHEMICAL", "100% PRACTICAL", "CERTIFICATE"],
        planTitle: "7 Days Training Plan",
        plan: [
          {
            no: "1",
            kicker: "Day 1",
            title: "Hair Structure & Chemistry",
            items: ["Hair Analysis", "pH Balance", "Porosity", "Patch Test", "Safety & Hygiene"],
          },
          {
            no: "2",
            kicker: "Day 2",
            title: "Hair Coloring Basics to Advanced",
            items: ["Global Color Theory", "Toners", "Highlights", "Root Touch-up", "Grey Coverage"],
          },
          {
            no: "3",
            kicker: "Day 3",
            title: "Chemical Treatments & Their Science",
            items: ["Smoothing", "Straightening", "Rebonding", "Soft Bonding"],
          },
          {
            no: "4",
            kicker: "Day 4",
            title: "Advanced Treatments",
            items: ["Keratin", "Botox", "Nanoplasty", "Hair Botox"],
          },
          {
            no: "5",
            kicker: "Day 5",
            title: "Perming & Texturizing",
            items: ["Perming Basics", "Types of Curls", "Rebonding for Volume Control"],
          },
          {
            no: "6",
            kicker: "Day 6",
            title: "Scalp Care & Advanced Services",
            items: ["Scalp Treatments", "Hair Spa", "Client Handling", "Aftercare"],
          },
          {
            no: "7",
            kicker: "Day 7",
            title: "Practical Day & Assessment",
            items: ["Live Practice", "Doubt Session", "Final Assessment & Certification"],
          },
        ],
        extraBlocks: [],
        benefits: ["Expert Training", "100% Practical Knowledge", "Boost Your Career", "Start Your Own Salon", "International Techniques", "Certificate of Completion"],
        whoCanJoin: ["Hair Stylists", "Salon Professionals", "Students", "Anyone passionate about hair"],
        footerLine: "LEARN THE CHEMISTRY · MASTER THE TECHNIQUE · TRANSFORM YOUR CAREER",
        kitIncluded: false,
        certificate: true,
        eligibility: "Hair stylists, salon professionals, students, and anyone passionate about hair",
        popular: false,
      },
    ],
    comparison: {
      columns: ["2-Day Colour", "7 Days Chemical", "4 Weeks Chemical", "12 Weeks Chemical & Cut"],
      rows: [
        { label: "Duration", values: ["2 days", "7 days", "4 weeks", "12 weeks"] },
        { label: "Fee", values: ["₹12,999/-", "₹24,999/-", "₹39,999/-", "₹74,999/-"] },
        { label: "Colour training", values: ["✓ Masterclass", "✓", "✓ Advance", "✓"] },
        { label: "Chemical training", values: ["—", "✓ Intensive", "✓ Advance", "✓ Basic to advance"] },
        { label: "Hair cutting", values: ["—", "—", "—", "✓ Basic to advance"] },
        { label: "Practical", values: ["✓ Workshop", "✓", "✓", "✓"] },
        { label: "Certificate", values: ["✓", "✓", "✓", "✓"] },
      ],
    },
  },

  journey: {
    label: "YOUR LEARNING JOURNEY",
    title: "Four stages. One career.",
    lead: "Every programme at Rahul Hair Academy follows the same path — choose a course, learn the chemistry, practise on the floor, leave with a government-affiliated certificate and 100% job assistance.",
    stages: [
      {
        no: "01",
        title: "Choose your programme",
        text: "Start where you are. A 2-day colour masterclass, a 7-day or 4-week chemical intensive, or the 12-week chemical and hair-cut path — all offline in Dwarka Sector 7.",
        points: [
          "2 Days Masterclass + Workshop — ₹12,999/-",
          "7 Days Advance Chemical — ₹24,999/-",
          "4 Weeks Advance Chemical — ₹39,999/-",
          "12 Weeks Chemical & Hair Cut — ₹74,999/-",
        ],
        image: workMensCut,
        isStock: false,
      },
      {
        no: "02",
        title: "Learn the science",
        text: "Hair structure, pH, porosity, global colour theory and chemical science — so every service you do later has a reason, not a guess.",
        points: [
          "Hair analysis, patch test, safety and hygiene",
          "Global colour theory, toners and grey coverage",
          "Smoothing, rebonding, keratin, botox and nanoplasty",
          "Product knowledge from professional ranges",
        ],
        image: classCaramelWaves,
        isStock: false,
      },
      {
        no: "03",
        title: "Practise on the floor",
        text: "Live demos, then your hands. Colour, chemical services and — on the 12-week path — cutting, blow-dry and finishing, under trainer guidance.",
        points: [
          "100% practical, live-demo training",
          "Hands-on colour, keratin and smoothing",
          "Hair cutting and styling on the 12-week programme",
          "Client consultation and problem solving",
        ],
        image: founderAtChair,
        isStock: false,
      },
      {
        no: "04",
        title: "Certified and placed",
        text: "Finish with a government-affiliated certificate and 100% job assistance — ready for a salon chair, or to open your own.",
        points: [
          "Certificate of completion on every programme",
          "Government affiliated certification",
          "100% job assistance",
          "Skills to join a salon or start your own",
        ],
        image: classHoneyWaves,
        isStock: false,
      },
    ],
  },

  gallery: {
    label: "STUDENT & SALON WORK",
    title: "Work From the Floor",
    // ONLY real client photos below — never stock imagery.
    // Add: { src, alt, category } — categories must match filters.
    items: [
      { src: colourAshBlonde, alt: "Ash-blonde colour and finish", category: "Colour", isStock: false },
      { src: workMensCut, alt: "Men's cut and finish at the academy", category: "Men", isStock: false },
      { src: colourMagenta, alt: "Vivid magenta colour", category: "Colour", isStock: false },
      { src: classCaramelWaves, alt: "Caramel waves from a live class", category: "Class", isStock: false },
      { src: colourDarkWaves, alt: "Long dark waves, salon finish", category: "Colour", isStock: false },
      { src: salonFloor, alt: "Colour service on the salon floor", category: "Colour", isStock: false },
      { src: colourBurgundy, alt: "Burgundy colour and waves", category: "Colour", isStock: false },
      { src: classHoneyWaves, alt: "Honey waves from academy training", category: "Class", isStock: false },
      { src: colourCopperSalon, alt: "Copper waves finished outside the salon", category: "Colour", isStock: false },
      { src: colourBurgundySalon, alt: "Burgundy colour on the salon floor", category: "Colour", isStock: false },
    ],
    filters: [
      { id: "all", label: "All" },
      { id: "Cuts", label: "Cuts" },
      { id: "Colour", label: "Colour" },
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
    tabs: ["Women", "Men", "Hair Treatments"],
    image: salonFloor,
    items: [
      {
        tab: "Women",
        services: [
          { name: "Haircut & Styling", price: "On enquiry" },
          { name: "Blow-Dry & Curls", price: "On enquiry" },
          { name: "Global Hair Colour", price: "On enquiry" },
          { name: "Highlights / Balayage", price: "On enquiry" },
          { name: "Head Massage", price: "On enquiry" },
          { name: "Party Hairstyling", price: "On enquiry" },
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
        photo: founderAtChair,
      },
    ],
  },

  certification: {
    label: "CERTIFICATION",
    title: "Certified. Confident. Career-Ready.",
    certificateImage: awardsRahul,
    certificateAlt: "Arini International awards — Mr. Rahul, Trainer Behind the Trainers 2026",
    previewNote: "Government-affiliated certificate. 100% job assistance on every programme.",
    affiliations: [
      "Academy certificate on successful completion",
      "Government affiliated certification",
      "100% job assistance on every programme",
    ],
    trustedStrip: [
      "Limited seats per batch",
      "Live-model training",
      "100% job assistance",
      "Government affiliated",
    ],
  },

  enrol: {
    label: "ADMISSIONS",
    title: "Start Your Hair Career Today",
    trust: [
      "Offline classes, Mon–Sat 10:00 AM – 5:00 PM",
      "Hands-on practice on live models",
      "100% job assistance and live practicals",
      "Government-affiliated certificate",
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
    grid: [
      colourAshBlonde,
      workMensCut,
      colourMagenta,
      classCaramelWaves,
      colourDarkWaves,
      colourBurgundy,
    ],
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
      { q: "Who can join the academy?", a: "Hair stylists, salon professionals, students, and anyone passionate about hair. Start with the 2-day colour masterclass, then 7-day or 4-week chemical intensives, or the 12-week chemical and hair-cut programme." },
      { q: "How long are the courses?", a: "2 days (colour masterclass + workshop), 7 days (advance chemical), 4 weeks (advance chemical) or 12 weeks (chemical and hair cut). Academy hours are Monday to Saturday, 10:00 AM – 5:00 PM." },
      { q: "What are the fees? Are instalments available?", a: "2 Days Masterclass + Workshop is ₹12,999/-, 7 Days Advance Chemical is ₹24,999/-, 4 Weeks Advance Chemical is ₹39,999/-, and 12 Weeks Chemical & Hair Cut is ₹74,999/-. Call or WhatsApp 09582557260 for batch dates and any instalment options." },
      { q: "Do I get a certificate?", a: "Yes — a government-affiliated certificate on successful completion, with 100% job assistance on every programme." },
      { q: "Is a kit included?", a: "Training is 100% practical with academy products on the floor. Ask us if you want a personal toolkit quote for the chair." },
      { q: "When do new batches start?", a: "Seats are limited per batch. Send an enrolment enquiry and we will share the next start date." },
      { q: "Are classes online or offline?", a: "Training is offline, Monday to Saturday, 10:00 AM – 5:00 PM." },
      { q: "Is placement help available?", a: "Yes — 100% job assistance on every programme, plus the skills to join a salon or start your own." },
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

export function getCourseById(id: string) {
  return site.courses.items.find((c) => c.id === id);
}

export function getCourseBySlug(slug: string) {
  return site.courses.items.find((c) => c.slug === slug);
}

export function coursePath(slug: string) {
  return `/courses/${slug}` as const;
}
