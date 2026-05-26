import type { IncomeTaxResult } from "./compute";

interface IncomeTaxVizProps {
  readonly result: IncomeTaxResult;
}

const RATE_COLORS = [
  "#22c55e",
  "#84cc16",
  "#eab308",
  "#f97316",
  "#ef4444",
  "#b91c1c",
  "#7f1d1d",
];

export function IncomeTaxViz({ result }: IncomeTaxVizProps) {
  const maxTax = Math.max(...result.bracketBreakdown.map((b) => b.taxOnBracket), 1);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 360, margin: "0 auto", padding: "12px 0" }}>
      {/* Key stat cards */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <div
          style={{
            flex: 1,
            background: "#fef2f2",
            borderRadius: 8,
            padding: "10px 12px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, color: "#dc2626" }}>
            {result.effectiveRate.toFixed(1)}%
          </div>
          <div style={{ fontSize: 11, color: "#ef4444" }}>Effective Rate</div>
        </div>
        <div
          style={{
            flex: 1,
            background: "#f0fdf4",
            borderRadius: 8,
            padding: "10px 12px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, color: "#15803d" }}>
            ${result.afterTaxIncome.toLocaleString()}
          </div>
          <div style={{ fontSize: 11, color: "#22c55e" }}>After-Tax</div>
        </div>
      </div>

      {/* Bracket breakdown bars */}
      {result.bracketBreakdown.length > 0 && (
        <div>
          <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6 }}>
            Bracket Breakdown
          </div>
          {result.bracketBreakdown.map((b, i) => (
            <div key={b.bracket} style={{ marginBottom: 6 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 10,
                  color: "#475569",
                  marginBottom: 2,
                }}
              >
                <span>{b.rate}%</span>
                <span>${b.taxOnBracket.toLocaleString()}</span>
              </div>
              <div
                style={{
                  height: 8,
                  borderRadius: 4,
                  background: "#e2e8f0",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(b.taxOnBracket / maxTax) * 100}%`,
                    background: RATE_COLORS[i % RATE_COLORS.length],
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
