import { expect } from "vitest";
import type {
  AnyCalculatorDefinition,
  CalculatorDefinition,
} from "../types/calculator";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "../config/site";

export interface NumericTestCase<TInputs = Record<string, unknown>> {
  readonly inputs: TInputs;
  readonly expected: Record<string, number>;
  readonly tolerance?: number | Record<string, number>;
  readonly description?: string;
}

export function runNumericTests<
  TInputs extends Record<string, unknown>,
  TResult extends Record<string, unknown>,
>(
  calc: CalculatorDefinition<TInputs, TResult>,
  cases: ReadonlyArray<NumericTestCase<TInputs>>,
): void {
  for (const tc of cases) {
    // Zod 4 parse() returns the schema's output type, which the compiler
    // sees as `unknown` from this generic perspective. Cast through the
    // declared TInputs to keep the compute() call type-safe.
    const parsed = calc.inputSchema.parse(tc.inputs) as TInputs;
    const result = calc.compute(parsed) as Record<string, unknown>;
    for (const [key, expected] of Object.entries(tc.expected)) {
      const actual = result[key];
      if (typeof actual !== "number") {
        throw new Error(
          `Expected numeric output for "${key}" but got ${typeof actual} (${JSON.stringify(actual)})`,
        );
      }
      const tol =
        typeof tc.tolerance === "number"
          ? tc.tolerance
          : tc.tolerance?.[key] ?? 0.01;
      expect(actual).toBeCloseTo(expected, precisionFromTolerance(tol));
    }
  }
}

function precisionFromTolerance(tolerance: number): number {
  if (tolerance >= 1) return 0;
  return Math.max(0, Math.ceil(-Math.log10(tolerance)));
}

export function assertI18nComplete(calc: AnyCalculatorDefinition): void {
  for (const locale of LOCALES) {
    const bundle = calc.i18n[locale];
    expect(
      bundle,
      `Calculator ${calc.slug} missing i18n bundle for locale ${locale}`,
    ).toBeDefined();
    if (!bundle) continue;

    expect(bundle.title, `${calc.slug}.${locale}.title`).toBeTruthy();
    expect(bundle.short, `${calc.slug}.${locale}.short`).toBeTruthy();
    expect(bundle.description, `${calc.slug}.${locale}.description`).toBeTruthy();
    expect(
      bundle.keywords.length,
      `${calc.slug}.${locale}.keywords`,
    ).toBeGreaterThan(0);

    for (const input of calc.inputs) {
      expect(
        bundle.inputs[input.id]?.label,
        `${calc.slug}.${locale}.inputs.${input.id}.label`,
      ).toBeTruthy();
    }

    for (const output of calc.outputs) {
      expect(
        bundle.outputs[output.id]?.label,
        `${calc.slug}.${locale}.outputs.${output.id}.label`,
      ).toBeTruthy();
    }

    const forbiddenValues = ["TODO", "FIXME", "XXX", "PLACEHOLDER"];
    const stringValues = collectStringValues(bundle);
    for (const forbidden of forbiddenValues) {
      // Case-sensitive word-boundary regex: only matches uppercase "TODO", "FIXME" etc.
      // Spanish "todo/todos/Método" won't match since they're lowercase/mixed-case.
      const forbiddenRegex = new RegExp(`\\b${forbidden}\\b`);
      const offender = stringValues.find((v) => forbiddenRegex.test(v));
      expect(
        offender,
        `${calc.slug}.${locale} value contains forbidden token "${forbidden}": ${offender}`,
      ).toBeUndefined();
    }
  }
}

function collectStringValues(obj: unknown): string[] {
  const out: string[] = [];
  if (typeof obj === "string") {
    out.push(obj);
  } else if (Array.isArray(obj)) {
    for (const item of obj) out.push(...collectStringValues(item));
  } else if (obj && typeof obj === "object") {
    for (const v of Object.values(obj)) out.push(...collectStringValues(v));
  }
  return out;
}

export function assertSchemaValidates(
  calc: AnyCalculatorDefinition,
  validInput: Record<string, unknown>,
  invalidInput: Record<string, unknown>,
): void {
  expect(() => calc.inputSchema.parse(validInput)).not.toThrow();
  expect(() => calc.inputSchema.parse(invalidInput)).toThrow();
}

export function assertComputeIsPure<
  TInputs extends Record<string, unknown>,
  TResult extends Record<string, unknown>,
>(
  calc: CalculatorDefinition<TInputs, TResult>,
  inputs: TInputs,
  iterations = 5,
): void {
  const first = calc.compute(inputs);
  for (let i = 0; i < iterations; i++) {
    const next = calc.compute(inputs);
    expect(next).toEqual(first);
  }
}

