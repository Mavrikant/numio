/**
 * Shared JSON fetch helper for the tools that call public, keyless, CORS-enabled
 * REST APIs (IP info / geolocation via ipwho.is, RDAP via rdap.org). Keeps each
 * Tool.tsx thin and centralises error handling + abort support.
 *
 * Endpoints used:
 *  - https://ipwho.is/            — IP + geolocation + ISP/ASN (keyless, CORS-ok)
 *  - https://api.ipify.org?format=json — raw IP fallback
 *  - https://rdap.org/{ip|autnum|domain}/… — RDAP bootstrap (redirects to registries)
 */

export interface FetchJsonResult<T> {
  readonly data: T | null;
  readonly error: string | null;
}

/** Fetch and parse a JSON document, never throwing — returns `{ data, error }`. */
export async function fetchJson<T>(url: string, signal?: AbortSignal): Promise<FetchJsonResult<T>> {
  try {
    const res = await fetch(url, { headers: { accept: "application/json" }, signal, redirect: "follow" });
    if (!res.ok) return { data: null, error: `Request failed (HTTP ${res.status}).` };
    const data = (await res.json()) as T;
    return { data, error: null };
  } catch (e) {
    if (e instanceof DOMException && e.name === "AbortError") return { data: null, error: null };
    return {
      data: null,
      error:
        e instanceof Error
          ? `Lookup unavailable: ${e.message}. The service may be rate-limited or blocked by your network.`
          : "Lookup unavailable.",
    };
  }
}

export const IPWHOIS_URL = "https://ipwho.is/";
export const IPIFY_URL = "https://api.ipify.org?format=json";
export const RDAP_BASE = "https://rdap.org";

/** Shape of the relevant fields returned by ipwho.is. */
export interface IpWhoIs {
  readonly ip: string;
  readonly success?: boolean;
  readonly message?: string;
  readonly type?: string;
  readonly continent?: string;
  readonly country?: string;
  readonly country_code?: string;
  readonly region?: string;
  readonly city?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly postal?: string;
  readonly timezone?: { id?: string; utc?: string };
  readonly connection?: { asn?: number; org?: string; isp?: string; domain?: string };
  readonly flag?: { emoji?: string };
}
