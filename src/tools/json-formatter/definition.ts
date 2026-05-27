import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "json-formatter",
  category: "developer",
  priority: "P0",
  icon: "braces",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Formatting and validation run entirely in your browser." },
  related: ["base64", "url-encode", "color-converter"],
  tags: ["json formatter", "json beautifier", "json validator", "json minify", "pretty print json", "format json"],
});
