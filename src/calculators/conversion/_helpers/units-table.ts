// Conversion factors table for reuse across conversion calculators (batch 20, 21, 22)
// All factors are relative to base units: m (length), kg (mass), C (temperature)

export interface ConversionUnit {
  readonly label: string;
  readonly symbol: string;
  readonly toBase: number; // multiply value by this to convert to base unit
}

export interface UnitsTable {
  readonly [unitKey: string]: ConversionUnit;
}

// Length units table (base = meter)
export const lengthUnits: UnitsTable = {
  m: { label: "Meter", symbol: "m", toBase: 1 },
  cm: { label: "Centimeter", symbol: "cm", toBase: 0.01 },
  mm: { label: "Millimeter", symbol: "mm", toBase: 0.001 },
  km: { label: "Kilometer", symbol: "km", toBase: 1000 },
  in: { label: "Inch", symbol: "in", toBase: 0.0254 },
  ft: { label: "Foot", symbol: "ft", toBase: 0.3048 },
  yd: { label: "Yard", symbol: "yd", toBase: 0.9144 },
  mi: { label: "Mile", symbol: "mi", toBase: 1609.344 },
  nm: { label: "Nautical Mile", symbol: "nm", toBase: 1852 },
  μm: { label: "Micrometer", symbol: "μm", toBase: 0.000001 },
};

// Mass/Weight units table (base = kilogram)
export const massUnits: UnitsTable = {
  kg: { label: "Kilogram", symbol: "kg", toBase: 1 },
  g: { label: "Gram", symbol: "g", toBase: 0.001 },
  mg: { label: "Milligram", symbol: "mg", toBase: 0.000001 },
  lb: { label: "Pound", symbol: "lb", toBase: 0.45359237 },
  oz: { label: "Ounce", symbol: "oz", toBase: 0.0283495231 },
  ton: { label: "Metric Tonne", symbol: "t", toBase: 1000 },
  stone: { label: "Stone", symbol: "st", toBase: 6.35029 },
};

// Temperature conversion functions (not simple multipliers)
export interface TemperatureConverter {
  readonly toBase: (value: number) => number;
  readonly fromBase: (value: number) => number;
}

export const temperatureConverters: Record<string, TemperatureConverter> = {
  celsius: {
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  fahrenheit: {
    toBase: (v) => (v - 32) * (5 / 9),
    fromBase: (v) => v * (9 / 5) + 32,
  },
  kelvin: {
    toBase: (v) => v - 273.15,
    fromBase: (v) => v + 273.15,
  },
};

// Conversion helper for simple unit systems (length, mass)
export function convertUnit(
  value: number,
  fromUnit: ConversionUnit,
  toUnit: ConversionUnit
): number {
  // Convert to base unit first
  const baseValue = value * fromUnit.toBase;
  // Then convert from base to target unit (divide by toBase)
  return baseValue / toUnit.toBase;
}
