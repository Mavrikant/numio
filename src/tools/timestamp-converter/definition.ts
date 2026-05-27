import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "timestamp-converter",
  category: "developer",
  priority: "P1",
  icon: "clock",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Conversions use UTC and run entirely in your browser." },
  related: ["json-formatter", "base64", "uuid-generator"],
  tags: ["unix timestamp", "epoch converter", "timestamp to date", "date to timestamp", "epoch time", "unix time"],
});
