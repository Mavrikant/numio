import { describe, it, expect } from "vitest";
import { fakePerson, fakePeople, peopleToCsv } from "../logic";

function seeded(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("fake-data-generator", () => {
  it("returns a person with all required fields", () => {
    const p = fakePerson(seeded(1));
    expect(p.fullName).toContain(p.firstName);
    expect(p.fullName).toContain(p.lastName);
    expect(p.email).toMatch(/@[a-z.]+\.[a-z]+$/);
    expect(p.phone).toMatch(/^\(\d{3}\) \d{3}-\d{4}$/);
    expect(p.zip).toMatch(/^\d{5}$/);
  });
  it("generates the requested batch size", () => {
    expect(fakePeople(7, seeded(2))).toHaveLength(7);
  });
  it("formats CSV with a header row", () => {
    const csv = peopleToCsv(fakePeople(2, seeded(3)));
    const lines = csv.split("\n");
    expect(lines.length).toBe(3);
    expect(lines[0]).toContain("firstName");
    expect(lines[0]).toContain("email");
  });
  it("returns empty CSV for no rows", () => {
    expect(peopleToCsv([])).toBe("");
  });
});
