function escapeField(value: unknown): string {
  const s =
    value === null || value === undefined
      ? ""
      : typeof value === "object"
        ? JSON.stringify(value)
        : String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/**
 * Convert a JSON array of objects to CSV. The header is the union of all keys.
 * Throws if the JSON is invalid or not an array of objects.
 */
export function jsonToCsv(jsonStr: string, delimiter = ","): string {
  const data = JSON.parse(jsonStr);
  if (!Array.isArray(data)) throw new Error("Expected a JSON array");
  if (data.length === 0) return "";

  const keys: string[] = [];
  for (const row of data) {
    if (typeof row !== "object" || row === null || Array.isArray(row)) {
      throw new Error("Expected an array of objects");
    }
    for (const k of Object.keys(row)) if (!keys.includes(k)) keys.push(k);
  }

  const lines = [keys.map(escapeField).join(delimiter)];
  for (const row of data as Record<string, unknown>[]) {
    lines.push(keys.map((k) => escapeField(row[k])).join(delimiter));
  }
  return lines.join("\n");
}
