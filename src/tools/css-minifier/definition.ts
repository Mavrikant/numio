import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "css-minifier",
  category: "developer",
  priority: "P2",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Minification is a simple whitespace/comment strip and runs entirely in your browser." },
  related: ["json-formatter", "html-entities", "color-converter"],
  tags: ["css minifier", "minify css", "css compressor", "compress css", "css optimizer"],
});
