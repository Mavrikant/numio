import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "timezone-converter",
  category: "developer",
  priority: "P1",
  icon: "globe",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "IANA Time Zone Database", url: "https://www.iana.org/time-zones", authority: "IANA" }],
    disclaimer: "Converts between IANA time zones using your browser's Intl APIs. Daylight saving rules follow the host's tz database.",
  },
  related: ["timestamp-converter", "countdown", "cron-explainer"],
  tags: ["timezone converter", "world clock", "time zone calculator", "iana timezones", "meeting planner"],
});
