import { describe, it, expect } from "vitest";
import { compute } from "../compute";
import { runNumericTests } from "@/test-utils";

describe("bac compute", () => {
  runNumericTests(compute, [
    {
      label: "sober — 0 drinks",
      inputs: { drinks: 0, weightKg: 70, sex: "male", hoursElapsed: 0 },
      outputs: { bac: 0, hoursUntilSober: 0, isLegal: true, isDangerous: false, category: "sober" },
    },
    {
      label: "male 2 drinks at t=0 — basic widmark",
      inputs: { drinks: 2, weightKg: 70, sex: "male", hoursElapsed: 0 },
      // BAC = (2*14)/(70*0.68*1000)*100 = 2800/47600*100 = 0.05882... → 0.059
      // isLegal: 0.059 < 0.08 → true; isDangerous: false; category: impaired
      outputs: { bac: 0.059, hoursUntilSober: expect.any(Number), isLegal: true, isDangerous: false, category: "impaired" },
    },
    {
      label: "female higher BAC due to lower r",
      inputs: { drinks: 2, weightKg: 70, sex: "female", hoursElapsed: 0 },
      // BAC = (2*14)/(70*0.55*1000)*100 = 2800/38500*100 = 0.07273... → 0.073
      outputs: { bac: 0.073, isLegal: true, isDangerous: false, category: "impaired" },
    },
    {
      label: "drunk category above 0.08",
      inputs: { drinks: 5, weightKg: 60, sex: "female", hoursElapsed: 0 },
      // BAC = (5*14)/(60*0.55*1000)*100 = 7000/33000*100 = 0.2121... → 0.212
      outputs: { isLegal: false, isDangerous: true, category: "very_drunk" },
    },
    {
      label: "metabolized over time returns sober",
      inputs: { drinks: 1, weightKg: 80, sex: "male", hoursElapsed: 5 },
      // BAC_raw = (1*14)/(80*0.68*1000)*100 = 1400/54400*100 = 0.025735...
      // metabolized = 0.015*5 = 0.075 → BAC clamped to 0
      outputs: { bac: 0, hoursUntilSober: 0, category: "sober" },
    },
  ]);

  it("hoursUntilSober is proportional to bac", () => {
    const result = compute({ drinks: 3, weightKg: 70, sex: "male", hoursElapsed: 0 });
    expect(result.hoursUntilSober).toBeCloseTo(result.bac / 0.015, 0);
  });
});
