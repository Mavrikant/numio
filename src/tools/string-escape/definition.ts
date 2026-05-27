import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "string-escape",
  category: "developer",
  priority: "P2",
  icon: "quote",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["json-formatter", "base64", "html-entities"],
  tags: ["string escape", "escape string", "unescape", "json escape", "javascript escape", "backslash escape"],
});
