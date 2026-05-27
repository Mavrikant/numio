import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("prime-factorization snapshot", () => {
  it("definition shape is correct", () => {
    expect(definition).toMatchSnapshot();
  });
});
