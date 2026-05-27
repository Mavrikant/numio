import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "palindrome-checker",
  category: "text",
  priority: "P2",
  icon: "arrow-left-right",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["text-reverse", "word-counter", "case-converter"],
  tags: ["palindrome checker", "is it a palindrome", "palindrome test", "reverse text check"],
});
