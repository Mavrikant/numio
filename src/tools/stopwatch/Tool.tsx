import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import definition from "./definition";
import { formatElapsed } from "./logic";

export default function StopwatchTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const accumulated = useRef(0);
  const startedAt = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    const tick = () => {
      setElapsed(accumulated.current + (performance.now() - startedAt.current));
      rafRef.current = requestAnimationFrame(tick);
    };
    startedAt.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [running]);

  const toggle = () => {
    if (running) {
      accumulated.current = accumulated.current + (performance.now() - startedAt.current);
      setRunning(false);
    } else {
      setRunning(true);
    }
  };
  const reset = () => {
    setRunning(false);
    accumulated.current = 0;
    setElapsed(0);
    setLaps([]);
  };
  const lap = () => setLaps((prev) => [elapsed, ...prev]);

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-slate-200 p-6 text-center dark:border-slate-700">
        <div className="font-mono text-6xl text-slate-900 tabular-nums dark:text-slate-100">{formatElapsed(elapsed)}</div>
        <div className="mt-4 flex justify-center gap-2">
          <button type="button" onClick={toggle} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {running ? ui.stop : ui.start}
          </button>
          <button type="button" onClick={lap} disabled={!running} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
            {ui.lap}
          </button>
          <button type="button" onClick={reset} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
            {ui.reset}
          </button>
        </div>
      </div>

      {laps.length > 0 && (
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.laps}</span>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700">
            {laps.map((l, i) => (
              <div key={i} className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
                <span className="text-xs text-slate-500">#{laps.length - i}</span>
                <code className="font-mono text-sm tabular-nums text-slate-800 dark:text-slate-100">{formatElapsed(l)}</code>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
