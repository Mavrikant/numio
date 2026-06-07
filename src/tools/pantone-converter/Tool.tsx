import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { cmykToRgb, hexToRgb, hsvToRgb, nearestPantone, rgbToHex } from "./logic";

type Mode = "hex" | "rgb" | "cmyk" | "hsv";

export default function PantoneConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<Mode>("hex");
  const [hex, setHex] = useState("#E4002B");
  const [rgb, setRgb] = useState({ r: "228", g: "0", b: "43" });
  const [cmyk, setCmyk] = useState({ c: "0", m: "100", y: "81", k: "11" });
  const [hsv, setHsv] = useState({ h: "349", s: "100", v: "89" });

  let inputHex = "";
  let error = "";
  try {
    if (mode === "hex") {
      inputHex = rgbToHex(hexToRgb(hex).r, hexToRgb(hex).g, hexToRgb(hex).b);
    } else if (mode === "rgb") {
      inputHex = rgbToHex(Number(rgb.r), Number(rgb.g), Number(rgb.b));
    } else if (mode === "cmyk") {
      const c = cmykToRgb(Number(cmyk.c), Number(cmyk.m), Number(cmyk.y), Number(cmyk.k));
      inputHex = rgbToHex(c.r, c.g, c.b);
    } else {
      const c = hsvToRgb(Number(hsv.h), Number(hsv.s), Number(hsv.v));
      inputHex = rgbToHex(c.r, c.g, c.b);
    }
  } catch {
    error = ui.invalid;
  }

  let match: ReturnType<typeof nearestPantone> | null = null;
  if (!error && inputHex) {
    try {
      match = nearestPantone(inputHex);
    } catch {
      error = ui.invalid;
    }
  }

  const num = (v: string, set: (s: string) => void, label: string) => (
    <label key={label} className="space-y-1">
      <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">{label}</span>
      <input type="number" className={inputClass + " w-20"} value={v} onChange={(e) => set(e.target.value)} />
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(["hex", "rgb", "cmyk", "hsv"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={
              "rounded-md px-3 py-1.5 text-sm font-medium uppercase " +
              (mode === m
                ? "bg-blue-600 text-white"
                : "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800")
            }
          >
            {m}
          </button>
        ))}
      </div>

      {mode === "hex" && (
        <input className={inputClass} value={hex} onChange={(e) => setHex(e.target.value)} placeholder="#RRGGBB" dir="ltr" />
      )}
      {mode === "rgb" && (
        <div className="flex flex-wrap gap-3">
          {num(rgb.r, (v) => setRgb({ ...rgb, r: v }), "R")}
          {num(rgb.g, (v) => setRgb({ ...rgb, g: v }), "G")}
          {num(rgb.b, (v) => setRgb({ ...rgb, b: v }), "B")}
        </div>
      )}
      {mode === "cmyk" && (
        <div className="flex flex-wrap gap-3">
          {num(cmyk.c, (v) => setCmyk({ ...cmyk, c: v }), "C")}
          {num(cmyk.m, (v) => setCmyk({ ...cmyk, m: v }), "M")}
          {num(cmyk.y, (v) => setCmyk({ ...cmyk, y: v }), "Y")}
          {num(cmyk.k, (v) => setCmyk({ ...cmyk, k: v }), "K")}
        </div>
      )}
      {mode === "hsv" && (
        <div className="flex flex-wrap gap-3">
          {num(hsv.h, (v) => setHsv({ ...hsv, h: v }), "H")}
          {num(hsv.s, (v) => setHsv({ ...hsv, s: v }), "S")}
          {num(hsv.v, (v) => setHsv({ ...hsv, v: v }), "V")}
        </div>
      )}

      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </div>
      ) : match ? (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{ui.inputColor}</div>
              <div className="mt-2 h-16 w-full rounded border border-slate-200 dark:border-slate-700" style={{ backgroundColor: inputHex }} />
              <div className="mt-2 font-mono text-sm text-slate-900 dark:text-slate-100" dir="ltr">
                {inputHex}
              </div>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{ui.nearest}</div>
              <div className="mt-2 h-16 w-full rounded border border-slate-200 dark:border-slate-700" style={{ backgroundColor: match.hex }} />
              <div className="mt-2 flex items-center gap-2">
                <span className="font-mono text-sm text-slate-900 dark:text-slate-100" dir="ltr">
                  {match.hex}
                </span>
                <CopyButton text={match.code} label={ui.copy} copiedLabel={ui.copied} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{ui.code}</span>
            <span className="break-all font-mono text-sm font-semibold text-slate-900 dark:text-slate-100" dir="ltr">
              {match.code}
            </span>
          </div>

          <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
            {ui.approxNote}
          </div>
        </div>
      ) : null}
    </div>
  );
}
