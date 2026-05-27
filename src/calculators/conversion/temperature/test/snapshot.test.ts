import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Temperature — definition snapshot", () => {
  it("matches expected calculator shape", () => {
    expect(calculator).toMatchSnapshot();
  });
});
