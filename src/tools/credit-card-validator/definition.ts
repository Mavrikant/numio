import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "credit-card-validator",
  category: "developer",
  priority: "P2",
  icon: "credit-card",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Validates the number format only (Luhn checksum and brand prefix); it does not check whether a card is real, active or issued. Runs entirely in your browser — nothing is sent anywhere." },
  related: ["hash-generator", "regex-tester", "json-formatter"],
  tags: ["credit card validator", "luhn check", "card number validator", "luhn algorithm", "card brand detector"],
});
