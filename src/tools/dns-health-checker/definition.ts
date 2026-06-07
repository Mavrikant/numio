import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "dns-health-checker",
  category: "developer",
  priority: "P1",
  icon: "activity",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "DNS over HTTPS", url: "https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/", authority: "Cloudflare" }],
    disclaimer: "Audits a domain's NS, A, AAAA, MX, SPF and DMARC records via Cloudflare's public DNS-over-HTTPS endpoint (1.1.1.1). All queries run from your browser; third-party DNS may be rate-limited or blocked by your network.",
  },
  related: ["dns-lookup", "spf-checker", "dmarc-checker"],
  tags: ["dns health checker", "domain dns audit", "spf dmarc check", "mx record check", "dns report card"],
});
