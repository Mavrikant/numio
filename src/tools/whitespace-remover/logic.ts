export interface WhitespaceOptions {
  readonly trimLines: boolean;
  readonly collapseSpaces: boolean;
  readonly removeBlankLines: boolean;
  readonly removeAllSpaces: boolean;
}

export function cleanWhitespace(text: string, o: WhitespaceOptions): string {
  if (o.removeAllSpaces) return text.replace(/\s+/g, "");

  let lines = text.split(/\r?\n/).map((line) => {
    let s = line;
    if (o.collapseSpaces) s = s.replace(/[^\S\n]+/g, " ");
    if (o.trimLines) s = s.trim();
    return s;
  });

  if (o.removeBlankLines) lines = lines.filter((l) => l.trim() !== "");
  return lines.join("\n");
}
