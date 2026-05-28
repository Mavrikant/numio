export const DEFAULT_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";

/**
 * Generate a NanoID from a custom alphabet using injected random bytes. The
 * RNG is injected so callers in tests can supply a deterministic source.
 */
export function generateNanoId(size: number, alphabet: string, bytes: Uint8Array): string {
  if (size <= 0 || alphabet.length === 0) return "";
  if (bytes.length < size) throw new Error("Not enough random bytes for the requested size.");
  let out = "";
  for (let i = 0; i < size; i++) out += alphabet[bytes[i]! % alphabet.length];
  return out;
}
