import type { UnitKey } from "../types/calculator";

type ConversionFn = (value: number) => number;

interface UnitDefinition {
  readonly category: "mass" | "length" | "volume" | "temperature" | "time" | "energy" | "power" | "pressure";
  readonly toBase: ConversionFn;
  readonly fromBase: ConversionFn;
}

const UNITS: Partial<Record<UnitKey, UnitDefinition>> = {
  kg: { category: "mass", toBase: (v) => v, fromBase: (v) => v },
  g: { category: "mass", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  lb: { category: "mass", toBase: (v) => v * 0.45359237, fromBase: (v) => v / 0.45359237 },
  oz: { category: "mass", toBase: (v) => v * 0.0283495231, fromBase: (v) => v / 0.0283495231 },

  m: { category: "length", toBase: (v) => v, fromBase: (v) => v },
  cm: { category: "length", toBase: (v) => v / 100, fromBase: (v) => v * 100 },
  mm: { category: "length", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  km: { category: "length", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  ft: { category: "length", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
  in: { category: "length", toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
  mi: { category: "length", toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },

  l: { category: "volume", toBase: (v) => v, fromBase: (v) => v },
  ml: { category: "volume", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  gal: { category: "volume", toBase: (v) => v * 3.78541178, fromBase: (v) => v / 3.78541178 },
  floz: { category: "volume", toBase: (v) => v * 0.0295735296, fromBase: (v) => v / 0.0295735296 },

  celsius: { category: "temperature", toBase: (v) => v, fromBase: (v) => v },
  fahrenheit: {
    category: "temperature",
    toBase: (v) => (v - 32) * (5 / 9),
    fromBase: (v) => v * (9 / 5) + 32,
  },
  kelvin: {
    category: "temperature",
    toBase: (v) => v - 273.15,
    fromBase: (v) => v + 273.15,
  },

  second: { category: "time", toBase: (v) => v, fromBase: (v) => v },
  minute: { category: "time", toBase: (v) => v * 60, fromBase: (v) => v / 60 },
  hour: { category: "time", toBase: (v) => v * 3600, fromBase: (v) => v / 3600 },
  day: { category: "time", toBase: (v) => v * 86400, fromBase: (v) => v / 86400 },
  month: { category: "time", toBase: (v) => v * 2629746, fromBase: (v) => v / 2629746 },
  year: { category: "time", toBase: (v) => v * 31556952, fromBase: (v) => v / 31556952 },

  joule: { category: "energy", toBase: (v) => v, fromBase: (v) => v },
  kcal: { category: "energy", toBase: (v) => v * 4184, fromBase: (v) => v / 4184 },

  watt: { category: "power", toBase: (v) => v, fromBase: (v) => v },
  kw: { category: "power", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  hp: { category: "power", toBase: (v) => v * 745.699872, fromBase: (v) => v / 745.699872 },

  pa: { category: "pressure", toBase: (v) => v, fromBase: (v) => v },
  kpa: { category: "pressure", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  bar: { category: "pressure", toBase: (v) => v * 100000, fromBase: (v) => v / 100000 },
  psi: { category: "pressure", toBase: (v) => v * 6894.757, fromBase: (v) => v / 6894.757 },
};

export class UnitConversionError extends Error {
  constructor(
    public from: UnitKey,
    public to: UnitKey,
    message?: string,
  ) {
    super(message ?? `Cannot convert ${from} to ${to}`);
    this.name = "UnitConversionError";
  }
}

export function convert(value: number, from: UnitKey, to: UnitKey): number {
  if (from === to) return value;

  const fromDef = UNITS[from];
  const toDef = UNITS[to];

  if (!fromDef || !toDef) {
    throw new UnitConversionError(from, to, `Unknown unit: ${!fromDef ? from : to}`);
  }
  if (fromDef.category !== toDef.category) {
    throw new UnitConversionError(
      from,
      to,
      `Incompatible categories: ${fromDef.category} → ${toDef.category}`,
    );
  }

  const base = fromDef.toBase(value);
  return toDef.fromBase(base);
}

export function getUnitCategory(unit: UnitKey): UnitDefinition["category"] | undefined {
  return UNITS[unit]?.category;
}

export function areUnitsCompatible(a: UnitKey, b: UnitKey): boolean {
  const aCat = getUnitCategory(a);
  const bCat = getUnitCategory(b);
  return aCat !== undefined && aCat === bCat;
}
