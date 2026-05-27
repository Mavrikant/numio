import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Speed definition — snapshot", () => {
  it("matches expected definition shape", () => {
    expect(calculator).toMatchSnapshot();
  });
});
