/**
 * Power Factor visualization — pure SVG power triangle.
 * P (real, horizontal), Q (reactive, vertical), S (apparent, hypotenuse).
 * φ = phase angle, pf = cos(φ) labeled.
 */
import type { VizProps } from "@/components/calculator/CalcVizSlot";

export default function PowerFactorViz({ result }: VizProps) {
  const P = result.realPowerKw as number;
  const Q = Math.abs(result.reactivePowerKvar as number);
  const S = result.apparentPowerKva as number;
  const phi = result.phaseAngleDeg as number;
  const pf = result.powerFactorPf as number;

  // SVG layout — right triangle with P horizontal, Q vertical
  const W = 280;
  const H = 200;
  const pad = 30;

  // Scale to fit: P horizontal, Q vertical
  const maxDim = Math.max(P, Q, 0.001);
  const scaleX = (W - pad * 2) / maxDim;
  const scaleY = (H - pad * 2 - 20) / maxDim;

  const ox = pad;          // origin x
  const oy = H - pad;      // origin y (bottom-left)
  const px = ox + P * scaleX;  // tip of P (bottom-right)
  const py = oy;
  const sx = px;           // tip of S = (P, Q)
  const sy = oy - Q * scaleY;

  // Arc for angle φ
  const arcR = 28;
  const phiRad = (phi * Math.PI) / 180;
  const arcX = ox + arcR * Math.cos(-phiRad); // negative = counter-clockwise from horizontal
  const arcY = oy + arcR * Math.sin(-phiRad);

  // pf quality color
  const pfColor = pf >= 0.95 ? "#22c55e" : pf >= 0.85 ? "#eab308" : "#ef4444";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">Power Triangle</h2>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ width: "100%", maxWidth: 320 }}
          aria-label="Power triangle diagram"
          role="img"
        >
          {/* Triangle fill */}
          <polygon
            points={`${ox},${oy} ${px},${py} ${sx},${sy}`}
            fill="rgba(59,130,246,0.08)"
            stroke="none"
          />

          {/* P — real power (horizontal, blue) */}
          <line x1={ox} y1={oy} x2={px} y2={py} stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" />
          <text
            x={(ox + px) / 2}
            y={oy + 18}
            textAnchor="middle"
            fontSize="12"
            fill="#3b82f6"
            fontWeight="600"
          >
            P = {P.toFixed(2)} kW
          </text>

          {/* Q — reactive power (vertical, orange) */}
          <line x1={px} y1={py} x2={sx} y2={sy} stroke="#f97316" strokeWidth={3} strokeLinecap="round" strokeDasharray="6,3" />
          <text
            x={px + 8}
            y={(py + sy) / 2}
            fontSize="11"
            fill="#f97316"
            fontWeight="600"
          >
            Q = {Q.toFixed(2)} kVAR
          </text>

          {/* S — apparent power (hypotenuse, slate) */}
          <line x1={ox} y1={oy} x2={sx} y2={sy} stroke="#64748b" strokeWidth={2.5} strokeLinecap="round" />
          <text
            x={(ox + sx) / 2 - 22}
            y={(oy + sy) / 2 - 8}
            fontSize="11"
            fill="#64748b"
            fontWeight="600"
          >
            S = {S.toFixed(2)} kVA
          </text>

          {/* φ angle arc */}
          {phi > 1 && (
            <>
              <path
                d={`M ${ox + arcR} ${oy} A ${arcR} ${arcR} 0 0 0 ${arcX} ${arcY}`}
                fill="none"
                stroke="#8b5cf6"
                strokeWidth={1.5}
              />
              <text
                x={ox + arcR + 6}
                y={oy - 8}
                fontSize="10"
                fill="#8b5cf6"
              >
                φ={phi.toFixed(1)}°
              </text>
            </>
          )}

          {/* pf label */}
          <rect x={W - 92} y={8} width={84} height={26} rx={6} fill={pfColor} opacity={0.15} />
          <text x={W - 50} y={25} textAnchor="middle" fontSize="13" fontWeight="700" fill={pfColor}>
            pf = {pf.toFixed(4)}
          </text>
        </svg>

        {/* Side cards */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:w-36">
          {[
            { label: "Real Power", value: `${P.toFixed(2)} kW`, color: "#3b82f6" },
            { label: "Reactive", value: `${Q.toFixed(2)} kVAR`, color: "#f97316" },
            { label: "Apparent", value: `${S.toFixed(2)} kVA`, color: "#64748b" },
            { label: "Power Factor", value: pf.toFixed(4), color: pfColor },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800">
              <div className="text-sm font-bold" style={{ color: item.color }}>
                {item.value}
              </div>
              <div className="text-xs text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Power factor pf = cos(φ) = P / S. A pf ≥ 0.95 is considered excellent.
        Phase angle φ = {phi.toFixed(2)}°. S² = P² + Q².
      </p>
    </div>
  );
}
