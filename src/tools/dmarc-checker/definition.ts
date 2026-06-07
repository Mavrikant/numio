import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "dmarc-checker",
  category: "developer",
  priority: "P1",
  icon: "shield-check",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "RFC 7489 — Domain-based Message Authentication, Reporting, and Conformance (DMARC)", url: "https://www.rfc-editor.org/rfc/rfc7489", authority: "IETF" }],
    disclaimer: "Looks up the domain's _dmarc TXT record via Cloudflare's public DNS-over-HTTPS endpoint (1.1.1.1). Parsing happens entirely in your browser; the only request leaving your device is the single HTTPS DNS query to Cloudflare.",
  },
  related: ["spf-checker", "dmarc-generator", "dns-health-checker"],
  tags: ["dmarc checker", "dmarc record lookup", "dmarc validator", "email authentication", "dmarc policy"],
});
