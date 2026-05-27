import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Ratio — definition snapshot", () => {
  it("matches expected calculator shape", () => {
    expect(calculator).toMatchSnapshot();
  });
});
