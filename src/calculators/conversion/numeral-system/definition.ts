import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  value: z.number().finite(),
  sourceBase: z.enum(["decimal", "binary", "octal", "hexadecimal"]),
});

export default defineCalculator({
  slug: "numeral-system",
  category: "conversion",
  priority: "P2",
  icon: "binary",
  inputs: [
    {
      id: "sourceBase",
      type: {
        kind: "select",
        options: [
          { value: "decimal", i18nKey: "decimal" },
          { value: "binary", i18nKey: "binary" },
          { value: "octal", i18nKey: "octal" },
          { value: "hexadecimal", i18nKey: "hexadecimal" },
        ],
      },
      defaultValue: "decimal",
      required: true,
    },
    {
      id: "value",
      type: {
        kind: "text",
        maxLength: 100,
      },
      defaultValue: "255",
      required: true,
    },
  ],
  outputs: [
    {
      id: "decimal",
      format: "text",
      highlight: false,
    },
    {
      id: "binary",
      format: "text",
      highlight: false,
    },
    {
      id: "octal",
      format: "text",
      highlight: false,
    },
    {
      id: "hexadecimal",
      format: "text",
      highlight: false,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Number Bases and Conversion",
        url: "https://en.wikipedia.org/wiki/Numeral_system",
        authority: "Wikipedia",
      },
      {
        title: "Binary, Decimal, Octal, and Hexadecimal",
        url: "https://www.electronics-tutorials.ws/binary/bin_1.html",
        authority: "Electronics Tutorials",
      },
    ],
    accuracyNote:
      "Fractional parts are rounded to 20 significant digits. Some decimal fractions may result in repeating patterns in other bases (e.g., 0.1 decimal = 0.0001100110011... binary).",
  },
  related: ["percentage", "ratio"],
  tags: ["conversion", "number system", "binary", "hexadecimal", "base conversion"],
});
