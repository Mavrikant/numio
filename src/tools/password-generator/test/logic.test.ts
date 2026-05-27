import { describe, it, expect } from "vitest";
import {
  CHARSETS,
  buildPool,
  passwordEntropy,
  strengthLevel,
  strengthScore,
  crackTimeSeconds,
  humanizeSeconds,
  analyzePassword,
  generatePassword,
  ATTACK_SCENARIOS,
  type PasswordOptions,
} from "../logic";

const ALL: PasswordOptions = {
  length: 16,
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true,
  excludeAmbiguous: false,
};

/** Deterministic LCG so generation tests are reproducible. */
function seededRandomInt(seed = 1): (max: number) => number {
  let s = seed >>> 0;
  return (max: number) => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s % max;
  };
}

describe("buildPool", () => {
  it("combines selected classes", () => {
    expect(buildPool({ ...ALL, uppercase: false, numbers: false, symbols: false })).toBe(
      CHARSETS.lowercase,
    );
    const full = buildPool(ALL);
    expect(full.length).toBe(
      CHARSETS.lowercase.length +
        CHARSETS.uppercase.length +
        CHARSETS.numbers.length +
        CHARSETS.symbols.length,
    );
  });

  it("returns empty when nothing selected", () => {
    expect(
      buildPool({ ...ALL, lowercase: false, uppercase: false, numbers: false, symbols: false }),
    ).toBe("");
  });

  it("drops ambiguous characters when requested", () => {
    const pool = buildPool({ ...ALL, excludeAmbiguous: true });
    for (const ch of "Il1O0o") {
      expect(pool.includes(ch)).toBe(false);
    }
    expect(pool.includes("a")).toBe(true);
  });
});

describe("passwordEntropy", () => {
  // Reference: H = length * log2(pool). 16 * log2(95-ish). For lowercase-only
  // pool of 26: 10 chars -> 10*log2(26) ≈ 47.0 bits.
  it("matches length * log2(pool)", () => {
    expect(passwordEntropy(10, 26)).toBeCloseTo(10 * Math.log2(26), 6);
    expect(passwordEntropy(16, 86)).toBeCloseTo(16 * Math.log2(86), 6);
  });

  it("is zero for degenerate inputs", () => {
    expect(passwordEntropy(0, 50)).toBe(0);
    expect(passwordEntropy(10, 1)).toBe(0);
  });
});

describe("strengthLevel", () => {
  it("buckets by entropy thresholds", () => {
    expect(strengthLevel(20)).toBe("veryWeak");
    expect(strengthLevel(30)).toBe("weak");
    expect(strengthLevel(45)).toBe("fair");
    expect(strengthLevel(80)).toBe("strong");
    expect(strengthLevel(140)).toBe("veryStrong");
  });

  it("maps levels to a 0–4 score", () => {
    expect(strengthScore("veryWeak")).toBe(0);
    expect(strengthScore("veryStrong")).toBe(4);
  });
});

describe("crackTimeSeconds", () => {
  it("uses half the keyspace divided by guess rate", () => {
    // 40 bits, 1000 guesses/s: 2^39 / 1000 ≈ 5.498e8 s
    expect(crackTimeSeconds(40, 1000)).toBeCloseTo(Math.pow(2, 39) / 1000, 0);
  });

  it("returns Infinity for huge entropy (double overflow)", () => {
    expect(crackTimeSeconds(2048, ATTACK_SCENARIOS.offlineFastHash)).toBe(Infinity);
  });
});

describe("humanizeSeconds", () => {
  it("labels sub-second times as instant", () => {
    expect(humanizeSeconds(0.4).unitKey).toBe("instant");
  });
  it("picks the largest sensible unit", () => {
    expect(humanizeSeconds(5).unitKey).toBe("second");
    expect(humanizeSeconds(120).unitKey).toBe("minute");
    expect(humanizeSeconds(3 * 3600).unitKey).toBe("hour");
    expect(humanizeSeconds(2 * 86400).unitKey).toBe("day");
    expect(humanizeSeconds(2 * 30 * 86400).unitKey).toBe("month");
    expect(humanizeSeconds(5 * 365 * 86400).unitKey).toBe("year");
    expect(humanizeSeconds(500 * 365 * 86400).unitKey).toBe("century");
  });
  it("labels astronomically large times as eternity", () => {
    expect(humanizeSeconds(Infinity).unitKey).toBe("eternity");
    expect(humanizeSeconds(1e30).unitKey).toBe("eternity");
  });
});

describe("analyzePassword", () => {
  it("produces consistent metrics for a 16-char full-pool password", () => {
    const m = analyzePassword(16, buildPool(ALL).length);
    expect(m.poolSize).toBe(86);
    expect(m.entropy).toBeCloseTo(16 * Math.log2(86), 6);
    expect(m.level).toBe("strong");
    expect(Object.keys(m.crackSeconds).sort()).toEqual(
      Object.keys(ATTACK_SCENARIOS).sort(),
    );
  });
});

describe("generatePassword", () => {
  it("produces a password of the requested length", () => {
    const pw = generatePassword(ALL, seededRandomInt(42));
    expect(pw.length).toBe(16);
  });

  it("only uses characters from the pool", () => {
    const pool = buildPool(ALL);
    const pw = generatePassword(ALL, seededRandomInt(7));
    for (const ch of pw) expect(pool.includes(ch)).toBe(true);
  });

  it("includes at least one character from each selected class", () => {
    const pw = generatePassword(ALL, seededRandomInt(123));
    expect([...pw].some((c) => CHARSETS.lowercase.includes(c))).toBe(true);
    expect([...pw].some((c) => CHARSETS.uppercase.includes(c))).toBe(true);
    expect([...pw].some((c) => CHARSETS.numbers.includes(c))).toBe(true);
    expect([...pw].some((c) => CHARSETS.symbols.includes(c))).toBe(true);
  });

  it("is deterministic given the same RNG seed", () => {
    expect(generatePassword(ALL, seededRandomInt(99))).toBe(
      generatePassword(ALL, seededRandomInt(99)),
    );
  });

  it("returns empty when no class is selected", () => {
    expect(
      generatePassword(
        { ...ALL, lowercase: false, uppercase: false, numbers: false, symbols: false },
        seededRandomInt(1),
      ),
    ).toBe("");
  });

  it("respects excludeAmbiguous", () => {
    const pw = generatePassword({ ...ALL, length: 64, excludeAmbiguous: true }, seededRandomInt(5));
    for (const ch of "Il1O0o") expect(pw.includes(ch)).toBe(false);
  });
});
