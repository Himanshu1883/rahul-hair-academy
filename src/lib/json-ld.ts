import { isPlaceholder, site, telE164 } from "@/content";

export function buildJsonLd() {
  const courses = site.courses.items.map((course) => ({
    "@type": "Course",
    name: course.title,
    description: course.teaser,
    provider: {
      "@type": "EducationalOrganization",
      name: site.brand,
      sameAs: site.instagram.url,
    },
    educationalLevel: course.level,
    ...(/^\d/.test(course.fee)
      ? {
          offers: {
            "@type": "Offer",
            price: course.fee,
            priceCurrency: "INR",
          },
        }
      : {}),
  }));

  const address = isPlaceholder(site.contact.address)
    ? undefined
    : {
        "@type": "PostalAddress",
        streetAddress: site.contact.address,
        addressLocality: isPlaceholder(site.contact.city) ? undefined : site.contact.city,
        addressCountry: "IN",
      };

  const graph = [
    {
      "@type": "EducationalOrganization",
      name: site.brand,
      description: site.seo.description,
      sameAs: [site.instagram.url],
      hasCourse: courses,
    },
    {
      "@type": "HairSalon",
      name: `${site.brand} Salon`,
      description: site.hero.subline,
      sameAs: [site.instagram.url],
      ...(telE164() ? { telephone: telE164() } : {}),
      ...(address ? { address } : {}),
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.contact.lat,
        longitude: site.contact.lng,
      },
      hasMap: site.contact.mapsLink,
      openingHours: site.contact.openingHoursSchema,
    },
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
