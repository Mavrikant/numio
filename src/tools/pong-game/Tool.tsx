import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { BALL, FIELD, PADDLE, aiPaddleDir, initialState, step, type PongState } from "./logic";

type RightMode = "human" | "cpu";

export default function PongGameTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<PongState>(initialState());
  const keysRef = useRef<Record<string, boolean>>({});
  const [running, setRunning] = useState(false);
  const [rightMode, setRightMode] = useState<RightMode>("cpu");
  const rightModeRef = useRef<RightMode>(rightMode);
  rightModeRef.current = rightMode;
  const [scoreTick, setScoreTick] = useState(0);

  useEffect(() => {
    const down = (e: KeyboardEvent) => { keysRef.current[e.key.toLowerCase()] = true; };
    const up = (e: KeyboardEvent) => { keysRef.current[e.key.toLowerCase()] = false; };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useEffect(() => {
    if (!running) return;
    let raf = 0;
    const loop = () => {
      const leftDir: -1 | 0 | 1 = keysRef.current["w"] ? -1 : keysRef.current["s"] ? 1 : 0;
      let rightDir: -1 | 0 | 1 = 0;
      if (rightModeRef.current === "human") {
        rightDir = keysRef.current["arrowup"] ? -1 : keysRef.current["arrowdown"] ? 1 : 0;
      } else {
        rightDir = aiPaddleDir(stateRef.current, stateRef.current.rightY);
      }
      const prev = stateRef.current;
      const next = step(prev, leftDir, rightDir);
      if (next.leftScore !== prev.leftScore || next.rightScore !== prev.rightScore) {
        setScoreTick((t) => t + 1);
      }
      stateRef.current = next;
      const canvas = canvasRef.current;
      if (canvas) draw(canvas, next);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  useEffect(() => {
    if (canvasRef.current) draw(canvasRef.current, stateRef.current);
  }, [scoreTick]);

  const reset = () => {
    stateRef.current = initialState();
    setScoreTick((t) => t + 1);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.rightMode}</span>
          <select value={rightMode} onChange={(e) => setRightMode(e.target.value as RightMode)} className={inputClass + " w-auto"}>
            <option value="cpu">{ui.cpu}</option>
            <option value="human">{ui.human}</option>
          </select>
        </label>
        <button type="button" onClick={() => setRunning((r) => !r)} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {running ? ui.pause : ui.start}
        </button>
        <button type="button" onClick={reset} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
          {ui.reset}
        </button>
      </div>

      <div className="flex items-baseline justify-center gap-12 text-3xl font-mono text-slate-900 dark:text-slate-100">
        <span>{stateRef.current.leftScore}</span>
        <span className="text-slate-400">:</span>
        <span>{stateRef.current.rightScore}</span>
      </div>

      <canvas
        ref={canvasRef}
        width={FIELD.width}
        height={FIELD.height}
        tabIndex={0}
        className="mx-auto block w-full max-w-2xl rounded-lg border border-slate-200 bg-slate-900 dark:border-slate-700"
      />

      <p className="text-center text-xs text-slate-500 dark:text-slate-400">W / S · ↑ / ↓</p>
    </div>
  );
}

function draw(canvas: HTMLCanvasElement, s: PongState) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, FIELD.width, FIELD.height);

  // Centre line.
  ctx.strokeStyle = "#334155";
  ctx.setLineDash([6, 8]);
  ctx.beginPath();
  ctx.moveTo(FIELD.width / 2, 0);
  ctx.lineTo(FIELD.width / 2, FIELD.height);
  ctx.stroke();
  ctx.setLineDash([]);

  // Paddles + ball.
  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, s.leftY, PADDLE.width, PADDLE.height);
  ctx.fillRect(FIELD.width - PADDLE.width, s.rightY, PADDLE.width, PADDLE.height);
  ctx.fillRect(s.ballX, s.ballY, BALL.size, BALL.size);
}
