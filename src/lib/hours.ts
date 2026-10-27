import { site } from "@/content";

export type HoursStatus = {
  open: boolean;
  today: (typeof site.contact.weekHours)[number];
  weekday: string;
};

export function getHoursStatus(now = new Date()): HoursStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.contact.timezone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Monday";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const today =
    site.contact.weekHours.find((d) => d.day === weekday) ?? site.contact.weekHours[0]!;
  const minutes = hour * 60 + minute;
  const openHour = today.openHour;
  const closeHour = today.closeHour;
  const open =
    openHour !== null &&
    closeHour !== null &&
    minutes >= openHour * 60 &&
    minutes < closeHour * 60;

  return { open, today, weekday };
}
