import type { InvestmentReturnResult } from "./compute";

interface InvestmentReturnVizProps {
  readonly result: InvestmentReturnResult;
}

export function InvestmentReturnViz({ result }: InvestmentReturnVizProps) {
  const isPositive = result.totalGain >= 0;

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: 360,
        margin: "0 auto",
        padding: "12px 0",
      }}
    >
      {/* Stat cards */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <div
          style={{
            flex: 1,
            background: isPositive ? "#f0fdf4" : "#fef2f2",
            borderRadius: 8,
            padding: "10px 12px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: isPositive ? "#15803d" : "#dc2626",
            }}
          >
            {result.roi >= 0 ? "+" : ""}
            {result.roi.toFixed(1)}%
          </div>
          <div
            style={{ fontSize: 11, color: isPositive ? "#22c55e" : "#ef4444" }}
          >
            ROI
          </div>
        </div>
        <div
          style={{
            flex: 1,
            background: "#eff6ff",
            borderRadius: 8,
            padding: "10px 12px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: "#1d4ed8" }}>
            {result.cagr >= 0 ? "+" : ""}
            {result.cagr.toFixed(1)}%
          </div>
          <div style={{ fontSize: 11, color: "#3b82f6" }}>CAGR</div>
        </div>
      </div>

      {/* Gain bar */}
      <div>
        <div style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>
          Growth
        </div>
        <div
          style={{
            height: 18,
            borderRadius: 9,
            overflow: "hidden",
            background: "#e2e8f0",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(100, Math.abs(result.roi))}%`,
              background: isPositive ? "#22c55e" : "#ef4444",
              borderRadius: 9,
              transition: "width 0.4s",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            color: "#64748b",
            marginTop: 4,
          }}
        >
          <span>
            ${result.finalValue.toLocaleString()} final
          </span>
          <span style={{ color: isPositive ? "#15803d" : "#dc2626" }}>
            {isPositive ? "+" : ""}${result.totalGain.toLocaleString()} gain
          </span>
        </div>
      </div>
    </div>
  );
}
