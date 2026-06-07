/** Random MAC address generation with formatting options. */

export type Separator = ":" | "-" | ".";

export interface MacOptions {
  readonly separator: Separator;
  readonly uppercase: boolean;
  /** When true, set the locally-administered bit and clear the multicast bit on the first octet. */
  readonly localAdmin: boolean;
}

const hex2 = (n: number): string => (n & 0xff).toString(16).padStart(2, "0");

/**
 * Format a 6-byte MAC address. With `.` separator the address is grouped into
 * three 4-hex-digit blocks (Cisco style); otherwise into six 2-hex-digit octets.
 * Throws if `bytes` is not exactly 6 bytes.
 */
export function buildMac(bytes: Uint8Array, opts: MacOptions): string {
  if (bytes.length !== 6) throw new Error("MAC address must be exactly 6 bytes");
  const octets = Array.from(bytes);

  if (opts.localAdmin) {
    octets[0] = (octets[0] | 0b00000010) & 0b11111110; // set bit 1 (local), clear bit 0 (unicast)
  }

  let out: string;
  if (opts.separator === ".") {
    const h = octets.map(hex2).join("");
    out = `${h.slice(0, 4)}.${h.slice(4, 8)}.${h.slice(8, 12)}`;
  } else {
    out = octets.map(hex2).join(opts.separator);
  }
  return opts.uppercase ? out.toUpperCase() : out;
}

/** Generate a random MAC address using a cryptographically secure source. */
export function generateMac(opts: MacOptions): string {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  return buildMac(bytes, opts);
}
