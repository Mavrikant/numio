import type { ToolI18n, ToolI18nBundle } from "@/types/tool";
import { LOCALES } from "@/config/site";

const en: ToolI18nBundle = {
  title: "Descriptive Statistics Dashboard",
  short: "Upload CSV, see mean/median/std/quartile summary for every numeric column with mini-histograms.",
  description: "Free descriptive statistics dashboard. Upload CSV data and get a comprehensive summary of every numeric column: mean, median, mode, standard deviation, quartiles, skewness, kurtosis, plus mini-histograms.",
  keywords: ["statistics", "descriptive", "summary", "dashboard", "csv", "data analysis"],
  ui: {
    columns: "Columns",
    summary: "Summary",
    miniChart: "Mini chart",
  },
};

const i18n = Object.fromEntries(LOCALES.map((l) => [l, en])) as unknown as ToolI18n;

export default i18n;
