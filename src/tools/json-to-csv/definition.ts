import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "json-to-csv",
  category: "developer",
  priority: "P1",
  icon: "table",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Conversion runs entirely in your browser." },
  related: ["csv-to-json", "json-formatter", "url-parser"],
  tags: ["json to csv", "convert json", "json csv converter", "json to spreadsheet", "export json"],
});
