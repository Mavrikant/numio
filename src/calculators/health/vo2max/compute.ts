import { z } from "zod";

export const inputSchema = z
  .object({
    testType: z.enum(["cooper-12min", "mile-and-half"]),
    // Cooper test — distance covered in 12 min (metres)
    distance: z.number().nonnegative().optional(),
    // 1.5-mile run time (minutes)
    timeMinutes: z.number().nonnegative().optional(),
    age: z.number().positive(),
    sex: z.enum(["male", "female"]),
  })
  .superRefine((data, ctx) => {
    if (data.age < 10 || data.age > 90) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["age"],
        message: "Age must be between 10 and 90 years",
      });
    }
    if (data.testType === "cooper-12min") {
      if (data.distance === undefined || data.distance <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["distance"],
          message: "Distance is required for the Cooper 12-minute test",
        });
      } else if (data.distance < 500 || data.distance > 6000) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["distance"],
          message: "Distance must be between 500 and 6000 metres",
        });
      }
    } else {
      if (data.timeMinutes === undefined || data.timeMinutes <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["timeMinutes"],
          message: "Time is required for the 1.5-mile run test",
        });
      } else if (data.timeMinutes < 5 || data.timeMinutes > 30) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["timeMinutes"],
          message: "Time must be between 5 and 30 minutes",
        });
      }
    }
  });

export type Vo2maxInputs = z.infer<typeof inputSchema>;

export type FitnessCategory =
  | "poor"
  | "fair"
  | "good"
  | "excellent"
  | "superior";

export interface Vo2maxResult extends Record<string, unknown> {
  readonly vo2maxMlKgMin: number;
  readonly fitnessCategory: FitnessCategory;
}

/**
 * ACSM aerobic fitness norms (VO₂max ml/kg/min) — simplified five-band
 * thresholds derived from ACSM's Guidelines for Exercise Testing and
 * Prescription (11th ed., Wolters Kluwer, 2021). Each cell is the lower
 * bound for that band; values below are "poor".
 *
 * Ages: 20–29, 30–39, 40–49, 50–59, 60+
 * Bands: fair, good, excellent, superior
 */
const FITNESS_BANDS: Record<
  "male" | "female",
  ReadonlyArray<readonly [number, number, number, number]>
> = {
  // [fair, good, excellent, superior]
  male: [
    [35, 42, 48, 55], // 20–29
    [33, 40, 46, 53], // 30–39
    [31, 38, 44, 51], // 40–49
    [28, 35, 41, 48], // 50–59
    [25, 32, 38, 45], // 60+
  ],
  female: [
    [28, 34, 40, 48], // 20–29
    [27, 33, 39, 46], // 30–39
    [25, 31, 37, 44], // 40–49
    [22, 28, 34, 41], // 50–59
    [20, 26, 32, 38], // 60+
  ],
};

function ageBandIndex(age: number): number {
  if (age < 30) return 0;
  if (age < 40) return 1;
  if (age < 50) return 2;
  if (age < 60) return 3;
  return 4;
}

function classify(vo2: number, age: number, sex: "male" | "female"): FitnessCategory {
  const bands = FITNESS_BANDS[sex][ageBandIndex(age)];
  if (vo2 >= bands[3]) return "superior";
  if (vo2 >= bands[2]) return "excellent";
  if (vo2 >= bands[1]) return "good";
  if (vo2 >= bands[0]) return "fair";
  return "poor";
}

/**
 * VO₂max estimation from a submaximal field test.
 *
 *  - Cooper 12-min run (Cooper, JAMA 1968):
 *      VO₂max = (distance_m − 504.9) / 44.73
 *
 *  - 1.5-mile run (derived Cooper relation):
 *      VO₂max = 483 / time_min + 3.5
 *
 * References:
 *  - Cooper KH (1968). A means of assessing maximal oxygen intake. JAMA
 *    203(3):201–4.
 *  - ACSM's Guidelines for Exercise Testing and Prescription, 11th ed.
 */
export function compute(inputs: Vo2maxInputs): Vo2maxResult {
  let vo2: number;

  if (inputs.testType === "cooper-12min") {
    const distance = inputs.distance as number;
    vo2 = (distance - 504.9) / 44.73;
  } else {
    const t = inputs.timeMinutes as number;
    vo2 = 483 / t + 3.5;
  }

  // Clamp to a physiologically plausible range so downstream classification
  // doesn't behave oddly for extreme out-of-range inputs that still pass
  // schema validation (e.g. an unrealistically slow Cooper distance).
  if (!Number.isFinite(vo2) || vo2 < 0) vo2 = 0;

  const fitnessCategory = classify(vo2, inputs.age, inputs.sex);

  return {
    vo2maxMlKgMin: Math.round(vo2 * 10) / 10,
    fitnessCategory,
  };
}
