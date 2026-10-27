import { CalendarPlus, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useSite } from "@/hooks/site-context";
import { downloadIcs, googleCalendarUrl } from "@/lib/calendar";
import { isValidInPhone, openWhatsApp, postFormCopy } from "@/lib/forms";
import { site, telLink } from "@/content";

const allServices = [
  ...new Set(site.services.items.flatMap((g) => g.services.map((s) => s.name))),
];

export function Booking() {
  const { prefilledService } = useSite();
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [people, setPeople] = useState("1");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [hp, setHp] = useState("");
  type Err = { service?: string; date?: string; slot?: string; name?: string; phone?: string };
  const [errors, setErrors] = useState<Err>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefilledService) setService(prefilledService);
  }, [prefilledService]);

  const submit = async () => {
    const next: Err = {};
    if (!service) next.service = "Choose a service.";
    if (!date || date < today) next.date = "Pick a future date.";
    if (!slot) next.slot = "Pick a time slot.";
    if (!name.trim()) next.name = "Name is required.";
    if (!isValidInPhone(phone)) next.phone = "Enter a 10-digit Indian mobile number.";
    setErrors(next);
    if (Object.keys(next).length) return;
    if (hp) {
      setDone(true);
      return;
    }
    const text = `New Salon Appointment – ${site.brand}: Name ${name}, Phone ${phone}, Service ${service}, Date ${date}, Time ${slot}, People ${people}, Notes ${notes || "—"}.`;
    await postFormCopy({ type: "booking", name, phone, service, date, slot, people, notes });
    openWhatsApp(text);
    setDone(true);
  };

  return (
    <section id="booking" className="section-y px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.booking.label} title={site.booking.title} lead={site.booking.note} align="center" />
        <Reveal className="card-lux mt-5 p-4 sm:p-6">
          {done ? (
            <div className="py-8 text-center">
              <h3 className="font-display text-3xl gold-text">{site.booking.successTitle}</h3>
              <p className="mt-3 text-muted-foreground">{site.booking.successText}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={googleCalendarUrl(service, date, slot)} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  <CalendarPlus className="h-4 w-4" />
                  {site.ui.googleCalendar}
                </a>
                <button type="button" className="btn-outline-gold" onClick={() => downloadIcs(service, date, slot, name)}>
                  {site.ui.downloadIcs}
                </button>
                <a href={telLink()} className="btn-outline-gold">
                  <Phone className="h-4 w-4" /> {site.ui.call}
                </a>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm sm:col-span-2">
                Service
                <select className="field-lux mt-2" value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="">Select</option>
                  {allServices.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service ? <p className="mt-1 text-xs text-destructive">{errors.service}</p> : null}
              </label>
              <label className="text-sm">
                Date
                <input type="date" min={today} className="field-lux mt-2" value={date} onChange={(e) => setDate(e.target.value)} />
                {errors.date ? <p className="mt-1 text-xs text-destructive">{errors.date}</p> : null}
              </label>
              <label className="text-sm">
                Time
                <select className="field-lux mt-2" value={slot} onChange={(e) => setSlot(e.target.value)}>
                  <option value="">Select</option>
                  {site.booking.timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.slot ? <p className="mt-1 text-xs text-destructive">{errors.slot}</p> : null}
              </label>
              <label className="text-sm">
                Number of people
                <input type="number" min={1} max={8} className="field-lux mt-2" value={people} onChange={(e) => setPeople(e.target.value)} />
              </label>
              <label className="text-sm">
                Name
                <input className="field-lux mt-2" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
              </label>
              <label className="text-sm sm:col-span-2">
                Phone
                <input className="field-lux mt-2" value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="numeric" />
                {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
              </label>
              <label className="text-sm sm:col-span-2">
                Notes
                <textarea className="field-lux mt-2 min-h-24" value={notes} onChange={(e) => setNotes(e.target.value)} />
              </label>
              <input className="hidden" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} aria-hidden="true" />
              <button type="button" className="btn-gold w-full sm:col-span-2" onClick={() => void submit()}>
                {site.ui.requestAppointment}
              </button>
              <p className="text-center text-xs text-muted-foreground sm:col-span-2">{site.booking.note}</p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
