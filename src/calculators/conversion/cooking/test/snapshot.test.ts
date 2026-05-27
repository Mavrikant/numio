import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("Cooking Unit Converter - snapshot", () => {
  it("should have correct definition shape", () => {
    expect(definition).toMatchSnapshot();
  });
});
