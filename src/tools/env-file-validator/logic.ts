export interface EnvEntry {
  readonly key: string;
  readonly value: string;
  readonly line: number;
}

export interface EnvIssue {
  readonly line: number;
  readonly message: string;
  readonly severity: "error" | "warning";
}

export interface EnvAnalysis {
  readonly entries: EnvEntry[];
  readonly issues: EnvIssue[];
  readonly duplicates: string[];
}

/** Parse `.env`-style key/value pairs and surface common issues (bad keys, duplicates, lonely quotes). */
export function analyzeEnv(input: string): EnvAnalysis {
  const lines = input.split(/\r?\n/);
  const entries: EnvEntry[] = [];
  const issues: EnvIssue[] = [];
  const seen = new Set<string>();
  const dup = new Set<string>();

  lines.forEach((raw, i) => {
    const line = raw.trimEnd();
    const num = i + 1;
    if (line === "" || /^\s*#/.test(line)) return;

    const eq = line.indexOf("=");
    if (eq === -1) {
      issues.push({ line: num, message: 'Missing "=".', severity: "error" });
      return;
    }
    const rawKey = line.slice(0, eq).trim();
    const rawValue = line.slice(eq + 1).trim();
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(rawKey)) {
      issues.push({ line: num, message: `Invalid key "${rawKey}". Use letters, digits and underscores; cannot start with a digit.`, severity: "error" });
      return;
    }

    let value = rawValue;
    if (
      value.length >= 2 &&
      ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    } else if (value.startsWith('"') || value.startsWith("'")) {
      // Covers a lonely quote (`A="`) and mismatched quotes (`A="abc'`).
      issues.push({ line: num, message: "Unterminated quoted value.", severity: "error" });
    } else if (/\s#/.test(rawValue) && !rawValue.startsWith('"') && !rawValue.startsWith("'")) {
      issues.push({ line: num, message: "Unquoted value contains `#`. Wrap the value in quotes if it should be literal.", severity: "warning" });
    }

    if (seen.has(rawKey)) {
      issues.push({ line: num, message: `Duplicate key "${rawKey}".`, severity: "warning" });
      dup.add(rawKey);
    }
    seen.add(rawKey);
    entries.push({ key: rawKey, value, line: num });
  });

  return { entries, issues, duplicates: [...dup] };
}
