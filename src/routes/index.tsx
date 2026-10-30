import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/sections/HomePage";
import { site } from "@/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({
    title: site.seo.title,
    description: site.seo.description,
    path: "/",
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
