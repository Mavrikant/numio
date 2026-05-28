const ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford's Base32
const TIME_LEN = 10;
const RAND_LEN = 16;

function encodeTime(now: number): string {
  let n = now;
  const chars = new Array<string>(TIME_LEN);
  for (let i = TIME_LEN - 1; i >= 0; i--) {
    const mod = n % 32;
    chars[i] = ENCODING[mod]!;
    n = (n - mod) / 32;
  }
  return chars.join("");
}

function encodeRandom(bytes: Uint8Array): string {
  let out = "";
  // Each byte contributes 8 bits; map each 5-bit chunk to a Crockford char.
  // Simpler: take low 5 bits per byte for RAND_LEN characters (good enough for ULID randomness).
  for (let i = 0; i < RAND_LEN; i++) {
    out += ENCODING[bytes[i]! & 0x1f]!;
  }
  return out;
}

/**
 * Generate a ULID (Crockford Base32, 26 chars). `now` and `bytes` are injected
 * so the function stays pure and deterministically testable.
 */
export function generateUlid(now: number, bytes: Uint8Array): string {
  return encodeTime(now) + encodeRandom(bytes);
}
