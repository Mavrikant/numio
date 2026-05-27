export interface LineOptions {
  readonly dedupe: boolean;
  readonly trim: boolean;
  readonly removeEmpty: boolean;
  readonly caseInsensitive: boolean;
  readonly sort: "none" | "asc" | "desc";
}

export function processLines(text: string, opts: LineOptions): string {
  let lines = text.split(/\r?\n/);
  if (opts.trim) lines = lines.map((l) => l.trim());
  if (opts.removeEmpty) lines = lines.filter((l) => l.trim() !== "");

  if (opts.dedupe) {
    const seen = new Set<string>();
    lines = lines.filter((l) => {
      const key = opts.caseInsensitive ? l.toLowerCase() : l;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  if (opts.sort !== "none") {
    const cmp = (a: string, b: string) => {
      const x = opts.caseInsensitive ? a.toLowerCase() : a;
      const y = opts.caseInsensitive ? b.toLowerCase() : b;
      return x < y ? -1 : x > y ? 1 : 0;
    };
    lines = [...lines].sort(cmp);
    if (opts.sort === "desc") lines.reverse();
  }

  return lines.join("\n");
}
