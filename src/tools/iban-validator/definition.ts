import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "iban-validator",
  category: "developer",
  priority: "P1",
  icon: "credit-card",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "International Bank Account Number", url: "https://en.wikipedia.org/wiki/International_Bank_Account_Number", authority: "Wikipedia" }],
    disclaimer: "Validates an IBAN against ISO 13616 (length + mod-97 checksum) in your browser. A valid checksum means the structure is correct — it does not prove the account exists.",
  },
  related: ["credit-card-validator", "tc-kimlik-validator", "hash-generator"],
  tags: ["iban validator", "iban check", "validate iban", "iban verify", "bank account checker"],
});
