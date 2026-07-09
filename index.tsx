import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio Maker — Build a beautiful portfolio in minutes" },
      {
        name: "description",
        content:
          "Create, preview and download a beautiful personal portfolio. Choose templates, add skills, projects, certificates and education.",
      },
      { property: "og:title", content: "Portfolio Maker" },
      {
        property: "og:description",
        content: "Build. Preview. Download. Beautiful portfolios in minutes.",
      },
    ],
  }),
  component: Index,
});
// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  useEffect(() => {
    window.location.replace("/portfolio-maker.html");
  }, []);
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p>Loading Portfolio Maker…</p>
    </div>
  );
}