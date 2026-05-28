import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "dns-lookup",
  category: "developer",
  priority: "P1",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "DNS over HTTPS", url: "https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/", authority: "Cloudflare" }],
    disclaimer: "Looks up DNS records via Cloudflare's public DNS-over-HTTPS endpoint (1.1.1.1). The query never leaves your browser except via that single HTTPS request to Cloudflare.",
  },
  related: ["subnet-calculator", "ipv4-converter", "user-agent-parser"],
  tags: ["dns lookup", "doh lookup", "dns query online", "a record lookup", "mx record check"],
});
