/**
 * Strip JPEG metadata segments (EXIF, IPTC, XMP, ICC, comments) from a Uint8Array
 * containing a JPEG file. Returns the cleaned bytes. If the buffer is not a
 * JPEG, the original bytes are returned unchanged.
 */
export function stripJpegMetadata(bytes: Uint8Array): Uint8Array {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return bytes;

  const out: number[] = [0xff, 0xd8];
  let i = 2;
  while (i < bytes.length) {
    if (bytes[i] !== 0xff) {
      // Past header markers, copy the rest verbatim (entropy-coded image data).
      for (; i < bytes.length; i++) out.push(bytes[i]!);
      break;
    }
    const marker = bytes[i + 1]!;
    if (marker === 0xd9) { out.push(0xff, 0xd9); i += 2; continue; }
    if (marker === 0xda) {
      // Start of Scan — copy this segment and everything that follows up to EOI.
      for (; i < bytes.length; i++) out.push(bytes[i]!);
      break;
    }
    const len = (bytes[i + 2]! << 8) | bytes[i + 3]!;
    const isMetadata = (marker >= 0xe0 && marker <= 0xef) || marker === 0xfe; // APPn or COM
    if (!isMetadata) {
      for (let k = 0; k < len + 2; k++) out.push(bytes[i + k]!);
    }
    i += len + 2;
  }
  return new Uint8Array(out);
}
