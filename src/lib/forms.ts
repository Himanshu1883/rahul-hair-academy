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

export function isValidEmail(raw: string) {
  if (!raw.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
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
  if (isPlaceholder(site.contact.mapsLink) && isPlaceholder(site.contact.address)) return "";
  if (!isPlaceholder(site.contact.mapsLink) && site.contact.mapsLink.includes("google.com")) {
    if (site.contact.mapsLink.includes("output=embed")) return site.contact.mapsLink;
    return `https://maps.google.com/maps?q=${encodeURIComponent(site.contact.address)}&output=embed`;
  }
  const q = isPlaceholder(site.contact.address) ? site.brand : site.contact.address;
  return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
}
