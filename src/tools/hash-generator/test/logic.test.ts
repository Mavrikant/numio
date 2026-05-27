import { describe, it, expect } from "vitest";
import {
  HASH_ALGORITHMS,
  DIGEST_BYTES,
  bytesToHex,
  bytesToBase64,
  encodeBytes,
  hashText,
} from "../logic";

describe("bytesToHex", () => {
  it("lowercases and zero-pads each byte", () => {
    expect(bytesToHex(new Uint8Array([0, 1, 15, 16, 255]))).toBe("00010f10ff");
  });
  it("returns empty for empty input", () => {
    expect(bytesToHex(new Uint8Array([]))).toBe("");
  });
});

describe("bytesToBase64", () => {
  it("matches known vectors", () => {
    // "Man" -> TWFu, "Ma" -> TWE=, "M" -> TQ==
    expect(bytesToBase64(new TextEncoder().encode("Man"))).toBe("TWFu");
    expect(bytesToBase64(new TextEncoder().encode("Ma"))).toBe("TWE=");
    expect(bytesToBase64(new TextEncoder().encode("M"))).toBe("TQ==");
  });
});

describe("encodeBytes", () => {
  const bytes = new Uint8Array([0xde, 0xad, 0xbe, 0xef]);
  it("dispatches on encoding", () => {
    expect(encodeBytes(bytes, "hex")).toBe("deadbeef");
    expect(encodeBytes(bytes, "base64")).toBe(bytesToBase64(bytes));
  });
});

describe("hashText", () => {
  // NIST/FIPS published vectors for the string "abc".
  it("SHA-1 of 'abc'", async () => {
    expect(bytesToHex(await hashText("SHA-1", "abc"))).toBe(
      "a9993e364706816aba3e25717850c26c9cd0d89d",
    );
  });
  it("SHA-256 of 'abc'", async () => {
    expect(bytesToHex(await hashText("SHA-256", "abc"))).toBe(
      "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
    );
  });
  it("SHA-512 of 'abc'", async () => {
    expect(bytesToHex(await hashText("SHA-512", "abc"))).toBe(
      "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a" +
        "2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f",
    );
  });
  it("SHA-256 of empty string", async () => {
    expect(bytesToHex(await hashText("SHA-256", ""))).toBe(
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    );
  });
  it("produces the documented digest length for each algorithm", async () => {
    for (const alg of HASH_ALGORITHMS) {
      const bytes = await hashText(alg, "x");
      expect(bytes.length).toBe(DIGEST_BYTES[alg]);
    }
  });
});
