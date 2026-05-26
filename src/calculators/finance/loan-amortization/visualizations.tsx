import type { LoanAmortizationResult } from "./compute";

interface LoanAmortizationVizProps {
  readonly result: LoanAmortizationResult;
}

export default function LoanAmortizationViz({ result }: LoanAmortizationVizProps) {
  const total = result.totalPayment;
  if (total <= 0) return null;
  const principalAmt = result.totalPayment - result.totalInterest;
  const principalPct = (principalAmt / total) * 100;
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
        <span>● Principal: ${principalAmt.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
        <span>● Interest: ${result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
      </div>
      <div className="text-xs text-slate-500 mt-1">
        Monthly payment: ${result.monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
    </div>
  );
}
