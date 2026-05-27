import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "regex-tester",
  category: "developer",
  priority: "P1",
  icon: "regex",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Patterns run against your text locally in your browser." },
  related: ["find-and-replace", "json-formatter", "string-escape"],
  tags: ["regex tester", "regular expression tester", "regex match", "test regex", "regexp"],
});
