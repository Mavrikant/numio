import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "readability-score-checker",
  category: "text",
  priority: "P1",
  icon: "book-open",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Readability test (Flesch–Kincaid)", url: "https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests", authority: "Wikipedia" }],
    disclaimer: "Computes Flesch Reading Ease, Flesch–Kincaid Grade Level, Gunning Fog, Automated Readability Index and SMOG from English text. Syllable counts are estimated and scores are approximate guides, not absolute measurements.",
  },
  related: ["syllable-counter", "reading-time-estimator", "word-counter"],
  tags: ["readability score checker", "flesch reading ease", "flesch kincaid grade", "gunning fog", "smog readability"],
});
