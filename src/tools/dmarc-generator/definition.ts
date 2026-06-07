import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "dmarc-generator",
  category: "developer",
  priority: "P2",
  icon: "shield",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "RFC 7489 — Domain-based Message Authentication, Reporting, and Conformance (DMARC)", url: "https://www.rfc-editor.org/rfc/rfc7489", authority: "IETF" }],
    disclaimer: "Builds a DMARC TXT record string from your inputs entirely in your browser. Nothing is sent anywhere — copy the generated record and publish it at the shown _dmarc host in your DNS.",
  },
  related: ["dmarc-checker", "spf-checker", "dns-lookup"],
  tags: ["dmarc generator", "dmarc record builder", "dmarc policy", "email authentication", "create dmarc record"],
});
