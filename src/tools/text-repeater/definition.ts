import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "text-repeater",
  category: "text",
  priority: "P2",
  icon: "repeat",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["word-counter", "case-converter", "lorem-ipsum"],
  tags: ["text repeater", "repeat text", "duplicate text", "repeat string", "repeater"],
});
