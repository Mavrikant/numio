export interface IbanResult {
  readonly valid: boolean;
  readonly country: string;
  readonly checkDigits: string;
  readonly bban: string;
  readonly formatted: string;
  readonly error: string | null;
}

/**
 * Expected total length per country (ISO 13616). Covers the countries that
 * actually publish IBAN registries; unlisted countries are validated only by
 * the mod-97 check.
 */
const LENGTHS: Record<string, number> = {
  AD: 24, AE: 23, AL: 28, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
  BY: 28, CH: 21, CR: 22, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, EG: 29,
  ES: 24, FI: 18, FO: 18, FR: 27, GB: 22, GE: 22, GI: 23, GL: 18, GR: 27, GT: 28,
  HR: 21, HU: 28, IE: 22, IL: 23, IQ: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20,
  LB: 28, LC: 32, LI: 21, LT: 20, LU: 20, LV: 21, LY: 25, MC: 27, MD: 24, ME: 22,
  MK: 19, MR: 27, MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25,
  QA: 29, RO: 24, RS: 22, SA: 24, SC: 31, SE: 24, SI: 19, SK: 24, SM: 27, ST: 25,
  TL: 23, TN: 24, TR: 26, UA: 29, VA: 22, VG: 24, XK: 20,
};

function mod97(input: string): number {
  let remainder = 0;
  for (const ch of input) remainder = (remainder * 10 + Number(ch)) % 97;
  return remainder;
}

/** Format an IBAN with a space every 4 characters. */
export function formatIban(iban: string): string {
  return iban.replace(/\s+/g, "").toUpperCase().replace(/(.{4})/g, "$1 ").trim();
}

/** Validate an IBAN string using ISO 13616 length + mod-97 check. */
export function validateIban(input: string): IbanResult {
  const clean = input.replace(/\s+/g, "").toUpperCase();
  const empty: IbanResult = { valid: false, country: "", checkDigits: "", bban: "", formatted: "", error: null };
  if (!clean) return empty;

  if (!/^[A-Z]{2}\d{2}[A-Z0-9]+$/.test(clean)) {
    return { ...empty, error: "IBAN must start with 2 letters and 2 digits, followed by alphanumerics." };
  }

  const country = clean.slice(0, 2);
  const checkDigits = clean.slice(2, 4);
  const bban = clean.slice(4);
  const expectedLength = LENGTHS[country];
  if (expectedLength && clean.length !== expectedLength) {
    return { ...empty, country, checkDigits, bban, error: `${country} IBANs must be exactly ${expectedLength} characters (got ${clean.length}).` };
  }

  // Move the first four characters to the end, then translate letters to digits.
  const rearranged = clean.slice(4) + clean.slice(0, 4);
  const numeric = rearranged.replace(/[A-Z]/g, (c) => String(c.charCodeAt(0) - 55));
  const valid = mod97(numeric) === 1;

  return {
    valid,
    country,
    checkDigits,
    bban,
    formatted: formatIban(clean),
    error: valid ? null : "Checksum failed — this IBAN is not valid.",
  };
}
