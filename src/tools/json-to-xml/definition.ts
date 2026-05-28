import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "json-to-xml",
  category: "developer",
  priority: "P1",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Converts JSON to XML in your browser. Object keys become element names; arrays repeat their element." },
  related: ["xml-formatter", "json-formatter", "csv-to-json"],
  tags: ["json to xml", "convert json to xml", "json xml converter", "json to xml online", "transform json"],
});
