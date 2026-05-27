/** Text → space-separated hex of its UTF-8 bytes. */
export function textToHex(text: string): string {
  return Array.from(new TextEncoder().encode(text))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(" ");
}

/** Hex (with optional spaces / 0x prefixes) → text. Throws on malformed input. */
export function hexToText(hex: string): string {
  const clean = hex.replace(/0x/gi, "").replace(/[\s,]+/g, "");
  if (clean.length % 2 !== 0 || !/^[0-9a-f]*$/i.test(clean)) throw new Error("Invalid hex");
  const bytes: number[] = [];
  for (let i = 0; i < clean.length; i += 2) bytes.push(parseInt(clean.slice(i, i + 2), 16));
  return new TextDecoder().decode(new Uint8Array(bytes));
}
