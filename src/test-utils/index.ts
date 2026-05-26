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
    const parsed = calc.inputSchema.parse(tc.inputs);
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
      const offender = stringValues.find((v) =>
        v.toUpperCase().includes(forbidden),
      );
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
