import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "number-base-converter",
  category: "developer",
  priority: "P2",
  icon: "binary",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Conversion runs entirely in your browser; values are limited to safe integers." },
  related: ["text-to-hex", "text-to-binary", "color-converter"],
  tags: ["number base converter", "binary octal decimal hex", "base converter", "hex to decimal", "binary to decimal"],
});
