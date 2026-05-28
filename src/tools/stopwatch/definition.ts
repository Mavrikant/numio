import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "stopwatch",
  category: "developer",
  priority: "P2",
  icon: "timer",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "A minimal millisecond-precision stopwatch with lap times. Runs entirely in your browser using performance.now()." },
  related: ["pomodoro-timer", "countdown", "timezone-converter"],
  tags: ["stopwatch", "lap timer", "ms timer", "browser stopwatch", "millisecond timer"],
});
