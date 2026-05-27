import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "cron-explainer",
  category: "developer",
  priority: "P1",
  icon: "clock",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "cron", url: "https://en.wikipedia.org/wiki/Cron", authority: "Wikipedia" }],
    disclaimer: "Explains standard 5-field cron expressions in your browser. Special strings like @daily and non-standard extensions are not parsed.",
  },
  related: ["timestamp-converter", "countdown", "add-business-days"],
  tags: ["cron explainer", "cron expression", "crontab", "cron to english", "cron schedule"],
});
