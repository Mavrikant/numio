import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { DEFAULT_SETTINGS, formatMmSs, nextPhase, phaseSeconds, type PomodoroPhase, type PomodoroSettings } from "./logic";

const COLOR: Record<PomodoroPhase, string> = {
  focus: "text-red-600 dark:text-red-400",
  shortBreak: "text-green-600 dark:text-green-400",
  longBreak: "text-blue-600 dark:text-blue-400",
};

export default function PomodoroTimerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [settings, setSettings] = useState<PomodoroSettings>(DEFAULT_SETTINGS);
  const [phase, setPhase] = useState<PomodoroPhase>("focus");
  const [remaining, setRemaining] = useState(phaseSeconds("focus", DEFAULT_SETTINGS));
  const [running, setRunning] = useState(false);
  const [completedFocus, setCompletedFocus] = useState(0);
  const endTimeRef = useRef(0);

  // Track wall-clock time, not interval ticks: browsers throttle setInterval
  // in background tabs, which would freeze the countdown.
  useEffect(() => {
    if (!running) return;
    endTimeRef.current = Date.now() + remaining * 1000;
    const tick = () =>
      setRemaining(Math.max(0, Math.round((endTimeRef.current - Date.now()) / 1000)));
    const id = setInterval(tick, 250);
    document.addEventListener("visibilitychange", tick);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", tick);
    };
    // `remaining` is intentionally captured only when `running` flips on.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  useEffect(() => {
    if (remaining > 0) return;
    setRunning(false);
    let nextCompleted = completedFocus;
    if (phase === "focus") nextCompleted = completedFocus + 1;
    const np = nextPhase(phase, nextCompleted, settings);
    setCompletedFocus(nextCompleted);
    setPhase(np);
    setRemaining(phaseSeconds(np, settings));
  }, [remaining, phase, completedFocus, settings]);

  const reset = () => {
    setRunning(false);
    setPhase("focus");
    setRemaining(phaseSeconds("focus", settings));
    setCompletedFocus(0);
  };

  const labelFor = (p: PomodoroPhase) => p === "focus" ? ui.focus : p === "shortBreak" ? ui.shortBreak : ui.longBreak;

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-slate-200 p-6 text-center dark:border-slate-700">
        <div className={"text-sm font-semibold uppercase tracking-wide " + COLOR[phase]}>{labelFor(phase)}</div>
        <div className="my-3 font-mono text-7xl text-slate-900 dark:text-slate-100">{formatMmSs(remaining)}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">{ui.round}: {completedFocus + 1}</div>
        <div className="mt-4 flex justify-center gap-2">
          <button type="button" onClick={() => setRunning((r) => !r)} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {running ? ui.pause : ui.start}
          </button>
          <button type="button" onClick={reset} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
            {ui.reset}
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block space-y-1">
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{ui.focusLen}</span>
          <input type="number" min={1} max={120} value={settings.focusMinutes} onChange={(e) => setSettings({ ...settings, focusMinutes: Number(e.target.value) || 25 })} className={inputClass} />
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{ui.shortLen}</span>
          <input type="number" min={1} max={60} value={settings.shortBreakMinutes} onChange={(e) => setSettings({ ...settings, shortBreakMinutes: Number(e.target.value) || 5 })} className={inputClass} />
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{ui.longLen}</span>
          <input type="number" min={1} max={120} value={settings.longBreakMinutes} onChange={(e) => setSettings({ ...settings, longBreakMinutes: Number(e.target.value) || 15 })} className={inputClass} />
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{ui.roundsLen}</span>
          <input type="number" min={1} max={20} value={settings.roundsBeforeLongBreak} onChange={(e) => setSettings({ ...settings, roundsBeforeLongBreak: Number(e.target.value) || 4 })} className={inputClass} />
        </label>
      </div>
    </div>
  );
}
