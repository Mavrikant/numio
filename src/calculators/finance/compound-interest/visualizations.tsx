import type { CompoundInterestResult } from "./compute";

interface CompoundInterestVizProps {
  readonly result: CompoundInterestResult;
}

export default function CompoundInterestViz({ result }: CompoundInterestVizProps) {
  const total = result.futureValue;
  if (total <= 0) return null;
  const contributionsPct = (result.totalContributions / total) * 100;
  const interestPct = (result.totalInterest / total) * 100;

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex rounded-full overflow-hidden h-6">
        <div
          className="bg-brand-500"
          style={{ width: `${contributionsPct}%` }}
          title={`Contributions: ${contributionsPct.toFixed(1)}%`}
        />
        <div
          className="bg-green-400"
          style={{ width: `${interestPct}%` }}
          title={`Interest: ${interestPct.toFixed(1)}%`}
        />
      </div>
      <div className="flex gap-4 text-xs text-slate-600 flex-wrap">
        <span>● Contributions: ${result.totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
        <span>● Interest Earned: ${result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
      </div>
      <div className="text-xs text-slate-500 mt-1">
        Future Value: ${result.futureValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
    </div>
  );
}
