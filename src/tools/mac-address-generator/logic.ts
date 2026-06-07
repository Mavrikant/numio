/** Separator style for a rendered MAC address. */
export type MacFormat = "colon" | "hyphen" | "dot" | "none";

export interface MacOptions {
  /** Already-validated bare hex prefix (0–12 uppercase hex digits). */
  readonly prefixHex: string;
  readonly format: MacFormat;
  readonly uppercase: boolean;
  readonly count: number;
}

const HEX_DIGITS = "0123456789ABCDEF";

/**
 * Normalise a user-supplied MAC prefix to bare uppercase hex digits. Accepts
 * the common separator styles (`:`, `-`, `.`, spaces). Returns the hex string
 * (0–12 chars) on success, or null if it contains non-hex characters or is
 * longer than a full 48-bit address.
 */
export function parsePrefix(prefix: string): string | null {
  const hex = prefix.replace(/[\s.:-]/g, "").toUpperCase();
  if (hex.length > 12) return null;
  if (hex !== "" && !/^[0-9A-F]+$/.test(hex)) return null;
  return hex;
}

/**
 * Build one 12-digit (48-bit) MAC as bare uppercase hex, keeping the validated
 * prefix and filling the remaining nibbles from the injected random source.
 */
export function generateMacHex(prefixHex: string, rand: () => number): string {
  let hex = prefixHex;
  while (hex.length < 12) hex += HEX_DIGITS[Math.floor(rand() * 16)];
  return hex.slice(0, 12);
}

/** Format a 12-digit hex MAC in the requested separator style and case. */
export function formatMac(hex12: string, format: MacFormat, uppercase: boolean): string {
  const h = uppercase ? hex12.toUpperCase() : hex12.toLowerCase();
  const pairs = h.match(/.{2}/g)!;
  switch (format) {
    case "colon":
      return pairs.join(":");
    case "hyphen":
      return pairs.join("-");
    case "dot":
      return `${h.slice(0, 4)}.${h.slice(4, 8)}.${h.slice(8, 12)}`;
    case "none":
      return h;
  }
}

/**
 * Generate `count` formatted MAC addresses (clamped to 1–100) sharing the same
 * options. Random source is injected so callers/tests can seed it.
 */
export function generateMacs(opts: MacOptions, rand: () => number): string[] {
  const n = Math.max(1, Math.min(100, Math.floor(opts.count) || 1));
  return Array.from({ length: n }, () =>
    formatMac(generateMacHex(opts.prefixHex, rand), opts.format, opts.uppercase),
  );
}
