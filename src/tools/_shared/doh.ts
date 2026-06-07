/**
 * Shared DNS-over-HTTPS client (Cloudflare) reused by the DNS/email-auth tools
 * (SPF, DMARC, DKIM, BIMI, DNS health) and the DNS lookup tool. Runs entirely
 * from the browser — no backend — using Cloudflare's public DoH JSON endpoint.
 */

export interface DohAnswer {
  readonly name: string;
  readonly type: number;
  readonly TTL: number;
  readonly data: string;
}

export interface DohResult {
  readonly answers: DohAnswer[];
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
export async function dohQuery(name: string, type: string, signal?: AbortSignal): Promise<DohResult> {
  if (!name.trim()) return { answers: [], status: "", error: null };
  const url = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name.trim())}&type=${encodeURIComponent(type)}`;
  try {
    const res = await fetch(url, { headers: { accept: "application/dns-json" }, signal });
    if (!res.ok) return { answers: [], status: "", error: `Cloudflare returned HTTP ${res.status}.` };
    const body = (await res.json()) as { Status: number; Answer?: DohAnswer[] };
    return {
      answers: body.Answer ?? [],
      status: STATUS[body.Status] ?? `Status ${body.Status}`,
      error: null,
    };
  } catch (e) {
    if (e instanceof DOMException && e.name === "AbortError") {
      return { answers: [], status: "", error: null };
    }
    return { answers: [], status: "", error: e instanceof Error ? e.message : "DNS query failed." };
  }
}

/**
 * Fetch the TXT records for a name and return them as clean strings: DoH returns
 * TXT data wrapped in quotes and split into 255-byte chunks (e.g. `"a" "b"`),
 * so we strip the quotes and join the chunks back together.
 */
export async function txtRecords(name: string, signal?: AbortSignal): Promise<{ records: string[]; error: string | null }> {
  const r = await dohQuery(name, "TXT", signal);
  if (r.error) return { records: [], error: r.error };
  const records = r.answers
    .filter((a) => a.type === 16)
    .map((a) =>
      a.data
        .split(/"\s+"/)
        .map((part) => part.replace(/^"|"$/g, ""))
        .join("")
        .replace(/^"|"$/g, ""),
    );
  return { records, error: null };
}
