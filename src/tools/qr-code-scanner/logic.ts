/**
 * Pure helpers for the QR scanner. The actual decoding (jsQR) and camera access
 * live in Tool.tsx; here we only classify the decoded string so the UI can offer
 * the right action (open a link, start an email, connect to WiFi, …).
 */

export type QrContentKind = "url" | "email" | "phone" | "wifi" | "geo" | "text";

export interface QrClassification {
  readonly kind: QrContentKind;
  /** A directly actionable href when the content maps to one (url/email/phone/geo). */
  readonly href?: string;
}

/** Classify a decoded QR payload into a content kind and (when possible) an actionable href. */
export function classifyQr(text: string): QrClassification {
  const t = text.trim();
  if (/^https?:\/\/\S+$/i.test(t)) return { kind: "url", href: t };
  if (/^mailto:/i.test(t)) return { kind: "email", href: t };
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return { kind: "email", href: `mailto:${t}` };
  if (/^tel:/i.test(t)) return { kind: "phone", href: t };
  if (/^WIFI:/i.test(t)) return { kind: "wifi" };
  if (/^geo:/i.test(t)) return { kind: "geo", href: t };
  return { kind: "text" };
}

export interface WifiCredentials {
  readonly ssid: string;
  readonly password: string;
  readonly encryption: string;
  readonly hidden: boolean;
}

/** Parse a `WIFI:T:WPA;S:ssid;P:pass;H:true;;` payload into its fields. */
export function parseWifi(text: string): WifiCredentials | null {
  if (!/^WIFI:/i.test(text.trim())) return null;
  const body = text.trim().replace(/^WIFI:/i, "");
  const get = (key: string): string => {
    const m = body.match(new RegExp(`(?:^|;)${key}:((?:\\\\.|[^;])*)`, "i"));
    return m ? m[1].replace(/\\(.)/g, "$1") : "";
  };
  return {
    ssid: get("S"),
    password: get("P"),
    encryption: get("T") || "nopass",
    hidden: /^true$/i.test(get("H")),
  };
}
