import { HeroSection, ListSection } from "@features/landing";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: RouteComponent });

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ListSection />
    </main>
  );
}
