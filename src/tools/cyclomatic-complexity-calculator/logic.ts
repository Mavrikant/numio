/**
 * Cyclomatic complexity calculator (McCabe, 1976).
 *
 * Two independent ways to obtain M:
 *   1. Source mode — strip comments/strings from a pasted snippet, then count
 *      decision points (branch keywords, short-circuit operators, ternaries)
 *      with per-language token rules; M = decisions + 1. This is the same
 *      "extended" counting convention used by Lizard and ESLint's
 *      `complexity` rule.
 *   2. Graph mode — from a control-flow graph: M = E − N + 2P.
 *
 * Source mode is deliberately a token heuristic, not a full parser: corner
 * cases such as regex literals, C++ rvalue references (`T&&`) or code inside
 * template-literal interpolations can be miscounted. The definition carries a
 * disclaimer to that effect.
 */

export type LanguageId =
  | "javascript"
  | "python"
  | "java"
  | "c"
  | "csharp"
  | "go"
  | "php"
  | "ruby";

/** How `?` ternaries are recognized (Go has none; Ruby needs spacing). */
type TernaryStyle = "none" | "c" | "spaced";

interface StringRule {
  readonly delim: string;
  /** Whether backslash escapes the next character (false for Go raw strings). */
  readonly escape: boolean;
}

interface LanguageConfig {
  readonly label: string;
  readonly lineComments: readonly string[];
  readonly blockComments: ReadonlyArray<readonly [string, string]>;
  /** Checked in order — longer delimiters (e.g. Python `"""`) must come first. */
  readonly strings: readonly StringRule[];
  /** Branch keywords counted with word boundaries. */
  readonly keywords: readonly string[];
  /** Count `&&` / `||` symbol operators. */
  readonly shortCircuit: boolean;
  readonly ternary: TernaryStyle;
}

const C_COMMENTS = {
  lineComments: ["//"],
  blockComments: [["/*", "*/"]] as ReadonlyArray<readonly [string, string]>,
};
const QUOTES: readonly StringRule[] = [
  { delim: '"', escape: true },
  { delim: "'", escape: true },
];

export const LANGUAGE_CONFIGS: Record<LanguageId, LanguageConfig> = {
  javascript: {
    label: "JavaScript / TypeScript",
    ...C_COMMENTS,
    strings: [...QUOTES, { delim: "`", escape: true }],
    keywords: ["if", "for", "while", "case", "catch"],
    shortCircuit: true,
    ternary: "c",
  },
  python: {
    label: "Python",
    lineComments: ["#"],
    blockComments: [],
    strings: [{ delim: '"""', escape: true }, { delim: "'''", escape: true }, ...QUOTES],
    keywords: ["if", "elif", "for", "while", "except", "and", "or"],
    shortCircuit: false,
    ternary: "none",
  },
  java: {
    label: "Java",
    ...C_COMMENTS,
    strings: QUOTES,
    keywords: ["if", "for", "while", "case", "catch"],
    shortCircuit: true,
    ternary: "c",
  },
  c: {
    label: "C / C++",
    ...C_COMMENTS,
    strings: QUOTES,
    keywords: ["if", "for", "while", "case", "catch"],
    shortCircuit: true,
    ternary: "c",
  },
  csharp: {
    label: "C#",
    ...C_COMMENTS,
    strings: QUOTES,
    keywords: ["if", "for", "foreach", "while", "case", "catch"],
    shortCircuit: true,
    ternary: "c",
  },
  go: {
    label: "Go",
    ...C_COMMENTS,
    strings: [...QUOTES, { delim: "`", escape: false }],
    keywords: ["if", "for", "case"],
    shortCircuit: true,
    ternary: "none",
  },
  php: {
    label: "PHP",
    lineComments: ["//", "#"],
    blockComments: [["/*", "*/"]],
    strings: QUOTES,
    keywords: ["if", "elseif", "for", "foreach", "while", "case", "catch", "and", "or"],
    shortCircuit: true,
    ternary: "c",
  },
  ruby: {
    label: "Ruby",
    lineComments: ["#"],
    blockComments: [],
    strings: QUOTES,
    keywords: ["if", "elsif", "unless", "while", "until", "for", "when", "rescue", "and", "or"],
    shortCircuit: true,
    ternary: "spaced",
  },
};

export const LANGUAGES: ReadonlyArray<{ id: LanguageId; label: string }> = (
  Object.keys(LANGUAGE_CONFIGS) as LanguageId[]
).map((id) => ({ id, label: LANGUAGE_CONFIGS[id].label }));

