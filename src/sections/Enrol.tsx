import { Check, Download, Phone } from "lucide-react";

import { InstagramIcon, WhatsAppIcon } from "@/components/brand/SocialIcons";
import { useEffect, useMemo, useState } from "react";

import { Magnetic } from "@/components/site/Magnetic";
import { PlaceholderText } from "@/components/site/PlaceholderText";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useSite } from "@/hooks/site-context";
import { isValidInPhone, openWhatsApp, postFormCopy } from "@/lib/forms";
import { site, telLink, waLink } from "@/content";
import { cn } from "@/lib/utils";

type Form = {
  courseId: string;
  mode: string;
  batch: string;
  name: string;
  phone: string;
  ageQual: string;
  city: string;
  experience: string;
  goal: string;
  message: string;
  heardFrom: string;
  company: string;
};

const empty: Form = {
  courseId: "",
  mode: "",
  batch: "",
  name: "",
  phone: "",
  ageQual: "",
  city: "",
  experience: "",
  goal: "",
  message: "",
  heardFrom: "",
  company: "",
};

export function Enrol() {
  const { prefilledCourseId, goTo } = useSite();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefilledCourseId) setForm((f) => ({ ...f, courseId: prefilledCourseId }));
  }, [prefilledCourseId]);

  const courseTitle = useMemo(
    () => site.courses.items.find((c) => c.id === form.courseId)?.title ?? form.courseId,
    [form.courseId],
  );

  const set = (key: keyof Form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const validate = (s: number) => {
    const next: Partial<Record<keyof Form, string>> = {};
    if (s === 1) {
      if (!form.courseId) next.courseId = "Please choose a course.";
      if (!form.mode) next.mode = "Please choose a mode.";
    }
    if (s === 2) {
      if (!form.name.trim()) next.name = "Name is required.";
      if (!isValidInPhone(form.phone)) next.phone = "Enter a 10-digit Indian mobile number.";
      if (!form.experience) next.experience = "Select your experience.";
    }
    if (s === 3) {
      if (!form.goal) next.goal = "Please choose a goal.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async () => {
    if (!validate(3)) return;
    if (form.company) {
      setDone(true);
      return;
    }
    const text = `New Course Enquiry – ${site.brand}: Name ${form.name}, Phone ${form.phone}, Course ${courseTitle}, Mode ${form.mode}, Batch ${form.batch || site.enrol.batches}, Experience ${form.experience}, Goal ${form.goal}, City ${form.city || "—"}, Message ${form.message || "—"}.`;
    await postFormCopy({
      type: "enrolment",
      ...form,
      course: courseTitle,
    });
    openWhatsApp(text);
    setDone(true);
  };

  return (
    <section id="enrol" className="section-y px-4 md:px-8 lg:px-12">
      <div className="grid w-full gap-6 lg:grid-cols-2">
        <Reveal>
          <SectionHeader label={site.enrol.label} title={site.enrol.title} />
          <ul className="mt-4 space-y-2">
            {site.enrol.trust.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
                {t}
              </li>
            ))}
          </ul>
          {site.brochureUrl ? (
            <a href={site.brochureUrl} className="btn-outline-gold mt-6" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              {site.ui.downloadBrochure}
            </a>
          ) : null}
        </Reveal>

        <Reveal className="card-lux relative p-5 sm:p-6 md:p-8">
          {done ? (
            <div className="relative py-10 text-center">
              <span className="sparkle left-1/3 top-4" />
              <span className="sparkle right-1/4 top-12" style={{ animationDelay: "0.4s" }} />
              <h3 className="font-display text-3xl gold-text">{site.enrol.successTitle}</h3>
              <p className="mt-3 text-muted-foreground">{site.enrol.successText}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={telLink()} className="btn-outline-gold">
                  <Phone className="h-4 w-4" /> {site.ui.call}
                </a>
                <a href={waLink(`Hi ${site.brand}, following up on my course enquiry.`)} className="btn-gold" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5" /> {site.ui.whatsapp}
                </a>
                <a href={site.instagram.url} className="btn-outline-gold" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="h-4 w-4" /> {site.ui.dmInstagram}
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
                <div className="h-full bg-[var(--gold-gradient)] transition-[width]" style={{ width: `${(step / 3) * 100}%` }} />
              </div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">Step {step} of 3</p>

              {step === 1 ? (
                <div className="space-y-4">
                  <label className="block text-sm">
                    Course
                    <select className="field-lux mt-2" value={form.courseId} onChange={(e) => set("courseId", e.target.value)}>
                      <option value="">Select a course</option>
                      {site.courses.items.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                    {errors.courseId ? <p className="mt-1 text-xs text-destructive">{errors.courseId}</p> : null}
                  </label>
                  <fieldset>
                    <legend className="text-sm">Preferred mode</legend>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {site.enrol.modes.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => set("mode", m)}
                          className={cn(
                            "min-h-11 rounded-full border px-4 text-xs uppercase tracking-widest",
                            form.mode === m ? "border-[var(--gold)] text-[var(--gold)]" : "border-[var(--border)]",
                          )}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                    {errors.mode ? <p className="mt-1 text-xs text-destructive">{errors.mode}</p> : null}
                  </fieldset>
                  <label className="block text-sm">
                    Preferred batch
                    <input className="field-lux mt-2" value={form.batch} onChange={(e) => set("batch", e.target.value)} placeholder={site.enrol.batches} />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Currently: <PlaceholderText value={site.enrol.batches} />
                    </p>
                  </label>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm sm:col-span-2">
                    Name
                    <input className={cn("field-lux mt-2", errors.name && "field-lux-error")} value={form.name} onChange={(e) => set("name", e.target.value)} />
                    {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
                  </label>
                  <label className="text-sm">
                    Phone
                    <input className={cn("field-lux mt-2", errors.phone && "field-lux-error")} value={form.phone} onChange={(e) => set("phone", e.target.value)} inputMode="numeric" />
                    {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
                  </label>
                  <label className="text-sm">
                    Age / qualification
                    <input className="field-lux mt-2" value={form.ageQual} onChange={(e) => set("ageQual", e.target.value)} />
                  </label>
                  <label className="text-sm">
                    City
                    <input className="field-lux mt-2" value={form.city} onChange={(e) => set("city", e.target.value)} />
                  </label>
                  <fieldset className="sm:col-span-2">
                    <legend className="text-sm">Experience</legend>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {site.enrol.experienceLevels.map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => set("experience", lvl)}
                          className={cn(
                            "min-h-11 rounded-full border px-4 text-xs",
                            form.experience === lvl ? "border-[var(--gold)] text-[var(--gold)]" : "border-[var(--border)]",
                          )}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                    {errors.experience ? <p className="mt-1 text-xs text-destructive">{errors.experience}</p> : null}
                  </fieldset>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="space-y-4">
                  <fieldset>
                    <legend className="text-sm">What do you want to achieve?</legend>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {site.enrol.goals.map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => set("goal", g)}
                          className={cn(
                            "min-h-11 rounded-full border px-4 text-xs",
                            form.goal === g ? "border-[var(--gold)] text-[var(--gold)]" : "border-[var(--border)]",
                          )}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                    {errors.goal ? <p className="mt-1 text-xs text-destructive">{errors.goal}</p> : null}
                  </fieldset>
                  <label className="block text-sm">
                    Message
                    <textarea className="field-lux mt-2 min-h-24" value={form.message} onChange={(e) => set("message", e.target.value)} />
                  </label>
                  <label className="block text-sm">
                    How did you hear about us?
                    <select className="field-lux mt-2" value={form.heardFrom} onChange={(e) => set("heardFrom", e.target.value)}>
                      <option value="">Select</option>
                      {site.enrol.heardFrom.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </label>
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    className="sr-only"
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    aria-hidden="true"
                  />
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {step > 1 ? (
                  <button type="button" className="btn-outline-gold flex-1" onClick={() => setStep((s) => s - 1)}>
                    {site.ui.back}
                  </button>
                ) : (
                  <button type="button" className="btn-outline-gold flex-1" onClick={() => goTo("courses")}>
                    {site.ui.exploreCourses}
                  </button>
                )}
                {step < 3 ? (
                  <Magnetic className="flex-1">
                    <button
                      type="button"
                      className="btn-gold w-full"
                      onClick={() => {
                        if (validate(step)) setStep((s) => s + 1);
                      }}
                    >
                      {site.ui.next}
                    </button>
                  </Magnetic>
                ) : (
                  <Magnetic className="flex-1">
                    <button type="button" className="btn-gold w-full" onClick={() => void submit()}>
                      {site.ui.submitEnquiry}
                    </button>
                  </Magnetic>
                )}
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
