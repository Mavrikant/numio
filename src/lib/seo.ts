import {
  LOCALES,
  DEFAULT_LOCALE,
  SITE_URL,
  SITE_NAME,
  LOCALE_HTML_LANG,
  type Locale,
} from "../config/site";
import { buildAbsoluteUrl, getLocalizedSlug } from "./i18n";
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

  const faq = bundle.faq && bundle.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: bundle.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  return {
    "@context": "https://schema.org",
    "@graph": [softwareApp, breadcrumb, ...(faq ? [faq] : [])],
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

export function buildCalculatorSeoMeta(
  calc: AnyCalculatorDefinition,
  locale: Locale,
): PageSeoMeta {
  const bundle = calc.i18n[locale] ?? calc.i18n[DEFAULT_LOCALE];
  const localizedSlug = getLocalizedSlug(calc.slug, locale);
  return {
    title: `${bundle.title} — ${SITE_NAME}`,
    description: bundle.description,
    canonical: buildAbsoluteUrl(locale, calc.category, localizedSlug),
    locale,
    hreflangs: buildHreflang(calc.category, calc.slug),
    jsonLd: buildCalculatorJsonLd(calc, locale),
    keywords: bundle.keywords,
  };
}

export function buildSiteUrl(path = ""): string {
  return `${SITE_URL}${path}`;
}
