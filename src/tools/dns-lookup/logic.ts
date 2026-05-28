export const RECORD_TYPES = ["A", "AAAA", "MX", "TXT", "CNAME", "NS", "SOA", "CAA", "PTR"] as const;
export type RecordType = (typeof RECORD_TYPES)[number];

export interface DnsAnswer {
  readonly name: string;
  readonly type: number;
  readonly TTL: number;
  readonly data: string;
}

export interface DnsResult {
  readonly answers: DnsAnswer[];
  readonly status: string;
  readonly error: string | null;
}

const STATUS: Record<number, string> = {
  0: "NOERROR",
  1: "FORMERR",
  2: "SERVFAIL",
  3: "NXDOMAIN",
  4: "NOTIMP",
  5: "REFUSED",
};

/** Query Cloudflare's DNS-over-HTTPS endpoint for the given name and record type. */
export async function dohQuery(name: string, type: RecordType, signal?: AbortSignal): Promise<DnsResult> {
  if (!name.trim()) return { answers: [], status: "", error: null };
  const url = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name.trim())}&type=${type}`;
  try {
    const res = await fetch(url, { headers: { accept: "application/dns-json" }, signal });
    if (!res.ok) return { answers: [], status: "", error: `Cloudflare returned HTTP ${res.status}.` };
    const body = (await res.json()) as { Status: number; Answer?: DnsAnswer[] };
    return {
      answers: body.Answer ?? [],
      status: STATUS[body.Status] ?? `Status ${body.Status}`,
      error: null,
    };
  } catch (e) {
    return { answers: [], status: "", error: e instanceof Error ? e.message : "DNS query failed." };
  }
}
