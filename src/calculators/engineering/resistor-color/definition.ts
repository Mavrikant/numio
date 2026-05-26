import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

const colorOptions = [
  { value: "0", i18nKey: "black" },
  { value: "1", i18nKey: "brown" },
  { value: "2", i18nKey: "red" },
  { value: "3", i18nKey: "orange" },
  { value: "4", i18nKey: "yellow" },
  { value: "5", i18nKey: "green" },
  { value: "6", i18nKey: "blue" },
  { value: "7", i18nKey: "violet" },
  { value: "8", i18nKey: "gray" },
  { value: "9", i18nKey: "white" },
];

const multiplierOptions = [
  ...colorOptions,
  { value: "10", i18nKey: "gold" },
  { value: "11", i18nKey: "silver" },
];

const toleranceOptions = [
  { value: "1", i18nKey: "brown" },
  { value: "2", i18nKey: "red" },
  { value: "5", i18nKey: "green" },
  { value: "6", i18nKey: "blue" },
  { value: "7", i18nKey: "violet" },
  { value: "8", i18nKey: "gray" },
  { value: "10", i18nKey: "gold" },
  { value: "11", i18nKey: "silver" },
];

export default defineCalculator({
  slug: "resistor-color",
  category: "engineering",
  priority: "P1",
  icon: "cpu",
  inputs: [
    {
      id: "bandCount",
      type: {
        kind: "select",
        options: [
          { value: "4", i18nKey: "fourBand" },
          { value: "5", i18nKey: "fiveBand" },
        ],
      },
      defaultValue: "4",
      required: true,
    },
    {
      id: "band1",
      type: { kind: "select", options: colorOptions },
      defaultValue: "1",
      required: true,
    },
    {
      id: "band2",
      type: { kind: "select", options: colorOptions },
      defaultValue: "0",
      required: true,
    },
    {
      id: "band3",
      type: { kind: "select", options: colorOptions },
      defaultValue: "0",
      required: false,
    },
    {
      id: "multiplierBand",
      type: { kind: "select", options: multiplierOptions },
      defaultValue: "1",
      required: true,
    },
    {
      id: "toleranceBand",
      type: { kind: "select", options: toleranceOptions },
      defaultValue: "10",
      required: true,
    },
  ],
  outputs: [
    {
      id: "resistance",
      format: "number",
      precision: 2,
      unit: "ohm",
      highlight: true,
    },
    {
      id: "tolerancePct",
      format: "number",
      precision: 2,
      unit: "percent",
    },
    {
      id: "minValue",
      format: "number",
      precision: 2,
      unit: "ohm",
    },
    {
      id: "maxValue",
      format: "number",
      precision: 2,
      unit: "ohm",
    },
    {
      id: "colorName1",
      format: "text",
    },
    {
      id: "colorName2",
      format: "text",
    },
    {
      id: "colorName3",
      format: "text",
    },
    {
      id: "multiplierColorName",
      format: "text",
    },
    {
      id: "toleranceColorName",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "R_{4\\text{-band}} = (d_1 \\times 10 + d_2) \\times M, \\quad R_{5\\text{-band}} = (d_1 \\times 100 + d_2 \\times 10 + d_3) \\times M",
    references: [
      {
        title: "IEC 60062:2016 — Marking codes for resistors and capacitors",
        authority: "International Electrotechnical Commission",
        url: "https://www.iec.ch/",
      },
    ],
    disclaimer:
      "This calculator decodes standard IEC 60062 resistor color codes for 4-band and 5-band resistors. Some specialty resistors use different coding schemes.",
  },
  related: ["ohms-law"],
  tags: ["resistor", "color code", "IEC 60062", "electronics", "4-band", "5-band"],
});
