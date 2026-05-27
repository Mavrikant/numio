import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Data Storage Converter — compute", () => {
  it("converts 1 GB to MB (binary mode)", () => {
    // 1 GB (binary) = 1024 MB
    const result = compute({
      value: 1,
      fromUnit: "GB",
      toUnit: "MB",
      mode: "binary",
    });
    expect(result.result).toBe(1024);
  });

  it("converts 1 TB to GB (binary mode)", () => {
    // 1 TB (binary) = 1024 GB
    const result = compute({
      value: 1,
      fromUnit: "TB",
      toUnit: "GB",
      mode: "binary",
    });
    expect(result.result).toBe(1024);
  });

  it("converts 1 GB to MB (decimal mode)", () => {
    // 1 GB (decimal) = 1000 MB
    const result = compute({
      value: 1,
      fromUnit: "GB",
      toUnit: "MB",
      mode: "decimal",
    });
    expect(result.result).toBe(1000);
  });

  it("converts 1000 MB to 1 GB (decimal mode)", () => {
    const result = compute({
      value: 1000,
      fromUnit: "MB",
      toUnit: "GB",
      mode: "decimal",
    });
    expect(result.result).toBeCloseTo(1, 5);
  });

  it("converts 512 MB to KB (binary mode)", () => {
    // 512 MB = 512 * 1024 KB = 524,288 KB
    const result = compute({
      value: 512,
      fromUnit: "MB",
      toUnit: "KB",
      mode: "binary",
    });
    expect(result.result).toBe(512 * 1024);
  });

  it("handles zero value", () => {
    const result = compute({
      value: 0,
      fromUnit: "GB",
      toUnit: "MB",
      mode: "binary",
    });
    expect(result.result).toBe(0);
  });

  it("handles large values (PB to TB)", () => {
    // 1 PB (binary) = 1024 TB
    const result = compute({
      value: 1,
      fromUnit: "PB",
      toUnit: "TB",
      mode: "binary",
    });
    expect(result.result).toBe(1024);
  });
});
