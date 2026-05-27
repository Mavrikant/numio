import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "roman-numerals",
  category: "conversion",
  priority: "P2",
  icon: "scroll",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "to-roman", i18nKey: "to-roman" },
          { value: "to-arabic", i18nKey: "to-arabic" },
        ],
      },
      defaultValue: "to-roman",
      required: true,
    },
    {
      id: "value",
      type: { kind: "text", maxLength: 20 },
      defaultValue: "2024",
      required: true,
    },
  ],
  outputs: [
    { id: "roman", format: "text", highlight: true },
    { id: "arabic", format: "number", precision: 0, highlight: true },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Roman numerals — standard subtractive notation",
        url: "https://en.wikipedia.org/wiki/Roman_numerals",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Standard Roman numerals represent 1–3999. There is no symbol for zero or negative numbers, and no universally agreed notation for 4000 and above.",
  },
  related: ["numeral-system"],
  tags: ["roman numerals", "roman numeral converter", "arabic to roman", "roman to number", "number conversion"],
});
