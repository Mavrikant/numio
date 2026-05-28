import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "iban-generator",
  category: "developer",
  priority: "P2",
  icon: "credit-card",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "ISO 13616 IBAN", url: "https://en.wikipedia.org/wiki/International_Bank_Account_Number", authority: "Wikipedia" }],
    disclaimer: "Generates IBANs with valid mod-97 check digits and country-specific lengths for testing only. These IBANs are NOT real bank accounts — never use them for payments.",
  },
  related: ["iban-validator", "tc-kimlik-validator", "credit-card-validator"],
  tags: ["iban generator", "test iban", "fake iban", "generate iban", "iban validator test"],
});
