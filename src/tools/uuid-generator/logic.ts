/** Apply display options to a canonical UUID string. */
export function formatUuid(uuid: string, uppercase: boolean, hyphens: boolean): string {
  const s = hyphens ? uuid : uuid.replace(/-/g, "");
  return uppercase ? s.toUpperCase() : s.toLowerCase();
}

/** Whether a string is a canonical v4-shaped UUID. */
export function isUuid(s: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s);
}
