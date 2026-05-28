import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "json-to-typescript",
  category: "developer",
  priority: "P1",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Infers TypeScript interfaces from a JSON sample in your browser. Nested objects produce nested interfaces; mixed-type arrays use a union." },
  related: ["json-formatter", "json-to-xml", "yaml-json-converter"],
  tags: ["json to typescript", "json to ts types", "typescript interface generator", "json schema", "infer ts types"],
});
