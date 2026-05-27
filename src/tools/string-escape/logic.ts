/** Escape a string into a JSON/JS string body (without the surrounding quotes). */
export function escapeString(text: string): string {
  const json = JSON.stringify(text);
  return json.slice(1, -1);
}

/** Reverse of escapeString. Throws if the escape sequences are malformed. */
export function unescapeString(text: string): string {
  return JSON.parse(`"${text.replace(/\n/g, "\\n").replace(/\r/g, "\\r")}"`);
}
