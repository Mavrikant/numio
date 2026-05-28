let TABLE: Uint32Array | null = null;

function table(): Uint32Array {
  if (TABLE) return TABLE;
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  TABLE = t;
  return t;
}

/** Compute the CRC-32 (IEEE 802.3) checksum of a UTF-8 string. */
export function crc32(input: string): number {
  const t = table();
  const bytes = new TextEncoder().encode(input);
  let crc = 0xffffffff;
  for (const byte of bytes) crc = t[(crc ^ byte) & 0xff]! ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

/** CRC-32 checksum as an 8-digit lowercase hex string. */
export function crc32Hex(input: string): string {
  return crc32(input).toString(16).padStart(8, "0");
}
