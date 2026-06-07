import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "spf-checker",
  category: "developer",
  priority: "P1",
  icon: "shield-check",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "RFC 7208 — Sender Policy Framework (SPF)", url: "https://www.rfc-editor.org/rfc/rfc7208", authority: "IETF" }],
    disclaimer: "Looks up the domain's SPF TXT record via Cloudflare's public DNS-over-HTTPS endpoint (1.1.1.1). Parsing happens entirely in your browser; the only request leaving your device is the single HTTPS DNS query to Cloudflare.",
  },
  related: ["dmarc-checker", "dkim-checker", "dns-lookup"],
  tags: ["spf checker", "spf record lookup", "spf validator", "sender policy framework", "email authentication"],
});
