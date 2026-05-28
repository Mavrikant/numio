export interface Ipv6Result {
  readonly expanded: string;
  readonly compressed: string;
  readonly error: string | null;
}

const EMPTY: Ipv6Result = { expanded: "", compressed: "", error: null };

/** Expand a shorthand IPv6 (e.g. `2001:db8::1`) to its 8-group fully padded form. */
export function expandIpv6(input: string): string[] | null {
  const s = input.trim().toLowerCase();
  if (s === "") return null;
  if (!/^[0-9a-f:]+$/.test(s)) return null;

  if (s.includes(":::")) return null;
  const doubleColonCount = (s.match(/::/g) ?? []).length;
  if (doubleColonCount > 1) return null;

  let groups: string[];
  if (s.includes("::")) {
    const [head, tail] = s.split("::");
    const headParts = head ? head.split(":") : [];
    const tailParts = tail ? tail.split(":") : [];
    const missing = 8 - headParts.length - tailParts.length;
    if (missing < 0) return null;
    groups = [...headParts, ...Array<string>(missing).fill("0"), ...tailParts];
  } else {
    groups = s.split(":");
  }

  if (groups.length !== 8) return null;
  if (!groups.every((g) => /^[0-9a-f]{1,4}$/.test(g))) return null;
  return groups.map((g) => g.padStart(4, "0"));
}

/** Compress a fully expanded IPv6 by collapsing the longest run of zero groups to `::`. */
export function compressIpv6(groups: string[]): string {
  const normalized = groups.map((g) => g.replace(/^0+/, "") || "0");

  let bestStart = -1, bestLen = 0, curStart = -1, curLen = 0;
  for (let i = 0; i < normalized.length; i++) {
    if (normalized[i] === "0") {
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

  if (bestLen < 2) return normalized.join(":");
  const head = normalized.slice(0, bestStart).join(":");
  const tail = normalized.slice(bestStart + bestLen).join(":");
  return `${head}::${tail}`;
}

/** Expand and compress an IPv6 address in one call. */
export function convertIpv6(input: string): Ipv6Result {
  if (input.trim() === "") return EMPTY;
  const expanded = expandIpv6(input);
  if (!expanded) return { ...EMPTY, error: "Not a valid IPv6 address." };
  return { expanded: expanded.join(":"), compressed: compressIpv6(expanded), error: null };
}
