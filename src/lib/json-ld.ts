import { isPlaceholder, site } from "@/content";

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
    ...(isPlaceholder(course.fee)
      ? {}
      : {
          offers: {
            "@type": "Offer",
            price: course.fee,
            priceCurrency: "INR",
          },
        }),
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
      ...(isPlaceholder(site.contact.phone) ? {} : { telephone: site.contact.phone }),
      ...(address ? { address } : {}),
      ...(isPlaceholder(site.contact.hours)
        ? {}
        : { openingHours: site.contact.hours }),
    },
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
