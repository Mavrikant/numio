import { z } from "zod";
import { convert } from "@/lib/units";

export const inputSchema = z.object({
  unit: z.enum(["metric", "imperial"]),
  weight: z.number().positive(),
  height: z.number().positive(),
});

export type BmiInputs = z.infer<typeof inputSchema>;

export type BmiCategory =
  | "underweight"
  | "normal"
  | "overweight"
  | "obese"
  | "severelyObese";

export interface BmiResult extends Record<string, unknown> {
  readonly bmi: number;
  readonly category: BmiCategory;
  readonly healthyMinWeight: number;
  readonly healthyMaxWeight: number;
}

// WHO BMI classification thresholds — https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations
const WHO_UNDERWEIGHT_THRESHOLD = 18.5;
const WHO_NORMAL_THRESHOLD = 25.0;
const WHO_OVERWEIGHT_THRESHOLD = 30.0;
const WHO_OBESE_THRESHOLD = 40.0;

// WHO healthy BMI range bounds
const WHO_HEALTHY_MIN = 18.5;
const WHO_HEALTHY_MAX = 24.9;

function classifyBmi(bmi: number): BmiCategory {
  if (bmi < WHO_UNDERWEIGHT_THRESHOLD) return "underweight";
  if (bmi < WHO_NORMAL_THRESHOLD) return "normal";
  if (bmi < WHO_OVERWEIGHT_THRESHOLD) return "overweight";
  if (bmi < WHO_OBESE_THRESHOLD) return "obese";
  return "severelyObese";
}

export function compute(inputs: BmiInputs): BmiResult {
  let weightKg: number;
  let heightM: number;

  if (inputs.unit === "metric") {
    weightKg = inputs.weight;
    // height input is in cm — convert to metres
    heightM = inputs.height / 100;
  } else {
    // imperial: weight in lb, height in inches
    weightKg = convert(inputs.weight, "lb", "kg");
    heightM = convert(inputs.height, "in", "m");
  }

  // BMI formula — Adolphe Quetelet (1832): weight(kg) / height(m)²
  const bmi = weightKg / (heightM * heightM);

  const category = classifyBmi(bmi);

  // Healthy weight bounds at user's height, using WHO thresholds
  const heightMSq = heightM * heightM;
  const healthyMinWeightKg = WHO_HEALTHY_MIN * heightMSq;
  const healthyMaxWeightKg = WHO_HEALTHY_MAX * heightMSq;

  if (inputs.unit === "metric") {
    return {
      bmi: Math.round(bmi * 10) / 10,
      category,
      healthyMinWeight: Math.round(healthyMinWeightKg * 100) / 100,
      healthyMaxWeight: Math.round(healthyMaxWeightKg * 100) / 100,
    };
  } else {
    // Return healthy weights in lb for imperial users
    const healthyMinWeightLb = convert(healthyMinWeightKg, "kg", "lb");
    const healthyMaxWeightLb = convert(healthyMaxWeightKg, "kg", "lb");
    return {
      bmi: Math.round(bmi * 10) / 10,
      category,
      healthyMinWeight: Math.round(healthyMinWeightLb * 100) / 100,
      healthyMaxWeight: Math.round(healthyMaxWeightLb * 100) / 100,
    };
  }
}
