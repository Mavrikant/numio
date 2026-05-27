export type DiffType = "eq" | "add" | "del";
export interface DiffOp {
  readonly type: DiffType;
  readonly value: string;
}

/**
 * Line-level diff between two texts using a longest-common-subsequence walk.
 * Returns a sequence of equal/added/removed lines (old → new).
 */
export function diffLines(a: string, b: string): DiffOp[] {
  const A = a.split(/\r?\n/);
  const B = b.split(/\r?\n/);
  const m = A.length;
  const n = B.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i]![j] = A[i] === B[j] ? dp[i + 1]![j + 1]! + 1 : Math.max(dp[i + 1]![j]!, dp[i]![j + 1]!);
    }
  }

  const ops: DiffOp[] = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (A[i] === B[j]) {
      ops.push({ type: "eq", value: A[i]! });
      i++;
      j++;
    } else if (dp[i + 1]![j]! >= dp[i]![j + 1]!) {
      ops.push({ type: "del", value: A[i]! });
      i++;
    } else {
      ops.push({ type: "add", value: B[j]! });
      j++;
    }
  }
  while (i < m) ops.push({ type: "del", value: A[i++]! });
  while (j < n) ops.push({ type: "add", value: B[j++]! });
  return ops;
}

export function diffStats(ops: ReadonlyArray<DiffOp>): { added: number; removed: number } {
  let added = 0;
  let removed = 0;
  for (const op of ops) {
    if (op.type === "add") added++;
    else if (op.type === "del") removed++;
  }
  return { added, removed };
}
