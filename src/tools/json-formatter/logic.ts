/** Pretty-print JSON with the given indent. Throws SyntaxError on invalid JSON. */
export function formatJson(text: string, indent: number | "\t"): string {
  const parsed = JSON.parse(text);
  return JSON.stringify(parsed, null, indent);
}

/** Collapse JSON to a single line. Throws SyntaxError on invalid JSON. */
export function minifyJson(text: string): string {
  return JSON.stringify(JSON.parse(text));
}
