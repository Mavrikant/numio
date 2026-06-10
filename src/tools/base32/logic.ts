const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

/** UTF-8 → Base32 (RFC 4648, with padding). */
export function encodeBase32(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let bits = 0;
  let value = 0;
  let out = "";
  for (const b of bytes) {
    value = (value << 8) | b;
    bits += 8;
    while (bits >= 5) {
      out += ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += ALPHABET[(value << (5 - bits)) & 31];
  while (out.length % 8 !== 0) out += "=";
  return out;
}

const LOOKUP: Record<string, number> = {};
for (let i = 0; i < ALPHABET.length; i++) LOOKUP[ALPHABET[i]!] = i;

/** Base32 → UTF-8 string. Throws on malformed input. */
export function decodeBase32(b32: string): string {
  const clean = b32.toUpperCase().replace(/\s+/g, "").replace(/=+$/, "");
  if (!/^[A-Z2-7]*$/.test(clean)) throw new Error("Invalid Base32");
  let bits = 0;
  let value = 0;
  const bytes: number[] = [];
  for (const ch of clean) {
    value = (value << 5) | LOOKUP[ch]!;
    bits += 5;
    if (bits >= 8) {
      bytes.push((value >>> (bits - 8)) & 0xff);
      bits -= 8;
    }
  }
  return new TextDecoder().decode(new Uint8Array(bytes));
}
