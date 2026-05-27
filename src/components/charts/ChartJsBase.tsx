/**
 * ChartJsBase — common Chart.js setup + theme detection.
 *
 * Registers all Chart.js controllers/elements once. Other chart wrappers
 * (LineChart, BarChart, PieChart, ScatterChart) import from here.
 *
 * Bundle: ~70KB gzipped for chart.js + react-chartjs-2. Lazy-loaded
 * via React.lazy in any consumer to keep initial JS small.
 */

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LogarithmicScale,
  TimeScale,
  RadialLinearScale,
} from "chart.js";

let registered = false;

export function ensureChartJsRegistered(): void {
  if (registered) return;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    TimeScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );
  registered = true;
}

/** Detect prefers-color-scheme; returns true if dark mode active. */
export function isDarkMode(): boolean {
  if (typeof document === "undefined") return false;
  return (
    document.documentElement.classList.contains("dark") ||
    (typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches)
  );
}

/** Theme-aware default colors for Chart.js. */
export function getChartTheme(dark: boolean = isDarkMode()) {
  return {
    text: dark ? "#cbd5e1" : "#334155",
    grid: dark ? "rgba(148, 163, 184, 0.15)" : "rgba(100, 116, 139, 0.15)",
    border: dark ? "#475569" : "#cbd5e1",
    background: dark ? "#0f172a" : "#ffffff",
    palette: [
      "#3b82f6", // blue
      "#22c55e", // green
      "#eab308", // yellow
      "#f97316", // orange
      "#ef4444", // red
      "#8b5cf6", // purple
      "#06b6d4", // cyan
      "#ec4899", // pink
    ],
  };
}

export { ChartJS };
