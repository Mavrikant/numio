/**
 * Random Password Generator — interactive security tool (client island).
 *
 * Generation uses the Web Crypto API (crypto.getRandomValues) with rejection
 * sampling for an unbiased uniform draw over the selected character pool. The
 * tool reports entropy (bits), a strength rating, and estimated crack times
 * across several attacker models. Everything runs in the browser; nothing is
 * transmitted.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { formatNumber } from "@/lib/format";
import {
  ATTACK_SCENARIOS,
  analyzePassword,
  buildPool,
  generatePassword,
  humanizeSeconds,
  type AttackScenario,
  type PasswordOptions,
  type StrengthLevel,
} from "./logic";
import definition from "./definition";

const MIN_LENGTH = 4;
const MAX_LENGTH = 64;

/** Unbiased integer in [0, maxExclusive) via crypto rejection sampling. */
function secureRandomInt(maxExclusive: number): number {
  if (maxExclusive <= 1) return 0;
  const limit = Math.floor(0xffffffff / maxExclusive) * maxExclusive;
  const buf = new Uint32Array(1);
  let x: number;
  do {
    crypto.getRandomValues(buf);
    x = buf[0]!;
  } while (x >= limit);
  return x % maxExclusive;
}

const SCENARIO_ORDER: readonly AttackScenario[] = [
  "onlineThrottled",
  "onlineFast",
  "offlineSlowHash",
  "offlineFastHash",
];

const LEVEL_COLOR: Record<StrengthLevel, string> = {
  veryWeak: "#ef4444",
  weak: "#f97316",
  fair: "#eab308",
  strong: "#84cc16",
  veryStrong: "#22c55e",
};

interface ToolProps {
  readonly locale: Locale;
}

export default function PasswordGeneratorTool({ locale }: ToolProps) {
  const bundle = definition.i18n[locale] ?? definition.i18n["en"];
  const ui = bundle.ui;

  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    excludeAmbiguous: false,
  });
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const poolSize = useMemo(() => buildPool(options).length, [options]);
  const hasPool = poolSize > 0;

  const regenerate = useCallback(() => {
    setPassword(generatePassword(options, secureRandomInt));
    setCopied(false);
  }, [options]);

  // Regenerate whenever the options change (covers the initial render too).
  useEffect(() => {
    regenerate();
  }, [regenerate]);

  const metrics = useMemo(
    () => analyzePassword(options.length, poolSize),
    [options.length, poolSize],
  );

  const copy = useCallback(() => {
    if (!password) return;
    navigator.clipboard?.writeText(password).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {
        /* clipboard denied — no-op */
      },
    );
  }, [password]);

  const crackText = (seconds: number): string => {
    const d = humanizeSeconds(seconds);
    if (d.unitKey === "instant") return ui["crack.instant"]!;
    if (d.unitKey === "eternity") return ui["crack.eternity"]!;
    return `${formatNumber(d.value, locale)} ${ui[`unit.${d.unitKey}`]}`;
  };

  const setOpt = <K extends keyof PasswordOptions>(key: K, value: PasswordOptions[K]) =>
    setOptions((o) => ({ ...o, [key]: value }));

  const toggles: ReadonlyArray<[keyof PasswordOptions, string]> = [
    ["lowercase", ui.lowercase],
    ["uppercase", ui.uppercase],
    ["numbers", ui.numbers],
    ["symbols", ui.symbols],
  ];

  return (
    <div className="space-y-6">
      {/* Password output */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div
          className="flex-1 break-all rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-mono text-lg text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          aria-label="Generated password"
        >
          {hasPool ? password : <span className="text-sm text-amber-600 dark:text-amber-400">{ui.selectAtLeastOne}</span>}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={regenerate}
            disabled={!hasPool}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {ui.regenerate}
          </button>
          <button
            type="button"
            onClick={copy}
            disabled={!hasPool}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {copied ? ui.copied : ui.copy}
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/50">
        <label className="block">
          <div className="mb-1 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300">
            <span>{ui.length}</span>
            <span className="font-mono">{options.length}</span>
          </div>
          <input
            type="range"
            min={MIN_LENGTH}
            max={MAX_LENGTH}
            value={options.length}
            onChange={(e) => setOpt("length", Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </label>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {toggles.map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <input
                type="checkbox"
                checked={options[key] as boolean}
                onChange={(e) => setOpt(key, e.target.checked as never)}
                className="h-4 w-4 accent-blue-600"
              />
              {label}
            </label>
          ))}
          <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 sm:col-span-2">
            <input
              type="checkbox"
              checked={options.excludeAmbiguous}
              onChange={(e) => setOpt("excludeAmbiguous", e.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />
            {ui.excludeAmbiguous}
          </label>
        </div>
      </div>

      {/* Metrics */}
      {hasPool && (
        <div className="space-y-5 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">{ui.metricsTitle}</h3>

          {/* Strength meter */}
          <div>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-slate-500 dark:text-slate-400">{ui.strength}</span>
              <span className="font-medium" style={{ color: LEVEL_COLOR[metrics.level] }}>
                {ui[`level.${metrics.level}`]}
              </span>
            </div>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((seg) => (
                <div
                  key={seg}
                  className="h-2 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"
                  style={
                    seg <= metrics.score
                      ? { backgroundColor: LEVEL_COLOR[metrics.level] }
                      : undefined
                  }
                />
              ))}
            </div>
          </div>

          {/* Key numbers */}
          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
            <div className="flex justify-between border-b border-slate-100 py-1 dark:border-slate-800">
              <dt className="text-slate-500 dark:text-slate-400">{ui.entropy}</dt>
              <dd className="font-mono font-medium text-slate-900 dark:text-slate-100">
                {formatNumber(metrics.entropy, locale, { maximumFractionDigits: 1 })} {ui.bits}
              </dd>
            </div>
            <div className="flex justify-between border-b border-slate-100 py-1 dark:border-slate-800">
              <dt className="text-slate-500 dark:text-slate-400">{ui.poolSize}</dt>
              <dd className="font-mono font-medium text-slate-900 dark:text-slate-100">
                {poolSize} {ui.chars}
              </dd>
            </div>
            <div className="flex justify-between border-b border-slate-100 py-1 dark:border-slate-800">
              <dt className="text-slate-500 dark:text-slate-400">{ui.length}</dt>
              <dd className="font-mono font-medium text-slate-900 dark:text-slate-100">
                {options.length}
              </dd>
            </div>
          </dl>

          {/* Crack times */}
          <div>
            <div className="mb-2">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">{ui.crackTitle}</h4>
              <p className="text-xs text-slate-400 dark:text-slate-500">{ui.crackSubtitle}</p>
            </div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
              {SCENARIO_ORDER.map((key) => (
                <div
                  key={key}
                  className="flex items-center justify-between border-b border-slate-100 py-1 dark:border-slate-800"
                >
                  <dt className="text-slate-500 dark:text-slate-400">{ui[`scenario.${key}`]}</dt>
                  <dd
                    className="font-medium text-slate-900 dark:text-slate-100"
                    title={`${ATTACK_SCENARIOS[key].toLocaleString()} guesses/s`}
                  >
                    {crackText(metrics.crackSeconds[key])}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
