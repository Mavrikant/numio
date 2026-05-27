import type { UnitKey } from "../types/calculator";

type ConversionFn = (value: number) => number;

interface UnitDefinition {
  readonly category:
    | "mass"
    | "length"
    | "volume"
    | "temperature"
    | "time"
    | "energy"
    | "power"
    | "pressure"
    | "ratio"
    | "voltage"
    | "current"
    | "resistance"
    | "currency_usd"
    | "currency_eur"
    | "currency_try"
    | "currency_gbp"
    | "currency_jpy"
    | "speed"
    | "area";
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

  // ratio / percent
  percent: { category: "ratio", toBase: (v) => v / 100, fromBase: (v) => v * 100 },
  ratio: { category: "ratio", toBase: (v) => v, fromBase: (v) => v },

  // electrical (kept separate categories so cross-type conversions are rejected)
  volt: { category: "voltage", toBase: (v) => v, fromBase: (v) => v },
  amp: { category: "current", toBase: (v) => v, fromBase: (v) => v },
  ohm: { category: "resistance", toBase: (v) => v, fromBase: (v) => v },

  // currencies: treated as distinct categories to avoid implicit cross-currency conversions
  usd: { category: "currency_usd", toBase: (v) => v, fromBase: (v) => v },
  eur: { category: "currency_eur", toBase: (v) => v, fromBase: (v) => v },
  try: { category: "currency_try", toBase: (v) => v, fromBase: (v) => v },
  gbp: { category: "currency_gbp", toBase: (v) => v, fromBase: (v) => v },
  jpy: { category: "currency_jpy", toBase: (v) => v, fromBase: (v) => v },

  // speed — base unit: m/s
  ms: { category: "speed", toBase: (v) => v, fromBase: (v) => v },
  kmh: { category: "speed", toBase: (v) => v / 3.6, fromBase: (v) => v * 3.6 },
  mph: { category: "speed", toBase: (v) => v * 0.44704, fromBase: (v) => v / 0.44704 },
  knots: { category: "speed", toBase: (v) => v * 0.51444, fromBase: (v) => v / 0.51444 },
  fts: { category: "speed", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },

  // area — base unit: m²
  m2: { category: "area", toBase: (v) => v, fromBase: (v) => v },
  cm2: { category: "area", toBase: (v) => v / 10000, fromBase: (v) => v * 10000 },
  ft2: { category: "area", toBase: (v) => v * 0.09290304, fromBase: (v) => v / 0.09290304 },
  yd2: { category: "area", toBase: (v) => v * 0.83612736, fromBase: (v) => v / 0.83612736 },
  km2: { category: "area", toBase: (v) => v * 1000000, fromBase: (v) => v / 1000000 },
  ha: { category: "area", toBase: (v) => v * 10000, fromBase: (v) => v / 10000 },
  acre: { category: "area", toBase: (v) => v * 4046.8564224, fromBase: (v) => v / 4046.8564224 },

  // additional volume units — base unit: L (liters)
  m3: { category: "volume", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  ft3: { category: "volume", toBase: (v) => v * 28.3168466, fromBase: (v) => v / 28.3168466 },
  cup: { category: "volume", toBase: (v) => v * 0.236588, fromBase: (v) => v / 0.236588 },
  tbsp: { category: "volume", toBase: (v) => v * 0.0147868, fromBase: (v) => v / 0.0147868 },
  tsp: { category: "volume", toBase: (v) => v * 0.00492892, fromBase: (v) => v / 0.00492892 },
  galuk: { category: "volume", toBase: (v) => v * 4.54609, fromBase: (v) => v / 4.54609 },

  // additional pressure units — base unit: Pa (Pascals)
  atm: { category: "pressure", toBase: (v) => v * 101325, fromBase: (v) => v / 101325 },
  mmhg: { category: "pressure", toBase: (v) => v * 133.322, fromBase: (v) => v / 133.322 },
  inhg: { category: "pressure", toBase: (v) => v * 3386.39, fromBase: (v) => v / 3386.39 },

  // additional energy units — base unit: J (Joules)
  kj: { category: "energy", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  cal: { category: "energy", toBase: (v) => v * 4.184, fromBase: (v) => v / 4.184 },
  kwh: { category: "energy", toBase: (v) => v * 3600000, fromBase: (v) => v / 3600000 },
  btu: { category: "energy", toBase: (v) => v * 1055.06, fromBase: (v) => v / 1055.06 },
  ftlbf: { category: "energy", toBase: (v) => v * 1.35582, fromBase: (v) => v / 1.35582 },
  ev: { category: "energy", toBase: (v) => v * 1.60218e-19, fromBase: (v) => v / 1.60218e-19 },
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
