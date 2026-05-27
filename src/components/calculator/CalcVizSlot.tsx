/**
 * CalcVizSlot — universal slot that auto-loads a per-calculator
 * `visualizations.tsx` file (if one exists) and renders it below the
 * calculator form.
 *
 * Why this exists:
 *   - We have ~50 calcs that benefit from visualizations.
 *   - Each writes a `visualizations.tsx` exporting a default React component
 *     with props { inputs, result, locale }.
 *   - This slot resolves the file via `import.meta.glob` (NON-eager) so that
 *     only the matching module is fetched on demand — never haul every viz
 *     into every calc's bundle.
 *   - The slot also bridges the gap between CalculatorView (which holds the
 *     live inputs / result) and the viz component, which doesn't have a React
 *     parent relationship to CalculatorView. It listens to the custom
 *     `calc:inputs-changed` event CalculatorView dispatches on every update
 *     and re-computes `result` here using the calc's pure compute function.
 *
 * Viz component contract:
 *   default export: (props: { inputs, result, locale }) => JSX | null
 *   Use lazy + Suspense inside it for heavy chart libs (Plotly etc.).
 */

import {
  useEffect,
  useMemo,
  useState,
  Suspense,
  type ComponentType,
} from "react";
import type { Locale } from "@/config/site";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import { getCalculatorBySlug } from "@/lib/registry";

// Non-eager: returns a record of import functions, NOT modules. The function
// is only invoked once we know which calc the page is for.
const vizLoaders = import.meta.glob<{
  default: ComponentType<VizProps>;
}>("/src/calculators/*/*/visualizations.tsx");

export interface VizProps {
  readonly inputs: Record<string, unknown>;
  readonly result: Record<string, unknown>;
  readonly locale: Locale;
}

interface Props {
  readonly slug: string;
  readonly locale: Locale;
}

function parseInputsFromUrl(calc: AnyCalculatorDefinition): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const inp of calc.inputs) {
    out[inp.id] = inp.defaultValue;
  }
  if (typeof window === "undefined") return out;
  const params = new URLSearchParams(window.location.search);
  for (const inp of calc.inputs) {
    const raw = params.get(inp.id);
    if (raw === null) continue;
    const defaultVal = inp.defaultValue;
    if (typeof defaultVal === "number") {
      const n = parseFloat(raw);
      if (Number.isFinite(n)) out[inp.id] = n;
    } else if (typeof defaultVal === "boolean") {
      out[inp.id] = raw === "true";
    } else {
      out[inp.id] = raw;
    }
  }
  return out;
}

export default function CalcVizSlot({ slug, locale }: Props) {
  const calc = useMemo(() => getCalculatorBySlug(slug), [slug]);

  const [Comp, setComp] = useState<ComponentType<VizProps> | null>(null);
  const [missing, setMissing] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Record<string, unknown>>(() =>
    calc ? parseInputsFromUrl(calc) : {},
  );

  // 1. Try to dynamically load the per-calc viz file.
  useEffect(() => {
    if (!calc) return;
    const key = `/src/calculators/${calc.category}/${calc.slug}/visualizations.tsx`;
    const loader = vizLoaders[key];
    if (!loader) {
      setMissing(true);
      return;
    }
    let cancelled = false;
    void loader()
      .then((mod) => {
        if (cancelled) return;
        setComp(() => mod.default);
      })
      .catch(() => {
        if (!cancelled) setMissing(true);
      });
    return () => {
      cancelled = true;
    };
  }, [calc]);

  // 2. Subscribe to CalculatorView's input changes (custom event).
  useEffect(() => {
    if (!calc) return;
    const onChange = (e: Event) => {
      const ce = e as CustomEvent<{ slug: string; inputs: Record<string, unknown> }>;
      if (ce.detail?.slug !== calc.slug) return;
      if (ce.detail?.inputs) setInputs(ce.detail.inputs);
    };
    window.addEventListener("calc:inputs-changed", onChange);
    return () => window.removeEventListener("calc:inputs-changed", onChange);
  }, [calc]);

  // 3. Compute the result locally for the viz (re-uses the calc's pure fn).
  const result = useMemo<Record<string, unknown> | null>(() => {
    if (!calc) return null;
    const parsed = calc.inputSchema.safeParse(inputs);
    if (!parsed.success) return null;
    try {
      return calc.compute(parsed.data as Record<string, unknown>) as Record<string, unknown>;
    } catch {
      return null;
    }
  }, [calc, inputs]);

  if (missing || !calc || !Comp || !result) return null;

  return (
    <div className="mt-6">
      <Suspense
        fallback={
          <div className="aspect-[16/9] w-full max-h-72 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
        }
      >
        <Comp inputs={inputs} result={result} locale={locale} />
      </Suspense>
    </div>
  );
}
