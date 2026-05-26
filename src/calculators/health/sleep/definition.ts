import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  mode: z.enum(["from_bedtime", "from_waketime"]),
  inputTime: z.string().regex(/^\d{2}:\d{2}$/, "Time must be in HH:MM format"),
  cycleCount: z.number().int().min(4).max(9),
});

export default defineCalculator({
  slug: "sleep",
  category: "health",
  priority: "P1",
  icon: "moon",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "from_bedtime", i18nKey: "from_bedtime" },
          { value: "from_waketime", i18nKey: "from_waketime" },
        ],
      },
      defaultValue: "from_bedtime",
      required: true,
    },
    {
      id: "inputTime",
      type: { kind: "text", maxLength: 5, pattern: "\\d{2}:\\d{2}" },
      defaultValue: "23:00",
      required: true,
    },
    {
      id: "cycleCount",
      type: { kind: "number", min: 4, max: 9, step: 1, integer: true },
      defaultValue: 6,
      required: true,
    },
  ],
  outputs: [
    { id: "recommendedTimes", format: "list", highlight: true },
    { id: "sleepDurationHours", format: "number", precision: 1, unit: "hour" },
    { id: "cyclesOptions", format: "list" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Stages of Sleep",
        url: "https://www.sleepfoundation.org/stages-of-sleep",
        authority: "Sleep Foundation",
      },
      {
        title: "Sleep Cycles and What Happens While You Sleep",
        url: "https://www.sleepfoundation.org/sleep-hygiene/sleep-cycle",
        authority: "Sleep Foundation",
      },
    ],
    disclaimer:
      "Sleep needs vary by individual. These recommendations are based on average 90-minute sleep cycles and 14-minute sleep onset latency. Consult a healthcare professional for sleep disorders.",
  },
  related: ["bmr", "water-intake"],
  tags: ["health", "sleep", "wellness", "sleep-cycle", "circadian"],
});
