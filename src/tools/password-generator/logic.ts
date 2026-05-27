/**
 * Password-generator logic — pure, deterministic helpers.
 *
 * Generation itself needs entropy (CSPRNG), so `generatePassword` takes a
 * `randomInt` provider injected by the caller. The browser component passes a
 * `crypto.getRandomValues`-backed function; tests pass a seeded RNG. Everything
 * else (pool building, entropy, crack-time, strength rating) is pure and
 * unit-tested.
 */

export interface PasswordOptions {
  readonly length: number;
  readonly lowercase: boolean;
  readonly uppercase: boolean;
  readonly numbers: boolean;
  readonly symbols: boolean;
  /** Drop visually confusable characters (I l 1 O 0 o, etc.). */
  readonly excludeAmbiguous: boolean;
}

export const CHARSETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{};:,.?/",
} as const;

/** Characters that are easy to mistake for one another. */
const AMBIGUOUS = new Set("Il1O0oB8S5Z2G6q9");

export type CharClass = keyof typeof CHARSETS;

/** Build the character pool implied by the selected options. */
export function buildPool(options: PasswordOptions): string {
  let pool = "";
  for (const cls of ["lowercase", "uppercase", "numbers", "symbols"] as const) {
    if (options[cls]) pool += CHARSETS[cls];
  }
  if (options.excludeAmbiguous) {
    pool = [...pool].filter((ch) => !AMBIGUOUS.has(ch)).join("");
  }
  return pool;
}

/**
 * Shannon entropy of a password drawn uniformly at random from `poolSize`
 * symbols, in bits: H = length · log2(poolSize).
 */
export function passwordEntropy(length: number, poolSize: number): number {
  if (length <= 0 || poolSize <= 1) return 0;
  return length * Math.log2(poolSize);
}

export type StrengthLevel = "veryWeak" | "weak" | "fair" | "strong" | "veryStrong";

/**
 * Map entropy (bits) to a coarse strength bucket. Thresholds follow common
 * guidance: <28 trivially brute-forced, 28–35 weak, 36–59 reasonable for
 * online use, 60–127 strong, ≥128 effectively unbreakable.
 */
export function strengthLevel(entropy: number): StrengthLevel {
  if (entropy < 28) return "veryWeak";
  if (entropy < 36) return "weak";
  if (entropy < 60) return "fair";
  if (entropy < 128) return "strong";
  return "veryStrong";
}

/** 0–4 score, handy for rendering a segmented meter. */
export function strengthScore(level: StrengthLevel): number {
  return { veryWeak: 0, weak: 1, fair: 2, strong: 3, veryStrong: 4 }[level];
}

/** A few attacker models, expressed as guesses per second. */
export const ATTACK_SCENARIOS = {
  /** Throttled online attack against a login form. */
  onlineThrottled: 100,
  /** Unthrottled online attack. */
  onlineFast: 1e4,
  /** Offline attack against a slow hash (bcrypt-style), single GPU. */
  offlineSlowHash: 1e4,
  /** Offline attack against a fast hash (e.g. unsalted MD5/SHA-1), GPU farm. */
  offlineFastHash: 1e12,
} as const;

export type AttackScenario = keyof typeof ATTACK_SCENARIOS;

/**
 * Expected time to crack, in seconds, given entropy and an attacker's guess
 * rate. Uses half the keyspace as the average number of guesses. Returns
 * `Infinity` when the keyspace is large enough to overflow a double — the
 * caller renders that as "centuries".
 */
export function crackTimeSeconds(entropy: number, guessesPerSecond: number): number {
  if (guessesPerSecond <= 0) return Infinity;
  // 2^(entropy-1) average guesses. Math.pow overflows to Infinity past ~1024 bits.
  const avgGuesses = Math.pow(2, entropy - 1);
  return avgGuesses / guessesPerSecond;
}

export interface HumanDuration {
  /** i18n key for the unit (or a special bucket like "instant"/"eternity"). */
  readonly unitKey: string;
  /** Rounded magnitude. `Infinity` for the eternity bucket, `0` for instant. */
  readonly value: number;
}

const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;
const CENTURY = 100 * YEAR;

/** Reduce a duration in seconds to the largest sensible unit. */
export function humanizeSeconds(seconds: number): HumanDuration {
  if (!Number.isFinite(seconds) || seconds >= CENTURY * 1e6) {
    return { unitKey: "eternity", value: Infinity };
  }
  if (seconds < 1) return { unitKey: "instant", value: 0 };

  const steps: ReadonlyArray<readonly [number, string]> = [
    [CENTURY, "century"],
    [YEAR, "year"],
    [MONTH, "month"],
    [DAY, "day"],
    [HOUR, "hour"],
    [MINUTE, "minute"],
    [SECOND, "second"],
  ];
  for (const [size, unitKey] of steps) {
    if (seconds >= size) {
      return { unitKey, value: Math.round(seconds / size) };
    }
  }
  return { unitKey: "instant", value: 0 };
}

export interface PasswordMetrics {
  readonly poolSize: number;
  readonly length: number;
  readonly entropy: number;
  readonly level: StrengthLevel;
  readonly score: number;
  /** Crack time (seconds) per attacker model. */
  readonly crackSeconds: Record<AttackScenario, number>;
}

/** Compute every metric we display for a given pool size and length. */
export function analyzePassword(length: number, poolSize: number): PasswordMetrics {
  const entropy = passwordEntropy(length, poolSize);
  const level = strengthLevel(entropy);
  const crackSeconds = {} as Record<AttackScenario, number>;
  for (const key of Object.keys(ATTACK_SCENARIOS) as AttackScenario[]) {
    crackSeconds[key] = crackTimeSeconds(entropy, ATTACK_SCENARIOS[key]);
  }
  return {
    poolSize,
    length,
    entropy,
    level,
    score: strengthScore(level),
    crackSeconds,
  };
}

/**
 * Generate a password of `options.length` characters drawn uniformly from the
 * selected pool. `randomInt(maxExclusive)` must return an unbiased integer in
 * `[0, maxExclusive)`. Guarantees at least one character from each selected
 * class (when length permits) so the result actually uses the requested
 * variety. Returns `""` when no class is selected.
 */
export function generatePassword(
  options: PasswordOptions,
  randomInt: (maxExclusive: number) => number,
): string {
  const pool = buildPool(options);
  if (pool.length === 0 || options.length <= 0) return "";

  const requiredPools: string[] = [];
  for (const cls of ["lowercase", "uppercase", "numbers", "symbols"] as const) {
    if (!options[cls]) continue;
    const set = options.excludeAmbiguous
      ? [...CHARSETS[cls]].filter((ch) => !AMBIGUOUS.has(ch)).join("")
      : CHARSETS[cls];
    if (set.length > 0) requiredPools.push(set);
  }

  const chars: string[] = [];
  // Seed one character per selected class first (if there's room).
  for (const set of requiredPools) {
    if (chars.length >= options.length) break;
    chars.push(set[randomInt(set.length)]!);
  }
  // Fill the rest from the full pool.
  while (chars.length < options.length) {
    chars.push(pool[randomInt(pool.length)]!);
  }

  // Fisher–Yates shuffle so the seeded characters aren't stuck at the front.
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [chars[i], chars[j]] = [chars[j]!, chars[i]!];
  }
  return chars.join("");
}
