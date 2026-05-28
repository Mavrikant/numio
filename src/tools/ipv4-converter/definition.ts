import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ipv4-converter",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Converts IPv4 addresses between dotted-decimal, decimal integer, hexadecimal and dotted-binary in your browser." },
  related: ["subnet-calculator", "ipv6-expand-compress", "number-base-converter"],
  tags: ["ipv4 converter", "ip to binary", "ip to hex", "ip to decimal", "ipv4 format converter"],
});
