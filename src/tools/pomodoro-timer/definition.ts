import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "pomodoro-timer",
  category: "developer",
  priority: "P2",
  icon: "timer",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Pomodoro Technique", url: "https://en.wikipedia.org/wiki/Pomodoro_Technique", authority: "Wikipedia" }],
    disclaimer: "A simple Pomodoro timer with focus, short-break and long-break phases. Default 25 / 5 / 15 minutes with a long break every 4 rounds — all customisable.",
  },
  related: ["timezone-converter", "countdown", "reading-time-estimator"],
  tags: ["pomodoro timer", "25 5 timer", "focus timer", "tomato timer", "study timer"],
});
