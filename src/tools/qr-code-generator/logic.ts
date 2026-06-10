export type WifiEncryption = "WPA" | "WEP" | "nopass";

export interface VCardFields {
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly org: string;
  readonly url: string;
}

const esc = (s: string): string => s.replace(/([\\;,":])/g, "\\$1");

/** Build the WiFi network string format encoded as a QR for "WIFI:T:WPA;S:ssid;P:pass;;". */
export function buildWifiString(ssid: string, password: string, encryption: WifiEncryption, hidden: boolean): string {
  if (!ssid) return "";
  const parts = [`T:${encryption}`, `S:${esc(ssid)}`];
  if (encryption !== "nopass") parts.push(`P:${esc(password)}`);
  if (hidden) parts.push("H:true");
  return `WIFI:${parts.join(";")};;`;
}

/** Escape a vCard 3.0 text value per RFC 2426: backslash, semicolon, comma, newline. */
const vesc = (s: string): string =>
  s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");

/** Build a minimal vCard 3.0 string suitable for encoding as a QR code. */
export function buildVCardString(fields: VCardFields): string {
  if (!fields.name && !fields.phone && !fields.email) return "";
  const lines = ["BEGIN:VCARD", "VERSION:3.0"];
  if (fields.name) lines.push(`FN:${vesc(fields.name)}`);
  if (fields.phone) lines.push(`TEL:${vesc(fields.phone)}`);
  if (fields.email) lines.push(`EMAIL:${vesc(fields.email)}`);
  if (fields.org) lines.push(`ORG:${vesc(fields.org)}`);
  if (fields.url) lines.push(`URL:${vesc(fields.url)}`);
  lines.push("END:VCARD");
  return lines.join("\n");
}
