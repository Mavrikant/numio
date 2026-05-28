import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildNeumorphismCss, type NeumorphismConfig } from "./logic";

export default function CssNeumorphismGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [config, setConfig] = useState<NeumorphismConfig>({
    background: "#e0e5ec",
    distance: 12,
    blur: 24,
    intensity: 30,
    radius: 24,
    inset: false,
  });

  const css = buildNeumorphismCss(config);
  const style: React.CSSProperties = {};
  for (const line of css.replace(/box-shadow:\s*/, "box-shadow: ").split(/;\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const prop = line.slice(0, idx).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const val = line.slice(idx + 1).trim().replace(/;$/, "");
    if (prop) (style as Record<string, string>)[prop] = val;
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.background}</span>
          <input type="color" value={config.background} onChange={(e) => setConfig({ ...config, background: e.target.value })} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{config.background}</span>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.distance}: {config.distance}</span>
          <input type="range" min={2} max={50} value={config.distance} onChange={(e) => setConfig({ ...config, distance: Number(e.target.value) })} className="w-full" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.blur}: {config.blur}</span>
          <input type="range" min={2} max={100} value={config.blur} onChange={(e) => setConfig({ ...config, blur: Number(e.target.value) })} className="w-full" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.intensity}: {config.intensity}</span>
          <input type="range" min={5} max={80} value={config.intensity} onChange={(e) => setConfig({ ...config, intensity: Number(e.target.value) })} className="w-full" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.radius}</span>
          <input type="number" min={0} value={config.radius} onChange={(e) => setConfig({ ...config, radius: Number(e.target.value) || 0 })} className={inputClass} />
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={config.inset} onChange={(e) => setConfig({ ...config, inset: e.target.checked })} className="h-4 w-4" />
          <span>{ui.inset}</span>
        </label>
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="flex h-64 items-center justify-center" style={{ background: config.background }}>
          <div className="h-32 w-32" style={style} />
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CSS</span>
          <CopyButton text={css} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TextArea value={css} rows={6} readOnly />
      </div>
    </div>
  );
}
