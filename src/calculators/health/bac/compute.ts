export interface BacInputs {
  drinks: number;
  weightKg: number;
  sex: "male" | "female";
  hoursElapsed: number;
}

export interface BacResult {
  bac: number;
  hoursUntilSober: number;
  isLegal: boolean;
  isDangerous: boolean;
  category: "sober" | "minimal" | "impaired" | "drunk" | "very_drunk" | "dangerous";
}

const GRAMS_PER_DRINK = 14;
const ELIMINATION_RATE = 0.015;
const R_MALE = 0.68;
const R_FEMALE = 0.55;

function getCategory(bac: number): BacResult["category"] {
  if (bac < 0.01) return "sober";
  if (bac < 0.03) return "minimal";
  if (bac < 0.08) return "impaired";
  if (bac < 0.15) return "drunk";
  if (bac < 0.3) return "very_drunk";
  return "dangerous";
}

export function compute(inputs: BacInputs): BacResult {
  const { drinks, weightKg, sex, hoursElapsed } = inputs;
  const r = sex === "male" ? R_MALE : R_FEMALE;
  const alcoholGrams = drinks * GRAMS_PER_DRINK;
  const rawBac = (alcoholGrams / (weightKg * r * 1000)) * 100;
  const metabolized = ELIMINATION_RATE * hoursElapsed;
  const bac = Math.max(0, Math.round((rawBac - metabolized) * 1000) / 1000);
  const hoursUntilSober = bac > 0 ? Math.round((bac / ELIMINATION_RATE) * 10) / 10 : 0;
  const isLegal = bac < 0.08;
  const isDangerous = bac >= 0.15;
  const category = getCategory(bac);

  return { bac, hoursUntilSober, isLegal, isDangerous, category };
}
