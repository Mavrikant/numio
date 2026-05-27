import type { ToolI18n, ToolI18nBundle } from "@/types/tool";
import { LOCALES } from "@/config/site";

const en: ToolI18nBundle = {
  title: "Time Series Visualizer",
  short: "Upload CSV with a date column, plot values over time with optional moving averages.",
  description: "Free time-series chart tool. Upload CSV data with a date or numeric time column, choose value columns, and plot trends with optional moving averages.",
  keywords: ["time series", "line chart", "trend", "moving average", "csv"],
  ui: {
    timeColumn: "Time column",
    valueColumn: "Value column",
    showMovingAverage: "Show moving average",
    windowSize: "Window size",
  },
};

const i18n = Object.fromEntries(LOCALES.map((l) => [l, en])) as unknown as ToolI18n;

export default i18n;
