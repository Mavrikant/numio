export interface JsonToXmlResult {
  readonly output: string;
  readonly error: string | null;
}

const INDENT = "  ";

function escapeXml(text: string): string {
  return text.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!);
}

function sanitizeTag(name: string): string {
  const cleaned = name.replace(/[^\w.-]/g, "_");
  return /^[A-Za-z_]/.test(cleaned) ? cleaned : `_${cleaned}`;
}

/** Idiomatic repeated-element form: one `<tag>` per item. Nested arrays get a
 *  wrapping element so they can't silently flatten into the parent's items. */
function arrayItemsToXml(arr: unknown[], tag: string, depth: number): string {
  const pad = INDENT.repeat(depth);
  return arr
    .map((item) =>
      Array.isArray(item)
        ? item.length === 0
          ? `${pad}<${tag}/>`
          : `${pad}<${tag}>\n${arrayItemsToXml(item, "item", depth + 1)}\n${pad}</${tag}>`
        : valueToXml(item, tag, depth),
    )
    .join("\n");
}

function valueToXml(value: unknown, tag: string, depth: number): string {
  const pad = INDENT.repeat(depth);

  if (value === null || value === undefined) return `${pad}<${tag}/>`;

  if (Array.isArray(value)) {
    if (value.length === 0) return `${pad}<${tag}/>`;
    return arrayItemsToXml(value, tag, depth);
  }

  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return `${pad}<${tag}/>`;
    const inner = entries.map(([k, v]) => valueToXml(v, sanitizeTag(k), depth + 1)).join("\n");
    return `${pad}<${tag}>\n${inner}\n${pad}</${tag}>`;
  }

  return `${pad}<${tag}>${escapeXml(String(value))}</${tag}>`;
}

/** Convert a JSON string to XML. The root element is named `root`. */
export function jsonToXml(input: string): JsonToXmlResult {
  const src = input.trim();
  if (!src) return { output: "", error: null };

  let parsed: unknown;
  try {
    parsed = JSON.parse(src);
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : "Invalid JSON." };
  }

  // A root array must still produce a single root element.
  const body = Array.isArray(parsed)
    ? parsed.length === 0
      ? "<root/>"
      : `<root>\n${arrayItemsToXml(parsed, "item", 1)}\n</root>`
    : valueToXml(parsed, "root", 0);
  return { output: `<?xml version="1.0" encoding="UTF-8"?>\n${body}`, error: null };
}
