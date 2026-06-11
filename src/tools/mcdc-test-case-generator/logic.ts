/**
 * MC/DC (Modified Condition/Decision Coverage) test-case generator.
 *
 * Given a boolean decision such as `A && (B || C)`, this module:
 *   1. parses the expression into an AST,
 *   2. builds the full truth table over every condition combination,
 *   3. finds, for each condition, the unique-cause independence pairs — two
 *      rows that differ in only that one condition yet flip the decision, and
 *   4. greedily selects a minimal set of test rows that proves independence
 *      for every condition (ideally n+1 tests for n conditions).
 *
 * Everything here is pure and UI-free so it can be unit-tested directly.
 */

export type Ast =
  | { readonly type: "var"; readonly name: string }
  | { readonly type: "not"; readonly arg: Ast }
  | { readonly type: "and"; readonly left: Ast; readonly right: Ast }
  | { readonly type: "or"; readonly left: Ast; readonly right: Ast };

type Token =
  | { readonly kind: "and" }
  | { readonly kind: "or" }
  | { readonly kind: "not" }
  | { readonly kind: "lparen" }
  | { readonly kind: "rparen" }
  | { readonly kind: "var"; readonly name: string };

const KEYWORDS: Record<string, Token["kind"]> = {
  AND: "and",
  OR: "or",
  NOT: "not",
};

/** Split the source into tokens, accepting both symbol and word operators. */
function tokenize(src: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (/\s/.test(ch)) {
      i += 1;
      continue;
    }
    if (ch === "(") {
      tokens.push({ kind: "lparen" });
      i += 1;
      continue;
    }
    if (ch === ")") {
      tokens.push({ kind: "rparen" });
      i += 1;
      continue;
    }
    if (ch === "&") {
      i += src[i + 1] === "&" ? 2 : 1;
      tokens.push({ kind: "and" });
      continue;
    }
    if (ch === "|") {
      i += src[i + 1] === "|" ? 2 : 1;
      tokens.push({ kind: "or" });
      continue;
    }
    if (ch === "!" || ch === "~") {
      tokens.push({ kind: "not" });
      i += 1;
      continue;
    }
    if (/[A-Za-z_]/.test(ch)) {
      let j = i + 1;
      while (j < src.length && /[A-Za-z0-9_]/.test(src[j])) j += 1;
      const word = src.slice(i, j);
      const kw = KEYWORDS[word.toUpperCase()];
      tokens.push(kw ? ({ kind: kw } as Token) : { kind: "var", name: word });
      i = j;
      continue;
    }
    throw new Error(`Unexpected character "${ch}" at position ${i}`);
  }
  return tokens;
}

/**
 * Recursive-descent parser. Precedence (tightest first): NOT > AND > OR.
 */
export function parseExpression(src: string): Ast {
  const tokens = tokenize(src);
  if (tokens.length === 0) throw new Error("Expression is empty");
  let pos = 0;

  const peek = (): Token | undefined => tokens[pos];
  const next = (): Token => {
    const t = tokens[pos];
    if (!t) throw new Error("Unexpected end of expression");
    pos += 1;
    return t;
  };

  const parsePrimary = (): Ast => {
    const t = next();
    if (t.kind === "not") return { type: "not", arg: parsePrimary() };
    if (t.kind === "lparen") {
      const inner = parseOr();
      const close = next();
      if (close.kind !== "rparen") throw new Error("Expected closing parenthesis");
      return inner;
    }
    if (t.kind === "var") return { type: "var", name: t.name };
    throw new Error(`Unexpected token "${t.kind}"`);
  };

  const parseAnd = (): Ast => {
    let left = parsePrimary();
    while (peek()?.kind === "and") {
      next();
      left = { type: "and", left, right: parsePrimary() };
    }
    return left;
  };

  function parseOr(): Ast {
    let left = parseAnd();
    while (peek()?.kind === "or") {
      next();
      left = { type: "or", left, right: parseAnd() };
    }
    return left;
  }

  const ast = parseOr();
  if (pos !== tokens.length) throw new Error("Unexpected trailing input");
  return ast;
}

/** Distinct condition names in first-appearance (left-to-right) order. */
export function extractConditions(ast: Ast): string[] {
  const order: string[] = [];
  const seen = new Set<string>();
  const walk = (node: Ast): void => {
    switch (node.type) {
      case "var":
        if (!seen.has(node.name)) {
          seen.add(node.name);
          order.push(node.name);
        }
        break;
      case "not":
        walk(node.arg);
        break;
      default:
        walk(node.left);
        walk(node.right);
    }
  };
  walk(ast);
  return order;
}

export function evaluate(ast: Ast, env: Record<string, boolean>): boolean {
  switch (ast.type) {
    case "var":
      return env[ast.name] ?? false;
    case "not":
      return !evaluate(ast.arg, env);
    case "and":
      return evaluate(ast.left, env) && evaluate(ast.right, env);
    case "or":
      return evaluate(ast.left, env) || evaluate(ast.right, env);
  }
}

export interface TruthRow {
  /** Condition values aligned to the `conditions` array order. */
  readonly values: readonly boolean[];
  readonly decision: boolean;
}

/** Bit value of condition `j` (0-indexed, condition 0 is most significant). */
function bitAt(row: number, j: number, n: number): boolean {
  return ((row >> (n - 1 - j)) & 1) === 1;
}

