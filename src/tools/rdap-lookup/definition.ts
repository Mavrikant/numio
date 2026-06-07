import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "rdap-lookup",
  category: "developer",
  priority: "P1",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "RDAP (RFC 9082/9083)", url: "https://about.rdap.org/", authority: "rdap.org" }],
    disclaimer: "Queries RDAP — the structured successor to WHOIS — via the public rdap.org bootstrap, which redirects to the authoritative registry. Requests run from your browser; some registries do not send CORS headers, so a lookup may fail even though the data is public.",
  },
  related: ["dns-lookup", "whats-my-ip", "ip-location-lookup"],
  tags: ["rdap lookup", "whois lookup", "domain rdap", "ip rdap", "asn lookup"],
});
