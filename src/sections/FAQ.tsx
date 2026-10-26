import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceholderText } from "@/components/site/PlaceholderText";
import { SectionHeader } from "@/components/site/SectionHeader";
import { site } from "@/content";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function FAQ() {
  const [tab, setTab] = useState<"academy" | "salon">("academy");
  const items = tab === "academy" ? site.faq.academy : site.faq.salon;

  return (
    <section className="px-4 py-20 md:px-8 md:py-24 lg:px-12">
      <div className="w-full">
        <SectionHeader label={site.faq.label} title={site.faq.title} align="center" />
        <div className="mt-8 flex justify-center gap-2">
          {(["academy", "salon"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "min-h-11 rounded-full border px-5 text-xs font-semibold uppercase tracking-[0.16em]",
                tab === t
                  ? "border-[var(--gold)] bg-gold-grad text-[#0B0B0B]"
                  : "border-[var(--border)] text-muted-foreground",
              )}
            >
              {t === "academy" ? site.ui.faqAcademy : site.ui.faqSalon}
            </button>
          ))}
        </div>
        <Accordion type="single" collapsible className="mt-8">
          {items.map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-[var(--border)]">
              <AccordionTrigger className="font-display text-left text-lg hover:no-underline hover:text-[var(--gold)]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <PlaceholderText value={item.a} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
