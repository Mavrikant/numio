export interface CardResult {
  readonly valid: boolean;
  readonly brand: string | null;
  readonly digits: number;
}

/** Luhn checksum validation. */
export function luhnValid(input: string): boolean {
  const d = input.replace(/\D/g, "");
  if (d.length < 12) return false;
  let sum = 0;
  let alt = false;
  for (let i = d.length - 1; i >= 0; i--) {
    let n = d.charCodeAt(i) - 48;
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
}

/** Detect the card brand from the number's prefix. */
export function detectBrand(input: string): string | null {
  const d = input.replace(/\D/g, "");
  if (/^4/.test(d)) return "Visa";
  // Mastercard 2-series runs 2221–2720 (2220 is not Mastercard).
  if (/^(5[1-5]|2(22[1-9]|2[3-9]|[3-6]|7[01]|720))/.test(d)) return "Mastercard";
  if (/^3[47]/.test(d)) return "American Express";
  if (/^(6011|65|64[4-9]|622)/.test(d)) return "Discover";
  if (/^3(0[0-5]|[68])/.test(d)) return "Diners Club";
  if (/^35(2[89]|[3-8])/.test(d)) return "JCB";
  return null;
}

export function analyzeCard(input: string): CardResult {
  const digits = input.replace(/\D/g, "").length;
  return { valid: luhnValid(input), brand: detectBrand(input), digits };
}
