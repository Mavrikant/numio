/** Text → space-separated 8-bit binary of its UTF-8 bytes. */
export function textToBinary(text: string): string {
  return Array.from(new TextEncoder().encode(text))
    .map((b) => b.toString(2).padStart(8, "0"))
    .join(" ");
}

/** Binary (space-separated bytes) → text. Throws on malformed input. */
export function binaryToText(bin: string): string {
  const groups = bin.trim().split(/\s+/).filter((g) => g.length > 0);
  const bytes = groups.map((g) => {
    if (!/^[01]{1,8}$/.test(g)) throw new Error("Invalid binary");
    return parseInt(g, 2);
  });
  return new TextDecoder().decode(new Uint8Array(bytes));
}
