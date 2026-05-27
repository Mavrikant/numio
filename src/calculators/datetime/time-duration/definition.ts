import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "time-duration",
  category: "datetime",
  priority: "P1",
  icon: "clock",
  inputs: [
    { id: "startTime", type: { kind: "text", pattern: "^([01]?\\d|2[0-3]):[0-5]\\d$" }, defaultValue: "09:00", required: true },
    { id: "endTime", type: { kind: "text", pattern: "^([01]?\\d|2[0-3]):[0-5]\\d$" }, defaultValue: "17:30", required: true },
    {
      id: "breakMinutes",
      type: { kind: "number", min: 0, max: 1440, step: 5, unit: "minute" },
      defaultValue: 30,
      required: false,
    },
  ],
  outputs: [
    { id: "formatted", format: "text", highlight: true },
    { id: "totalHours", format: "number", precision: 2, unit: "hour" },
    { id: "totalMinutes", format: "number", precision: 0, unit: "minute" },
    { id: "hoursPart", format: "number", precision: 0 },
    { id: "minutesPart", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Working time and timesheet duration calculation",
        url: "https://en.wikipedia.org/wiki/Working_time",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Times are 24-hour wall-clock values (HH:MM). If the end time is earlier than the start, the duration is assumed to cross midnight. Daylight-saving transitions are not modelled.",
  },
  related: ["date-difference", "date-add", "age"],
  tags: ["time duration", "hours calculator", "time card", "timesheet", "hours between times", "work hours", "time difference"],
});
