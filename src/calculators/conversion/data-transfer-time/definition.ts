import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "data-transfer-time",
  category: "conversion",
  priority: "P2",
  icon: "download",
  inputs: [
    { id: "fileSize", type: { kind: "number", min: 0.01, max: 1e9, step: 0.1 }, defaultValue: 5, required: true },
    {
      id: "fileSizeUnit",
      type: { kind: "select", options: [{ value: "MB", i18nKey: "MB" }, { value: "GB", i18nKey: "GB" }, { value: "TB", i18nKey: "TB" }] },
      defaultValue: "GB",
      required: true,
    },
    { id: "speed", type: { kind: "number", min: 0.01, max: 1e9, step: 1 }, defaultValue: 100, required: true },
    {
      id: "speedUnit",
      type: { kind: "select", options: [{ value: "Mbps", i18nKey: "Mbps" }, { value: "MBps", i18nKey: "MBps" }, { value: "Gbps", i18nKey: "Gbps" }] },
      defaultValue: "Mbps",
      required: true,
    },
  ],
  outputs: [
    { id: "seconds", format: "number", precision: 1, unit: "second", highlight: true },
    { id: "minutes", format: "number", precision: 2, unit: "minute" },
    { id: "hours", format: "number", precision: 3, unit: "hour" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "t = \\frac{\\text{size} \\times 8}{\\text{speed}}",
    references: [{ title: "Data-rate units", url: "https://en.wikipedia.org/wiki/Data-rate_units", authority: "Wikipedia" }],
    disclaimer: "A theoretical best-case time using decimal units (1 MB = 1,000,000 bytes). Real transfers are slower due to overhead, latency and congestion.",
  },
  related: ["data-storage", "fuel-cost", "speed"],
  tags: ["download time calculator", "data transfer time", "file transfer time", "bandwidth time", "upload time"],
});
