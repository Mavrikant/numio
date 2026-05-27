/**
 * HMAC-generator logic.
 *
 * HMAC uses the Web Crypto API (`crypto.subtle`), available in browsers and
 * Node 22+. Encoders are pure and unit-tested; `computeHmac` is async and
 * verified against published RFC 4231 test vectors.
 */

export const HMAC_ALGORITHMS = ["SHA-256", "SHA-384", "SHA-512"] as const;
export type HmacAlgorithm = (typeof HMAC_ALGORITHMS)[number];

export type OutputEncoding = "hex" | "base64";

export function bytesToHex(bytes: Uint8Array): string {
  let out = "";
  for (const b of bytes) out += b.toString(16).padStart(2, "0");
  return out;
}

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

/** Compute HMAC of UTF-8 `message` under UTF-8 `key`, returning raw bytes. */
export async function computeHmac(
  algorithm: HmacAlgorithm,
  key: string,
  message: string,
): Promise<Uint8Array> {
  const enc = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(key),
    { name: "HMAC", hash: algorithm },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, enc.encode(message));
  return new Uint8Array(sig);
}
