import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "cron-next-runs",
  category: "developer",
  priority: "P2",
  icon: "clock",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "cron", url: "https://en.wikipedia.org/wiki/Cron", authority: "Wikipedia" }],
    disclaimer: "Computes the next N executions of a standard 5-field cron expression in your browser. Special strings like @daily are not supported.",
  },
  related: ["cron-explainer", "timestamp-converter", "countdown"],
  tags: ["cron next runs", "cron preview", "next 10 cron runs", "cron simulator", "cron schedule preview"],
});
