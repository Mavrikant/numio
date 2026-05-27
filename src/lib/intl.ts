/**
 * intl.ts — thin, cached wrappers around Intl APIs.
 *
 * All formatters are locale-aware. Pass a `Locale` (from @/config/site) and
 * the correct BCP-47 tag, currency symbol, decimal/thousands separator, etc.
 * are all handled by the platform's Intl engine.
 */

import type { Locale } from "@/config/site";
import { LOCALE_CURRENCY, type CurrencyCode } from "@/config/site";
import type { UnitKey } from "@/types/calculator";

// ---------------------------------------------------------------------------
// BCP-47 tag lookup
// ---------------------------------------------------------------------------

const LOCALE_BCP47: Record<Locale, string> = {
  en: "en-US",
  tr: "tr-TR",
  de: "de-DE",
  fr: "fr-FR",
  es: "es-ES",
  it: "it-IT",
  ar: "ar-EG",
  ru: "ru-RU",
  zh: "zh-CN",
  ja: "ja-JP",
  ko: "ko-KR",
  hi: "hi-IN",
};

export function bcp47(locale: Locale): string {
  return LOCALE_BCP47[locale];
}

// ---------------------------------------------------------------------------
// Formatter cache
// ---------------------------------------------------------------------------

const numberCache = new Map<string, Intl.NumberFormat>();
const dateCache = new Map<string, Intl.DateTimeFormat>();

function getNumberFormatter(
  locale: Locale,
  options: Intl.NumberFormatOptions,
): Intl.NumberFormat {
  const key = `${locale}:${JSON.stringify(options)}`;
  let fmt = numberCache.get(key);
  if (!fmt) {
    fmt = new Intl.NumberFormat(bcp47(locale), options);
    numberCache.set(key, fmt);
  }
  return fmt;
}

function getDateFormatter(
  locale: Locale,
  options: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormat {
  const key = `${locale}:${JSON.stringify(options)}`;
  let fmt = dateCache.get(key);
  if (!fmt) {
    fmt = new Intl.DateTimeFormat(bcp47(locale), options);
    dateCache.set(key, fmt);
  }
  return fmt;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Format a plain number with locale-correct thousands separator and decimals.
 * Defaults to at most 4 fractional digits (trailing zeros stripped).
 */
export function formatNumber(
  value: number,
  locale: Locale,
  opts?: Intl.NumberFormatOptions,
): string {
  return getNumberFormatter(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
    ...opts,
  }).format(value);
}

/**
 * Format a monetary value using the locale's default currency (from
 * LOCALE_CURRENCY) or an explicit override.
 *
 * JPY / KRW have no minor unit — Intl knows this automatically, so we never
 * need to special-case zero decimals.
 */
export function formatCurrency(
  value: number,
  locale: Locale,
  currency?: CurrencyCode,
): string {
  const code = currency ?? LOCALE_CURRENCY[locale];
  return getNumberFormatter(locale, {
    style: "currency",
    currency: code,
  }).format(value);
}

/**
 * Format a ratio as a percentage string.
 * Pass the raw percentage value (e.g. 42.5 for 42.5%) — this function divides
 * by 100 before handing off to Intl.
 */
export function formatPercent(
  value: number,
  locale: Locale,
  decimals = 1,
): string {
  return getNumberFormatter(locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(value / 100);
}

/**
 * Format a Date (or ISO string or unix timestamp in ms) in a locale-aware way.
 */
export function formatDate(
  date: Date | string | number,
  locale: Locale,
  opts?: Intl.DateTimeFormatOptions,
): string {
  const d = date instanceof Date ? date : new Date(date);
  return getDateFormatter(locale, opts ?? {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

/**
 * Format a large number in compact notation (e.g. "1.2M", "3K").
 */
export function formatCompact(
  value: number,
  locale: Locale,
): string {
  return getNumberFormatter(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

// ---------------------------------------------------------------------------
// Unit formatting
// ---------------------------------------------------------------------------

/**
 * Intl-supported unit identifiers. Not every UnitKey maps to an Intl unit —
 * complex ones (e.g. km/h, kPa) fall back to "{value} {symbol}".
 */
const INTL_UNIT_MAP: Partial<Record<UnitKey, string>> = {
  kg: "kilogram",
  g: "gram",
  lb: "pound",
  oz: "ounce",
  m: "meter",
  cm: "centimeter",
  mm: "millimeter",
  ft: "foot",
  in: "inch",
  km: "kilometer",
  mi: "mile",
  l: "liter",
  ml: "milliliter",
  gal: "gallon",
  year: "year",
  month: "month",
  day: "day",
  hour: "hour",
  minute: "minute",
  second: "second",
  watt: "watt",
  kw: "kilowatt",
  joule: "joule",
  kj: "kilojoule",
  volt: "volt",
  amp: "ampere",
  ohm: "ohm",
  pa: "pascal",
  kpa: "kilopascal",
  mph: "mile-per-hour",
  ms: "meter-per-second",
  m2: "square-meter",
  ft2: "square-foot",
  km2: "square-kilometer",
  ha: "hectare",
  acre: "acre",
};

/** Fallback symbols for units not supported by Intl */
const UNIT_SYMBOL_FALLBACK: Partial<Record<UnitKey, string>> = {
  kmh: "km/h",
  knots: "kn",
  fts: "ft/s",
  kpa: "kPa",
  bar: "bar",
  psi: "psi",
  atm: "atm",
  mmhg: "mmHg",
  inhg: "inHg",
  kwh: "kWh",
  kcal: "kcal",
  cal: "cal",
  btu: "BTU",
  ftlbf: "ft·lbf",
  ev: "eV",
  hp: "hp",
  m3: "m³",
  ft3: "ft³",
  cup: "cup",
  tbsp: "tbsp",
  tsp: "tsp",
  galuk: "gal (UK)",
  floz: "fl oz",
  cm2: "cm²",
  yd2: "yd²",
  celsius: "°C",
  fahrenheit: "°F",
  kelvin: "K",
  percent: "%",
  ratio: "",
  usd: "USD",
  eur: "EUR",
  try: "TRY",
  gbp: "GBP",
  jpy: "JPY",
};

/**
 * Format a value with its physical unit in a locale-aware way.
 * Uses Intl.NumberFormat `style: "unit"` for supported units, falls back to
 * "{formatted number} {symbol}" for unsupported ones.
 */
export function formatUnit(
  value: number,
  locale: Locale,
  unit: UnitKey,
  decimals = 2,
): string {
  const intlUnit = INTL_UNIT_MAP[unit];
  if (intlUnit) {
    try {
      return getNumberFormatter(locale, {
        style: "unit",
        unit: intlUnit,
        minimumFractionDigits: 0,
        maximumFractionDigits: decimals,
        unitDisplay: "short",
      }).format(value);
    } catch {
      // Fall through if the runtime doesn't support this unit
    }
  }

  const symbol = UNIT_SYMBOL_FALLBACK[unit] ?? String(unit);
  const num = formatNumber(value, locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
  return symbol ? `${num} ${symbol}` : num;
}
