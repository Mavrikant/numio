/** Parse CSV text into rows of fields, honoring quoted fields and escaped quotes. */
export function parseCsv(text: string, delimiter = ","): string[][] {
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
  // Distinguishes a truly blank line (skipped) from a record like `""`
  // (a legitimate one-column empty field, kept).
  let rowHasData = false;
  const src = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  for (let i = 0; i < src.length; i++) {
    const c = src[i]!;
    if (inQuotes) {
      if (c === '"') {
        if (src[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
      rowHasData = true;
    } else if (c === delimiter) {
      row.push(field);
      field = "";
      rowHasData = true;
    } else if (c === "\n") {
      if (rowHasData) {
        row.push(field);
        rows.push(row);
      }
      row = [];
      field = "";
      rowHasData = false;
    } else {
      field += c;
      rowHasData = true;
    }
  }
  if (rowHasData) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

/** Convert CSV to pretty-printed JSON (array of objects, or array of arrays). */
export function csvToJson(csv: string, header: boolean, delimiter = ","): string {
  const rows = parseCsv(csv, delimiter);
  if (rows.length === 0) return "[]";
  if (!header) return JSON.stringify(rows, null, 2);
  const keys = rows[0]!;
  const objs = rows.slice(1).map((r) => {
    const o: Record<string, string> = {};
    keys.forEach((k, i) => (o[k] = r[i] ?? ""));
    return o;
  });
  return JSON.stringify(objs, null, 2);
}
