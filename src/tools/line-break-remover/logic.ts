export type BreakMode = "spaces" | "remove" | "paragraphs";

/**
 * Remove line breaks from text.
 *  - spaces:     every break becomes a single space
 *  - remove:     breaks are deleted with nothing in between
 *  - paragraphs: single breaks become spaces, blank-line paragraph gaps are kept
 */
export function removeLineBreaks(text: string, mode: BreakMode): string {
  if (mode === "remove") return text.replace(/\r?\n/g, "");
  if (mode === "spaces") return text.replace(/\r?\n/g, " ").replace(/ {2,}/g, " ").trim();
  return text
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.replace(/\r?\n/g, " ").replace(/ {2,}/g, " ").trim())
    .filter((p) => p !== "")
    .join("\n\n");
}
