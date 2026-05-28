import { describe, it, expect } from "vitest";
import { hashBcrypt, verifyBcrypt } from "../logic";

describe("bcrypt-hash-generator", () => {
  it("hashes and verifies a password", async () => {
    const hash = await hashBcrypt("hunter2", 4);
    expect(hash).toMatch(/^\$2[aby]\$04\$/);
    expect(await verifyBcrypt("hunter2", hash)).toBe(true);
  });
  it("rejects an incorrect password", async () => {
    const hash = await hashBcrypt("right", 4);
    expect(await verifyBcrypt("wrong", hash)).toBe(false);
  });
  it("requires a password", async () => {
    await expect(hashBcrypt("", 10)).rejects.toThrow();
  });
  it("rejects out-of-range round counts", async () => {
    await expect(hashBcrypt("x", 3)).rejects.toThrow();
    await expect(hashBcrypt("x", 20)).rejects.toThrow();
  });
  it("returns false for missing arguments to verify", async () => {
    expect(await verifyBcrypt("", "x")).toBe(false);
    expect(await verifyBcrypt("x", "")).toBe(false);
  });
});
