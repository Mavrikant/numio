import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildGlassmorphismCss, type GlassmorphismConfig } from "./logic";

export default function CssGlassmorphismGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [config, setConfig] = useState<GlassmorphismConfig>({
    blur: 12,
    transparency: 0.2,
    saturation: 180,
    borderRadius: 16,
    borderOpacity: 0.3,
  });

  const css = buildGlassmorphismCss(config);
  const style: React.CSSProperties = {
    background: `rgba(255, 255, 255, ${config.transparency})`,
    backdropFilter: `blur(${config.blur}px) saturate(${config.saturation}%)`,
    WebkitBackdropFilter: `blur(${config.blur}px) saturate(${config.saturation}%)`,
    border: `1px solid rgba(255, 255, 255, ${config.borderOpacity})`,
    borderRadius: `${config.borderRadius}px`,
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.blur}: {config.blur}</span>
          <input type="range" min={0} max={40} value={config.blur} onChange={(e) => setConfig({ ...config, blur: Number(e.target.value) })} className="w-full" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.transparency}: {config.transparency.toFixed(2)}</span>
          <input type="range" min={0} max={100} value={config.transparency * 100} onChange={(e) => setConfig({ ...config, transparency: Number(e.target.value) / 100 })} className="w-full" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.saturation}</span>
          <input type="number" min={0} max={300} value={config.saturation} onChange={(e) => setConfig({ ...config, saturation: Number(e.target.value) || 100 })} className={inputClass} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.radius}</span>
          <input type="number" min={0} value={config.borderRadius} onChange={(e) => setConfig({ ...config, borderRadius: Number(e.target.value) || 0 })} className={inputClass} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.borderOpacity}: {config.borderOpacity.toFixed(2)}</span>
          <input type="range" min={0} max={100} value={config.borderOpacity * 100} onChange={(e) => setConfig({ ...config, borderOpacity: Number(e.target.value) / 100 })} className="w-full" />
        </label>
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="flex h-72 items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-6">
          <div className="h-40 w-72" style={style} />
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
