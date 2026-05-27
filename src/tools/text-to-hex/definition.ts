import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "text-to-hex",
  category: "text",
  priority: "P2",
  icon: "hash",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["text-to-binary", "base64", "color-converter"],
  tags: ["text to hex", "hex to text", "hex converter", "ascii to hex", "hexadecimal"],
});
