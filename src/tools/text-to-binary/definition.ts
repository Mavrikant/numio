import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "text-to-binary",
  category: "text",
  priority: "P2",
  icon: "binary",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["base64", "text-reverse", "word-counter"],
  tags: ["text to binary", "binary to text", "binary translator", "binary converter", "ascii to binary"],
});
