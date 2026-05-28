import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "tc-kimlik-validator",
  category: "developer",
  priority: "P1",
  icon: "user-check",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Turkish Identification Number", url: "https://en.wikipedia.org/wiki/Turkish_Identification_Number", authority: "Wikipedia" }],
    disclaimer: "Validates the checksum of a TC Kimlik No (Turkish national ID) in your browser. A valid checksum means the number is well-formed — it does not verify it against any government registry.",
  },
  related: ["iban-validator", "credit-card-validator", "hash-generator"],
  tags: ["tc kimlik validator", "tc kimlik no", "turkish id checker", "tc no doğrulama", "kimlik doğrulama"],
});
