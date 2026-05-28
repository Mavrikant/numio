/**
 * Dynamic OG image route — /numio/og/{category}/{slug}.svg
 *
 * Returns a 1200×630 SVG suitable for use as an Open Graph image.
 * Uses the English i18n bundle for text content.
 */

import type { APIRoute, GetStaticPaths } from "astro";
import { getAllCalculators } from "@/lib/registry";
import { buildOgSvg } from "@/lib/og-svg";
import type { Locale } from "@/config/site";

const EN: Locale = "en";

export const getStaticPaths: GetStaticPaths = () => {
  const allCalcs = getAllCalculators();
  return allCalcs.map((calc) => ({
    params: {
      category: calc.category,
      slug: calc.slug,
    },
  }));
};

export const GET: APIRoute = ({ params }) => {
  const { category, slug } = params as { category: string; slug: string };

  const allCalcs = getAllCalculators();
  const calc = allCalcs.find(
    (c) => c.slug === slug && c.category === category,
  );

  if (!calc) {
    return new Response("Not found", { status: 404 });
  }

  const bundle = calc.i18n[EN];
  const svg = buildOgSvg(bundle.title, bundle.short, calc.category, calc.icon);

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
};
