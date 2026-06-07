/** IPv6 Unique Local Address (ULA) generation per RFC 4193. */

export interface UlaResult {
  /** 40-bit Global ID formatted as xx:xxxx:xxxx (hex). */
  readonly globalId: string;
  /** The /48 prefix, e.g. fdXX:XXXX:XXXX::/48. */
  readonly prefix48: string;
  /** A sample /64 subnet, e.g. fdXX:XXXX:XXXX:<subnet>::/64. */
  readonly sampleSubnet: string;
}

const hex2 = (n: number): string => (n & 0xff).toString(16).padStart(2, "0");
const hex4 = (n: number): string => (n & 0xffff).toString(16).padStart(4, "0");

/**
 * Build a ULA from a 5-byte (40-bit) Global ID and an optional subnet id.
 * The prefix byte 0xfd (fc00::/7 with L=1) is prepended per RFC 4193.
 * Throws if `globalIdBytes` is not exactly 5 bytes.
 */
export function buildUla(globalIdBytes: Uint8Array, subnetId = 0): UlaResult {
  if (globalIdBytes.length !== 5) throw new Error("Global ID must be exactly 5 bytes");
  if (!Number.isInteger(subnetId) || subnetId < 0 || subnetId > 0xffff) {
    throw new Error("Subnet ID must be an integer between 0 and 65535");
  }
  const [b0, b1, b2, b3, b4] = Array.from(globalIdBytes);

  // 48-bit prefix: 0xfd followed by the 40-bit global id, grouped as three 16-bit words.
  const g0 = hex2(0xfd) + hex2(b0); // fdXX
  const g1 = hex2(b1) + hex2(b2); // XXXX
  const g2 = hex2(b3) + hex2(b4); // XXXX

  const globalId = `${hex2(b0)}:${hex2(b1) + hex2(b2)}:${hex2(b3) + hex2(b4)}`;
  const prefix48 = `${g0}:${g1}:${g2}::/48`;
  const sampleSubnet = `${g0}:${g1}:${g2}:${hex4(subnetId)}::/64`;

  return { globalId, prefix48, sampleSubnet };
}

/** Generate a random ULA using a cryptographically secure 40-bit Global ID. */
export function generateUla(subnetId = 0): UlaResult {
  const bytes = crypto.getRandomValues(new Uint8Array(5));
  return buildUla(bytes, subnetId);
}
