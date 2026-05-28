export interface SubnetResult {
  readonly cidr: string;
  readonly network: string;
  readonly broadcast: string;
  readonly firstHost: string;
  readonly lastHost: string;
  readonly netmask: string;
  readonly wildcard: string;
  readonly totalHosts: number;
  readonly usableHosts: number;
  readonly error: string | null;
}

const EMPTY: SubnetResult = {
  cidr: "", network: "", broadcast: "", firstHost: "", lastHost: "",
  netmask: "", wildcard: "", totalHosts: 0, usableHosts: 0, error: null,
};

function intToIp(n: number): string {
  return [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff].join(".");
}

function ipToInt(ip: string): number | null {
  const parts = ip.split(".");
  if (parts.length !== 4) return null;
  let acc = 0;
  for (const p of parts) {
    if (!/^\d{1,3}$/.test(p)) return null;
    const n = Number(p);
    if (n > 255) return null;
    acc = (acc << 8) | n;
  }
  return acc >>> 0;
}

/** Parse "a.b.c.d/n" and derive network, broadcast, host range, mask and counts. */
export function calculateSubnet(input: string): SubnetResult {
  const trimmed = input.trim();
  if (!trimmed) return EMPTY;

  const match = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\/(\d{1,2})$/.exec(trimmed);
  if (!match) return { ...EMPTY, error: "Use the format a.b.c.d/n (e.g. 192.168.1.0/24)." };

  const prefix = Number(match[2]);
  if (prefix < 0 || prefix > 32) return { ...EMPTY, error: "Prefix length must be between 0 and 32." };

  const ipInt = ipToInt(match[1]!);
  if (ipInt === null) return { ...EMPTY, error: "Each octet must be 0–255." };

  const mask = prefix === 0 ? 0 : ((0xffffffff << (32 - prefix)) >>> 0);
  const network = (ipInt & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  const totalHosts = prefix >= 31 ? 1 << (32 - prefix) : (1 << (32 - prefix)) >>> 0;
  const usableHosts = prefix === 32 ? 1 : prefix === 31 ? 2 : Math.max(0, totalHosts - 2);

  return {
    cidr: `${intToIp(network)}/${prefix}`,
    network: intToIp(network),
    broadcast: intToIp(broadcast),
    firstHost: prefix >= 31 ? intToIp(network) : intToIp(network + 1),
    lastHost: prefix >= 31 ? intToIp(broadcast) : intToIp(broadcast - 1),
    netmask: intToIp(mask),
    wildcard: intToIp(~mask >>> 0),
    totalHosts,
    usableHosts,
    error: null,
  };
}
