export interface LotteryDraw {
  readonly main: number[];
  readonly bonus: number[];
}

export interface LotteryPreset {
  readonly id: string;
  readonly label: string;
  readonly mainCount: number;
  readonly mainMax: number;
  readonly bonusCount: number;
  readonly bonusMax: number;
}

export const PRESETS: LotteryPreset[] = [
  { id: "powerball", label: "Powerball (US)", mainCount: 5, mainMax: 69, bonusCount: 1, bonusMax: 26 },
  { id: "mega-millions", label: "Mega Millions (US)", mainCount: 5, mainMax: 70, bonusCount: 1, bonusMax: 25 },
  { id: "euromillions", label: "EuroMillions", mainCount: 5, mainMax: 50, bonusCount: 2, bonusMax: 12 },
  { id: "uk-lotto", label: "UK Lotto", mainCount: 6, mainMax: 59, bonusCount: 0, bonusMax: 0 },
  { id: "sayisal-loto", label: "Türkiye Sayısal Loto", mainCount: 6, mainMax: 90, bonusCount: 0, bonusMax: 0 },
];

/** Pick `count` unique integers in [1, max] using the supplied 0..1 random source. */
export function pickUnique(count: number, max: number, rand: () => number): number[] {
  if (count <= 0 || max <= 0) return [];
  const n = Math.min(count, max);
  const pool = Array.from({ length: max }, (_, i) => i + 1);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j]!, pool[i]!];
  }
  return pool.slice(0, n).sort((a, b) => a - b);
}

/** Draw `mainCount` main numbers and `bonusCount` bonus numbers from independent pools. */
export function drawLottery(preset: LotteryPreset, rand: () => number): LotteryDraw {
  return {
    main: pickUnique(preset.mainCount, preset.mainMax, rand),
    bonus: pickUnique(preset.bonusCount, preset.bonusMax, rand),
  };
}
