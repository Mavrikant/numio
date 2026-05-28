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

/** Build a minimal vCard 3.0 string suitable for encoding as a QR code. */
export function buildVCardString(fields: VCardFields): string {
  if (!fields.name && !fields.phone && !fields.email) return "";
  const lines = ["BEGIN:VCARD", "VERSION:3.0"];
  if (fields.name) lines.push(`FN:${fields.name}`);
  if (fields.phone) lines.push(`TEL:${fields.phone}`);
  if (fields.email) lines.push(`EMAIL:${fields.email}`);
  if (fields.org) lines.push(`ORG:${fields.org}`);
  if (fields.url) lines.push(`URL:${fields.url}`);
  lines.push("END:VCARD");
  return lines.join("\n");
}
