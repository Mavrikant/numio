import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ping-latency-test",
  category: "developer",
  priority: "P2",
  icon: "wifi",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Approximates round-trip latency to common hosts using HTTP fetch from your browser. Numbers include DNS, TCP, TLS and HTTP overhead — they are higher than an ICMP ping but useful as a relative comparison." },
  related: ["bandwidth-calculator", "subnet-calculator", "user-agent-parser"],
  tags: ["ping latency test", "browser ping", "latency check", "rtt test", "network latency"],
});