export function getReferenceLocale(): Locale {
  return DEFAULT_LOCALE;
}

/**
 * Replacement for the old `expect(definition).toMatchSnapshot()` pattern.
 *
 * Why: the snapshot files those tests produced were 60K+ lines of dumped
 * Zod internals + i18n bundles. Library upgrades (Zod 3→4) churned all of
 * them with zero semantic change. They duplicated the source of truth and
 * caught no real regressions.
 *
 * This helper instead asserts the structural invariants every calculator
 * must satisfy. Pass the expected slug + category so a calc file that gets
 * mis-pasted (wrong slug, wrong folder) still fails loudly.
 *
 * Usage:
 *   import calculator from "../definition";
 *   import { assertDefinitionShape } from "@/test-utils";
 *
 *   describe("bmi definition shape", () => {
 *     it("satisfies the CalculatorDefinition contract", () => {
 *       assertDefinitionShape(calculator, { slug: "bmi", category: "health" });
 *     });
 *   });
 */
export function assertDefinitionShape(
  calc: AnyCalculatorDefinition,
  expected: {
    readonly slug: string;
    readonly category: AnyCalculatorDefinition["category"];
    readonly priority?: AnyCalculatorDefinition["priority"];
    readonly minInputs?: number;
    readonly minOutputs?: number;
  },
): void {
  // 1. Identity matches what the consumer expects (slug + folder + category
  //    can drift if a definition.ts gets mis-pasted from a sibling calc).
  expect(calc.slug, "slug mismatch").toBe(expected.slug);
  expect(calc.category, "category mismatch").toBe(expected.category);

  // 2. Priority is one of the three allowed values.
  expect(["P0", "P1", "P2"], `${calc.slug}: bad priority`).toContain(
    calc.priority,
  );
  if (expected.priority) {
    expect(calc.priority, `${calc.slug}: priority mismatch`).toBe(
      expected.priority,
    );
  }

  // 3. Icon is a non-empty string (used by Header/Sidebar to render).
  expect(typeof calc.icon, `${calc.slug}: icon missing`).toBe("string");
  expect(calc.icon.length, `${calc.slug}: icon empty`).toBeGreaterThan(0);

  // 4. Inputs & outputs exist (a calc with zero inputs or outputs is broken).
  expect(
    calc.inputs.length,
    `${calc.slug}: needs at least 1 input`,
  ).toBeGreaterThanOrEqual(expected.minInputs ?? 1);
  expect(
    calc.outputs.length,
    `${calc.slug}: needs at least 1 output`,
  ).toBeGreaterThanOrEqual(expected.minOutputs ?? 1);

  // 5. Every input has a stable id (used as React form key + URL param).
  const inputIds = calc.inputs.map((i) => i.id);
  expect(new Set(inputIds).size, `${calc.slug}: duplicate input ids`).toBe(
    inputIds.length,
  );
  for (const id of inputIds) {
    expect(typeof id, `${calc.slug}: non-string input id`).toBe("string");
    expect(id.length, `${calc.slug}: empty input id`).toBeGreaterThan(0);
  }

  // 6. Every output likewise has a stable id.
  const outputIds = calc.outputs.map((o) => o.id);
  expect(new Set(outputIds).size, `${calc.slug}: duplicate output ids`).toBe(
    outputIds.length,
  );
  for (const id of outputIds) {
    expect(typeof id, `${calc.slug}: non-string output id`).toBe("string");
    expect(id.length, `${calc.slug}: empty output id`).toBeGreaterThan(0);
  }

  // 7. Schema is a Zod schema (has .parse + .safeParse).
  expect(
    typeof calc.inputSchema.parse,
    `${calc.slug}: inputSchema.parse missing`,
  ).toBe("function");
  expect(
    typeof calc.inputSchema.safeParse,
    `${calc.slug}: inputSchema.safeParse missing`,
  ).toBe("function");

  // 8. Compute is a pure function (we test purity separately via assertComputeIsPure).
  expect(typeof calc.compute, `${calc.slug}: compute is not a function`).toBe(
    "function",
  );

  // 9. Meta has references (required by AuthorityFooter & SEO citations).
  expect(
    Array.isArray(calc.meta.references),
    `${calc.slug}: meta.references must be an array`,
  ).toBe(true);

  // 10. i18n has all 12 locales — full coverage is asserted separately via
  //     assertI18nComplete, here we just guard the shape.
  expect(
    Object.keys(calc.i18n).length,
    `${calc.slug}: i18n must cover all ${LOCALES.length} locales`,
  ).toBe(LOCALES.length);
  for (const locale of LOCALES) {
    expect(
      calc.i18n[locale],
      `${calc.slug}: missing i18n bundle for ${locale}`,
    ).toBeDefined();
  }
}
