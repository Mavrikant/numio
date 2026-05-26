/**
 * ChartPanel — dynamically imports and renders calculator visualizations.
 *
 * Because visualization components can be heavy (SVG, ECharts, etc.) they are
 * loaded lazily via React.lazy + Suspense. Each VisualizationDef has a `build`
 * function that produces a ChartSpec, but the actual rendering component lives
 * in the calculator's `visualizations.tsx`. We accept the rendered JSX element
 * from the parent (CalculatorView) to stay decoupled from the calculator module.
 */

import React from "react";
import type { VisualizationDef } from "@/types/calculator";
import type { Locale } from "@/config/site";

interface ChartPanelProps {
  readonly visualizations: ReadonlyArray<VisualizationDef>;
  readonly result: Record<string, unknown>;
  readonly inputs: Record<string, unknown>;
  readonly locale: Locale;
  /** Lazily-loaded chart components, keyed by visualization id */
  readonly components: Record<string, React.ComponentType<{ result: Record<string, unknown>; inputs: Record<string, unknown> }>>;
}

export function ChartPanel({
  visualizations,
  result,
  inputs,
  components,
}: ChartPanelProps) {
  if (visualizations.length === 0) return null;

  return (
    <div className="space-y-6">
      {visualizations.map((viz) => {
        const Component = components[viz.id];
        if (!Component) return null;
        return (
          <div key={viz.id} className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
            <React.Suspense
              fallback={
                <div className="flex h-40 items-center justify-center text-sm text-slate-400">
                  Loading chart…
                </div>
              }
            >
              <Component result={result} inputs={inputs} />
            </React.Suspense>
          </div>
        );
      })}
    </div>
  );
}
