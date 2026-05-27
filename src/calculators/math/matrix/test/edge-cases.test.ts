import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Matrix — edge cases", () => {
  it("2x2 identity matrix determinant = 1", () => {
    const result = compute({ operation: "determinant", matrixSize: "2x2", a11: 1, a12: 0, a21: 0, a22: 1 });
    expect(result.determinant).toBe(1);
  });

  it("2x2 singular matrix determinant = 0", () => {
    // [[1,2],[2,4]] has linearly dependent rows
    const result = compute({ operation: "determinant", matrixSize: "2x2", a11: 1, a12: 2, a21: 2, a22: 4 });
    expect(result.determinant).toBe(0);
  });

  it("2x2 subtraction: [[5,6],[7,8]] - [[1,2],[3,4]] = [[4,4],[4,4]]", () => {
    const result = compute({
      operation: "subtract",
      matrixSize: "2x2",
      a11: 5,
      a12: 6,
      a21: 7,
      a22: 8,
      b11: 1,
      b12: 2,
      b21: 3,
      b22: 4,
    });
    expect(result.c11).toBe(4);
    expect(result.c12).toBe(4);
    expect(result.c21).toBe(4);
    expect(result.c22).toBe(4);
  });

  it("3x3 addition with zero matrix", () => {
    const result = compute({
      operation: "add",
      matrixSize: "3x3",
      a11: 1,
      a12: 2,
      a13: 3,
      a21: 4,
      a22: 5,
      a23: 6,
      a31: 7,
      a32: 8,
      a33: 9,
      b11: 0,
      b12: 0,
      b13: 0,
      b21: 0,
      b22: 0,
      b23: 0,
      b31: 0,
      b32: 0,
      b33: 0,
    });
    expect(result.c11).toBe(1);
    expect(result.c33).toBe(9);
  });

  it("negative matrix elements", () => {
    const result = compute({
      operation: "determinant",
      matrixSize: "2x2",
      a11: -1,
      a12: 2,
      a21: 3,
      a22: -4,
    });
    expect(result.determinant).toBe(4 - 6);
  });

  it("decimal matrix operations", () => {
    const result = compute({
      operation: "add",
      matrixSize: "2x2",
      a11: 0.5,
      a12: 0.5,
      a21: 0.5,
      a22: 0.5,
      b11: 0.5,
      b12: 0.5,
      b21: 0.5,
      b22: 0.5,
    });
    expect(result.c11).toBe(1);
  });
});
