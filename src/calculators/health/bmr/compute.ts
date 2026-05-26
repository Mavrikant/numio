import { z } from "zod";

export const inputSchema = z
  .object({
    formula: z.enum(["mifflin", "harris"]),
    gender: z.enum(["male", "female"]),
    weight: z.number().positive(),
    height: z.number().positive(),
    age: z.number().positive(),
  })
  .superRefine((data, ctx) => {
    if (data.weight < 1 || data.weight > 300) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["weight"],
        message: "Weight must be between 1 and 300 kg",
      });
    }
    if (data.height < 50 || data.height > 250) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["height"],
        message: "Height must be between 50 and 250 cm",
      });
    }
    if (data.age < 1 || data.age > 120) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["age"],
        message: "Age must be between 1 and 120 years",
      });
    }
  });

export type BmrInputs = z.infer<typeof inputSchema>;

export interface BmrResult extends Record<string, unknown> {
  readonly bmr: number;
}

/**
 * Mifflin-St Jeor (1990): Am J Clin Nutr. doi:10.1093/ajcn/51.2.241
 * Male:   BMR = 10×weight + 6.25×height - 5×age + 5
 * Female: BMR = 10×weight + 6.25×height - 5×age - 161
 */
function mifflinStJeor(
  weight: number,
  height: number,
  age: number,
  gender: "male" | "female",
): number {
  const base = 10 * weight + 6.25 * height - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

/**
 * Harris-Benedict revised 1984 (Roza & Shizgal): Am J Clin Nutr. doi:10.1093/ajcn/40.1.168
 * Male:   BMR = 88.362 + 13.397×weight + 4.799×height - 5.677×age
 * Female: BMR = 447.593 + 9.247×weight + 3.098×height - 4.330×age
 */
function harrisBenedict(
  weight: number,
  height: number,
  age: number,
  gender: "male" | "female",
): number {
  if (gender === "male") {
    return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  }
  return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
}

export function compute(inputs: BmrInputs): BmrResult {
  const { formula, gender, weight, height, age } = inputs;
  let bmr: number;
  if (formula === "mifflin") {
    bmr = mifflinStJeor(weight, height, age, gender);
  } else {
    bmr = harrisBenedict(weight, height, age, gender);
  }
  return { bmr: Math.round(bmr * 100) / 100 };
}
