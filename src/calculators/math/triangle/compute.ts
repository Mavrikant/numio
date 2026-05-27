import { z } from "zod";

export const inputSchema = z.object({
  method: z.enum(["sss", "sas", "asa", "aas", "ssa"]),
  // For SSS, SAS, ASA, AAS, SSA
  sideA: z.number().positive().optional(),
  sideB: z.number().positive().optional(),
  sideC: z.number().positive().optional(),
  angleA: z.number().min(0).max(180).optional(), // degrees
  angleB: z.number().min(0).max(180).optional(),
  angleC: z.number().min(0).max(180).optional(),
});

export type TriangleInputs = z.infer<typeof inputSchema>;

export type TriangleType =
  | "scalene"
  | "isosceles"
  | "equilateral"
  | "right";

export interface TriangleResult extends Record<string, unknown> {
  readonly sideA: number;
  readonly sideB: number;
  readonly sideC: number;
  readonly angleA: number; // degrees
  readonly angleB: number;
  readonly angleC: number;
  readonly area: number;
  readonly perimeter: number;
  readonly triangleType: TriangleType;
}

// Convert degrees to radians
function toRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

// Convert radians to degrees
function toDeg(radians: number): number {
  return (radians * 180) / Math.PI;
}

// Law of cosines: c² = a² + b² - 2ab*cos(C)
// To find side: c = sqrt(a² + b² - 2ab*cos(C))
// To find angle: cos(C) = (a² + b² - c²) / (2ab)

function normalizeDegrees(angle: number): number {
  const rounded = Math.round(angle * 1000000) / 1000000;
  return rounded;
}

function classifyTriangle(a: number, b: number, c: number): TriangleType {
  const tolerance = 0.0001;
  const sides = [a, b, c].sort((x, y) => x - y);

  // Check for right triangle (Pythagorean theorem within tolerance)
  const isRight =
    Math.abs(
      sides[0] * sides[0] + sides[1] * sides[1] - sides[2] * sides[2]
    ) < tolerance;
  if (isRight) return "right";

  // Check for equilateral
  if (
    Math.abs(a - b) < tolerance &&
    Math.abs(b - c) < tolerance
  ) {
    return "equilateral";
  }

  // Check for isosceles
  if (
    Math.abs(a - b) < tolerance ||
    Math.abs(b - c) < tolerance ||
    Math.abs(a - c) < tolerance
  ) {
    return "isosceles";
  }

  return "scalene";
}

function solveSSS(
  a: number,
  b: number,
  c: number
): Omit<TriangleResult, "triangleType"> {
  // Law of cosines to find angles
  // cos(A) = (b² + c² - a²) / (2bc)
  const cosA = (b * b + c * c - a * a) / (2 * b * c);
  const cosB = (a * a + c * c - b * b) / (2 * a * c);
  const cosC = (a * a + b * b - c * c) / (2 * a * b);

  const angleA = normalizeDegrees(toDeg(Math.acos(Math.max(-1, Math.min(1, cosA)))));
  const angleB = normalizeDegrees(toDeg(Math.acos(Math.max(-1, Math.min(1, cosB)))));
  const angleC = normalizeDegrees(180 - angleA - angleB);

  // Heron's formula for area
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  const perimeter = a + b + c;

  return {
    sideA: Math.round(a * 10000) / 10000,
    sideB: Math.round(b * 10000) / 10000,
    sideC: Math.round(c * 10000) / 10000,
    angleA,
    angleB,
    angleC,
    area: Math.round(area * 10000) / 10000,
    perimeter: Math.round(perimeter * 10000) / 10000,
  };
}

function solveSAS(
  a: number,
  b: number,
  angleC: number
): Omit<TriangleResult, "triangleType"> {
  // Find third side using law of cosines: c² = a² + b² - 2ab*cos(C)
  const angleC_rad = toRad(angleC);
  const c_squared = a * a + b * b - 2 * a * b * Math.cos(angleC_rad);
  const c = Math.sqrt(Math.max(0, c_squared));

  return solveSSS(a, b, c);
}

