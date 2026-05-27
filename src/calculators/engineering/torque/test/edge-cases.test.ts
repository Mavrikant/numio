import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("Torque — edge cases and validation", () => {
  it("accepts valid inputs for force mode", () => {
    const result = inputSchema.safeParse({
      force: 100,
      distance: 0.5,
      momentOrForce: "force",
    });
    expect(result.success).toBe(true);
  });

  it("accepts valid inputs for moment mode", () => {
    const result = inputSchema.safeParse({
      force: 50,
      distance: 0.5,
      momentOrForce: "moment",
    });
    expect(result.success).toBe(true);
  });

  it("rejects zero/negative force in moment mode", () => {
    const result = inputSchema.safeParse({
      force: 0,
      distance: 0.5,
      momentOrForce: "moment",
    });
    expect(result.success).toBe(false);
  });

  it("rejects zero/negative distance in force mode", () => {
    const result = inputSchema.safeParse({
      force: 100,
      distance: 0,
      momentOrForce: "force",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid momentOrForce value", () => {
    const result = inputSchema.safeParse({
      force: 100,
      distance: 0.5,
      momentOrForce: "invalid",
    });
    expect(result.success).toBe(false);
  });
});
