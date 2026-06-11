import { describe, it, expect } from "vitest";
import {
  parseExpression,
  extractConditions,
  evaluate,
  buildTruthTable,
  findIndependencePairs,
  analyzeMcdc,
  formatMinimalSet,
  MAX_CONDITIONS,
} from "../logic";

describe("parseExpression", () => {
  it("parses symbol and word operators equivalently", () => {
    expect(parseExpression("A && B")).toEqual(parseExpression("A AND b".replace("b", "B")));
    expect(parseExpression("A || B")).toEqual(parseExpression("A OR B"));
    expect(parseExpression("!A")).toEqual(parseExpression("NOT A"));
  });

  it("respects precedence: NOT > AND > OR", () => {
    // A || B && C  ===  A || (B && C)
    expect(parseExpression("A || B && C")).toEqual(parseExpression("A || (B && C)"));
  });

  it("handles nested parentheses", () => {
    const ast = parseExpression("A && (B || C)");
    expect(extractConditions(ast)).toEqual(["A", "B", "C"]);
  });

  it("throws on empty or malformed input", () => {
    expect(() => parseExpression("")).toThrow();
    expect(() => parseExpression("A &&")).toThrow();
    expect(() => parseExpression("A B")).toThrow();
    expect(() => parseExpression("(A")).toThrow();
    expect(() => parseExpression("@")).toThrow();
  });
});

describe("evaluate / buildTruthTable", () => {
  it("evaluates a decision correctly", () => {
    const ast = parseExpression("A && (B || C)");
    expect(evaluate(ast, { A: true, B: false, C: true })).toBe(true);
    expect(evaluate(ast, { A: false, B: true, C: true })).toBe(false);
    expect(evaluate(ast, { A: true, B: false, C: false })).toBe(false);
  });

  it("produces 2^n rows", () => {
    const ast = parseExpression("A && (B || C)");
    const conditions = extractConditions(ast);
    expect(buildTruthTable(ast, conditions)).toHaveLength(8);
  });
});

describe("findIndependencePairs", () => {
  it("finds a unique-cause pair for each condition of A && B", () => {
    const ast = parseExpression("A && B");
    const conditions = extractConditions(ast);
    const rows = buildTruthTable(ast, conditions);
    const pairs = findIndependencePairs(rows, conditions);
    expect(pairs).toHaveLength(2);
    expect(pairs[0].length).toBeGreaterThan(0); // A
    expect(pairs[1].length).toBeGreaterThan(0); // B
    // Each pair must differ in only the target condition and flip the decision.
    pairs.forEach((conditionPairs, k) => {
      for (const p of conditionPairs) {
        expect(rows[p.rowFalse].values[k]).toBe(false);
        expect(rows[p.rowTrue].values[k]).toBe(true);
        expect(rows[p.rowFalse].decision).not.toBe(rows[p.rowTrue].decision);
      }
    });
  });
});

describe("analyzeMcdc", () => {
  it("returns an n+1 minimal set for A && B", () => {
    const res = analyzeMcdc("A && B");
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    expect(res.analysis.conditions).toEqual(["A", "B"]);
    expect(res.analysis.minimalRows).toHaveLength(3); // n + 1
    expect(res.analysis.fullyAchievable).toBe(true);
  });

  it("returns an n+1 minimal set for A && (B || C)", () => {
    const res = analyzeMcdc("A && (B || C)");
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    expect(res.analysis.conditions).toEqual(["A", "B", "C"]);
    expect(res.analysis.minimalRows).toHaveLength(4); // n + 1
    expect(res.analysis.fullyAchievable).toBe(true);
    // Every condition must have a proving pair.
    expect(res.analysis.provingPair.every((p) => p !== null)).toBe(true);
  });

  it("flags a condition that cannot independently affect the outcome", () => {
    // B is masked: the decision never depends on it.
    const res = analyzeMcdc("A || (B && A)");
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    const bIndex = res.analysis.conditions.indexOf("B");
    expect(res.analysis.achievable[bIndex]).toBe(false);
    expect(res.analysis.fullyAchievable).toBe(false);
  });

  it("rejects an expression with no conditions", () => {
    const res = analyzeMcdc("()");
    expect(res.ok).toBe(false);
  });

  it("rejects more than the supported number of conditions", () => {
    const vars = Array.from({ length: MAX_CONDITIONS + 1 }, (_, i) => `V${i}`).join(" && ");
    const res = analyzeMcdc(vars);
    expect(res.ok).toBe(false);
    if (res.ok) return;
    expect(res.error.kind).toBe("too-many");
  });

  it("reports parse errors without throwing", () => {
    const res = analyzeMcdc("A &&");
    expect(res.ok).toBe(false);
    if (res.ok) return;
    expect(res.error.kind).toBe("parse");
  });
});

describe("formatMinimalSet", () => {
  it("renders a CSV header plus one row per selected test", () => {
    const res = analyzeMcdc("A && B");
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    const csv = formatMinimalSet(res.analysis);
    const lines = csv.split("\n");
    expect(lines[0]).toBe("A,B,Decision");
    expect(lines).toHaveLength(1 + res.analysis.minimalRows.length);
  });
});
