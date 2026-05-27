import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("data-transfer-time compute", () => {
  // 5 GB over 100 Mbps: 5e9·8 / 100e6 = 400 s.
  runNumericTests(calc, [
    {
      inputs: { fileSize: 5, fileSizeUnit: "GB", speed: 100, speedUnit: "Mbps" },
      expected: { seconds: 400, minutes: 6.6667, hours: 0.1111 },
      tolerance: { seconds: 0.1, minutes: 0.001, hours: 0.001 },
    },
    // 1 GB at 8 MB/s = 1e9·8 / 64e6 = 125 s.
    { inputs: { fileSize: 1, fileSizeUnit: "GB", speed: 8, speedUnit: "MBps" }, expected: { seconds: 125 }, tolerance: 0.1 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { fileSize: 700, fileSizeUnit: "MB", speed: 50, speedUnit: "Mbps" }));
});

describe("data-transfer-time i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("data-transfer-time definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "data-transfer-time", category: "conversion" }));
});
