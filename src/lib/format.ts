import type { Locale } from "../config/site";

const LOCALE_BCP47: Record<Locale, string> = {
  en: "en-US",
  tr: "tr-TR",
  de: "de-DE",
  fr: "fr-FR",
  es: "es-ES",
  it: "it-IT",
  ar: "ar-SA",
  ru: "ru-RU",
  zh: "zh-CN",
  ja: "ja-JP",
  ko: "ko-KR",
  hi: "hi-IN",
};

export function bcp47(locale: Locale): string {
  return LOCALE_BCP47[locale];
}

const numberCache = new Map<string, Intl.NumberFormat>();

function getNumberFormatter(
  locale: Locale,
  options: Intl.NumberFormatOptions,
): Intl.NumberFormat {
  const key = `${locale}:${JSON.stringify(options)}`;
  let formatter = numberCache.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(bcp47(locale), options);
    numberCache.set(key, formatter);
  }
  return formatter;
}

export function formatNumber(
  value: number,
  locale: Locale,
  precision = 2,
): string {
  return getNumberFormatter(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: precision,
  }).format(value);
}

export function formatCurrency(
  value: number,
  locale: Locale,
  currency = "USD",
  precision = 2,
): string {
  return getNumberFormatter(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(value);
}

export function formatPercent(
  value: number,
  locale: Locale,
  precision = 1,
): string {
  return getNumberFormatter(locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: precision,
  }).format(value);
}

export function formatDuration(
  totalSeconds: number,
  _locale?: Locale,
): string {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const parts: string[] = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`);

  return parts.join(" ");
}

export function formatDate(
  value: Date | string | number,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions,
): string {
  const date = typeof value === "string" || typeof value === "number"
    ? new Date(value)
    : value;
  return new Intl.DateTimeFormat(bcp47(locale), options ?? {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatCompact(
  value: number,
  locale: Locale,
): string {
  return getNumberFormatter(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}
