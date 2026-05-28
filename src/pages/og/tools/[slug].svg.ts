/**
 * Dynamic OG image route for tool pages — /numio/og/tools/{slug}.svg
 *
 * Returns a 1200×630 SVG built from the English i18n bundle.
 * Mirrors src/pages/og/[category]/[slug].svg.ts for calculators.
 */

import type { APIRoute, GetStaticPaths } from "astro";
import { getAllTools } from "@/lib/tools-registry";
import { buildOgSvg } from "@/lib/og-svg";
import type { Locale } from "@/config/site";

const EN: Locale = "en";

export const getStaticPaths: GetStaticPaths = () => {
  return getAllTools().map((tool) => ({ params: { slug: tool.slug } }));
};

export const GET: APIRoute = ({ params }) => {
  const { slug } = params as { slug: string };
  const tool = getAllTools().find((t) => t.slug === slug);

  if (!tool) {
    return new Response("Not found", { status: 404 });
  }

  const bundle = tool.i18n[EN];
  const svg = buildOgSvg(bundle.title, bundle.short, tool.category, tool.icon);

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
};
