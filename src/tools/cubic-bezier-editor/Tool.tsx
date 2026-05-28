import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { PRESETS, toCss, type BezierPoints } from "./logic";

const SIZE = 300;

export default function CubicBezierEditorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [points, setPoints] = useState<BezierPoints>({ x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 });
  const [tick, setTick] = useState(0);
  const dragging = useRef<"p1" | "p2" | null>(null);

  const css = toCss(points);
  const pts = {
    p1x: SIZE * points.x1,
    p1y: SIZE * (1 - points.y1),
    p2x: SIZE * points.x2,
    p2y: SIZE * (1 - points.y2),
  };

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!dragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / SIZE));
    const y = Math.max(-0.5, Math.min(1.5, 1 - (e.clientY - rect.top) / SIZE));
    if (dragging.current === "p1") setPoints({ ...points, x1: x, y1: y });
    else setPoints({ ...points, x2: x, y2: y });
  };

  const stop = () => { dragging.current = null; };

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preset}</span>
        <select onChange={(e) => { const p = PRESETS.find((x) => x.name === e.target.value); if (p) setPoints(p.points); }} className={inputClass + " w-auto"}>
          {PRESETS.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
        </select>
      </label>

      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="mx-auto block rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50"
        onPointerMove={onPointerMove}
        onPointerUp={stop}
        onPointerLeave={stop}
      >
        <line x1={0} y1={SIZE} x2={SIZE} y2={SIZE} stroke="#cbd5e1" strokeDasharray="3 3" />
        <line x1={0} y1={0} x2={SIZE} y2={0} stroke="#cbd5e1" strokeDasharray="3 3" />
        <path d={`M 0 ${SIZE} C ${pts.p1x} ${pts.p1y}, ${pts.p2x} ${pts.p2y}, ${SIZE} 0`} stroke="#3b82f6" strokeWidth={3} fill="none" />
        <line x1={0} y1={SIZE} x2={pts.p1x} y2={pts.p1y} stroke="#94a3b8" strokeDasharray="2 2" />
        <line x1={SIZE} y1={0} x2={pts.p2x} y2={pts.p2y} stroke="#94a3b8" strokeDasharray="2 2" />
        <circle cx={pts.p1x} cy={pts.p1y} r={8} fill="#3b82f6" stroke="white" strokeWidth={2} style={{ cursor: "grab" }} onPointerDown={() => (dragging.current = "p1")} />
        <circle cx={pts.p2x} cy={pts.p2y} r={8} fill="#ec4899" stroke="white" strokeWidth={2} style={{ cursor: "grab" }} onPointerDown={() => (dragging.current = "p2")} />
      </svg>

      <div className="flex items-center gap-3">
        <code className="flex-1 overflow-x-auto rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{css}</code>
        <CopyButton text={css} label={ui.copy} copiedLabel={ui.copied} />
      </div>

      <div className="space-y-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.animate}</span>
        <button
          type="button"
          onClick={() => setTick(tick + 1)}
          className="block h-8 w-8 rounded-full bg-blue-600"
          style={{ transform: tick % 2 === 0 ? "translateX(0)" : `translateX(220px)`, transition: `transform 1.2s ${css}` }}
          aria-label="Play"
        />
      </div>
    </div>
  );
}
