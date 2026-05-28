import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "svg-optimizer",
  category: "developer",
  priority: "P2",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Performs lightweight regex-based cleanups (strip XML declaration, comments, metadata, editor namespaces, default-value attributes, whitespace). Not a full SVGO replacement — for complex SVGs, run the official SVGO afterwards." },
  related: ["image-format-converter", "image-to-base64", "css-minifier"],
  tags: ["svg optimizer", "svg minifier", "shrink svg", "clean svg", "svg cleanup"],
});
