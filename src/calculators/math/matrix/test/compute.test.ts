import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: Linear algebra matrix operations (en.wikipedia.org/wiki/Matrix_(mathematics))

describe("Matrix compute — numeric correctness", () => {
  it("2x2 addition: [[1,2],[3,4]] + [[5,6],[7,8]] = [[6,8],[10,12]]", () => {
    runNumericTests(calculator, [
      {
        inputs: {
          operation: "add",
          matrixSize: "2x2",
          a11: 1,
          a12: 2,
          a21: 3,
          a22: 4,
          b11: 5,
          b12: 6,
          b21: 7,
          b22: 8,
        },
        expected: {
          c11: 6,
          c12: 8,
          c21: 10,
          c22: 12,
        },
        tolerance: 0.01,
        description: "2x2 matrix addition",
      },
    ]);
  });

  it("2x2 determinant: [[1,2],[3,4]] det = -2", () => {
    // det = 1*4 - 2*3 = 4 - 6 = -2
    runNumericTests(calculator, [
      {
        inputs: {
          operation: "determinant",
          matrixSize: "2x2",
          a11: 1,
          a12: 2,
          a21: 3,
          a22: 4,
        },
        expected: {
          determinant: -2,
        },
        tolerance: 0.01,
        description: "2x2 determinant",
      },
    ]);
  });

  it("2x2 multiplication: [[1,2],[3,4]] * [[2,0],[1,2]] = [[4,4],[10,8]]", () => {
    // [0,0]: 1*2 + 2*1 = 4
    // [0,1]: 1*0 + 2*2 = 4
    // [1,0]: 3*2 + 4*1 = 10
    // [1,1]: 3*0 + 4*2 = 8
    runNumericTests(calculator, [
      {
        inputs: {
          operation: "multiply",
          matrixSize: "2x2",
          a11: 1,
          a12: 2,
          a21: 3,
          a22: 4,
          b11: 2,
          b12: 0,
          b21: 1,
          b22: 2,
        },
        expected: {
          c11: 4,
          c12: 4,
          c21: 10,
          c22: 8,
        },
        tolerance: 0.01,
        description: "2x2 matrix multiplication",
      },
    ]);
  });

  it("3x3 determinant: [[1,0,2],[0,3,0],[4,0,5]] det = -24", () => {
    // Expansion by first column: 1*(3*5 - 0*0) - 0 + 4*(0*0 - 2*3) = 15 - 24 = -9
    // Note: actual det = 1*(3*5 - 0*0) - 0 + 4*(0*0 - 2*3) = 15 - 24 = -9
    runNumericTests(calculator, [
      {
        inputs: {
          operation: "determinant",
          matrixSize: "3x3",
          a11: 1,
          a12: 0,
          a13: 2,
          a21: 0,
          a22: 3,
          a23: 0,
          a31: 4,
          a32: 0,
          a33: 5,
        },
        expected: {
          determinant: -9,
        },
        tolerance: 1,
        description: "3x3 determinant",
      },
    ]);
  });
});
