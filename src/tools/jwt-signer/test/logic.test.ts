import { describe, it, expect } from "vitest";
import { signJwt } from "../logic";

describe("jwt-signer", () => {
  it("produces the canonical jwt.io HS256 token", async () => {
    const token = await signJwt(
      { sub: "1234567890", name: "John Doe", iat: 1516239022 },
      "your-256-bit-secret",
      "HS256",
    );
    expect(token).toBe(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    );
  });
  it("produces a three-segment token", async () => {
    const token = await signJwt({ a: 1 }, "secret", "HS256");
    expect(token.split(".")).toHaveLength(3);
  });
  it("yields different tokens per algorithm", async () => {
    const a = await signJwt({ a: 1 }, "secret", "HS256");
    const b = await signJwt({ a: 1 }, "secret", "HS512");
    expect(a).not.toBe(b);
  });
  it("requires a secret", async () => {
    await expect(signJwt({ a: 1 }, "", "HS256")).rejects.toThrow();
  });
});