export function buildTruthTable(ast: Ast, conditions: readonly string[]): TruthRow[] {
  const n = conditions.length;
  const rows: TruthRow[] = [];
  for (let r = 0; r < 1 << n; r += 1) {
    const env: Record<string, boolean> = {};
    const values: boolean[] = [];
    for (let j = 0; j < n; j += 1) {
      const v = bitAt(r, j, n);
      values.push(v);
      env[conditions[j]] = v;
    }
    rows.push({ values, decision: evaluate(ast, env) });
  }
  return rows;
}

export interface IndependencePair {
  /** Truth-table row index where this condition is false. */
  readonly rowFalse: number;
  /** Truth-table row index where this condition is true (else identical). */
  readonly rowTrue: number;
}

/**
 * Unique-cause MC/DC pairs per condition: rows that differ in only that one
 * condition and produce a different decision. `pairs[k]` is the list for
 * condition `k`.
 */
export function findIndependencePairs(
  rows: readonly TruthRow[],
  conditions: readonly string[],
): IndependencePair[][] {
  const n = conditions.length;
  return conditions.map((_, k) => {
    const mask = 1 << (n - 1 - k);
    const pairs: IndependencePair[] = [];
    for (let r = 0; r < rows.length; r += 1) {
      if ((r & mask) !== 0) continue; // only iterate the condition-false rows
      const partner = r | mask;
      if (rows[r].decision !== rows[partner].decision) {
        pairs.push({ rowFalse: r, rowTrue: partner });
      }
    }
    return pairs;
  });
}

export interface McdcAnalysis {
  readonly conditions: readonly string[];
  readonly truthTable: readonly TruthRow[];
  /** Independence pairs per condition (same index order as `conditions`). */
  readonly pairs: readonly IndependencePair[][];
  /** Whether each condition has at least one independence pair. */
  readonly achievable: readonly boolean[];
  /** True when every condition is independently demonstrable. */
  readonly fullyAchievable: boolean;
  /** Row indices forming a minimal MC/DC-satisfying test set (sorted). */
  readonly minimalRows: readonly number[];
  /** The pair used to prove each condition in the minimal set (or null). */
  readonly provingPair: readonly (IndependencePair | null)[];
}

/**
 * Greedily choose a near-minimal set of rows covering one independence pair
 * for every condition, reusing already-selected rows where possible. For
 * well-formed decisions this yields the optimal n+1 tests.
 */
function selectMinimalSet(
  pairs: readonly IndependencePair[][],
): { rows: number[]; provingPair: (IndependencePair | null)[] } {
  const selected = new Set<number>();
  const provingPair: (IndependencePair | null)[] = pairs.map(() => null);

  pairs.forEach((conditionPairs, k) => {
    if (conditionPairs.length === 0) return;
    // Already satisfied if some pair has both rows selected.
    const covered = conditionPairs.find((p) => selected.has(p.rowFalse) && selected.has(p.rowTrue));
    if (covered) {
      provingPair[k] = covered;
      return;
    }
    // Otherwise pick the pair adding the fewest new rows.
    let best = conditionPairs[0];
    let bestCost = Infinity;
    for (const p of conditionPairs) {
      const cost = (selected.has(p.rowFalse) ? 0 : 1) + (selected.has(p.rowTrue) ? 0 : 1);
      if (cost < bestCost) {
        bestCost = cost;
        best = p;
      }
    }
    selected.add(best.rowFalse);
    selected.add(best.rowTrue);
    provingPair[k] = best;
  });

  return { rows: [...selected].sort((a, b) => a - b), provingPair };
}

/** Maximum number of distinct conditions before the 2^n table is refused. */
export const MAX_CONDITIONS = 10;

export type McdcError =
  | { readonly kind: "parse"; readonly message: string }
  | { readonly kind: "no-conditions" }
  | { readonly kind: "too-many"; readonly count: number };

export type McdcResult = { readonly ok: true; readonly analysis: McdcAnalysis } | { readonly ok: false; readonly error: McdcError };

/** Parse + analyze an expression, returning a tagged result (never throws). */
export function analyzeMcdc(src: string): McdcResult {
  let ast: Ast;
  try {
    ast = parseExpression(src);
  } catch (e) {
    return { ok: false, error: { kind: "parse", message: e instanceof Error ? e.message : String(e) } };
  }

  const conditions = extractConditions(ast);
  if (conditions.length === 0) return { ok: false, error: { kind: "no-conditions" } };
  if (conditions.length > MAX_CONDITIONS) {
    return { ok: false, error: { kind: "too-many", count: conditions.length } };
  }

  const truthTable = buildTruthTable(ast, conditions);
  const pairs = findIndependencePairs(truthTable, conditions);
  const achievable = pairs.map((p) => p.length > 0);
  const { rows: minimalRows, provingPair } = selectMinimalSet(pairs);

  return {
    ok: true,
    analysis: {
      conditions,
      truthTable,
      pairs,
      achievable,
      fullyAchievable: achievable.every(Boolean),
      minimalRows,
      provingPair,
    },
  };
}

/** Render the minimal test set as a CSV-ish block for the copy button. */
export function formatMinimalSet(analysis: McdcAnalysis): string {
  const header = [...analysis.conditions, "Decision"].join(",");
  const lines = analysis.minimalRows.map((r) => {
    const row = analysis.truthTable[r];
    return [...row.values, row.decision].map((v) => (v ? "T" : "F")).join(",");
  });
  return [header, ...lines].join("\n");
}
