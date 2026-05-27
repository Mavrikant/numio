import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "pension",
  category: "finance",
  priority: "P2",
  icon: "piggy-bank",
  inputs: [
    {
      id: "currentPot",
      type: { kind: "number", min: 0, max: 100_000_000, step: 100, unit: "usd" },
      defaultValue: 50000,
      required: true,
    },
    {
      id: "currentAge",
      type: { kind: "number", min: 16, max: 90, step: 1, unit: "year", integer: true },
      defaultValue: 40,
      required: true,
    },
    {
      id: "retirementAge",
      type: { kind: "number", min: 40, max: 95, step: 1, unit: "year", integer: true },
      defaultValue: 65,
      required: true,
    },
    {
      id: "annualContribution",
      type: { kind: "number", min: 0, max: 1_000_000, step: 100, unit: "usd" },
      defaultValue: 6000,
      required: true,
    },
    {
      id: "expectedReturn",
      type: { kind: "number", min: -10, max: 25, step: 0.1, unit: "percent" },
      defaultValue: 5,
      required: true,
    },
    {
      id: "targetIncome",
      type: { kind: "number", min: 0, max: 10_000_000, step: 100, unit: "usd" },
      defaultValue: 40000,
      required: true,
    },
    {
      id: "lifeExpectancy",
      type: { kind: "number", min: 50, max: 120, step: 1, unit: "year", integer: true },
      defaultValue: 85,
      required: false,
    },
  ],
  outputs: [
    { id: "potAtRetirement", format: "currency", precision: 2, highlight: true },
    { id: "safeAnnualIncome", format: "currency", precision: 2, highlight: true },
    { id: "yearsUntilExhaustion", format: "number", precision: 1, unit: "year" },
    { id: "realValueAtRetirement", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "FV = P(1+r)^n + C\\dfrac{(1+r)^n - 1}{r}, \\quad t = \\dfrac{\\ln\\!\\left(\\tfrac{W}{W - rFV}\\right)}{\\ln(1+r)}",
    references: [
      {
        title: "Determining Withdrawal Rates Using Historical Data (Bengen, 1994)",
        url: "https://www.financialplanningassociation.org/sites/default/files/2020-05/MAR04%20Determining%20Withdrawal%20Rates%20Using%20Historical%20Data.pdf",
        authority: "Journal of Financial Planning / Bengen",
      },
      {
        title: "Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable (Trinity Study)",
        url: "https://www.aaii.com/files/pdf/6794_retirement-savings-choosing-a-withdrawal-rate-that-is-sustainable.pdf",
        authority: "Trinity Study (Cooley, Hubbard, Walz)",
      },
      {
        title: "How much income will you need in retirement?",
        url: "https://www.consumerfinance.gov/consumer-tools/retirement/before-you-claim/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
    ],
    disclaimer:
      "Projections assume constant nominal return and contributions, and a flat 2.5% long-run inflation assumption. Real markets vary, sequence-of-returns risk matters, and the 4% rule is a heuristic not a guarantee. Consult a regulated financial adviser before making decisions.",
  },
  related: ["retirement", "compound-interest", "savings-goal"],
  tags: ["pension", "retirement", "drawdown", "4 percent rule", "FIRE", "finance"],
});
