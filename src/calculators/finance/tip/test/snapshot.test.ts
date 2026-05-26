import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("tip — definition snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("tip");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P1");
  });

  it("has required inputs defined", () => {
    const inputIds = calculator.inputs.map((i) => i.id);
    expect(inputIds).toContain("billAmount");
    expect(inputIds).toContain("tipPct");
    expect(inputIds).toContain("numberOfPeople");
    expect(inputIds).toContain("roundUp");
  });

  it("has required outputs defined", () => {
    const outputIds = calculator.outputs.map((o) => o.id);
    expect(outputIds).toContain("tipAmount");
    expect(outputIds).toContain("totalAmount");
    expect(outputIds).toContain("perPersonTotal");
    expect(outputIds).toContain("perPersonTip");
    expect(outputIds).toContain("totalRounded");
  });

  it("has at least one reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThan(0);
  });

  it("compute produces expected result shape for $50 bill at 18%", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        billAmount: 50,
        tipPct: 18,
        numberOfPeople: 2,
        roundUp: false,
      }),
    );
    expect(typeof result.tipAmount).toBe("number");
    expect(typeof result.totalAmount).toBe("number");
    expect(typeof result.perPersonTotal).toBe("number");
    expect(typeof result.perPersonTip).toBe("number");
    expect(typeof result.totalRounded).toBe("number");
    // tip = 9, total = 59, per person = 29.5
    expect(result.tipAmount).toBeCloseTo(9, 2);
    expect(result.totalAmount).toBeCloseTo(59, 2);
    expect(result.perPersonTotal).toBeCloseTo(29.5, 2);
  });
});
