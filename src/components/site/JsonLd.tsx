import { buildJsonLd } from "@/lib/json-ld";

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
    />
  );
}
