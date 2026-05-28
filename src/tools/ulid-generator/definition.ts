import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ulid-generator",
  category: "developer",
  priority: "P2",
  icon: "hash",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "ULID Spec", url: "https://github.com/ulid/spec", authority: "GitHub" }],
    disclaimer: "Generates ULIDs (Universally Unique Lexicographically Sortable Identifiers) in your browser using crypto-grade randomness.",
  },
  related: ["uuid-generator", "nanoid-generator", "random-string-generator"],
  tags: ["ulid generator", "ulid", "sortable id generator", "lexicographic uuid", "crockford base32"],
});
