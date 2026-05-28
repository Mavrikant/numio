import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "port-lookup",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Service Name and Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml", authority: "IANA" }],
    disclaimer: "Curated reference of common IANA well-known ports and widely-used registered ports. Not the full registry — for that, consult IANA directly.",
  },
  related: ["subnet-calculator", "mac-address-validator", "ipv4-converter"],
  tags: ["port number lookup", "iana ports", "well known ports", "tcp udp ports", "port reference"],
});
