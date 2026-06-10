/**
 * BBAN structure per country from the ISO 13616 registry, written as
 * count+type runs: `n` digits, `a` uppercase letters, `c` alphanumeric.
 * Subset of the registry — enough to generate realistic test IBANs for the
 * most common destinations.
 */
const BBAN: Record<string, string> = {
  AT: "16n", BE: "12n", BG: "4a4n2n8c", CH: "5n12c", CY: "3n5n16c", CZ: "20n",
  DE: "18n", DK: "14n", EE: "16n", ES: "20n", FI: "14n", FR: "10n11c2n",
  GB: "4a14n", GR: "7n16c", HR: "17n", HU: "24n", IE: "4a14n", IS: "22n",
  IT: "1a10n12c", LT: "16n", LU: "3n13c", LV: "4a13c", MT: "4a5n18c",
  NL: "4a10n", NO: "11n", PL: "24n", PT: "21n", RO: "4a16c", SE: "20n",
  SI: "15n", SK: "20n", TR: "5n1c16c",
};

export const COUNTRIES = Object.keys(BBAN);

const DIGITS = "0123456789";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALNUM = DIGITS + LETTERS;

function mod97(input: string): number {
  let remainder = 0;
  for (const ch of input) remainder = (remainder * 10 + Number(ch)) % 97;
  return remainder;
}

function expandTemplate(tpl: string): string {
  return tpl.replace(/(\d+)([nac])/g, (_, count: string, type: string) => type.repeat(Number(count)));
}

/**
 * Generate a valid (mod-97-conformant) test IBAN for the given country. The
 * BBAN follows the country's ISO 13616 structure (letters where the registry
 * requires them, e.g. the GB/NL/IE bank code) filled from the injected random
 * source so callers can seed it.
 */
export function generateIban(country: string, rand: () => number): string {
  const tpl = BBAN[country];
  if (!tpl) throw new Error(`Unsupported country code "${country}".`);

  let bban = "";
  for (const t of expandTemplate(tpl)) {
    const pool = t === "n" ? DIGITS : t === "a" ? LETTERS : ALNUM;
    bban += pool[Math.floor(rand() * pool.length)];
  }

  // Compute check digits: rearrange BBAN + country + "00", convert letters
  // to digits (A=10 … Z=35), then 98 - (n mod 97).
  const numeric = (bban + country + "00").replace(/[A-Z]/g, (c) => String(c.charCodeAt(0) - 55));
  const check = 98 - mod97(numeric);
  return country + String(check).padStart(2, "0") + bban;
}

/** Format an IBAN with a space every four characters. */
export function formatIban(iban: string): string {
  return iban.replace(/(.{4})/g, "$1 ").trim();
}
