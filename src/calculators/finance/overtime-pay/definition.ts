import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "overtime-pay",
  category: "finance",
  priority: "P2",
  icon: "clock",
  inputs: [
    { id: "hourlyRate", type: { kind: "number", min: 0.01, max: 100000, step: 0.5, unit: "usd" }, defaultValue: 20, required: true },
    { id: "regularHours", type: { kind: "number", min: 0, max: 10000, step: 1, unit: "hour" }, defaultValue: 40, required: true },
    { id: "overtimeHours", type: { kind: "number", min: 0, max: 10000, step: 1, unit: "hour" }, defaultValue: 5, required: false },
    { id: "overtimeMultiplier", type: { kind: "number", min: 1, max: 10, step: 0.1 }, defaultValue: 1.5, required: false },
  ],
  outputs: [
    { id: "totalPay", format: "currency", precision: 2, highlight: true },
    { id: "regularPay", format: "currency", precision: 2 },
    { id: "overtimePay", format: "currency", precision: 2 },
    { id: "overtimeRate", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{total} = r \\cdot h_{reg} + (r \\cdot m) \\cdot h_{ot}",
    references: [{ title: "Overtime pay", url: "https://en.wikipedia.org/wiki/Overtime", authority: "Wikipedia" }],
    disclaimer: "A straightforward gross-pay estimate. Actual overtime rules, thresholds and rates are set by local labour law and your contract.",
  },
  related: ["salary", "paycheck", "sales-commission"],
  tags: ["overtime pay", "overtime calculator", "time and a half", "hourly pay", "overtime rate"],
});
