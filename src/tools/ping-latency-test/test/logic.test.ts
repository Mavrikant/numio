import { describe, it, expect } from "vitest";
import { DEFAULT_TARGETS, summarise } from "../logic";

describe("ping-latency-test", () => {
  it("ships at least three default targets", () => {
    expect(DEFAULT_TARGETS.length).toBeGreaterThanOrEqual(3);
  });
  it("summarises a sample set", () => {
    expect(summarise([10, 20, 30, 40])).toMatchObject({ min: 10, max: 40, avg: 25 });
  });
  it("computes jitter as mean absolute consecutive difference", () => {
    expect(summarise([10, 14, 12, 18])!.jitter).toBeCloseTo((4 + 2 + 6) / 3);
  });
  it("returns null for an empty sample set", () => {
    expect(summarise([])).toBeNull();
  });
  it("treats a single sample as zero jitter", () => {
    expect(summarise([15])).toEqual({ min: 15, max: 15, avg: 15, jitter: 0 });
  });
});
