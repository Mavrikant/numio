import {
  LOCALES,
  DEFAULT_LOCALE,
  SITE_URL,
  BASE_PATH,
  SITE_NAME,
  LOCALE_HTML_LANG,
  type Locale,
} from "../config/site";
import { buildAbsoluteUrl, getLocalizedSlug, t } from "./i18n";
import type {
  AnyCalculatorDefinition,
  CalculatorCategory,
} from "../types/calculator";

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

export function buildHreflang(
  category: CalculatorCategory,
  canonicalSlug: string,
): HreflangEntry[] {
  const entries: HreflangEntry[] = [];

  for (const locale of LOCALES) {
    const localizedSlug = getLocalizedSlug(canonicalSlug, locale);
    entries.push({
      hreflang: LOCALE_HTML_LANG[locale],
      href: buildAbsoluteUrl(locale, category, localizedSlug),
    });
  }

  entries.push({
    hreflang: "x-default",
    href: buildAbsoluteUrl(DEFAULT_LOCALE, category, getLocalizedSlug(canonicalSlug, DEFAULT_LOCALE)),
  });

  return entries;
}

export function buildCalculatorJsonLd(
  calc: AnyCalculatorDefinition,
  locale: Locale,
): Record<string, unknown> {
  const bundle = calc.i18n[locale] ?? calc.i18n[DEFAULT_LOCALE];
  const localizedSlug = getLocalizedSlug(calc.slug, locale);
  const url = buildAbsoluteUrl(locale, calc.category, localizedSlug);

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: bundle.title,
    description: bundle.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    url,
    inLanguage: LOCALE_HTML_LANG[locale],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: undefined,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: buildAbsoluteUrl(locale),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: calc.category,
        item: buildAbsoluteUrl(locale, calc.category),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: bundle.title,
        item: url,
      },
    ],
  };

  // Note: FAQPage is emitted as a separate <script> tag via buildFaqJsonLd()
  // to keep schema objects distinct and improve Google Rich Results parsing.
  return {
    "@context": "https://schema.org",
    "@graph": [softwareApp, breadcrumb],
  };
}

export interface PageSeoMeta {
  title: string;
  description: string;
  canonical: string;
  locale: Locale;
  hreflangs: HreflangEntry[];
  jsonLd?: Record<string, unknown>;
  ogImage?: string;
  keywords?: readonly string[];
}

/**
 * Build the meta description for a calculator page.
 * Uses bundle.short as the primary sentence, appends a locale-specific
 * "Free, instant, no signup." suffix (from seo.metaSuffix UI key),
 * and caps the result at 160 characters for Google snippet display.
 */
function buildMetaDescription(
  short: string,
  locale: Locale,
): string {
  const suffix = t(locale, "seo.metaSuffix");
  // short already ends with punctuation in the bundles; add space + suffix
  const shortTrimmed = short.trim().replace(/\.?\s*$/, ".");
  const full = `${shortTrimmed} ${suffix}`;
  return full.length <= 160 ? full : full.slice(0, 157) + "…";
}

/**
 * Build the absolute OG image URL for a calculator.
 * Points to /numio/og/{category}/{slug}.svg
 */
function buildOgImageUrl(category: string, slug: string): string {
  const base = BASE_PATH.replace(/\/+$/, "");
  return `${SITE_URL}${base}/og/${category}/${slug}.svg`;
}

export function buildCalculatorSeoMeta(
  calc: AnyCalculatorDefinition,
  locale: Locale,
): PageSeoMeta {
  const bundle = calc.i18n[locale] ?? calc.i18n[DEFAULT_LOCALE];
  const localizedSlug = getLocalizedSlug(calc.slug, locale);
  return {
    title: `${bundle.title} — ${SITE_NAME}`,
    description: buildMetaDescription(bundle.short, locale),
    canonical: buildAbsoluteUrl(locale, calc.category, localizedSlug),
    locale,
    hreflangs: buildHreflang(calc.category, calc.slug),
    jsonLd: buildCalculatorJsonLd(calc, locale),
    ogImage: buildOgImageUrl(calc.category, calc.slug),
    keywords: bundle.keywords,
  };
}

export function buildSiteUrl(path = ""): string {
  return `${SITE_URL}${path}`;
}

/**
 * Categories that represent procedural / step-based calculations.
 * HowTo schema only makes sense for these — skip non-procedural types.
 */
const HOWTO_CATEGORIES = new Set(["math", "conversion", "engineering"]);

/**
 * Whether a calculator should receive a HowTo JSON-LD block.
 * Emit for: math, conversion, engineering categories,
 *           OR any calc that declares a formulaLatex.
 * Skip for health/finance where the "how to use" steps are obvious
 * and Google has flagged HowTo misuse on pure health lookups.
 */
export function shouldEmitHowTo(calc: AnyCalculatorDefinition): boolean {
  return HOWTO_CATEGORIES.has(calc.category) || Boolean(calc.meta.formulaLatex);
}

/**
 * buildHowToJsonLd — returns a HowTo schema.org object for procedural calcs.
 * Returns null when the calc is not eligible (non-procedural, no formula).
 */
export function buildHowToJsonLd(
  calc: AnyCalculatorDefinition,
  locale: Locale,
): Record<string, unknown> | null {
  if (!shouldEmitHowTo(calc)) return null;

  const bundle = calc.i18n[locale] ?? calc.i18n[DEFAULT_LOCALE];

  // Build steps from calc.inputs[] using the localized input labels.
  const inputSteps = calc.inputs.map((input, idx) => {
    const inputBundle = bundle.inputs[input.id];
    const label = inputBundle?.label ?? input.id;
    return {
      "@type": "HowToStep",
      position: idx + 1,
      name: label,
      text: inputBundle?.help ?? `Enter your ${label.toLowerCase()}.`,
    };
  });

  // Add a final "view result" step.
  const steps = [
    ...inputSteps,
    {
      "@type": "HowToStep",
      position: inputSteps.length + 1,
      name: "View your result",
      text: "The calculator displays your result instantly as you type.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: bundle.title,
    description: bundle.short,
    totalTime: "PT1M",
    tool: [
      {
        "@type": "HowToTool",
        name: bundle.title,
      },
    ],
    step: steps,
  };
}

/**
 * buildFaqJsonLd — returns a FAQPage schema.org object when bundle.faq exists.
 * Returns null when the calc has no FAQ entries.
 */
export function buildFaqJsonLd(
  calc: AnyCalculatorDefinition,
  locale: Locale,
): Record<string, unknown> | null {
  const bundle = calc.i18n[locale] ?? calc.i18n[DEFAULT_LOCALE];

  if (!bundle.faq || bundle.faq.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bundle.faq.map((item) => ({
      "@type": "Question",
      name: item.q ?? item.question ?? "",
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a ?? item.answer ?? "",
      },
    })),
  };
}
