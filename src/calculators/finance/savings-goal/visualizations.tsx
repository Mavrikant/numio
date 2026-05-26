import type { SavingsGoalResult } from "./compute";

interface SavingsGoalVizProps {
  readonly result: SavingsGoalResult;
}

export function SavingsGoalViz({ result }: SavingsGoalVizProps) {
  const total = result.totalContributions + result.totalInterest;
  const contributionPct =
    total > 0 ? Math.round((result.totalContributions / total) * 100) : 100;
  const interestPct = 100 - contributionPct;

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: 340,
        margin: "0 auto",
        padding: "12px 0",
      }}
    >
      {/* Stat cards */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
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
            {result.monthsToGoal}
          </div>
          <div style={{ fontSize: 11, color: "#3b82f6" }}>months</div>
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
          <div style={{ fontSize: 22, fontWeight: 700, color: "#15803d" }}>
            {result.yearsToGoal}
          </div>
          <div style={{ fontSize: 11, color: "#22c55e" }}>years</div>
        </div>
      </div>

      {/* Stacked progress bar */}
      <div style={{ marginBottom: 6 }}>
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
              width: `${contributionPct}%`,
              background: "#3b82f6",
              transition: "width 0.4s",
            }}
          />
          <div
            style={{
              width: `${interestPct}%`,
              background: "#22c55e",
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
            Contributions {contributionPct}%
          </span>
          <span>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                background: "#22c55e",
                borderRadius: 2,
                marginRight: 3,
              }}
            />
            Interest {interestPct}%
          </span>
        </div>
      </div>
    </div>
  );
}
