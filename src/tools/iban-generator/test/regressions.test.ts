import { describe, it, expect } from "vitest";
import { generateIban, COUNTRIES } from "../logic";
import { validateIban } from "../../iban-validator/logic";

describe("iban-generator regressions", () => {
  const rand = () => 0.42;
  it("emits letters where the ISO 13616 registry requires them", () => {
    expect(generateIban("GB", rand)).toMatch(/^GB\d{2}[A-Z]{4}\d{14}$/);
    expect(generateIban("NL", rand)).toMatch(/^NL\d{2}[A-Z]{4}\d{10}$/);
    expect(generateIban("IE", rand)).toMatch(/^IE\d{2}[A-Z]{4}\d{14}$/);
    expect(generateIban("IT", rand)).toMatch(/^IT\d{2}[A-Z]\d{10}[0-9A-Z]{12}$/);
  });
  it("every supported country produces a mod-97-valid IBAN of the right length", () => {
    for (const c of COUNTRIES) {
      const iban = generateIban(c, Math.random);
      expect(validateIban(iban).valid, `${c}: ${iban}`).toBe(true);
    }
  });
});
