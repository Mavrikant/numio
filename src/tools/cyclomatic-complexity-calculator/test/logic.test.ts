import { describe, it, expect } from "vitest";
import {
  analyzeCode,
  stripCode,
  graphComplexity,
  riskOf,
  formatReport,
  DEFAULT_SNIPPET,
  LANGUAGES,
} from "../logic";

describe("stripCode", () => {
  it("removes line and block comments", () => {
    const src = "a; // if (x) {}\n/* while (y) */ b;";
    const out = stripCode(src, "javascript");
    expect(out).not.toContain("if");
    expect(out).not.toContain("while");
    expect(out).toContain("a;");
    expect(out).toContain("b;");
  });

  it("removes string literals including escapes", () => {
    expect(stripCode('x = "if (a) \\" while";', "javascript")).not.toContain("if");
    expect(stripCode("x = 'case'", "javascript")).not.toContain("case");
  });

  it("removes Python triple-quoted strings and # comments", () => {
    const src = 'x = """if elif for"""\ny = 1  # while True';
    const out = stripCode(src, "python");
    expect(out).not.toContain("if");
    expect(out).not.toContain("while");
  });

  it("handles Go raw strings without escape processing", () => {
    // A trailing backslash must not swallow the closing backtick.
    const out = stripCode("s := `C:\\` ; if x {}", "go");
    expect(out).toContain("if");
  });
});

describe("analyzeCode", () => {
  it("returns complexity 1 for straight-line code", () => {
    const a = analyzeCode("const x = 1;\nconst y = x + 2;\nconsole.log(y);", "javascript");
    expect(a.decisions).toBe(0);
    expect(a.complexity).toBe(1);
    expect(a.breakdown).toEqual([]);
  });

  // Referans: NIST SP 500-235 §2 — M = karar sayısı + 1 (yapısal programlarda)
  it("counts the default snippet as complexity 6 (if, ||, for, 2× ternary)", () => {
    const a = analyzeCode(DEFAULT_SNIPPET, "javascript");
    expect(a.complexity).toBe(6);
    expect(a.breakdown).toEqual(
      expect.arrayContaining([
        { construct: "if", count: 1 },
        { construct: "||", count: 1 },
        { construct: "for", count: 1 },
        { construct: "?:", count: 2 },
      ]),
    );
  });

  it("counts && and || short-circuit operators", () => {
    const a = analyzeCode("if (a && b || c && d) { f(); }", "javascript");
    // 1 if + 2 && + 1 || = 4 decisions
    expect(a.complexity).toBe(5);
  });

  it("counts each case label but not switch/default", () => {
    const src = "switch (x) { case 1: break; case 2: break; default: break; }";
    const a = analyzeCode(src, "javascript");
    expect(a.decisions).toBe(2);
  });

  it("does not count ?. optional chaining, ?? nullish or TS optional members", () => {
    const src = "const v = obj?.a ?? fallback;\nfunction f(x?: number) { return x; }";
    const a = analyzeCode(src, "javascript");
    expect(a.decisions).toBe(0);
  });

  it("does not count C# nullable type declarations as ternaries", () => {
    const a = analyzeCode("int? age = null;\nstring name = \"x\";", "csharp");
    expect(a.decisions).toBe(0);
    const b = analyzeCode("var r = age > 18 ? \"adult\" : \"minor\";", "csharp");
    expect(b.decisions).toBe(1);
  });

  it("counts Python elif/and/or/except keywords", () => {
    const src = [
      "try:",
      "    if a and b:",
      "        pass",
      "    elif c or d:",
      "        pass",
      "except ValueError:",
      "    pass",
    ].join("\n");
    const a = analyzeCode(src, "python");
    // if + and + elif + or + except = 5
    expect(a.decisions).toBe(5);
    expect(a.complexity).toBe(6);
  });

  it("does not match keywords inside identifiers", () => {
    const a = analyzeCode("formula = 1\nelifx = 2\nandy = 3", "python");
    expect(a.decisions).toBe(0);
  });

  it("handles Go (no ternary, case counted)", () => {
    const src = "if x > 0 && y > 0 {\n}\nswitch z {\ncase 1:\ncase 2:\n}";
    const a = analyzeCode(src, "go");
    // if + && + 2 case = 4
    expect(a.decisions).toBe(4);
  });

  it("handles Ruby: predicate methods are not ternaries, spaced ? is", () => {
    const a = analyzeCode("x = list.empty? ? 0 : 1", "ruby");
    // one ternary only — `empty?` must not count
    expect(a.decisions).toBe(1);
    const b = analyzeCode("return 0 if list.empty?\nputs 1 unless done", "ruby");
    // modifier if + unless = 2
    expect(b.decisions).toBe(2);
  });

  it("ignores decisions inside comments and strings", () => {
    const src = '// if (a) while (b)\nconst s = "for case if";\nlet x = 1;';
    const a = analyzeCode(src, "javascript");
    expect(a.decisions).toBe(0);
  });
});

describe("graphComplexity", () => {
  // Referans: McCabe (1976) — örnek graf: E=9, N=8, P=1 → M=3
  it("computes M = E − N + 2P", () => {
    expect(graphComplexity(9, 8, 1)).toBe(3);
    expect(graphComplexity(1, 2, 1)).toBe(1); // single edge between entry/exit
    expect(graphComplexity(11, 7, 1)).toBe(6);
  });

  it("scales with connected components", () => {
    expect(graphComplexity(9, 8, 2)).toBe(5);
  });
});

describe("riskOf", () => {
  // Referans: NIST SP 500-235 / SEI risk bantları: 1-10, 11-20, 21-50, >50
  it("maps the SEI risk bands", () => {
    expect(riskOf(1)).toBe("low");
    expect(riskOf(10)).toBe("low");
    expect(riskOf(11)).toBe("moderate");
    expect(riskOf(20)).toBe("moderate");
    expect(riskOf(21)).toBe("high");
    expect(riskOf(50)).toBe("high");
    expect(riskOf(51)).toBe("very-high");
  });
});

describe("formatReport", () => {
  it("emits a CSV-ish block with complexity, decisions and breakdown", () => {
    const a = analyzeCode("if (a) { f(); }", "javascript");
    const report = formatReport(a);
    expect(report.split("\n")).toEqual(["complexity,2", "decision points,1", "if,1"]);
  });
});

describe("LANGUAGES", () => {
  it("exposes all eight supported languages", () => {
    expect(LANGUAGES.map((l) => l.id)).toEqual([
      "javascript",
      "python",
      "java",
      "c",
      "csharp",
      "go",
      "php",
      "ruby",
    ]);
  });
});
