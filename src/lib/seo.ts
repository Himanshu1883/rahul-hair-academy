import { site } from "@/content";

export function siteUrl() {
  const fromEnv = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  return fromEnv || site.seo.siteUrl.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const base = siteUrl();
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ogImageUrl() {
  return absoluteUrl(site.seo.ogImage);
}

export function sitemapPaths() {
  return ["/", ...site.courses.items.map((course) => `/courses/${course.slug}`)];
}

export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  const image = ogImageUrl();
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: site.seo.keywords },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow" },
      { name: "author", content: site.brand },
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Dwarka, New Delhi" },
      { name: "geo.position", content: `${site.contact.lat};${site.contact.lng}` },
      { name: "ICBM", content: `${site.contact.lat}, ${site.contact.lng}` },
      { property: "og:site_name", content: site.brand },
      { property: "og:locale", content: site.seo.locale },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `${site.brand} — hair academy in Dwarka Sector 7` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
