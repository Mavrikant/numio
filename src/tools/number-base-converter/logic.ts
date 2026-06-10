export type Base = 2 | 8 | 10 | 16;

export interface BaseResult {
  readonly binary: string;
  readonly octal: string;
  readonly decimal: string;
  readonly hex: string;
}

const VALID: Record<Base, RegExp> = {
  2: /^[01]+$/,
  8: /^[0-7]+$/,
  10: /^\d+$/,
  16: /^[0-9a-f]+$/i,
};

/** Convert a non-negative integer string from `fromBase` to all four bases. Throws if invalid. */
export function convertBase(value: string, fromBase: Base): BaseResult {
  let v = value.trim();
  // Only strip a radix prefix when it matches the selected base; "0b1a" in
  // base 16 is a real hex number, not a binary prefix.
  if (fromBase === 16) v = v.replace(/^0x/i, "");
  else if (fromBase === 2) v = v.replace(/^0b/i, "");
  else if (fromBase === 8) v = v.replace(/^0o/i, "");
  if (v === "" || !VALID[fromBase].test(v)) throw new Error("Invalid number for base");
  const n = parseInt(v, fromBase);
  if (!Number.isSafeInteger(n)) throw new Error("Number too large");
  return {
    binary: n.toString(2),
    octal: n.toString(8),
    decimal: n.toString(10),
    hex: n.toString(16).toUpperCase(),
  };
}
