/**
 * Pythagorean — Pure SVG right triangle with a², b², c² squares on each side
 * (the classic Pythagorean proof visualization). Sides scaled proportionally.
 */

import { useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";

export default function PythagoreanViz({ result }: VizProps) {
  const a = typeof result.a === "number" ? result.a : 3;
  const b = typeof result.b === "number" ? result.b : 4;
  const c = typeof result.c === "number" ? result.c : 5;

  const { tri, sqA, sqB, sqC } = useMemo(() => {
    // Scale so that max side = 80 units in SVG space
    const maxSide = Math.max(a, b, c);
    if (maxSide === 0) return { tri: null, sqA: null, sqB: null, sqC: null };
    const scale = 80 / maxSide;
    const sa = a * scale;
    const sb = b * scale;
    void (c * scale); // sc not used directly — only in sqC's length calculation

    // Triangle vertices — right angle at P0
    // P0 = origin of right angle, P1 along x-axis (leg b), P2 up y-axis (leg a)
    const ox = 120; // origin x
    const oy = 200; // origin y
    const P0 = { x: ox, y: oy };
    const P1 = { x: ox + sb, y: oy };      // leg b along x
    const P2 = { x: ox, y: oy - sa };       // leg a along y (up)

    return {
      tri: { P0, P1, P2 },
      // Square on side a (left side, from P0 to P2)
      sqA: {
        points: [
          P0,
          { x: P0.x - sa, y: P0.y },
          { x: P2.x - sa, y: P2.y },
          P2,
        ],
        label: `a²=${parseFloat((a * a).toFixed(2))}`,
        cx: P0.x - sa / 2,
        cy: (P0.y + P2.y) / 2,
        color: "#bfdbfe",
        stroke: "#3b82f6",
      },
      // Square on side b (bottom, from P0 to P1)
      sqB: {
        points: [
          P0,
          P1,
          { x: P1.x, y: P1.y + sb },
          { x: P0.x, y: P0.y + sb },
        ],
        label: `b²=${parseFloat((b * b).toFixed(2))}`,
        cx: (P0.x + P1.x) / 2,
        cy: P0.y + sb / 2,
        color: "#bbf7d0",
        stroke: "#22c55e",
      },
      // Square on hypotenuse (from P1 to P2)
      sqC: (() => {
        // direction vector from P1 to P2, then perpendicular
        const dx = P2.x - P1.x;
        const dy = P2.y - P1.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        if (len < 0.001) return null;
        const nx = dy / len;  // perpendicular (outward)
        const ny = -dx / len;
        const sc2 = len;
        const P3 = { x: P1.x + nx * sc2, y: P1.y + ny * sc2 };
        const P4 = { x: P2.x + nx * sc2, y: P2.y + ny * sc2 };
        return {
          points: [P1, P3, P4, P2],
          label: `c²=${parseFloat((c * c).toFixed(2))}`,
          cx: (P1.x + P3.x + P4.x + P2.x) / 4,
          cy: (P1.y + P3.y + P4.y + P2.y) / 4,
          color: "#fde68a",
          stroke: "#f59e0b",
        };
      })(),
    };
  }, [a, b, c]);

  if (!tri) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-2 text-base font-semibold">Pythagorean Theorem</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter valid sides to see the visualization.
        </p>
      </div>
    );
  }

  const { P0, P1, P2 } = tri;
  const triPath = `M ${P0.x} ${P0.y} L ${P1.x} ${P1.y} L ${P2.x} ${P2.y} Z`;

  function squarePath(pts: { x: number; y: number }[]): string {
    return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
        Pythagorean Theorem: a² + b² = c²
      </h2>
      <div className="flex justify-center">
        <svg
          viewBox="0 0 340 310"
          width="100%"
          style={{ maxWidth: 380 }}
          aria-label={`Right triangle with a=${a}, b=${b}, c=${c}`}
          role="img"
        >
          {/* Square on a */}
          {sqA && (
            <>
              <path d={squarePath(sqA.points)} fill={sqA.color} stroke={sqA.stroke} strokeWidth={1.5} />
              <text x={sqA.cx} y={sqA.cy} textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e293b">
                {sqA.label}
              </text>
            </>
          )}
          {/* Square on b */}
          {sqB && (
            <>
              <path d={squarePath(sqB.points)} fill={sqB.color} stroke={sqB.stroke} strokeWidth={1.5} />
              <text x={sqB.cx} y={sqB.cy} textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e293b">
                {sqB.label}
              </text>
            </>
          )}
          {/* Square on c (hypotenuse) */}
          {sqC && (
            <>
              <path d={squarePath(sqC.points)} fill={sqC.color} stroke={sqC.stroke} strokeWidth={1.5} />
              <text x={sqC.cx} y={sqC.cy} textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e293b">
                {sqC.label}
              </text>
            </>
          )}
          {/* Triangle */}
          <path d={triPath} fill="rgba(100,116,139,0.15)" stroke="#475569" strokeWidth={2} />
          {/* Right angle marker */}
          <rect
            x={P0.x}
            y={P0.y - 10}
            width={10}
            height={10}
            fill="none"
            stroke="#475569"
            strokeWidth={1.5}
          />
          {/* Side labels */}
          <text x={(P0.x + P2.x) / 2 - 14} y={(P0.y + P2.y) / 2} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">
            a={parseFloat(a.toFixed(4))}
          </text>
          <text x={(P0.x + P1.x) / 2} y={P0.y + 16} textAnchor="middle" fontSize="12" fontWeight="700" fill="#15803d">
            b={parseFloat(b.toFixed(4))}
          </text>
          <text
            x={(P1.x + P2.x) / 2 + 16}
            y={(P1.y + P2.y) / 2}
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill="#b45309"
          >
            c={parseFloat(c.toFixed(4))}
          </text>
        </svg>
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 text-center">
        The three coloured squares have areas a² + b² = c² (blue + green = yellow).
      </p>
    </div>
  );
}
