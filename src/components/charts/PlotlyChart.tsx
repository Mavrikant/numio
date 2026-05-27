/**
 * PlotlyChart — interactive Plotly.js wrapper for data-analysis tools.
 *
 * Heavier bundle (~700KB minified). Used ONLY in standalone tools where the
 * user uploads a CSV and explores it — never on calculator pages. Lazy-loaded
 * via React.lazy in the tool components.
 *
 * Theme-aware layout that respects the site's dark mode.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import type { Data, Layout, Config } from "plotly.js";
import { getChartTheme } from "./ChartJsBase";

// react-plotly.js doesn't have proper TS types in some versions; the wrapper
// component is provided by the factory.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let PlotComponent: any = null;

async function loadPlotComponent(): Promise<void> {
  if (PlotComponent) return;
  const [PlotlyModule, factoryModule] = await Promise.all([
    import("plotly.js-dist-min"),
    import("react-plotly.js/factory"),
  ]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Plotly = (PlotlyModule as any).default ?? PlotlyModule;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createPlotlyComponent = (factoryModule as any).default ?? factoryModule;
  PlotComponent = createPlotlyComponent(Plotly);
}

interface PlotlyChartProps {
  readonly data: Data[];
  readonly layout?: Partial<Layout>;
  readonly config?: Partial<Config>;
  readonly height?: number;
  readonly className?: string;
}

export default function PlotlyChart({
  data,
  layout = {},
  config = {},
  height,
  className,
}: PlotlyChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const theme = getChartTheme();

  // Detect mobile/tablet at first render so margins + height degrade for small viewports.
  // We use useState so the value is stable across re-renders; resize won't re-pick a tier
  // mid-session, but layout `responsive: true` handles in-viewport rescaling.
  const [viewportTier] = useState<"sm" | "md" | "lg">(() => {
    if (typeof window === "undefined") return "lg";
    const w = window.innerWidth;
    if (w < 640) return "sm";
    if (w < 1024) return "md";
    return "lg";
  });

  // Honor user-passed height first; otherwise pick a sensible default per tier.
  const resolvedHeight =
    height ?? (viewportTier === "sm" ? 300 : viewportTier === "md" ? 420 : 480);

  const responsiveMargins =
    viewportTier === "sm"
      ? { t: 30, r: 10, b: 40, l: 40 }
      : { t: 40, r: 20, b: 60, l: 60 };

  useEffect(() => {
    void loadPlotComponent().then(() => setReady(true));
  }, []);

  const themedLayout = useMemo<Partial<Layout>>(
    () => ({
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      font: { color: theme.text, family: "inherit" },
      margin: responsiveMargins,
      colorway: theme.palette,
      hoverlabel: {
        bgcolor: theme.background,
        bordercolor: theme.border,
        font: { color: theme.text },
      },
      ...layout,
      xaxis: {
        gridcolor: theme.grid,
        zerolinecolor: theme.border,
        linecolor: theme.border,
        tickcolor: theme.border,
        ...(layout.xaxis ?? {}),
      },
      yaxis: {
        gridcolor: theme.grid,
        zerolinecolor: theme.border,
        linecolor: theme.border,
        tickcolor: theme.border,
        ...(layout.yaxis ?? {}),
      },
    }),
    [layout, responsiveMargins, theme.background, theme.border, theme.grid, theme.palette, theme.text],
  );

  const themedConfig = useMemo<Partial<Config>>(
    () => ({
      displaylogo: false,
      responsive: true,
      displayModeBar: false,
      modeBarButtonsToRemove: ["lasso2d", "select2d"],
      ...config,
    }),
    [config],
  );

  if (!ready || !PlotComponent) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{ height: resolvedHeight }}
        aria-busy="true"
      >
        <div className="flex h-full items-center justify-center text-sm text-slate-400">
          Loading chart…
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className} style={{ width: "100%" }}>
      <PlotComponent
        data={data}
        layout={{ ...themedLayout, autosize: true, height: resolvedHeight }}
        config={themedConfig}
        useResizeHandler
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
