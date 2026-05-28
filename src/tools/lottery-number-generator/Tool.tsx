import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { PRESETS, drawLottery } from "./logic";

export default function LotteryNumberGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [presetId, setPresetId] = useState(PRESETS[0]!.id);
  const [draw, setDraw] = useState<{ main: number[]; bonus: number[] }>({ main: [], bonus: [] });

  const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[0]!;
  const generate = useCallback(() => setDraw(drawLottery(preset, cryptoRandom)), [preset]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presetId]);

  const ball = (n: number, accent: boolean) => (
    <span
      key={n + (accent ? "-bonus" : "")}
      className={
        "inline-flex h-12 w-12 items-center justify-center rounded-full font-mono text-base font-semibold " +
        (accent
          ? "bg-amber-500 text-white"
          : "bg-blue-600 text-white")
      }
    >
      {n}
    </span>
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preset}</span>
          <select value={presetId} onChange={(e) => setPresetId(e.target.value)} className={inputClass + " w-auto"}>
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
        </label>
        <button type="button" onClick={generate} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.generate}
        </button>
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.main}</span>
          <div className="flex flex-wrap gap-2">{draw.main.map((n) => ball(n, false))}</div>
        </div>
        {draw.bonus.length > 0 && (
          <div className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.bonus}</span>
            <div className="flex flex-wrap gap-2">{draw.bonus.map((n) => ball(n, true))}</div>
          </div>
        )}
      </div>
    </div>
  );
}
