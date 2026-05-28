import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "gitignore-generator",
  category: "developer",
  priority: "P2",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Bundles curated .gitignore snippets in your browser. Tick the languages, frameworks and operating systems you use and copy the combined result." },
  related: ["json-formatter", "cron-explainer", "regex-tester"],
  tags: ["gitignore generator", "gitignore", "git ignore template", "create gitignore", "gitignore file"],
});
