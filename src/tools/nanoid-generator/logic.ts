export const DEFAULT_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";

/**
 * Generate a NanoID from a custom alphabet. Random bytes are pulled from the
 * injected source so callers in tests can supply a deterministic one. Uses
 * mask + rejection sampling (like the reference NanoID implementation) so
 * every character stays equally likely for any alphabet length.
 */
export function generateNanoId(
  size: number,
  alphabet: string,
  getBytes: (n: number) => Uint8Array,
): string {
  if (size <= 0 || alphabet.length === 0) return "";
  if (alphabet.length > 256) throw new Error("Alphabet must have at most 256 characters.");
  const mask = (2 << Math.floor(Math.log2(alphabet.length - 1))) - 1;
  const step = Math.ceil((1.6 * mask * size) / alphabet.length);
  let out = "";
  for (;;) {
    const bytes = getBytes(step);
    if (bytes.length === 0) throw new Error("Random byte source is empty.");
    for (const byte of bytes) {
      const idx = byte & mask;
      if (idx < alphabet.length) {
        out += alphabet[idx];
        if (out.length === size) return out;
      }
    }
  }
}
