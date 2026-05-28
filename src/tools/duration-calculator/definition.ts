import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "duration-calculator",
  category: "developer",
  priority: "P2",
  icon: "clock",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Computes the duration between two datetimes in your browser, broken down into days/hours/minutes/seconds, with weeks and total milliseconds." },
  related: ["timestamp-converter", "timezone-converter", "countdown"],
  tags: ["duration calculator", "time between two dates", "datetime difference", "how long between", "elapsed time"],
});
