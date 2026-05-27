/**
 * Hash-generator logic.
 *
 * Hashing uses the Web Crypto API (`crypto.subtle.digest`), which is available
 * both in browsers and in Node 22+. The encoders (`bytesToHex`,
 * `bytesToBase64`) are pure and unit-tested; `hashText` is async and verified
 * against published test vectors.
 */

export const HASH_ALGORITHMS = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"] as const;
export type HashAlgorithm = (typeof HASH_ALGORITHMS)[number];

export type OutputEncoding = "hex" | "base64";

/** Lowercase hex string for the given bytes. */
export function bytesToHex(bytes: Uint8Array): string {
  let out = "";
  for (const b of bytes) out += b.toString(16).padStart(2, "0");
  return out;
}

/** Standard Base64 (with padding) for the given bytes. */
export function bytesToBase64(bytes: Uint8Array): string {
  const TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let out = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const b0 = bytes[i]!;
    const b1 = i + 1 < bytes.length ? bytes[i + 1]! : 0;
    const b2 = i + 2 < bytes.length ? bytes[i + 2]! : 0;
    out += TABLE[b0 >> 2];
    out += TABLE[((b0 & 0x03) << 4) | (b1 >> 4)];
    out += i + 1 < bytes.length ? TABLE[((b1 & 0x0f) << 2) | (b2 >> 6)] : "=";
    out += i + 2 < bytes.length ? TABLE[b2 & 0x3f] : "=";
  }
  return out;
}

export function encodeBytes(bytes: Uint8Array, encoding: OutputEncoding): string {
  return encoding === "hex" ? bytesToHex(bytes) : bytesToBase64(bytes);
}

/** Hash UTF-8 `text` with `algorithm`, returning the raw digest bytes. */
export async function hashText(algorithm: HashAlgorithm, text: string): Promise<Uint8Array> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest(algorithm, data);
  return new Uint8Array(digest);
}

/** Digest length in bytes for each algorithm (handy for UI hints). */
export const DIGEST_BYTES: Record<HashAlgorithm, number> = {
  "SHA-1": 20,
  "SHA-256": 32,
  "SHA-384": 48,
  "SHA-512": 64,
};
