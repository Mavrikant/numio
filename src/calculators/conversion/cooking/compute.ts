/**
 * Cooking Unit Converter
 * Converts between cooking volume units (cups, tablespoons, teaspoons, mL)
 * and weight units (grams) with ingredient density lookup
 */

// Standard cooking volume conversions (US measurements)
const COOKING_VOLUME_CONVERSIONS = {
  cup: 236.588, // mL (US cup)
  tbsp: 14.7868, // mL (tablespoon)
  tsp: 4.92892, // mL (teaspoon)
  ml: 1, // mL (base unit)
  l: 1000, // mL
};

// Ingredient density database: g/mL (or g/cm³)
// Sources: USDA Nutrition Database, standard culinary references
const INGREDIENT_DENSITY: Record<string, number> = {
  water: 1.0,
  milk: 1.03,
  butter: 0.911, // 227 g/cup typical measurement
  oil: 0.92,
  flour: 0.529, // ~125 g/cup all-purpose flour
  sugar: 0.845, // ~200 g/cup granulated sugar
  "brown-sugar": 0.875, // ~207 g/cup packed
  salt: 1.546, // ~366 g/cup
  honey: 1.42,
  peanut_butter: 1.02,
  yogurt: 1.02,
  cream: 1.005,
  "heavy-cream": 0.998,
  cocoa_powder: 0.5, // ~119 g/cup unsweetened
  baking_soda: 0.966,
  baking_powder: 0.8,
  cinnamon: 0.6,
  cornstarch: 0.6,
  oats: 0.5,
};

export interface CookingConversionResult {
  fromValue: number;
  fromUnit: string;
  toValue: number;
  toUnit: string;
  weightGrams?: number;
  ingredient?: string;
}

export function compute(inputs: {
  value: number;
  fromUnit: "cup" | "tbsp" | "tsp" | "ml" | "l" | "g";
  toUnit: "cup" | "tbsp" | "tsp" | "ml" | "l" | "g";
  ingredient?: string;
}): CookingConversionResult {
  const { value, fromUnit, toUnit, ingredient } = inputs;

  let resultValue: number;
  let weightGrams: number | undefined;

  // If we're converting TO grams and have an ingredient
  if (toUnit === "g" && ingredient) {
    // First convert volume to mL
    const mlValue = convertVolumeToMl(value, fromUnit);
    // Then use density to convert to grams
    const density = INGREDIENT_DENSITY[ingredient.toLowerCase()] || INGREDIENT_DENSITY.water;
    resultValue = mlValue * density;
    weightGrams = resultValue;
  }
  // If we're converting FROM grams and have an ingredient
  else if (fromUnit === "g" && ingredient) {
    const density = INGREDIENT_DENSITY[ingredient.toLowerCase()] || INGREDIENT_DENSITY.water;
    const mlValue = value / density;
    resultValue = convertMlToVolume(mlValue, toUnit);
    weightGrams = value;
  }
  // Pure volume conversions
  else if ((fromUnit === "g" && toUnit !== "g") || (toUnit === "g" && fromUnit !== "g")) {
    // Can't convert weight to volume without density, use water as default
    const density = INGREDIENT_DENSITY.water;
    if (fromUnit === "g") {
      const mlValue = value / density;
      resultValue = convertMlToVolume(mlValue, toUnit);
      weightGrams = value;
    } else {
      const mlValue = convertVolumeToMl(value, fromUnit);
      resultValue = mlValue * density;
      weightGrams = resultValue;
    }
  } else {
    // Both are volume units
    const mlValue = convertVolumeToMl(value, fromUnit as "cup" | "tbsp" | "tsp" | "ml" | "l");
    resultValue = convertMlToVolume(mlValue, toUnit as "cup" | "tbsp" | "tsp" | "ml" | "l");
  }

  return {
    fromValue: value,
    fromUnit,
    toValue: resultValue,
    toUnit,
    weightGrams,
    ingredient: ingredient || undefined,
  };
}

/**
 * Convert any cooking volume unit to milliliters
 */
function convertVolumeToMl(value: number, unit: "cup" | "tbsp" | "tsp" | "ml" | "l"): number {
  const conversion = COOKING_VOLUME_CONVERSIONS[unit];
  if (!conversion) {
    throw new Error(`Unknown volume unit: ${unit}`);
  }
  return value * conversion;
}

/**
 * Convert milliliters to a specific cooking volume unit
 */
function convertMlToVolume(ml: number, unit: "cup" | "tbsp" | "tsp" | "ml" | "l"): number {
  const conversion = COOKING_VOLUME_CONVERSIONS[unit];
  if (!conversion) {
    throw new Error(`Unknown volume unit: ${unit}`);
  }
  return ml / conversion;
}

/**
 * Get available ingredients for density lookup
 */
export function getAvailableIngredients(): string[] {
  return Object.keys(INGREDIENT_DENSITY).sort();
}

/**
 * Get density for a specific ingredient
 */
export function getIngredientDensity(ingredient: string): number {
  return INGREDIENT_DENSITY[ingredient.toLowerCase()] || INGREDIENT_DENSITY.water;
}
