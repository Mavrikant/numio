const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/** UTF-8 → Base64 (no external btoa dependency, works in any JS runtime). */
export function encodeBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let out = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const b0 = bytes[i]!;
    const b1 = bytes[i + 1];
    const b2 = bytes[i + 2];
    out += CHARS[b0 >> 2];
    out += CHARS[((b0 & 3) << 4) | ((b1 ?? 0) >> 4)];
    out += b1 === undefined ? "=" : CHARS[((b1 & 15) << 2) | ((b2 ?? 0) >> 6)];
    out += b2 === undefined ? "=" : CHARS[b2 & 63];
  }
  return out;
}

const LOOKUP: Record<string, number> = {};
for (let i = 0; i < CHARS.length; i++) LOOKUP[CHARS[i]!] = i;

/** Base64 → UTF-8 string. Throws on malformed input. */
export function decodeBase64(b64: string): string {
  const clean = b64.replace(/\s+/g, "").replace(/=+$/, "");
  if (!/^[A-Za-z0-9+/]*$/.test(clean)) throw new Error("Invalid Base64");
  const bytes: number[] = [];
  for (let i = 0; i < clean.length; i += 4) {
    const c0 = LOOKUP[clean[i]!]!;
    const c1 = LOOKUP[clean[i + 1]!]!;
    const c2 = clean[i + 2] !== undefined ? LOOKUP[clean[i + 2]!]! : undefined;
    const c3 = clean[i + 3] !== undefined ? LOOKUP[clean[i + 3]!]! : undefined;
    bytes.push((c0 << 2) | (c1 >> 4));
    if (c2 !== undefined) bytes.push(((c1 & 15) << 4) | (c2 >> 2));
    if (c3 !== undefined) bytes.push(((c2! & 3) << 6) | c3);
  }
  return new TextDecoder().decode(new Uint8Array(bytes));
}
