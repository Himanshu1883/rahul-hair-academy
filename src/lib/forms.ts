import { isPlaceholder, site, waLink } from "@/content";

export function normalizeInPhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

export function isValidInPhone(raw: string) {
  return /^[6-9]\d{9}$/.test(normalizeInPhone(raw));
}

export function openWhatsApp(text: string) {
  const url = waLink(text);
  window.open(url, "_blank", "noopener,noreferrer");
}

export async function postFormCopy(payload: Record<string, string>) {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  if (!endpoint) return;
  try {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Email copy is optional — WhatsApp is the primary delivery.
  }
}

export function mapsEmbedSrc() {
  const { lat, lng, mapsLink, address } = site.contact;
  if (typeof lat === "number" && typeof lng === "number") {
    return `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`;
  }
  if (isPlaceholder(mapsLink) && isPlaceholder(address)) return "";
  if (!isPlaceholder(mapsLink) && mapsLink.includes("google.com")) {
    if (mapsLink.includes("output=embed")) return mapsLink;
    const q = isPlaceholder(address) ? site.brand : `${address}, ${site.contact.city}`;
    return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  }
  const q = isPlaceholder(address) ? site.brand : `${address}, ${site.contact.city}`;
  return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
}
