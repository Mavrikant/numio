import { z } from "zod";

// Activity → vigorous-intensity MET value, sourced from the Compendium of
// Physical Activities (Ainsworth et al., 2011). The "vigorous" anchor is
// scaled down for lighter intensities (light = 0.7×, moderate = 1.0×,
// vigorous = 1.3×) so users can express a single qualitative effort level.
export const ACTIVITY_MET: Record<string, number> = {
  walking: 3.5,
  running: 9.8,
  cycling: 7.5,
  swimming: 8.0,
  weightlifting: 5.0,
  yoga: 2.5,
  basketball: 6.5,
  soccer: 7.0,
  tennis: 7.3,
  dancing: 4.8,
  hiking: 6.0,
  "jumping-rope": 12.3,
};

const INTENSITY_FACTOR: Record<"light" | "moderate" | "vigorous", number> = {
  light: 0.7,
  moderate: 1.0,
  vigorous: 1.3,
};

const KCAL_PER_BREAD_SLICE = 70;

export const inputSchema = z
  .object({
    activity: z.enum([
      "walking",
      "running",
      "cycling",
      "swimming",
      "weightlifting",
      "yoga",
      "basketball",
      "soccer",
      "tennis",
      "dancing",
      "hiking",
      "jumping-rope",
    ]),
    duration: z.number().positive(),
    weight: z.number().positive(),
    intensity: z.enum(["light", "moderate", "vigorous"]),
  })
  .superRefine((data, ctx) => {
    if (data.duration <= 0 || data.duration > 1440) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["duration"],
        message: "Duration must be between 1 and 1440 minutes",
      });
    }
    if (data.weight < 20 || data.weight > 300) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["weight"],
        message: "Weight must be between 20 and 300 kg",
      });
    }
  });

export type CaloriesBurnedInputs = z.infer<typeof inputSchema>;

export interface CaloriesBurnedResult extends Record<string, unknown> {
  readonly caloriesBurned: number;
  readonly metValue: number;
  readonly equivalentFoods: string;
}

/**
 * MET-based energy expenditure:
 *   kcal = MET × weight(kg) × time(h)
 *
 * Reference: Ainsworth BE et al. (2011). 2011 Compendium of Physical
 * Activities: a second update of codes and MET values. Med Sci Sports
 * Exerc, 43(8):1575–81. doi:10.1249/MSS.0b013e31821ece12
 */
export function compute(inputs: CaloriesBurnedInputs): CaloriesBurnedResult {
  const baseMet = ACTIVITY_MET[inputs.activity];
  if (baseMet === undefined) {
    throw new Error(`Unknown activity: ${inputs.activity}`);
  }
  const intensityFactor = INTENSITY_FACTOR[inputs.intensity];
  const metValue = baseMet * intensityFactor;
  const hours = inputs.duration / 60;
  const kcal = metValue * inputs.weight * hours;

  const slices = kcal / KCAL_PER_BREAD_SLICE;
  let equivalentFoods: string;
  if (slices < 0.5) {
    equivalentFoods = "less than half a slice of bread";
  } else if (slices < 1.5) {
    equivalentFoods = "about 1 slice of bread";
  } else {
    equivalentFoods = `about ${Math.round(slices)} slices of bread`;
  }

  return {
    caloriesBurned: Math.round(kcal),
    metValue: Math.round(metValue * 100) / 100,
    equivalentFoods,
  };
}
