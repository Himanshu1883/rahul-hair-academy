import { isPlaceholder, site, telE164 } from "@/content";
import { absoluteUrl, ogImageUrl, siteUrl } from "@/lib/seo";

function isoDuration(duration: string) {
  const match = duration.match(/(\d+)\s*(day|days|week|weeks)/i);
  if (!match?.[1] || !match[2]) return undefined;
  return `P${match[1]}${match[2].toLowerCase().startsWith("week") ? "W" : "D"}`;
}

export function buildJsonLd() {
  const origin = siteUrl();
  const academyId = `${origin}/#academy`;
  const salonId = `${origin}/#salon`;
  const websiteId = `${origin}/#website`;
  const phone = telE164();
  const image = ogImageUrl();

  const address = isPlaceholder(site.contact.address)
    ? undefined
    : {
        "@type": "PostalAddress",
        streetAddress: site.contact.address,
        addressLocality: "Dwarka",
        addressRegion: "Delhi",
        postalCode: "110077",
        addressCountry: "IN",
      };

  const openingHoursSpecification = site.contact.weekHours
    .filter((day) => day.openHour != null && day.closeHour != null)
    .map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day.day,
      opens: "10:00",
      closes: "17:00",
    }));

  const courses = site.courses.items.map((course) => ({
    "@type": "Course",
    "@id": `${origin}/courses/${course.slug}#course`,
    name: course.title,
    description: course.seoDescription,
    url: absoluteUrl(`/courses/${course.slug}`),
    inLanguage: "en-IN",
    provider: { "@id": academyId },
    educationalLevel: course.level,
    ...(isoDuration(course.duration) ? { timeToComplete: isoDuration(course.duration) } : {}),
    ...("feeAmount" in course
      ? {
          offers: {
            "@type": "Offer",
            price: course.feeAmount,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/courses/${course.slug}`),
          },
        }
      : {}),
  }));

  const faqs = [...site.faq.academy, ...site.faq.salon].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  }));

  const graph = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${origin}/`,
      name: site.brand,
      inLanguage: "en-IN",
      publisher: { "@id": academyId },
    },
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": academyId,
      name: site.brand,
      alternateName: site.shortBrand,
      url: `${origin}/`,
      image,
      description: site.seo.description,
      telephone: phone || undefined,
      priceRange: "₹₹",
      address,
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.contact.lat,
        longitude: site.contact.lng,
      },
      hasMap: site.contact.mapsLink,
      openingHoursSpecification,
      areaServed: [
        { "@type": "City", name: "Dwarka" },
        { "@type": "AdministrativeArea", name: "Delhi" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
      ],
      sameAs: site.instagram.accounts.map((account) => account.url),
      hasCourse: courses.map((course) => ({ "@id": course["@id"] })),
    },
    {
      "@type": "HairSalon",
      "@id": salonId,
      name: `${site.brand} Salon`,
      url: `${origin}/#salon`,
      image,
      description: site.hero.subline,
      telephone: phone || undefined,
      address,
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.contact.lat,
        longitude: site.contact.lng,
      },
      hasMap: site.contact.mapsLink,
      openingHoursSpecification,
      parentOrganization: { "@id": academyId },
      sameAs: site.instagram.accounts.map((account) => account.url),
    },
    ...courses,
    {
      "@type": "FAQPage",
      "@id": `${origin}/#faq`,
      mainEntity: faqs,
    },
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
