export interface CharsetOptions {
  readonly lowercase: boolean;
  readonly uppercase: boolean;
  readonly numbers: boolean;
  readonly symbols: boolean;
}

const SETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{}",
} as const;

export function buildCharset(opts: CharsetOptions): string {
  let pool = "";
  if (opts.lowercase) pool += SETS.lowercase;
  if (opts.uppercase) pool += SETS.uppercase;
  if (opts.numbers) pool += SETS.numbers;
  if (opts.symbols) pool += SETS.symbols;
  return pool;
}

/**
 * Build a random string of `length` characters from `charset`.
 * `randomInt(max)` must return an unbiased integer in [0, max).
 */
export function randomString(length: number, charset: string, randomInt: (max: number) => number): string {
  if (charset.length === 0 || length <= 0) return "";
  let out = "";
  for (let i = 0; i < length; i++) out += charset[randomInt(charset.length)];
  return out;
}
