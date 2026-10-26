import { site } from "@/content";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function parseSlot(date: string, slot: string) {
  const match = slot.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  const [y, m, d] = date.split("-").map(Number);
  let hours = match ? Number(match[1]) : 10;
  const minutes = match ? Number(match[2]) : 0;
  const mer = match?.[3]?.toUpperCase();
  if (mer === "PM" && hours < 12) hours += 12;
  if (mer === "AM" && hours === 12) hours = 0;
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1, hours, minutes, 0);
}

function stamp(date: Date) {
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
}

export function googleCalendarUrl(service: string, date: string, slot: string) {
  const start = parseSlot(date, slot);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${site.brand} — ${service}`,
    dates: `${stamp(start)}/${stamp(end)}`,
    details: `${site.booking.note}\n${site.instagram.url}`,
    location: site.contact.address,
    ctz: "Asia/Kolkata",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcs(service: string, date: string, slot: string, name: string) {
  const start = parseSlot(date, slot);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Rahul Hair Academy//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@rahulhairacademy`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${site.brand} — ${service}`,
    `DESCRIPTION:Appointment for ${name}. ${site.booking.note}`,
    `LOCATION:${site.contact.address}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "rahul-hair-academy-appointment.ics";
  a.click();
  URL.revokeObjectURL(url);
}
