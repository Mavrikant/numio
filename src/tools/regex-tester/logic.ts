export interface RegexMatch {
  readonly match: string;
  readonly index: number;
  readonly groups: ReadonlyArray<string | undefined>;
}

/**
 * Run `pattern` (with `flags`) over `text` and return all matches. The global
 * flag is added automatically so every occurrence is found. Throws on an
 * invalid pattern or flags.
 */
export function getMatches(pattern: string, flags: string, text: string): RegexMatch[] {
  if (pattern === "") return [];
  const g = flags.includes("g") ? flags : flags + "g";
  const re = new RegExp(pattern, g);
  const out: RegexMatch[] = [];
  for (const m of text.matchAll(re)) {
    out.push({ match: m[0], index: m.index ?? 0, groups: m.slice(1) });
    if (out.length > 10000) break;
  }
  return out;
}
