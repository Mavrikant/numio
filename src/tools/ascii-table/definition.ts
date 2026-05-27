import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ascii-table",
  category: "developer",
  priority: "P2",
  icon: "table",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "ASCII", url: "https://en.wikipedia.org/wiki/ASCII", authority: "Wikipedia" }],
    disclaimer: "Reference table of the 128 standard ASCII characters in decimal, hex, octal and binary.",
  },
  related: ["text-to-binary", "text-to-hex", "unicode-inspector"],
  tags: ["ascii table", "ascii chart", "ascii codes", "character codes", "ascii to hex"],
});
