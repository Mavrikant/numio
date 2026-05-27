export interface ReplaceOptions {
  readonly caseInsensitive: boolean;
  readonly regex: boolean;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Replace all occurrences of `find` in `text`. In regex mode `find` is treated
 * as a pattern (and `$1` etc. work in the replacement); otherwise it is matched
 * literally. Throws on an invalid regex pattern.
 */
export function findReplace(text: string, find: string, replace: string, opts: ReplaceOptions): string {
  if (find === "") return text;
  const flags = "g" + (opts.caseInsensitive ? "i" : "");
  if (opts.regex) {
    return text.replace(new RegExp(find, flags), replace);
  }
  return text.replace(new RegExp(escapeRegExp(find), flags), () => replace);
}

/** Count how many matches `find` has in `text`. Throws on invalid regex. */
export function countMatches(text: string, find: string, opts: ReplaceOptions): number {
  if (find === "") return 0;
  const flags = "g" + (opts.caseInsensitive ? "i" : "");
  const re = opts.regex ? new RegExp(find, flags) : new RegExp(escapeRegExp(find), flags);
  return (text.match(re) ?? []).length;
}
