import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "csv-to-json",
  category: "developer",
  priority: "P1",
  icon: "table",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Conversion runs entirely in your browser." },
  related: ["json-to-csv", "json-formatter", "url-parser"],
  tags: ["csv to json", "convert csv", "csv parser", "csv converter", "csv json"],
});
