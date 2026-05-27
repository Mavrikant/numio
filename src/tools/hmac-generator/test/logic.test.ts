import { describe, it, expect } from "vitest";
import { HMAC_ALGORITHMS, bytesToHex, computeHmac, encodeBytes } from "../logic";

describe("computeHmac", () => {
  // RFC 4231 Test Case 2: key = "Jefe", data = "what do ya want for nothing?"
  const key = "Jefe";
  const msg = "what do ya want for nothing?";

  it("HMAC-SHA256 matches RFC 4231", async () => {
    expect(bytesToHex(await computeHmac("SHA-256", key, msg))).toBe(
      "5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843",
    );
  });

  it("HMAC-SHA384 matches RFC 4231", async () => {
    expect(bytesToHex(await computeHmac("SHA-384", key, msg))).toBe(
      "af45d2e376484031617f78d2b58a6b1b9c7ef464f5a01b47e42ec3736322445e" +
        "8e2240ca5e69e2c78b3239ecfab21649",
    );
  });

  it("HMAC-SHA512 matches RFC 4231", async () => {
    expect(bytesToHex(await computeHmac("SHA-512", key, msg))).toBe(
      "164b7a7bfcf819e2e395fbe73b56e0a387bd64222e831fd610270cd7ea250554" +
        "9758bf75c05a994a6d034f65f8f0e6fdcaeab1a34d4a6b4b636e070a38bce737",
    );
  });

  it("differs when the key changes", async () => {
    const a = bytesToHex(await computeHmac("SHA-256", "key1", msg));
    const b = bytesToHex(await computeHmac("SHA-256", "key2", msg));
    expect(a).not.toBe(b);
  });

  it("supports every advertised algorithm", async () => {
    for (const alg of HMAC_ALGORITHMS) {
      const bytes = await computeHmac(alg, key, msg);
      expect(bytes.length).toBeGreaterThan(0);
    }
  });
});

describe("encodeBytes", () => {
  it("encodes the MAC as hex or base64", async () => {
    const bytes = await computeHmac("SHA-256", "Jefe", "what do ya want for nothing?");
    expect(encodeBytes(bytes, "hex")).toBe(
      "5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843",
    );
    expect(encodeBytes(bytes, "base64")).toBe("W9zBRr9gdU5qBCQmCJV1x1oAPwidJzmDnexYuWTsOEM=");
  });
});
