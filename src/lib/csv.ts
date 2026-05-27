/**
 * CSV parsing + dataset utilities used by data-analysis tools.
 *
 * Built on papaparse. Returns rows as objects keyed by header, plus
 * a column index for fast lookup. Auto-detects numeric vs. string columns.
 */

import Papa from "papaparse";

export interface ParsedColumn {
  readonly name: string;
  /** Raw string values (untrimmed) preserved for non-numeric columns. */
  readonly raw: ReadonlyArray<string>;
  /** Numeric values if column is detected as numeric — otherwise null array. */
  readonly numeric: ReadonlyArray<number | null>;
  readonly isNumeric: boolean;
  readonly nullCount: number;
}

export interface ParsedDataset {
  readonly headers: ReadonlyArray<string>;
  readonly rowCount: number;
  readonly columns: ReadonlyArray<ParsedColumn>;
  /** Get a column by name. */
  readonly byName: (name: string) => ParsedColumn | undefined;
  /** Original row-major records (for export or raw display). */
  readonly rows: ReadonlyArray<Readonly<Record<string, string>>>;
}

export interface ParseOptions {
  readonly hasHeader?: boolean;
  readonly delimiter?: string;
}

/** Parse a CSV string into a typed dataset. */
export function parseCsv(input: string, opts: ParseOptions = {}): ParsedDataset {
  const { hasHeader = true, delimiter } = opts;

  const result = Papa.parse<Record<string, string>>(input.trim(), {
    header: hasHeader,
    skipEmptyLines: "greedy",
    delimiter: delimiter ?? "",
    dynamicTyping: false,
    transformHeader: (h) => h.trim(),
  });

  // PapaParse emits non-fatal warnings (notably code: "UndetectableDelimiter"
  // when auto-detection falls back to ","). It still produces valid rows in
  // that case — only throw if no rows came out, otherwise treat warnings as
  // best-effort and proceed.
  if (result.errors.length > 0 && (!result.data || result.data.length === 0)) {
    const first = result.errors[0]!;
    throw new Error(`CSV parse error: ${first.message}`);
  }

  let rows: Array<Record<string, string>>;
  let headers: string[];

  if (hasHeader) {
    rows = result.data as Array<Record<string, string>>;
    headers = result.meta.fields ?? [];
  } else {
    // No header — fabricate headers col1, col2, ...
    const matrix = result.data as unknown as string[][];
    if (matrix.length === 0) {
      headers = [];
      rows = [];
    } else {
      const colCount = Math.max(...matrix.map((r) => r.length));
      headers = Array.from({ length: colCount }, (_, i) => `col${i + 1}`);
      rows = matrix.map((r) => {
        const obj: Record<string, string> = {};
        headers.forEach((h, i) => {
          obj[h] = (r[i] ?? "").toString();
        });
        return obj;
      });
    }
  }

  const columns: ParsedColumn[] = headers.map((name) => {
    const raw = rows.map((r) => (r[name] ?? "").toString());
    const numeric = raw.map((v) => parseNumericCell(v));
    const nonNullNumeric = numeric.filter((n) => n !== null).length;
    const nonEmpty = raw.filter((v) => v.trim() !== "").length;
    // Column is numeric if ≥80% of non-empty cells parse as numbers.
    const isNumeric = nonEmpty > 0 && nonNullNumeric / nonEmpty >= 0.8;
    const nullCount = raw.filter((v) => v.trim() === "").length;
    return { name, raw, numeric, isNumeric, nullCount };
  });

  const byNameMap = new Map(columns.map((c) => [c.name, c]));

  return {
    headers,
    rowCount: rows.length,
    columns,
    rows,
    byName: (name: string) => byNameMap.get(name),
  };
}

/** Parse a single cell as number, treating empty/non-numeric as null. */
export function parseNumericCell(s: string): number | null {
  const trimmed = s.trim();
  if (trimmed === "" || trimmed === "NA" || trimmed === "N/A" || trimmed === "null" || trimmed === "NaN") {
    return null;
  }
  // Accept "1,234.56" (US) or "1.234,56" (EU)
  let normalized = trimmed;
  if (/^-?\d{1,3}(\.\d{3})+,\d+$/.test(trimmed)) {
    // EU style with thousands separator
    normalized = trimmed.replace(/\./g, "").replace(",", ".");
  } else {
    // Drop US thousands separators
    normalized = trimmed.replace(/,/g, "");
  }
  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}

/** Get only the non-null numeric values from a column (for stats). */
export function numericValues(col: ParsedColumn): number[] {
  return col.numeric.filter((n): n is number => n !== null);
}

/** Compute a tiny "schema preview" string for the user. */
export function describeDataset(ds: ParsedDataset): string {
  const numCols = ds.columns.filter((c) => c.isNumeric).length;
  return `${ds.rowCount} rows × ${ds.headers.length} columns (${numCols} numeric)`;
}
