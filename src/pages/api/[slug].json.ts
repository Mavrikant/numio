/**
 * /calculators/api/{slug}.json — Static JSON API per calculator
 *
 * Pre-rendered at build time for each calculator. Each response includes:
 *   - Full metadata (slug, category, title, description)
 *   - Input/output schemas
 *   - An example result computed with default inputs
 *   - Formula and references
 *   - Endpoint URL
 *
 * CORS-open with a 1-hour cache so LLMs and developers can use it freely.
 */

import type { APIRoute, GetStaticPaths } from "astro";
import { getAllCalculators } from "@/lib/registry";
import { SITE_URL, BASE_PATH } from "@/config/site";
import type {
  AnyCalculatorDefinition,
  InputDef,
  OutputDef,
} from "@/types/calculator";

const EN = "en" as const;

/** Serialise a single InputDef into a plain-JSON-friendly object */
function serializeInput(inp: InputDef, calc: AnyCalculatorDefinition) {
  const i18nBundle = calc.i18n[EN];
  const labels = i18nBundle.inputs[inp.id];

  const base = {
    id: inp.id,
    label: labels?.label ?? inp.id,
    help: labels?.help ?? undefined,
    default: inp.defaultValue,
    required: inp.required ?? false,
  };

  const t = inp.type;

  if (t.kind === "number") {
    return {
      ...base,
      type: "number",
      unit: t.unit ?? null,
      min: t.min ?? null,
      max: t.max ?? null,
      step: t.step ?? null,
      integer: t.integer ?? false,
    };
  }

  if (t.kind === "select") {
    // Resolve option labels from i18n.options if available.
    // Bundle.options may be flat (`{ binary: "Binary" }`) or nested
    // (`{ unit: { binary: "Binary" } }`). Try nested first, fall back to flat.
    const opts = i18nBundle.options;
    const nested = opts?.[inp.id];
    const nestedMap: Record<string, string> | null =
      typeof nested === "object" && nested !== null
        ? (nested as Record<string, string>)
        : null;
    return {
      ...base,
      type: "select",
      options: t.options.map((o) => {
        const flat = opts?.[o.value];
        return {
          value: o.value,
          label:
            nestedMap?.[o.value] ??
            (typeof flat === "string" ? flat : undefined) ??
            o.value,
        };
      }),
    };
  }

  if (t.kind === "toggle") {
    return { ...base, type: "toggle" };
  }

  if (t.kind === "date") {
    return {
      ...base,
      type: "date",
      min: t.min ?? null,
      max: t.max ?? null,
    };
  }

  if (t.kind === "text") {
    return {
      ...base,
      type: "text",
      maxLength: t.maxLength ?? null,
      pattern: t.pattern ?? null,
    };
  }

  // Fallback
  return { ...base, type: "unknown" };
}

/** Serialise a single OutputDef into a plain-JSON-friendly object */
function serializeOutput(out: OutputDef, calc: AnyCalculatorDefinition) {
  const i18nBundle = calc.i18n[EN];
  const labels = i18nBundle.outputs[out.id];

  return {
    id: out.id,
    label: labels?.label ?? out.id,
    help: labels?.help ?? undefined,
    format: out.format,
    unit: out.unit ?? null,
    precision: out.precision ?? null,
    highlight: out.highlight ?? false,
  };
}

/** Attempt to run compute() with default inputs. Returns result or error info.
 *
 * We parse through the Zod inputSchema first so that any `.transform()` calls
 * (e.g. "4, 8, 15" → number[]) are applied before compute() is called.
 */
function computeExample(
  calc: AnyCalculatorDefinition,
): { result: Record<string, unknown> } | { error: string } {
  try {
    const rawDefaults: Record<string, unknown> = {};
    for (const inp of calc.inputs) {
      rawDefaults[inp.id] = inp.defaultValue;
    }

    // Parse through the schema to apply transforms (e.g., string → number[])
    let inputs: Record<string, unknown>;
    if (calc.inputSchema && typeof calc.inputSchema.safeParse === "function") {
      const parsed = calc.inputSchema.safeParse(rawDefaults);
      if (parsed.success) {
        inputs = parsed.data as Record<string, unknown>;
      } else {
        // Schema validation failed with defaults — fall back to raw defaults
        inputs = rawDefaults;
      }
    } else {
      inputs = rawDefaults;
    }

    const result = calc.compute(inputs);
    return { result };
  } catch (err) {
    return { error: String(err) };
  }
}

function apiUrl(slug: string): string {
  return `${SITE_URL}${BASE_PATH}/api/${slug}.json`;
}

function calcPageUrl(category: string, slug: string): string {
  return `${SITE_URL}${BASE_PATH}/en/${category}/${slug}/`;
}

export const getStaticPaths: GetStaticPaths = () => {
  const calcs = getAllCalculators();
  return calcs.map((calc) => ({
    params: { slug: calc.slug },
    props: { calc },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const { calc } = props as { calc: AnyCalculatorDefinition };

  const bundle = calc.i18n[EN];

  const inputs = calc.inputs.map((inp) => serializeInput(inp, calc));
  const outputs = calc.outputs.map((out) => serializeOutput(out, calc));

  const exampleDefaults: Record<string, unknown> = {};
  for (const inp of calc.inputs) {
    exampleDefaults[inp.id] = inp.defaultValue;
  }

  const exampleAttempt = computeExample(calc);
  const exampleResult =
    "result" in exampleAttempt ? exampleAttempt.result : null;
  const exampleError =
    "error" in exampleAttempt ? exampleAttempt.error : undefined;

  const payload: Record<string, unknown> = {
    slug: calc.slug,
    category: calc.category,
    lang: "en",
    title: bundle.title,
    description: bundle.description,
    short: bundle.short,
    inputs,
    outputs,
    exampleInputs: exampleDefaults,
    exampleResult,
    ...(exampleError ? { exampleError } : {}),
    formula: calc.meta.formulaLatex ?? null,
    formulaText: calc.meta.formulaLatex
      ? calc.meta.formulaLatex
          .replace(/\\text\{([^}]+)\}/g, "$1")
          .replace(/[{}\\]/g, "")
          .trim()
      : null,
    references: calc.meta.references.map((r) => ({
      title: r.title,
      url: r.url ?? null,
      authority: r.authority ?? null,
    })),
    accuracyNote: calc.meta.accuracyNote ?? null,
    disclaimer: calc.meta.disclaimer ?? null,
    related: calc.related ?? [],
    tags: calc.tags ?? [],
    endpoints: {
      json: apiUrl(calc.slug),
      page: calcPageUrl(calc.category, calc.slug),
    },
    schema: "https://schema.org/SoftwareApplication",
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
