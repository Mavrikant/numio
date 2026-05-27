/**
 * Square Footage visualization — shape diagram rendered in pure SVG.
 * Shows the computed area and perimeter with a scaled shape preview.
 */
import type { VizProps } from "@/components/calculator/CalcVizSlot";

function ShapePreview({
  shape,
  inputs,
}: {
  shape: string;
  inputs: Record<string, unknown>;
}) {
  const W = 260;
  const H = 160;
  const pad = 20;
  const innerW = W - pad * 2;
  const innerH = H - pad * 2;

  if (shape === "rectangle") {
    const length = (inputs.length as number) ?? 1;
    const width = (inputs.width as number) ?? 1;
    const ratio = Math.min(innerW / length, innerH / width);
    const rw = length * ratio;
    const rh = width * ratio;
    const rx = pad + (innerW - rw) / 2;
    const ry = pad + (innerH - rh) / 2;
    return (
      <g>
        <rect x={rx} y={ry} width={rw} height={rh} fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth={2} rx={2} />
        {/* dimension labels */}
        <text x={rx + rw / 2} y={ry - 6} textAnchor="middle" fontSize="10" fill="#3b82f6">{length} m</text>
        <text x={rx - 6} y={ry + rh / 2} textAnchor="end" fontSize="10" fill="#3b82f6" transform={`rotate(-90, ${rx - 6}, ${ry + rh / 2})`}>{width} m</text>
      </g>
    );
  }

  if (shape === "circle") {
    const r = (inputs.radius as number) ?? ((inputs.diameter as number) ?? 2) / 2;
    const displayR = Math.min(innerW, innerH) / 2 - 4;
    const cx = W / 2;
    const cy = H / 2;
    return (
      <g>
        <circle cx={cx} cy={cy} r={displayR} fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth={2} />
        <line x1={cx} y1={cy} x2={cx + displayR} y2={cy} stroke="#22c55e" strokeWidth={1.5} strokeDasharray="4,2" />
        <text x={cx + displayR / 2} y={cy - 6} textAnchor="middle" fontSize="10" fill="#22c55e">r={r} m</text>
      </g>
    );
  }

  if (shape === "triangle") {
    const base = (inputs.base as number) ?? 1;
    const height = (inputs.height as number) ?? 1;
    const ratio = Math.min(innerW / base, innerH / height);
    const bw = base * ratio;
    const bh = height * ratio;
    const bx = pad + (innerW - bw) / 2;
    const by = pad + (innerH - bh) / 2;
    const pts = `${bx},${by + bh} ${bx + bw / 2},${by} ${bx + bw},${by + bh}`;
    return (
      <g>
        <polygon points={pts} fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth={2} />
        <text x={bx + bw / 2} y={by + bh + 14} textAnchor="middle" fontSize="10" fill="#f97316">{base} m</text>
        <text x={bx + bw + 6} y={by + bh / 2} fontSize="10" fill="#f97316">{height} m</text>
      </g>
    );
  }

  return null;
}

export default function SquareFootageViz({ inputs, result }: VizProps) {
  const shape = inputs.shape as string;
  const areaM2 = result.areaM2 as number;
  const areaFt2 = result.areaFt2 as number;
  const perimeterM = result.perimeterM as number;
  const perimeterFt = result.perimeterFt as number;

  const shapeLabel = shape.charAt(0).toUpperCase() + shape.slice(1);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">{shapeLabel} — Area & Perimeter</h2>

      <svg viewBox="0 0 260 160" style={{ width: "100%", maxWidth: 320, display: "block", margin: "0 auto" }} aria-label={`${shapeLabel} shape preview`}>
        <ShapePreview shape={shape} inputs={inputs} />
      </svg>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Area", value: `${areaM2.toFixed(3)} m²` },
          { label: "Area", value: `${areaFt2.toFixed(2)} ft²` },
          { label: "Perimeter", value: `${perimeterM.toFixed(2)} m` },
          { label: "Perimeter", value: `${perimeterFt.toFixed(2)} ft` },
        ].map((item, i) => (
          <div key={i} className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-800">
            <div className="text-base font-bold text-blue-600 dark:text-blue-400">{item.value}</div>
            <div className="text-xs text-slate-500">{item.label}</div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        {shapeLabel} shape — area {areaM2.toFixed(3)} m² = {areaFt2.toFixed(2)} ft².
        Perimeter {perimeterM.toFixed(2)} m = {perimeterFt.toFixed(2)} ft.
        Conversion: 1 m² = 10.764 ft².
      </p>
    </div>
  );
}
