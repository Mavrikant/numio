import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "text-reverse",
  category: "text",
  priority: "P2",
  icon: "flip-horizontal",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["case-converter", "word-counter", "slugify"],
  tags: ["reverse text", "text reverser", "reverse string", "backwards text", "reverse words", "reverse lines"],
});
