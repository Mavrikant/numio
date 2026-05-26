import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "percentage",
  category: "math",
  priority: "P0",
  icon: "percent",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "what_is_x_pct_of_y", i18nKey: "mode_what_is_x_pct_of_y" },
          { value: "x_is_what_pct_of_y", i18nKey: "mode_x_is_what_pct_of_y" },
          { value: "pct_change", i18nKey: "mode_pct_change" },
        ],
      },
      defaultValue: "what_is_x_pct_of_y",
      required: true,
    },
    {
      id: "x",
      type: { kind: "number" },
      defaultValue: 10,
      required: true,
    },
    {
      id: "y",
      type: { kind: "number" },
      defaultValue: 100,
      required: true,
    },
  ],
  outputs: [
    {
      id: "result",
      format: "number",
      precision: 4,
      highlight: true,
    },
    {
      id: "absoluteDifference",
      format: "number",
      precision: 4,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Percentage — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Percentage",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["fraction", "average", "ratio"],
  tags: ["math", "percentage", "percent", "increase", "decrease"],
});
