import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "nanoid-generator",
  category: "developer",
  priority: "P2",
  icon: "hash",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Nano ID", url: "https://github.com/ai/nanoid", authority: "GitHub" }],
    disclaimer: "Generates compact URL-safe IDs in your browser using crypto-grade randomness. Customise length and alphabet to suit your use case.",
  },
  related: ["uuid-generator", "ulid-generator", "random-string-generator"],
  tags: ["nanoid generator", "nano id", "short id generator", "url safe id", "random id"],
});
