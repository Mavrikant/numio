import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "html-formatter",
  category: "developer",
  priority: "P1",
  icon: "code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Beautifies HTML in your browser by inserting newlines and indentation between block-level tags. Inline tags stay on the line; <pre>, <script> and <style> blocks are preserved verbatim." },
  related: ["xml-formatter", "css-formatter", "html-to-text"],
  tags: ["html formatter", "html beautifier", "format html", "pretty print html", "html indent"],
});
