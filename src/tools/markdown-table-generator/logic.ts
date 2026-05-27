export type Align = "left" | "center" | "right";

/**
 * Build a GitHub-flavoured Markdown table from a 2D grid where the first row is
 * the header. Columns are padded to a uniform width for readable raw output.
 */
export function buildMarkdownTable(rows: string[][], align: Align[] = []): string {
  if (rows.length === 0) return "";
  const cols = Math.max(...rows.map((r) => r.length));
  const grid = rows.map((r) => Array.from({ length: cols }, (_, i) => (r[i] ?? "").trim()));

  const widths = Array.from({ length: cols }, (_, i) => Math.max(3, ...grid.map((r) => r[i]!.length)));

  const sep = (a: Align, w: number): string => {
    const dashes = "-".repeat(Math.max(1, w - (a === "center" ? 2 : a === "left" || a === "right" ? 1 : 0)));
    if (a === "center") return `:${dashes}:`;
    if (a === "right") return `${dashes}:`;
    if (a === "left") return `:${dashes}`;
    return "-".repeat(w);
  };

  const pad = (text: string, w: number): string => text + " ".repeat(w - text.length);
  const line = (cells: string[]) => `| ${cells.map((c, i) => pad(c, widths[i]!)).join(" | ")} |`;

  const header = line(grid[0]!);
  const divider = `| ${widths.map((w, i) => pad(sep(align[i] ?? "left", w), w)).join(" | ")} |`;
  const body = grid.slice(1).map(line);

  return [header, divider, ...body].join("\n");
}

/** Parse pasted tabular text (tab- or comma-separated) into a 2D string grid. */
export function parseGrid(input: string): string[][] {
  return input
    .split(/\r?\n/)
    .filter((l) => l.trim() !== "")
    .map((line) => (line.includes("\t") ? line.split("\t") : line.split(",")));
}
