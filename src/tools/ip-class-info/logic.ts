import { compressIpv6, expandIpv6 } from "../ipv6-expand-compress/logic";

export interface IpInfo {
  readonly version: "IPv4" | "IPv6" | null;
  readonly canonical: string;
  readonly classfulClass: "A" | "B" | "C" | "D (multicast)" | "E (reserved)" | "—";
  readonly isPrivate: boolean;
  readonly isLoopback: boolean;
  readonly isLinkLocal: boolean;
  readonly isMulticast: boolean;
  readonly isDocumentation: boolean;
  readonly notes: string[];
  readonly error: string | null;
}

const EMPTY: IpInfo = {
  version: null,
  canonical: "",
  classfulClass: "—",
  isPrivate: false,
  isLoopback: false,
  isLinkLocal: false,
  isMulticast: false,
  isDocumentation: false,
  notes: [],
  error: null,
};

function parseIpv4(input: string): number[] | null {
  const parts = input.split(".");
  if (parts.length !== 4) return null;
  const nums: number[] = [];
  for (const p of parts) {
    if (!/^\d{1,3}$/.test(p)) return null;
    const n = Number(p);
    if (n > 255) return null;
    nums.push(n);
  }
  return nums;
}

function classifyIpv4(octets: number[]): IpInfo {
  const [a, b] = octets;
  const canonical = octets.join(".");

  let classfulClass: IpInfo["classfulClass"] = "—";
  if (a! < 128) classfulClass = "A";
  else if (a! < 192) classfulClass = "B";
  else if (a! < 224) classfulClass = "C";
  else if (a! < 240) classfulClass = "D (multicast)";
  else classfulClass = "E (reserved)";

  const isPrivate =
    a === 10 ||
    (a === 172 && b! >= 16 && b! <= 31) ||
    (a === 192 && b === 168);
  const isLoopback = a === 127;
  const isLinkLocal = a === 169 && b === 254;
  const isMulticast = a! >= 224 && a! <= 239;
  const isDocumentation =
    (a === 192 && b === 0 && octets[2] === 2) ||
    (a === 198 && b === 51 && octets[2] === 100) ||
    (a === 203 && b === 0 && octets[2] === 113);

  const notes: string[] = [];
  if (isPrivate) notes.push("Private range (RFC 1918).");
  if (isLoopback) notes.push("Loopback (127.0.0.0/8).");
  if (isLinkLocal) notes.push("Link-local (RFC 3927, 169.254.0.0/16).");
  if (isMulticast) notes.push("Multicast (224.0.0.0/4).");
  if (isDocumentation) notes.push("Documentation range (RFC 5737).");
  if (a === 0) notes.push("Reserved network identifier (0.0.0.0/8).");
  if (a === 255 || octets.every((o) => o === 255)) notes.push("Limited broadcast.");

  return {
    version: "IPv4",
    canonical,
    classfulClass,
    isPrivate,
    isLoopback,
    isLinkLocal,
    isMulticast,
    isDocumentation,
    notes,
    error: null,
  };
}

function classifyIpv6(input: string): IpInfo {
  const groups = expandIpv6(input);
  if (!groups) return { ...EMPTY, error: "Not a valid IPv6 address." };
  const s = compressIpv6(groups);
  const g0 = groups[0]!;
  const isLoopback = s === "::1";
  const isLinkLocal = /^fe[89ab]/.test(g0);
  const isMulticast = g0.startsWith("ff");
  const isUniqueLocal = /^f[cd]/.test(g0);
  const isDocumentation = g0 === "2001" && groups[1] === "0db8";

  const notes: string[] = [];
  if (isLoopback) notes.push("Loopback (::1).");
  if (isLinkLocal) notes.push("Link-local (fe80::/10).");
  if (isMulticast) notes.push("Multicast (ff00::/8).");
  if (isUniqueLocal) notes.push("Unique-local (fc00::/7, RFC 4193).");
  if (isDocumentation) notes.push("Documentation prefix (2001:db8::/32).");

  return {
    version: "IPv6",
    canonical: s,
    classfulClass: "—",
    isPrivate: isUniqueLocal,
    isLoopback,
    isLinkLocal,
    isMulticast,
    isDocumentation,
    notes,
    error: null,
  };
}

/** Classify an IPv4 or IPv6 address with classful + RFC-1918/loopback/multicast flags. */
export function classifyIp(input: string): IpInfo {
  const trimmed = input.trim();
  if (!trimmed) return EMPTY;
  if (trimmed.includes(":")) {
    return classifyIpv6(trimmed);
  }
  const octets = parseIpv4(trimmed);
  if (!octets) return { ...EMPTY, error: "Not a valid IPv4 address." };
  return classifyIpv4(octets);
}
