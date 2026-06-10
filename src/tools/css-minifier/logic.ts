const NUL = String.fromCharCode(0);

/**
 * Minify CSS: strip comments and collapse whitespace, including around the
 * common delimiters. String literals are preserved verbatim, and whitespace
 * around `+`/`-` is kept so `calc()` expressions stay valid. Intentionally
 * simple — handles typical stylesheets, not every edge case of the grammar.
 */
export function minifyCss(css: string): string {
  // Stash string literals so their contents survive the whitespace passes.
  const strings: string[] = [];
  const stashed = css.replace(/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'/g, (m) => {
    strings.push(m);
    return `${NUL}${strings.length - 1}${NUL}`;
  });
  const min = stashed
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>~])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
  return min.replace(new RegExp(`${NUL}(\\d+)${NUL}`, "g"), (_, i) => strings[Number(i)]!);
}
