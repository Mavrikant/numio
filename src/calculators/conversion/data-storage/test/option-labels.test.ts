import { describe, it, expect } from "vitest";
import calculator from "../definition";
import { LOCALES } from "@/config/site";

/**
 * Guards that every select-input option value (byte units AND bit units)
 * has a translated label in every locale. Mirrors the nested→flat→raw
 * lookup InputField.tsx performs, so a missing bit translation (e.g. a
 * locale that never got "Mbit") fails here instead of silently rendering
 * the raw value code in the dropdown.
 */
describe("Data Storage Converter — option labels", () => {
  const selectInputs = calculator.inputs.filter(
    (input) => input.type.kind === "select",
  );

  it("includes the bit units alongside the byte units", () => {
    const unitInput = selectInputs.find((input) => input.id === "fromUnit");
    expect(unitInput, "fromUnit select missing").toBeDefined();
    const values =
      unitInput && unitInput.type.kind === "select"
        ? unitInput.type.options.map((o) => o.value)
        : [];
    for (const expected of ["B", "MB", "GB", "bit", "Mbit", "Gbit"]) {
      expect(values, `fromUnit missing option ${expected}`).toContain(expected);
    }
  });

  it("has a translated label for every option value in every locale", () => {
    for (const locale of LOCALES) {
      const bundle = calculator.i18n[locale];
      const opts = bundle.options;
      expect(opts, `${locale}: options map missing`).toBeDefined();

      for (const input of selectInputs) {
        if (input.type.kind !== "select") continue;
        const nested = opts?.[input.id];
        for (const opt of input.type.options) {
          const label =
            typeof nested === "object" && nested !== null
              ? (nested as Record<string, string>)[opt.value]
              : undefined;
          expect(
            label,
            `${locale}.options.${input.id}.${opt.value} is missing or not a translated string`,
          ).toBeTruthy();
        }
      }
    }
  });
});
