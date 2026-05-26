import type { MortgageResult } from "./compute";

interface MortgageVizProps {
  readonly result: MortgageResult;
}

export default function MortgageViz({ result }: MortgageVizProps) {
  const total = result.principalAmount + result.totalInterest;
  if (total <= 0) return null;
  const principalPct = (result.principalAmount / total) * 100;
  const interestPct = (result.totalInterest / total) * 100;

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex rounded-full overflow-hidden h-6">
        <div
          className="bg-brand-500"
          style={{ width: `${principalPct}%` }}
          title={`Principal: ${principalPct.toFixed(1)}%`}
        />
        <div
          className="bg-orange-400"
          style={{ width: `${interestPct}%` }}
          title={`Interest: ${interestPct.toFixed(1)}%`}
        />
      </div>
      <div className="flex gap-4 text-xs text-slate-600 flex-wrap">
        <span>● Principal: ${result.principalAmount.toLocaleString()}</span>
        <span>● Interest: ${result.totalInterest.toLocaleString()}</span>
      </div>
      <div className="text-xs text-slate-500 mt-1">
        Monthly payment: ${result.monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
    </div>
  );
}
