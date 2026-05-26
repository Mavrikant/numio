import type { CreditCardPayoffResult } from "./compute";

interface CreditCardPayoffVizProps {
  readonly result: CreditCardPayoffResult;
}

export function CreditCardPayoffViz({ result }: CreditCardPayoffVizProps) {
  const interestPct =
    result.totalPaid > 0
      ? Math.round((result.totalInterest / result.totalPaid) * 100)
      : 0;
  const principalPct = 100 - interestPct;

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
            background: "#fef2f2",
            borderRadius: 8,
            padding: "10px 12px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: "#dc2626" }}>
            {result.monthsToPayoff >= 1200 ? "100yr+" : result.monthsToPayoff}
          </div>
          <div style={{ fontSize: 11, color: "#ef4444" }}>months</div>
        </div>
        <div
          style={{
            flex: 1,
            background: "#fff7ed",
            borderRadius: 8,
            padding: "10px 12px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, color: "#c2410c" }}>
            ${result.totalInterest.toLocaleString()}
          </div>
          <div style={{ fontSize: 11, color: "#f97316" }}>total interest</div>
        </div>
      </div>

      {/* Principal vs Interest bar */}
      <div style={{ marginBottom: 6 }}>
        <div style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>
          Payment breakdown
        </div>
        <div
          style={{
            height: 18,
            borderRadius: 9,
            overflow: "hidden",
            display: "flex",
            background: "#e2e8f0",
          }}
        >
          <div
            style={{
              width: `${principalPct}%`,
              background: "#3b82f6",
              transition: "width 0.4s",
            }}
          />
          <div
            style={{
              width: `${interestPct}%`,
              background: "#ef4444",
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
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                background: "#3b82f6",
                borderRadius: 2,
                marginRight: 3,
              }}
            />
            Principal {principalPct}%
          </span>
          <span>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                background: "#ef4444",
                borderRadius: 2,
                marginRight: 3,
              }}
            />
            Interest {interestPct}%
          </span>
        </div>
      </div>

      {/* Interest savings badge */}
      {result.interestSavings > 0 && (
        <div
          style={{
            marginTop: 12,
            background: "#f0fdf4",
            borderRadius: 8,
            padding: "8px 12px",
            fontSize: 12,
            color: "#15803d",
            textAlign: "center",
          }}
        >
          You save ${result.interestSavings.toLocaleString()} vs minimum payments
        </div>
      )}
    </div>
  );
}
