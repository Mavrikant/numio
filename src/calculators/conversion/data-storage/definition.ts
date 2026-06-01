import { z } from "zod";

import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const UNITS = [
  "B",
  "KB",
  "MB",
  "GB",
  "TB",
  "PB",
  "bit",
  "Kbit",
  "Mbit",
  "Gbit",
  "Tbit",
  "Pbit",
] as const;

const inputSchema = z.object({
  value: z.number().nonnegative(),
  fromUnit: z.enum(UNITS),
  toUnit: z.enum(UNITS),
  mode: z.enum(["binary", "decimal"]),
});

export default defineCalculator({
  slug: "data-storage",
  category: "conversion",
  priority: "P1",
  icon: "database",
  inputs: [
    {
      id: "value",
      type: {
        kind: "number",
        min: 0,
        step: 0.01,
      },
      defaultValue: 1,
      required: true,
    },
    {
      id: "fromUnit",
      type: {
        kind: "select",
        options: [
          { value: "B", i18nKey: "byte" },
          { value: "KB", i18nKey: "kilobyte" },
          { value: "MB", i18nKey: "megabyte" },
          { value: "GB", i18nKey: "gigabyte" },
          { value: "TB", i18nKey: "terabyte" },
          { value: "PB", i18nKey: "petabyte" },
          { value: "bit", i18nKey: "bit" },
          { value: "Kbit", i18nKey: "kilobit" },
          { value: "Mbit", i18nKey: "megabit" },
          { value: "Gbit", i18nKey: "gigabit" },
          { value: "Tbit", i18nKey: "terabit" },
          { value: "Pbit", i18nKey: "petabit" },
        ],
      },
      defaultValue: "GB",
      required: true,
    },
    {
      id: "toUnit",
      type: {
        kind: "select",
        options: [
          { value: "B", i18nKey: "byte" },
          { value: "KB", i18nKey: "kilobyte" },
          { value: "MB", i18nKey: "megabyte" },
          { value: "GB", i18nKey: "gigabyte" },
          { value: "TB", i18nKey: "terabyte" },
          { value: "PB", i18nKey: "petabyte" },
          { value: "bit", i18nKey: "bit" },
          { value: "Kbit", i18nKey: "kilobit" },
          { value: "Mbit", i18nKey: "megabit" },
          { value: "Gbit", i18nKey: "gigabit" },
          { value: "Tbit", i18nKey: "terabit" },
          { value: "Pbit", i18nKey: "petabit" },
        ],
      },
      defaultValue: "MB",
      required: true,
    },
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "binary", i18nKey: "binary" },
          { value: "decimal", i18nKey: "decimal" },
        ],
      },
      defaultValue: "binary",
      required: true,
      group: "mode",
    },
  ],
  outputs: [
    {
      id: "result",
      format: "number",
      precision: 2,
      highlight: true,
    },
    {
      id: "explanation",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{Result} = \\text{Value} \\times \\frac{\\text{Factor}_{from}}{\\text{Factor}_{to}}",
    references: [
      {
        title: "Binary and Decimal Data Units",
        url: "https://en.wikipedia.org/wiki/Byte",
        authority: "Wikipedia",
      },
      {
        title: "IEC Binary Prefixes (KiB, MiB, GiB)",
        url: "https://en.wikipedia.org/wiki/Binary_prefix",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Binary (1024-based) and decimal (1000-based) conversions differ significantly at larger scales. Most operating systems use binary, while disk manufacturers typically use decimal.",
  },
  related: ["speed", "time-convert"],
  tags: ["data", "storage", "units", "conversion", "binary", "decimal", "bits", "bytes"],
});
