import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("Concrete Mix — compute()", () => {
  describe("standard M20 mix", () => {
    it("calculates correct quantities for 1 m³ M20", () => {
      const inputs = inputSchema.parse({ mixGrade: "M20", volumeM3: 1 });
      const result = compute(inputs);
      // Dry volume = 1 × 1.54 = 1.54 m³
      // Total parts = 1+1.5+3 = 5.5
      // Cement volume = (1/5.5) × 1.54 = 0.28 m³ → 0.28 × 1440 = 403.2 kg
      expect(result.cementKg).toBeCloseTo(403.2, 0);
      // Sand volume = (1.5/5.5) × 1.54 = 0.42 m³ → 0.42 × 1600 = 672 kg
      expect(result.sandKg).toBeCloseTo(672, 0);
      // Aggregate volume = (3/5.5) × 1.54 = 0.84 m³ → 0.84 × 1500 = 1260 kg
      expect(result.aggregateKg).toBeCloseTo(1260, 0);
      // Water = 0.5 × 403.2 = 201.6 L
      expect(result.waterLiters).toBeCloseTo(201.6, 0);
      // Cement bags = 403.2 / 50 = 8.064
      expect(result.cementBags).toBeCloseTo(8.06, 1);
      // Dry volume
      expect(result.totalDryVolumeM3).toBeCloseTo(1.54, 3);
    });

    it("scales linearly with volume", () => {
      const inputs1 = inputSchema.parse({ mixGrade: "M20", volumeM3: 1 });
      const inputs5 = inputSchema.parse({ mixGrade: "M20", volumeM3: 5 });
      const result1 = compute(inputs1);
      const result5 = compute(inputs5);
      expect(result5.cementKg / result1.cementKg).toBeCloseTo(5, 3);
      expect(result5.sandKg / result1.sandKg).toBeCloseTo(5, 3);
      expect(result5.waterLiters / result1.waterLiters).toBeCloseTo(5, 3);
    });
  });

  describe("standard M10 mix", () => {
    it("has more sand and aggregate than M20", () => {
      const m10 = compute(inputSchema.parse({ mixGrade: "M10", volumeM3: 1 }));
      const m20 = compute(inputSchema.parse({ mixGrade: "M20", volumeM3: 1 }));
      // M10 (1:3:6) has less cement proportion than M20 (1:1.5:3)
      expect(m10.cementKg).toBeLessThan(m20.cementKg);
      expect(m10.sandKg).toBeGreaterThan(m20.sandKg);
    });
  });

  describe("standard M30 mix", () => {
    it("has more cement and less aggregate than M20", () => {
      const m30 = compute(inputSchema.parse({ mixGrade: "M30", volumeM3: 1 }));
      const m20 = compute(inputSchema.parse({ mixGrade: "M20", volumeM3: 1 }));
      expect(m30.cementKg).toBeGreaterThan(m20.cementKg);
      expect(m30.aggregateKg).toBeLessThan(m20.aggregateKg);
    });
  });

  describe("custom mix", () => {
    it("calculates custom 1:2:4 mix correctly", () => {
      const inputs = inputSchema.parse({
        mixGrade: "custom",
        volumeM3: 1,
        cementParts: 1,
        sandParts: 2,
        aggregateParts: 4,
        waterCementRatio: 0.55,
      });
      const result = compute(inputs);
      // Total parts = 7, dry volume = 1.54
      // Cement = (1/7) × 1.54 × 1440 ≈ 316.8 kg
      expect(result.cementKg).toBeCloseTo(316.8, 0);
      expect(result.actualWaterCementRatio).toBe(0.55);
    });

    it("returns actual w/c ratio used", () => {
      const inputs = inputSchema.parse({
        mixGrade: "M20",
        volumeM3: 1,
        waterCementRatio: 0.45,
      });
      const result = compute(inputs);
      expect(result.actualWaterCementRatio).toBe(0.45);
    });
  });

  describe("output properties", () => {
    it("returns all required properties", () => {
      const inputs = inputSchema.parse({ mixGrade: "M20", volumeM3: 1 });
      const result = compute(inputs);
      expect(result).toHaveProperty("cementKg");
      expect(result).toHaveProperty("sandKg");
      expect(result).toHaveProperty("aggregateKg");
      expect(result).toHaveProperty("waterLiters");
      expect(result).toHaveProperty("cementBags");
      expect(result).toHaveProperty("totalDryVolumeM3");
      expect(result).toHaveProperty("actualWaterCementRatio");
    });

    it("all numeric values are positive", () => {
      const inputs = inputSchema.parse({ mixGrade: "M25", volumeM3: 2 });
      const result = compute(inputs);
      expect(result.cementKg).toBeGreaterThan(0);
      expect(result.sandKg).toBeGreaterThan(0);
      expect(result.aggregateKg).toBeGreaterThan(0);
      expect(result.waterLiters).toBeGreaterThan(0);
      expect(result.cementBags).toBeGreaterThan(0);
    });
  });
});
