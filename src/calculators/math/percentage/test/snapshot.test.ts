import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("Percentage Calculator - Definition Snapshot", () => {
  it("should match calculator definition shape", () => {
    expect(definition).toMatchSnapshot();
  });
});
