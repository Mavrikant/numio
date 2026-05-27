import { describe, it, expect } from "vitest";
import { hashText } from "../logic";

describe("hashText", () => {
  it("computes the SHA-256 of 'abc'", async () => {
    expect(await hashText("abc", "SHA-256")).toBe(
      "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
    );
  });
  it("computes the SHA-1 of 'abc'", async () => {
    expect(await hashText("abc", "SHA-1")).toBe("a9993e364706816aba3e25717850c26c9cd0d89d");
  });
  it("hashes empty string (SHA-256)", async () => {
    expect(await hashText("", "SHA-256")).toBe(
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    );
  });
});
