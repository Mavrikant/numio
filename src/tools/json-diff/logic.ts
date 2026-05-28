export type JsonDiff =
  | { readonly kind: "added"; readonly path: string; readonly value: unknown }
  | { readonly kind: "removed"; readonly path: string; readonly value: unknown }
  | { readonly kind: "changed"; readonly path: string; readonly left: unknown; readonly right: unknown };

export interface DiffResult {
  readonly diffs: JsonDiff[];
  readonly error: string | null;
}

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);

function isEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => isEqual(v, b[i]));
  }
  if (isObject(a) && isObject(b)) {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const k of keys) if (!isEqual(a[k], b[k])) return false;
    return true;
  }
  return false;
}

function walk(left: unknown, right: unknown, path: string, out: JsonDiff[]): void {
  if (isEqual(left, right)) return;

  if (isObject(left) && isObject(right)) {
    const keys = new Set([...Object.keys(left), ...Object.keys(right)]);
    for (const k of keys) {
      const childPath = path ? `${path}.${k}` : k;
      if (!(k in left)) out.push({ kind: "added", path: childPath, value: right[k] });
      else if (!(k in right)) out.push({ kind: "removed", path: childPath, value: left[k] });
      else walk(left[k], right[k], childPath, out);
    }
    return;
  }

  if (Array.isArray(left) && Array.isArray(right)) {
    const max = Math.max(left.length, right.length);
    for (let i = 0; i < max; i++) {
      const childPath = `${path}[${i}]`;
      if (i >= left.length) out.push({ kind: "added", path: childPath, value: right[i] });
      else if (i >= right.length) out.push({ kind: "removed", path: childPath, value: left[i] });
      else walk(left[i], right[i], childPath, out);
    }
    return;
  }

  out.push({ kind: "changed", path: path || "(root)", left, right });
}

/** Compute a structural diff between two JSON strings. */
export function diffJson(leftSrc: string, rightSrc: string): DiffResult {
  if (!leftSrc.trim() && !rightSrc.trim()) return { diffs: [], error: null };
  let left: unknown, right: unknown;
  try {
    left = JSON.parse(leftSrc || "null");
    right = JSON.parse(rightSrc || "null");
  } catch (e) {
    return { diffs: [], error: e instanceof Error ? e.message : "Invalid JSON." };
  }
  const diffs: JsonDiff[] = [];
  walk(left, right, "", diffs);
  return { diffs, error: null };
}
