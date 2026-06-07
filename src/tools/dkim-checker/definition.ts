import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "dkim-checker",
  category: "developer",
  priority: "P1",
  icon: "key",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "RFC 6376 — DomainKeys Identified Mail (DKIM) Signatures", url: "https://www.rfc-editor.org/rfc/rfc6376", authority: "IETF" }],
    disclaimer: "Looks up the DKIM key TXT record at <selector>._domainkey.<domain> via Cloudflare's public DNS-over-HTTPS endpoint (1.1.1.1). Parsing happens entirely in your browser; the only request leaving your device is the single HTTPS DNS query to Cloudflare.",
  },
  related: ["spf-checker", "dmarc-checker", "dns-lookup"],
  tags: ["dkim checker", "dkim record lookup", "dkim selector", "domainkeys", "email authentication"],
});
