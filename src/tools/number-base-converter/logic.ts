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
  const v = value.trim().replace(/^0x/i, "").replace(/^0b/i, "");
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
