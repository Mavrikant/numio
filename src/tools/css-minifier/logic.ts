/**
 * Minify CSS: strip comments and collapse whitespace, including around the
 * common delimiters. Intentionally simple — handles typical stylesheets, not
 * every edge case of the full CSS grammar.
 */
export function minifyCss(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>~+])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}
