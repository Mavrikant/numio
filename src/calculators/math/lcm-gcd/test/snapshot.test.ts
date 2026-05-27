import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("lcm-gcd snapshot", () => {
  it("definition shape is correct", () => {
    expect(definition).toMatchSnapshot();
  });
});
