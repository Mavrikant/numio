import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "unix-timestamp-batch",
  category: "developer",
  priority: "P2",
  icon: "clock",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Parses many timestamps at once in your browser. Detects 10-digit seconds, 13-digit milliseconds and ISO/RFC-2822 strings." },
  related: ["timestamp-converter", "timezone-converter", "cron-next-runs"],
  tags: ["unix timestamp batch", "epoch batch converter", "bulk timestamp converter", "many timestamps", "timestamps to dates"],
});
