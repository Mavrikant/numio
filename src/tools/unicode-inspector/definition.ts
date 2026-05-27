import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "unicode-inspector",
  category: "developer",
  priority: "P2",
  icon: "scan-text",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["text-to-hex", "text-to-binary", "html-entities"],
  tags: ["unicode inspector", "code points", "character codes", "utf-8 bytes", "unicode lookup"],
});
