import { describe, it, expect } from "vitest";
import { formatUuid, generateMany, generateUuidV4, NIL_UUID } from "../logic";

/** Deterministic byte source: returns 0,1,2,...,n-1. */
function seqBytes(n: number): Uint8Array {
  const b = new Uint8Array(n);
  for (let i = 0; i < n; i++) b[i] = i;
  return b;
}

/** Returns all-0xff bytes, to exercise the version/variant masking. */
function ffBytes(n: number): Uint8Array {
  return new Uint8Array(n).fill(0xff);
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

describe("generateUuidV4", () => {
  it("produces a canonical v4 UUID string", () => {
    const uuid = generateUuidV4(seqBytes);
    expect(uuid).toMatch(UUID_RE);
  });

  it("sets the version nibble to 4", () => {
    const uuid = generateUuidV4(ffBytes);
    expect(uuid[14]).toBe("4");
  });

  it("sets the variant bits to 10xx (8,9,a,b)", () => {
    expect("89ab").toContain(generateUuidV4(ffBytes)[19]);
    expect("89ab").toContain(generateUuidV4(seqBytes)[19]);
  });

  it("is deterministic for a fixed byte source", () => {
    expect(generateUuidV4(seqBytes)).toBe(generateUuidV4(seqBytes));
  });
});

describe("formatUuid", () => {
  const sample = "0102030a-0b0c-4d0e-8f10-111213141516";
  it("uppercases when requested", () => {
    expect(formatUuid(sample, { uppercase: true, hyphens: true })).toBe(sample.toUpperCase());
  });
  it("strips hyphens when requested", () => {
    expect(formatUuid(sample, { uppercase: false, hyphens: false })).toBe(
      "0102030a0b0c4d0e8f10111213141516",
    );
  });
  it("NIL_UUID is the canonical all-zero UUID", () => {
    expect(NIL_UUID).toBe("00000000-0000-0000-0000-000000000000");
  });
});

describe("generateMany", () => {
  it("returns the requested count", () => {
    expect(generateMany(5, { uppercase: false, hyphens: true }, seqBytes)).toHaveLength(5);
  });
  it("clamps to [0, 1000]", () => {
    expect(generateMany(-3, { uppercase: false, hyphens: true }, seqBytes)).toHaveLength(0);
    expect(generateMany(5000, { uppercase: false, hyphens: true }, seqBytes)).toHaveLength(1000);
  });
});
