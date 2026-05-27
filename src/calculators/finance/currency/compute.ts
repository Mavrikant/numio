import { z } from "zod";

// Build-time reference rate snapshot. NOT live data.
// Source: cross-checked mid-market reference rates ca. January 2025
// (ECB, X-rates, IMF SDR). These are static and will drift over time.
export const CURRENCY_RATES_LAST_UPDATED = "2025-01-15";

/**
 * Mid-market reference rates expressed as units of currency per 1 USD.
 * USD is the base (=1). 25 popular currencies covered.
 *
 * Reference snapshot date: 2025-01-15. NOT live — for indicative use only.
 */
export const CURRENCY_RATES = {
  USD: 1,
  EUR: 0.96,
  GBP: 0.81,
  JPY: 156.3,
  CNY: 7.29,
  TRY: 35.5,
  CAD: 1.44,
  AUD: 1.61,
  CHF: 0.91,
  INR: 86.5,
  BRL: 6.10,
  MXN: 20.7,
  KRW: 1450,
  SGD: 1.37,
  HKD: 7.79,
  ZAR: 18.9,
  RUB: 104.5,
  SEK: 11.1,
  NOK: 11.4,
  DKK: 7.20,
  PLN: 4.13,
  NZD: 1.78,
  AED: 3.67,
  SAR: 3.75,
  ILS: 3.64,
} as const;

export type CurrencyCode = keyof typeof CURRENCY_RATES;

export const CURRENCY_CODES = Object.keys(CURRENCY_RATES) as CurrencyCode[];

const currencyEnum = z.enum(
  CURRENCY_CODES as [CurrencyCode, ...CurrencyCode[]],
);

export const inputSchema = z.object({
  amount: z.number().finite().min(0).max(1_000_000_000_000),
  fromCurrency: currencyEnum,
  toCurrency: currencyEnum,
});

export type CurrencyInputs = z.infer<typeof inputSchema>;

export interface CurrencyResult extends Record<string, unknown> {
  readonly convertedAmount: number;
  readonly rate: number;
  readonly reverseRate: number;
  readonly lastUpdated: string;
}

export function compute(inputs: CurrencyInputs): CurrencyResult {
  const fromRate = CURRENCY_RATES[inputs.fromCurrency];
  const toRate = CURRENCY_RATES[inputs.toCurrency];

  // Cross-rate via USD base: amountInUSD = amount / fromRate; result = amountInUSD * toRate
  const rate = toRate / fromRate;
  const reverseRate = fromRate / toRate;
  const convertedAmount = inputs.amount * rate;

  return {
    convertedAmount: Math.round(convertedAmount * 10000) / 10000,
    rate: Math.round(rate * 1000000) / 1000000,
    reverseRate: Math.round(reverseRate * 1000000) / 1000000,
    lastUpdated: CURRENCY_RATES_LAST_UPDATED,
  };
}
