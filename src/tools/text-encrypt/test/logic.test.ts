import { describe, it, expect } from "vitest";
import { encryptText, decryptText } from "../logic";

describe("text-encrypt", () => {
  it("round-trips a message", async () => {
    const cipher = await encryptText("hello world", "s3cret");
    expect(cipher).not.toContain("hello");
    expect(await decryptText(cipher, "s3cret")).toBe("hello world");
  });
  it("round-trips unicode", async () => {
    const cipher = await encryptText("Café ☕ 日本語", "pw");
    expect(await decryptText(cipher, "pw")).toBe("Café ☕ 日本語");
  });
  it("produces a different ciphertext each time (random salt/iv)", async () => {
    const a = await encryptText("same", "pw");
    const b = await encryptText("same", "pw");
    expect(a).not.toBe(b);
  });
  it("fails with the wrong passphrase", async () => {
    const cipher = await encryptText("secret", "right");
    await expect(decryptText(cipher, "wrong")).rejects.toThrow();
  });
  it("requires a passphrase", async () => {
    await expect(encryptText("x", "")).rejects.toThrow();
  });
});
