/**
 * Country IBAN lengths (ISO 13616) and BBAN templates of `n` (digit) / `c`
 * (alphanumeric). Subset of the registry — enough to generate realistic
 * test IBANs for the most common destinations.
 */
const LENGTHS: Record<string, number> = {
  AT: 20, BE: 16, BG: 22, CH: 21, CY: 28, CZ: 24, DE: 22, DK: 18, EE: 20, ES: 24,
  FI: 18, FR: 27, GB: 22, GR: 27, HR: 21, HU: 28, IE: 22, IS: 26, IT: 27, LT: 20,
  LU: 20, LV: 21, MT: 31, NL: 18, NO: 15, PL: 28, PT: 25, RO: 24, SE: 24, SI: 19,
  SK: 24, TR: 26,
};

export const COUNTRIES = Object.keys(LENGTHS);

function mod97(input: string): number {
  let remainder = 0;
  for (const ch of input) remainder = (remainder * 10 + Number(ch)) % 97;
  return remainder;
}

/**
 * Generate a valid (mod-97-conformant) test IBAN for the given country. The
 * BBAN body is filled with crypto-random digits and the check digits are
 * computed accordingly. Random source is injected so callers can seed it.
 */
export function generateIban(country: string, rand: () => number): string {
  const length = LENGTHS[country];
  if (!length) throw new Error(`Unsupported country code "${country}".`);
  const bbanLength = length - 4;

  let bban = "";
  for (let i = 0; i < bbanLength; i++) bban += Math.floor(rand() * 10).toString();

  // Compute check digits: rearrange BBAN + country + "00", convert letters to digits, then 98 - (n mod 97).
  const numeric =
    bban +
    String(country.charCodeAt(0) - 55) +
    String(country.charCodeAt(1) - 55) +
    "00";
  const check = 98 - mod97(numeric);
  const checkStr = String(check).padStart(2, "0");
  return country + checkStr + bban;
}

/** Format an IBAN with a space every four characters. */
export function formatIban(iban: string): string {
  return iban.replace(/(.{4})/g, "$1 ").trim();
}
