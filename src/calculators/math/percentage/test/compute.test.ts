import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("percentage compute", () => {
  it("runs numeric tests successfully", () => {
    runNumericTests(definition, [
      {
        // Reference: 15% of 80 = (15/100) * 80 = 12
        description: "what is 15% of 80?",
        inputs: { mode: "what_is_x_pct_of_y", x: 15, y: 80 },
        expected: { result: 12 },
      },
      {
        // Reference: 30 is what % of 120 → (30/120)*100 = 25%
        description: "30 is what percent of 120?",
        inputs: { mode: "x_is_what_pct_of_y", x: 30, y: 120 },
        expected: { result: 25 },
      },
      {
        // Reference: percentage change from 50 to 75 → (75-50)/50 * 100 = 50%
        description: "percentage change from 50 to 75",
        inputs: { mode: "pct_change", x: 50, y: 75 },
        expected: { result: 50, absoluteDifference: 25 },
      },
      {
        // Reference: pct change from 100 to 80 → (80-100)/100 * 100 = -20%
        description: "percentage decrease from 100 to 80",
        inputs: { mode: "pct_change", x: 100, y: 80 },
        expected: { result: -20, absoluteDifference: -20 },
      },
      {
        // 100% of 250 = 250
        description: "100% of 250",
        inputs: { mode: "what_is_x_pct_of_y", x: 100, y: 250 },
        expected: { result: 250 },
      },
    ]);
  });
});
