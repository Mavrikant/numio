/** IPv6 CIDR ↔ address-range conversion using BigInt arithmetic. */

const MAX128 = (1n << 128n) - 1n;

/** Parse an IPv6 address string (with optional `::`) into a 128-bit BigInt. Throws on invalid input. */
export function parseIpv6(addr: string): bigint {
  const s = addr.trim().toLowerCase();
  if (s === "") throw new Error("Empty IPv6 address");
  if ((s.match(/::/g) ?? []).length > 1) throw new Error("Invalid IPv6 address");

  let head: string[];
  let tail: string[];
  if (s.includes("::")) {
    const [h, t] = s.split("::");
    head = h === "" ? [] : h.split(":");
    tail = t === "" ? [] : t.split(":");
  } else {
    head = s.split(":");
    tail = [];
  }

  const groups = [...head, ...tail];
  if (groups.length > 8) throw new Error("Invalid IPv6 address");
  if (!s.includes("::") && groups.length !== 8) throw new Error("Invalid IPv6 address");

  const fill = 8 - groups.length;
  if (s.includes("::") && fill < 0) throw new Error("Invalid IPv6 address");

  const full = [...head, ...Array.from({ length: s.includes("::") ? fill : 0 }, () => "0"), ...tail];
  if (full.length !== 8) throw new Error("Invalid IPv6 address");

  let result = 0n;
  for (const g of full) {
    if (!/^[0-9a-f]{1,4}$/.test(g)) throw new Error("Invalid IPv6 group");
    result = (result << 16n) | BigInt(parseInt(g, 16));
  }
  return result;
}

/** Format a 128-bit BigInt into a compressed IPv6 address (with `::`). */
export function formatIpv6(value: bigint): string {
  if (value < 0n || value > MAX128) throw new Error("Value out of IPv6 range");
  const groups: number[] = [];
  for (let i = 0; i < 8; i++) {
    // Group 0 holds the most-significant 16 bits.
    groups[i] = Number((value >> BigInt((7 - i) * 16)) & 0xffffn);
  }

  // Find the longest run of consecutive zero groups for `::` compression.
  let bestStart = -1;
  let bestLen = 0;
  let curStart = -1;
  let curLen = 0;
  for (let i = 0; i < 8; i++) {
    if (groups[i] === 0) {
      if (curStart === -1) curStart = i;
      curLen++;
      if (curLen > bestLen) {
        bestLen = curLen;
        bestStart = curStart;
      }
    } else {
      curStart = -1;
      curLen = 0;
    }
  }

  const hex = groups.map((g) => g.toString(16));
  if (bestLen < 2) return hex.join(":");

  const before = hex.slice(0, bestStart).join(":");
  const after = hex.slice(bestStart + bestLen).join(":");
  return `${before}::${after}`;
}

export interface CidrRange {
  readonly first: string;
  readonly last: string;
  /** Number of addresses, as a decimal string (may exceed Number.MAX_SAFE_INTEGER). */
  readonly count: string;
}

function parseCidr(cidr: string): { base: bigint; prefix: number } {
  const m = /^([^/]+)\/(\d{1,3})$/.exec(cidr.trim());
  if (!m) throw new Error("Invalid CIDR notation");
  const prefix = Number(m[2]);
  if (prefix < 0 || prefix > 128) throw new Error("Prefix length must be 0-128");
  const base = parseIpv6(m[1]);
  return { base, prefix };
}

/** Expand an IPv6 CIDR into its first/last address and total address count. Throws on invalid input. */
export function cidrToRange(cidr: string): CidrRange {
  const { base, prefix } = parseCidr(cidr);
  const hostBits = BigInt(128 - prefix);
  const mask = hostBits === 0n ? MAX128 : ((1n << BigInt(prefix)) - 1n) << hostBits;
  const network = base & mask;
  const last = network | (hostBits === 0n ? 0n : (1n << hostBits) - 1n);
  return {
    first: formatIpv6(network),
    last: formatIpv6(last),
    count: (1n << hostBits).toString(),
  };
}

/** Cover an inclusive [start, end] IPv6 range with the minimal set of CIDR blocks. Throws on invalid input. */
export function rangeToCidr(start: string, end: string): string[] {
  let cur = parseIpv6(start);
  const last = parseIpv6(end);
  if (cur > last) throw new Error("Start address must be <= end address");

  const out: string[] = [];
  while (cur <= last) {
    // Largest block whose size aligns with `cur` and fits within the remaining range.
    let maxSize = 128;
    if (cur !== 0n) {
      // Number of trailing zero bits in `cur` caps the block size.
      let tz = 0;
      let v = cur;
      while ((v & 1n) === 0n && tz < 128) {
        tz++;
        v >>= 1n;
      }
      maxSize = 128 - tz;
    } else {
      maxSize = 0;
    }

    // Shrink the block until it does not overrun `last`.
    while (maxSize < 128) {
      const blockCount = 1n << BigInt(128 - maxSize);
      const blockEnd = cur + blockCount - 1n;
      if (blockEnd <= last) break;
      maxSize++;
    }

    out.push(`${formatIpv6(cur)}/${maxSize}`);
    const size = 1n << BigInt(128 - maxSize);
    cur += size;
    if (cur === 0n) break; // wrapped past 2^128
  }
  return out;
}
