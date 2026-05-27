import type { ToolI18n, ToolI18nBundle } from "@/types/tool";
import { LOCALES } from "@/config/site";

// Stub placeholder — full 12-language version will be authored by the scatter-plot
// agent. For now we replicate the English bundle across all locales so the type
// system is satisfied and the page renders without runtime errors.
const en: ToolI18nBundle = {
  title: "Scatter Plot & Correlation",
  short: "Upload CSV data, pick X and Y columns, see relationship + regression.",
  description: "Free scatter plot tool. Upload CSV data and visualize the relationship between two numeric columns with Pearson correlation coefficient and an optional linear regression line.",
  keywords: ["scatter plot", "correlation", "regression", "csv", "data analysis"],
  ui: {
    xColumn: "X axis (independent)",
    yColumn: "Y axis (dependent)",
    showRegression: "Show regression line",
    correlation: "Pearson correlation",
    r2: "R²",
  },
};

const i18n = Object.fromEntries(LOCALES.map((l) => [l, en])) as unknown as ToolI18n;

export default i18n;
