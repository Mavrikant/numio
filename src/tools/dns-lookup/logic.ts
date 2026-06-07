import { dohQuery as sharedDohQuery, type DohAnswer, type DohResult } from "../_shared/doh";

export const RECORD_TYPES = ["A", "AAAA", "MX", "TXT", "CNAME", "NS", "SOA", "CAA", "PTR", "SRV", "DNSKEY", "DS"] as const;
export type RecordType = (typeof RECORD_TYPES)[number];

export type DnsAnswer = DohAnswer;
export type DnsResult = DohResult;

/** Query Cloudflare's DNS-over-HTTPS endpoint for the given name and record type. */
export function dohQuery(name: string, type: RecordType, signal?: AbortSignal): Promise<DnsResult> {
  return sharedDohQuery(name, type, signal);
}
