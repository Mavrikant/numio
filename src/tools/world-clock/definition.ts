import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "world-clock",
  category: "developer",
  priority: "P2",
  icon: "globe",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Displays the current time in major cities using your browser's Intl APIs. Updates once per second." },
  related: ["timezone-converter", "timestamp-converter", "countdown"],
  tags: ["world clock", "city clocks", "global time", "current time worldwide", "time zone dashboard"],
});
