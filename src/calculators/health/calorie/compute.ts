import { z } from "zod";

export const inputSchema = z
  .object({
    gender: z.enum(["male", "female"]),
    weight: z.number().positive(),
    height: z.number().positive(),
    age: z.number().positive(),
    activity: z.enum(["sedentary", "light", "moderate", "active", "veryActive"]),
    goal: z.enum(["maintain", "lose", "lose-fast", "gain", "gain-fast"]),
  })
  .superRefine((data, ctx) => {
    if (data.weight < 1 || data.weight > 300) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["weight"], message: "Weight 1–300 kg" });
    }
    if (data.height < 50 || data.height > 250) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["height"], message: "Height 50–250 cm" });
    }
    if (data.age < 1 || data.age > 120) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["age"], message: "Age 1–120 years" });
    }
  });

export type CalorieInputs = z.infer<typeof inputSchema>;

export interface CalorieResult extends Record<string, unknown> {
  readonly tdee: number;
  readonly target: number;
  readonly deficit: number;
}

/** Mifflin-St Jeor BMR */
function bmrMifflin(weight: number, height: number, age: number, gender: "male" | "female"): number {
  const base = 10 * weight + 6.25 * height - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

const ACTIVITY_FACTORS: Record<CalorieInputs["activity"], number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const GOAL_ADJUSTMENTS: Record<CalorieInputs["goal"], number> = {
  maintain: 0,
  lose: -500,
  "lose-fast": -1000,
  gain: 500,
  "gain-fast": 1000,
};

/** Minimum safe intake based on gender */
function minSafeIntake(gender: "male" | "female"): number {
  return gender === "female" ? 1200 : 1500;
}

export function compute(inputs: CalorieInputs): CalorieResult {
  const { gender, weight, height, age, activity, goal } = inputs;
  const bmr = bmrMifflin(weight, height, age, gender);
  const tdee = Math.round(bmr * ACTIVITY_FACTORS[activity]);
  const adjustment = GOAL_ADJUSTMENTS[goal];
  let target = tdee + adjustment;

  // Enforce minimum safe intake for loss goals
  if (adjustment < 0) {
    target = Math.max(target, minSafeIntake(gender));
  }

  const deficit = target - tdee; // negative = deficit, positive = surplus

  return {
    tdee,
    target,
    deficit,
  };
}
