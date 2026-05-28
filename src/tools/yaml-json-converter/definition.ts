import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "yaml-json-converter",
  category: "developer",
  priority: "P1",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Converts between YAML and JSON in your browser using js-yaml. Nothing is uploaded." },
  related: ["json-formatter", "json-to-xml", "json-diff"],
  tags: ["yaml to json", "json to yaml", "yaml json converter", "yml to json", "convert yaml json"],
});
