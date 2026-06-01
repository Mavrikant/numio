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

  it("converts 1 byte to 8 bits", () => {
    const result = compute({
      value: 1,
      fromUnit: "B",
      toUnit: "bit",
      mode: "binary",
    });
    expect(result.result).toBe(8);
  });

  it("converts 1 MB to 8 Mbit (binary mode)", () => {
    // 1 byte = 8 bits, so 1 Megabyte = 8 Megabit regardless of base
    const result = compute({
      value: 1,
      fromUnit: "MB",
      toUnit: "Mbit",
      mode: "binary",
    });
    expect(result.result).toBe(8);
  });

  it("converts 1 MB to 8 Mbit (decimal mode)", () => {
    const result = compute({
      value: 1,
      fromUnit: "MB",
      toUnit: "Mbit",
      mode: "decimal",
    });
    expect(result.result).toBe(8);
  });

  it("converts 8 Mbit back to 1 MB", () => {
    const result = compute({
      value: 8,
      fromUnit: "Mbit",
      toUnit: "MB",
      mode: "binary",
    });
    expect(result.result).toBe(1);
  });

  it("converts 1 Gbit to Mbit (binary mode)", () => {
    // 1 Gbit (binary) = 1024 Mbit
    const result = compute({
      value: 1,
      fromUnit: "Gbit",
      toUnit: "Mbit",
      mode: "binary",
    });
    expect(result.result).toBe(1024);
  });

  it("converts 1 GB to Mbit (decimal mode)", () => {
    // 1 GB = 8 Gbit (decimal) = 8000 Mbit
    const result = compute({
      value: 1,
      fromUnit: "GB",
      toUnit: "Mbit",
      mode: "decimal",
    });
    expect(result.result).toBe(8000);
  });
});
