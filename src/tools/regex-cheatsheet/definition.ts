import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "regex-cheatsheet",
  category: "developer",
  priority: "P2",
  icon: "book-open",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Regular Expressions Reference", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions", authority: "MDN" }],
    disclaimer: "Quick-reference cheatsheet for JavaScript-flavoured regular expressions. Searchable across syntax, meaning and example columns.",
  },
  related: ["regex-tester", "string-escape", "html-entities"],
  tags: ["regex cheatsheet", "regular expression reference", "regex syntax", "regex anchors", "regex quantifiers"],
});
