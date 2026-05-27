/**
 * UUID Generator — interactive security tool (client island).
 *
 * Generates RFC 9562 version-4 UUIDs from `crypto.getRandomValues`. Supports
 * bulk generation, uppercase, and optional hyphens. Everything runs locally.
 */

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { generateMany, type UuidOptions } from "./logic";
import definition from "./definition";

const MAX_COUNT = 1000;

function secureRandomBytes(n: number): Uint8Array {
  const buf = new Uint8Array(n);
  crypto.getRandomValues(buf);
  return buf;
}

interface ToolProps {
  readonly locale: Locale;
}

export default function UuidGeneratorTool({ locale }: ToolProps) {
  const bundle = definition.i18n[locale] ?? definition.i18n["en"];
  const ui = bundle.ui;

  const [count, setCount] = useState(1);
  const [options, setOptions] = useState<UuidOptions>({ uppercase: false, hyphens: true });
  const [uuids, setUuids] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const regenerate = useCallback(() => {
    setUuids(generateMany(count, options, secureRandomBytes));
    setCopied(false);
  }, [count, options]);

  useEffect(() => {
    regenerate();
  }, [regenerate]);

  const copyAll = () => {
    if (uuids.length === 0) return;
    navigator.clipboard?.writeText(uuids.join("\n")).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {},
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
            {ui.count}
          </span>
          <input
            type="number"
            min={1}
            max={MAX_COUNT}
            value={count}
            onChange={(e) =>
              setCount(Math.max(1, Math.min(MAX_COUNT, Math.floor(Number(e.target.value) || 1))))
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          />
        </label>
        <label className="flex items-end gap-2 text-sm text-slate-700 dark:text-slate-300 sm:pb-2">
          <input
            type="checkbox"
            checked={options.uppercase}
            onChange={(e) => setOptions((o) => ({ ...o, uppercase: e.target.checked }))}
            className="h-4 w-4 accent-blue-600"
          />
          {ui.uppercase}
        </label>
        <label className="flex items-end gap-2 text-sm text-slate-700 dark:text-slate-300 sm:pb-2">
          <input
            type="checkbox"
            checked={options.hyphens}
            onChange={(e) => setOptions((o) => ({ ...o, hyphens: e.target.checked }))}
            className="h-4 w-4 accent-blue-600"
          />
          {ui.hyphens}
        </label>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={regenerate}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {ui.regenerate}
        </button>
        <button
          type="button"
          onClick={copyAll}
          disabled={uuids.length === 0}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {copied ? ui.copied : ui.copyAll}
        </button>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
        <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
          {ui.result} <span className="font-normal text-slate-400">({ui.version})</span>
        </span>
        <ul className="space-y-1 font-mono text-sm text-slate-900 dark:text-slate-100">
          {uuids.map((u, i) => (
            <li key={i} className="break-all border-b border-slate-100 py-0.5 last:border-0 dark:border-slate-800">
              {u}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
