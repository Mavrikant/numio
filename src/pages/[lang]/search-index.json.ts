/**
 * Per-locale search index — /numio/{lang}/search-index.json
 *
 * Flat list of every calculator and tool with localized titles,
 * fetched lazily by the header search dialog.
 */
import type { APIRoute } from "astro";
import { LOCALES, type Locale } from "@/config/site";
import { buildPath, getCategoryLabel, getLocalizedSlug } from "@/lib/i18n";
import { getAllCalculators } from "@/lib/registry";
import { getAllTools } from "@/lib/tools-registry";

export function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) => {
  const locale = params.lang as Locale;

  const calculators = getAllCalculators().map((calc) => {
    const bundle = calc.i18n[locale] ?? calc.i18n.en;
    return {
      title: bundle.title,
      short: bundle.short,
      category: getCategoryLabel(locale, calc.category),
      keywords: [...bundle.keywords, ...(calc.tags ?? [])].join(" "),
      href: buildPath(locale, calc.category, getLocalizedSlug(calc.slug, locale)),
    };
  });

  const tools = getAllTools().map((tool) => {
    const bundle = tool.i18n[locale] ?? tool.i18n.en;
    return {
      title: bundle.title,
      short: bundle.short,
      category: getCategoryLabel(locale, tool.category),
      keywords: [...bundle.keywords, ...tool.tags].join(" "),
      href: buildPath(locale, "tools", tool.slug),
    };
  });

  return new Response(JSON.stringify([...calculators, ...tools]), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
