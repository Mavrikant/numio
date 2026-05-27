import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "modulo",
  category: "math",
  priority: "P2",
  icon: "percent",
  inputs: [
    { id: "dividend", type: { kind: "number", min: -1e15, max: 1e15, step: 1 }, defaultValue: 17, required: true },
    { id: "divisor", type: { kind: "number", min: -1e15, max: 1e15, step: 1 }, defaultValue: 5, required: true },
  ],
  outputs: [
    { id: "remainder", format: "number", precision: 6, highlight: true },
    { id: "moduloFloored", format: "number", precision: 6 },
    { id: "quotient", format: "number", precision: 0 },
    { id: "flooredQuotient", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "a \\bmod b = a - b\\lfloor a/b \\rfloor",
    references: [{ title: "Modulo operation", url: "https://en.wikipedia.org/wiki/Modulo", authority: "Wikipedia" }],
    disclaimer: "The truncated remainder matches JavaScript/C %; the floored modulo follows the divisor's sign (like Python). They agree when both operands are positive.",
  },
  related: ["lcm-gcd", "prime-factorization", "fraction"],
  tags: ["modulo calculator", "remainder calculator", "mod", "modulus", "quotient and remainder"],
});
