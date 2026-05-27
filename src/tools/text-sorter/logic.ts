export type SortMode = "alpha" | "length" | "numeric";

export interface SortOptions {
  readonly reverse: boolean;
  readonly caseInsensitive: boolean;
}

export function sortLines(text: string, mode: SortMode, opts: SortOptions): string {
  const lines = text.split(/\r?\n/);
  const cmp =
    mode === "length"
      ? (a: string, b: string) => a.length - b.length
      : mode === "numeric"
        ? (a: string, b: string) => (parseFloat(a) || 0) - (parseFloat(b) || 0)
        : (a: string, b: string) => {
            const x = opts.caseInsensitive ? a.toLowerCase() : a;
            const y = opts.caseInsensitive ? b.toLowerCase() : b;
            return x < y ? -1 : x > y ? 1 : 0;
          };
  const sorted = [...lines].sort(cmp);
  if (opts.reverse) sorted.reverse();
  return sorted.join("\n");
}