/** Replace comments and string literals with whitespace, keeping newlines. */
export function stripCode(src: string, language: LanguageId): string {
  const cfg = LANGUAGE_CONFIGS[language];
  let out = "";
  let i = 0;
  while (i < src.length) {
    const block = cfg.blockComments.find(([open]) => src.startsWith(open, i));
    if (block) {
      const end = src.indexOf(block[1], i + block[0].length);
      const segment = end === -1 ? src.slice(i) : src.slice(i, end + block[1].length);
      out += segment.replace(/[^\n]/g, " ");
      i += segment.length;
      continue;
    }
    const line = cfg.lineComments.find((lc) => src.startsWith(lc, i));
    if (line) {
      const end = src.indexOf("\n", i);
      i = end === -1 ? src.length : end; // keep the newline itself
      continue;
    }
    const str = cfg.strings.find((rule) => src.startsWith(rule.delim, i));
    if (str) {
      let j = i + str.delim.length;
      while (j < src.length) {
        if (str.escape && src[j] === "\\") {
          j += 2;
          continue;
        }
        if (src.startsWith(str.delim, j)) {
          j += str.delim.length;
          break;
        }
        j += 1;
      }
      out += " ";
      i = Math.min(j, src.length);
      continue;
    }
    out += src[i];
    i += 1;
  }
  return out;
}

function countWord(src: string, word: string): number {
  return (src.match(new RegExp(`\\b${word}\\b`, "g")) ?? []).length;
}

function countToken(src: string, token: string): number {
  return src.split(token).length - 1;
}

/**
 * A `?` after this index must reach a `:` before the statement ends to be a
 * ternary — this filters out C# nullable types (`int? x = 5;`) and TS
 * optional parameters. `{`/`}` also stop the scan so a dangling `?` cannot
 * borrow a colon from a following block.
 */
function hasTernaryColon(src: string, from: number): boolean {
  for (let j = from; j < src.length; j += 1) {
    const ch = src[j];
    if (ch === ":") return true;
    if (ch === ";" || ch === "{" || ch === "}") return false;
  }
  return false;
}

function countTernaries(src: string, style: TernaryStyle): number {
  if (style === "none") return 0;
  let count = 0;
  for (let i = 0; i < src.length; i += 1) {
    if (src[i] !== "?") continue;
    const prev = src[i - 1] ?? "";
    const next = src[i + 1] ?? "";
    // Skip ??, ?., ?:, ?>, ?-> and the <? / <?> wildcard & PHP-tag shapes.
    if (prev === "?" || prev === "<") continue;
    if (next === "." || next === "?" || next === ":" || next === ">" || next === "-") continue;
    if (style === "spaced") {
      // Ruby: `empty?` methods and `?a` char literals — require ` ? ` form.
      if (/\s/.test(prev) && /\s/.test(next)) count += 1;
      continue;
    }
    if (hasTernaryColon(src, i + 1)) count += 1;
  }
  return count;
}

export interface BreakdownEntry {
  /** The literal construct counted (`if`, `&&`, `?:`, …) — shown verbatim. */
  readonly construct: string;
  readonly count: number;
}

export interface CodeAnalysis {
  readonly complexity: number;
  readonly decisions: number;
  readonly breakdown: readonly BreakdownEntry[];
}

/** Count decision points in a snippet; M = decisions + 1. */
export function analyzeCode(source: string, language: LanguageId): CodeAnalysis {
  const cfg = LANGUAGE_CONFIGS[language];
  const stripped = stripCode(source, language);
  const breakdown: BreakdownEntry[] = [];

  for (const kw of cfg.keywords) {
    const count = countWord(stripped, kw);
    if (count > 0) breakdown.push({ construct: kw, count });
  }
  if (cfg.shortCircuit) {
    const ands = countToken(stripped, "&&");
    const ors = countToken(stripped, "||");
    if (ands > 0) breakdown.push({ construct: "&&", count: ands });
    if (ors > 0) breakdown.push({ construct: "||", count: ors });
  }
  const ternaries = countTernaries(stripped, cfg.ternary);
  if (ternaries > 0) breakdown.push({ construct: "?:", count: ternaries });

  const decisions = breakdown.reduce((sum, b) => sum + b.count, 0);
  return { complexity: decisions + 1, decisions, breakdown };
}

/** McCabe's graph formula: M = E − N + 2P. */
export function graphComplexity(edges: number, nodes: number, components: number): number {
  return edges - nodes + 2 * components;
}

export type RiskLevel = "low" | "moderate" | "high" | "very-high";

/**
 * Risk bands from NIST SP 500-235 / the SEI categorization:
 * 1–10 simple, 11–20 moderate, 21–50 complex, >50 untestable.
 */
export function riskOf(complexity: number): RiskLevel {
  if (complexity <= 10) return "low";
  if (complexity <= 20) return "moderate";
  if (complexity <= 50) return "high";
  return "very-high";
}

/** CSV-ish report for the copy button. */
export function formatReport(analysis: CodeAnalysis): string {
  const lines = [`complexity,${analysis.complexity}`, `decision points,${analysis.decisions}`];
  for (const b of analysis.breakdown) lines.push(`${b.construct},${b.count}`);
  return lines.join("\n");
}

/** Default snippet shown on first load: 5 decisions → M = 6. */
export const DEFAULT_SNIPPET = `function grade(score, bonuses) {
  if (score < 0 || score > 100) {
    throw new RangeError("score out of range");
  }
  let total = score;
  for (const bonus of bonuses) {
    total += bonus;
  }
  return total >= 90 ? "A" : total >= 60 ? "B" : "C";
}`;
