import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "fraction",
  category: "math",
  priority: "P1",
  icon: "calculator",
  inputs: [
    {
      id: "value",
      type: { kind: "number" },
      defaultValue: 0,
      required: true,
    },
  ],
  outputs: [
    {
      id: "result",
      format: "number",
      highlight: true,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Example Reference",
        url: "https://example.com",
      },
    ],
  },
});
