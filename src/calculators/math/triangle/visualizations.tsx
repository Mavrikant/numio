/**
 * Triangle — Pure SVG triangle drawn from the solved sides/angles in the
 * result, with side and angle labels.
 */

import { useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";

const DEG = "°";

/** Compute three triangle vertices given side lengths a, b, c.
 *  Places the triangle with C at origin, B on x-axis. */
function triangleVertices(
  a: number,
  b: number,
  c: number,
): { A: { x: number; y: number }; B: { x: number; y: number }; C: { x: number; y: number } } | null {
  // a = BC, b = AC, c = AB
  // C at origin, B at (a, 0)
  // A by cosine rule: angle at C
  if (a <= 0 || b <= 0 || c <= 0) return null;
  const cosC = (a * a + b * b - c * c) / (2 * a * b);
  if (cosC < -1 || cosC > 1) return null;
  const angC = Math.acos(cosC);
  const Ax = b * Math.cos(angC);
  const Ay = -b * Math.sin(angC); // negative = up in SVG coords before flip
  return {
    A: { x: Ax, y: Ay },
    B: { x: a, y: 0 },
    C: { x: 0, y: 0 },
  };
}

function fmt(n: number): string {
  return Number.isInteger(n) ? String(n) : parseFloat(n.toFixed(2)).toString();
}

export default function TriangleViz({ result }: VizProps) {
  const sA = typeof result.sideA === "number" ? result.sideA : 0;
  const sB = typeof result.sideB === "number" ? result.sideB : 0;
  const sC = typeof result.sideC === "number" ? result.sideC : 0;
  const angA = typeof result.angleA === "number" ? result.angleA : 0;
  const angB = typeof result.angleB === "number" ? result.angleB : 0;
  const angC = typeof result.angleC === "number" ? result.angleC : 0;
  const tType = typeof result.triangleType === "string" ? result.triangleType : "";

  const verts = useMemo(() => triangleVertices(sA, sB, sC), [sA, sB, sC]);

  if (!verts) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-2 text-base font-semibold">Triangle</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter valid triangle measurements to see the visualization.
        </p>
      </div>
    );
  }

  // Scale + center within a 300×220 SVG viewBox
  const VW = 300;
  const VH = 220;
  const PAD = 36;

  const rawXs = [verts.A.x, verts.B.x, verts.C.x];
  const rawYs = [verts.A.y, verts.B.y, verts.C.y];
  const minX = Math.min(...rawXs);
  const maxX = Math.max(...rawXs);
  const minY = Math.min(...rawYs);
  const maxY = Math.max(...rawYs);
  const dX = maxX - minX || 1;
  const dY = maxY - minY || 1;
  const scaleX = (VW - PAD * 2) / dX;
  const scaleY = (VH - PAD * 2) / dY;
  const scale = Math.min(scaleX, scaleY);

  const tx = (x: number) => PAD + (x - minX) * scale;
  const ty = (y: number) => VH - PAD - (y - minY) * scale; // flip y

  const svA = { x: tx(verts.A.x), y: ty(verts.A.y) };
  const svB = { x: tx(verts.B.x), y: ty(verts.B.y) };
  const svC = { x: tx(verts.C.x), y: ty(verts.C.y) };

  // Label offsets (pull labels slightly outside each vertex)
  function labelOffset(
    v: { x: number; y: number },
    opp1: { x: number; y: number },
    opp2: { x: number; y: number },
  ): { x: number; y: number } {
    const cx = (opp1.x + opp2.x) / 2;
    const cy = (opp1.y + opp2.y) / 2;
    const dx = v.x - cx;
    const dy = v.y - cy;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    return { x: v.x + (dx / len) * 14, y: v.y + (dy / len) * 14 };
  }

  // Side midpoints for side labels
  const midBC = { x: (svB.x + svC.x) / 2, y: (svB.y + svC.y) / 2 };
  const midAC = { x: (svA.x + svC.x) / 2, y: (svA.y + svC.y) / 2 };
  const midAB = { x: (svA.x + svB.x) / 2, y: (svA.y + svB.y) / 2 };

  // Pull side labels outward from triangle centroid
  const centX = (svA.x + svB.x + svC.x) / 3;
  const centY = (svA.y + svB.y + svC.y) / 3;
  function sideOffset(m: { x: number; y: number }, dist = 16): { x: number; y: number } {
    const dx = m.x - centX;
    const dy = m.y - centY;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    return { x: m.x + (dx / len) * dist, y: m.y + (dy / len) * dist };
  }

  const lA = labelOffset(svA, svB, svC);
  const lB = labelOffset(svB, svA, svC);
  const lC = labelOffset(svC, svA, svB);

  const sBC = sideOffset(midBC);
  const sAC = sideOffset(midAC);
  const sAB = sideOffset(midAB);

  // Right angle marker at right-angle vertex
  const rightVertex =
    tType === "right"
      ? Math.abs(angA - 90) < 0.1
        ? "A"
        : Math.abs(angB - 90) < 0.1
          ? "B"
          : Math.abs(angC - 90) < 0.1
            ? "C"
            : null
      : null;

  function rightAngleMark(
    v: { x: number; y: number },
    n1: { x: number; y: number },
    n2: { x: number; y: number },
    size = 8,
  ) {
    // Direction vectors toward each neighbor
    const d1 = { x: n1.x - v.x, y: n1.y - v.y };
    const l1 = Math.sqrt(d1.x * d1.x + d1.y * d1.y) || 1;
    const u1 = { x: (d1.x / l1) * size, y: (d1.y / l1) * size };
    const d2 = { x: n2.x - v.x, y: n2.y - v.y };
    const l2 = Math.sqrt(d2.x * d2.x + d2.y * d2.y) || 1;
    const u2 = { x: (d2.x / l2) * size, y: (d2.y / l2) * size };
    const p1 = { x: v.x + u1.x, y: v.y + u1.y };
    const p2 = { x: v.x + u2.x, y: v.y + u2.y };
    const corner = { x: p1.x + u2.x, y: p1.y + u2.y };
    return `M ${p1.x} ${p1.y} L ${corner.x} ${corner.y} L ${p2.x} ${p2.y}`;
  }

  const triPath = `M ${svA.x} ${svA.y} L ${svB.x} ${svB.y} L ${svC.x} ${svC.y} Z`;

  // Type colour
  const typeColor: Record<string, string> = {
    equilateral: "#22c55e",
    isosceles: "#3b82f6",
    right: "#f97316",
    scalene: "#8b5cf6",
  };
  const tColor = typeColor[tType] ?? "#64748b";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex items-center gap-3">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          Triangle
        </h2>
        <span
          className="rounded-full px-2 py-0.5 text-xs font-medium capitalize text-white"
          style={{ backgroundColor: tColor }}
        >
          {tType}
        </span>
      </div>
      <div className="flex justify-center">
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          width="100%"
          style={{ maxWidth: 360 }}
          aria-label={`${tType} triangle with sides ${fmt(sA)}, ${fmt(sB)}, ${fmt(sC)}`}
          role="img"
        >
          {/* Triangle fill */}
          <path d={triPath} fill="rgba(59, 130, 246, 0.12)" stroke="#3b82f6" strokeWidth={2} />

          {/* Right angle marker */}
          {rightVertex === "A" && (
            <path d={rightAngleMark(svA, svB, svC)} fill="none" stroke="#475569" strokeWidth={1.5} />
          )}
          {rightVertex === "B" && (
            <path d={rightAngleMark(svB, svA, svC)} fill="none" stroke="#475569" strokeWidth={1.5} />
          )}
          {rightVertex === "C" && (
            <path d={rightAngleMark(svC, svA, svB)} fill="none" stroke="#475569" strokeWidth={1.5} />
          )}

          {/* Vertex labels A, B, C */}
          <text x={lA.x} y={lA.y} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="700" fill="#1e40af">
            A
          </text>
          <text x={lB.x} y={lB.y} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="700" fill="#1e40af">
            B
          </text>
          <text x={lC.x} y={lC.y} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="700" fill="#1e40af">
            C
          </text>

          {/* Side labels: a (BC), b (AC), c (AB) */}
          <text x={sBC.x} y={sBC.y} textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#334155">
            a={fmt(sA)}
          </text>
          <text x={sAC.x} y={sAC.y} textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#334155">
            b={fmt(sB)}
          </text>
          <text x={sAB.x} y={sAB.y} textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#334155">
            c={fmt(sC)}
          </text>
        </svg>
      </div>
      {/* Angle summary */}
      <div className="mt-3 flex justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
        <span>∠A = {fmt(angA)}{DEG}</span>
        <span>∠B = {fmt(angB)}{DEG}</span>
        <span>∠C = {fmt(angC)}{DEG}</span>
      </div>
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 text-center">
        Drawn proportionally to the solved side lengths.
      </p>
    </div>
  );
}

