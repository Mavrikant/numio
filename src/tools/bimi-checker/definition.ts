import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "bimi-checker",
  category: "developer",
  priority: "P2",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "BIMI Group — Brand Indicators for Message Identification", url: "https://bimigroup.org/", authority: "AuthIndicators Working Group" }],
    disclaimer: "Looks up the BIMI TXT record at default._bimi.<domain> via Cloudflare's public DNS-over-HTTPS endpoint (1.1.1.1). Parsing and record generation happen entirely in your browser; the only request leaving your device is the single HTTPS DNS query to Cloudflare.",
  },
  related: ["dmarc-checker", "dns-lookup", "spf-checker"],
  tags: ["bimi checker", "bimi record", "bimi generator", "brand indicators", "email logo"],
});
