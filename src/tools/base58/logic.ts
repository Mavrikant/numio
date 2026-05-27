const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const MAP: Record<string, number> = Object.fromEntries(ALPHABET.split("").map((c, i) => [c, i]));

/** Encode a UTF-8 string to Base58 (Bitcoin alphabet). */
export function encodeBase58(input: string): string {
  if (!input) return "";
  const bytes = Array.from(new TextEncoder().encode(input));
  let zeros = 0;
  while (zeros < bytes.length && bytes[zeros] === 0) zeros++;

  const digits: number[] = [];
  for (const byte of bytes) {
    let carry = byte;
    for (let i = 0; i < digits.length; i++) {
      carry += digits[i]! << 8;
      digits[i] = carry % 58;
      carry = (carry / 58) | 0;
    }
    while (carry > 0) {
      digits.push(carry % 58);
      carry = (carry / 58) | 0;
    }
  }

  return "1".repeat(zeros) + digits.reverse().map((d) => ALPHABET[d]).join("");
}

/** Decode a Base58 string back to UTF-8. Throws on invalid characters. */
export function decodeBase58(input: string): string {
  const s = input.trim();
  if (!s) return "";
  let zeros = 0;
  while (zeros < s.length && s[zeros] === "1") zeros++;

  const bytes: number[] = [];
  for (const ch of s) {
    const value = MAP[ch];
    if (value === undefined) throw new Error(`Invalid Base58 character: "${ch}"`);
    let carry = value;
    for (let i = 0; i < bytes.length; i++) {
      carry += bytes[i]! * 58;
      bytes[i] = carry & 0xff;
      carry >>= 8;
    }
    while (carry > 0) {
      bytes.push(carry & 0xff);
      carry >>= 8;
    }
  }

  const out = new Uint8Array(zeros + bytes.length);
  for (let i = 0; i < bytes.length; i++) out[zeros + i] = bytes[bytes.length - 1 - i]!;
  return new TextDecoder().decode(out);
}
