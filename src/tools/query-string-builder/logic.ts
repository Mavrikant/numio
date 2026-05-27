/**
 * Build a URL query string from "key=value" lines. Keys and values are
 * percent-encoded. Blank lines are skipped; a line with no "=" becomes a
 * valueless key.
 */
export function buildQueryString(text: string): string {
  const params = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l !== "")
    .map((l) => {
      const idx = l.indexOf("=");
      const key = idx < 0 ? l : l.slice(0, idx);
      const val = idx < 0 ? "" : l.slice(idx + 1);
      return `${encodeURIComponent(key.trim())}=${encodeURIComponent(val.trim())}`;
    });
  return params.length > 0 ? "?" + params.join("&") : "";
}
