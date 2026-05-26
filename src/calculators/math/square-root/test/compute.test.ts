import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("square-root compute", () => {
  it("runs numeric tests successfully", () => {
    runNumericTests(definition, [
      {
        inputs: { value: 10 },
        expected: { result: 10 },
      },
    ]);
  });
});
