import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "xml-to-json",
  category: "developer",
  priority: "P1",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Converts XML to JSON in your browser. Attributes are emitted with an `@` prefix and text nodes as `#text`. Not a full XML 1.0 parser — best on well-formed documents." },
  related: ["json-to-xml", "xml-formatter", "json-formatter"],
  tags: ["xml to json", "convert xml to json", "xml json converter", "xml to json online", "parse xml"],
});
