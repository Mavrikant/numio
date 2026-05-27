/** Parse CSV text into rows of fields, honoring quoted fields and escaped quotes. */
export function parseCsv(text: string, delimiter = ","): string[][] {
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
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
    } else if (c === delimiter) {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => !(r.length === 1 && r[0] === ""));
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