function solveASA(
  angleA: number,
  b: number,
  angleB: number
): Omit<TriangleResult, "triangleType"> {
  // Angle C = 180 - A - B
  const angleC = 180 - angleA - angleB;

  // Law of sines: a/sin(A) = b/sin(B)
  // a = b * sin(A) / sin(B)
  const angleA_rad = toRad(angleA);
  const angleB_rad = toRad(angleB);
  const angleC_rad = toRad(angleC);

  const a = (b * Math.sin(angleA_rad)) / Math.sin(angleB_rad);
  const c = (b * Math.sin(angleC_rad)) / Math.sin(angleB_rad);

  return solveSSS(a, b, c);
}

function solveAAS(
  angleA: number,
  angleB: number,
  c: number
): Omit<TriangleResult, "triangleType"> {
  // Angle C = 180 - A - B
  const angleC = 180 - angleA - angleB;

  // Law of sines: c/sin(C) = a/sin(A)
  const angleA_rad = toRad(angleA);
  const angleB_rad = toRad(angleB);
  const angleC_rad = toRad(angleC);

  const a = (c * Math.sin(angleA_rad)) / Math.sin(angleC_rad);
  const b = (c * Math.sin(angleB_rad)) / Math.sin(angleC_rad);

  return solveSSS(a, b, c);
}

function solveSSA(
  a: number,
  b: number,
  angleA: number
): Omit<TriangleResult, "triangleType"> {
  // SSA case — ambiguous case (can have 0, 1, or 2 solutions)
  // Using law of sines: b/sin(B) = a/sin(A)
  // sin(B) = b * sin(A) / a

  const angleA_rad = toRad(angleA);
  const sinB = (b * Math.sin(angleA_rad)) / a;

  // No solution if sin(B) > 1
  if (sinB > 1) {
    // Return invalid triangle — this will be caught by validation
    // For now, return a degenerate case
    return {
      sideA: a,
      sideB: b,
      sideC: 0,
      angleA,
      angleB: 0,
      angleC: 0,
      area: 0,
      perimeter: a + b,
    };
  }

  // Case 1: acute angle B (sin(B) gives acute angle)
  const angleB_rad = Math.asin(Math.min(1, sinB));
  const angleB = normalizeDegrees(toDeg(angleB_rad));
  const angleC = normalizeDegrees(180 - angleA - angleB);

  if (angleC <= 0) {
    // Invalid triangle
    return {
      sideA: a,
      sideB: b,
      sideC: 0,
      angleA,
      angleB: 0,
      angleC: 0,
      area: 0,
      perimeter: a + b,
    };
  }

  // Calculate third side using law of sines
  const angleC_rad = toRad(angleC);
  const c = (a * Math.sin(angleC_rad)) / Math.sin(angleA_rad);

  return solveSSS(a, b, c);
}

export function compute(inputs: TriangleInputs): TriangleResult {
  let result: Omit<TriangleResult, "triangleType">;

  switch (inputs.method) {
    case "sss":
      result = solveSSS(
        inputs.sideA!,
        inputs.sideB!,
        inputs.sideC!
      );
      break;

    case "sas":
      result = solveSAS(
        inputs.sideA!,
        inputs.sideB!,
        inputs.angleC!
      );
      break;

    case "asa":
      result = solveASA(
        inputs.angleA!,
        inputs.sideB!,
        inputs.angleB!
      );
      break;

    case "aas":
      result = solveAAS(
        inputs.angleA!,
        inputs.angleB!,
        inputs.sideC!
      );
      break;

    case "ssa":
      result = solveSSA(
        inputs.sideA!,
        inputs.sideB!,
        inputs.angleA!
      );
      break;

    default:
      throw new Error("Unknown method");
  }

  // TS 6 resolves `result.sideA` to `unknown` because `TriangleResult
  // extends Record<string, unknown>` (the index signature wins over the
  // declared `number` for inferred narrowing). Cast through `as number`
  // here — the helper return types guarantee numeric values.
  const triangleType = classifyTriangle(
    result.sideA as number,
    result.sideB as number,
    result.sideC as number,
  );

  return {
    ...result,
    triangleType,
  } as TriangleResult;
}
