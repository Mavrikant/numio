import type { z, ZodTypeAny } from "zod";
import type { CalculatorI18n, Locale } from "./i18n";

export type CalculatorCategory =
  | "health"
  | "finance"
  | "engineering"
  | "math"
  | "conversion";

export const CATEGORIES: readonly CalculatorCategory[] = [
  "health",
  "finance",
  "engineering",
  "math",
  "conversion",
];

export type UnitKey =
  | "kg" | "g" | "lb" | "oz"
  | "m" | "cm" | "mm" | "ft" | "in" | "km" | "mi"
  | "l" | "ml" | "gal" | "floz" | "m3" | "ft3" | "cup" | "tbsp" | "tsp" | "galuk"
  | "celsius" | "fahrenheit" | "kelvin"
  | "year" | "month" | "day" | "hour" | "minute" | "second"
  | "percent" | "ratio"
  | "usd" | "eur" | "try" | "gbp" | "jpy"
  | "watt" | "kw" | "hp" | "joule" | "kcal" | "kj" | "cal" | "kwh" | "btu" | "ftlbf" | "ev"
  | "volt" | "amp" | "ohm"
  | "pa" | "kpa" | "bar" | "psi" | "atm" | "mmhg" | "inhg"
  | "kmh" | "mph" | "ms" | "knots" | "fts"
  | "m2" | "ft2" | "yd2" | "ha" | "acre" | "km2" | "cm2";

export type NumberInputDef = {
  readonly kind: "number";
  readonly min?: number;
  readonly max?: number;
  readonly step?: number;
  readonly unit?: UnitKey;
  readonly integer?: boolean;
};

export type SelectInputDef = {
  readonly kind: "select";
  readonly options: ReadonlyArray<{
    readonly value: string;
    readonly i18nKey: string;
  }>;
};

export type ToggleInputDef = {
  readonly kind: "toggle";
};

export type DateInputDef = {
  readonly kind: "date";
  readonly min?: string;
  readonly max?: string;
};

export type TextInputDef = {
  readonly kind: "text";
  readonly maxLength?: number;
  readonly pattern?: string;
};

export type InputKind =
  | NumberInputDef
  | SelectInputDef
  | ToggleInputDef
  | DateInputDef
  | TextInputDef;

export interface InputDef {
  readonly id: string;
  readonly type: InputKind;
  readonly defaultValue: number | string | boolean;
  readonly required?: boolean;
  readonly group?: string;
}

export type OutputFormat =
  | "number"
  | "currency"
  | "percent"
  | "duration"
  | "text"
  | "date"
  | "list";

export interface OutputDef {
  readonly id: string;
  readonly format: OutputFormat;
  readonly precision?: number;
  readonly unit?: UnitKey;
  readonly highlight?: boolean;
  readonly group?: string;
}

export type VisualizationKind =
  | "gauge"
  | "bar"
  | "line"
  | "pie"
  | "donut"
  | "table"
  | "schematic"
  | "stack";

export interface VisualizationDef<TResult = Record<string, unknown>, TInputs = Record<string, unknown>> {
  readonly kind: VisualizationKind;
  readonly id: string;
  readonly build: (result: TResult, inputs: TInputs, locale: Locale) => ChartSpec;
}

export interface ChartSpec {
  readonly title?: string;
  readonly subtitle?: string;
  readonly series: ReadonlyArray<ChartSeries>;
  readonly xAxis?: ChartAxis;
  readonly yAxis?: ChartAxis;
  readonly options?: Readonly<Record<string, unknown>>;
}

export interface ChartSeries {
  readonly name?: string;
  readonly type?: "line" | "bar" | "pie" | "value";
  readonly data: ReadonlyArray<number | string | { name: string; value: number }>;
  readonly color?: string;
}

export interface ChartAxis {
  readonly type?: "category" | "value" | "time";
  readonly data?: ReadonlyArray<string | number>;
  readonly name?: string;
  readonly min?: number;
  readonly max?: number;
}

export type ComputeFn<TInputs = Record<string, unknown>, TResult = Record<string, unknown>> = (
  inputs: TInputs,
) => TResult;

export interface CalculatorReferences {
  readonly title: string;
  readonly url?: string;
  readonly authority?: string;
}

export interface CalculatorMeta {
  readonly formulaLatex?: string;
  readonly references: ReadonlyArray<CalculatorReferences>;
  readonly accuracyNote?: string;
  readonly disclaimer?: string;
}

export interface CalculatorDefinition<
  TInputs extends Record<string, unknown> = Record<string, unknown>,
  TResult extends Record<string, unknown> = Record<string, unknown>,
> {
  readonly slug: string;
  readonly category: CalculatorCategory;
  readonly priority: "P0" | "P1" | "P2";
  readonly icon: string;
  readonly inputs: ReadonlyArray<InputDef>;
  readonly outputs: ReadonlyArray<OutputDef>;
  readonly inputSchema: ZodTypeAny;
  readonly compute: ComputeFn<TInputs, TResult>;
  readonly visualizations?: ReadonlyArray<VisualizationDef<TResult, TInputs>>;
  readonly i18n: CalculatorI18n;
  readonly meta: CalculatorMeta;
  readonly related?: ReadonlyArray<string>;
  readonly tags?: ReadonlyArray<string>;
}

export type AnyCalculatorDefinition = CalculatorDefinition<Record<string, unknown>, Record<string, unknown>>;

export function defineCalculator<
  TSchema extends ZodTypeAny,
  TResult extends Record<string, unknown>,
>(definition: {
  slug: string;
  category: CalculatorCategory;
  priority: "P0" | "P1" | "P2";
  icon: string;
  inputs: ReadonlyArray<InputDef>;
  outputs: ReadonlyArray<OutputDef>;
  inputSchema: TSchema;
  compute: (inputs: z.infer<TSchema>) => TResult;
  visualizations?: ReadonlyArray<VisualizationDef<TResult, z.infer<TSchema>>>;
  i18n: CalculatorI18n;
  meta: CalculatorMeta;
  related?: ReadonlyArray<string>;
  tags?: ReadonlyArray<string>;
}): CalculatorDefinition<z.infer<TSchema>, TResult> {
  return definition as CalculatorDefinition<z.infer<TSchema>, TResult>;
}
