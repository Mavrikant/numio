import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("sales-tax edge cases", () => {
  it("rejects a negative amount", () => {
    expect(inputSchema.safeParse({ amount: -1, taxRate: 5, mode: "add" }).success).toBe(false);
  });

  it("rejects a tax rate above 100%", () => {
    expect(inputSchema.safeParse({ amount: 100, taxRate: 150, mode: "add" }).success).toBe(false);
  });

  it("defaults the mode to 'add' when omitted", () => {
    const parsed = inputSchema.parse({ amount: 100, taxRate: 10 });
    expect(parsed.mode).toBe("add");
  });

  it("handles a zero amount without dividing by zero in remove mode", () => {
    const r = compute({ amount: 0, taxRate: 8.25, mode: "remove" });
    expect(r.preTaxAmount).toBe(0);
    expect(r.taxAmount).toBe(0);
    expect(r.totalAmount).toBe(0);
  });

  it("remove mode inverts add mode", () => {
    const added = compute({ amount: 250, taxRate: 7, mode: "add" });
    const removed = compute({ amount: added.totalAmount, taxRate: 7, mode: "remove" });
    expect(removed.preTaxAmount).toBeCloseTo(250, 6);
  });
});
