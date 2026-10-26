import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/sections/HomePage";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <HomePage />;
}
