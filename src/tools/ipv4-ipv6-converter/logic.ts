/** Conversion between IPv4 addresses and their IPv6 representations. */

export interface Ipv4ToIpv6Result {
  /** IPv4-mapped IPv6 in hex form, e.g. ::ffff:c0a8:0101 */
  readonly mappedHex: string;
  /** IPv4-mapped IPv6 in dotted form, e.g. ::ffff:192.168.1.1 */
  readonly mappedDotted: string;
  /** 6to4 prefix derived from the IPv4 address, e.g. 2002:c0a8:0101:: */
  readonly sixToFour: string;
}

function parseIpv4(ip: string): readonly number[] {
  const parts = ip.trim().split(".");
  if (parts.length !== 4) throw new Error("Invalid IPv4 address");
  return parts.map((p) => {
    if (!/^\d{1,3}$/.test(p)) throw new Error("Invalid IPv4 address");
    const n = Number(p);
    if (n < 0 || n > 255) throw new Error("Invalid IPv4 address");
    return n;
  });
}

const hex2 = (n: number): string => n.toString(16).padStart(2, "0");

/** Convert a dotted IPv4 address into its IPv4-mapped and 6to4 IPv6 forms. Throws on invalid IPv4. */
export function ipv4ToIpv6(ip: string): Ipv4ToIpv6Result {
  const [a, b, c, d] = parseIpv4(ip);
  const g1 = hex2(a) + hex2(b);
  const g2 = hex2(c) + hex2(d);
  return {
    mappedHex: `::ffff:${g1}:${g2}`,
    mappedDotted: `::ffff:${a}.${b}.${c}.${d}`,
    sixToFour: `2002:${g1}:${g2}::`,
  };
}

function groupToOctets(group: string): readonly [number, number] {
  const n = parseInt(group, 16);
  if (Number.isNaN(n) || n < 0 || n > 0xffff) throw new Error("Invalid IPv6 group");
  return [(n >> 8) & 0xff, n & 0xff];
}

/** Extract an embedded IPv4 address from an IPv4-mapped (::ffff:) or 6to4 (2002:) IPv6 address. Throws if none is present. */
export function ipv6ExtractIpv4(ipv6: string): string {
  const addr = ipv6.trim().toLowerCase();

  // IPv4-mapped with dotted tail, e.g. ::ffff:192.168.1.1
  const dotted = /^(?:::|0:0:0:0:0:)ffff:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/.exec(addr);
  if (dotted) {
    parseIpv4(dotted[1]);
    return dotted[1];
  }

  // IPv4-mapped with hex tail, e.g. ::ffff:c0a8:0101
  const mapped = /^(?:::|0:0:0:0:0:)ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/.exec(addr);
  if (mapped) {
    const [a, b] = groupToOctets(mapped[1]);
    const [c, d] = groupToOctets(mapped[2]);
    return `${a}.${b}.${c}.${d}`;
  }

  // 6to4, e.g. 2002:c0a8:0101::
  const sixToFour = /^2002:([0-9a-f]{1,4}):([0-9a-f]{1,4})(:|::)/.exec(addr);
  if (sixToFour) {
    const [a, b] = groupToOctets(sixToFour[1]);
    const [c, d] = groupToOctets(sixToFour[2]);
    return `${a}.${b}.${c}.${d}`;
  }

  throw new Error("No embedded IPv4 address found");
}
