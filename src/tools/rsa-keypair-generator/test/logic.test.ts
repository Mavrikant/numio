import { describe, it, expect } from "vitest";
import { generateRsaKeyPair } from "../logic";

describe("rsa-keypair-generator", () => {
  it("generates a 2048-bit PEM keypair", async () => {
    const { publicKey, privateKey } = await generateRsaKeyPair(2048);
    expect(publicKey).toMatch(/^-----BEGIN PUBLIC KEY-----/);
    expect(publicKey).toMatch(/-----END PUBLIC KEY-----$/);
    expect(privateKey).toMatch(/^-----BEGIN PRIVATE KEY-----/);
    expect(privateKey).toMatch(/-----END PRIVATE KEY-----$/);
  }, 15000);
  it("produces a different keypair each call", async () => {
    const a = await generateRsaKeyPair(2048);
    const b = await generateRsaKeyPair(2048);
    expect(a.publicKey).not.toBe(b.publicKey);
    expect(a.privateKey).not.toBe(b.privateKey);
  }, 30000);
});
