/**
 * Base64 encode/decode logic — pure and environment-agnostic.
 *
 * We convert text to/from UTF-8 bytes with TextEncoder/TextDecoder (available
 * in browsers and Node), then run a hand-written Base64 codec so behaviour is
 * identical everywhere and the URL-safe variant is easy to support.
 */

const STD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

export interface Base64Options {
  /** Use the URL-safe alphabet (- and _ instead of + and /). */
  readonly urlSafe: boolean;
  /** Emit `=` padding (standard) — when false, padding is stripped. */
  readonly padding: boolean;
}

export function bytesToBase64(bytes: Uint8Array, options: Base64Options): string {
  const table = options.urlSafe ? URL : STD;
  let out = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const b0 = bytes[i]!;
    const b1 = i + 1 < bytes.length ? bytes[i + 1]! : 0;
    const b2 = i + 2 < bytes.length ? bytes[i + 2]! : 0;
    out += table[b0 >> 2];
    out += table[((b0 & 0x03) << 4) | (b1 >> 4)];
    out += i + 1 < bytes.length ? table[((b1 & 0x0f) << 2) | (b2 >> 6)] : "=";
    out += i + 2 < bytes.length ? table[b2 & 0x3f] : "=";
  }
  if (!options.padding) out = out.replace(/=+$/, "");
  return out;
}

/** Decode Base64 (standard or URL-safe, padded or not) to raw bytes. */
export function base64ToBytes(input: string): Uint8Array {
  const clean = input.replace(/[\s]/g, "").replace(/-/g, "+").replace(/_/g, "/").replace(/=+$/, "");
  const lookup = new Int16Array(128).fill(-1);
  for (let i = 0; i < STD.length; i++) lookup[STD.charCodeAt(i)] = i;

  const out: number[] = [];
  let buffer = 0;
  let bits = 0;
  for (const ch of clean) {
    const code = ch.charCodeAt(0);
    const val = code < 128 ? lookup[code]! : -1;
    if (val < 0) throw new Error(`Invalid Base64 character: "${ch}"`);
    buffer = (buffer << 6) | val;
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      out.push((buffer >> bits) & 0xff);
    }
  }
  return Uint8Array.from(out);
}

export function encodeText(text: string, options: Base64Options): string {
  return bytesToBase64(new TextEncoder().encode(text), options);
}

/** Decode Base64 to a UTF-8 string. Throws on invalid input or bad UTF-8. */
export function decodeText(input: string): string {
  const bytes = base64ToBytes(input);
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}
