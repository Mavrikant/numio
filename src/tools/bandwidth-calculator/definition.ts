import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "bandwidth-calculator",
  category: "developer",
  priority: "P2",
  icon: "wifi",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Computes the theoretical download time for a file at a given line speed. Real downloads are slower due to overhead — treat the result as a lower bound." },
  related: ["data-transfer-time", "subnet-calculator", "ipv4-converter"],
  tags: ["bandwidth calculator", "download time calculator", "transfer time", "mbps to mb/s", "file download estimator"],
});
