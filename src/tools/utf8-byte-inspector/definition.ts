import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "utf8-byte-inspector",
  category: "developer",
  priority: "P2",
  icon: "binary",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "UTF-8", url: "https://en.wikipedia.org/wiki/UTF-8", authority: "Wikipedia" }],
    disclaimer: "Inspects each character's Unicode code point and its UTF-8 / UTF-16 byte encoding in your browser via TextEncoder.",
  },
  related: ["text-to-binary", "text-to-hex", "unicode-inspector"],
  tags: ["utf-8 inspector", "utf-8 byte counter", "unicode code point", "utf-16 code units", "byte length of string"],
});
